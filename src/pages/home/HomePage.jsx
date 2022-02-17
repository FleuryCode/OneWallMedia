import React from 'react';
import Jumbotron, { JumbotronItem } from '../../components/Jumbotron/Jumbotron.component';
import './HomePage.styles.scss';
import { Link } from "react-router-dom";
import testImageOne from '../../assets/testImageOne.jpg';
import testImageTwo from '../../assets/testImageTwo.jpg';
import testImageThree from '../../assets/testImageThree.jpg';


class HomePage extends React.Component {
    render() {
        return (
            <div className='homeContainer container-fluid p-0'>
                <div className="row d-flex justify-content-center m-0">
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 mt-4">
                        <Link to={"/booking"} className="main-button">
                            <h4>BOOK NOW</h4>
                        </Link>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <Jumbotron>
                            <JumbotronItem image={testImageOne} link="booking" heroText="Real Estate Photography" subHeroText="This is the sub hero text" />
                            <JumbotronItem image={testImageTwo} link="booking" heroText="Real Estate Photography" subHeroText="This is the sub hero text" />
                            <JumbotronItem image={testImageThree} link="booking" heroText="Real Estate Photography" subHeroText="This is the sub hero text" />
                        </Jumbotron>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;