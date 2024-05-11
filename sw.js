/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/zero.github.io/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/2023/04/27/测试文章/index.html","48f0d830ca80604fe6a35e6d0ee4df6f"],["/zero.github.io/2023/04/28/Java/index.html","d03ebe114ec5759ab9965d12d240cef3"],["/zero.github.io/2023/04/29/Mermaid画图测试/index.html","75388d99c73bfcb0b282b53ffc99134e"],["/zero.github.io/2023/04/30/hexo的部署及SSL应用/index.html","999292680eccae3369aa6f21416e32e9"],["/zero.github.io/2023/05/02/javafx使用maven打包及运行/index.html","3e2eba2f89cdf46d8f6d111e3b23f0a3"],["/zero.github.io/2023/05/02/安利几个好用的网站/index.html","90e96f4304eca4fb7c5145860bb9935c"],["/zero.github.io/2023/05/02/运算符级别比较/index.html","b23715dd285e2b60e39906d600367350"],["/zero.github.io/2023/05/02/集合-Map/index.html","f9e2312c5ff4db95729ef58aea0058a5"],["/zero.github.io/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","a31acb3cd5ca32d43eb37fbbb33dafb6"],["/zero.github.io/2023/05/08/frp之内网穿透/index.html","f9eb0c3bf8c7174c409521ac2bec40ac"],["/zero.github.io/2023/05/14/集合类的继承及实现概览/index.html","9cab19496f0716e493508af25d687921"],["/zero.github.io/2023/06/13/湖北飞young算号器/index.html","cdd07ccdb39c856cdae613b7da1c2d7f"],["/zero.github.io/2023/06/17/windows之重装系统/index.html","a8a3ccc6a1243dd87dd0df0728210b24"],["/zero.github.io/2023/06/28/记一次打暑假工的经历/index.html","1e7f4229328ba57b4dc79d024afdd8b6"],["/zero.github.io/2023/07/08/maven的使用/index.html","e2331ae03a2f2130bc610323a6f66922"],["/zero.github.io/2023/07/11/Java-lambda的方法引用/index.html","57bbd8dbe8b48c40e49e0b4403e03051"],["/zero.github.io/2023/09/04/Docker部署/index.html","f79ec0a3521e386602bf50d02bbe22f7"],["/zero.github.io/2023/09/05/Docker的使用-壹/index.html","f97f9b046f9fe20ee1bdd33b6c2bc007"],["/zero.github.io/2023/09/05/docker的使用-贰/index.html","0c2c856f185abd75d5ba93e7db7d99a2"],["/zero.github.io/2023/09/08/Docker的使用-叁/index.html","67fa696bba64aaf105294f0ceb527152"],["/zero.github.io/2023/09/08/可道云桌面搭建笔记/index.html","eb52c5b65d9b12095f7f4d775096f3e7"],["/zero.github.io/2023/09/09/Win至Linux的免密登录/index.html","1259f7b70aa41d82725842599898b066"],["/zero.github.io/2023/09/11/Docker构建镜像及使用的笔记/index.html","4de9612bce9743abb0cb4a1538630fd1"],["/zero.github.io/2023/09/12/Docker之nginx的负载均衡/index.html","a1efa3ff0cec06d1adb0c6bf5bf33cb2"],["/zero.github.io/2023/09/12/harbor本地仓库搭建/index.html","6a95de95f70598e54cced45072e30982"],["/zero.github.io/2023/09/15/Linux2023-9-15作业/index.html","35bcd003761104c386c64d8286f7107f"],["/zero.github.io/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","332d7f5db409c39694007f3837c64aa0"],["/zero.github.io/2023/09/18/Linux2023-9-18作业/index.html","b7c2395211d12a3d7ca25fb2426ca7d8"],["/zero.github.io/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","76cf47c36fe6d175105954e4b7589794"],["/zero.github.io/2023/10/26/Git同时部署多个仓库/index.html","518e03a9fb7ed3a028e767e1ff8a75ab"],["/zero.github.io/2023/10/26/Git的使用/index.html","ca565e55886488efe6fb94e20b8a9283"],["/zero.github.io/2023/11/07/Typora的破解/index.html","0f73076c0ff0d75ed63883037f16f5f6"],["/zero.github.io/2023/11/09/Xmind破解/index.html","1c982252464b55617ee67519d14b9167"],["/zero.github.io/2023/11/22/JavaScript笔记/index.html","251c3fbe4daa422ecec02a8a88554938"],["/zero.github.io/2023/11/27/shell脚本笔记-2/index.html","2fe07746f0468ccedbd48f4104a7a9c4"],["/zero.github.io/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","278996fcd6712a4473ebd5e2f2b63ad7"],["/zero.github.io/2023/11/29/windows重装系统重制版/index.html","5058a59448355d68fbfd2e9b951d464f"],["/zero.github.io/2023/12/15/shell脚本笔记-1/index.html","d3d0444c8b27b436aadb1f14639c5554"],["/zero.github.io/2023/12/16/shell脚本笔记-3/index.html","921714d8ef19cdff24e55e5f1d5fe440"],["/zero.github.io/2024/02/09/2023年度总结/index.html","967cca492a96098e8727ba07ae5d50a9"],["/zero.github.io/2024/03/05/Selenium-的使用/index.html","e76b34ce2ba013229cb4b55bc348b466"],["/zero.github.io/2024/03/11/JUnit/index.html","2c0d91fae518ebb25ec696742105e25a"],["/zero.github.io/2024/04/03/JSON/index.html","897de6d124ff20ef3454864653c41d8b"],["/zero.github.io/2024/04/16/JavaWeb/index.html","adf8b64abb2ea0b7220088e52eefa36f"],["/zero.github.io/2024/04/16/SpringBoot基础/index.html","dc61804e240925591a72017fe9b13af6"],["/zero.github.io/2024/04/16/SpringMVC/index.html","7a772a7a6f4c2b1faa45553dab8f43c5"],["/zero.github.io/2024/04/16/Spring基础/index.html","00f520cb1c8b19aec2dab8496fbb4e70"],["/zero.github.io/2024/04/16/spring开发注解集合/index.html","92ae199d47fef93e372a57c86d463739"],["/zero.github.io/2024/04/22/Spring-ResponseEntity/index.html","27ca7ce943e9d6388feeb452a2ba8a23"],["/zero.github.io/2024/04/22/springboot多模块开发/index.html","ae36a8bb09984efe371834602cf35d21"],["/zero.github.io/2024/04/23/springboot全局异常处理/index.html","c1bccbc0161da6312f20176e4c105ffa"],["/zero.github.io/2024/05/06/MySQL-1/index.html","69b5e6ba3a42b5f06eaf57d816b3f0d4"],["/zero.github.io/2024/05/06/MySQL-2/index.html","6b3c5db3a90422ad6d908cbc2c90e2f6"],["/zero.github.io/2024/05/09/MySQL-3/index.html","e07bb7fee3dfd4ded1b8ca81095aa39a"],["/zero.github.io/404.html","ea82dedd2ceb04909917c3323cc06721"],["/zero.github.io/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/zero.github.io/about/index.html","4f438f6cdbd3b9bc9ddf15f24d36eccf"],["/zero.github.io/about/site.html","45610880452aef4fc7742188bb97c429"],["/zero.github.io/albums/Test.html","265757221f52472eb6cafb2923d20d26"],["/zero.github.io/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/albums/index.html","e4c774d8707b3018386c1bb6810b6bd1"],["/zero.github.io/albums/sunset.html","f89edf41cc68db01773fb62898774abc"],["/zero.github.io/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/zero.github.io/albums/壁纸.html","f1b7a6e6b1256dd03abe92fa6af805a0"],["/zero.github.io/albums/日常.html","ab6157304f9e23d4d01db29b1b94d621"],["/zero.github.io/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/zero.github.io/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/zero.github.io/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/zero.github.io/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/zero.github.io/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/zero.github.io/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/zero.github.io/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/zero.github.io/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/zero.github.io/archives/2023/04/index.html","46324210531c17e121e20a215d9bcd97"],["/zero.github.io/archives/2023/05/index.html","d2bcf8a797f026968f199f03db3269a0"],["/zero.github.io/archives/2023/06/index.html","ca040565b3bfa3db367fc7c36350ba45"],["/zero.github.io/archives/2023/07/index.html","c404fecea238f9a749a62e3a27b90001"],["/zero.github.io/archives/2023/09/index.html","e0c968afd299c87809790cfc574150bc"],["/zero.github.io/archives/2023/09/page/2/index.html","7f195f5af71d41e5163ee24ae04b9f86"],["/zero.github.io/archives/2023/10/index.html","be197761ec8cbc7b803ee1063616abe2"],["/zero.github.io/archives/2023/11/index.html","1164324f5c709e4db9d946e82b8583e6"],["/zero.github.io/archives/2023/12/index.html","ba3ce5d4a0f70575c81d6f763b6e2e17"],["/zero.github.io/archives/2023/index.html","a909caa7b9505846afaf2841c11c9ad8"],["/zero.github.io/archives/2023/page/2/index.html","d1470140520708bd42ad6f6c7fe7f702"],["/zero.github.io/archives/2023/page/3/index.html","e41425b82e53343fd0681d21a5f9539c"],["/zero.github.io/archives/2023/page/4/index.html","38f5c95378b25568ac18d848c63a32f9"],["/zero.github.io/archives/2024/02/index.html","3a6c477f5422601a2eaa7033c72cb016"],["/zero.github.io/archives/2024/03/index.html","efdc16a70bc21e226d15356ddba735c1"],["/zero.github.io/archives/2024/04/index.html","83a0ca62349050b48550b9a63214870a"],["/zero.github.io/archives/2024/05/index.html","5a994c224833421c7956fe671071f9fa"],["/zero.github.io/archives/2024/index.html","786d6e7b774ec0154fb94f5f7eea6589"],["/zero.github.io/archives/2024/page/2/index.html","6182e650002fcc5778effd4459fe6847"],["/zero.github.io/archives/index.html","6bd6aafeb87a4abaf2977e645dc2ecf6"],["/zero.github.io/archives/page/2/index.html","a888a35200bcbdb3ae17b57fefedc43d"],["/zero.github.io/archives/page/3/index.html","5deebfa3759634d8604149d559a8d944"],["/zero.github.io/archives/page/4/index.html","3e27bb2f69db2c4109d8beb8f94ecf10"],["/zero.github.io/archives/page/5/index.html","da8e9dc3e5f61470e56333a883d734ea"],["/zero.github.io/archives/page/6/index.html","a01d4a94c83b381dd1c0b94b704c8b61"],["/zero.github.io/categories/index.html","a89d6d8139cc5e51dac54270e56bd831"],["/zero.github.io/categories/spring系列/index.html","444e4b0d444becd134cb41547479a0eb"],["/zero.github.io/categories/前端学习笔记/index.html","f087c110fcbc7fd12efbf94fcfbef75e"],["/zero.github.io/categories/单元测试笔记/index.html","35d8f36930ac84d42845adbfbc32e2fe"],["/zero.github.io/categories/安利/index.html","697110ed58af8ec4792fb69dc4b79e9e"],["/zero.github.io/categories/工具类/index.html","2dfe44ef5296b3b83fb54b96ecb74b8d"],["/zero.github.io/categories/数据库/index.html","991e1628d1809eef488a8234d582ffb6"],["/zero.github.io/categories/日记/index.html","859046e4921839e5c78dea8a78503651"],["/zero.github.io/categories/笔记/index.html","39491b3871018cad5e996973cbb95712"],["/zero.github.io/categories/笔记/page/2/index.html","d44ae2b88c38c3c9081849fbff05adf4"],["/zero.github.io/categories/编程技巧/index.html","82db557b8147bb98c43e7d51a73feda2"],["/zero.github.io/categories/编程技巧/page/2/index.html","21b5de93c53add75aded2183ada152eb"],["/zero.github.io/categories/自动化测试笔记/index.html","f060c0e4609fb9cdb25473fa515bf7d4"],["/zero.github.io/categories/计算机知识/index.html","c9f412a1a8354ed70e716a17602f2b7f"],["/zero.github.io/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/zero.github.io/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/zero.github.io/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/zero.github.io/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/zero.github.io/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/zero.github.io/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/zero.github.io/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/zero.github.io/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/zero.github.io/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/zero.github.io/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/zero.github.io/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/zero.github.io/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/zero.github.io/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/zero.github.io/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/zero.github.io/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/zero.github.io/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/zero.github.io/index.html","8fe51c50dabb397e31454175b31a3e56"],["/zero.github.io/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/zero.github.io/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/zero.github.io/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/zero.github.io/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/zero.github.io/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/zero.github.io/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/zero.github.io/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/zero.github.io/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/zero.github.io/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/zero.github.io/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/zero.github.io/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/zero.github.io/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/zero.github.io/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/zero.github.io/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/zero.github.io/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/zero.github.io/links/index.html","5845beb2ac883b52df2611589ee70d65"],["/zero.github.io/page/2/index.html","b4db7f3b158c25d6b0865a493b64e1cc"],["/zero.github.io/page/3/index.html","e0147227a14183d0b9edc406f0eadd04"],["/zero.github.io/page/4/index.html","354058a3081e9f4d540536245d5d7f69"],["/zero.github.io/page/5/index.html","1e82d294f0a1e0f29dbe51a601ad4656"],["/zero.github.io/page/6/index.html","bfc7ffcfc4568018c3b662f274020768"],["/zero.github.io/sw-register.js","5124ba0661a6d130c46c1e1593ad6b04"],["/zero.github.io/tags/2023/index.html","dceb1693b7795419c40936f7d1a15a0b"],["/zero.github.io/tags/Docker/index.html","e521f2f1f3c603a5600031ed5c664fd8"],["/zero.github.io/tags/Git/index.html","38284d639b5cfcb996895cb11fdea5e5"],["/zero.github.io/tags/Grafana/index.html","36a0c01c50791addfeb017b282f6e338"],["/zero.github.io/tags/JSON/index.html","69f7b1c573425c01990fbcedc2bec4d5"],["/zero.github.io/tags/Java/index.html","dda4811ed1f936d2fa92f2c4d329216f"],["/zero.github.io/tags/Java/page/2/index.html","6721636fa6e5ce73138eb8dd03afb5ea"],["/zero.github.io/tags/JavaScript/index.html","42ab519f32bfb130989e42b00dc71867"],["/zero.github.io/tags/Linux/index.html","a7dad3696de8bd50390009ee843f3e7b"],["/zero.github.io/tags/MySQL/index.html","f092d133c9d12ab579d121a48305f22d"],["/zero.github.io/tags/Prometheus/index.html","1f16299b59aaa46805761488bb68e9dd"],["/zero.github.io/tags/ResponseEntity/index.html","b43efb0d11f41dfdbc19bc86188ec0a3"],["/zero.github.io/tags/SSH/index.html","37ae27f29b206f9bcc902dc96f65969f"],["/zero.github.io/tags/Typora/index.html","5b65b13a0f051e3cf3b3568b6057b2f7"],["/zero.github.io/tags/cAdvisor/index.html","49a7292ab319efafd87fe3060e6426f0"],["/zero.github.io/tags/frp/index.html","ccfd8645e7bc9881b8639d17d43144f8"],["/zero.github.io/tags/harbor/index.html","7450d37735ec0f412f8fc650dbf0b724"],["/zero.github.io/tags/hexo/index.html","d38c2bb56a9fbe130c71fd494586c06b"],["/zero.github.io/tags/index.html","ea7b547904c4c98e82d9d22190f74338"],["/zero.github.io/tags/javafx/index.html","e85dd61057c5e573e0def1c304992444"],["/zero.github.io/tags/java线程/index.html","3922cce8538caab0396a6ae30176ddef"],["/zero.github.io/tags/junit/index.html","232046e861fb9035f86817c9f99378e2"],["/zero.github.io/tags/lambda表达式/index.html","db15ad1e3f9ea0803ea5339c7147de9a"],["/zero.github.io/tags/markdown/index.html","8b320b83f891ddf037e7f5b353982d61"],["/zero.github.io/tags/maven/index.html","4f81d78b30123535ffca6ee9af53e56e"],["/zero.github.io/tags/mermaid/index.html","b54397969ad4cd5144941914b7a9a6fc"],["/zero.github.io/tags/python/index.html","357224b9b758c1ac1787e5a80f2bc345"],["/zero.github.io/tags/selenium/index.html","4640d4147e6ee8325d93392a3ff83542"],["/zero.github.io/tags/servlet/index.html","7e66b064714b762e2594a70e53c8729e"],["/zero.github.io/tags/shell/index.html","834d110d5a5986ed3843061d1e157261"],["/zero.github.io/tags/spring/index.html","3ef853450f7fe5b910de0bc383493f4c"],["/zero.github.io/tags/springboot/index.html","acbc54a3ccb8af50c18614af9a4ddfd8"],["/zero.github.io/tags/springmvc/index.html","e4a287089d5a4fe48a0a47c3ed531618"],["/zero.github.io/tags/spring注解/index.html","3732ae402c1ca899c25abcaf13e976bd"],["/zero.github.io/tags/xmind/index.html","8d12730f12aecb0cda90fa7c1d19ac33"],["/zero.github.io/tags/分享/index.html","295a16302d741568d34ff82d5ccf9501"],["/zero.github.io/tags/原创/index.html","779da58dcbb171ef668d7900e473f8aa"],["/zero.github.io/tags/原创/page/2/index.html","edb380cf142c8685ad746e6d95f6ed3b"],["/zero.github.io/tags/原创/page/3/index.html","85c11b13d46540f8757bb7f0be10c062"],["/zero.github.io/tags/原创/page/4/index.html","c0378b5857c916abdc9266a0c5506320"],["/zero.github.io/tags/原创/page/5/index.html","ac49f4b50d70d5843e8e8744f960d2f5"],["/zero.github.io/tags/可道云/index.html","ad910f50def7980d8ee5c090afbe852c"],["/zero.github.io/tags/年度总结/index.html","d6af542a8676ac429112b7e50fd22210"],["/zero.github.io/tags/思维导图/index.html","a78c03b2c705b5c4d5cf7ed82e8258e6"],["/zero.github.io/tags/暑假工/index.html","e2825b5d619b7b56a3a5d5df136c3fbf"],["/zero.github.io/tags/电脑技术/index.html","4ffc8d345533a309432a24ac89833319"],["/zero.github.io/tags/破解/index.html","813df1494b0a8c9a3fac68b2f1863430"],["/zero.github.io/tags/计算机/index.html","6b94c178e2a9132c44094189350c3c73"],["/zero.github.io/tags/记录/index.html","e51ec20f31f577619227cc92a3f7f71d"],["/zero.github.io/tags/集合/index.html","f84ec2510b6033adcc3b13c8d9522fcc"],["/zero.github.io/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/zero.github.io/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
