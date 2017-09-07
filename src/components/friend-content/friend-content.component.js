// Import framework specific functions
import { Component, h } from 'preact';
import './friend-content.style.scss';

export class FriendContent extends Component {
    constructor() {
        super();

        this.name = "";
        this.clasa = "";

        this.remove = this.remove.bind(this);
    }

    componentWillMount() {
        let database = firebase.database().ref('users/' + this.props.friendId);
        database.once('value', snap => {
            this.name = snap.val().name,
                this.clasa = snap.val().clasa
        })
    }

    remove() {
        this.props.removeFriend(this.props.friendId)
    }

    render() {
        return (
            <div className="friend-content-component">
                <div className="friend-box">
                    <div className="friend-info">
                        <img src='https://api.adorable.io/avatars/6' />
                        <p className="friend-name">{this.name}</p>
                        <p className="friend-class">{this.clasa}</p>
                    </div>
                    <div className="friend-buttons">
                        <button>Chat</button>
                        <button className="add-button">&#x2b;</button>
                        <button onClick={this.remove}>&minus;</button>
                    </div>
                </div>
            </div>
        )
    }
}
