// Import framework specific functions
import {Component, h} from 'preact';
import './timeline.style.scss';

import { NotesContent } from '../notes-content/notes-content.component';

export class TimelineComponent extends Component {

    constructor(...args) {
        super(...args);

        this.adaugaNotita = this.adaugaNotita.bind(this);
        
        this.refs = {};

        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);

        this.index = 0;
    }

    adaugaNotita() {
        let database = firebase.database();
        let note = this.refs.note.value;
        let user = firebase.auth().currentUser;
        let userID = user.uid;

        database.ref('users/' + userID + '/notes').push().set({
            note: note
        })
    }

    componentDidMount(){
        let Track = document.querySelector( ".Track" );
        this.maxStickys = (Track.querySelectorAll( ".notes-content-component" ).length-3)/2;
        console.log( this.maxStickys)
    }

    moveLeft(){
        if(this.index >= 1)  {
            let Track = document.querySelector( ".Track" );
            this.index--;
            Track.style.transform = "translateX( -" + ( this.index * 480 ) + "px )"; 
        }
    }

   moveRight(){
    
        if(this.index < (this.maxStickys)) { 
        let Track = document.querySelector( ".Track" );
        this.index++;
        Track.style.transform = "translateX( -" + ( this.index * 480 ) + "px )";   
        }
    }

    AddElements(){
        const input = document.querySelector("noteInput");
        const textMessage = input.value;

          messageContentEl.appendChild( messageText );

    }



    render() {
        return (
            <div className="timeline-component">
                <div className="main_buttons">
                    <div className="topHeaders1"> 
                        <p className="Headers">About</p> 
                        <button className="addDescriere">&#9998;</button> 
                    </div>
                    <div className="topHeaders2"> 
                        <p className="Headers">Friends</p>
                        </div>
                    <div className="topHeaders3"> 
                        <p className="Headers">Carnet</p> </div>
                </div>

                <div className="Preview">
                    <div className="About_preview">
                        <p className="Descriere">Descriere</p>
                    </div>
                    <div className="Friends_preview">
                        <div className="images">
                            <img src="https://api.adorable.io/avatars/2" alt=""/>
                            <img src="https://api.adorable.io/avatars/3" alt=""/>
                            <img src="https://api.adorable.io/avatars/4" alt=""/>
                            <img src="https://api.adorable.io/avatars/5" alt=""/>
                        </div>
                        <div className="images">
                            <img src="https://api.adorable.io/avatars/1" alt=""/>
                            <img src="https://api.adorable.io/avatars/4" alt=""/>
                            <img src="https://api.adorable.io/avatars/5" alt=""/>
                            <img src="https://api.adorable.io/avatars/6" alt=""/>
                        </div>
                    </div>
                    <div className="Carnet_preview">
                        <div className="Note">
                            <p>Nota 1</p>
                            <p>Nota 2</p>
                            <p>Nota 3</p>
                            <p>Nota 4</p>
                        </div>
                    </div>
                </div>

                <div className="NotesTOP">
                    <p className="NotesHeader">Notite</p>
                </div>
                <div className="Notes">
                    <button onClick={this.AddElements} className="AddNotes" >Adauga notita</button>
                    <input className="noteInput" type="text"  placeholder="Notita ta..." maxlength="150" ref={(el) => this.refs.note = el}></input>
                </div>
                <div className="MoveSticky">
                <button onClick={this.moveLeft} className="buttonLeft">&#10096;</button>
                    <div className="StickyNotes">
                        <div className="Track">
                        <NotesContent user={this.props.user} />
                        <NotesContent user={this.props.user} />
                        <NotesContent user={this.props.user} />
                        <NotesContent user={this.props.user} />
                        <NotesContent user={this.props.user} />
                        <NotesContent user={this.props.user} />
                        <NotesContent user={this.props.user} />
                        <NotesContent user={this.props.user} />
                        </div>
                    </div>
                <button onClick={this.moveRight} className="buttonRight">&#10097;</button>
                </div>
            </div>
        )
    }
}