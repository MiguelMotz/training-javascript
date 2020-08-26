const path = require('path');

module.exports = {
    mode: 'production', // "development" (not minified)
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'), //default ./dist/
        filename: 'app.bundle.js' //default main.js
    }
}