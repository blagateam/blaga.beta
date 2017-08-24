// Import framework specific functions
import { Component, h } from 'preact';
import './notes-content.style.scss';

export class NotesContent extends Component {

    render() {
        return (
            <div className="notes-content-component">
                <div className="NotesTitle">
                <h3>Title</h3>
                </div>

                <div className="NotesText">
                <p>Write the text...</p>
                </div>
            </div>

            )
    }
}
