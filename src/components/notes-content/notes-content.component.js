// Import framework specific functions
import { Component, h } from 'preact';
import './notes-content.style.scss';

export class NotesContent extends Component {

    constructor(...args)
    {
        super(...args);

        //this.showNote = this.showNote.bind(this);

        this.state={
            notes: []
        }

        console.log('NotesContent', this.props);
    }

    componentWillReceiveProps(...p) {
        console.log('props', ...p );
    }

    componentDidMount() {
        let user = firebase.auth().currentUser;
        let userID = user.uid;
        let database = firebase.database().ref().child('users/' + userID + '/notes');
        let string = [];

        database.once('value', snap => {
            let val = snap.val();

            this.setState({
                notes: Object.keys(val).map(key => {
                    return val[key];
                })
            })
        })
    }

    render() {
        let notes = this.state.notes;

        return (
            <div className="notes-content-component">
                {notes.map(item => {
                    return (
                        <div>
                            {item.note}
                        </div>)
                })}
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
                <p>Write the text...</p>
                </div>
            </div>

            )
    }
}
