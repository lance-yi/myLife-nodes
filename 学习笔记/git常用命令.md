# git 常用命令

### 第一次使用的初始化命令：
```sh
git init
git add *
git commit -m "first commit"
git remote add origin https://github.com/jawil/work.git
git push -u origin maste

```
### 第二次提交直接就使用：

```sh
git add *;
git commit -m "modfield"
git push -u origin master;

```

### 删除文件:

```sh
一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用rm命令删了：
rm test.text
这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，git status命令会立刻告诉你哪些文件被删除了：
现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令git rm删掉，并且git commit：
$ git rm test.txt
$ git commit -m "remove test.txt"
git push -u origin master;
如果删除错了,直接用命令撤回:
$ git checkout -- test.txt

```

### 解决每次提交到服务器都要输入密码的问题

```sh
ssh 那么url就要用类似ssh连接 git@192.168.0.200:weitoo/server-aggregator.git 既然你配置了sshkey那么url就要走ssh协议
url
$ git config --global user.name "your name"
$ git config --global user.name "your name"
$ git config --global user.email "your_email@youremail.com"
（4）进入要上传的仓库，右键git bash，添加远程地址：
$ git remote add origin git@github.com:yourName/yourRepo.git
输入一次密码后就不需要再输入了 会自动保存

没有楼上这么麻烦
建个文件，windows命名为_netrc,linux或mac命名.netrc

machine git.abc1.com
login username
password password
machine git.abc2.com
login username
password password

username是你的用户名，password是你的密码，
machine是你的git网站域名。
可以添加多个。
然后把这个文件放在个人目录下，
windows在C:\Users\XXXXXX目录下，
linux或mac在 ~/ 下

命令：
ssh-copy-id 密钥公共id 代码服务器的地址
例如：
ssh-copy-id -i ~/.ssh/id_rsa.pub code@192.168.0.6

注：
前提已经生成过密钥，生成密钥的命令：
ssh-keygen -t rsa -C 邮箱地址
例如：
ssh-keygen -t rsa -C "lisi@public.cn"

你在本地git init时输入密码

关键一个ssh. key就可以了

```

### 当出现要你配置用户名和邮箱的时候

```sh
git config --global user.name "I Love You"
git config --global user.email "i.love.you@gmail.com"
cat ~/.gitconfig
[user]
        name = I Love You
        email = i.love.you@gmail.com

```

### github更新自己Fork的代码

```sh
  1、clone 自己账号里fork的分支
  git clone https://github.com/micmiu/sql-parser.git
  cd sql-parser

  2、增加远程原始分支到本地（可以用 git remote -v 命令查看远程分支列表）
  $ git remote -v
  origin  https://github.com/micmiu/sql-parser.git (fetch)
  origin  https://github.com/micmiu/sql-parser.git (push)
  如果没有远程原始分支则需要增加：

  git remote add sql-parser_fdb https://github.com/FoundationDB/sql-parser.git
  查看确认远程分支列表：

  git remote -v
  origin  https://github.com/micmiu/sql-parser.git (fetch)
  origin  https://github.com/micmiu/sql-parser.git (push)
  sql-parser_fdb  https://github.com/FoundationDB/sql-parser.git (fetch)
  sql-parser_fdb  https://github.com/FoundationDB/sql-parser.git (push)

  3、fetch原始源分支的新版本到本地
  git fetch sql-parser_fdb


  4、合并两个版本的代码
  git merge sql-parser_fdb/master

  5、把最新的代码提交到github自己（micmiu）的账号上
  git push origin master
 
  6、提交
  git commit -a -m "message"
  相当于把git add *,git add .
  和git commit -m 合并在一起了

```

### Git操作之克隆某一个特定的远程分支

```sh
查看远程分支
git branch -r

建立本地对应分支
git checkout --track 或者 git checkout -b
如：
git  checkout -b dev-zhengqi
git checkout --track  dev-zhengqi

git checkout -b dev (创建dev 分支并切换到dev)


git clone -b <branch name> [remote repository address]
主要就是在clone的时候，后面添加branch的信息。


git branch -d name (删除分支）

```

### 其他常规操作

```sh
    git diff的三个命令
    git diff:
    工作区与暂存区之间的差异对比
    git diff --cached:
    暂存区与版本库之间的差异对比
    git diff master
    工作区与版本库之间的差异对比


    让暂存区撤销还原到工作区:
    git reset HEAD file.name(暂存区被清空)


    让工作区内容还原跟版本库一样:
    git checkout -- filename(工作区被清空,跟版本区一样)



    撤销提交commit
    git commit  -m  "changed" --amend



    打印提交版本信息
    git log


    查看日志记录信息
    git reflog



    git的删除恢复命令:
    *删除

    删除暂存区的文件（工作区文件已经删掉）
    git  rm filerame


    （强制删除暂存区文件，即使工作区文件没有先删掉，但是会删掉工作区和暂存区文件）
    git rm -f filename


    删除暂存区文件，但不会删除工作区文件
    git rm --cached filename


    *恢复
    恢复工作区删除的文件（针对指定文件）
    git checkout commitID filename


    恢复到版本号（针对版本）
    git reset --hard commitID
    >>HEAD^
    git reset --hard HEAD^回到上一个版本

    >>HEAD~<num>
    git reset --hard HEAD~2回到上上个版本
    
```