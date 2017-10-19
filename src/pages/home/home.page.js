// Import framework specific functions
import { Component, h } from 'preact';

// Import the components
import { Header } from '../../components/header/header.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ChatSidebar } from '../../components/chat-sidebar/chat-sidebar.component';
import { FriendsComponent } from '../../components/friends/friends.component';
import { ArchiveComponent } from '../../components/archive/archive.component';


export class HomePage extends Component {
    constructor(){
        super()
        this.state={
            timeline:true,
            archive:false,
            friends:false
        }

        this.showSelected = this.showSelected.bind(this);
    }

    showSelected(s){
        switch(s){
            case 'Friends':
                this.setState({
                    timeline:false,
                    archive:false,
                    friends:true
                })
                break;
            case 'Timeline':
                this.setState({
                    timeline:true,
                    archive:false,
                    friends:false
                })
                break;    
            case 'Archive':
                this.setState({
                    timeline:false,
                    archive:true,
                    friends:false
                })
                break;
        }
    }

    render() {
        return (
            <div className="container home-page">
                <Header />
                <div className="content">
                    <ProfileComponent user={this.props.user} showSelected={this.showSelected}/>
                    {this.state.timeline ? (<TimelineComponent />): null}
                    {this.state.archive ? (<ArchiveComponent />): null}
                    {this.state.friends ? (<FriendsComponent />): null}
                    <ChatSidebar />
                </div>
            </div>
        )
    }
}