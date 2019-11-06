const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./js/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'app-o.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'home.html'
        })
    ]    
}
