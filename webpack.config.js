const path = require('path');

module.exports = {
    
    mode: 'production', // "development" (not minified)
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'), //default ./dist/
        filename: 'app.bundle.js' //default main.js
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
                
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5000,
      },
    
}