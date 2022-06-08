import { MOCK_USERS } from '../../common/mock/auth'

const [PRADEEP, SI_WOO, ILYA, ASABE, ERNESTO, QUYEN] = MOCK_USERS
const MOCK_USERS_BY_NAME = {
    pradeep: PRADEEP,
    si_woo: SI_WOO,
    ilya: ILYA,
    asabe: ASABE,
    ernesto: ERNESTO,
    quyen: QUYEN,
}

export function getMockUser(uid) {
    return MOCK_USERS_BY_NAME?.[uid] || {}
}
