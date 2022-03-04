import React from 'react';
import Jumbotron, { JumbotronItem } from '../../components/Jumbotron/Jumbotron.component';
import './HomePage.styles.scss';
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';
import testImageOne from '../../assets/testImageOne.jpg';
import testImageTwo from '../../assets/testImageTwo.jpg';
import testImageThree from '../../assets/testImageThree.jpg';
import Footer from '../../components/Footer/Footer.component';

// Firebase
import { firestore } from '../../firebase/firebase.utils';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            heroBody: 'Video, Photography, Drone. We pride ourselves on producing the highest quality content for your business needs. Telling your story allows for your customers to connect with you and understand why you do what you do. Nowadays people consume content at an astronomical rate. You need to be able to standout in an ever growing crowd. Let us help tell your story.'
        }
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const textChangesRef = firestore.collection('TextChanges');
        textChangesRef.onSnapshot(async snapshot => {
            const docArray = snapshot.docs;

            // Homepage
            const homePageData = docArray[0].data();
            this.setState({
                heroBody: homePageData['Hero Body'] //MAKE THIS MORE DYNAMIC
            });

        });
    }
    render() {
        // Video Options
        const videoOpts = {
            height: '800px',
            width: '100%',
            playersVars: {
                autoplay: 1,
                modestbranding: 1,
            },
        };

        return (
            <div className='homeContainer container-fluid p-0'>
                <div className="row d-flex justify-content-center m-0">
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
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
                <div className="row m-0 d-flex justify-content-center">
                    <div className="col-12 divider"></div>
                </div>
                <div className="row m-0">
                    <div className="col-12 info-text">
                        <h2>HIGH QUALITY CONTENT{<br />}TO TELL YOUR STORY</h2>
                        <p>{this.state.heroBody}</p>
                    </div>
                </div>
                <div className="row m-0 d-flex justify-content-center">
                    <div className="col-12 divider"></div>
                </div>
                <div className="row m-0">
                    <div className="col-12 p-0 mb-5">
                        <YouTube videoId='qJl6OHd0sUM' opts={videoOpts} />
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;