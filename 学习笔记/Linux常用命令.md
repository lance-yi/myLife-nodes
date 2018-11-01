# Linux 常用命令

### 卸载软件

```
如果你带有yum， 可以直接yum remove xxx
如果是rpm包， rpm - e xxx
tar包的话需要你直接删除该文件或者make uninstall xxx
```

### 新建文件夹

```
mkdir 文件名
新建一个名为test的文件夹在home下
view source1 mkdir / home / test
```

### 删除文件或文件夹

```
1、 删除home目录下的test目录
rm / home / test
2、 这种不带参数的删除方法经常会提示无法删除， 因为权限不够。
rm - r / home / test
3、 - r是递归的删除参数表中的目录及其子目录。 目录将被清空并且删除。 当删除目录包含的具有写保护的文件时用户通常是被提示的。
rm - rf / home / test
```
### 移动文件或文件夹

```
mv[options] 源文件或目录 目标文件或目录

示例：

1、 移动hscripts文件夹 / 目录下的所有文件， 目录和子目录到tmp目录mv hscripts tmp
分析： 在上述命令中， 如果tmp目录已经存在， mv命令将移动hscripts文件夹 / 目录下的所有文件， 目录和子目录到tmp目录。 如果没有tmp目录， 它将重命名 hscripts目录为tmp目录。

2、 移动多个文件 / 更多问价到另一目录
mv file1.txt tmp / file2.txt newdir
这个命令移动当前目录的file1.txt文件和tmp文件夹 / 目录的file2.txt文件到newdir目录。

参数：

- i： 交互方式操作。 如果mv操作将导致对已存在的目标文件的覆盖， 此时系统询问是否重写， 要求用户回答” y” 或” n”， 这样可以避免误覆盖文件。

- f： 禁止交互操作。 mv操作要覆盖某个已有的目标文件时不给任何指示， 指定此参数后i参数将不再起作用。
```

### 复制文件或文件夹

```

cp[options] 来源档(source) 目的檔(destination)

参数：
- a： 相当于 - pdr 的意思； - d： 若来源文件为连结文件的属性(link file)， 则复制连结文件属性而非档案本身； - f： 为强制(force) 的意思， 若有重复或其它疑问时， 不会询问使用者， 而强制复制； -
i： 若目的檔(destination) 已经存在时， 在覆盖时会先询问是否真的动作！ - l： 进行硬式连结(hard link) 的连结档建立， 而非复制档案本身； - p： 连同档案的属性一起复制过去， 而非使用预设属性； - r：
递归持续复制， 用于目录的复制行为； - s： 复制成为符号连结文件(symbolic link)， 亦即『 快捷方式』 档案； - u： 若 destination 比 source 旧才更新 destination！
最后需要注意的， 如果来源档有两个以上， 则最后一个目的文件一定要是『 目录』 才行！

示例:


1、 复制两个文件:
cp file1 file2
上述cp命令复制文件file1.php 的内容到文件file2.php中。

2、 备份拷贝的文件:
cp - b file1.php file2.php
创建文件file1.php的带着符号‘~’的备份文件file2.php~。
3、 复制文件夹和子文件夹:
cp - R scripts scripts1
上面的 cp 命令从 scripts 复制文件夹和子文件夹到 scripts1。

```

### 创建目录

```
mkdir 文件名
mkdir /
var / www / test


1. 改变文件的权限
加入 - R 参数， 就可以将读写权限传递给子文件夹
例如chmod - R 777 / home / mypackage
那么mypackage 文件夹和它下面的所有子文件夹的属性都变成了777.
777 是读、 写、 执行权限...

```


