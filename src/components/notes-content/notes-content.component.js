// Import framework specific functions
import { Component, h } from 'preact';
import './notes-content.style.scss';

export class NotesContent extends Component {

    constructor(...args)
    {
        super(...args);

        this.state={
            notes: []
        }
    }

    render() {
        return (
            <div className="notes-content-component">
                <div className="TopContent">
                    <div className="NotesTitle">
                    <h3>{this.props.title}</h3>
                    </div>
                    <div className="TopButtons">
                    <button className="MaximizeButton">&#10066;</button>
                    <button className="CloseButton">&#10006;</button>
                    </div>
                </div>
                <div className="NotesText">
                <p>{this.props.noteText}</p>
                </div>
            </div>

            )
    }
}
