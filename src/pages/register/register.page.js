// Import framework specific functions
import { Component, h } from 'preact';
import './register.style.scss';

export class Register extends Component {
    render() {
        return (
        <div id="register-form">
            <h1>Betabook</h1>
            <input type="text" placeholder="Enter Name" name="name" required/>
            <input type="text" placeholder="Enter Email" name="email" required/>
            <input type="password" placeholder="Enter Password" name="password" required/>
            <input type="password" placeholder="Repete Password" name="password" required/>
            <button>Register</button>
            <button>Login</button>
        </div>
        )
    }
}