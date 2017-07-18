// Import framework specific functions
import { Component, render, h } from 'preact';

// Import the styling
import './index.scss';

import { getLocationParams } from './core/utilities';
import { HomePage } from './pages/home/home.page';

const appElement = document.getElementById('app');

// Main App component
class App extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            routes: this.props.routes,
            currentRouteComponent: this.props.routes[this._getRouteFromLocation()] || null
        };
    }

    _getRouteFromLocation() {
        return window.location.pathname
    }

    _setCurrentRouteComponent(path) {
        this.setState({
            currentRouteComponent: this.state.routes[path]
        });
    }

    componentDidMount() {

        window.addEventListener('popstate', (e) => {
            this._setCurrentRouteComponent(this._getRouteFromLocation());
        });

        appElement.addEventListener('click', (e) => {
            let elem = e.target;
            let counter = 2;

            // Fail fast for obvious reasons
            if (elem === document.body || elem === e.currentTarget || elem === e.currentTarget.firstChild) {
                return;
            }

            while (counter) {
                if (elem.hasAttribute('href') && elem.getAttribute('href').substring(0, 1) === '/') {
                    break;
                }

                elem = elem.parentElement;
                counter -= 1;
            }

            if (!elem.hasAttribute('href')) {
                return;
            }

            let path = elem.getAttribute('href');

            e.preventDefault();
            e.stopImmediatePropagation();

            window.history.pushState(null, null, path);

            this._setCurrentRouteComponent(path);

            return false;
        }, false);
    }

    render() {
        let CurrentView = this.state.currentRouteComponent;
        let routeParams = getLocationParams();

        return (
            <div className="container">
                <CurrentView params={routeParams} />
            </div>
        )
    }
}

const routes = {
    '/': HomePage
};

// Render the application on our element
render(<App routes={routes} />, appElement);