import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './RateMatch.css'
import { ChatMenuPageProps } from './ChatMenuPage'
import { fetchFromBackend } from '../utils'
import { useCurrentAuthUser } from '../login'

interface RateMatchProps {
    // TODO: Fill out the props for your component
    user: string
    names: string[]
    users: string[]
    generator?: string
    community: string
    match: string
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const RateMatchInner = ({ generator = 'blank', ...props }: RateMatchProps) => {
    const [rating, setRating] = useState<number>(0)
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = () => {
        setIsHovering(true)
    }
    const handleMouseLeave = () => {
        setIsHovering(false)
    }
    
    function changeRating(num: number) {
        if (rating === num) {
            setRating(0)
        } else {
            setRating(num)
        }
    }
    // Suppose we have some callback for when you click the submit button:
    async function submitRating() {
        if (rating === 0) {
            alert('Rating can not be 0')
        } else {
            const ratingData = {
                from_user: props.user,
                value: rating,
                community: props.community,
                match: props.match,
                users: props.users,
                generator,
            }
            await fetchFromBackend({
                route: `/ratings/match_stars`,
                options: {
                    method: 'POST',
                    body: JSON.stringify(ratingData),
                },
            })
            // "Rating successfully submitted."
        }
        setRating(0)
    }
    const numbers = [1, 2, 3, 4, 5]

    return (
        <div>
            <p>
                How was your match with
                <span>
                    {' '}
                    {props.names.map((name, i) => {
                        const index = i
                        return (
                            <span key={`${name}-${index}`}>
                                {name}
                                {props.names.length - 1 === i ? '.' : ','}{' '}
                            </span>
                        )
                    })}
                </span>
            </p>
            <p>Submit a rating so we can give you better matches in the future!</p>
            <div>
                {numbers.map((number, i) => (
                    <button
                        key={`${number}-${1}`}
                        className={rating >= number ? 'selected' : 'unselected'}
                        style={{ cursor: isHovering ? 'pointer' : 'default' }}
                        onClick={() => changeRating(number)}
                        onKeyDown={() => changeRating(number)}
                        type="submit"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className={rating >= number ? 'selected' : 'unselected'}>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </button>
                ))}
            </div>
            <button
                type="submit"
                onClick={submitRating}
                style={{ cursor: isHovering ? 'pointer' : 'default' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                SUBMIT
            </button>
        </div>
    )
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const RateMatch = ({ chat }: ChatMenuPageProps) => {
    const authUser = useCurrentAuthUser()
    const myUID = authUser?.uid
    return (
        <RateMatchInner
            user={myUID}
            names={Object.values(chat.participants).map((user) => user.displayName)}
            users={Object.values(chat.participants).map((user) => user.uid)}
            generator={chat?.metadata?.generator}
            community={chat.communityId}
            match={chat.id}
        />
    )
}

export default RateMatch
