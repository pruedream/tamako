---
title: logback配置讲解
date: 2023-12-13 16:59:38
permalink: /pages/995856/
categories:
  - 日志
tags:
  - 
author: 
  name: pruedream
  link: https://github.com/pruedream
---
# Logback配置文件简介

SpringBoot默认使用的日志实现就是Logback， 上层应用只需要面向SLF4J的调用语法即可。

## 配置文件语法

详细介绍一下logback中比较常用的几个标签以及各自代表的含义。

### configuration标签

作为配置文件的根标签，configuration更多的是对整个Logback配置读取的模式进行定义，configuration标签汇中可以定义的属性如下：

1. debug: 默认debug值为false，如果debug设置为true的话，则无论配置读取成功与否，都会将日志框架的状态打印出来，为false的话则只有在读取配置出错时才会打印状态日志。
2. scan：默认为false，将scan设为true的话，则logback会自动的定期扫描配置文件，如果配置文件发生变更，则logback能够快速识别并重新配置。可以通过scanPeriod来覆盖默认的扫描间隔。这个功能在生产环境建议不要开启，因为基本上生产环境的日志框架的配置都是稳定的。只有在开发环境需要调试日志框架的行为时，可以将该功能开启，减少因为修改配置进行调试而重启应用的麻烦。

### logger标签

**logger可以理解为就是一个专门打印日志的对象，可以对应到我们在代码中具体打印日志时候的logger**

~~~java
logger.info()
~~~

**一个完整的日志打印需要有logger负责记录打印日志，appender来决定该logger记录的日志要输出到什么地方，如，文件，控制台。**

~~~java
此处就在配置文件中定义了一个logger，在代码层面可以根据nam获取到 
<logger name="MessageLinkTraceLogger" level="info" additivity="false">
        <appender-ref ref="console"/>
        <appender-ref ref="info_file"/>
        <appender-ref ref="error_file"/>
        <appender-ref ref="message_link_trace_file_info"/>
        <appender-ref ref="message_link_trace_file_error"/>
    </logger>
~~~



logger是日志流隔离的基本单元，每个logger都会绑定到一个LoggerContext。Logger之间存在树状层级关系，即A Logger可以是B Logger的父Logger。而它们之间的层级关系则是根据logger的名称来决定的。假如logger A的name为`com.moduleA`，而logger B的name为`com.moduleA.packageA`，则可以说A是B的父logger。这种树状结构的作用在于，假如B并没有定义自己的日志级别，则会继承A的日志级别。其它的如appender也会根据继承关系计算得出。

logger只有一个name属性是必填的，通常来说，除了需要特殊定义的几个logger name之外，其它的基本都会以module的维度进行定义，从而确保模块下的每一个类在以自己的类名获取Logger时，能够向上找到对应的Logger。

举个例子，假如现在定义了一个name为`com.rale.service`的logger，则位于`com.rale.service.HelloService.java`类中使用`LoggerFactory.getLogger(HelloService.class)`获取到的Logger，虽然在配置文件中并没有声明，但是会以该类的全路径作为logger的名称，按照Logger的层级不断向上找到最近的父Logger，并最终返回name为`com.rale.service`的logger。

logger还有一个标签为level，可以为该logger分配对应的日志级别，只有高于该级别的日志会输出。如果没有显示定义level的值，则会从最近的显式声明了日志级别的父节点继承其日志级别。

一个基础的logger配置如下：

```xml
<logger name="integration" level="INFO" additivity="false">
    <appender-ref ref="integration"/>
    <appender-ref ref="common-error"/>
</logger>
```

一个logger下可以包含多个appender-ref标签，该标签声明了该logger的日志会打印到这些输出流中。这里还有一个比较特殊的属性additivity，它是用来约束appender继承行为的。在默认情况下，aditicity的值为true，即logger除了会打印到当前显式声明的appender-ref中，还会打印到所有从父Logger中继承的appender中。例如假设root中声明了`<appender-ref ref="common">`，则integration会同时向这三个输出流中打印日志。如果父logger和子logger中存在相同的appender，该日志也会向该appender打印两遍。因此，通过additivity设置为false，可以减少因为意料之外的appender继承导致日志的过量输出。

