---
title: Canal
date: 2023-12-10 23:47:00
permalink: /pages/615856/
categories: 
  - 随笔
tags: 
  - 随笔
author: 
  name: pruedream
  link: https://github.com/pruedream
sidebar: auto
---

 # 什么是canal

官话就不说了，直接一句话 canal是一个用来**同步增量数据的一个工具**。

canal的工作原理就是把自己伪装成MySQL slave，模拟MySQL slave的交互协议向MySQL Mater发送 dump协议，MySQL mater收到canal发送过来的dump请求，开始推送binary log给canal，然后canal解析binary log，再发送到存储目的地，比如MySQL，Kafka，Elastic Search等等。

## canal的原理

canal的实现是基于mysql的主从复制，

Master mysql会将数据变更的操作记录到二进制文件中 binlog ,此时Slave mysql 会有一个线程不断地去读取该文件中的增量内容，然后写入到自己的中继日志 reloylog中，另一个线程负责执行reloylog中的记录，对从数据库的数据进行跟新，canal就是这么个原理，他同样会去读取该二进制文件，并通知下游的服务进行相关信息的跟新。

## canal的使用场景

canal的主要使用场景是用于缓存的跟新，保证数据库和缓存的一致性，相比于原来的更新数据库和更新缓存耦合的操作，使用canal来进行缓存的跟新，解除了更新数据库和更新缓存耦合，减少了代码的复杂程度，只需分别关注更新数据库和更新缓存的操作即可

![img](https://raw.githubusercontent.com/pruedream/PictureBed/main/image/2910022-20230901172921745-339032687.png)