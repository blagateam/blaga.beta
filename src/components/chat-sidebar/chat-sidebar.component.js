// Import framework specific functions
import { Component, h } from 'preact';
import { ChatUserComponent } from '../chat-user/chat-user.component';
import './chat-sidebar.style.scss';

export class ChatSidebar extends Component {
    render() {
        return (
            <div className="chat-sidebar-component">
                <div className="room">
                    <div className="title">Clasa mea</div>
                    <div className="list">
                        <ChatUserComponent name="Sabin Vlad" online={true}/>
                        <ChatUserComponent name="Duda Ioan" online={false}/>
                        <ChatUserComponent name="Maverik Ioan" online={false}/>
                        <ChatUserComponent name="Geanina Corondan" online={true}/>
                        <ChatUserComponent name="Mihai Mihai" online={true}/>
                        <ChatUserComponent name="Daniel Daniel" online={false}/>
                        <ChatUserComponent name="Johnny Boy" online={false}/>
                    </div>
                </div>
            </div>
        )
    }
}
