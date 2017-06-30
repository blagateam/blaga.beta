const http = require('http');
const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config.js');

// Configs
const isDeveloping = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || (isDeveloping ? 8080 : (process.env.PORT || 8080));

// TODO: Load proxies

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        watchOptions: {
            aggregateTimeout: 200,
            poll: true
        },
        stats: {
            colors: true
        }
    });

    app.use(middleware);
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/static/index.html')));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/public'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
}

const httpServer = http.createServer(app);

httpServer.listen(PORT, '0.0.0.0', null, function () {
    console.log('Server HTTP listening', this.address().port);
});