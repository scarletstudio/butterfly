export default interface UserData {
    // ID for the user, unique across the app
    uid: string
    // Name of the user to display in the app
    displayName: string
    // Email the user is authenticated with
    email: string
    // URL of the user's profile image
    photoURL: string
    // Timestamp of latest user login, in milliseconds
    latestLogin: number
}
