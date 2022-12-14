/*
 * @Author: Topskys
 * @Date: 2022-10-09 15:12:44
 * @LastEditTime: 2022-10-25 13:46:10
 * webpack配置
 */
// 引入path包，用于路径拼接
const path = require('path')
// 引入插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',  // "build": "webpack --mode production"
    entry: './src/index.ts',// 指定入口文件
    output: { // 指定打包文件存放目录
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",// 打包后文件名
        environment: {// 配置打包环境
            arrowFunction: false,// 不用箭头函数
            const: false,// 不使用const以兼容IE等低版本浏览器
        },
    },
    module: { // 指定webpack打包时要是用模块
        rules: [ // 指定要加载的规则
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
            },
            // 设置less文件的处理
            {
                test: /\.less$/,
                // 数组从后往前执行
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },
    // 使用webpack-dev-server需要注释掉引用模块
    // Webpack 默认只会解析['.js', '.json', '.wasm']，配置webpack引用模块
    resolve: {
        extensions: ['.ts', '.scss', '.less', '.json', '.js', '.wasm'],
        alias: {
            '@': '/src'
        }
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

