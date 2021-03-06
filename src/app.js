import { Component, h } from 'preact';
import { getLocationParams, navigate } from './core/utilities';

const appElement = document.getElementById('app');

// Main App component
export class App extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            routes: this.props.routes,
            currentRouteComponent: null,
            user: null
        };

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user });
                navigate('/');
                this._setCurrentRouteComponent('/');
            } else if(this._getRouteFromLocation() === '/') {
                navigate('/login');
                this._setCurrentRouteComponent('/login');
            }
        });
    }

    _getRouteFromLocation() {
        return window.location.pathname
    }

    _setCurrentRouteComponent(path) {
        this.setState({
            currentRouteComponent: this.state.routes[path]
        }, this.forceUpdate);
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillMount() {

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

            navigate(path);

            this._setCurrentRouteComponent(path);

            return false;
        }, false);

        let currentRoute = this.state.routes[this._getRouteFromLocation()];

        if (currentRoute && typeof currentRoute !== 'function' && typeof currentRoute.then === 'function') {
            currentRoute
                .then(res => {
                    this.setState({ currentRouteComponent: res }, this.forceUpdate);
                }).catch(res => {
                    navigate(res);
                    this._setCurrentRouteComponent(res);
                });
        } else {
            this.setState({
                currentRouteComponent: currentRoute
            });
        }
    }

    render() {
        let CurrentView = this.state.currentRouteComponent;
        let routeParams = getLocationParams();

        return (
            <div className="container">
                <CurrentView params={routeParams} user={this.state.user} />
            </div>
        )
    }
}