
### Node.js 应用

> 创建一个基本Node服务应用
```js
var http = require('http');
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
```

> NPM 使用

- 安装模块：npm install [ModuleName] [-g]
- package.json
  - name - 包名。
  - version - 包的版本号。
  - description - 包的描述。
  - homepage - 包的官网 url 。
  - author - 包的作者姓名。
  - contributors - 包的其他贡献者姓名。
  - dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
  - repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
  - main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
  - keywords - 关键字
- 卸载模块: npm uninstall [ModuleName]
- 更新模块: npm update [ModuleName]
- 搜索模块: npm search [ModuleName]
- 使用淘宝 NPM 镜像: npm install -g cnpm --registry=https://registry.npm.taobao.org
  - 使用 cnpm 命令来安装模块: cnpm install [name]

> Node.js 回调函数

**创建一个文件 input.txt **

-阻塞代码实例
```js
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束!");
```

-非阻塞代码实例
```js
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");
```

> Node.js 事件循环
```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");
```
```bash
$ node main.js
连接成功。
数据接收成功。
程序执行完毕。
```

> Node.js Buffer(缓冲区)

- Buffer 与字符编码
  - ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
  - utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
  - utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
  - ucs2 - utf16le 的别名。
  - base64 - Base64 编码。
  - latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
  - binary - latin1 的别名。
  - hex - 将每个字节编码为两个十六进制字符。
```js
const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));
```
- 创建 Buffer 类
  - Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
  - Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
  - Buffer.allocUnsafeSlow(size)
  - Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
  - Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
  - Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
  - Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

- 写入缓冲区
  - buf.write(string[, offset[, length]][, encoding]) 
    ```
    string - 写入缓冲区的字符串。
    offset - 缓冲区开始写入的索引值，默认为 0 。
    length - 写入的字节数，默认为 buffer.length
    encoding - 使用的编码。默认为 'utf8' 。
    ```
- 从缓冲区读取数据
  - buf.toString([encoding[, start[, end]]])
    ```
    encoding - 使用的编码。默认为 'utf8' 。
    start - 指定开始读取的索引位置，默认为 0。
    end - 结束位置，默认为缓冲区的末尾。
    ```
- 将 Buffer 转换为 JSON 对象
  - buf.toJSON()
- 缓冲区合并
  - Buffer.concat(list[, totalLength])
  ```
  list - 用于合并的 Buffer 对象数组列表。
  totalLength - 指定合并后Buffer对象的总长度。

  eg: Buffer.concat([buffer1,buffer2]);
  ```
- 缓冲区比较
  - buf.compare(otherBuffer);
- 缓冲区长度
  - buf.length;

> Node.js Stream(流)

- 读
```js
var fs = require("fs");
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码为 utf8。
readerStream.setEncoding('UTF8');
// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});
readerStream.on('end',function(){
   console.log(data);
});
readerStream.on('error', function(err){
   console.log(err.stack);
});
console.log("程序执行完毕");
```

- 写
```js
var fs = require("fs");
var data = 'www.lanceyi.com';
// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');
// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');
// 标记文件末尾
writerStream.end();
// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});
writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
```

- 管道流
```js
var fs = require("fs");
// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
console.log("程序执行完毕");
```

- 链式流
```js
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");
```

> Node.js模块系统

![nodejs模块加载流程图](./images/nodejs-require.jpg)


> Node.js 全局对象

- `__filename` 当前正在执行的脚本的文件名。 
- `__dirname` 当前执行脚本所在的目录。
- `setTimeout(cb, ms)` 在指定的毫秒(ms)数后执行指定函数(cb)。
- `clearTimeout(t)` 用于停止一个之前通过 setTimeout() 创建的定时器。
- `setInterval(cb, ms)` 在指定的毫秒(ms)数后执行指定函数(cb)。
- `console` 用于提供控制台标准输出。
- `process` 是一个全局变量，即 global 对象的属性。

> Node.js 常用工具

- `util.inherits(constructor, superConstructor)` 是一个实现对象间原型继承的函数。
- `util.inspect(object,[showHidden],[depth],[colors])` 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出
- `util.isArray(object)` 如果给定的参数 "object" 是一个数组返回true，否则返回false。
- `util.isRegExp(object)` 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
- `util.isDate(object)` 如果给定的参数 "object" 是一个日期返回true，否则返回false。
- `util.isError(object)` 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

> Node.js GET/POST请求

- GET `require('url')`;
- POST `require('querystring')`

