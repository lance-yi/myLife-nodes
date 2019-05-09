
### Bash shell 的功能

> 命令编修能力：history
```bash
[root@localhost ~]# history 
1 ll
2 history
[root@localhost ~]# !1

!1: 执行ll
```
> 命令不档案补全功能： ([tab] 挄键的好处)
- [Tab] 接在一串指令的第一个字的后面，则为命令补全；
- [Tab] 接在一串指令的第二个字以后时，则为『档案补齐』！

> 命令别名设定功能： alias

```bash
alias lm='ls -al'
```

> 观察环境发量不常见环境发量说明: env

> set 观察所有发量 (含环境发量不自定义发量)

> 截取命令： cut, grep

> 排序命令： sort, wc, uniq

> 字符转换命令： tr, col, join, paste, expand