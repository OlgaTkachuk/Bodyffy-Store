import React, {Component} from 'react';

class SigninBlock extends Component {
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
    }  handleSubmit(event) {
        this.setState({
            formSubmitted:true
        });
    }
    render() {
        return (
            <div className={'sign-in-block'}>
                <div className={'form-header'}>
                <h2 className={'form-title'}>Sign In</h2>
                <p>Sign in to your account</p>
                </div>
                <form className="form-wrapper" onSubmit={this.handleSubmit}>
                    <input type="email" className={'input-field'} required value={this.state.email} placeholder={'e-mail'}
                           onChange={this.handleEmail}/>
                    <input type="password" className={'input-field'} value={this.state.password} onChange={this.handlePassword}
                           placeholder={'Пароль'}/>
                    <button type="submit" onSubmit={this.handleSubmit} className="button-form">Увійти</button>
                </form>

            </div>
        );
    }
}

export default SigninBlock;