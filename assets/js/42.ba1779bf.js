(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{367:function(n,e,s){"use strict";s.r(e);var a=s(4),t=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"dependencymanagement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencymanagement"}},[n._v("#")]),n._v(" dependencyManagement")]),n._v(" "),e("p",[n._v("起因是因为需要导入aliyun的依赖结果导入不了， 是直接先写在dependencyManagement里，结果导入不了，后先写在dependencies里导入了下依赖，在该写入dependencyManagement里就解决了。")]),n._v(" "),e("p",[n._v("dependencyManagement里的依赖只会在需要使用的时候才会从本地仓库导入依赖，但是本地仓库里没有的话，直接在dependencyManagement里定义后来导入依赖到本地仓库是不行的，所以要先讲依赖导入本地仓库，再在dependencyManagement里定义。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.aliyun</groupId>\n            <artifactId>alibabacloud-dysmsapi20170525</artifactId>\n            <version>${aliyun-sms-sdk-version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.aliyun</groupId>\n            <artifactId>alibabacloud-dyvmsapi20170525</artifactId>\n            <version>${aliyun-call-sdk-version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.tencentcloudapi</groupId>\n            <artifactId>tencentcloud-sdk-java</artifactId>\n            <version>${tencentcloud.sdk.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>cn.hutool</groupId>\n            <artifactId>hutool-all</artifactId>\n            <version>${hutool.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.baomidou</groupId>\n            <artifactId>mybatis-plus-boot-starter</artifactId>\n            <version>${mybatis.plus.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.rocketmq</groupId>\n            <artifactId>rocketmq-spring-boot-starter</artifactId>\n            <version>${rocketmq.client.java.version}</version>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>cn.hutool</groupId>\n        <artifactId>hutool-all</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);