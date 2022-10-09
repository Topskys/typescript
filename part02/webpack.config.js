/*
 * @Author: Topskys
 * @Date: 2022-10-09 15:12:44
 * @LastEditTime: 2022-10-09 20:07:40
 * webpack配置
 */
// 引入path包，用于路径拼接
const path = require('path')
// 引入插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件存放目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件名
        filename: "bundle.js",
        // 配置打包环境
        environment: {
            // 不用箭头函数
            arrowFunction: false,
        },
    },
    // 指定webpack打包时要是用模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定处理文件
                test: /\.ts$/,
                // 指定处理依赖，数组从后往前执行
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 兼容目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11",
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs方式“usage”表示按需加载
                                        "useBuiltIns": "usage",
                                    },
                                ],
                            ],
                        },
                    },
                    'ts-loader'
                ],
                // 排除文件
                exclude: /node_modules/
            }
        ]
    },
    // Webpack 默认只会解析['.js', '.json', '.wasm']，配置webpack引用模块
    resolve: {
        extensions: ['.ts', '.js', '.less']
    },
    // 配置插件
    plugins: [
        new CleanWebpackPlugin(), // 删除旧的dist
        new HTMLWebpackPlugin({
            // title: 'Webpack',
            template: "./src/index.html",
        }), // 在dist文件夹自动生成index.html

    ],
}

