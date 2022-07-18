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
            { code: 'tutoring-math', name: 'Get tutoring in math' },
            { code: 'watch-recs', name: 'Get show and movie recommendations' },
            { code: 'student-org', name: 'Get information on student organizations' },
            { code: 'commons-food', name: 'Learn more about the commons food' },
            { code: 'hobbies', name: 'Learn more about different hobbies' },
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
        intents: [
            { code: 'tech-careers', name: 'Learn about careers in technology' },
            { code: 'involve-iit', name: 'Get more involved at Illinois Tech' },
            { code: 'watch-recs', name: 'Get show and movie recommendations' },
        ],
        interests: [],
    },
    esi: {
        id: 'esi',
        name: 'Exelon Summer Institute',
        intents: [],
        interests: [],
    },
}
