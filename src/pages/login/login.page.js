// Import framework specific functions
import { Component, h } from 'preact';

import './login.style.scss';

export class LoginPage extends Component {

    constructor(...args) {
        super(...args);

        this._handleLogin = this._handleLogin.bind(this);
        this._handleKeyLogin = this._handleKeyLogin.bind(this);

        this.state = {
            loading: false
        };
        this.refs = {};
    }

    _handleKeyLogin(e) {
        if (e.keyCode === 13) {
            this._handleLogin();
        }
    }

    _handleLogin() {
        let email = this.refs.email.value;
        let pass = this.refs.pass.value;

        if (email && pass) {
            this.setState({
                loading: true,
                error: false
            });

            firebase.auth().signInWithEmailAndPassword(email, pass).catch(err => {
                this.setState({
                    loading: false,
                    error: err && err
                });
            });
        } else {
            console.log('provide a email/pass');
        }
    }

    render() {
        let loading = this.state.loading;
        let classes = [
            'container',
            'login-page',
            !!loading ? 'loading' : ''
        ];

        return (
            <div className={classes.join(' ')}>
                <div className="login-form">
                    <h1>
                        Betabook
                    </h1>
                    <p>
                        Please fill in your details to log-in
                    </p>

                    <input disabled={loading} onkeydown={this._handleKeyLogin} type="text" placeholder="Your email" ref={(el) => this.refs.email = el} />
                    <input disabled={loading} onkeydown={this._handleKeyLogin} type="password" placeholder="Your password" ref={(el) => this.refs.pass = el} />
                    <button disabled={loading} onclick={this._handleLogin}>Login</button>
                    <p className="pRegister">You don't have an account? <a href="/register">Register</a></p>
                </div>
                {this.state.error && (
                        <div className="error">
                            {this.state.error.message}
                        </div>
                    )}
            </div>
        )
    }
}