---
title: Mybtais插件开发
date: 2023-12-11 00:09:06
permalink: /pages/7d43f7/
categories: 
  - Mybatis
tags: 
  - Mybatis
author: 
  name: pruedream
  link: https://github.com/pruedream
sidebar: auto
---

# Mybtais插件开发

mybatis拦截器可以对下面4种对象进行拦截：

1、`Executor`：mybatis的内部执行器，作为调度核心负责调用`StatementHandler`操作数据库，并把结果集通过`ResultSetHandler`进行自动映射

2、`StatementHandler`： 封装了`JDBC Statement`操作，是sql语法的构建器，负责和数据库进行交互执行sql语句

3、`ParameterHandler`：作为处理sql参数设置的对象，主要实现读取参数和对`PreparedStatement`的参数进行赋值

4、`ResultSetHandler`：处理`Statement`执行完成后返回结果集的接口对象，mybatis通过它把`ResultSet`集合映射成实体对象

**拦截的原理是动态代理**

<br/><br/>

## 工作流程

在mybatis中提供了一个`Interceptor`接口，通过实现该接口就能够自定义拦截器，接口中定义了3个方法：

```java
public interface Interceptor {
  Object intercept(Invocation invocation) throws Throwable;
  default Object plugin(Object target) {
    return Plugin.wrap(target, this);
  }
  default void setProperties(Properties properties) {
    // NOP
  }
}
```

- `intercept`：在拦截目标对象的方法时，实际执行的增强逻辑，我们一般在该方法中实现自定义逻辑
- `plugin`：用于返回原生目标对象或它的代理对象，当返回的是代理对象的时候，会调用`intercept`方法
- `setProperties`：可以用于读取配置文件中通过`property`标签配置的一些属性，设置一些属性变量

看一下`plugin`方法中的`wrap`方法源码：

```java
public static Object wrap(Object target, Interceptor interceptor) {
  Map<Class<?>, Set<Method>> signatureMap = getSignatureMap(interceptor);
  Class<?> type = target.getClass();
  Class<?>[] interfaces = getAllInterfaces(type, signatureMap);
  if (interfaces.length > 0) {
    return Proxy.newProxyInstance(
        type.getClassLoader(),
        interfaces,
        new Plugin(target, interceptor, signatureMap)); //Plugin 类实现了InvocationHandler，在其重写的invoke方法也就是 代理对象执行的方法中 调用了我们之前重写的intercept方法
  }
  return target;
}
```



~~~java
// Plugin 类重写的 方法invoke

@Override
  public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    try {
      Set<Method> methods = signatureMap.get(method.getDeclaringClass());
      if (methods != null && methods.contains(method)) {
          // 我们自己重写的intercept方法的内容
        return interceptor.intercept(new Invocation(target, method, args));
      }
      return method.invoke(target, args);
    } catch (Exception e) {
      throw ExceptionUtil.unwrapThrowable(e);
    }
  }
~~~



可以看到，在`wrap`方法中，通过使用jdk动态代理的方式，生成了目标对象的代理对象，在执行实际方法前，先执行代理对象中的逻辑，来实现的逻辑增强 在实际执行前会执行拦截器中的`intercept`方法：

<br/><br/>

## 执行流程

1. Executor发起sql执行任务

2. 先调用statementHandler中的prepare()进行SQL的编译

3. 然后调用statementHandler中的parameterize()设置参数。 这里其实真正设置参数的是ParameterHandler中的setparameters()方法，该方法与typeHandler进行参数类型的转换。

4. 然后执行query/update方法，这里使用ResultSetHandler进行结果的组装工作

   参考 https://blog.51cto.com/c959c/5326665



在mybatis中，不同类型的拦截器按照下面的顺序执行：

> ```
> Executor -> StatementHandler -> ParameterHandler -> ResultSetHandler
> ```

以执行`query` 方法为例对流程进行梳理，整体流程如下：

1、`Executor`执行`query()`方法，创建一个`StatementHandler`对象

2、`StatementHandler` 调用`ParameterHandler`对象的`setParameters()`方法

3、`StatementHandler` 调用 `Statement`对象的`execute()`方法

4、`StatementHandler` 调用`ResultSetHandler`对象的`handleResultSets()`方法，返回最终结果



参考https://mdnice.com/writing/135d7356e3a44476ac7d86f61d2d210e
