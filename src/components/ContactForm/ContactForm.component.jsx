import React from "react";
import CustomInput from "../CustomInput/CustomInput.component";
import CustomTextArea from "../CustomTextArea/CustomTextArea.component";
import CustomButton from "../CustomButton/CustomButton.component";
import ReCAPTCHA from "react-google-recaptcha";
import './ContactForm.styles.scss';
import { KEYS } from "../../Keys";
import axios from "axios";
import CustomMessage from "../CustomMessage/CustomMessage.component";


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
            recaptchaToken: '',
            // Message Sending
            messageSending: false,
            messageSent: false,
            isMessageError: false,
            displayMessageText: ''
        }
    }

    // Updating Input Values
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        // Recaptcha Variables
        const recaptchaRef = this.myRef;
        const recaptchaKey = KEYS.RECAPTCHA_KEY;
        // FormSpark Variables
        const formSparkId = KEYS.FORMSPARK_ID;
        const formSparkUrl = `https://submit-form.com/${formSparkId}`;


        // Recaptcha Function
        const updateRecaptcha = (token) => {
            this.setState({
                recaptchaToken: token
            });
        }

        // Sending Function With Checks
        const sendMessage = async (event) => {
            const { firstName, lastName, email, phone, message } = this.state;
            if (firstName !== '' && lastName !== '' && email !== '' && phone !== '' && message !== '') {
                event.preventDefault();
                this.setState({
                    messageSending: true
                });
                await sendMessageAxios();
                this.setState({
                    messageSending: false,
                });

            } else {
                this.setState({
                    messageSent: true,
                    isMessageError: true,
                    displayMessageText: 'Please fill in all the information'
                })
            }



        }


        // Sending Message Function
        const sendMessageAxios = async () => {
            const { firstName, lastName, email, phone, message, recaptchaToken } = this.state;
            const payload = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message,
                "g-recaptcha-response": recaptchaToken
            };

            // Posting to FormSpark via axios
            try {
                // Sending to FormSpark Servers
                await axios.post(formSparkUrl, payload);
                // Resetting input fields to be empty
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                    recaptchaToken: '',
                    messageSent: true,
                    isMessageError: false,
                    displayMessageText: 'Thank you for your message'
                });
                recaptchaRef.current.reset();
            } catch (error) {
                this.setState({
                    messageSent: true,
                    isMessageError: true,
                    displayMessageText: 'Sorry, something went wrong'
                });
            }
        };

        return (
            <div className="contactFormContainer container-fluid">
                <form>
                    <div className="row">
                        <div className="col-12 col-md-6 px-4 mt-5">
                            <CustomInput
                                handleChange={this.handleChange}
                                type='text'
                                id='firstName'
                                name='firstName'
                                placeholder='FIRST NAME *'
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="col-12 col-md-6 px-4 mt-5">
                            <CustomInput
                                handleChange={this.handleChange}
                                type='text'
                                id='lastName'
                                name='lastName'
                                placeholder='LAST NAME *'
                                value={this.state.lastName}
                            />
                        </div>
                        <div className="col-12 col-md-8 px-4 mt-5">
                            <CustomInput
                                handleChange={this.handleChange}
                                type='email'
                                id='email'
                                name='email'
                                placeholder='EMAIL *'
                                value={this.state.email}
                            />
                        </div>
                        <div className="col-12 col-md-4 px-4 mt-5">
                            <CustomInput
                                handleChange={this.handleChange}
                                type='tel'
                                id='phone'
                                name='phone'
                                placeholder='PHONE *'
                                value={this.state.phone}
                            />
                        </div>
                        <div className="col-12 px-4 mt-5">
                            <CustomTextArea
                                handleChange={this.handleChange}
                                id='message'
                                name='message'
                                placeholder='MESSAGE *'
                                value={this.state.message}
                            />
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-2 px-4 mt-5">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={recaptchaKey}
                                    onChange={updateRecaptcha}
                                />
                            </div>
                        </div>
                        <div className="row p-0">
                            <div className="col-12 mt-2 mt-lg-0">
                                <CustomMessage
                                message={this.state.displayMessageText}
                                display={this.state.messageSent}
                                isError={this.state.isMessageError}
                                />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center p-0">
                            <div className="col-4 col-sm-4 col-md-3 col-lg-2 px-4 my-4 d-flex justify-content-center">
                                <CustomButton
                                    type='submit'
                                    text='SEND'
                                    page='contact'
                                    messageSending={this.state.messageSending}
                                    handleClick={sendMessage}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;