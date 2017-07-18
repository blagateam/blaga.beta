// Import framework specific functions
import { Component, render, h } from 'preact';

// Import the styling
import './index.scss';

import { HomePage } from './pages/home/home.page';

// Main App component
class App extends Component {
    render() {
        return (
            <div className="container">
                <HomePage />
            </div>
        )
    }
}

// Render the application on our element
render(<App />, document.getElementById('app'));