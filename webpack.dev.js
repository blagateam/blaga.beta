const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const devtool = 'cheap-module-eval-source-map';

const entry = {
    app: './src/index.js',
    vendor: [ 'preact' ]
};

const output = {
    path: path.resolve('./public'),
    filename: 'bundle.js',
    publicPath: '/'
};

const modules = {
    loaders: [
        { test: /\.(jpg|png|gif)$/, loader: 'url-loader?limit=10000' },
        { test: /\.html$/, loader: 'file-loader' },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.js$/, loader: 'babel-loader',
            query: {
                plugins: [
                    'transform-object-rest-spread',
                    ["transform-react-jsx", { "pragma": "h" }]
                ],
                presets: ['env']
            }
        }
    ]
};

const plugins = [
    new CopyPlugin([
        { from: path.resolve(__dirname, './src/index.html'), to: '.' },
        { from: path.resolve(__dirname, './assets'), to: './assets' },
    ]),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.js'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
];

const devServer = {
    historyApiFallback: {
        index: './src/index.html',
    },
    stats: 'minimal',
    disableHostCheck: true
};

module.exports = {
    devtool,
    entry,
    output,
    module: modules,
    plugins,
    devServer
};