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

** 行远自迩，登高自卑，与君共勉。**    


###  wap端适配包 [wap-rem](/wap-rem)

- base.css 重置页面样式
- 使用rem布局、100px=1rem

config.js 文件配置

```js
window['adaptive'].desinWidth = 750; // 设计图宽度
window['adaptive'].baseFont = 18; // 没有缩放时的字体大小
window['adaptive'].maxWidth = 750; // 页面最大宽度 默认540
window['adaptive'].init(); // 调用初始化方法
```

- 使用sass语法（你可以根据自己习惯来）


### 

