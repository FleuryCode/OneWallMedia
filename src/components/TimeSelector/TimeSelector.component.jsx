import React from "react";
import './TimeSelector.styles.scss';
import { connect } from "react-redux";
import { setSelectedTime, setDidSelectTime } from "../../redux/booking-info/booking.actions";

class TimeSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: false,
            activeId: null
        }
    }
    render() {
        const {serviceDuration, didSelectService, setSelectedTime, setDidSelectTime} = this.props;
        const shortDurationArray = [
            {
                timeSlot: '8:00 - 9:00',
                id: 1,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '10:00 - 11:00',
                id: 2,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '12:00 - 1:00',
                id: 3,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '2:00 - 3:00',
                id: 4,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '4:00 - 5:00',
                id: 5,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '6:00 - 7:00',
                id: 6,
                hasAvailable: true,
                isActive: false
            }
        ];

        const longDurationArray = [
            {
                timeSlot: '8:00 - 10:00',
                id: 1,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '10:00 - 12:00',
                id: 2,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '12:00 - 2:00',
                id: 3,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '2:00 - 4:00',
                id: 4,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '4:00 - 6:00',
                id: 5,
                hasAvailable: true,
                isActive: false
            },
            {
                timeSlot: '6:00 - 8:00',
                id: 6,
                hasAvailable: true,
                isActive: false
            }
        ];

        // Creating the Array based on Service Clicked
        let timeSlots = [];
        if (serviceDuration === 'short') {
            timeSlots = shortDurationArray;
        } else if (serviceDuration === 'long') {
            timeSlots = longDurationArray;
        }
        
        if(this.state.activeId !== null) {
            timeSlots[this.state.activeId - 1].isActive = true;
        }

        const handleTimeClick = (time, id) => {
            setSelectedTime(time);
            setDidSelectTime(true);
            this.setState({
                isActive: true,
                activeId: id
            });
            
        }

        return (
            <div className={`${didSelectService ? 'display' : 'noDisplay'} timeSelectorContainer mt-4 container-fluid`}>
                <h5 className="text-uppercase">Time</h5>
                <div className="row d-flex justify-content-center">
                    {
                        timeSlots.map(time => (
                            <div onClick={() => handleTimeClick(time.timeSlot, time.id)} key={time.id} className={`${time.isActive ? 'isActive' : 'notActive'} timeContainer col-5 mb-2`}>
                                <p>{time.timeSlot}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );

    }
    // } = ({serviceDuration, didSelectService, selectedTime, setSelectedTime, setDidSelectTime}) => {

}

const mapStateToProps = (state) => ({
    serviceDuration: state.booking.serviceDuration,
    didSelectService: state.booking.didSelectService,
    selectedTime: state.booking.selectedTime
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedTime: selectedTime => dispatch(setSelectedTime(selectedTime)),
    setDidSelectTime: didSelectTime => dispatch(setDidSelectTime(didSelectTime))
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeSelector);