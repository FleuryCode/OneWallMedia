import React from "react";
import './Calendar.styles.scss';
import { format, subMonths, addMonths } from "date-fns";
import CalendarDay from "../CalendarDay/CalendarDay.component";
import prevArrow from '../../assets/prevArrow.svg';
import nextArrow from '../../assets/nextArrow.svg';





class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedDate: props.date,
            displayedMonth: props.month
        }
    }
    render() {
        // Previous and Next Month Button Click Functions
        const prevMonth = () => {
            let newDate = subMonths(new Date(this.state.displayedDate), 1);
            let newMonth = format(new Date(newDate), "MMMM");
            this.setState({
                displayedDate: newDate,
                displayedMonth: newMonth
            });
        }

        const nextMonth = () => {
            let newDate = addMonths(new Date(this.state.displayedDate), 1);
            let newMonth = format(new Date(newDate), "MMMM");
            this.setState({
                displayedDate: newDate,
                displayedMonth: newMonth
            });
        }

        // Creating Calendar Days Array
        const date = this.state.displayedDate;
        date.setDate(1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const firstDayIndex = date.getDay();
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        const nextDays = 7 - lastDayIndex - 1;

        let days = [];

        // Previous Month Days
        for (let x = firstDayIndex; x > 0; x--) {
            days.push({
                dayNumber: (prevLastDay - x + 1),
                id: (format(new Date(this.state.displayedDate), "yyyy")) + (format(subMonths(new Date(this.state.displayedDate), 1), "MM")) + (prevLastDay - x + 1),
                isDisabled: true,
                hasAvailable: true //Change this eventually based on Calendar. Might look at redoing this part
            });
        }
        // Selected Month Days
        for (let i = 1; i <= lastDay; i++) {
            days.push({
                dayNumber: i,
                id: (format(new Date(this.state.displayedDate), "yyyy")) + (format(new Date(this.state.displayedDate), "MM")) + (i),
                isDisabled: false,
                hasAvailable: true
            });
        }

        // Next Month Days
        for (let j = 1; j <= nextDays; j++) {
            days.push({
                dayNumber: j,
                id: (format(new Date(this.state.displayedDate), "yyyy")) + (format(addMonths(new Date(this.state.displayedDate), 1), "MM")) + (j),
                isDisabled: true,
                hasAvailable: true
            });
        }

        console.log(days);
        return (
            <div className="calendarContainer container-fluid">
                <div className="row">
                    <div className="col-12 d-flex flex-row justify-content-center align-items-center mt-5">
                        <div onClick={prevMonth} className="prevButton d-flex justify-content-center align-items-center mt-1">
                            <img src={prevArrow} alt="Previous month button" />
                        </div>
                        <h2 className="mb-0 mx-3">{this.state.displayedMonth}</h2>
                        <div onClick={nextMonth} className="nextButton d-flex justify-content-center align-items-center mt-1">
                            <img src={nextArrow} alt="Next month button" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-row justify-content-center mt-3 px-5">
                        <div className="dayOfWeek">
                            <p>Sun</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Mon</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Tue</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Wed</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Thu</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Fri</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Sat</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 px-5 days">
                        {days.map(day => (
                            <CalendarDay
                            key={day.id}
                            date = {day.id}
                            dayNumber={day.dayNumber}
                            isDisabled={day.isDisabled}
                            hasAvailable={day.hasAvailable}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

}

export default Calendar