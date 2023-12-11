---
title: SpringBoot自动装配原理
date: 2023-12-11 00:11:20
permalink: /pages/154ea5/
categories:
  - Java框架
tags:
  - 
author: 
  name: xugaoyi
  link: https://github.com/xugaoyi
---

# SpringBoot自动装配原理

**自动装配：** 在SpringBoot中，我们只需要进行少量的配置，SpringBoot就可以将组件导入容器。

@SpringBootApplication是一个复合注解包括

@SpringBootConfiguration 底层注解就是@Configuration代表当前是一个配置类，也就是启动类也是个配置类
@EnableAutoConfiguration  负责自动配置机制的注解
@ComponentScan        用来指定扫描哪些包

实现自动装配的是@EnableAutoConfiguration
<br/><br/>

## @EnableAutoConfiguration 负责自动配置机制的注解

两个注解

~~~java
@AutoConfigurationPackage
@Import(AutoConfigurationImportSelector.class)
~~~



**@AutoConfigurationPackage的作用   本质还是用的@Import()**  Registrar方式

~~~java
@Import({Registrar.class})
public @interface AutoConfigurationPackage {
~~~

手动注册bean到容器    大致做的就是获取当前启动类所在的包名，然后将该包下的所有都注册到BeanDefinitionRegistrar里面，这也就是为什么和启动类在同一个包中会被哦自动加载。



**@Import(AutoConfigurationImportSelector.class)**            ImportSelector方式

 AutoConfigurationImportSelector实现的方法    ，底层会默认扫描我们当前系统里面所有META-INF/spring.factories位置的文件然后返回一个组件集合

那么，那么多的组件是全部都要导入吗  要看@Conditional注解，该注解是条件装配注解，也就是满足某种条件参会导入到容器中，

然后返回返回需要导入的组件的全类名数组 最后由 @import进行导入





**核心就是@Import()注解**    @import注解的作用就是向容器中导入指定的组件

@Import()有三种向容器里导入组件的方法

- 导入普通类和配置类  

  ~~~java
  import java.text.SimpleDateFormat;
  import java.util.Date;
   
  public class MyBean {
      private String date;
   
      public MyBean init() {
          this.date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
          return this;
      }
   
      public String getDate() {
          return date;
      }
   
      public void setDate(String date) {
          this.date = date;
      }
   
  }
  
  
  
   
  /**
   * 加载普通类
   */
   // 这里可以一次加载多个类，例如：@Import({ MyBean.class, MyBean2.class, MyBean3.class })
  @Import({ MyBean.class })
  @RestController
  @SpringBootApplication
  public class Demo1Application {
   
      @Autowired
      private MyBean myBean;
   
      public static void main(String[] args) {
          SpringApplication.run(Demo1Application.class, args);
      }
   
      @RequestMapping("/")
      public String index() {
          return myBean.init().getDate();
      }
   
  }
  
  
  
  
  *****************************************************************
      
      
      
      public class MyConfig {
   
      @Bean
      public MyBean getMyBean() {
          System.out.println("Init MyBean");
          return new MyBean();
      }
   
  }
  
  
  
  
  
  /**
   * 加载配置类
   */
  @Import({ MyConfig.class })
  @RestController
  @SpringBootApplication
  public class Demo1Application {
   
      @Autowired
      private MyBean myBean;
   
      public static void main(String[] args) {
          SpringApplication.run(Demo1Application.class, args);
      }
   
      @RequestMapping("/")
      public String index() {
          return myBean.init().getDate();
      }
   
  }
  ~~~

  

- ImportSelector实现导入   selectImports该方法主要用于**获取所有符合条件的类的全限定类名，这些类需要被加载到 IoC 容器中**。

  ~~~java
  public interface ImportSelector {
      String[] selectImports(AnnotationMetadata importingClassMetadata);
  
      @Nullable
      default Predicate<String> getExclusionFilter() {
          return null;
      }
  }
  
  需要实现ImportSelector接口 实现selectImports方法  返回值就是要导入的类数组  然后就会批量导入该数组中的组件
     、返回值： 就是我们实际上要导入到容器中的组件全类名【重点 】 
      
  ********************************************************
      
     示例
   1. 创建Myclass类并实现ImportSelector接口
      
      public class Myclass implements ImportSelector {
      @Override
      public String[] selectImports(AnnotationMetadata annotationMetadata) {
          return new String[]{"com.yc.Test.TestDemo3"};
      }
  }
   
  2. 并标注上使用ImportSelector方式的Myclass类
  @Import({Myclass.class})
  public class TestDemo {
         
  }
   
  
  ~~~

- ImportBeanDefinitionRegistrar实现导入       就是自己注册bean到BeanDefinitionRegistrar

  <br/><br/>

## @Import注解的三种使用方式总结

> 第一种用法：`@Import`（{ 要导入的容器中的组件 } ）：容器会自动注册这个组件，**id默认是全类名** 
>
>  
>
> 第二种用法：`ImportSelector`：返回需要导入的组件的全类名数组，springboot底层用的特别多【**重点** 】
>
>  
>
> 第三种用法：`ImportBeanDefinitionRegistrar`：手动注册bean到容器

**以上三种用法方式皆可混合在一个@Import中使用，特别注意第一种和第二种都是以全类名的方式注册，而第三中可自定义方式。**


<br/><br/>
 

## 自定义Stater

核心就是两点

- 实现相关功能  编写配置类将组件bean向外暴露

- 创建META-INF/spring.factories 将配置类注册扫描   SpirngBoot会扫描

  ~~~java
  org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
   db.router.config.FayeAutoConfig,\
   db.router.qq.KKKl  
  ~~~

  