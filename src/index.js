// Import framework specific functions
import { render, h } from 'preact';

// Import the styling
import './index.scss';
import './firebase-setup';

import { navigate } from './core/utilities';
import { App } from './app';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';

const appElement = document.getElementById('app');

const routes = {
    '/': HomePage,
    '/login': LoginPage
};

// Render the application on our element
render(<App routes={routes} />, appElement);