import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm.component";
import Footer from "../../components/Footer/Footer.component";
import './ContactPage.styles.scss';

class ContactPage extends React.Component {
    render() {
        return(
            <div className="contactContainer container-fluid p-0">
                <div className="row">
                    <div className="col-12 mt-4">
                        <h1>We Would Love to Hear From You</h1>
                    </div>
                    <div className="col-12 mt-3 mt-5 p-4">
                        <ContactForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12  mt-5">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage