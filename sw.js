/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/zero.github.io/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/2023/04/27/测试文章/index.html","43a8267001079b7f32267012b67eefb0"],["/zero.github.io/2023/04/28/Java/index.html","763760e8ba40aa899a9b0dc38cfcfb6e"],["/zero.github.io/2023/04/29/Mermaid画图测试/index.html","6c2a1a5a11322588a47cff69a04128a6"],["/zero.github.io/2023/04/30/hexo的部署及SSL应用/index.html","7a81e4543045b79b2963c8595af6d5f4"],["/zero.github.io/2023/05/02/javafx使用maven打包及运行/index.html","6d3030cd423d6061f7c859addb43bb19"],["/zero.github.io/2023/05/02/安利几个好用的网站/index.html","fd4d29255dfc10e5422b1d939b7eff6a"],["/zero.github.io/2023/05/02/运算符级别比较/index.html","ee3ed8b6b8e3047123de5be5d77f6acf"],["/zero.github.io/2023/05/02/集合-Map/index.html","b14d78271eb9ef3b7b8845007320b18e"],["/zero.github.io/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","1a92994fe0cbe3aac3a6b8d75de9e785"],["/zero.github.io/2023/05/08/frp之内网穿透/index.html","fb71b0d84817c133e19f422d1e1c59fe"],["/zero.github.io/2023/05/14/集合类的继承及实现概览/index.html","968ab8a7117de91435a378d2c12af456"],["/zero.github.io/2023/06/13/湖北飞young算号器/index.html","69498eac164cb57d075058a7ad224e3b"],["/zero.github.io/2023/06/17/windows之重装系统/index.html","4e51c70d090211354d64d42c7f414e8a"],["/zero.github.io/2023/06/28/记一次打暑假工的经历/index.html","6fb370a67d92ddf3f0817a4c66442b7f"],["/zero.github.io/2023/07/08/maven的使用/index.html","3d79e5417d17e1d76c3f979e3083532c"],["/zero.github.io/2023/07/11/Java-lambda的方法引用/index.html","0c6f916318394ad2044464a5213daadb"],["/zero.github.io/2023/09/04/Docker部署/index.html","05d0922de1a6d7ff34f8c1b35919592e"],["/zero.github.io/2023/09/05/Docker的使用-壹/index.html","34287c1fe4e84ce9e48a64e26dc3ef9e"],["/zero.github.io/2023/09/05/docker的使用-贰/index.html","46597b005e292c8e5f12e2551a339dfe"],["/zero.github.io/2023/09/08/Docker的使用-叁/index.html","443d451fbfa2254dbe7d8e3428f0ebca"],["/zero.github.io/2023/09/08/可道云桌面搭建笔记/index.html","173f5ee059c45285ef1155cfdc9cae98"],["/zero.github.io/2023/09/09/Win至Linux的免密登录/index.html","cce8d1d1dfb80de363f596f7ce96df29"],["/zero.github.io/2023/09/11/Docker构建镜像及使用的笔记/index.html","61a4c6f3029aab4015a4ac5a63e12cf5"],["/zero.github.io/2023/09/12/Docker之nginx的负载均衡/index.html","e1bd506820b80447e9c0d38fd628a0fa"],["/zero.github.io/2023/09/12/harbor本地仓库搭建/index.html","4c72d51a00aae9479be0561d707b0f4c"],["/zero.github.io/2023/09/15/Linux2023-9-15作业/index.html","11533667467e1ae13c473206b09f1342"],["/zero.github.io/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","3f60bc217005d7e77f27b331d220d3d6"],["/zero.github.io/2023/09/18/Linux2023-9-18作业/index.html","1e2f8a40ce03f0559ce276f27516bb4d"],["/zero.github.io/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","8a4f326b6d7951a2e1e16a31e6e08cdf"],["/zero.github.io/2023/10/26/Git同时部署多个仓库/index.html","f0ec382258266e9930efe0df4cb4661b"],["/zero.github.io/2023/10/26/Git的使用/index.html","ac71e63032d126301249529a1b32ce0f"],["/zero.github.io/2023/11/07/Typora的破解/index.html","b46eb57889422322c934260244c507e2"],["/zero.github.io/2023/11/09/Xmind破解/index.html","926db59c78153e9d128304a7d4e4bf6f"],["/zero.github.io/2023/11/22/JavaScript笔记/index.html","e04bebf3d4c802b27702fd78098bc740"],["/zero.github.io/2023/11/27/shell脚本笔记-2/index.html","e062685b33ca88f0471cbdd7299ba4e6"],["/zero.github.io/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","a42bccea18a3cc930929dec8861ac9fd"],["/zero.github.io/2023/11/29/windows重装系统重制版/index.html","ff6ab366ebe73754f55e8fe7dc893c99"],["/zero.github.io/2023/12/15/shell脚本笔记-1/index.html","ab987632855f7ae039b3fbd865d86d19"],["/zero.github.io/2023/12/16/shell脚本笔记-3/index.html","588ceb7299ffdc040fa23771a36ab68b"],["/zero.github.io/2024/02/09/2023年度总结/index.html","7880e6c5f2914123f34e0a82ca65c917"],["/zero.github.io/2024/03/05/Selenium-的使用/index.html","65d62084da12903d346465afa3e4d87e"],["/zero.github.io/2024/03/11/JUnit/index.html","2414f71b6bd3e5f19ab694201a625db0"],["/zero.github.io/2024/04/03/JSON/index.html","5fbb513df88275fc68c7d953f187990c"],["/zero.github.io/2024/04/16/JavaWeb/index.html","49b885bb01e1fba4e2255aeac756c46e"],["/zero.github.io/2024/04/16/SpringBoot基础/index.html","1caeb00fb354054890296737c74d01ac"],["/zero.github.io/2024/04/16/SpringMVC/index.html","0e5314a99b7038b6aecee4b976c6cd2a"],["/zero.github.io/2024/04/16/Spring基础/index.html","e538f6c762329cad0ab62833a2046fb8"],["/zero.github.io/2024/04/16/spring开发注解集合/index.html","bc463b193f4d9f4650093b99719bead2"],["/zero.github.io/2024/04/22/Spring-ResponseEntity/index.html","08cb07895d77722f18a6de9f22d3e5a7"],["/zero.github.io/2024/04/22/springboot多模块开发/index.html","72a03e6d525ebaea90a9be0b0ea72670"],["/zero.github.io/2024/04/23/springboot全局异常处理/index.html","450c4dd252a08178d403b80b020dedc6"],["/zero.github.io/2024/05/06/MySQL-1/index.html","d86774cbaab843f3e636703dba086e22"],["/zero.github.io/2024/05/06/MySQL-2/index.html","0abf3883026817491007624488e3f758"],["/zero.github.io/2024/05/09/MySQL-3/index.html","6b410cdffb5b519d201d556e20b7e504"],["/zero.github.io/404.html","7b56a608fa48765949ef68505a0a8449"],["/zero.github.io/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/zero.github.io/about/index.html","1f6aac3a544b03f516e9ea08e94eb108"],["/zero.github.io/about/site.html","1490a9a2bbecf2f743c78a16fc1bd967"],["/zero.github.io/albums/Test.html","80bb215a481f7266caebf3a8cb355346"],["/zero.github.io/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/albums/index.html","7f277256dc33b841dd1ba53dd8084e4a"],["/zero.github.io/albums/sunset.html","2e05fe27dc73c00c47e5158ec2cfa191"],["/zero.github.io/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/zero.github.io/albums/壁纸.html","81e9a2fabf62178a59cf8e3fe9159869"],["/zero.github.io/albums/日常.html","20c1ebb93303c87d2567c7fab196a87a"],["/zero.github.io/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/zero.github.io/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/zero.github.io/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/zero.github.io/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/zero.github.io/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/zero.github.io/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/zero.github.io/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/zero.github.io/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/zero.github.io/archives/2023/04/index.html","f7b1f71e47abcbad39b77471e1f398db"],["/zero.github.io/archives/2023/05/index.html","64d6702dfb4d0594bba546c58ad3ccfe"],["/zero.github.io/archives/2023/06/index.html","4fbf19d5142dbbe27d0587d792b7e279"],["/zero.github.io/archives/2023/07/index.html","a5a72567ca104e76294e63515ec225a0"],["/zero.github.io/archives/2023/09/index.html","a46de102d35d50299cf723dab7af1695"],["/zero.github.io/archives/2023/09/page/2/index.html","b20c86fda8706c143767b61d355c63fa"],["/zero.github.io/archives/2023/10/index.html","9e1bdf919dc1d877e86e1ce86e67250c"],["/zero.github.io/archives/2023/11/index.html","3ce6f6e3265b95f6083969ab4f19b85e"],["/zero.github.io/archives/2023/12/index.html","1992c5269390dd3e226dcead23276f4a"],["/zero.github.io/archives/2023/index.html","e6ca73e2d0ded3f1d6a102a0669b51c1"],["/zero.github.io/archives/2023/page/2/index.html","cddbb88e891eef7b3f35303ea73a55f9"],["/zero.github.io/archives/2023/page/3/index.html","ae5107480fee0f810e21bac2975aca9b"],["/zero.github.io/archives/2023/page/4/index.html","ca6a627a0e0f36a7b7adbf4f18a3f60d"],["/zero.github.io/archives/2024/02/index.html","f0d9cbceac32f7deff39b86ae5bc0456"],["/zero.github.io/archives/2024/03/index.html","6dcaeec9c736b9db4f059fdfc5fe4207"],["/zero.github.io/archives/2024/04/index.html","9e3ac90ee136a3bdd11f76c0bd3e33c7"],["/zero.github.io/archives/2024/05/index.html","3190c13c8a8966a427f6ea4aca4c7ab0"],["/zero.github.io/archives/2024/index.html","ed6116a98e3cd13ac9868ea7ac5925d3"],["/zero.github.io/archives/2024/page/2/index.html","bf4abe34c159f0d26f955dbc583325e2"],["/zero.github.io/archives/index.html","65c00d8c57d9146269f2ef06ea8bff84"],["/zero.github.io/archives/page/2/index.html","7c6358777baa578c492f87bab65decbf"],["/zero.github.io/archives/page/3/index.html","b3afdf2986ac4cd738411dd1a3185db4"],["/zero.github.io/archives/page/4/index.html","7219ef649992f2b170e007b306fe972e"],["/zero.github.io/archives/page/5/index.html","d5fc787b86f7d865db96e3f470b8375f"],["/zero.github.io/archives/page/6/index.html","3cd1f416cd264ad8ed300c8d81802fef"],["/zero.github.io/categories/index.html","643f205a25f57335b6c2d08b2d31a9c4"],["/zero.github.io/categories/spring系列/index.html","7afd4bf5599423939d5592a9725596ad"],["/zero.github.io/categories/前端学习笔记/index.html","41e4156e3cf694f145caca4548d0c0c8"],["/zero.github.io/categories/单元测试笔记/index.html","6ff66d9e42af0df04f097a6abccdfd2e"],["/zero.github.io/categories/安利/index.html","daedcedb6813b3702ba6d75c434e6280"],["/zero.github.io/categories/工具类/index.html","4a2a22c21aa5612b90f57408ddb6b959"],["/zero.github.io/categories/数据库/index.html","b076454478099c43750acb3cdc35247b"],["/zero.github.io/categories/日记/index.html","20b22ff7b90873f2cff51cbf0ee6c0ee"],["/zero.github.io/categories/笔记/index.html","031bd61f43b9d8468264989bf42240b0"],["/zero.github.io/categories/笔记/page/2/index.html","3a40d595a52a7d4f36bd9e90e3fc56ac"],["/zero.github.io/categories/编程技巧/index.html","63de3d8ea8b04dec8e5abe191a2b9f20"],["/zero.github.io/categories/编程技巧/page/2/index.html","5ee7116a7dd6d1aee3e3590efb9ac9b8"],["/zero.github.io/categories/自动化测试笔记/index.html","579a85a121f28d746f88ecd54f8a7d80"],["/zero.github.io/categories/计算机知识/index.html","035b8ec890340cbbe5bbbc7d0a8cf652"],["/zero.github.io/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/zero.github.io/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/zero.github.io/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/zero.github.io/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/zero.github.io/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/zero.github.io/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/zero.github.io/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/zero.github.io/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/zero.github.io/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/zero.github.io/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/zero.github.io/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/zero.github.io/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/zero.github.io/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/zero.github.io/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/zero.github.io/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/zero.github.io/index.html","c23b6bb2fcd79ee8b4d4963499b3e502"],["/zero.github.io/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/zero.github.io/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/zero.github.io/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/zero.github.io/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/zero.github.io/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/zero.github.io/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/zero.github.io/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/zero.github.io/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/zero.github.io/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/zero.github.io/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/zero.github.io/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/zero.github.io/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/zero.github.io/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/zero.github.io/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/zero.github.io/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/zero.github.io/links/index.html","b7a95fa0edceaa29e635ff1ef36b0f3c"],["/zero.github.io/page/2/index.html","c490c273f61a8fcd116f96086ef8d289"],["/zero.github.io/page/3/index.html","f07c80e21a645353c84fa7033325eb87"],["/zero.github.io/page/4/index.html","a5374f36ca37fdafcceca93ab2a9a8f9"],["/zero.github.io/page/5/index.html","6d26403c2dc0ac4af529f6d7a461f73e"],["/zero.github.io/page/6/index.html","53ff6a824111f2dbbb2297414bbaf1ce"],["/zero.github.io/sw-register.js","74a8a2e41f5251125df87b6140056f0a"],["/zero.github.io/tags/2023/index.html","e360dde060e9a7b2877834d16672cb92"],["/zero.github.io/tags/Docker/index.html","b0b28f76036b6e7cb83f0560bcc06dd3"],["/zero.github.io/tags/Git/index.html","9df4c91f4ac1e6e58ec535ea86795d0d"],["/zero.github.io/tags/Grafana/index.html","81b3bb06d3c3948ac674c7748ac86456"],["/zero.github.io/tags/JSON/index.html","b62fa4bc5d87f591f4982005235b6658"],["/zero.github.io/tags/Java/index.html","e78712c27ded5e44be1b66e12dbf46ad"],["/zero.github.io/tags/Java/page/2/index.html","56c604fec75a9dc5a9a9d29f0c05f927"],["/zero.github.io/tags/JavaScript/index.html","d220ae44cffe9ef61a86b76043267b4d"],["/zero.github.io/tags/Linux/index.html","6a924e0e489221f994e41a70c3fad8a4"],["/zero.github.io/tags/MySQL/index.html","489d258be1e0e7a51df9a611b2976995"],["/zero.github.io/tags/Prometheus/index.html","dd7f665f15f64e42e93ebda42c74d468"],["/zero.github.io/tags/ResponseEntity/index.html","e394a1e95de7f946742693f16fff4e3d"],["/zero.github.io/tags/SSH/index.html","ff10c6e2188dc6f2a1cde28cc7e9f6df"],["/zero.github.io/tags/Typora/index.html","f6868477eb36dcad609e282585b69da2"],["/zero.github.io/tags/cAdvisor/index.html","d263d36fcaefdf6ed68db695ce0620ee"],["/zero.github.io/tags/frp/index.html","2bccd6056b844054bf611b9d854f8f70"],["/zero.github.io/tags/harbor/index.html","0f6718ad60e3f626ff7f11a5babb7efa"],["/zero.github.io/tags/hexo/index.html","45734fee4bf44ec3743a811c6fddcba0"],["/zero.github.io/tags/index.html","7ce004d99a5899b352bc700996fcec8b"],["/zero.github.io/tags/javafx/index.html","808a76355baec91db888fcdc53f5e54a"],["/zero.github.io/tags/java线程/index.html","c9e084cde5d5493a8b058559698056ce"],["/zero.github.io/tags/junit/index.html","f74ecffe0db6bfa5cd24908330614015"],["/zero.github.io/tags/lambda表达式/index.html","ddfecbc3a0b1e38ee2d778b93c602920"],["/zero.github.io/tags/markdown/index.html","c43181b66534a157002779d2c1c37b66"],["/zero.github.io/tags/maven/index.html","f7dac27a52e4ff689d158bf2b32fb7c5"],["/zero.github.io/tags/mermaid/index.html","02342dbf64fed90757b44343caa9c266"],["/zero.github.io/tags/python/index.html","c0fb8b19d740610c11050605c9133a91"],["/zero.github.io/tags/selenium/index.html","830c742a91ddbb4d63d589337c424943"],["/zero.github.io/tags/servlet/index.html","745eb65d56be0cd497071265a33d0fee"],["/zero.github.io/tags/shell/index.html","1bd7e4f43d918d0145398f47b6b340ea"],["/zero.github.io/tags/spring/index.html","aad1059181c777aae59cfc555b0f0dfa"],["/zero.github.io/tags/springboot/index.html","fd8c8e8cba71a86808ae1e753a246736"],["/zero.github.io/tags/springmvc/index.html","8676cd227616ce8f7c1c22a97d4853c8"],["/zero.github.io/tags/spring注解/index.html","19611385137edefbc6234308e78b94b6"],["/zero.github.io/tags/xmind/index.html","a94b300d5280f4214745bc8c5370febd"],["/zero.github.io/tags/分享/index.html","08edef63686eaa934dad3c25e99eb81b"],["/zero.github.io/tags/原创/index.html","49ed0ded366e7e975014921ddce89c8e"],["/zero.github.io/tags/原创/page/2/index.html","0df353251396e52c4abd9b4d227bb679"],["/zero.github.io/tags/原创/page/3/index.html","91f8f44fd3032d31af4e953f4c2f8aff"],["/zero.github.io/tags/原创/page/4/index.html","908657fcd61199b9cad9eb2925de4bd8"],["/zero.github.io/tags/原创/page/5/index.html","e7dda831a40ac89255cfc3a238c1ed86"],["/zero.github.io/tags/可道云/index.html","0d9e4a8288e848066d8875690173527a"],["/zero.github.io/tags/年度总结/index.html","ec767be5cb7e2a93406633476e01ba5f"],["/zero.github.io/tags/思维导图/index.html","45b9d1e7d58774ce8f614168426a4c16"],["/zero.github.io/tags/暑假工/index.html","1a9c3c5acb8f69e43f1cafd023a7a934"],["/zero.github.io/tags/电脑技术/index.html","eaf1cc80ce00a32900e82da4c49aa13d"],["/zero.github.io/tags/破解/index.html","425e9874ca09c4bcaf0cfba6224f8bb1"],["/zero.github.io/tags/计算机/index.html","e4c170723ec0a2489d01a57216b30a1f"],["/zero.github.io/tags/记录/index.html","558a5d90ce25cceebdcd7f817e6005e8"],["/zero.github.io/tags/集合/index.html","f4fd40784ec1d8522edf7c6640e35fa6"],["/zero.github.io/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/zero.github.io/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
