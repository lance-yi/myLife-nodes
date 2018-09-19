---
title: 注意事项 | CentOS上部署Spring boot项目
tags: 
  - java
  - linux
---


## yum方式安装JDK

1. 直接打开 [java SE官网](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 选择java版本
2. 选择对应的版本

![选择JDK版本](http://markdown.xiaoshujiang.com/b3d7743d-747c-488f-8b24-5ef40c9c6b38)

3. 打开控制台，查看yum库中有哪些jdk版本
```sh
	yum search java|grep jdk
```

4. 选择版本，进行安装

```sh
	// 选择版本进行安装
	yum instakkjava-1.8.0-openjdk
	// 安装完成之后，默认安装目录在 /usr/lib/jvm/java-1.8.0-openjdk-*.x86_64
```
5. 设置环境变量

```sh
	vi /etc/profile
	
	// 添加如下内容
	
	#set java environment 
	JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-*.x86_64 
	JRE_HOME=$JAVA_HOME/jre 
	CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib 
	PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin 
	export JAVA_HOME JRE_HOME CLASS_PATH PATH 
	
	// ESC退出编辑wq保存，让配置生效
	source /etc/profile 
		
```

