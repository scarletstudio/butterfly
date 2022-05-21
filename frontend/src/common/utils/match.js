import { useEffect, useState } from 'react'
import { equalTo, getDatabase, onValue, orderByChild, query, ref } from 'firebase/database'
import { DB_PATH } from './constants'

/*
 * Hook to get community matches for a user.
 */
export function useGetMatches(communityId, userId) {
    const [matches, setMatches] = useState([])
    useEffect(() => {
        if (!communityId || !userId) return
        const db = getDatabase()
        const path = `${DB_PATH.MATCHES}/${communityId}`
        const matchesRef = ref(db, path)
        const queryRef = query(matchesRef, orderByChild('for'), equalTo(userId))
        onValue(queryRef, (snap) => {
            const matchMap = snap.val() || {}
            const matchList = Object.values(matchMap)
            setMatches(matchList)
        })
    }, [communityId, userId])
    return matches
}
