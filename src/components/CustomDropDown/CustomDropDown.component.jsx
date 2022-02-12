import React from 'react';
import './CustomDropDown.styles.scss';
import DownArrow from '../../assets/downArrow.svg';

class CustomDropDown extends React.Component {
    constructor() {
        super();
        this.state = {
            menuClicked: false
        }
    }
    render() {
        
        const handleDropClick = () => {
            this.setState({
                menuClicked: !this.state.menuClicked
            });
        }
        return (
            <div className="dropdownContainer mt-5">
                <div onClick={handleDropClick} className="dropdown-selected">
                    <p className='text-uppercase m-0 me-auto'>Services</p>
                    <img src={DownArrow} alt="Service Menu Drop Down" />
                </div>
                <div className={`${this.state.menuClicked ? 'display' : 'noDisplay'} dropdown-items`}>
                    <div className='line-divider'></div>
                    {this.props.serviceList.map(service => (
                        <div key={service.id} className='mt-2 item-container'>
                            <p>{service.service}</p>
                        </div>
                    ))
                    }

                </div>
            </div>
        );
    }

}

export default CustomDropDown;