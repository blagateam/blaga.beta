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
        let database = firebase.database().ref().child('users/notes');
        let string = [];

        database.once('value', snap => {
            let val = snap.val();

            this.setState({
                notes: Object.keys(val).map(key => {
                    return val[key];
                })
            })
            /*string.push({
                note: snap.val().note
            })
        })

        this.setState({
            text: string
        })*/
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
            </div>

            )
    }
}
