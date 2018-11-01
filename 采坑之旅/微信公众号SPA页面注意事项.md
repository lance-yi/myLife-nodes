# vue开发微信公众号下SPA站点的填坑之旅

- vue-router路由使用hash模式(#分隔)
- 项目url(即js中location.href)分隔符#前面需要增加一个问号(?),即location.hash不能为空，至少有一个问号。如果没有问号，则js跳转到有问号的url上，跳转代码见后面微信模板消息部分
- 项目url location.pathname部分，必须以斜杠(/)结尾，如果不是，则跳转，代码同上
- 签名or加密的时候，wx.config签名通过window.location.href.split(‘#’)[0]获取签名使用的url
- 接上，而微信支付签名使用的url，通过用window.location.href获取
- 每次url更改的时候，重新调用JSSDK的config接口
- 为了解决微信支付要求至少二级目录的问题，所有前端url，统一加一个/wap前缀，变成 http(s)://rmwwap.runmin.shop/wap/#/index 的形式，同时在微信后台设置支付目录为 http(s)://rmwwap.runmin.shop/wap/
- 每次url变化后，重新进行微信config，并且重新设置微信分享接口(onMenuShare系列接口)
