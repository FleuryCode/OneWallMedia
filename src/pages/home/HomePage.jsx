import React from 'react';
import './HomePage.styles.scss';

class HomePage extends React.Component {
    render() {
        return(
            <div className='homeContainer d-flex justify-content-center'>
                <h1 className='text-center'>Home</h1>
            </div>
        );
    }
}

export default HomePage;