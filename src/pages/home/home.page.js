// Import framework specific functions
import { Component, h } from 'preact';

// Import the components
import { Header } from '../../components/header/header.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ChatSidebar } from '../../components/chat-sidebar/chat-sidebar.component';
import { FriendsComponent } from '../../components/friends/friends.component';
import { ArchiveComponent } from '../../components/archive/archive.component';
import { CatalogComponent } from '../../components/catalog/catalog.component'
import { FriendContent } from '../../components/friend-content/friend-content.component';

export class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            mainComp: 'Timeline'
        }

        this.showSelected = this.showSelected.bind(this);
    }

    showSelected(s) {
        this.setState({
            mainComp: s
        })
    }

    render() {
        let midComponent = null;
        switch (this.state.mainComp) {
            case 'Timeline':
                midComponent = <TimelineComponent />;
                break
            case 'Archive':
                midComponent = <ArchiveComponent />;
                break
            case 'Friends':
                midComponent = <FriendsComponent />;
                break
            case 'Catalog':
                midComponent = <CatalogComponent />;
                break
        }
        return (
            <div className="container home-page">
                <Header />
                <div className="content">
                    <ProfileComponent user={this.props.user} showSelected={this.showSelected} />
                    {midComponent}
                    <ChatSidebar />
                </div>
            </div>
        )
    }
}