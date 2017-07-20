// Import framework specific functions
import {Component, h} from 'preact';
import './register.style.scss';

export class RegisterPage extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            loading: false,
            error: null
        };
        this.refs = {};

        this._handleRegister = this._handleRegister.bind(this);
    }

    _handleRegister() {
        let email = this.refs.email.value;
        let pass = this.refs.pass.value;

        this.setState({
            loading: true,
            error: null
        });

        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .catch(e => {
                this.setState({
                    loading: false,
                    error: e
                });
            });
    }

    render() {
        let isLoading = this.state.loading;
        let classNames = [
            'register-form',
            isLoading ? 'loading' : ''
        ];

        return (
            <div className="register-page">
                <div className={classNames.join(' ')}>
                    <h1>Betabook</h1>

                    {this.state.error && (
                        <div className="errors">
                            {this.state.error.message}
                        </div>
                    )}

                    <input ref={(e) => this.refs.email = e} type="text" placeholder="Enter Email" name="email" required/>
                    <input ref={(e) => this.refs.pass = e} type="password" placeholder="Enter Password" name="password" required/>
                    <button disabled={isLoading} onclick={this._handleRegister}>Register</button>
                    <button>Login</button>
                </div>
            </div>
        )
    }
}
