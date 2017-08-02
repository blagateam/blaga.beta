// Import framework specific functions
import {Component, h} from 'preact';
import {ChatUserComponent} from '../chat-user/chat-user.component';
import './chat-sidebar.style.scss';

export class ChatSidebar extends Component {


    hide(s) {
        let x = document.getElementsByClassName(s)[0];
        if (x != undefined) {
            if (x.style.display === 'none') {
                x.style.display = 'block';
            } else {
                x.style.display = 'none';
            }
        }
    }

    render() {
        return (
            <div className="chat-sidebar-component">
                <div className="room">
                    <div className="title">
                        <button className="title_button" onclick={() => this.hide("list_class")}>Clasa mea</button>
                    </div>
                    <div className="list_class">
                        <ChatUserComponent name="Sabin Vlad" online={true}/>
                        <ChatUserComponent name="Duda Ioan" online={false}/>
                        <ChatUserComponent name="Maverik Ioan" online={false}/>
                        <ChatUserComponent name="Geanina Corondan" online={true}/>
                        <ChatUserComponent name="Mihai Mihai" online={true}/>
                        <ChatUserComponent name="Daniel Daniel" online={false}/>
                        <ChatUserComponent name="Johnny Boy" online={false}/>
                    </div>
                    <div className="title">
                        <button className="title_button" onclick={() => this.hide("list_prof")}>Profesori</button>
                    </div>
                    <div className="list_prof">
                        <ChatUserComponent name="Sabin Vlad" online={true}/>
                        <ChatUserComponent name="Duda Ioan" online={false}/>
                        <ChatUserComponent name="Maverik Ioan" online={false}/>
                    </div>
                    <div className="title">
                        <button className="title_button" onclick={() => this.hide("list_friends")}>Friends</button>
                    </div>
                    <div className="list_friends">
                        <ChatUserComponent name="Sabin Vlad" online={true}/>
                        <ChatUserComponent name="Duda Ioan" online={false}/>
                        <ChatUserComponent name="Maverik Ioan" online={false}/>
                    </div>
                </div>
            </div>
        )
    }

}



