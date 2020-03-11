import React, {Component} from 'react';
// import waist from '../images/waist.svg'

class RegisterPageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formSubmitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        this.setState({
            formSubmitted: true
        });
    }

    render() {
        return (
            <>
            <div>
                <div className={'sign-in-block'}>
                    <div className={'form-header-register'}>
                        <h2 className={'form-title'}>Реєстрація</h2>
                        <p>Створіть новий аккаунт</p>
                        <br/>
                    </div>
                    <div className={'register-wrapper-outer'}>
                        <form className="form-wrapper" onSubmit={this.handleSubmit}>
                            <input type="text" className={'input-field'} required value={this.state.email}
                                   placeholder={'Імя'}
                                   onChange={this.handleEmail}/>
                            <input type="email" className={'input-field'} required value={this.state.email}
                                   placeholder={'e-mail'}
                                   onChange={this.handleEmail}/>
                            <input type="password" className={'input-field'} value={this.state.password}
                                   onChange={this.handlePassword}
                                   placeholder={'Пароль'}/>
                            <input type="password" className={'input-field'} value={this.state.password}
                                   onChange={this.handlePassword}
                                   placeholder={'Повторіть пароль'}/>
                            <input type="text" className={'input-field'} value={this.state.password}
                                   onChange={this.handlePassword}
                                   placeholder={'Стать'}/>
                            <button type="submit" onSubmit={this.handleSubmit} className="button-form">Зареєструватись
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/*<div><img src={waist} className={'waist-pic'}/></div>*/}
            </>
        );
    }
}

export default RegisterPageForm;