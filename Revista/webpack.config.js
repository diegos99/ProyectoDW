const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:{app: './js/app.js'},
    output: {
        path: __dirname + '/build',
        filename: 'app-o.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                test: /\.scss$/,                
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }            
        ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
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
        }),
        new HtmlWebpackPlugin({
            filename: 'articulo2.html',
            template: './html/articulo2.html',
            chunks: ['app']          
        })            ,
        new HtmlWebpackPlugin({
            filename: 'articulo3.html',
            template: './html/articulo3.html',
            chunks: ['app']          
        })    ,
        new HtmlWebpackPlugin({
            filename: 'categ1.html',
            template: './html/categ1.html',
            chunks: ['app']          
        })    ,
        new HtmlWebpackPlugin({
            filename: 'categ2.html',
            template: './html/categ2.html',
            chunks: ['app']          
        })    ,
        new HtmlWebpackPlugin({
            filename: 'categorias.html',
            template: './html/categorias.html',
            chunks: ['app']          
        })   ,
        new HtmlWebpackPlugin({
            filename: 'crear_art.html',
            template: './html/crear_art.html',
            chunks: ['app']          
        })     ,
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './html/login.html',
            chunks: ['app']          
        })    ,
        new HtmlWebpackPlugin({
            filename: 'modulo-anuncios.html',
            template: './html/modulo-anuncios.html',
            chunks: ['app']          
        })    ,
        new HtmlWebpackPlugin({
            filename: 'modulo-articulo.html',
            template: './html/modulo-articulo.html',
            chunks: ['app']          
        })    ,
        new HtmlWebpackPlugin({
            filename: 'modulo-moderacion.html',
            template: './html/modulo-moderacion.html',
            chunks: ['app']          
        })    ,
        new HtmlWebpackPlugin({
            filename: 'Usuario.html',
            template: './html/Usuario.html',
            chunks: ['app']          
        })    ,
        new HtmlWebpackPlugin({
            filename: 'about-us.html',
            template: './html/about-us.html',
            chunks: ['app']          
        }) 
    ]    
}
