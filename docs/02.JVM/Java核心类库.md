---
title: Java核心类库
date: 2024-02-15 13:26:02
permalink: /pages/398253/
categories:
  - JVM
tags:
  - 
author: 
  name: pruedream
  link: https://github.com/pruedream
---
# Java核心类库

 Java是一种面向对象的编程语言，它的核心类库是一组预定义的类和接口，这些类和接口提供了许多常用的功能和工具，方便开发者进行编程。那么这些核心类库是放在哪个文件中呢？

核心类库的文件是Java Development Kit（JDK）的一部分，JDK是Java开发环境的基础，它包含了编译器和其他必要的工具。核心类库文件的名称是rt.jar（runtime jar），它是Java Runtime Environment（JRE）的一部分，JRE是Java程序的运行环境，它包括了Java虚拟机和其他运行所需的文件。

核心类库文件rt.jar是一个压缩文件，它包含了Java平台的所有核心类和接口的编译后的字节码。这些类和接口按照包的形式进行组织，每个包都对应着一个目录。例如，java.lang包的类文件放在rt.jar的根目录下的java/lang目录中。

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Hello");
        list.add("World");
        System.out.println(list);
    }
}
1.2.3.4.5.6.7.8.9.10.
```

在这个示例中，我们使用了rt.jar中的java.util包下的ArrayList类。首先，我们通过import语句导入了ArrayList类。然后，我们创建了一个ArrayList对象，并通过add方法向列表中添加了两个元素。最后，我们使用System.out.println方法打印出了列表的内容。

**在编译和运行这个示例代码时，Java编译器和Java虚拟机会自动从JDK的安装目录中找到rt.jar文件，并加载其中的类。**

通过核心类库，Java提供了丰富的功能和工具，方便开发者进行编程。无论是编写文件操作、网络通信、数据库访问还是其他类型的应用程序，都可以利用核心类库中的类和接口来实现。




