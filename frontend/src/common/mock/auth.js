import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

const MOCK_USER_PASSWORD = import.meta.env.VITE_firebase_mockUserPassword

export const MOCK_USERS = [
  {
    displayName: 'Pradeep Balaram',
    email: 'scarletdatastudio+pradeep@gmail.com',
    photoURL: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    displayName: 'Si-Woo Yun-Seo',
    email: 'scarletdatastudio+siwoo@gmail.com',
    photoURL: 'https://randomuser.me/api/portraits/men/92.jpg',
  },
  {
    displayName: 'Ilya Viktoria',
    email: 'scarletdatastudio+ilya@gmail.com',
    photoURL: 'https://randomuser.me/api/portraits/women/31.jpg',
  },
  {
    displayName: 'Asabe Oyibo',
    email: 'scarletdatastudio+asabe@gmail.com',
    photoURL: 'https://randomuser.me/api/portraits/women/89.jpg',
  },
  {
    displayName: 'Ernesto Saúl',
    email: 'scarletdatastudio+ernesto@gmail.com',
    photoURL: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    displayName: 'Quyên Hương',
    email: 'scarletdatastudio+quyen@gmail.com',
    photoURL: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
]
const MOCK_USER_MAP = MOCK_USERS.reduce((a, v) => ({ ...a, [v.email]: v }), {})

export async function signInMockUser(mockUserEmail) {
  const mockUser = MOCK_USER_MAP?.[mockUserEmail]
  if (!mockUser) {
    return {
      user: null,
      signInError: `No mock user for email: '${mockUserEmail}'`,
    }
  }
  try {
    const auth = getAuth()
    const { email, displayName, photoURL } = mockUser
    // Currently, we will only use email and password authentication
    // for mock users. Real users should login with Google.
    const res = await signInWithEmailAndPassword(auth, email, MOCK_USER_PASSWORD)
    const user = res.user
    // Update the Firebase authentication user profile for the mock user
    await updateProfile(auth.currentUser, { displayName, photoURL })
    // Return the authenticated user
    return {
      user,
      signInError: null,
    }
  } catch (err) {
    return {
      user: null,
      signInError: err,
    }
  }
}
