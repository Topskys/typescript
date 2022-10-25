<!--
 * @Author: Topskys
 * @Date: 2022-10-08 23:21:28
 * @LastEditTime: 2022-10-25 15:09:51
-->
# TypeScript项目snake
```
# 安装环境，需要nodejs和TypeScript环境
cnpm i -g typescript
# 编译转换为js文件执行
tsc index.ts
# 自动监听编译
tsc index.ts -w
# 多文件监听编译，新建tsconfig.json配置{}
tsc | tsc -w
```

安装css处理环境
```
cnpm i -D less less-loader css-loader style-loader
```
安装css兼容环境
```
npm i -D postcss postcss-loader postcss-preset-env
```

css会被加入bundle.js中，以js的形式实现

启动webpack server
```
npm start
```

视频：

<a href='https://www.bilibili.com/video/BV1Xy4y1v7S2?p=1&vd_source=f72f2ba9c041e7d811515312b7d7456a' target='_blank'>https://www.bilibili.com/video/BV1Xy4y1v7S2?p=1&vd_source=f72f2ba9c041e7d811515312b7d7456a</a>

