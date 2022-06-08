const MOCK_USERS_BY_NAME = {
    pradeep: {
        uid: 'pradeep',
        displayName: 'Pradeep Balaram',
        email: 'scarletdatastudio+pradeep@gmail.com',
        photoURL: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    si_woo: {
        uid: 'si_woo',
        displayName: 'Si-Woo Yun-Seo',
        email: 'scarletdatastudio+siwoo@gmail.com',
        photoURL: 'https://randomuser.me/api/portraits/men/92.jpg',
    },
    ilya: {
        uid: 'ilya',
        displayName: 'Ilya Viktoria',
        email: 'scarletdatastudio+ilya@gmail.com',
        photoURL: 'https://randomuser.me/api/portraits/women/31.jpg',
    },
    asabe: {
        uid: 'asabe',
        displayName: 'Asabe Oyibo',
        email: 'scarletdatastudio+asabe@gmail.com',
        photoURL: 'https://randomuser.me/api/portraits/women/89.jpg',
    },
    ernesto: {
        uid: 'ernesto',
        displayName: 'Ernesto Saúl',
        email: 'scarletdatastudio+ernesto@gmail.com',
        photoURL: 'https://randomuser.me/api/portraits/men/61.jpg',
    },
    quyen: {
        uid: 'quyen',
        displayName: 'Quyên Hương',
        email: 'scarletdatastudio+quyen@gmail.com',
        photoURL: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
}

export function getMockUser(uid) {
    return MOCK_USERS_BY_NAME?.[uid] || {}
}
