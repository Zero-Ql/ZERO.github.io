/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/zero.github.io/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/2023/04/27/测试文章/index.html","a2ffa3f723715418be46d2ec1396c7e4"],["/zero.github.io/2023/04/28/Java/index.html","e7a333d8ec219259b0a431e1572ce21f"],["/zero.github.io/2023/04/29/Mermaid画图测试/index.html","1168b95209a82913a1ef1876df927fb2"],["/zero.github.io/2023/04/30/hexo的部署及SSL应用/index.html","c60a5f665d76a1a435a47ff7eae2688c"],["/zero.github.io/2023/05/02/javafx使用maven打包及运行/index.html","a0f81a0c6c7c70edc4e9f554e84b2d4d"],["/zero.github.io/2023/05/02/安利几个好用的网站/index.html","34c88bfafd3820b626e9d98ef3f4405a"],["/zero.github.io/2023/05/02/运算符级别比较/index.html","f0c5def68fb26c2f913402874e0b6007"],["/zero.github.io/2023/05/02/集合-Map/index.html","f143bc8c1d9715e4b19e1fb0db157fd3"],["/zero.github.io/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","d922cdcd681e286fc69cc5aaac5af3c8"],["/zero.github.io/2023/05/08/frp之内网穿透/index.html","88c8112f5aea6e74e22b3dfe6ffe38c9"],["/zero.github.io/2023/05/14/集合类的继承及实现概览/index.html","4784ec38ffdaaae91c47d6367c1c6a17"],["/zero.github.io/2023/06/13/湖北飞young算号器/index.html","a8277e5f3a9a6505b58ae50e8d0bcd08"],["/zero.github.io/2023/06/17/windows之重装系统/index.html","5ebeb74d1337026908b64849d2c3412d"],["/zero.github.io/2023/06/28/记一次打暑假工的经历/index.html","19ea81c30836dc1a7db2c1878ac4a6f7"],["/zero.github.io/2023/07/08/maven的使用/index.html","b97316991e45769f8be2a8c01900eeb2"],["/zero.github.io/2023/07/11/Java-lambda的方法引用/index.html","4d12c9f441879b3570a9a7595b8fd737"],["/zero.github.io/2023/09/04/Docker部署/index.html","0fdf6eb6910262abe2a518b4913d246e"],["/zero.github.io/2023/09/05/Docker的使用-壹/index.html","ef9ab4c34996cd533d73303ea774fb4e"],["/zero.github.io/2023/09/05/docker的使用-贰/index.html","0c0720590231df2245df3b72be9d9eb2"],["/zero.github.io/2023/09/08/Docker的使用-叁/index.html","4a6ff89b45ae289b9a9ad4cd57a83824"],["/zero.github.io/2023/09/08/可道云桌面搭建笔记/index.html","106eeb8d5935d182fd7a733417e18697"],["/zero.github.io/2023/09/09/Win至Linux的免密登录/index.html","12976f7c057c82c6874f9af2d42e7516"],["/zero.github.io/2023/09/11/Docker构建镜像及使用的笔记/index.html","29e71786e495eb2d89081f7f5b5171b8"],["/zero.github.io/2023/09/12/Docker之nginx的负载均衡/index.html","76984a8be5b190c8444955b314f96afb"],["/zero.github.io/2023/09/12/harbor本地仓库搭建/index.html","6d034f22eade7e7e4a8fb7749603fc56"],["/zero.github.io/2023/09/15/Linux2023-9-15作业/index.html","f4b929fda0da845db6ce4cc35eb773ad"],["/zero.github.io/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","2dee5fcfe790fc209cf590f9406c0724"],["/zero.github.io/2023/09/18/Linux2023-9-18作业/index.html","cac4edacefe4290df5fa61912bb77b9a"],["/zero.github.io/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","3e70539dd0b1f0d2d26005c910a29078"],["/zero.github.io/2023/10/26/Git同时部署多个仓库/index.html","715046bf207a9056243102ecb6a014cd"],["/zero.github.io/2023/10/26/Git的使用/index.html","edd1c2b407e41995ad7813855257f69d"],["/zero.github.io/2023/11/07/Typora的破解/index.html","dacd81bb4c2841d9d69be6e4007b4716"],["/zero.github.io/2023/11/09/Xmind破解/index.html","cb5e9971f99718ce16ff067ac74cb45f"],["/zero.github.io/2023/11/22/JavaScript笔记/index.html","1e034afb96fcb026a4c9bc6448ec7fb4"],["/zero.github.io/2023/11/27/shell脚本笔记-2/index.html","221a2fd5e535b9d90d6b289f4d54f59f"],["/zero.github.io/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","46d7ac43d3814d9d3ece97c8239a300b"],["/zero.github.io/2023/11/29/windows重装系统重制版/index.html","8ab7b4523f0033c6c99bba2c1663b896"],["/zero.github.io/2023/12/15/shell脚本笔记-1/index.html","f36732cc95666c548532ab065c18c128"],["/zero.github.io/2023/12/16/shell脚本笔记-3/index.html","c517c95247e1b92213b040802956ec89"],["/zero.github.io/2024/02/09/2023年度总结/index.html","941fb4597f56e162075a8111969ec83c"],["/zero.github.io/2024/03/05/Selenium-的使用/index.html","543bc1d8731dd462df7254c2f1271396"],["/zero.github.io/2024/03/11/JUnit/index.html","18b7d8e6a574db56631b289f6e10fb98"],["/zero.github.io/2024/04/03/JSON/index.html","b437019bc940e4a09a27e256b66e6b98"],["/zero.github.io/2024/04/16/JavaWeb/index.html","94f4bcdda37c3c7b387b1188d5b55433"],["/zero.github.io/2024/04/16/SpringBoot基础/index.html","9ecbc65d1fd8c07d04efd7825c4b6ea4"],["/zero.github.io/2024/04/16/SpringMVC/index.html","22656165eb8c2dc9b42a1231cb92a648"],["/zero.github.io/2024/04/16/Spring基础/index.html","d1101f6c83906ee0e80db701fc1525e4"],["/zero.github.io/2024/04/16/spring开发注解集合/index.html","4e68f95295a9f046cc018abe65a5786a"],["/zero.github.io/2024/04/22/Spring-ResponseEntity/index.html","97cb446364db0be49a96156534d848a9"],["/zero.github.io/2024/04/22/springboot多模块开发/index.html","52565fdd54c323205b9108f9b5f7c32e"],["/zero.github.io/2024/04/23/springboot全局异常处理/index.html","1ad48b1942b980c81647267b2f56e489"],["/zero.github.io/2024/05/06/MySQL-1/index.html","d8944ad57c8e98ea1a52feb0e668d7f6"],["/zero.github.io/2024/05/06/MySQL-2/index.html","094372a4fa707871ba75dd7b2bab57c0"],["/zero.github.io/2024/05/09/MySQL-3/index.html","080da227e333ab216d2dbcaa7cab28ea"],["/zero.github.io/404.html","4e3af7678ca39df6895ee9faeb8328d8"],["/zero.github.io/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/zero.github.io/about/index.html","2275516af65d3e88e15f7e6f244249dc"],["/zero.github.io/about/site.html","9a1a7f095f62e5d799138a0947fec396"],["/zero.github.io/albums/Test.html","683d93d6101bc4a0d5d3dae8dd78607e"],["/zero.github.io/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/albums/index.html","eb0d107ac594d84d583a5ab575dec3c7"],["/zero.github.io/albums/sunset.html","880fc78996c38ec91b40c15fc62bc529"],["/zero.github.io/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/zero.github.io/albums/壁纸.html","9a9be1aa8387b76091e9cbc9e0dcb72e"],["/zero.github.io/albums/日常.html","7c28c146f91e068b8168f4559e7dfbbe"],["/zero.github.io/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/zero.github.io/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/zero.github.io/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/zero.github.io/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/zero.github.io/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/zero.github.io/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/zero.github.io/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/zero.github.io/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/zero.github.io/archives/2023/04/index.html","e6137eb1e03b92facd26e5a09dd42a44"],["/zero.github.io/archives/2023/05/index.html","bbbb5e8623be3191f6ed80013fe751b7"],["/zero.github.io/archives/2023/06/index.html","d2aa855031e11f4c7b6153953bca65ab"],["/zero.github.io/archives/2023/07/index.html","17310fbdb438b30cd0f66bfb2807efa4"],["/zero.github.io/archives/2023/09/index.html","a2278bfcfadb5f995d7281087bd1b015"],["/zero.github.io/archives/2023/09/page/2/index.html","1fefce25162f844c3cb300bbb7fb5e9b"],["/zero.github.io/archives/2023/10/index.html","86544284ef2ac8948c539ea629f1200c"],["/zero.github.io/archives/2023/11/index.html","d702e9897457b90db903da0ce2f5c5cf"],["/zero.github.io/archives/2023/12/index.html","eda1bb944d2847f59770f22cf267ab75"],["/zero.github.io/archives/2023/index.html","3c5beb6a86c074942eb2e7222e666f36"],["/zero.github.io/archives/2023/page/2/index.html","f1aa384ebd4d00d5590966da5670e763"],["/zero.github.io/archives/2023/page/3/index.html","4b85e83ef37acfca1ac5abb8ddddc140"],["/zero.github.io/archives/2023/page/4/index.html","82bdd0d6c686a2d349fd7ad8d0ac3942"],["/zero.github.io/archives/2024/02/index.html","2ebcb8a6a9e4e14a425785ebff1417e3"],["/zero.github.io/archives/2024/03/index.html","976ec0bee2ebcc6220d1c6ea8007600f"],["/zero.github.io/archives/2024/04/index.html","566d478ea19b4189bf9e4d3ae03e9f39"],["/zero.github.io/archives/2024/05/index.html","963103307b5116cdd93de35954ff6770"],["/zero.github.io/archives/2024/index.html","f01dd1d8852cb594ad4ab068272e851e"],["/zero.github.io/archives/2024/page/2/index.html","421730d626d6c9ae5d1cc56b8fef812e"],["/zero.github.io/archives/index.html","5b7101683db25406c240da8757c3e1fe"],["/zero.github.io/archives/page/2/index.html","c20ce6645134b12d92457777876ef4ef"],["/zero.github.io/archives/page/3/index.html","3da47bf357bd4bc9cb2ffa7accc63fc4"],["/zero.github.io/archives/page/4/index.html","5a55b656ae42b4f97bfbc5c3d8184182"],["/zero.github.io/archives/page/5/index.html","df6077bd9a171c5970717f57368f97d3"],["/zero.github.io/archives/page/6/index.html","6842cb912246b97723c4e262045eff0d"],["/zero.github.io/categories/index.html","6d0bf89ebf1eba832ede4ae45dfcd701"],["/zero.github.io/categories/spring系列/index.html","1dae52847af8e5bc81e5085ddb12ff81"],["/zero.github.io/categories/前端学习笔记/index.html","09263b24783f337608de4997a40adda0"],["/zero.github.io/categories/单元测试笔记/index.html","b09ef9061b3d11f53d824b05f5b83c9e"],["/zero.github.io/categories/安利/index.html","049b910be32c6900be39dc3fa27d82cf"],["/zero.github.io/categories/工具类/index.html","135ec7bd697cb15b46f80ca7639e308e"],["/zero.github.io/categories/数据库/index.html","10d4f8438f1488a33c112b92eb7ac3f1"],["/zero.github.io/categories/日记/index.html","e7ef2b81e61c8e9e81fc0f85306049c5"],["/zero.github.io/categories/笔记/index.html","43a65b56d4033345dfc07f189b46e931"],["/zero.github.io/categories/笔记/page/2/index.html","454715af98939c97451f9053ff84ae85"],["/zero.github.io/categories/编程技巧/index.html","cf4495de45f576fe4abf14be230d394e"],["/zero.github.io/categories/编程技巧/page/2/index.html","d79f046ebef2c6ca5a7cfd2f1481d21c"],["/zero.github.io/categories/自动化测试笔记/index.html","3dd59a42d397418fe005c0e53526b4a1"],["/zero.github.io/categories/计算机知识/index.html","015810a8a6090cb56f99c7a0dda748f2"],["/zero.github.io/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/zero.github.io/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/zero.github.io/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/zero.github.io/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/zero.github.io/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/zero.github.io/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/zero.github.io/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/zero.github.io/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/zero.github.io/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/zero.github.io/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/zero.github.io/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/zero.github.io/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/zero.github.io/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/zero.github.io/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/zero.github.io/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/zero.github.io/index.html","f74cc7ee9a6388f8b7b9397caaa30ae4"],["/zero.github.io/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/zero.github.io/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/zero.github.io/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/zero.github.io/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/zero.github.io/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/zero.github.io/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/zero.github.io/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/zero.github.io/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/zero.github.io/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/zero.github.io/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/zero.github.io/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/zero.github.io/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/zero.github.io/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/zero.github.io/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/zero.github.io/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/zero.github.io/links/index.html","703ae3fa3ca7b2fd1be7bb75e8ad8291"],["/zero.github.io/page/2/index.html","7d1f35ee9e7bd8e518bb63ceb9bf83bb"],["/zero.github.io/page/3/index.html","00f530246c3bf9315bd4f6e7d9b0c671"],["/zero.github.io/page/4/index.html","b0121a886e17424811dfd53429b083bb"],["/zero.github.io/page/5/index.html","9430fb588c586f3b070adec616b05f04"],["/zero.github.io/page/6/index.html","5ecbade3dba62ce4441d9c0e7d4ad157"],["/zero.github.io/sw-register.js","dca5e7faa6ccdec2e93223f94092920b"],["/zero.github.io/tags/2023/index.html","5994318970025df7bc53583d3d5aa9be"],["/zero.github.io/tags/Docker/index.html","45f0794224f2973912e382cc708dce0f"],["/zero.github.io/tags/Git/index.html","56d23b750a8e12e037f683d5d2f46395"],["/zero.github.io/tags/Grafana/index.html","aeb61559ac9e5fea1c26681f4cd80029"],["/zero.github.io/tags/JSON/index.html","71e44950f2324112f1b78bceb96eea92"],["/zero.github.io/tags/Java/index.html","df6595ae4471055d989c085fa996db90"],["/zero.github.io/tags/Java/page/2/index.html","0b90b0453e40ba34a9e66c58db37885c"],["/zero.github.io/tags/JavaScript/index.html","53ada9408be3d95ba429b8410d48bce6"],["/zero.github.io/tags/Linux/index.html","5a15711b2aa84e57ee8667d805e124a0"],["/zero.github.io/tags/MySQL/index.html","2e5e4b8b6fa85c71eb136b2ef060fa09"],["/zero.github.io/tags/Prometheus/index.html","129bb92366697d35d796d513979c7bc4"],["/zero.github.io/tags/ResponseEntity/index.html","154b3dd3b33d26e38fa45916d722a8a4"],["/zero.github.io/tags/SSH/index.html","e2c5d5e00f6790329c71f6fd3b955819"],["/zero.github.io/tags/Typora/index.html","22b6b673ceb20622d67c400fa7676ae2"],["/zero.github.io/tags/cAdvisor/index.html","2c058723a954e444064a7539338e1284"],["/zero.github.io/tags/frp/index.html","aa6ec9ed2234c1de1a5855a167c33d24"],["/zero.github.io/tags/harbor/index.html","ff8ab36611f7189e8c165012580e2e19"],["/zero.github.io/tags/hexo/index.html","218421c7a4bd3fcf572fdec2e0a0a239"],["/zero.github.io/tags/index.html","4a1bd00177724cb8084b3a9ec99fd6ca"],["/zero.github.io/tags/javafx/index.html","3f25f70d5e60a689b76f170174c9be39"],["/zero.github.io/tags/java线程/index.html","fe764f16229be990fbfdece33bcb0ecf"],["/zero.github.io/tags/junit/index.html","d9f8fc514dfa3b351535aa1b699b0c98"],["/zero.github.io/tags/lambda表达式/index.html","ddce185d2270a1f81e7a66388f12af1f"],["/zero.github.io/tags/markdown/index.html","5b005ba7bb6ef371b3fc1de50ad56bd9"],["/zero.github.io/tags/maven/index.html","a851e7c4a0e3fe831042afd66d44736b"],["/zero.github.io/tags/mermaid/index.html","76e9c5b5fa119179d342e167e77333fc"],["/zero.github.io/tags/python/index.html","92afe4e1e7a2d8c05ff405163df64c66"],["/zero.github.io/tags/selenium/index.html","89d808637cf2ee34735050cae817742f"],["/zero.github.io/tags/servlet/index.html","b2e11a9cbc8f72d85dbce4728f61ebc1"],["/zero.github.io/tags/shell/index.html","5ab90c5590b1e16e497bc94d1015a05a"],["/zero.github.io/tags/spring/index.html","28a0993c8c1bda5933f1401cf5fdfcb5"],["/zero.github.io/tags/springboot/index.html","48b80dc6a1df64e5181adc0a7318a085"],["/zero.github.io/tags/springmvc/index.html","fd5dd914e33f08dab0395e69f3f555a7"],["/zero.github.io/tags/spring注解/index.html","6ad176c8944269eb16eb3c05e73dd21a"],["/zero.github.io/tags/xmind/index.html","203dc7669a1f7af3806531553c1840e3"],["/zero.github.io/tags/分享/index.html","952248148c3f32899826d366cfb4c0ce"],["/zero.github.io/tags/原创/index.html","ff1da98ebf6ddfdb2e91559111cf913f"],["/zero.github.io/tags/原创/page/2/index.html","381936027c124e46c85cf46babca5ca0"],["/zero.github.io/tags/原创/page/3/index.html","9a9c5e8dcd9de84f06e6306bb21ea5f4"],["/zero.github.io/tags/原创/page/4/index.html","f296fa513143b82d5f2e6cb09548d6ab"],["/zero.github.io/tags/原创/page/5/index.html","2215d8c4c27598ec1d6f7b83d11a1d4a"],["/zero.github.io/tags/可道云/index.html","1285fa94f13a084222e8f258769c0085"],["/zero.github.io/tags/年度总结/index.html","f29b364b8a9eeb08d300f164aca66e02"],["/zero.github.io/tags/思维导图/index.html","8bf24b06d8bfb1b2d90a15c6d70bf666"],["/zero.github.io/tags/暑假工/index.html","206b2b775aec1acd04a9176d1a83c6af"],["/zero.github.io/tags/电脑技术/index.html","ca83b7304bfe338d7fde374c8f46c988"],["/zero.github.io/tags/破解/index.html","a6d5c6073195598d340e94aeffb7e099"],["/zero.github.io/tags/计算机/index.html","77a8805888f8c2d7517bcc34ccb66ef7"],["/zero.github.io/tags/记录/index.html","921ae6c4c0a884432af7be29d4e061e6"],["/zero.github.io/tags/集合/index.html","2a71fa31ed8d24a823358b04cbb54ebd"],["/zero.github.io/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/zero.github.io/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
