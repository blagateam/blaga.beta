// Import framework specific functions
import { Component, h } from 'preact';
import './profile.style.scss';

export class ProfileComponent extends Component {
    
    constructor(...args) {
        super(...args);

        this.refs = {};
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillUpdate() {
        let database = firebase.database();
        let user;
        let userID;

        user = firebase.auth().currentUser;
        userID = user.uid;

        let ref = database.ref("users/" + userID);

        ref.on('value', function(snapshot){
            document.querySelector(".name").innerHTML = snapshot.val().name;
            
            if (snapshot.val().role == "Elev") {
                if(snapshot.val().clasa == 9)
                    document.querySelector(".school-class").innerHTML = "A IX-A";
                if(snapshot.val().clasa == 10)
                    document.querySelector(".school-class").innerHTML = "A X-A";
                if(snapshot.val().clasa == 11)
                    document.querySelector(".school-class").innerHTML = "A XI-A";
                if(snapshot.val().clasa == 12)
                    document.querySelector(".school-class").innerHTML = "A XII-A";
            }
        })
    }

    handleClick(e){
        this.props.showSelected(e.target.innerHTML);
    }

    render() {
        return (
            <div className="profile-component">
                <img className="image" src="https://api.adorable.io/avatars/12" alt="John Snow"/>

                <div className="details">
                    <div className="name"></div>
                    <div className="school-class"></div>
                </div>

                <div className="links">
                    <button onClick={this.handleClick}>Timeline</button>
                    <button onClick={this.handleClick}>Friends</button>
                    <button>Groups</button>
                    <button>My class</button>
                    <button onClick={this.handleClick}>Archive</button>
                </div>
            </div>
        )
    }
}
