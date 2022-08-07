import { useBackendFetchJson } from '../utils'

/*
 * Hook to get the list of blocked users for a given user.
 * @param uid: user ID of the given user.
 * @returns Object of user IDs as keys and their blocked status as values.
 */
export function useFetchBlockedUsers(uid) {
    const [res] = useBackendFetchJson({
        route: `/chat/block/user/${uid}`,
        deps: [uid],
        isValid: uid,
    })
    const blockedUsers = res?.blocks || []

    return blockedUsers
        .filter(({ blocked }) => blocked === true)
        .reduce(
            (agg, user) => ({
                ...agg,
                [user.uid]: user.blocked,
            }),
            {}
        )
}
