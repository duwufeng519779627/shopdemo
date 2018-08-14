###准备工作
- 确保安装好node 
- 全局安装webpack,webpack-cli
- 执行命令 ``npm init`` 
- 本地安装webpack webpack-cli ```npm install --save-dev webpack-cli```

###最基本的文件路径配置
- 最新4.0++版本的webpack 如果不配置config文件 必须把入口html和js 入口 都命名为index.html index.js   执行webpack命令 会多出一个dist文件夹 里面有一个main.js的文件 就是打包好的文件 这是最基本的使用 配置 测试

###开始配置webpack.config.js 和 package.json
- 具体参考config.js
  - webpack 打包的时候会自动来读取 webpack.config.js
  - 在packge.json里的scripts中的配置 就是json文件 scripts中的文件执行命令
    如 `` "build":"webpack"``  则 ``npm run build``就相当如直接执行webpack 
- 所以这次执行命令 ``npm run build`` 就会自动打包好dist目录下有一个bundle.js
###启用开发模式热更新
- ``npm install webpack-dev-server --save-dev``
- json 中scripts配置 "dev": "webpack-dev-server  --mode development --open --hot --port 3000"
 --mode development 是指在开发模式 --open是自动打开浏览器 --hot热更新 --port 3000更改端口号
- 有时候啊 会报错包丢失 请删除全部包重新装  此时遇到大坑 server热更新失败 一直无法解决 很烦躁
    大坑 dev-server生成的bundele.js在根路径中，看不到的 要以根路径访问``<script src="/bundle.js"></script>``
- 
##配置让HTML文件也存在虚拟磁盘中
- ``npm install html-webpack-plugin -D``
- 导入插件 并配置
- 注意 此时index也在/根路径了 npm run dev 访问的是虚拟磁盘里的文件了  index.html不需要自己bundle.js引包了  插件自己会引包了 
###每次打包前清除dist之前的文件
- ``npm i clean-webpack-plugin --save-dev``
###配置css文件

- css此时不需要用link方式引入了 在index.js中 用es6语法import引入
```shell
npm install --save-dev style-loader css-loader
```
###配置less文件
- ``npm install --save-dev less-loader less``
###配置图片路径
- ``npm install url-loader``
- ``npm install file-loader``

###es6语法转换
``npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env -D``  不好 不稳定


    - 基本包
``npm install babel-plugin-transform-runtime --save-dev``


    - 垫脚片  向下兼容
`` npm install babel-polyfill -D``


- 减少代码重复  有大量的重复代码 
- ``npm install babel-plugin-transform-runtime -D``
    ``npm install babel-runtime --save

###vue打包
- 在js文件中写vue 可以引入全包 如果引入run-time 的包会报错  
     run-time包也不能用componets 需要用vue文件
  1 import Vue from 'vue/dist/vue.js'
  2 改vue的入口文件 不推荐  
  3在config.js中配置

 ###打包单文件vue组件
 -  ``npm install vue-loader vue-template-compiler -D``
    最新版参考下文档 有点改动  然后组件实例中必须用render的方式渲染出来
###结合路由使用webpack
- 大坑 必须 Vue.use(VueRouter) 进行挂载

###最后不让webpack打包第三包 
    externals

    在全局用script  在单文件用一样用import   然后在配置中externals

    大坑  src 引入jquery  必须在bundle之前引入

    测试