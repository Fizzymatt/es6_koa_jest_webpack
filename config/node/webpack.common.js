const path                        = require('path');
const SystemBellPlugin            = require('system-bell-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const IgnorePlugin                = require('webpack/lib/IgnorePlugin');

const PATHS = {
    app: 'app',
    web: 'app/web',
    build: 'build'
};

exports.common = ({ context }) => ({
    context: context,
    target: 'node',
    entry: { 'server': path.join(context, PATHS.app, 'server.js') },
    output: {
        path: path.join(context, PATHS.build),
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        modules: [
            'node_modules',
            path.join(context, PATHS.app)
        ],
        // NOTE: we need the json extension here to handle a config file that is used by koa-helmet
        extensions: ['.js', '.json']
    },
    plugins: [
        new SystemBellPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new IgnorePlugin(/vertx/)
    ]
});
