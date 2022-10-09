<!--
 * @Author: Topskys
 * @Date: 2022-10-09 15:07:43
 * @LastEditTime: 2022-10-09 19:38:11
-->

## 初始化项目
```
# 初始化包管理工具
npm init -y

# 安装依赖
cnpm i -D webpack  webpack-cli typescript ts-loader  webpack-dev-server  @babel/core  @babel/preset-env  babel-loader  core-js
```

## 打包
在根目录创建webpack.config.js文件，配置打包信息：
```
// 引入path包，用于路径拼接
const path = require('path')
module.exports = {
    // 指定入口文件
    entry: './src/main.ts',
    // 指定打包文件存放目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件名
        filename: "bundle.js",
    },
    // 指定webpack打包时要是用模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定处理文件
                test: /\.ts$/,
                // 指定处理依赖
                use: 'ts-loader',
                // 排除文件
                exclude: /node_modules/
            }
        ]
    }
}
```
在package.json中，配置打包指领build：
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack"
  },
  ```
## webpack服务器
```
npm i -D webpack-dev-server
```