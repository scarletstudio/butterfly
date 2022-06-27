import { IntentData, InterestData } from '../app/attributes'

export interface CommunityData {
    id: string
    name: string
    intents: Array<IntentData>
    interests: Array<InterestData>
}

export interface CommunityConfig {
    [communityId: string]: CommunityData
}

export const COMMUNITY_CONFIG: CommunityConfig = {
    demo: {
        id: 'demo',
        name: 'Demo Community',
        intents: [
            { code: 'tutoring', name: 'Tutoring' },
            { code: 'tv-movie-recs', name: 'TV/Movie Recommendations' },
        ],
        interests: [
            { code: 'running', name: 'Running' },
            { code: 'biking', name: 'Biking' },
            { code: 'swimming', name: 'Swimming' },
        ],
    },
    sds: {
        id: 'sds',
        name: 'Scarlet Data Studio',
        intents: [],
        interests: [],
    },
    esi: {
        id: 'esi',
        name: 'Exelon Summer Institute',
        intents: [],
        interests: [],
    },
}
