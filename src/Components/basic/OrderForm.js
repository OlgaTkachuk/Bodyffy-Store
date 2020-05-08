import React, {Component} from 'react';
// import * as emailjs from 'emailjs-com';


class OrderForm extends Component {
    constructor() {
        super();
        this.state= {
            name: '',
            email: '',
            phone: '',
            city: '',
            shipping: 'Nova Poshta',

        }
        this.handleShipping = this.handleShipping.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        // this.handleCompany = this.handleCompany.bind(this);
        this.handleCity = this.handleCity.bind(this);
        // this.handleFile = this.handleFile.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
    }
    handleShipping(event) {
        this.setState({
            shipping: event.target.value
        });
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }


    handlePhone(event) {
        this.setState({
            phone: event.target.value
        });
    }

    handleCity(event) {
        this.setState({
            city: event.target.value
        });
    }

    static sender = 'olgatk01@gmail.com';
    handleSubmit(event) {
        event.preventDefault();

        // const {
        //     REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        //     REACT_APP_EMAILJS_TEMPLATEID: template
        // } = this.props.env;

        this.sendMessage(
            this.state.message,
            this.state.name,
            this.state.company,
            this.state.phone,
            this.state.country,
            this.state.email
        );

        this.setState({
            formSubmitted: true
        });
    }

    sendMessage(templateId, senderEmail, receiverEmail, message, name, company, country, email, file) {
        // let template_params = {
        //     "name": name,
        //     "email": email,
        //     "country": country,
        //     "company": company,
        //     "message": message
        // }

        // let service_id = "default_service";
        // let template_id = "template_fjMPvORY";
        // let user_id = "user_HhA5epB1UYyjVtpzFdDan";
    //     emailjs.send("mailjet", "template_fjMPvORY", {
    //         "email": this.state.email,
    //         "name": this.state.name,
    //         "city": this.state.city,
    //         "phone": this.state.phone,
    //         "shipping": this.state.shipping
    //     }, "user_HhA5epB1UYyjVtpzFdDan")
    //         .then(res => {
    //             console.log("message sent")
    //         })
    //         .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

    render() {
        return (
            <div>
                <form className="form-wrapper" onSubmit={this.handleSubmit}>
                    <input type="text" required value={this.state.name} onChange={this.handleName}
                           placeholder={'Name'}/>
                    <input type="email" required value={this.state.email} placeholder={'email'}
                           onChange={this.handleEmail}/>
                    <input type="text" required value={this.state.phone} placeholder={'phone'}
                           onChange={this.handlePhone}/>
                    <input type="text" value={this.state.city} onChange={this.handleCity}
                           placeholder={'city'}/>
                    <input onChange={this.handleShipping} placeholder={'shipping'}
                              value={this.state.shipping}/>
                    <button type="submit" onSubmit={this.handleSubmit} className="button-dark button-form">
                        {'send_mess'}
                    </button>
                </form>
            </div>
        );
    }
}

export default OrderForm;