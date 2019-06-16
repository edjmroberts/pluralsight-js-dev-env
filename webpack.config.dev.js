import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        noInfo: false,
    },
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        // Create Html file that includes reference to Bundled JS
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader"
            }]
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }]
    }
}
