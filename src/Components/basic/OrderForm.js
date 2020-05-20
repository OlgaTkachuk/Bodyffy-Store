import React, {Component} from 'react';

import * as emailjs from 'emailjs-com';


class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            city: '',
            // shipping: 'Nova Poshta',
            // address: '',
            cart: JSON.stringify(this.props.cart, null, 2),
            total: this.props.total

        }

        // this.handleShipping = this.handleShipping.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        // this.handleAddress = this.handleAddress.bind(this);
    }

    componentDidMount() {
        console.log(this.props.cart);
    }

    // handleShipping(event) {
    //     this.setState({
    //         shipping: event.target.value
    //     });
    // }
    //
    // handleAddress(event) {
    //     this.setState({
    //         address: event.target.value
    //     })
    // }

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

    // static sender = 'olgatk01@gmail.com';

    handleSubmit(event) {
        event.preventDefault();

        // const {
        //     REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        //     REACT_APP_EMAILJS_TEMPLATEID: template
        // } = this.props.env;

        this.sendMessage();

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
            emailjs.send("mailjet", "bodyffyorder", {
                "email": this.state.email,
                "name": this.state.name,
                "city": this.state.city,
                "phone": this.state.phone,
                // "shipping": this.state.shipping,
                // "address": this.state.address,
                "cart": this.state.cart,
                "total": this.state.total
            }, "user_HhA5epB1UYyjVtpzFdDan")
                .then(res => {
                    prompt("Дякуємо за замовлення! Наш менеджер невдовзі зв'яжеться з Вами.")
                })
                .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

    render() {
        return (
            <div className={'form-header-register order-form'}>
                <p>Заповніть форму, щоб оформити замовлення:</p>

            <div className={'register-wrapper-outer'}>
                <form className="form-wrapper" onSubmit={this.handleSubmit}>
                    <input type="text" className={'input-field'} required value={this.state.name} onChange={this.handleName}
                           placeholder={"Ім'я"}/>
                    <input type="email" className={'input-field'} value={this.state.email} placeholder={"email (необов'язково)"}
                           onChange={this.handleEmail}/>
                    <input type="text" className={'input-field'}  required value={this.state.phone} placeholder={'Телефон'}
                           onChange={this.handlePhone}/>
                    <input type="text" className={'input-field'} value={this.state.city} onChange={this.handleCity}
                           placeholder={'Місто'}/>
                           <br/>
                    {/*<input onChange={this.handleShipping} className={'input-field'} placeholder={'shipping'}*/}
                    {/*       value={this.state.shipping}/>*/}
                    {/*<input onChange={this.handleAddress} className={'input-field'} placeholder={'address'}*/}
                    {/*       value={this.state.address}/>*/}
                    <button type="submit" onSubmit={this.handleSubmit} className="button-form greenblack-button">
                        {'відправити'}
                    </button>
                </form>
            </div>
            </div>
        );
    }
}

export default OrderForm;