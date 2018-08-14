var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    devtool: 'inline-source-map',
    //入口
    entry: ["babel-polyfill", path.join(__dirname, '/src/index.js')],
    output: {

        //出口
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']), // 打包之前先把 dist 目录清除一遍
        new htmlWebpackPlugin({
            template: path.join(__dirname, '/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    externals:{
        jquery:'jQuery',
        vue:'Vue'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 当匹配到以这些后缀名结尾的资源的时候，使用 url-loader 来处理
                // url-loader 会把小于 8192 字节大小的文件直接 base64 转码内置，大于它的则以独立文件来提供
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            // vue导入包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}