import React, {Component} from 'react';

// import waist from '../images/waist.svg'

class RegisterPageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_repeat: '',
            formSubmitted: false,
            gender: 'male'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordRepeat = this.handlePasswordRepeat.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleGender = this.handleGender.bind(this);
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handlePasswordRepeat(event) {
        this.setState({
            password_repeat: event.target.value
        })
    }

    handleGender(event) {
        this.setState({
            gender: event.target.value
        })
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
                                <input type="text" className={'input-field'} required value={this.state.name}
                                       placeholder={'Імя'}
                                       onChange={this.handleName}/>
                                <input type="email" className={'input-field'} required value={this.state.email}
                                       placeholder={'e-mail'}
                                       onChange={this.handleEmail}/>
                                <input type="password" className={'input-field'} required value={this.state.password}
                                       onChange={this.handlePassword}
                                       placeholder={'Пароль'}/>
                                <input type="password" className={'input-field'} required
                                       value={this.state.password_repeat}
                                       onChange={this.handlePasswordRepeat}
                                       placeholder={'Повторіть пароль'}/>
                                <div className={'radio-form'}>
                                    <label>
                                        <input type="radio" className={'input-field'} value="male"
                                               checked={this.state.gender === 'male'}
                                               onChange={this.handleGender}/>
                                        male
                                    </label>
                                </div>
                                <div className={'radio-form'}>
                                    <label>
                                        <input type="radio" className={'input-field'} value="female"
                                               checked={this.state.gender === 'female'}
                                               onChange={this.handleGender}/>
                                        female
                                    </label>
                                </div>
                                <button type="submit" onSubmit={this.handleSubmit}
                                        className="button-form greenblack-button">Зареєструватись
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