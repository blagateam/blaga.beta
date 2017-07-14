// Import framework specific functions
import { Component, h } from 'preact';
import './chat-user.style.scss';

export class ChatUserComponent extends Component {
    render() {
        let rnd = Math.round(Math.random() * 100);
        let imgClassNames = [
            'image',
            !!this.props.online ? 'online' : ''
        ].join(' ');

        return (
            <div className="chat-user-component">
                <img className={imgClassNames} src={`https://api.adorable.io/avatars/` + rnd} alt={this.props.user}/>
                <span className="name">
                    {this.props.name}
                </span>
            </div>
        )
    }
}
