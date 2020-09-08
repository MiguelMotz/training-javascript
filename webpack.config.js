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
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader','css-loader','sass-loader', ],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5000,
      },
    
}