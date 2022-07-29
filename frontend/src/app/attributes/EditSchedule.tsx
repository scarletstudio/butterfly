import React from 'react'
import './EditSchedule.css'
import { AvailabilityData } from './Schedule'

interface EditScheduleProps {
    // eslint-disable-next-line react/no-unused-prop-types
    schedules: Array<AvailabilityData>
    // eslint-disable-next-line react/no-unused-prop-types
    userScheduleMap: { [day: string]: { [hour: number]: boolean } }
}
const GridHeader = ({ weekdays }) => {
    return (
        <div>
            {weekdays.map((day) => (
                <span key=""> {day}</span>
            ))}
        </div>
    )
}
const GridRow = ({ weekdays, hour }) => {
    return (
        <div>
            <span> {hour} </span>
            {weekdays.map((day) => (
                <span key="">
                    <input type="checkbox" />
                </span>
            ))}
        </div>
    )
}
const GridLayout = () => {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return (
        <div>
            <GridHeader weekdays={weekdays} />
            <GridRow weekdays={weekdays} hour="9am" />
            <GridRow weekdays={weekdays} hour="10am" />
        </div>
    )
}
// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const EditSchedule = ({}: EditScheduleProps) => {
    return (
        <div>
            <GridLayout />
        </div>
    )
}
export default EditSchedule
