---
title: 记录一次mysql远程连接不上
date: 2023-12-10 23:44:14
permalink: /pages/8379a9/
categories: 
  - 随笔
tags: 
  - 随笔
author: 
  name: pruedream
  link: https://github.com/pruedream
sidebar: auto
---

## 背景

在docker上安装了MySQL 后无法远程访问，运行名令如下，使用数据库连接工具时候无法访问MySQL8报错：**Public Key Retrieval is not allowed**

``` java
docker run -p 3306:3306 --name mysql \
-v /home/mysql/log:/var/log/mysql \
-v /home/mysql/data:/var/lib/mysql \
-v /home/mysql/conf:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=xhy123456 \
-d f2ad9f23df82
```

## 原因

mysql 8.0 默认使用 caching_sha2_password 身份验证机制 —— 从原来的mysql_native_password 更改为 caching_sha2_password。

从 5.7 升级 8.0 版本的不会改变现有用户的身份验证方法，但新用户会默认使用新的 caching_sha2_password  客户端不支持新的加密方式。 修改用户的密码和加密方式。

如果用户使用了 sha256_password 认证，密码在传输过程中必须使用 TLS 协议保护，但是如果 RSA 公钥不可用，可以使用服务器提供的公钥；可以在连接中通过 ServerRSAPublicKeyFile 指定服务器的 RSA 公钥，或者AllowPublicKeyRetrieval=True参数以允许客户端从服务器获取公钥；但是需要注意的是 AllowPublicKeyRetrieval=True可能会导致恶意的代理通过中间人攻击(MITM)获取到明文密码，所以默认是关闭的，必须显式开启。

所以可以用mysql_native_password,不要用sha256_password方式，就不会有问题了。

 ~~~ java
本地：ALTER USER root@localhost IDENTIFIED WITH mysql_native_password BY '密码';
远程：ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '密码';
 ~~~
