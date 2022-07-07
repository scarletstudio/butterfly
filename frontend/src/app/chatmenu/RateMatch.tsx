import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './RateMatch.css'
import { ChatMenuPageProps } from './ChatMenuPage'


interface RateMatchProps {
    // TODO: Fill out the props for your component
    names: string[]
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern

const RateMatchInner = (props: RateMatchProps) => {
    const [color1, setColor1] = useState<string>('blue')
    const [rating, setRating] = useState<number>(0)
    return (
        <div>
            <p>
                How was your match with
                <span>
                    {' '}
                    {props.names.map((name, i) => (
                        <span>
                            {name}
                            {props.names.length - 1 === i ? '.' : ','}{' '}
                        </span>
                    ))}
                </span>
            </p>
            <p>Submit a rating so we can give you better matches in the future!</p>
            <div>
                <span
                    onClick={() => (rating === 1 ? setRating(0) : setRating(1))}
                    style={{ color: rating >= 1 ? 'red' : 'blue', fontSize: 50 }}
                    id="star1"
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <span
                    onClick={() => (rating === 2 ? setRating(0) : setRating(2))}
                    style={{ color: rating >= 2 ? 'red' : 'blue', fontSize: 50 }}
                    id="star2"
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <span
                    onClick={() => (rating === 3 ? setRating(0) : setRating(3))}
                    style={{ color: rating >= 3 ? 'red' : 'blue', fontSize: 50 }}
                    id="star3"
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <span
                    onClick={() => (rating === 4 ? setRating(0) : setRating(4))}
                    style={{ color: rating >= 4 ? 'red' : 'blue', fontSize: 50 }}
                    id="star4"
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <span
                    onClick={() => (rating === 5 ? setRating(0) : setRating(5))}
                    style={{ color: rating >= 5 ? 'red' : 'blue', fontSize: 50 }}
                    id="star5"
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
            </div>
            <button>SUBMIT</button>
        </div>
    )
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const RateMatch = ({ chat, config }: ChatMenuPageProps) => (
    <RateMatchInner names={Object.values(chat.participants).map((user) => user.displayName)} />
)

export default RateMatch
