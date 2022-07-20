/* eslint-disable */

// https://github.com/firebase/quickstart-js/blob/master/messaging/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js')

const firebaseConfig = {
    apiKey: 'AIzaSyCfjxatTVD8kWt_1hHAFDgrOGgXjNw1ZC0',
    authDomain: 'sds-butterfly.firebaseapp.com',
    databaseURL: 'https://sds-butterfly-default-rtdb.firebaseio.com',
    projectId: 'sds-butterfly',
    storageBucket: 'sds-butterfly.appspot.com',
    messagingSenderId: '265457992927',
    appId: '1:265457992927:web:f8b8781a13dd1e4b3fd56a',
}
firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

// https://firebase.google.com/docs/cloud-messaging/js/receive
messaging.onBackgroundMessage(function (payload) {
    console.log(payload)
    // https://stackoverflow.com/a/48900941
    self.addEventListener('push', function (event) {
        console.log('Received a push message', event)

        var title = 'Yay a message.'
        var body = 'We have received a push message.'
        var icon = 'YOUR_ICON'
        var tag = 'simple-push-demo-notification-tag'
        var data = {
            doge: {
                wow: 'such amaze notification data',
            },
        }

        event.waitUntil(
            self.registration.showNotification(title, {
                body: body,
                icon: icon,
                tag: tag,
                data: data,
            })
        )
    })
})
