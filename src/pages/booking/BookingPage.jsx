import React from "react";
import Calendar from "../../components/Calendar/Calendar.component";
import './BookingPage.styles.scss';
import { format } from 'date-fns';

import { connect } from "react-redux";

class BookingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        // Redux Test
        const {selectedDay, selectedService} = this.props;
        let test5 = selectedDay;
        let test6 = selectedService
        console.log(test5);

        const date = new Date();
        const month = format(new Date(date), "MMMM");
        return (
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
    selectedService: state.booking.selectedService
});

export default connect(mapStateToProps)(BookingPage);