import React from "react";
import Calendar from "../../components/Calendar/Calendar.component";
import './BookingPage.styles.scss';
import { format, toDate } from 'date-fns';
import { ServiceList } from "./ServiceList";
import { KEYS } from "../../Keys";

import { connect } from "react-redux";
import CustomDropDown from "../../components/CustomDropDown/CustomDropDown.component";
import TimeSelector from "../../components/TimeSelector/TimeSelector.component";
import CustomInput from '../../components/CustomInput/CustomInput.component';
import { setName, setEmail, setPhone } from '../../redux/booking-info/booking.actions';
import axios from "axios";

class BookingPage extends React.Component {

    
    render() {

        // Redux Variables
        const { selectedDay, didSelectDay, didSelectTime, name, email, phone, setName, setEmail, setPhone } = this.props;

        const date = new Date();
        const month = format(new Date(date), "MMMM");
        // Double check to make sure services are up to date!!!!

        const handleInputChange = (event) => {
            const { value, name } = event.target;
            if (name === 'name') {
                setName(value);
            } else if (name === 'email') {
                setEmail(value);
            } else if (name === 'phone') {
                setPhone(value);
            }
        }
        return (
            <div className="bookingContainer container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Schedule an Appointment</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-11 col-md-7 d-flex justify-content-center my-4 px-5 px-md-4">
                        <Calendar date={date} month={month} />
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center mt-4 mb-auto">
                        <div className={`${didSelectDay ? 'display' : 'noDisplay'} mt-0 mt-md-5`}>
                            <h5 className="displayed-date">{format(new Date(toDate(new Date(selectedDay))), "PPP")}</h5>
                            <CustomDropDown serviceList={ServiceList} />
                            <TimeSelector />
                            <div className={`${didSelectTime ? 'display' : 'noDisplay'} inputs-container mt-4`}>
                                <div className="input-fields">
                                    <CustomInput
                                        handleChange={handleInputChange}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="NAME"
                                        value={name}
                                    />
                                </div>
                                <div className="input-fields mt-4">
                                    <CustomInput
                                        handleChange={handleInputChange}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="EMAIL"
                                        value={email}
                                    />
                                </div>
                                <div className="input-fields mt-4">
                                    <CustomInput
                                        handleChange={handleInputChange}
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="PHONE"
                                        value={phone}
                                    />
                                </div>
                            </div>
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
    selectedService: state.booking.selectedService,
    didSelectTime: state.booking.didSelectTime,
    name: state.booking.name,
    email: state.booking.email,
    phone: state.booking.phone
});

const mapDispatchToProps = (dispatch) => ({
    setName: name => dispatch(setName(name)),
    setEmail: email => dispatch(setEmail(email)),
    setPhone: phone => dispatch(setPhone(phone))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);