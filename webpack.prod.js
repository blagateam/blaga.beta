let configs = require('./webpack.dev');
const webpack = require('webpack');

const devtool = 'source-map';

// Production configs and setup
configs.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
        },
        output: {
            comments: false,
        }
    })
);

module.exports = {
    devtool,
    entry: configs.entry,
    output: configs.output,
    module: configs.module,
    plugins: configs.plugins
};