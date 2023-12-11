---
title: JVM
date: 2023-12-11 00:34:32
permalink: /pages/57e88c/
categories:
  - JVM
tags:
  - 
author: 
  name: xugaoyi
  link: https://github.com/xugaoyi
---
# JVM





## 结构



## Java字节码文件

### 组成



![image-20231130184238573](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130184238573.png)

<br>

**基本信息：** 主要是两个，一个是魔数，一个是版本号。魔数用来校验文件的类型（是否是class文件），因为不能做到凭借文件扩展名就能判断文件类型，软件版本号用来标识编译该字节码文件的jdk的版本号，当前字节码版本号需要小于实际运行时jdk的的版本号才能运行。

![image-20231130192201790](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130192201790.png)

<br>

![image-20231130192357925](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130192357925.png)



<br>

![image-20231130192421422](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130192421422.png)



### 重点介绍

<br>

#### 常量池

常量池存放一些字符串常量，会在方法里的字节码指令中被引用。

![image-20231130185033894](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130185033894.png)



<br>

#### 方法



![image-20231130191624595](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130191624595.png)

##### 简单字节码指令的阅读

局部变量表，，方法栈



## 类的生命周期

最重要的是初始化阶段，因为这个阶段可以进行人为的干涉

![image-20231130194107705](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130194107705.png)



<br>

### 加载阶段

两个对象



<br>

### 连接阶段







<br>

### 初始化阶段







<br>

## 类加载器







<br>

## 运行时数据区（JVM管理的内存）

线程共享的是每个线程都可以访问，线程不共享的是每个线程都有自己的一份



![image-20231130195007649](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130195007649.png)

<br>

### 程序计数器

字节码文件加载到内存后，每一条字节码指令都会有自己的内存地址，

程序计数器的作用就是保存下一条将要执行的字节码指令的地址，方便解释器获取到转化成机器指令运行，在此基础上产生两个特别重要的作用

**控制程序的执行，实现分支，跳转，异常等逻辑。**

![image-20231130200212758](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130200212758.png)



<br>

多线程环境下，能够保存线程将执行的下一条指令地址，在得到cpu的执行权时继续运行程序。

![image-20231130200244485](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130200244485.png)

该区域不会出现内存溢出，因为程序计数器中只会保存一个固定长度的内存地址，（用来存放字节码指令的地址）而内存地址的长度是不会发生改变的，具体的长度要看具体的硬件配置。



<br>

### Java虚拟机栈和本地方法栈



Java虚拟机栈存放的是java语言编写的方法的栈帧，本地方法栈存放的是C++编写的方法的栈帧，**栈帧就是存放该方法的状态和变量的栈空间。**



![image-20231130205205490](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130205205490.png)

**Java虚拟机栈随着线程的创建而创建，而回收则会在线程的销毁时进行。由于方法可能会在不同线程中执行，每个线程都会包含一个自己的虚拟机栈。**



#### 栈帧的组成

 **栈帧随着方法调用而创建，随着方法结束而销毁。无论方法正常完成还是异常完成都算作方法结束。**

![image-20231130204700028](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130204700028.png)

<br>

##### 局部变量表

用于存放方法执行过程中的所有局部变量。

**局部变量表的结构**

![image-20231130205520162](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130205520162.png)

槽主要保存一下几种数据：

- 方法参数 。其顺序与方法中参数定义的顺序一致。
- 实例方法的this对象（第一个槽）
- 方法内申明的局部变量

![image-20231130205813329](https://cdn.jsdelivr.net/gh/pruedream/PictureBed@main/image/image-20231130205813329.png)



<br>

##### 操作数栈

操作数栈用于存放方法执行过程中的中间数据。在对局部变量进行操作的时候是需要将其从局部变量表中copy到操作数栈中的。

在编译期就可以确定操作数栈的最大深度,从而在执行时正确的分配内存大小。



<br>

##### 帧数据



<br>

### 堆



<br>

### 方法区



<br>

## 垃圾回收





<br>

## JVM调优



