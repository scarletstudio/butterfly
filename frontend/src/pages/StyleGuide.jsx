import React from 'react'

import { Message } from '../common/components/Chat'
import { Error } from '../common/components/Errors'
import { UserTile } from '../common/components/User'

const EXAMPLE_PARTICIPANTS = {
    'user-a': { displayName: 'Me' },
    'user-b': { displayName: 'User B' },
    'user-c': { displayName: 'User C' },
    'user-d': { displayName: 'User D' },
}

export default function StyleGuidePage() {
    return (
        <div className="Layout Content">
            <div className="Header">
                <h1 className="BigTitle">Style Guide</h1>
            </div>
            <div className="Page">
                <section className="Section">
                    <h2>Typography</h2>
                    <hr />
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>Paragraph</p>
                </section>
                <section className="Section">
                    <h2>User Elements</h2>
                    <hr />
                    <div className="UserRow">
                        <UserTile
                            user={{
                                displayName: 'Ernesto Saúl',
                                photoURL: 'https://randomuser.me/api/portraits/men/61.jpg',
                            }}
                        />
                        <UserTile
                            user={{
                                displayName: 'Quyên Hương',
                                photoURL: 'https://randomuser.me/api/portraits/women/12.jpg',
                            }}
                        />
                    </div>
                </section>
                <section className="Section">
                    <h2>Chat Elements</h2>
                    <hr />
                    <Message
                        data={{
                            type: 'MESSAGE',
                            from: 'user-a',
                            message: 'Hello,\nThis is a multi-paragraph message I sent!',
                        }}
                        myUserId="user-a"
                        participants={EXAMPLE_PARTICIPANTS}
                    />
                    <Message
                        data={{
                            type: 'MESSAGE',
                            from: 'user-b',
                            message: 'And I am replying to you.',
                        }}
                        myUserId="user-a"
                        participants={EXAMPLE_PARTICIPANTS}
                    />
                    <Message
                        data={{
                            type: 'MESSAGE',
                            from: 'user-c',
                            message: 'I am another participant.',
                        }}
                        myUserId="user-a"
                        participants={EXAMPLE_PARTICIPANTS}
                    />
                    <Message
                        data={{
                            type: 'MESSAGE',
                            from: 'user-d',
                            message: 'And I am yet another participant.',
                        }}
                        myUserId="user-a"
                        participants={EXAMPLE_PARTICIPANTS}
                    />
                </section>
                <section className="Section">
                    <h2>Error Elements</h2>
                    <hr />
                    <Error hasError>
                        <h3>Something went wrong.</h3>
                        <p>We broke it, sorry about that!</p>
                    </Error>
                </section>
                <section className="Section">
                    <h2>Lists</h2>
                    <hr />
                    <h3>Unordered List</h3>
                    <ul>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                        <li>List Item 3</li>
                        <li>
                            List item with a lot of content that should wrap over to the next line.
                        </li>
                    </ul>
                    <h3>Ordered List</h3>
                    <ol>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                        <li>List Item 3</li>
                        <li>
                            List item with a lot of content that should wrap over to the next line.
                        </li>
                    </ol>
                </section>
                <section className="Section">
                    <h2>Page Elements</h2>
                    <hr />
                    <div className="Card">
                        <h3>Card Heading 3</h3>
                        <p>Card Content</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
