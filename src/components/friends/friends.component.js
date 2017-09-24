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

        this.search = this.search.bind(this);
        this.showFriends = this.showFriends.bind(this);
        this.removeFriend = this.removeFriend.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

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
        let dbFriends = [];
        ref.once('value', snap=>{
            let val= snap.val();
            let keys=Object.keys(val)
            for(let i=0; i<keys.length;i++){
                let k=keys[i];
                dbFriends.push(val[k]);
            }
            this.setState({
                friendsId:dbFriends
            })
        })
    }

    removeFriend(id) {
        let database = firebase.database();
        let user;
        let userID;

        user = firebase.auth().currentUser;
        userID = user.uid;

        let oldData = this.state.friendsId;
        
        let ref = database.ref("users/" + userID + "/friends");
        let removedFriend = ''
        ref.once('value', snap=>{
            let val= snap.val();
            let keys=Object.keys(val)
            for(let i=0; i<keys.length;i++){
                let k=keys[i];
                if(val[k]==id)
                    removedFriend = k;
            }
        })
        ref = database.ref("users/" + userID + "/friends/" + removedFriend);
        ref.remove();
        let index = oldData.findIndex(x => x==id);
        oldData.splice(index, 1);
        this.setState({
            friendsId: oldData
        })
       
    }

    //Resolve the add friend
    addFriend(id) {
        let database = firebase.database();
        let user;
        let userID;

        user = firebase.auth().currentUser;
        userID = user.uid;

        let ref = database.ref("users/" + userID + "/friends").push(id)
    }

    search(event) {
        let searchText = event.target.value.toLowerCase();
        //console.log(event.target.value);
        if (searchText == "") {
            this.showFriends();
        } else {
            //De ce trebuie sa setez state-ul sa fie gol inainte sa pun ceva in el?
            this.setState({
                friendsId: []
            })
            firebase.database().ref().child("users").orderByChild('name').startAt(searchText).endAt(searchText + "\uf8ff").once('value', snap => {
                let searchPeople = [];
                snap.forEach(data => {
                    searchPeople.push(data.key)
                });
                this.handleSearch(searchPeople);
            })
        }
    }

    handleSearch(arr) {
        this.setState({
            friendsId: arr
        })
    }

    render() {
        return (
            <div className="friends-component">
                <input onKeyUp={this.search} placeholder="Search for friends" type="search" />
                <div>
                    {

                        this.state.friendsId.map((ids) => {
                            return (
                                <FriendContent friendId={ids} removeFriend={this.removeFriend} addFriend={this.addFriend} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
