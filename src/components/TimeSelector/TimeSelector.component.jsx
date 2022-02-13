import React from "react";
import './TimeSelector.styles.scss';
import { connect } from "react-redux";

const TimeSelector = ({serviceDuration, didSelectService}) => {

    const shortDurationArray = [
        {
            timeSlot: '8:00 - 9:00',
            id: 1,
            hasAvailable: true
        },
        {
            timeSlot: '10:00 - 11:00',
            id: 2,
            hasAvailable: true
        },
        {
            timeSlot: '12:00 - 1:00',
            id: 3,
            hasAvailable: true
        },
        {
            timeSlot: '2:00 - 3:00',
            id: 4,
            hasAvailable: true
        },
        {
            timeSlot: '4:00 - 5:00',
            id: 5,
            hasAvailable: true
        },
        {
            timeSlot: '6:00 - 7:00',
            id: 6,
            hasAvailable: true
        }
    ];

    const longDurationArray = [
        {
            timeSlot: '8:00 - 10:00',
            id: 1,
            hasAvailable: true
        },
        {
            timeSlot: '10:00 - 12:00',
            id: 2,
            hasAvailable: true
        },
        {
            timeSlot: '12:00 - 2:00',
            id: 3,
            hasAvailable: true
        },
        {
            timeSlot: '2:00 - 4:00',
            id: 4,
            hasAvailable: true
        },
        {
            timeSlot: '4:00 - 6:00',
            id: 5,
            hasAvailable: true
        },
        {
            timeSlot: '6:00 - 8:00',
            id: 6,
            hasAvailable: true
        }
    ];

    // Creating the Array based on Service Clicked
    let timeSlots =[];
    if(serviceDuration === 'short') {
        timeSlots = shortDurationArray;
        console.log(timeSlots);
    }else if(serviceDuration === 'long') {
        timeSlots = longDurationArray;
        console.log(timeSlots);
    }


    return(
        <div className={`${didSelectService ? 'display' : 'noDisplay'} timeSelectorContainer mt-4 container-fluid`}>
            <h5 className="text-uppercase">Time</h5>
                <div className="row d-flex justify-content-center">
                    {
                        timeSlots.map(time => (
                            <div key={time.id} className="timeContainer col-5 mb-2">
                                <p>{time.timeSlot}</p>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    serviceDuration: state.booking.serviceDuration,
    didSelectService: state.booking.didSelectService
});

export default connect(mapStateToProps)(TimeSelector);