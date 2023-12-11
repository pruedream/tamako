---
title: InnoDB RR隔离级别下解决幻读
date: 2023-12-11 00:04:38
permalink: /pages/7e8aa7/
categories:
  - Mysql
tags:
  - 
author: 
  name: xugaoyi
  link: https://github.com/xugaoyi
---

# InnoDB RR隔离级别下解决幻读

## 演示



| A                                          | B                                              |
| ------------------------------------------ | ---------------------------------------------- |
| begin;                                     | begin;                                         |
| **select** ***from** award **where** id>2; |                                                |
|                                            | **insert** **into** award (id)  **values**(6); |
|                                            | commit;                                        |
| **select** ***from** award **where** id>2; |                                                |
| commit;                                    |                                                |

第一次select

~~~java
id|award_id|award_type|award_name|award_content|create_time        |update_time        |
--+--------+----------+----------+-------------+-------------------+-------------------+
 3|3       |         1|ipad      |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|
 4|4       |         1|AirPods   |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|
 5|5       |         1|Book      |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|
~~~

第二次select

~~~java
id|award_id|award_type|award_name|award_content|create_time        |update_time        |
--+--------+----------+----------+-------------+-------------------+-------------------+
 3|3       |         1|ipad      |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|
 4|4       |         1|AirPods   |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|
 5|5       |         1|Book      |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|
~~~









| A                                                         | B                                              |
| --------------------------------------------------------- | ---------------------------------------------- |
| **begin** ;                                               | begin;                                         |
| **select** ***from** award **where** id>2;                |                                                |
|                                                           | **insert** **into** award (id)  **values**(6); |
|                                                           | commit;                                        |
| **update** award  **set** award_type =2 **where** id = 6; |                                                |
| **select** ***from** award **where** id>2;                |                                                |
| commit;                                                   |                                                |

第一次select

 ~~~java
id|award_id|award_type|award_name|award_content|create_time        |update_time        |
--+--------+----------+----------+-------------+-------------------+-------------------+
 3|3       |         1|ipad      |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|
 4|4       |         1|AirPods   |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|
 5|5       |         1|Book      |Code         |2021-08-15 15:38:05|2021-08-15 15:38:05|

 ~~~

第二次select

~~~java
id|award_id|award_type|award_name|award_content|create_time            |update_time            |
--+--------+----------+----------+-------------+-----------------------+-----------------------+
 3|3       |         1|ipad      |Code         |    2021-08-15 15:38:05|    2021-08-15 15:38:05|
 4|4       |         1|AirPods   |Code         |    2021-08-15 15:38:05|    2021-08-15 15:38:05|
 5|5       |         1|Book      |Code         |    2021-08-15 15:38:05|    2021-08-15 15:38:05|
 6|        |         2|          |             |2023-08-18 14:54:19.492|2023-08-18 14:54:19.492|

~~~
