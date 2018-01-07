const webpack      = require('webpack');

exports.babelLoader = ({ inclusions, exclusions }) => ({
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: inclusions,
                exclude: exclusions
            }
        ]
    }
});

exports.setNodeEnv = (value) => ({
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(value)
            }
        })
    ]
});
