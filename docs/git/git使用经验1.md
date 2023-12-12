---
title: git使用经验1
date: 2023-12-12 18:13:08
permalink: /pages/20be43/
categories:
  - git
tags:
  - 
author: 
  name: pruedream
  link: https://github.com/pruedream
---
# git使用经验1



## 报错信息



```
Updates were rejected because the remote contains work that you do  not have locally. This is usually caused by another repository pushing to the same ref. You may want to first integrate the remote changes  (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

## 解决

上述问题在开发过程中老是出现，时灵时不灵的，还是要搞清楚了，一次搞懂，终生收益。

错误原因：在github上修改了文件，没有更新到本地就上传，永远记住，处理冲突只能在本地处理，所以push之前一定要先pull在本地处理完冲突，再push。

解决方法：本地和远程的文件应该合并后才能上传本地的新文件
具体方法：

1、先pull拉下来，会自动合并的，

2、再上传

