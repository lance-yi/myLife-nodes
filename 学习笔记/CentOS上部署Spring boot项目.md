---
title: 注意事项 | CentOS上部署Spring boot项目 
tags: java,linux
grammar_cjkRuby: true
---


## rpm方式安装JDK

1. 下载rpm安装包上传到Linux服务器上
2. 安装

```sh
# rpm -ivh 文件名
```
额外相关指令
```sh
	vi /etc/profile
	// ESC退出编辑wq保存，让配置生效
	source /etc/profile 
		
```

##  本地和curl安装Tomcat

1.  直接打开 [Apache Tomcat官网](https://tomcat.apache.org) 选择java版本
2.  选择对应的版本,下载安装包，通过ftp上传到对应的文件夹（复制下载链接使用curl安装）

![选择Tomcat安装包](http://files.ydsweb.cn/hexo-blog/1537349523183.png)

3. 切换到安装目录

```sh
[root@localhost ~]# cd /opt/
[root@localhost opt]# ls
apache-tomcat-8.5.34.tar.gz
[root@localhost opt]# tar -zxvf apache-tomcat-8.5.34.tar.gz 
apache-tomcat-8.5.34/conf/
apache-tomcat-8.5.34/conf/catalina.policy
...
...
[root@localhost opt]# ls
apache-tomcat-8.5.34  apache-tomcat-8.5.34.tar.gz
// 说明已经完成解压了
// 使用curl安装解压
[root@localhost opt]# curl -o apache-tomcat-8.tar.gz http://mirrors.shu.edu.cn/apache/tomcat/tomcat-8/v8.5.34/bin/apache-tomcat-8.5.34.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 9400k  100 9400k    0     0  1450k      0  0:00:06  0:00:06 --:--:-- 1762k

[root@localhost opt]# tar -zxvf apache-tomcat-8.5.34.tar.gz 
apache-tomcat-8.5.34/conf/
apache-tomcat-8.5.34/conf/catalina.policy
...
...
[root@localhost opt]# ls
apache-tomcat-8.5.34  apache-tomcat-8.5.34.tar.gz  apache-tomcat-8.tar.gz

// 因为使用的是同一个包，所以解压出来之后只有一个

```

4. 查看是否安装成功和启动服务

```
// 查看

[root@localhost ~]# cd /opt/apache-tomcat-8.5.34
[root@localhost ~]# ls
bin           conf             lib      logs    README.md      RUNNING.txt  webapps
BUILDING.txt  CONTRIBUTING.md  LICENSE  NOTICE  RELEASE-NOTES  temp         work

// 启动服务

[root@localhost ~]# /opt/apache-tomcat-8.5.34/bin/startup.sh

// 停止tomcat的命令
[root@localhost ~]#  /opt/apache-tomcat-8.5.34/bin/shutdown.sh
```

我们可以在浏览器中使用http://ip:8080访问（注：ip为自己电脑ip），如能够显示tomcat的主页，则表示不需要进行任何操作了，如果不能显示，则需要在Linux中开放防火墙的8080端口。


在Linux下面的防火墙里面开放8080端口，命令如下:

```
[root@localhost ~]# firewall-cmd --add-port=8080/tcp --permanent
success
[root@localhost ~]# firewall-cmd --reload
yes
```

## 部署java war包发布到tomcat上面

1. 使用IDEA工具打包成war包
2. tomcat默认的发布web项目的目录是：**webapps**
3. 将导出的war包拷贝到webapps根目录下，随之tomcat的启动，war包可以自动被解析。
4. 然后在浏览器中输入路径链接，查询是否安装成功



**【补充Linux中设置Tomcat开机自启动】**
```
// 方法一：修改/etc/rc.d/rc.local文件
[root@localhost ~]# vim /etc/rc.d/rc.local

//在文件末尾添加以下内容：
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0
/usr/local/apache-tomcat-test/bin/startup.sh

//可以看出，第一句是jdk的路径，第二句是一个具体的tomcat的启动脚本的路径。当然，这些都需要根据自己的实际需求进行更改的

// 方法二：执行命令：vim /etc/rc.d/init.d/tomcat ，创建脚本文件，在文件中写入如下代码，保存并且退出：
---------------------

#!/bin/sh
#chkconfig: 2345 10 90
#description: Starts and Stops the Tomcat daemon.
#by lizh
##############################################
#Startup script for Tomcat on Linux
#filename tomcat.sh
#Make sure the Java and the tomcat installation path has been added to the PATH
JAVA_HOME=/usr/lib/jvm/jdk1.8.0                  #JDK安装目录
CATALINA_HOME=/opt/apache-tomcat-8.5.34           #tomcat安装目录
export JAVA_HOME
export CATALINA_HOME
###############################################
start_tomcat=$CATALINA_HOME/bin/startup.sh              #tomcat启动文件
stop_tomcat=$CATALINA_HOME/bin/shutdown.sh                  #tomcat关闭文件
start() {                                                              
        echo -n "Starting tomcat: "
        ${start_tomcat}
        echo "tomcat start ok."
}
stop() {
        echo -n "Shutting down tomcat: "
        ${stop_tomcat}
        echo "tomcat stop ok."
}
# See how we were called
                                                   
case "$1" in
  start)
        start
        ;;
  stop)
        stop
        ;;
  restart)
        stop
        sleep 10
        start
        ;;
  *)
        echo "Usage: $0 {start|stop|restart}"
esac
exit 0

---------------------
// 给文件添加权限，使得脚本文件可以执行，命令为
# chmod 755 /etc/rc.d/init.d/tomcat

// 将其添加到服务中，命令如下：
# chkconfig --add /etc/rc.d/init.d/tomcat

// 然后将下面的配置文件加到tomcat中的catalina.sh文件中的最后面，命令如下
# vim /opt/apache-tomcat-8.5.34/bin/catalina.sh
---------------------
export JAVA_HOME=/opt/jdk1.8.0_121   #javajdk的安装路径，使用echo $JAVA_HOME命令可以读取  
export CATALINA_HOME=/opt/apache-tomcat-8.5.34  
export CATALINA_BASE=/opt/apache-tomcat-8.5.34
export CATALINA_TMPDIR=/opt/apache-tomcat-8.5.34/temp  

---------------------

```

**【补充 centOs 7的防火墙相关密令】**
```
1. 查看已打开的端口  # netstat -anp
2. 查看想开的端口是否已开 # firewall-cmd --query-port=666/tcp
	若此提示 FirewallD is not running 
  	表示为不可知的防火墙 需要查看状态并开启防火墙
3. 查看防火墙状态  # systemctl status firewalld
 	running 状态即防火墙已经开启
	 dead 状态即防火墙未开启
4. 开启防火墙，# systemctl start firewalld  没有任何提示即开启成功
5. 开启防火墙 # service firewalld start  
6. 关闭防火墙 # systemctl stop firewalld
7. 重启防火墙 firewall-cmd --reload
	  centos7.3 上述方式可能无法开启，可以先#systemctl unmask firewalld.service 然后 # systemctl start firewalld.service
8. 查看想开的端口是否已开 # firewall-cmd --query-port=666/tcp    提示no表示未开
9. 开永久端口号 firewall-cmd --zone=public --add-port=8080/tcp --permanent   提示    success 表示成功
10. 重新载入配置(重启防火墙)  # firewall-cmd --reload    比如添加规则之后，需要执行此命令
11. 再次查看想开的端口是否已开  # firewall-cmd --query-port=666/tcp  提示yes表示成功
12. 若移除端口 # firewall-cmd --permanent --remove-port=666/tcp
13. 修改iptables  有些版本需要安装iptables-services # yum install iptables-services 然后修改进目录 /etc/sysconfig/iptables   修改内容

[root@localhost logs]# tail -f  文件名 // 动态打印日志

```