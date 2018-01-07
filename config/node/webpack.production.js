const path          = require('path');
const merge         = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const webpackParts  = require('./webpack.parts');

module.exports = ({ context }) => {
    return merge([
        webpackCommon.common({context: context}),
        webpackParts.setNodeEnv('production'),
        webpackParts.setRedisEnv({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD
        }),
        webpackParts.babelLoader({
            inclusions: [
                path.join(context, 'app', 'web', 'shared', 'views'),
                path.join(context, 'app', 'web', 'summary-list', 'views')
            ],
            exclusions: [
                path.join(context, 'node_modules')
            ]
        }),
        webpackParts.handlebars({
            inclusions: [
                path.join(context, 'app', 'layouts'),
                path.join(context, 'app', 'views')
            ],
            exclusions: [
                path.join(context, 'node_modules')
            ]
        }),
        webpackParts.shell({
            options: {
                onBuildStart: ['echo "Node build starting (PROD)"'],
                onBuildEnd: [],
                onBuildExit: ['echo "Node build complete (PROD)"']
            }
        })
    ]);
};
