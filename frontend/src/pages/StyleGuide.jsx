import React from 'react'

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
            <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
            </ul>
            <ol>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
            </ol>
            <h2>Elements</h2>
            <div className="Card">
                <h3>Card Heading 3</h3>
                <p>Card Content</p>
            </div>
        </div>
    )
}
