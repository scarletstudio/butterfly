import React from 'react'
import './SchedulesStarter.css'
import { ConversationStarterProps } from './ConversationStarter'

interface SchedulesStarterProps {
    availabilities: Array<{ day: string; hour: number }>
}

export const SchedulesStarterInner = ({ availabilities }: SchedulesStarterProps) => {
    return (
        <div>
            <p>
                You both have similar schedules! If you want to schedule a call together, you are
                both available at these times:
            </p>
            <ul>
                {availabilities.map((time, index) => (
                    <li key={`${time.day}-${time.hour}`}>
                        {time.day} {time.hour}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const SchedulesStarter = ({ chat }: ConversationStarterProps) => (
    <SchedulesStarterInner availabilities={chat?.metadata?.availability || []} />
)

export default SchedulesStarter
