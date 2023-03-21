const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    devServer:{
        hot:true,
        open:true,
    },
    mode:"development",
    devtool:"cheap-module-source-map",
    plugins:[
        new webpack.DefinePlugin({
            'process.env.name':JSON.stringify('Darab dev')
        }),
        new ReactRefreshWebpackPlugin(),
    ]
}