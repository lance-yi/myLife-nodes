
### Node.js 工具模块

> `OS` 模块(提供基本的系统操作函数)

```js
var os = require("os")

/**
方法：
  1.	os.tmpdir()
  返回操作系统的默认临时文件夹。
  2.	os.endianness()
  返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
  3.	os.hostname()
  返回操作系统的主机名。
  4.	os.type()
  返回操作系统名
  5.	os.platform()
  返回编译时的操作系统名
  6.	os.arch()
  返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
  7.	os.release()
  返回操作系统的发行版本。
  8.	os.uptime()
  返回操作系统运行的时间，以秒为单位。
  9.	os.loadavg()
  返回一个包含 1、5、15 分钟平均负载的数组。
  10.	os.totalmem()
  返回系统内存总量，单位为字节。
  11.	os.freemem()
  返回操作系统空闲内存量，单位是字节。
  12	os.cpus()
  返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
  13.	os.networkInterfaces()
  获得网络接口列表。
*/

 ```

> `Path` 模块(提供了处理和转换文件路径的工具)

```js
var path = require("path")
/**
方法：
  1.	path.normalize(p)
  规范化路径，注意'..' 和 '.'。
  2.  path.join([path1][, path2][, ...])
  用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
  3.  path.resolve([from ...], to)
  将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。
  4.  path.isAbsolute(path)
  判断参数 path 是否是绝对路径。
  5.	path.relative(from, to)
  用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。
  6.	path.dirname(p)
  返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。
  7.	path.basename(p[, ext])
  返回路径中的最后一部分。同 Unix 命令 bashname 类似。
  8.	path.extname(p)
  返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
  9.	path.parse(pathString)
  返回路径字符串的对象。
  10.	path.format(pathObject)
  从对象中返回路径字符串，和 path.parse 相反。
*/
```

> `Net` 模块(用于底层的网络通信。提供了服务端和客户端的的操作)

```js
var net = require("net")
/**
方法：
  1.	net.createServer([options][, connectionListener])
  创建一个 TCP 服务器。参数 connectionListener 自动给 'connection' 事件创建监听器。
  2.	net.connect(options[, connectionListener])
  返回一个新的 'net.Socket'，并连接到指定的地址和端口。
  当 socket 建立的时候，将会触发 'connect' 事件。
  3.	net.createConnection(options[, connectionListener])
  创建一个到端口 port 和 主机 host的 TCP 连接。 host 默认为 'localhost'。
  4.	net.connect(port[, host][, connectListener])
  创建一个端口为 port 和主机为 host的 TCP 连接 。host 默认为 'localhost'。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
  5.	net.createConnection(port[, host][, connectListener])
  创建一个端口为 port 和主机为 host的 TCP 连接 。host 默认为 'localhost'。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
  6.	net.connect(path[, connectListener])
  创建连接到 path 的 unix socket 。参数 connectListener 将会作为监听器添加到 'connect' 事件上。返回 'net.Socket'。
  7.	net.createConnection(path[, connectListener])
  创建连接到 path 的 unix socket 。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
  8.	net.isIP(input)
  检测输入的是否为 IP 地址。 IPV4 返回 4， IPV6 返回 6，其他情况返回 0。
  9.	net.isIPv4(input)
  如果输入的地址为 IPV4， 返回 true，否则返回 false。
  10.	net.isIPv6(input)
  如果输入的地址为 IPV6， 返回 true，否则返回 false。
*/
```

- `net.Server`
- `net.Socket`


> `DNS` 模块(用于解析域名)

```js
var dns = require("dns")
/**
方法：
  1.	dns.lookup(hostname[, options], callback)
  将域名（比如 'lanceyi.com'）解析为第一条找到的记录 A （IPV4）或 AAAA(IPV6)。参数 options可以是一个对象或整数。如果没有提供 options，IP v4 和 v6 地址都可以。如果 options 是整数，则必须是 4 或 6。
  2.	dns.lookupService(address, port, callback)
  使用 getnameinfo 解析传入的地址和端口为域名和服务。
  3.	dns.resolve(hostname[, rrtype], callback)
  将一个域名（如 'lanceyi.com'）解析为一个 rrtype 指定记录类型的数组。
  4.	dns.resolve4(hostname, callback)
  和 dns.resolve() 类似, 仅能查询 IPv4 (A 记录）。 addresses IPv4 地址数组 (比如，['74.125.79.104', '74.125.79.105', '74.125.79.106']）。
  5.	dns.resolve6(hostname, callback)
  和 dns.resolve4() 类似， 仅能查询 IPv6( AAAA 查询）
  6.	dns.resolveMx(hostname, callback)
  和 dns.resolve() 类似, 仅能查询邮件交换(MX 记录)。
  7.	dns.resolveTxt(hostname, callback)
  和 dns.resolve() 类似, 仅能进行文本查询 (TXT 记录）。 addresses 是 2-d 文本记录数组。(比如，[ ['v=spf1 ip4:0.0.0.0 ', '~all' ] ]）。 每个子数组包含一条记录的 TXT 块。根据使用情况可以连接在一起，也可单独使用。
  8.	dns.resolveSrv(hostname, callback)
  和 dns.resolve() 类似, 仅能进行服务记录查询 (SRV 记录）。 addresses 是 hostname可用的 SRV 记录数组。 SRV 记录属性有优先级（priority），权重（weight）, 端口（port）, 和名字（name） (比如，[{'priority': 10, 'weight': 5, 'port': 21223, 'name': 'service.example.com'}, ...]）。
  9.	dns.resolveSoa(hostname, callback)
  和 dns.resolve() 类似, 仅能查询权威记录(SOA 记录）。
  10.	dns.resolveNs(hostname, callback)
  和 dns.resolve() 类似, 仅能进行域名服务器记录查询(NS 记录）。 addresses 是域名服务器记录数组（hostname 可以使用） (比如, ['ns1.example.com', 'ns2.example.com']）。
  11.	dns.resolveCname(hostname, callback)
  和 dns.resolve() 类似, 仅能进行别名记录查询 (CNAME记录)。addresses 是对 hostname 可用的别名记录数组 (比如，, ['bar.example.com']）。
  12.	dns.reverse(ip, callback)
  反向解析 IP 地址，指向该 IP 地址的域名数组。
  13.	dns.getServers()
  返回一个用于当前解析的 IP 地址数组的字符串。
  14.	dns.setServers(servers)
  指定一组 IP 地址作为解析服务器。
*/
```

> `Domain` 模块(简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的)

```js
var domain = require("domain")
/**
方法：
  1.	domain.run(function)
  在域的上下文运行提供的函数，隐式的绑定了所有的事件分发器，计时器和底层请求。
  2.	domain.add(emitter)
  显式的增加事件
  3.	domain.remove(emitter)
  删除事件。
  4.	domain.bind(callback)
  返回的函数是一个对于所提供的回调函数的包装函数。当调用这个返回的函数时，所有被抛出的错误都会被导向到这个域的 error 事件。
  5.	domain.intercept(callback)
  和 domain.bind(callback) 类似。除了捕捉被抛出的错误外，它还会拦截 Error 对象作为参数传递到这个函数。
  6.	domain.enter()
  进入一个异步调用的上下文，绑定到domain。
  7.	domain.exit()
  退出当前的domain，切换到不同的链的异步调用的上下文中。对应domain.enter()。
  8.	domain.dispose()
  释放一个domain对象，让node进程回收这部分资源。
  9.	domain.create()
  返回一个domain对象。
*/
```