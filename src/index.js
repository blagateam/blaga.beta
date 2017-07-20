// Import framework specific functions
import { render, h } from 'preact';

// Import the styling
import './index.scss';
import './firebase-setup';

import { App } from './app';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

const appElement = document.getElementById('app');

const routes = {
    '/': HomePage,
    '/login': LoginPage,
    '/register': RegisterPage
};

// Render the application on our element
render(<App routes={routes} />, appElement);