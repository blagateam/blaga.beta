// Import framework specific functions
import { Component, h } from 'preact';

// Import the components
import { Header } from '../../components/header/header.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ChatSidebar } from '../../components/chat-sidebar/chat-sidebar.component';

import { FriendsComponent } from '../../components/friends/friends.component';


export class HomePage extends Component {
    render() {
        console.log('HomePage', this.props);
        return (
            <div className="container home-page">
                <Header />
                <div className="content">
                    <ProfileComponent user={this.props.user} />

                    <FriendsComponent />
                    <ChatSidebar />
                </div>
            </div>
        )
    }
}