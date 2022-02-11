import React from "react";
import CustomInput from "../CustomInput/CustomInput.component";
import CustomTextArea from "../CustomTextArea/CustomTextArea.component";
import './ContactForm.styles.scss';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // Message Information
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.firstName);
    }

    render() {
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
                </div>
            </div>
        );
    }
}

export default ContactForm;