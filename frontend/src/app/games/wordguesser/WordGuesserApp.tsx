import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database'

import { WordGuesserGame } from './WordGuesserGame'

/*
 * Hook that returns live state for the word guesser game.
 */
export function useGameState(gameId) {
    const [gameState, setGameState] = useState({})

    useEffect(() => {
        if (!gameId) return () => undefined
        const db = getDatabase()
        const path = `games/wordguesser/${gameId}`
        const gameRef = ref(db, path)
        const unsubscribe = onValue(gameRef, async (snap) => {
            const val = snap.val() || {}
            setGameState(val)
        })
        return unsubscribe
    }, [gameId])

    return gameState
}

async function submitGameGuess(gameId, word) {
    // eslint-disable-next-line no-console
    console.log(gameId, word)
}

export function WordGuesserApp({ gameId }) {
    const gameState = useGameState(gameId)
    const submitGuess = (word) => submitGameGuess(gameId, word)
    return <WordGuesserGame {...{ gameState, submitGuess }} />
}
