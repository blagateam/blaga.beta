const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

const devtool = isProd
    ? 'source-map'
    : 'cheap-module-eval-source-map';

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
    disableHostCheck: true,
    contentBase: './public'
};

// Production configs and setup
if (isProd) {
    plugins.push(
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
}

module.exports = {
    devtool,
    entry,
    output,
    module: modules,
    plugins,
    devServer
};