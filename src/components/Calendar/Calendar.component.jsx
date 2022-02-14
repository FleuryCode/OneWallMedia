import React from "react";
import './Calendar.styles.scss';
import { format, subMonths, addMonths } from "date-fns";
import CalendarDay from "../CalendarDay/CalendarDay.component";
import prevArrow from '../../assets/prevArrow.svg';
import nextArrow from '../../assets/nextArrow.svg';
import { KEYS } from '../../Keys';
import axios from 'axios';

// Redux
import { connect } from "react-redux";
import { setSelectedDate, setDidSelectDay } from '../../redux/booking-info/booking.actions';





class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedDate: props.date,
            displayedMonth: props.month,
            isDateActive: null,
            activeDateId: ''
        }
    }
    render() {

        // CLEAN UP YOUR DATE FORMATS. YOU CAN WRITE IT LIKE THIS. SO MUCH EASIER!!!!!
        // const dateTest = format(new Date(this.state.displayedDate), 'yyyy-MM-dd');
        // console.log(dateTest);

        // Grabbing Information
        const displayedYearMonth = `${format(new Date(this.state.displayedDate), 'yyyy')}-${format(new Date(this.state.displayedDate), "MM")}`;

        const calendarId = KEYS.CALENDAR_ID;
        const apiKey = KEYS.CALENDAR_API;
        let monthEventList = [];
        const generateMonthEventList = () => {
            axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`)
                .then(res => {
                    console.log(`statusCode: ${res.status}`);
                    let rawArray = res.data.items;
                    for (let i = 0; i < rawArray.length; i++) {
                        // For Events with Times
                        if (rawArray[i].start.hasOwnProperty('dateTime')) {
                            if(rawArray[i].start.dateTime.includes(displayedYearMonth)) {
                                monthEventList.push({
                                    id: rawArray[i].id,
                                    startDate: format(new Date(rawArray[i].start.dateTime), 'yyyy-MM-dd'),
                                    description: rawArray[i].description,

                                })
                            }
                        // For All Day Events
                        }else if(rawArray[i].start.hasOwnProperty('date')) {
                            if(rawArray[i].start.date.includes(displayedYearMonth)) {
                                monthEventList.push({
                                    id: rawArray[i].id,
                                    startDate: format(new Date(rawArray[i].start.date), 'yyyy-MM-dd'),
                                    description: rawArray[i].description,

                                })
                            }
                        }
                    }

                    // for (let index = 0; index < rawArray.length; index++) {
                    //     if (res.data.items[index].start.dateTime.includes(displayedYearMonth)) {
                    //         monthEventList.push(res.data.items[index]);
                    //     }

                    // }
                })
                .catch(error => {
                    console.log(error);
                })

                console.log(monthEventList);
        }


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

        const selectedDayClick = (date, isDisabled, id) => {
            if (!isDisabled) {
                this.props.setSelectedDate(date);
                this.props.setDidSelectDay(true);
                this.setState({
                    isDateActive: true,
                    activeDateId: id
                });
            } else {
                console.log('Pick a valid date');
            }

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
                id: (format(new Date(this.state.displayedDate), "yyyy")) + "-" + (format(subMonths(new Date(this.state.displayedDate), 1), "MM")) + "-" + (prevLastDay - x + 1),
                isDisabled: true,
                hasAvailable: false,
                isActive: false,
                handleClick: selectedDayClick
            });
        }
        // Selected Month Days
        for (let i = 1; i <= lastDay; i++) {
            days.push({
                dayNumber: i,
                id: (format(new Date(this.state.displayedDate), "yyyy")) + "-" + (format(new Date(this.state.displayedDate), "MM")) + "-" + (i),
                isDisabled: false,
                hasAvailable: true,  //Change this eventually based on Calendar. Might look at redoing this part
                isActive: false,
                handleClick: selectedDayClick
            });
        }

        // Next Month Days
        for (let j = 1; j <= nextDays; j++) {
            days.push({
                dayNumber: j,
                id: (format(new Date(this.state.displayedDate), "yyyy")) + "-" + (format(addMonths(new Date(this.state.displayedDate), 1), "MM")) + "-" + (j),
                isDisabled: true,
                hasAvailable: false,
                isActive: false,
                handleClick: selectedDayClick
            });
        }
        // Active Day
        for (let i = 0; i < days.length; i++) {
            if (days[i].id === this.state.activeDateId) {
                days[i].isActive = this.state.isDateActive;
            }
        }

        return (
            <div className="calendarContainer container-fluid">
                <div className="row">
                    <div className="col-12 d-flex flex-row justify-content-center align-items-center mt-5">
                        <div onClick={prevMonth} className="prevButton d-flex justify-content-center align-items-center mt-1">
                            <img src={prevArrow} alt="Previous month button" />
                        </div>
                        <h2 className="mb-0 mx-2">{this.state.displayedMonth}</h2>
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
                                date={day.id}
                                dayNumber={day.dayNumber}
                                isDisabled={day.isDisabled}
                                hasAvailable={day.hasAvailable}
                                isActive={day.isActive}
                                handleClick={day.handleClick}
                            />
                        ))}
                    </div>
                </div>
                <div className="row">
                    <button onClick={generateMonthEventList} >Generate List Test Button</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSelectedDate: selectedDate => dispatch(setSelectedDate(selectedDate)),
    setDidSelectDay: didSelectDay => dispatch(setDidSelectDay(didSelectDay))
});

export default connect(null, mapDispatchToProps)(Calendar); //instead of null you can pass the argument that receives data.