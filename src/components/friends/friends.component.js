// Import framework specific functions
import { Component, h } from 'preact';
import './friends.style.scss';

import { FriendContent } from "../friend-content/friend-content.component"

export class FriendsComponent extends Component {
    constructor() {
        super();

        this.state = {
            friendsId: [],
        };

        this.refs = {};

        this.search = this.search.bind(this);
        this.showFriends = this.showFriends.bind(this);
    }

    componentWillUpdate() {
        this.showFriends();
    }

    showFriends() {
        let database = firebase.database();
        let user;
        let userID;

        user = firebase.auth().currentUser;
        userID = user.uid;

        let ref = database.ref("users/" + userID + "/friends");

        ref.once('value', snap => {

            let val = snap.val();
            if (val != null) {
                let x = Object.keys(val).map(key => {
                    return val[key];
                })

                this.setState({
                    friendsId: x
                })
            }
            else {
                this.setState({
                    friendsId: []
                })
            }
        })
    }

    removeFriend(id) {
        let database = firebase.database();
        let user;
        let userID;

        user = firebase.auth().currentUser;
        userID = user.uid;

        let ref = database.ref("users/" + userID + "/friends/" + id);
        ref.remove();
        ref.on('child_removed', oldSnap => {
            let index = friendsId.findIndex(x => x.id === oldSnap.key);
            friendsId.splice(index, 1);

            this.setState({
                friendsId: friendsId
            })
        })
    }
   
    search(event) {
        let searchText = event.target.value.toLowerCase();
        console.log(event.target.value);
        if (searchText == "") {
            this.showFriends();
        } else {
            let searchPeople = [];
            firebase.database().ref().child("users").orderByChild('name').startAt(searchText).endAt(searchText + "\uf8ff").on("value", snap => {
                snap.forEach( data => {
                    searchPeople.push(data.key)
                    searchPeople.push(data.key)
                    searchPeople.push(data.key)
                });
                this.setState({
                    friendsId: searchPeople
                })
            })
        }
    }

    render() {
        return (
            <div className="friends-component">
                <input onKeyUp={this.search} placeholder="Search for friends" type="search" />
                <div>
                    {
                        this.state.friendsId.map((ids) => {
                            return (
                                <FriendContent friendId={ids} removeFriend={this.removeFriend} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
