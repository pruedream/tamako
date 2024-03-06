(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{375:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"算法刷题思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法刷题思想"}},[t._v("#")]),t._v(" 算法刷题思想")]),t._v(" "),s("h2",{attrs:{id:"去重"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去重"}},[t._v("#")]),t._v(" 去重")]),t._v(" "),s("h3",{attrs:{id:"哈希保存元素状态法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哈希保存元素状态法"}},[t._v("#")]),t._v(" 哈希保存元素状态法")]),t._v(" "),s("p",[t._v("通过哈希表存储已经出现过的元素")]),t._v(" "),s("h3",{attrs:{id:"双指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双指针"}},[t._v("#")]),t._v(" 双指针")]),t._v(" "),s("p",[t._v("先排序，再基于排序的基础上按照具体情况进行去重 如三数之和，以及回溯中需要去重的题")]),t._v(" "),s("h2",{attrs:{id:"递归"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归"}},[t._v("#")]),t._v(" 递归")]),t._v(" "),s("p",[s("strong",[t._v("对于递归算法，最重要的就是明确递归函数的定义")]),t._v("，不要跳进递归（你的脑袋能压几个栈呀？），而是要根据刚才的函数定义，来弄清楚这段代码会产生什么结果：主要是根据具体的处理代码来判断。也就是说，"),s("strong",[t._v("单个节点的处理代码就是该递归函数的意义")])]),t._v(" "),s("p",[t._v("往下的过程就是递，再从下返回上的过程就是归")]),t._v(" "),s("p",[t._v("在向下的过程中把问题解决，还是在回退的过程中把问题解决，注意与回溯的联系，进行对比")]),t._v(" "),s("p",[t._v("快速排序                            反转链表                                   全排列")]),t._v(" "),s("p",[t._v("基本就是处理逻辑是在递归代码前还是后")]),t._v(" "),s("h3",{attrs:{id:"无返回值的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无返回值的"}},[t._v("#")]),t._v(" 无返回值的")]),t._v(" "),s("p",[t._v("在递的过程中解决问题")]),t._v(" "),s("p",[t._v("处理逻辑是在递归代码之前的，也就是说，他不需要自己下层的递归函数有任何返回值来帮助进行程序的运行，")]),t._v(" "),s("p",[t._v("解决问题是从上往下解决问题。")]),t._v(" "),s("h3",{attrs:{id:"有返回值的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有返回值的"}},[t._v("#")]),t._v(" 有返回值的")]),t._v(" "),s("p",[t._v("在归的过程中解决问题")]),t._v(" "),s("p",[t._v("处理逻辑是在递归代码之后的，也就是说，他需要自己下层的递归函数有任何返回值来帮助进行程序的运行，")]),t._v(" "),s("p",[t._v("解决问题是从下往上执行问题，因为上面的递归函数需要下面的递归函数的返回值来帮助程序运行。")]),t._v(" "),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("上面举例的无返回值与有返回值，实际上并不准确，因为无返回值也可以在归中解决问题，有返回值也能再递中解决问题，"),s("strong",[t._v("总结就是递归有两种解决方法：从上往下，递中解决，处理逻辑是在递归代码之前。从下往上，归中解决，处理逻辑是在递归代码之后的。")]),t._v(" 补充： 处理逻辑是在递归代码之前与处理逻辑是在递归代码之后，并不是该两中方法各自的特点，而是都能存在于对方的方法中，如二叉树的遍历"),s("strong",[t._v("实际上关键在于，你想在递归前做些事情就写在递归代码前，想在递归后做些事情就写在递归代码后。")])]),t._v(" "),s("p",[t._v("不需要用到返回值来参与代码运行的，终止条件返回什么都行，")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("都行\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("一般来说，在递的过程中处理节点的是不需要使用返回值的，反之")]),t._v(" "),s("h2",{attrs:{id:"回溯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回溯"}},[t._v("#")]),t._v(" 回溯")]),t._v(" "),s("h3",{attrs:{id:"去重问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去重问题"}},[t._v("#")]),t._v(" 去重问题")]),t._v(" "),s("p",[t._v("先排序")]),t._v(" "),s("p",[t._v("去重是判断是否在同一层使用过，对应到代码是本次for循环当中的元素。下一层不管：所谓下一层，就是递归向下的下一层。for循环横向遍历（同一层），递归纵向向下到下一层。")]),t._v(" "),s("p",[t._v("for循环内的代码都是本层的逻辑")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/pruedream/PictureBed/main/image/image-20240208214549997.png",alt:"image-20240208214549997"}})]),t._v(" "),s("p",[t._v("组合与排列的去重逻辑都一样")]),t._v(" "),s("p",[t._v("一定要先排序")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("if(i!=0 && nums[i] == nums[i-1] && !used[i-1]){\n    continue;\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[t._v("#")]),t._v(" 链表")]),t._v(" "),s("h3",{attrs:{id:"反转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反转"}},[t._v("#")]),t._v(" 反转")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://labuladong.gitee.io/algo/di-yi-zhan-da78c/shou-ba-sh-8f30d/di-gui-mo--10b77/",target:"_blank",rel:"noopener noreferrer"}},[t._v("递归魔法：反转单链表 | labuladong 的算法笔记 (gitee.io)"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("反转整个引申到反转前n个再引申到反转链表的指定局部，       递归法")]),t._v(" "),s("h3",{attrs:{id:"环形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环形"}},[t._v("#")]),t._v(" 环形")]),t._v(" "),s("p",[t._v("哈希法")]),t._v(" "),s("p",[t._v("快慢指针， fast为slow的两倍速，相遇就是有环，若需进一步得出环的起始节点。快慢指针，相遇后，启一个新的head节点与slow同时遍历，直到相等，就是起始点")]),t._v(" "),s("h3",{attrs:{id:"删除链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除链表"}},[t._v("#")]),t._v(" 删除链表")]),t._v(" "),s("p",[t._v("删除 也需要用到双指针")]),t._v(" "),s("p",[t._v("需要自己添加一个虚拟头指针，两个指针一前一后。")]),t._v(" "),s("h2",{attrs:{id:"动态规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),s("p",[t._v("先找到问题存在的递推关系，接着就根据找到的递推关系确定dp数组的含义，初始化，写出递推公式，然后采用合适的遍历顺序解决问题。")]),t._v(" "),s("p",[t._v("动态规划的结果就是在dp数组中根据递推关系和dp数组里的开始的几个用于递推的初始值从而地推出dp数组中所有元素的值")]),t._v(" "),s("p",[t._v("递推公式就是非特殊的处理方式，加上特殊的处理方式，请看下面例子")]),t._v(" "),s("p",[t._v("dp i，j  = true    条件  s[i] == s[j] && j-i<=1         ---特殊情况，较少的几个元素点是这个规则")]),t._v(" "),s("p",[t._v("dp[i] [j] = true   条件  s[i] == s[j] &&dp[i + 1] [j - 1]   ==true      ---非特殊情况  大多数元素的遵循该规则")]),t._v(" "),s("p",[t._v("也就是说找的递推关系是可以使用的也是正确的，但是需要排除几个单独的元素点。")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况一 和 情况二")]),t._v("\n        result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况三")]),t._v("\n        result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("dp数组就是根据找到的递推关系确定意义的，再根据递推关系写出递推公式和，逻辑代码。")]),t._v(" "),s("p",[t._v("遍历顺序最本质的一点：遍历的顺序需要满足递推关系中对于递推所需要使用到的dp数组的元素的提供，要是已经确定的，")]),t._v(" "),s("p",[t._v("比如：dp[i] [j]  = dp[i+1] [j-1] +1的话，你就必须要保证该递推关系中对于递推所需要使用到的dp数组的元素dp[i+1] [j-1]的提供，要是已经确定的值。 从而遍历顺序就会是i 从下往上，j从左往右。保证dp[i+1] [j-1] 的值是已经递推出结果的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/pruedream/PictureBed/main/image/image-20240221140201171.png",alt:"image-20240221140201171"}})]),t._v(" "),s("h3",{attrs:{id:"子序列问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子序列问题"}},[t._v("#")]),t._v(" 子序列问题")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/pruedream/PictureBed/main/image/image-20240221144516367.png",alt:"image-20240221144516367"}})]),t._v(" "),s("p",[t._v("子序列的连续与不连续的处理的上存在区别")]),t._v(" "),s("p",[t._v("本质上就是递推关系的不同，连续时的dp[i] 由dp[i-1] 推导，不连续时的dp[i] 由dp[0]到dp[i-1]的元素推导")]),t._v(" "),s("h2",{attrs:{id:"二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),s("p",[t._v("二叉树的处理离不开二叉树的遍历，一般而言用的是三种：前序（中左右），中序（左中右），后序（左右中）")]),t._v(" "),s("p",[s("strong",[t._v("不管是什么遍历，处理逻辑一定是在中处理的")]),t._v("  所以前序相当是从上往下处理，后序是从下往上")]),t._v(" "),s("p",[t._v("没每种遍历都有自己的特性，要根据具体情况使用合适的遍历")]),t._v(" "),s("h2",{attrs:{id:"排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[t._v("#")]),t._v(" 排序")]),t._v(" "),s("p",[t._v("快速排序的双指针实现左小右大，类似题在双指针包中")])])}),[],!1,null,null,null);s.default=r.exports}}]);