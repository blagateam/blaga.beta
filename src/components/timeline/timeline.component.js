// Import framework specific functions
import { Component, h } from 'preact';
import './timeline.style.scss';

import { NotesContent } from '../notes-content/notes-content.component';

export class TimelineComponent extends Component {

    constructor(...args) {
        super(...args);

        this.adaugaNotita = this.adaugaNotita.bind(this);
        this.addAbout = this.addAbout.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);

        this.state = {
            notesArray: []
        };
        this.refs = {};
        this.index = 0;
    }

    adaugaNotita() {
        if (this.refs.note.value != '') {
            let database = firebase.database();
            let note = this.refs.note.value;
            let user = firebase.auth().currentUser;
            let userID = user.uid;
            let oldNotes = this.state.notesArray;

            database.ref('users/' + userID + '/notes').push().set({
                note: note
            })

            oldNotes.push(note);
            
            this.setState({
                notesArray: oldNotes
            })

        }
    }

    componentWillUpdate() {
        let database = firebase.database();
        let user;
        let userID;
        let textArray = this.state.notesArray;
        let array = [];
        var variable;

        user = firebase.auth().currentUser;
        userID = user.uid;

        let refAbout = database.ref("users/" + userID + "/about");
        let refMarks = database.ref("users/" + userID + "/lastmarks");

        refAbout.on('value', function (snapshot) {
            document.querySelector(".Descriere").innerHTML = snapshot.val().about;
        })

        refMarks.on('value', function (snapshot) {
            document.querySelector(".nota1").innerHTML = snapshot.val().nota4;
            document.querySelector(".nota2").innerHTML = snapshot.val().nota3;
            document.querySelector(".nota3").innerHTML = snapshot.val().nota2;
            document.querySelector(".nota4").innerHTML = snapshot.val().nota1;
        })

        database.ref('users/' + userID + '/notes').on('value', snap => {
            variable = snap.val();

            var keys = Object.keys(variable);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                // Look at each fruit object!
                array.push(variable[key].note);
            }

            this.setState({
                notesArray:array
            })
            //a se lucra in acest scope pt ca nu mere altundeva
        })

    }

    componentDidMount() {
        let Track = document.querySelector(".Track");
        this.maxStickys = (Track.querySelectorAll(".notes-content-component").length - 3) / 2;
    }

    moveLeft() {
        if (this.index >= 1) {
            let Track = document.querySelector(".Track");
            this.index--;
            Track.style.transform = "translateX( -" + (this.index * 480) + "px )";
        }
    }

    moveRight() {

        if (this.index < (this.maxStickys)) {
            let Track = document.querySelector(".Track");
            this.index++;
            Track.style.transform = "translateX( -" + (this.index * 480) + "px )";
        }
    }

    showInput() {
        document.querySelector(".homeInput").style.display = "inline-block";
        document.querySelector(".addDescriere").style.display = "none";
        document.querySelector(".Descriere").style.display = "none";
        document.querySelector(".doneDescriere").style.display = "inline-block";
    }

    addAbout() {
        let database = firebase.database();
        let user = firebase.auth().currentUser;
        let userID = user.uid;
        let about = this.refs.about.value;

        document.querySelector(".homeInput").style.display = "none";
        document.querySelector(".addDescriere").style.display = "inline-block";
        document.querySelector(".Descriere").style.display = "inline-block";
        document.querySelector(".doneDescriere").style.display = "none";

        database.ref("users/" + userID + "/about").set({
            about: about
        })

        this.setState({ about: about });
    }

    render() {
        return (
            <div className="timeline-component">
                <div className="main_buttons">
                    <div className="topHeaders1">
                        <p className="Headers">About</p>
                        <button className="addDescriere" onClick={this.showInput}>&#9998;</button>
                        <button className="doneDescriere" onClick={this.addAbout}>&#x2714;</button>
                    </div>
                    <div className="topHeaders2">
                        <p className="Headers">Friends</p>
                    </div>
                    <div className="topHeaders3">
                        <p className="Headers">Carnet</p> </div>
                </div>

                <div className="Preview">
                    <div className="About_preview">
                        <p className="Descriere">{this.state.about}</p>
                        <input className="homeInput" ref={(e) => this.refs.about = e} type="text" placeholder="Something about you..."></input>
                    </div>
                    <div className="Friends_preview">
                        <div className="images">
                            <img src="https://api.adorable.io/avatars/2" alt="" />
                            <img src="https://api.adorable.io/avatars/3" alt="" />
                            <img src="https://api.adorable.io/avatars/4" alt="" />
                            <img src="https://api.adorable.io/avatars/5" alt="" />
                        </div>
                        <div className="images">
                            <img src="https://api.adorable.io/avatars/1" alt="" />
                            <img src="https://api.adorable.io/avatars/4" alt="" />
                            <img src="https://api.adorable.io/avatars/5" alt="" />
                            <img src="https://api.adorable.io/avatars/6" alt="" />
                        </div>
                    </div>
                    <div className="Carnet_preview">
                        <div className="Note">
                            <p className="nota1"></p>
                            <p className="nota2"></p>
                            <p className="nota3"></p>
                            <p className="nota4"></p>
                        </div>
                    </div>
                </div>

                <div className="NotesTOP">
                    <p className="NotesHeader">Notes</p>
                </div>
                <div className="Notes">
                    <button onClick={this.adaugaNotita} className="AddNotes" >Add note</button>
                    <input className="noteInput" type="text" placeholder="Your note..." maxlength="150" ref={(el) => this.refs.note = el}></input>
                </div>
                <div className="MoveSticky">
                    <button onClick={this.moveLeft} className="buttonLeft">&#10096;</button>
                    <div className="StickyNotes">
                        <div className="Track">
                            {
                                this.state.notesArray.map(content => {
                                    return (<NotesContent noteText={content} />
                                    )
                                }
                                )}
                        </div>
                    </div>
                    <button onClick={this.moveRight} className="buttonRight">&#10097;</button>
                </div>
            </div>
        )
    }

}