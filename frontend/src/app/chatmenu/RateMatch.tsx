import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './RateMatch.css'
import { ChatMenuPageProps } from './ChatMenuPage'
import { fetchFromBackend } from '../utils'


interface RateMatchProps {
    // TODO: Fill out the props for your component
    names: string[]
    users: string[]

}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const RateMatchInner = (props: RateMatchProps) => {
    const [rating, setRating] = useState<number>(0)
    // Suppose we have some callback for when you click the submit button:
    
    async function submitRating() {
    const communities = await fetchFromBackend(
        {
            route: `/core/user/${props.users[0]}`,
            options: 
                {
                    method: 'GET',
                }
        }
    )
    // Figure out where to get the rating data from
    const ratingData = {
      for_user: "", //ask about
      value: rating,
      community: "string", //ask about 
      match: "string", //ask about
      users: [
        props.users
      ],
      generator: "string",
      // Fill in the other fields according to the API documentation
    }
    const res = await fetchFromBackend(
        {
            route: `/ratings/match_stars`,
            options: 
                {
                    method: 'POST',
                    body: JSON.stringify(ratingData),
                }
        }
    )
    console.log(res?.message)
    // "Rating successfully submitted."
  }
  console.log(props.users)
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
            <button onClick={submitRating}>SUBMIT</button>
        </div>
    )
}



// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const RateMatch = ({ chat, config }: ChatMenuPageProps) => (
    <RateMatchInner names={Object.values(chat.participants).map((user) => user.displayName) } users = {Object.values(chat.participants).map((user) => user.uid)} />
    
)

export default RateMatch
