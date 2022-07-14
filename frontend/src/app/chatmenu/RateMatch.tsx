import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './RateMatch.css'
import { ChatMenuPageProps } from './ChatMenuPage'
import { fetchFromBackend } from '../utils'


interface RateMatchProps {
    // TODO: Fill out the props for your component
    user: string
    names: string[]
    users: string[]
    generator: string
    community: string
    match: string
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const RateMatchInner = (props: RateMatchProps) => {
    const [rating, setRating] = useState<number>(0)
    const [style, setStyle] = useState<string>("unselected")
    function changeRating(num : number){
        if (rating === num){
            setRating(0),
            setStyle("unselected")
        }
        else{
            setRating(num),
            setStyle("selected")
        }
      }
    // Suppose we have some callback for when you click the submit button:
    async function submitRating() {
    
    // Figure out where to get the rating data from
    const ratingData = {
      from_user: props.user, //ask about
      value: rating,
      community: props.community, //ask about 
      match: props.match, //ask about
      users: [
        props.users
      ],
      generator: props.generator,
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
                    onClick={() => changeRating(1)}
                    className={style}
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <span
                    onClick={() => changeRating(2)}
                    className={style}
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <span
                    onClick={() => changeRating(3)}
                    className={style}
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <span
                    onClick={() => changeRating(4)}
                    className={style}
                >
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <span
                    onClick={() => changeRating(5)}
                    className={style}
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
    <RateMatchInner user="demo" names={Object.values(chat.participants).map((user) => user.displayName) } users = {Object.values(chat.participants).map((user) => user.uid)} generator = {chat.metadata.generator?.length > 1 ? chat.metadata.generator : ""} community = "demo" match = {chat.id}/>
    
)

export default RateMatch
