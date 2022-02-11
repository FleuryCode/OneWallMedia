import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm.component";
import './ContactPage.styles.scss';

class ContactPage extends React.Component {
    render() {
        return(
            <div className="contactContainer container-fluid">
                <div className="row">
                    <div className="col-12 mt-4">
                        <h1>We Would Love to Hear From You</h1>
                    </div>
                    <div className="col-12 mt-3">
                        <ContactForm />
                    </div>
                </div>

            </div>
        );
    }
}

export default ContactPage