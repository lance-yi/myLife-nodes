
### 账户管理

> 新增使用者： useradd
```bash
[root@www ~]# useradd [-mMnr][-c <备注>][-d <登入目录>][-e <有效期限>][-f <缓冲天数>][-g <群组>][-G <群组>][-s <shell>][-u <uid>][用户帐号]

-c<备注> 　加上备注文字。备注文字会保存在passwd的备注栏位中。
-d<登入目录> 　指定用户登入时的启始目录。
-D 　变更预设值．
-e<有效期限> 　指定帐号的有效期限。
-f<缓冲天数> 　指定在密码过期后多少天即关闭该帐号。
-g<群组> 　指定用户所属的群组。
-G<群组> 　指定用户所属的附加群组。
-m 　自动建立用户的登入目录。
-M 　不要自动建立用户的登入目录。
-n 　取消建立以用户名称为名的群组．
-r 　建立系统帐号。
-s<shell>　 　指定用户登入后所使用的shell。
-u<uid> 　指定用户ID。
```


> 设置密码： passwd
```bash
[root@www ~]# passwd [-k] [-l] [-u [-f]] [-d] [-S] [username]

-d 删除密码
-f 强制执行
-k 更新只能发送在过期之后
-l 停止账号使用
-S 显示密码信息
-u 启用已被停止的账户
-x 设置密码的有效期
-g 修改群组密码
-i 过期后停止用户账号
```


> 修改账户： usermod
```bash
[root@www ~]# usermod [-LU][-c <备注>][-d <登入目录>][-e <有效期限>][-f <缓冲天数>][-g <群组>][-G <群组>][-l <帐号名称>][-s <shell>][-u <uid>][用户帐号]

-c<备注> 　修改用户帐号的备注文字。
-d登入目录> 　修改用户登入时的目录。
-e<有效期限> 　修改帐号的有效期限。
-f<缓冲天数> 　修改在密码过期后多少天即关闭该帐号。
-g<群组> 　修改用户所属的群组。
-G<群组> 　修改用户所属的附加群组。
-l<帐号名称> 　修改用户帐号名称。
-L 　锁定用户密码，使密码无效。
-s<shell> 　修改用户登入后所使用的shell。
-u<uid> 　修改用户ID。
-U 　解除密码锁定。
```


> 删除用户： userdel
```bash
[root@www ~]# userdel [-r][用户帐号]

-r 　删除用户登入目录以及目录中所有文件。
```

> 查询用户： finger
```bash
[root@www ~]# finger [options] user[@address]

-l 　多行显示。
-s 　单行显示。这个选项只显示登入名称、真实姓名、终端机名称、闲置时间、登入时间、办公室号码及电话号码。如果所查询的使用者是远端服务器的使用者，这个选项无效。
```


> 变更为其他使用者的身份： su
```bash
[root@www ~]# su [-fmp] [-c command] [-s shell] [--help] [--version] [-] [USER [ARG]]

-f 或 --fast 不必读启动档（如 csh.cshrc 等），仅用于 csh 或 tcsh
-m -p 或 --preserve-environment 执行 su 时不改变环境变数
-c command 或 --command=command 变更为帐号为 USER 的使用者并执行指令（command）后再变回原来使用者
-s shell 或 --shell=shell 指定要执行的 shell （bash csh tcsh 等），预设值为 /etc/passwd 内的该使用者（USER） shell
--help 显示说明文件
--version 显示版本资讯
- -l 或 --login 这个参数加了之后，就好像是重新 login 为该使用者一样，大部份环境变数（HOME SHELL USER等等）都是以该使用者（USER）为主，并且工作目录也会改变，如果没有指定 USER ，内定是 root
USER 欲变更的使用者帐号
ARG 传入新的 shell 参数
```


> 查询使用者： w, who, last, lastlog
