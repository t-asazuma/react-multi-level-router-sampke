const path = require('path');
module.exports = {
    devtool: "source-map",

    entry: 
    [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        //  出力ファイルのディレクトリ名
//        path: path.join(__dirname, '../resources/static/js'),
        path: path.join(__dirname, '/dist/js'),
        // 出力ファイル名
        filename: 'main.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/dist'),
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
