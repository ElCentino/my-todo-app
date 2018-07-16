const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'todo-bundle.js'
    }, 

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                query: {
                    presets: ['env', 'stage-0', 'react']
                },
                loader: 'babel-loader'
            }, 
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            }
        ]
    }
}