import React from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.component';
import './HomePage.styles.scss';

class HomePage extends React.Component {
    render() {
        return(
            <div className='homeContainer container-fluid'>
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-5 col-md-3">
                        <div className="main-button">
                            <h4>BOOK NOW</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Jumbotron/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;