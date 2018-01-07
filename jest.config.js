module.exports = {
    verbose: true,
    testMatch: ['**/test/**/*-test.js'],
    collectCoverageFrom: ['app/**/*.{js,jsx}', '!app/web/lib/**', '!**/*_BKP/**', '!**/index.js']
};