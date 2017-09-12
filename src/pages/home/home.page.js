// Import framework specific functions
import { Component, h } from 'preact';

// Import the components
import { Header } from '../../components/header/header.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ChatSidebar } from '../../components/chat-sidebar/chat-sidebar.component';
import { ArchiveComponent } from '../../components/archive/archive.component'

export class HomePage extends Component {
    render() {
        return (
            <div className="container home-page">
                <Header />
                <div className="content">
                    <ProfileComponent user={this.props.user} />
                    <ArchiveComponent />
                    <ChatSidebar />
                </div>
            </div>
        )
    }
}