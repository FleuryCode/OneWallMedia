import React from "react";
import Calendar from "../../components/Calendar/Calendar.component";
import './BookingPage.styles.scss';
import {format} from 'date-fns';

class BookingPage extends React.Component {
    render() {
        const date = new Date();
        const month = format(new Date(date), "MMMM");
        return(
            <div className="bookingContainer container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Schedule an Appointment</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7 d-flex justify-content-center my-4">
                        <Calendar date={date} month={month} />
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingPage;