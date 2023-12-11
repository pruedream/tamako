(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{346:function(s,e,v){"use strict";v.r(e);var a=v(4),_=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis持久化"}},[s._v("#")]),s._v(" Redis持久化")]),s._v(" "),e("p",[s._v("Redis 支持持久化，而且支持 3 种持久化方式:")]),s._v(" "),e("ul",[e("li",[s._v("快照（snapshotting，RDB）")]),s._v(" "),e("li",[s._v("只追加文件（append-only file, AOF）")]),s._v(" "),e("li",[s._v("RDB 和 AOF 的混合持久化(Redis 4.0 新增)")])]),s._v(" "),e("h2",{attrs:{id:"rdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb"}},[s._v("#")]),s._v(" RDB")]),s._v(" "),e("p",[s._v("Redis 可以通过创建快照来获得存储在内存里面的数据在 "),e("strong",[s._v("某个时间点")]),s._v(" 上的副本。Redis 创建快照之后，可以对快照进行备份，可以将快照复制到其他服务器从而创建具有相同数据的服务器副本（Redis 主从结构，主要用来提高 Redis 性能），还可以将快照留在原地以便重启服务器的时候使用。")]),s._v(" "),e("p",[s._v("快照持久化是 Redis 默认采用的持久化方式")]),s._v(" "),e("h3",{attrs:{id:"生成快照的方式和时机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成快照的方式和时机"}},[s._v("#")]),s._v(" 生成快照的方式和时机")]),s._v(" "),e("p",[e("strong",[s._v("时机")])]),s._v(" "),e("blockquote",[e("p",[s._v("1、用户手动输入save或bgsave命令\n2、Redis主动停机(关机)时，注意！！！默认情况下，Redis正常停机(关机)时会执行一次RDB。但是突然宕机是来不及执行RDB。(这就完美解释了，为什么在没有手动配置Redis持久化的情况下，每次我们正常关机以后，重启电脑，Redis中的数据也还存在)\n3、触发RDB条件时。注意！！！这个RDB配置是写在Redis配置文件中的，同时触发后发起的是bgsave命令，默认情况下不开启RDB触发条件，需要用户手动修改Redis配置文件。")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("语法：save "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("秒数"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key被修改次数"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n功能描述：在指定的秒数内，达到了key被修改次数的要求，那么就自动执行bgsave命令，如果是save "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" 则表示禁用"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("。"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("注意！在"),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Redis")]),s._v("配置文件中配置"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v("秒内，如果至少有"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("个key被修改，则执行bgsave命令\n\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("秒内，如果至少有"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("个key被修改，则执行bgsave命令\n\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" \n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("秒内，如果至少有"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("个key被修改，则执行bgsave命令\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])])]),s._v(" "),e("p",[e("strong",[s._v("基本方式")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("save")]),s._v(" : 同步保存操作，会阻塞 Redis 主线程；")]),s._v(" "),e("li",[e("code",[s._v("bgsave")]),s._v(" : fork 出一个子进程，子进程执行，不会阻塞 Redis 主线程，默认选项。")])]),s._v(" "),e("h3",{attrs:{id:"bgsave的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bgsave的原理"}},[s._v("#")]),s._v(" bgsave的原理")]),s._v(" "),e("p",[s._v("主进程会fork一个子进程来进行RDB持久化，只会在fork子进程的时候阻塞一下，子进程通过复制主进程的页表来获取数据虚拟内存和物理内存的映射关系，从而能够获取到物理内存数据进行持久化，持久化过程中，主进程面对读操作会先拷贝一份再做修改，同时页表上的相应数据的映射关系也改变，考虑到可能存在极端情况，在子进程持久化数据的时候，数据基本都被修改过，导致redis内存占用翻倍，可能导致内存溢出，所以实践中要预留一些内存。不能说把所有内存都分给redis。\n"),e("img",{attrs:{src:"https://raw.githubusercontent.com/pruedream/PictureBed/main/image/2910022-20230910103443694-862443562.png",alt:"img"}})]),s._v(" "),e("h2",{attrs:{id:"aof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof"}},[s._v("#")]),s._v(" AOF")]),s._v(" "),e("p",[s._v("AOF全称为Append Only File（追加文件）。Redis处理的每一个写命令都会记录在AOF文件，可以看做是命令日志文件。就是把每条Redis执行的命令都记录下来，然后读取AOF文件的时候从一个空的Redis开始执行记录的命令。")]),s._v(" "),e("p",[s._v("开启 AOF 持久化后每执行一条会更改 Redis 中的数据的命令，Redis 就会将该命令写入到 AOF 缓冲区 "),e("code",[s._v("server.aof_buf")]),s._v(" 中，然后再写入到 AOF 文件中（此时还在系统内核缓存区未同步到磁盘），最后再根据持久化方式（ "),e("code",[s._v("fsync")]),s._v("策略）的配置来决定何时将系统内核缓存区的数据同步到硬盘中的。")]),s._v(" "),e("p",[e("strong",[s._v("AOF 记录日志是在 Redis 主线程中进行的")]),s._v(" 就是写到系统内核缓冲区之前的所有步骤")]),s._v(" "),e("h3",{attrs:{id:"持久化频率"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持久化频率"}},[s._v("#")]),s._v(" 持久化频率")]),s._v(" "),e("p",[s._v("AOF 持久化功能的实现可以简单分为 5 步：")]),s._v(" "),e("ol",[e("li",[e("strong",[s._v("命令追加（append）")]),s._v("：所有的写命令会追加到 AOF 缓冲区中。")]),s._v(" "),e("li",[e("strong",[s._v("文件写入（write）")]),s._v("：将 AOF 缓冲区的数据写入到 AOF 文件中。这一步需要调用"),e("code",[s._v("write")]),s._v("函数（系统调用），"),e("code",[s._v("write")]),s._v("将数据写入到了系统内核缓冲区之后直接返回了（延迟写）。注意！！！此时并没有同步到磁盘。")]),s._v(" "),e("li",[e("strong",[s._v("文件同步（fsync）")]),s._v("：AOF 缓冲区根据对应的持久化方式（ "),e("code",[s._v("fsync")]),s._v(" 策略）向硬盘做同步操作。这一步需要调用 "),e("code",[s._v("fsync")]),s._v(" 函数（系统调用）， "),e("code",[s._v("fsync")]),s._v(" 针对单个文件操作，对其进行强制硬盘同步，"),e("code",[s._v("fsync")]),s._v(" 将阻塞直到写入磁盘完成后返回，保证了数据持久化。")]),s._v(" "),e("li",[e("strong",[s._v("文件重写（rewrite）")]),s._v("：随着 AOF 文件越来越大，需要定期对 AOF 文件进行重写，达到压缩的目的。")]),s._v(" "),e("li",[e("strong",[s._v("重启加载（load）")]),s._v("：当 Redis 重启时，可以加载 AOF 文件进行数据恢复。")])]),s._v(" "),e("p",[e("strong",[s._v("再此基础上有三种持久化策略")]),s._v(" "),e("img",{attrs:{src:"https://raw.githubusercontent.com/pruedream/PictureBed/main/image/2910022-20230910103501408-344798351.png",alt:"img"}})]),s._v(" "),e("p",[s._v("在 Redis 的配置文件中存在三种不同的 AOF 持久化方式（ "),e("code",[s._v("fsync")]),s._v("策略），它们分别是：")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("appendfsync always")]),s._v("：主线程调用 "),e("code",[s._v("write")]),s._v(" 执行写操作后，后台线程（ "),e("code",[s._v("aof_fsync")]),s._v(" 线程）立即会调用 "),e("code",[s._v("fsync")]),s._v(" 函数同步 AOF 文件（刷盘），"),e("code",[s._v("fsync")]),s._v(" 完成后线程返回，这样会严重降低 Redis 的性能（"),e("code",[s._v("write")]),s._v(" + "),e("code",[s._v("fsync")]),s._v("）。")]),s._v(" "),e("li",[e("code",[s._v("appendfsync everysec")]),s._v("：主线程调用 "),e("code",[s._v("write")]),s._v(" 执行写操作后立即返回，由后台线程（ "),e("code",[s._v("aof_fsync")]),s._v(" 线程）每秒钟调用 "),e("code",[s._v("fsync")]),s._v(" 函数（系统调用）同步一次 AOF 文件（"),e("code",[s._v("write")]),s._v("+"),e("code",[s._v("fsync")]),s._v("，"),e("code",[s._v("fsync")]),s._v("间隔为 1 秒）")]),s._v(" "),e("li",[e("code",[s._v("appendfsync no")]),s._v("：主线程调用 "),e("code",[s._v("write")]),s._v(" 执行写操作后立即返回，让操作系统决定何时进行同步，Linux 下一般为 30 秒一次（"),e("code",[s._v("write")]),s._v("但不"),e("code",[s._v("fsync")]),s._v("，"),e("code",[s._v("fsync")]),s._v(" 的时机由操作系统决定）。")])]),s._v(" "),e("p",[s._v("可以看出："),e("strong",[s._v("这 3 种持久化方式的主要区别在于 "),e("code",[s._v("fsync")]),s._v(" 同步 AOF 文件的时机（刷盘）")]),s._v("。")]),s._v(" "),e("h3",{attrs:{id:"aof重写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof重写"}},[s._v("#")]),s._v(" AOF重写")]),s._v(" "),e("p",[s._v("rewrite（重写）是什么： AOF 采用文件追加方式，文件会越来越大为避免出现此种情况，新增了重写机制，当 AOF 文件的大小超过所设定的阈值时，Redis 就会启动 AOF 文件的内容压缩，只保留可以恢复数据的最小指令集，因为可能对同一个键有多次操作，但是只有最后一次才是有用的，可以使用命令bgrewriteaof。")]),s._v(" "),e("h4",{attrs:{id:"重写原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重写原理"}},[s._v("#")]),s._v(" 重写原理")]),s._v(" "),e("p",[s._v("AOF 文件持续增长而过大时，会 fork 出一条子进程来将文件重写(也是先写临时文件最后再 rename)，遍历新进程的内存中数据，每条记录有一条的 Set语句。重写 aof 文件的操作，并没有读取旧的 aof文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的 aof文件，这点和快照有点类似。Redis 提供了 bgrewriteaof指令用于对 AOP日志瘦身。")]),s._v(" "),e("p",[s._v("但是在重写过程中也会有写操作，为提高日志与数据库现有数据的一致性：AOF 文件重写期间，Redis 还会维护一个 "),e("strong",[s._v("AOF 重写缓冲区")]),s._v("，该缓冲区会在子进程创建新 AOF 文件期间，记录服务器执行的所有写命令。当子进程完成创建新 AOF 文件的工作之后，服务器会将重写缓冲区中的所有内容追加到新 AOF 文件的末尾，使得新的 AOF 文件保存的数据库状态与现有的数据库状态一致。最后，服务器用新的 AOF 文件替换旧的 AOF 文件，以此来完成 AOF 文件重写操作。")]),s._v(" "),e("h4",{attrs:{id:"触发重写的时机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发重写的时机"}},[s._v("#")]),s._v(" 触发重写的时机")]),s._v(" "),e("p",[s._v("开启 AOF 重写功能，可以调用 "),e("code",[s._v("BGREWRITEAOF")]),s._v(" 命令手动执行，也可以设置下面两个配置项，让程序自动决定触发时机：")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("auto-aof-rewrite-min-size")]),s._v("：如果 AOF 文件大小小于该值，则不会触发 AOF 重写。默认值为 64 MB;")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("auto-aof-rewrite-percentage")]),s._v("：执行 AOF 重写时，当前 AOF 大小（aof_current_size）和上一次重写时 AOF 大小（aof_base_size）的比值。如果当前 AOF 文件大小增加了这个百分比值，将触发 AOF 重写。将此值设置为 0 将禁用自动 AOF 重写。默认值为 100。")])])]),s._v(" "),e("h2",{attrs:{id:"两者的对比如何选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两者的对比如何选择"}},[s._v("#")]),s._v(" 两者的对比如何选择")]),s._v(" "),e("p",[s._v("Redis 保存的数据丢失一些也没什么影响的话，可以选择使用 RDB。")]),s._v(" "),e("p",[s._v("不建议单独使用 AOF，因为时不时地创建一个 RDB 快照可以进行数据库备份、更快的重启以及解决 AOF 引擎错误。")]),s._v(" "),e("p",[s._v("如果保存的数据要求安全性比较高的话，建议同时开启 RDB 和 AOF 持久化或者开启 RDB 和 AOF 混合持久化")]),s._v(" "),e("p",[s._v("建议采用混合持久化。")]),s._v(" "),e("h2",{attrs:{id:"redis-4-0-的混合持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-4-0-的混合持久化"}},[s._v("#")]),s._v(" Redis 4.0 的混合持久化")]),s._v(" "),e("p",[s._v("重启 Redis 时，我们很少使用 "),e("code",[s._v("RDB")]),s._v(" 来恢复内存状态，因为会丢失大量数据。我们通常使用 AOF 日志重放，但是重放 AOF 日志性能相对 "),e("code",[s._v("RDB")]),s._v(" 来说要慢很多，这样在 Redis 实例很大的情况下，启动需要花费很长的时间。")]),s._v(" "),e("p",[e("strong",[s._v("Redis 4.0")]),s._v(" 为了解决这个问题，带来了一个新的持久化选项——"),e("strong",[s._v("混合持久化")]),s._v("。将 "),e("code",[s._v("rdb")]),s._v(" 文件的内容和增量的 AOF 日志文件存在一起。这里的 AOF 日志不再是全量的日志，而是 "),e("strong",[s._v("自持久化开始到持久化结束")]),s._v(" 的这段时间发生的增量 AOF 日志，通常这部分 AOF 日志很小：")]),s._v(" "),e("p",[s._v("于是在 Redis 重启的时候，可以先加载 "),e("code",[s._v("rdb")]),s._v(" 的内容，然后再重放增量 AOF 日志就可以完全替代之前的 AOF 全量文件重放，重启效率因此大幅得到提升。")])])}),[],!1,null,null,null);e.default=_.exports}}]);