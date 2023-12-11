---
title: Set集合的去重原理
date: 2023-12-11 00:26:11
permalink: /pages/a1d000/
categories:
  - Java核心基础
tags:
  - 
author: 
  name: xugaoyi
  link: https://github.com/xugaoyi
---

# Set集合的去重原理

## 原理



Set集合去重主要是调用 add 方法时，使用了 hashCode 方法和 equals 方法：  **分三种形式**

- 首先会调用hashCode 方法获取hash值，如果在 Set集合 中找不到与该元素 hashCode 值相同的元素，则说明该元素是新元素，会被添加到 Set 集合中；
- 如果两个元素的 hashCode 值相同，并且使用 equals 方法比较后，返回值为 true，那么就说明两个元素相同，新元素不会被添加到 Set 集合中；
- 如果 hashCode 值相同，但是 equals 方法比较后，返回值为 false ，则两个元素不相同，新元素会被添加到 Set 集合中。

 

也就是说hash不存在集合里，那一定不存在，hash值存在集合里面那还要考虑hash冲突的情况，所以需要  equals 方法进一步判断。



为什么刚开始用的就是hashCode 方法而不是equals 方法，原因在于效率高，想想看，用hashCode 方法可以根据hash值快速找到指定的元素，用equals方法岂不是要全部遍历一遍在在按照equals方法里的比较逻辑判断是否重复。

| **方法**                                    | **返回值** | **说明**       |
| ------------------------------------------- | ---------- | -------------- |
| hashCode（） == true && equals （） == true | true       | 判定元素重复   |
| hashCode（） == true && equals（） == false | false      | 判定元素不重复 |
| hashCode（） == false                       | false      | 判定元素不重复 |



## 实战

**使用 Set集合存储User ，并且不能有重复数据**

~~~java
public class User {
    private int id;
    private String name;
    
    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    public static void main(String[] args) {
        Set<User> hs = new HashSet<>();
        //初始化 u1
        User u1 = new User(1,"zs");
        //初始化 u2
   		User u2 = new User(1,"zs");
        //将 u1和 u2都加入到 HashSet集合中
        hs.add(u1);
        hs.add(u2);
        //遍历输出HashSet集合
        for (User h : hs) {
            System.out.println(h);
        }
    }
}
控制台打印：
User{id=1, name='zs'}
User{id=1, name='zs'}

~~~

结果发现是没有去重成功，原因在于没有重写HashCode 方法和 equals 方法。如果不重写HashCode 方法，默认是获取到对象所在的地址值进hash运算判断是否是同一对象，而equals方式则是比较地址值。这样的话这两个对象确实是不一样的。





**改进** 

~~~java
public class User {
    private int id;
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
 
    //重写 equals 方法
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id &&
                Objects.equals(name, user.name);
    }
	
    //重写 hashCode 方法
    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    public static void main(String[] args) {
        HashSet<User> hs = new HashSet<>();
        User u1 = new User(1,"zs");
        User u2 = new User(1,"zs");
        hs.add(u1);
        hs.add(u2);
        for (User h : hs) {
            System.out.println(h);
        }
    }
}

控制台打印：
User{id=1, name='zs'}

~~~



可以看到此时按照我们的要求进行了去重 即根据对象里的属性来判断是否重复。可以看到HashCode方法重写

方法就是按照自己的重复规则，拿相应的属性去hash。        Objects.hash(id, name);

总结：Set 存储自定义类型元素，并要去除重复的元素时，需要在该元素中重写 HashCode 方法和 equals 方法。