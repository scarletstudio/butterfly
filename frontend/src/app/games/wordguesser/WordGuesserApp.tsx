import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database'

import { WordGuesserGame } from './WordGuesserGame'
import { fetchFromBackend } from '../../utils'

interface AppProps {
    gameId: string
}

/*
 * Hook that returns live state for the word guesser game.
 */
export function useGameState(gameId: string) {
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

async function submitGameGuess(gameId: string, word: string) {
    await fetchFromBackend({
        route: `/games/wordguesser/${gameId}/guess`,
        options: {
            method: 'POST',
            body: JSON.stringify({ word }),
        },
    })
}

export function WordGuesserApp({ gameId }: AppProps) {
    const gameState = useGameState(gameId)
    const submitGuess = (word: string) => submitGameGuess(gameId, word)
    return <WordGuesserGame {...{ gameState, submitGuess }} />
}
