// Import framework specific functions
import { Component, h } from 'preact';
import './profile.style.scss';

export class ProfileComponent extends Component {
    render() {
        return (
            <div className="profile-component">
                <img className="image" src="https://api.adorable.io/avatars/12" alt="John Snow"/>

                <div className="details">
                    <div className="name">
                        John Snow
                    </div>

                    <div className="school-class">
                        XII A
                    </div>
                </div>

                <div className="links">
                    <button>Carnet</button>
                    <button>Prieteni</button>
                    <button>Grupuri</button>
                    <button>Clasa mea</button>
                </div>
            </div>
        )
    }
}
