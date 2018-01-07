const path          = require('path');
const merge         = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const webpackParts  = require('./webpack.parts');

module.exports = ({ context }) => {
    return merge([
        webpackCommon.common({context: context}),
        webpackParts.setNodeEnv('production')
    ]);
};
