import { createRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { useCurrentAuthUser } from '../utils/auth'
import { useGetChatData, useGetMessages, sendMessage } from '../utils/chat'
import { MESSAGE_TYPE, UNKNOWN_USER } from '../utils/constants'
import { formatMatchDate } from '../utils/datetime'
import { Error } from '../components/Errors'
import { UserTile } from '../components/User'

function Message({ data, myUserId, participants }) {
  const { message, from, type, timestamp } = data
  // Only render messages
  if (type !== MESSAGE_TYPE) return null
  const userAuthor = participants?.[from] || UNKNOWN_USER
  // Apply different styles for each participant
  const authorClass = from === myUserId ? 'Mine' : 'Theirs'
  return (
    <div className={`Message ${authorClass}`}>
      <div className="MessageInner">
        <p>{userAuthor.displayName}</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

function ChatMessages({ chatId, chat, myUserId }) {
  const messages = useGetMessages(chatId)
  const isLoaded = chat.isLoaded && messages.length > 0

  const messageEls = isLoaded && messages.map(m => (
    <Message
      key={m.key}
      data={m}
      myUserId={myUserId}
      participants={chat.participants}
    />
  ))

  const loadingEl = (
    <p>No messages yet... Will you start things off?</p>
  )

  return (
    <div className="ChatMessages">
      {isLoaded ? messageEls : loadingEl}
    </div>              
  )
}

function ChatComposer({ chatId, myUserId }) {
  const textRef = createRef()

  const doSend = () => {
    const message = textRef.current.value
    if (!myUserId || !message) return
    sendMessage(chatId, {
      message,
      from: myUserId,
    })
    textRef.current.value = ''
  }

  return (
    <div className="ChatComposer">
      <textarea ref={textRef} className="Input"></textarea>
      <button onClick={doSend} className="Button Send">
        <FontAwesomeIcon icon={faArrowRight} className="IconBefore" />
      </button>
    </div>
  )
}

function ChatHeader({ myUserId, chat }) {
  const userEls = Object
    .values(chat?.participants || {})
    .map((user) => (
      <UserTile key={user.uid} user={user} />
    ))
  const matchDate = formatMatchDate(chat?.release_timestamp)
  return (
    <div className="ChatHeader">
      <h1>Butterfly Chat</h1>
      <p>Your match for the week of {matchDate}.</p>
      <div className="Participants">
        {userEls}
      </div>
    </div>
  )
}

function ChatLoading() {
  return <p>Loading chat...</p>
}

function getChatDisplayError(chatId, chat, myUserId) {
  const participants = chat?.participants || {}
  if (!chat.isLoaded) {
    return null
  } else if (!chat?.exists) {
    return `No chat found for ID: ${chatId}`
  } else if (!(myUserId in participants)) {
    return 'You are not a participant in this chat.'
  }
  return null
}

export function ChatApp({chatId }) {
  const authUser = useCurrentAuthUser()
  const myUserId = authUser?.uid
  const chat = useGetChatData(`${chatId}~${myUserId}`)

  const displayError = getChatDisplayError(chatId, chat, myUserId)
  const isReady = chat.isLoaded && !displayError

  const chatAppEl = (
    <>
      <ChatHeader myUserId={myUserId} chat={chat} />
      <ChatMessages chatId={chatId} myUserId={myUserId} chat={chat} />
      <ChatComposer chatId={chatId} myUserId={myUserId} />
    </>
  )
  
  return (
    <div className="ChatApp">
      {!chat.isLoaded && <ChatLoading />}
      {isReady && chatAppEl}
      <Error hasError={displayError}>
        <h1>No Chat Here...</h1>
        <pre>{displayError}</pre>
      </Error>
    </div>
  )
}
