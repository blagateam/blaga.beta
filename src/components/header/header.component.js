// Import framework specific functions
import { Component, h } from 'preact';
import './header.style.scss';

export class Header extends Component {

    _signOut() {
        firebase.auth().signOut();
    }

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
                    <button onclick={this._signOut}>Logout</button>
                </div>
            </header>
        )
    }
}
