// Import framework specific functions
import { Component, h } from 'preact';
import './friend-content.style.scss';

export class FriendContent extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            clasa: "",
            isFriend : false
        }

        this.remove = this.remove.bind(this);
        this.addF = this.addF.bind(this);
    }

    componentWillMount() {
        let database = firebase.database().ref('users/' + this.props.friendId);
        database.once('value', snap => {
            this.setState({
            name: snap.val().name,
            clasa: snap.val().clasa,
            })
        })

        let user;
        let userID;

        user = firebase.auth().currentUser;
        userID = user.uid;

        let db = firebase.database().ref('users/' + userID + '/friends');
        let fr = [];
        
        db.on("value", snap => {
            let val= snap.val();
            let keys=Object.keys(val)
            for(let i=0; i<keys.length;i++){
                let k=keys[i];
                fr.push(val[k]);
            }
            for(let i=0; i<fr.length;i++){
                if (fr[i] == this.props.friendId) {
                    this.setState({
                        isFriend : true
                    })
                    break;
                }
            }
        })
    }

    remove() {
        this.props.removeFriend(this.props.friendId)
    }
    addF() {
        this.setState({
            isFriend : true
        })
        this.props.addFriend(this.props.friendId);
    }

    render() {
        return (
            <div className="friend-content-component">
                <div className="friend-box">
                    <div className="friend-info">
                        <img src='https://api.adorable.io/avatars/6' />
                        <p className="friend-name">{this.state.name}</p>
                        <p className="friend-class">{this.state.clasa}</p>
                    </div>
                    <div className="friend-buttons">
                        <button>Chat</button>
                        {(this.state.isFriend == true) ? <button classsName="radu" onClick={this.remove}>&minus;</button> : <button onClick={this.addF}>&#x2b;</button>}
                    </div>
                </div>
            </div>
        )
    }
}
