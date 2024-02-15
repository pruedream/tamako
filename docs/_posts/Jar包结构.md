# jar包结构



springboot jar
我这里解压了一个自己打好的jar包
发现目录结构如下

![在这里插入图片描述](https://raw.githubusercontent.com/pruedream/PictureBed/main/image/f77df03e67ec49a385341d7d2f7a98e6.png)



![在这里插入图片描述](https://raw.githubusercontent.com/pruedream/PictureBed/main/image/4146acfec093400980d6a7852badf48a.png)



该目录比使用传统jar命令打包结构更复杂一些，目录含义如下：

BOOT-INF/classes：目录存放应用编译后的class文件。
BOOT-INF/lib：目录存放应用依赖的第三方JAR包文件。
META-INF：目录存放应用打包信息(Maven坐标、pom文件)和MANIFEST.MF文件。
org：目录存放SpringBoot相关class文件。