---
title: LinkList双端队列
date: 2024-02-18 13:33:59
permalink: /pages/81de35/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: pruedream
  link: https://github.com/pruedream
---
# LinkLIst双端队列



常用LinkedList来模拟链式队列， 其本身是一个用双向链表模拟的双向队列



头-----------尾



增加：
add(E e)：在链表后添加一个元素；   通用方法
addFirst(E e)：在链表头部插入一个元素；  特有方法
addLast(E e)：在链表尾部添加一个元素；  特有方法
push(E e)：与addFirst方法一致  
offer(E e)：在链表尾部插入一个元素                                                                                                                                                  add(int index, E element)：在指定位置插入一个元素。      
offerFirst(E e)：JDK1.6版本之后，在头部添加； 特有方法                                                                                                         offerLast(E e)：JDK1.6版本之后，在尾部添加； 特有方法

删除：
remove() ：移除链表中第一个元素;    通用方法  
remove(E e)：移除指定元素；   通用方法
removeFirst(E e)：删除头，获取元素并删除；  特有方法
removeLast(E e)：删除尾；  特有方法
pollFirst()：删除头；  特有方法
pollLast()：删除尾；  特有方法
pop()：和removeFirst方法一致，删除头。 
poll()：查询并移除第一个元素     特有方法    

查：
get(int index)：按照下标获取元素；  通用方法
getFirst()：获取第一个元素；  特有方法
getLast()：获取最后一个元素； 特有方法
peek()：获取第一个元素，但是不移除；  特有方法
peekFirst()：获取第一个元素，但是不移除； 
peekLast()：获取最后一个元素，但是不移除；
pollFirst()：查询并删除头；  特有方法
pollLast()：删除尾；  特有方法
poll()：查询并移除第一个元素     特有方法