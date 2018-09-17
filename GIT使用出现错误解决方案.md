## 1、git push 报错error: remote unpack failed: unpack-objects abnormal exit


```text
远程仓库权限问题，进入到仓库目录控制台输入

chown -R git:git somthing.git

问题即可解决
```
