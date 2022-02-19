import React from 'react';
import Footer from '../../components/Footer/Footer.component';
import './AboutPage.styles.scss';

class AboutPage extends React.Component {
    render() {
        return(
            <div className="aboutContainer container-fluid p-0">
                <div className="row">
                    <div className="col-12 mt-3">
                        <h1>About Us</h1>
                    </div>
                    <div className="col-12 mb-5 mt-3">
                        <h5 className='p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam fugit a autem molestiae mollitia ducimus architecto sed ad, laudantium eaque obcaecati tempore iste saepe vero. Placeat nisi quia ipsum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque inventore a ab debitis odit est soluta doloribus iusto id officia necessitatibus eveniet praesentium, mollitia nihil vel, tenetur culpa, voluptate assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquam atque, voluptatum mollitia eos minus est dolorum dolorem sapiente debitis ipsam natus eveniet deserunt cupiditate repellendus veniam fugit autem fuga.
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default AboutPage;