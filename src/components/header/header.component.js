// Import framework specific functions
import { Component, h } from 'preact';
import './header.style.scss';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo-wrapper">
                    <div className="logo">
                        betabook
                    </div>
                </div>
                <div className="search-wrapper">
                    <input className="search" type="text" placeholder="Type your search here" />
                </div>
                <div className="links">
                    <button>Register</button>
                    <button className="secondary">Login</button>
                </div>
            </header>
        )
    }
}
