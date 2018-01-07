module.exports = (env) => {

    switch(env.target) {
        case 'node':
            switch(env.environment) {
                case 'development':
                    return require('./config/node/webpack.development')({ context: __dirname });
                case 'production':
                    return require('./config/node/webpack.production')({ context: __dirname });
                default:
                    throw(`the ${env.environment} environment was not recognised`);
            }

        default:
            throw(`the ${env.target} target was not recognised`);
    }

};
