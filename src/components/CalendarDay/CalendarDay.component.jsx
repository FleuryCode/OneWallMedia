import React from "react";
import './CalendarDay.styles.scss';

const CalendarDay = ({dayNumber, date, hasAvailable, isDisabled, handleClick}) => {
    return(
        <div className="calendarDayContainer">
            <div onClick={() => handleClick(date, isDisabled)} className={`${isDisabled ? 'isDisabled' : 'notDisabled'} ${hasAvailable ? 'hasAvailable' : 'notAvailable'} calendarDay`}>
                {dayNumber}
            </div>
        </div>
    );
}

export default CalendarDay;