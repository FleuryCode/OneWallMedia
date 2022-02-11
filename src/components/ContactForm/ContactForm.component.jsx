import React from "react";
import CustomInput from "../CustomInput/CustomInput.component";
import CustomTextArea from "../CustomTextArea/CustomTextArea.component";
import CustomButton from "../CustomButton/CustomButton.component";
import ReCAPTCHA from "react-google-recaptcha";
import './ContactForm.styles.scss';
import { KEYS } from "../../Keys";


class ContactForm extends React.Component {
    constructor(props) {
        super(props)

        // RECAPTCHA Ref
        this.myRef = React.createRef();


        this.state = {
            // Message Information
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            // Recaptcha Token
            recaptchaToken: ''
        }
    }

    // Updating Input Values
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.firstName);
    }

    render() {
        // Recaptcha Variables
        const recaptchaRef = this.myRef;
        const recaptchaKey = KEYS.RECAPTCHA_KEY;


        // Recaptcha Function
        const updateRecaptcha = (token) => {
            this.setState({
                recaptchaToken: token
            });
        }

        return (
            <div className="contactFormContainer container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 px-4 mt-4">
                        <CustomInput
                            handleChange={this.handleChange}
                            type='text'
                            id='firstName'
                            name='firstName'
                            placeholder='FIRST NAME'
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="col-12 col-md-6 px-4 mt-4">
                        <CustomInput
                            handleChange={this.handleChange}
                            type='text'
                            id='lastName'
                            name='lastName'
                            placeholder='LAST NAME'
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="col-12 col-md-8 px-4 mt-4">
                        <CustomInput
                            handleChange={this.handleChange}
                            type='email'
                            id='email'
                            name='email'
                            placeholder='EMAIL'
                            value={this.state.email}
                        />
                    </div>
                    <div className="col-12 col-md-4 px-4 mt-4">
                        <CustomInput
                            handleChange={this.handleChange}
                            type='tel'
                            id='phone'
                            name='phone'
                            placeholder='PHONE'
                            value={this.state.phone}
                        />
                    </div>
                    <div className="col-12 px-4 mt-4">
                        <CustomTextArea
                            handleChange={this.handleChange}
                            id='message'
                            name='message'
                            placeholder='MESSAGE'
                            value={this.state.message}
                        />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-2 px-4 mt-4">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={recaptchaKey}
                                onChange={updateRecaptcha}
                            />
                        </div>

                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xxl-1 px-4 my-4">
                            <CustomButton
                            text='SEND'
                            page='contact'
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ContactForm;