import React from "react";
import './CalendarDay.styles.scss';

const CalendarDay = ({dayNumber, date, hasAvailable, isDisabled, handleClick}) => {
    return(
        <div className="calendarDayContainer">
            <div className="calendarDay notDisabled hasAvailable">
                {dayNumber}
            </div>
        </div>
    );
}

export default CalendarDay;