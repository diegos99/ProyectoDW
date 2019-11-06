const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{app: './js/app.js'},
    output: {
        path: __dirname + '/build',
        filename: 'app-o.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './home.html'            
        }),
        new HtmlWebpackPlugin({
            filename: 'articulo1.html',
            template: './html/articulo1.html',
            chunks: ['app']          
        })        
    ]    
}
