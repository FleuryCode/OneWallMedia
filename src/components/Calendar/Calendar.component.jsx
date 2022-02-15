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
            activeDateId: '',

            rawMonthEventList: []
        }
    }
    generateRawEventList = async () => {
        const calendarId = KEYS.CALENDAR_ID;
        const apiKey = KEYS.CALENDAR_API;
        await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`)
            .then(res => {
                this.setState({
                    rawMonthEventList: res.data.items
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.generateRawEventList();


    }

    render() {

        // CLEAN UP YOUR DATE FORMATS. YOU CAN WRITE IT LIKE THIS. SO MUCH EASIER!!!!!
        // const dateTest = format(new Date(this.state.displayedDate), 'yyyy-MM-dd');
        // console.log(dateTest);

        // Grabbing Information
        console.log('RAW LIST', this.state.rawMonthEventList);
        let monthEventList = [];
        const displayedYearMonth = format(new Date(this.state.displayedDate), "yyyy-MM");
        const { rawMonthEventList } = this.state
        for (let i = 0; i < rawMonthEventList.length; i++) {
            // For Events with Times
            if (rawMonthEventList[i].start.hasOwnProperty('dateTime')) {
                if (rawMonthEventList[i].start.dateTime.includes(displayedYearMonth)) {
                    monthEventList.push({
                        id: rawMonthEventList[i].id,
                        startDate: format(new Date(rawMonthEventList[i].start.dateTime), 'yyyy-MM-dd'),
                        startTime: format(new Date(rawMonthEventList[i].start.dateTime), 'H:mm'),
                        endTime: format(new Date(rawMonthEventList[i].end.dateTime), 'H:mm'),
                        timeSlot: format(new Date(rawMonthEventList[i].start.dateTime), 'H:mm') + '-' + format(new Date(rawMonthEventList[i].end.dateTime), 'H:mm'),
                        description: rawMonthEventList[i].summary,
                    });
                }
                // For All Day Events
            } else if (rawMonthEventList[i].start.hasOwnProperty('date')) {
                if (rawMonthEventList[i].start.date.includes(displayedYearMonth)) {
                    monthEventList.push({
                        id: rawMonthEventList[i].id,
                        startDate: format(new Date(rawMonthEventList[i].start.date), 'yyyy-MM-dd'),
                        startTime: '1:00',
                        endTime: '23:00',
                        timeSlot: '1:00-23:00',
                        description: rawMonthEventList[i].summary,
                    });
                }
            }
        }

        console.log('Filtered', monthEventList);

        // TimeSlot Testing. This is going to suck.
        let timeSlots = [
            {
                id: 1,
                hasAvailable: true
            },
            {
                id: 2,
                hasAvailable: true
            },
            {
                id: 3,
                hasAvailable: true
            },
            {
                id: 4,
                hasAvailable: true
            },
            {
                id: 5,
                hasAvailable: true
            },
            {
                id: 6,
                hasAvailable: true
            }
        ];
        for (let d = 0; d < monthEventList.length; d++) {
            const currentDate = monthEventList[d].startDate;
            if (currentDate === '2022-02-06') { //This is where you would put a dynamic date
                const startString = (monthEventList[d].startTime).split(':');
                const endString = (monthEventList[d].endTime.split(':'));
                // const eventStart = parseFloat(startString[0] + '.' + startString[1]);
                // const eventEnd = parseFloat(endString[0] + '.' + endString[1]);


                const eventStart = 14;
                const eventEnd = 15;


                if (eventStart < 8) {
                    console.log('Event starts before slot time start of 8');
                } else if (eventStart < 10) {
                    console.log('Event starts before slot time start of 10 but after 8');
                } else if (eventStart < 12) {
                    console.log('Event starts before slot time start of 12butt after 10');
                } else if (eventStart < 14) {
                    console.log('Event starts before slot time start of 14 but after 12');
                } else if (eventStart < 16) {
                    console.log('Event starts before slot time start of 16 but after 14');
                    const eventDuration = eventEnd - eventStart;
                    console.log('Duration', eventDuration);
                    if (eventDuration <= 1) {
                        console.log('The 4th time slot now booked');
                    }


                } else if (eventStart < 18) {
                    console.log('Event starts before slot time start of 18 ut after 16')
                }
            }
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
            // Pass Checking equation here.
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
            <div className="calendarContainer container-fluid" >
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
                    <button onClick={this.generateMonthEventList} >Generate List Test Button</button>
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