### appender标签

一个appender对应一个日志输出流。**同一个appender可以绑定在多个logger上，即多个logger均可以向该appender输出日志。因此appender的实现内部进行了并发控制，防止日志乱码。**

appender支持的输出端很多，包括控制台，文件，远程Socket服务器，MySQL，PostgreSQL等数据库，远程UNIX日志进程，JMS等。

appender有两个强制属性name和class（Appender类的全路径），包含0到多个layout标签，0到多个encoder标签，0到多个filte>标签。它还可以包含任意多个Appender Bean类的成员变量属性值。

其中layout和encoder标签用来对appender中的日志进行格式化，filter标签则支持对appender中传来的日志信息进行过滤，来决定哪些日志打印哪些不打印，因此可以通过filter来定义appender维度的日志级别。

一个典型的appender如下：

```xml
    <appender name="common-error"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_PATH}/sls-common-error.log</file>
        <encoder>
            <pattern>${LOCAL_FILE_LOG_PATTERN}</pattern>
        </encoder>
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>ERROR</level>
        </filter>
    </appender>
```

这里声明了一个文件输出流，并且用file标签定义了输出文件的位置，用encoder定义了日志打印的格式。这里通过引用变量的形式来定义，变量将在后面property标签中详细介绍。接着绑定了一个filter，并且使用该filter定义了appender只会打印出日志级别大于等于ERROR级别的日志。

### root标签

root其实也是个Logger，只不过是最基础最底层的logger，如果你不自己创建logger，最终都会是通过root这个logger来记录日志，前面说过logger之间是独立的，是日志流隔离的基本单元，所以我们如果有其他业务需求要用到不同的logger，就需要我们自行创建一个logger并进行配置，然后在代码中获取到该logger然后用来进行打印，然后根据配置的appender输出到自己单独的位置存储起来。举个例子：需要单独将消息的链路日志保存下来。此时就可以就需要我们自行创建一个logger并进行配置，从而与系统日志隔离开。

~~~java
public class MessageLinkTraceLogger {

    private final static Logger logger = LoggerFactory.getLogger("MessageLinkTraceLogger");

    public static void info(String s) {
        logger.info(s);
    }

    public static void info(String s, Object... objects) {
        logger.info(s, objects);
    }

    public static void error(String s) {
        logger.error(s);
    }

    public static void error(String s, Object... objects) {
        logger.error(s, objects);
    }
}

~~~



~~~java
  <root level="info">
        <appender-ref ref="console"/>
        <appender-ref ref="debug_file"/>
        <appender-ref ref="info_file"/>
        <appender-ref ref="warn_file"/>
        <appender-ref ref="error_file"/>
    </root>

~~~



root标签要求在配置中必须声明一次，root标签其实定义的是root logger的配置信息，它的默认的日志级别为debug。所有的logger的最终的父logger一定是root logger。

### property标签

property标签支持在配置文件中声明变量。配置文件的变量有三种来源，分别是通过JVM COMMAND，JAVA COMMAND，Classpth以及当前的配置文件。举个例子，JAVA命令传入变量的格式如下`java -DUSER_HOME="/home/sebastien" MyApp2`。property标签支持configuration文件中声明成员变量，它支持三种类型：KV，文件相对路径，Classpth下的文件。

```xml
  <!--键值型声明-->
  <property name="USER_HOME" value="/home/sebastien" />

  <!--配置文件声明-->
  <property file="src/main/java/chapters/configuration/variables1.properties" />

  <!--Classpath资源-->
  <property resource="resource1.properties"/>
```

对于这些变量的引用采用标准Linux变量引用方法，通过${变量名称}即可以引用变量的值。同样也支持为这些变量声明默认值，通过`${变量名称:-默认值}`的语法结构。

一个简单的声明配置并使用的例子如下：

```xml
<configuration>
  <property name="USER_HOME" value="/home/sebastien" />
  <appender name="FILE" class="ch.qos.logback.core.FileAppender">
    <file>${USER_HOME}/myApp.log</file>
    <encoder>
      <pattern>%msg%n</pattern>
    </encoder>
  </appender>

  <root level="debug">
    <appender-ref ref="FILE" />
  </root>
</configuration>
```