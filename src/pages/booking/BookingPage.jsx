import React from "react";
import Calendar from "../../components/Calendar/Calendar.component";
import './BookingPage.styles.scss';
import { format } from 'date-fns';
import { ServiceList } from "./ServiceList";

import { connect } from "react-redux";
import CustomDropDown from "../../components/CustomDropDown/CustomDropDown.component";

class BookingPage extends React.Component {
    render() {

        // Redux Test
        const { selectedDay, didSelectDay } = this.props;
        let reduxOne = selectedDay;
        let reduxTwo = didSelectDay
        console.log(reduxOne);
        console.log(reduxTwo);

        const date = new Date();
        const month = format(new Date(date), "MMMM");
        // Double check to make sure services are up to date!!!!

        return (
            <div className="bookingContainer container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Schedule an Appointment</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 col-md-7 d-flex justify-content-center my-4 px-5 px-md-4">
                        <Calendar date={date} month={month} />
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center mt-4 mb-auto">
                        <div className={`${didSelectDay ? 'display' : 'noDisplay'}`}>
                            <CustomDropDown serviceList={ServiceList} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button>Test Submit Button</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedDay: state.booking.selectedDay,
    didSelectDay: state.booking.didSelectDay,
    selectedService: state.booking.selectedService
});

export default connect(mapStateToProps)(BookingPage);