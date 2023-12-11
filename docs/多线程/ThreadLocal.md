---
title: ThreadLocal
date: 2023-12-10 23:58:35
permalink: /pages/0da74c/
categories:
  - 多线程
tags:
  - 
author: 
  name: xugaoyi
  link: https://github.com/xugaoyi
---

# ThreadLocal

ThreadLocal是在多线程编程的环境下，为每个线程创建一个单独的线程变量，互不影响。避免了多个线程同时操作共享变量时产生冲突而带来的一些问题。相比于加锁的操作，体现一种以空间换时间的思想

## ThreadLocal的结构

在早期的版本中，ThreadLocal的实现是每个ThreadLocal实例创建一个Map，然后以thread为key，存放对应的value。而在JDK8中，ThreadLocal的设计是，**每个Thread维护一个 **ThreadLocalMap，这个Map的Key是ThreadLocal实例本身，value是要存储的值。ThreadLocalMap是由ThreadLocal来维护的，采用了懒加载的设计模式，只有在第一次使用get或者set时，才会初始化。
![img](https://raw.githubusercontent.com/pruedream/PictureBed/main/image/2910022-20230901173316451-945842724.png)

以下是其主要方法get,set的具体流程

get执行流程：

1. 通过当前线程，获取当前线程维护的ThreadLocalMap。
2. 以ThreadLocal自己为实例（传入this），从Map获取Entry并返回。
3. 如果1中map不存在或者map中没有ThreadLocal对应的key，那么会执行初始化setInitialValue()流程。
   set源码

set执行流程：

1. 通过当前线程，获取当前线程维护的ThreadLocalMap。
2. 以当前ThreadLocal的实例为key，设置一个value。
3. 如果获取Map时，发现map还为空。那么会调用`createMap()`方法先创建map。

## ThreadLocalMap

ThreadLocalMap可以说是其中最重要的组成部分，ThreadLocalMap实际上并没有继承Map接口，而是自己实现了Map功能。其内部的Entry也是独立实现的。

```verilog
ThreadLocalMap(ThreadLocal<?> firstKey, Object firstValue) {
    table = new Entry[INITIAL_CAPACITY];
    int i = firstKey.threadLocalHashCode & (INITIAL_CAPACITY - 1);
    table[i] = new Entry(firstKey, firstValue);
    size = 1;
    setThreshold(INITIAL_CAPACITY);
}
```

从其构造函数就能看出，其使用ThreadLocal作为key，需要维护的线程变量作为值，并且采用斐波那契散列的方式来计算索引下标。