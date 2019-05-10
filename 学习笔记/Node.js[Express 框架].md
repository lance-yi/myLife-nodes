### Node.js Express 框架

> 安装 Express  `cnpm install express --save` 默认安装中间件

```
body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
```

> Express 框架实例

```js
//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
```

**请求和响应**
```js
app.get('/', function (req, res) {
   // --
})
```
**Request 对象**常见属性: 

-  req.app：当callback为外部文件时，用req.app访问express的实例
-  req.baseUrl：获取路由当前安装的URL路径
-  req.body / req.cookies：获得「请求主体」/ Cookies
-  req.fresh / req.stale：判断请求是否还「新鲜」
-  req.hostname / req.ip：获取主机名和IP地址
-  req.originalUrl：获取原始请求URL
-  req.params：获取路由的parameters
-  req.path：获取请求路径
-  req.protocol：获取协议类型
-  req.query：获取URL的查询参数串
-  req.route：获取当前匹配的路由
-  req.subdomains：获取子域名
-  req.accepts()：检查可接受的请求的文档类型
-  req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
-  req.get()：获取指定的HTTP请求头
-  req.is()：判断请求头Content-Type的MIME类型

**Response 对象**常见属性:

- res.app：同req.app一样
- res.append()：追加指定HTTP头
- res.set()在res.append()后将重置之前设置的头
- res.cookie(name，value [，option])：设置Cookie
- opition: domain / expires / httpOnly / maxAge / path / secure / signed
- res.clearCookie()：清除Cookie
- res.download()：传送指定路径的文件
- res.get()：返回指定的HTTP头
- res.json()：传送JSON响应
- res.jsonp()：传送JSONP响应
- res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
- res.redirect()：设置响应的Location HTTP头，并且设置状态码302
- res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
- res.send()：传送HTTP响应
- res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
- res.set()：设置HTTP头，传入object可以一次设置多个头
- res.status()：设置HTTP状态码
- res.type()：设置Content-Type的MIME类型

> 设置静态文件

```js
app.use('/public', express.static('public'));
```

> GET 方法

```js
var express = require('express');
var app = express();
 
app.use('/public', express.static('public'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
```

> POST 方法

```js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use('/public', express.static('public'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
```

> 文件上传

```js
var express = require('express');
var app = express();
var fs = require("fs");
 
var bodyParser = require('body-parser');
var multer  = require('multer');
 
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上传的文件信息
 
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
```


