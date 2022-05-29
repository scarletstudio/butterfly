import React from 'react'

import { Message } from '../common/components/Chat'

export default function StyleGuidePage() {
    return (
        <div className="Layout Page Content">
            <h1 className="BigTitle">Style Guide</h1>
            <h2>Typography</h2>
            <hr />
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Paragraph</p>
            <h2>Lists</h2>
            <hr />
            <h3>Unordered List</h3>
            <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
                <li>List item with a lot of content that should wrap over to the next line.</li>
            </ul>
            <h3>Ordered List</h3>
            <ol>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
                <li>List item with a lot of content that should wrap over to the next line.</li>
            </ol>
            <h2>Page Elements</h2>
            <div className="Card">
                <h3>Card Heading 3</h3>
                <p>Card Content</p>
            </div>
            <h2>Chat Elements</h2>
            <Message
                data={{
                    from: 'user-a',
                    type: 'MESSAGE',
                    message: 'Hello,\nThis is a multi-paragraph message I sent!',
                }}
                myUserId="user-a"
                participants={{ 'user-a': { displayName: 'Me' } }}
            />
            <Message
                data={{ from: 'user-b', type: 'MESSAGE', message: 'And I am replying to you.' }}
                myUserId="user-a"
                participants={{ 'user-b': { displayName: 'Someone Else' } }}
            />
        </div>
    )
}
