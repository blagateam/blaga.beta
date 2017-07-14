// Import framework specific functions
import { Component, render, h } from 'preact';

// Import the styling
import './index.scss';

// Import the components
import { Header } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ChatSidebar } from './components/chat-sidebar/chat-sidebar.component';

// Main App component
class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="content">
                    <ProfileComponent />
                    <TimelineComponent />
                    <ChatSidebar />
                </div>
            </div>
        )
    }
}

// Render the application on our element
render(<App />, document.querySelector('#app'));