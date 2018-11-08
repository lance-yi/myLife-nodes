# 微信公用模板

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
    <meta name="application-name" content="" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,user-scalable=no">
    <metaname="format-detection" content="telephone=no" />
    <metaname="format-detection" content="email=no" />
    <link rel="shortcut icon" href="" type="image/icon" sizes="16*16">
    <style>
    @charset "utf-8";
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: none;
        vertical-align: baseline;
        /* translate3d会开启GPU加速,提高性能 */
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
    }

    html {
        /* 禁止横屏字体自动缩放 */
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        width: 100%;
        height: 100%;
        overflow: hidden;
        /* 设置根节点字体大小为100px,方便计算; */
        font-size: 15.625vw;
    }

    body {
        width: 100%;
        height: 100%;
        /* 移动端最佳字体选择顺序 */
        font-family: "Helvetica Neue", "Helvetica", "STHeiTi", "sans-serif";
        /* 浏览器宽度在600px~1000px变化的时候，html根元素的font-size大小是18px~22px之间对应变化 */
        font-size: calc(18px + 4 * (100vw - 600px) / 400);
    }
    /* 解决IOS下滚动条滑动不流畅的问题 */
    /* div{
        -webkit-overflow-scrolling:touch;
    } */

    html,
    body {
        /* 禁止用户在网站上选择文本 */
        -webkit-user-select: none;
        user-select: none;
    }
    /* 设置a标签的美化样式 */

    a {
        text-decoration: none;
    }

    a:active {
        background-color: transparent;
    }

    a:active,
    a:hover {
        outline: 0 none;
    }

    a:focus {
        outline: 1px dotted;
    }

    a,
    img {
        border: 0 none;
        width: auto;
        height: auto;
        max-width: 100%;
        vertical-align: top;
        /* 禁用系统默认菜单 */
        -webkit-touch-callout: none;
    }

    button,
    select {
        text-transform: none;
    }

    i,
    em,
    b {
        font-style: normal;
        font-weight: normal;
    }
    /* 美化input type=number类型 */

    input[type=number] {
        -moz-appearance: textfield;
        -webkit-appearance: textfield;
        appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }
    /* 美化placeholder属性/ */

    input::-webkit-input-placeholder {
        color: #ccc;
        font-size: 14px;
    }

    input:focus::-webkit-input-placeholder {
        color: green;
    }

    input::-webkit-input-speech-button {
        display: none;
    }

    textarea {
        overflow: auto;
        resize: vertical;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        -webkit-appearance: none;
        /* border:none; */
        outline: none;
    }

    a,
    button,
    input,
    optgroup,
    select,
    textarea {
        /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    ol,
    ul {
        list-style: none;
        list-style-image: none;
        list-style-type: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    caption,
    th,
    td {
        text-align: left;
        font-weight: normal;
        vertical-align: middle;
    }

    </style>
</head>

<body>
</body>

</html>

```

# 移动端 head头部

```html
<!DOCTYPE html> <!-- 使用 HTML5 doctype，不区分大小写 -->
<html lang="zh-cmn-Hans"> <!-- 更加标准的 lang 属性写法 http://zhi.hu/XyIa -->
<head>
    <!-- 声明文档使用的字符编码 -->
    <meta charset='utf-8'>
    <!-- 优先使用 IE 最新版本和 Chrome -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <!-- 页面描述 -->
    <meta name="description" content="不超过150个字符"/>
    <!-- 页面关键词 -->
    <meta name="keywords" content=""/>
    <!-- 网页作者 -->
    <meta name="author" content="name, email@gmail.com"/>
    <!-- 搜索引擎抓取 -->
    <meta name="robots" content="index,follow"/>
    <!-- 为移动设备添加 viewport -->
    <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
    <!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 http://bigc.at/ios-webapp-viewport-meta.orz -->

    <!-- iOS 设备 begin -->
    <meta name="apple-mobile-web-app-title" content="标题">
    <!-- 添加到主屏后的标题（iOS 6 新增） -->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->

    <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
    <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <!-- 设置苹果工具栏颜色 -->
    <meta name="format-detection" content="telphone=no, email=no"/>
    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">
    <!-- iOS 图标 begin -->
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png"/>
    <!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png"/>
    <!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png"/>
    <!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
    <!-- iOS 图标 end -->

    <!-- iOS 启动画面 begin -->
    <link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png"/>
    <!-- iPad 竖屏 768 x 1004（标准分辨率） -->
    <link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png"/>
    <!-- iPad 竖屏 1536x2008（Retina） -->
    <link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png"/>
    <!-- iPad 横屏 1024x748（标准分辨率） -->
    <link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png"/>
    <!-- iPad 横屏 2048x1496（Retina） -->

    <link rel="apple-touch-startup-image" href="/splash-screen-320x480.png"/>
    <!-- iPhone/iPod Touch 竖屏 320x480 (标准分辨率) -->
    <link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png"/>
    <!-- iPhone/iPod Touch 竖屏 640x960 (Retina) -->
    <link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png"/>
    <!-- iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina) -->
    <!-- iOS 启动画面 end -->

    <!-- iOS 设备 end -->
    <meta name="msapplication-TileColor" content="#000"/>
    <!-- Windows 8 磁贴颜色 -->
    <meta name="msapplication-TileImage" content="icon.png"/>
    <!-- Windows 8 磁贴图标 -->

    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
    <!-- 添加 RSS 订阅 -->
    <link rel="shortcut icon" type="image/ico" href="/favicon.ico"/>
    <!-- 添加 favicon icon -->

    <title>标题</title>
</head>
```


# HTML head头部模板说明

```html
<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
    <!-- 很迷惑吧，IE定义的meta为啥会出现chrome呢？其实设置为chrome=1时，则会在IE9及以下浏览器中激活Chrome Frame ，强制IE使用Chrome Frame渲染页面。 -->
    <meta name="application-name" content="" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <!-- 此类型meta使用最广泛，其中，又属keywords和description这两个名称的使用率最高，是搜索引擎优化的主要手段之一，推荐大家使用。设置keywords和description这两个meta时，尽量使用简洁和语义明确的词语，下面的示例展示的是BBC新闻网站设置的application-name、keywords和description对应的meta信息：
    <meta name="application-name" content="BBC"/>
    <meta name="description" content="Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever you are, whatever your age." />
    <meta name="keywords" content="BBC, bbc.co.uk, bbc.com, Search, British Broadcasting Corporation, BBC iPlayer, BBCi" /> -->
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,user-scalable=no">
    <metaname="format-detection" content="telephone=no" />
    <!--    initial-scale=1.0 ：设置缩放比例为1.0；
            minimum-scale=1.0 和 maximum-scale=1.0 ：最小缩放比例和最大缩放比例；
            user-scalable=no ：禁止用户自由缩放，user-scalable 默认值为 yes 。 -->
    <metaname="format-detection" content="email=no" />
    <!--  content 里面的参数：telephone=no 是禁止浏览器自动识别手机号码，email=no 是禁止浏览器自动识别Email。 -->
    <link rel="shortcut icon" href="" type="image/icon" sizes="16*16">
    <!-- 网站小图标 -->
    <base href="" target="_blank">
    <!-- 当前所有超链接在空白页打开 -->
    <script src="https://cdn.bootcss.com/vue/1.0.17/vue.min.js" defer></script>
    <!-- defer当浏览器下载好脚本之后，不会立马执行代码，直接执行下面的文件 -->
    <script src='http://cdn.bootcss.com/vue-resource/0.7.0/vue-resource.min.js' async></script>
    <!-- async当浏览器下载好脚本文件后，会一边执行脚本代码，一遍执行下面的的代码 -->
    <script src="https://cdn.jsdelivr.net/vue.router/0.7.10/vue-router.min.js "></script>
   <link href=" http://g.alicdn.com/thx/cube/1.3.1/cube.min.css " rel="stylesheet " type="text/css " />
   <!-- 引入样式重置 -->
</head>

```



