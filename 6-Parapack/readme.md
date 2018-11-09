## 空投包-没有你想不到的前端项目初始包

> 
> 主要是对一些前端项目的初始包架构，减少项目前期搭建时间，
> 
> 让你更好的在业务逻辑和代码操作上更加省心省力，提高开发效率！
> 
> 同时也希望大家能够踊跃提交自己项目初始包。(*^▽^*)


> 宗旨：我们不生产代码，我们只是代码的搬运工。

> 目的：路漫漫其修远兮，吾将上下而求索。

> 座右铭：生活不止裆下的苟且，还有未知的bug和看不懂的code。

> 签名：STAY HUNGRY.  STAY FOOLISH.


###  wap端适配包 [【wap-rem】](https://github.com/lance-yi/myLife-nodes/tree/master/6-Parapack/wap-rem)

- base.css 重置页面样式
- 使用rem布局、100px=1rem

config.js 文件配置

```js
window['adaptive'].desinWidth = 750; // 设计图宽度
window['adaptive'].baseFont = 24; // 没有缩放时的字体大小
window['adaptive'].maxWidth = 750; // 页面最大宽度 默认540
window['adaptive'].init(); // 调用初始化方法
```

- 使用sass语法（你可以根据自己习惯来）


### wap端Vue SPA适配包 [【vue-cli3-app-init】](https://github.com/lance-yi/vue-cli3-app-init)

- 使用vue-rooter路由
- 使用vuex状态管理
- 使用Vant UI组件
- 使用postcss-pxtorem插件，对样式px进行转换为rem
- 使用淘宝amfe-flexible适配布局
- 使用pwa主题配置
- 使用sass预编译插件
- 使用babel es6转换插件
- 使用eslint语法检测
- 封装axios库，针对不同服务器，请求方式进行了简单的封装，直接在 main.js 全局注册到 vue.prototype 下,组件直接通过 this 访问


### PC端JQ版 [](https://github.com/lance-yi/myLife-nodes/tree/master/6-Parapack/web-jq)


- 文件说明:
  - ./css/normalize.css 重置页面初始化
  - ./js/lib 存放插件位置
  - ./js/config.js 全局js配置文件
  - ./js/cookis.js cookie相关操作js
  - ./js/plugins.js JQuery插件和helper插件
  - ./js/ajaxReq.js 封装的异步请求接口管理
  - 404.html 错误页面
  - index.html 首页
  - favicon.ico 浏览器icon
- 使用sass(更具自己爱好)
- 使用em布局 **font-size: 62.5%;** 等价于 **1em = 10px**



### PC端Vue SPA适配包 [【vue-cli3-web-init】](https://github.com/lance-yi/vue-cli3-web-init)

- 使用vue-rooter路由
- 使用vuex状态管理
- 使用iview UI组件
- 使用less预编译插件
- 使用babel es6转换插件
- 使用eslint语法检测
- 对iview 主题定制 在my-theme文件下中，默认变量参考 https://github.com/iview/iview/blob/2.0/src/styles/custom.less
- 路由切换添加顶部loading效果
- 封装axios库，针对不同服务器，请求方式进行了简单的封装，直接在 main.js 全局注册到 vue.prototype 下,组件直接通过 this 访问

