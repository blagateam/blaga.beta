// Import framework specific functions
import {Component, h} from 'preact';
import './timeline.style.scss';

import { NotesContent } from '../notes-content/notes-content.component';

export class TimelineComponent extends Component {
    render() {
        return (
            <div className="timeline-component">
                <div className="main_buttons">
                    <button>About</button>
                    <button>Friends</button>
                    <button>Carnet</button>
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
                    <button className="AddNotes">Adauga notita</button>
                    <input type="text" placeholder="Notita ta..." maxlength="150"></input>
                </div>
                <div className="StickyNotes">
                <NotesContent />
                </div>
            </div>
        )
    }
}
