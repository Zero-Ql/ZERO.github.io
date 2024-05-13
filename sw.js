/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","d86e270405641c5794f1ad1ca710efe3"],["/2023/04/28/Java/index.html","8c4e0e1323dff8edf635d6dc5e043907"],["/2023/04/29/Mermaid画图测试/index.html","4da8b2b6303ba5e9029387a31e362f27"],["/2023/04/30/hexo的部署及SSL应用/index.html","adecad1e05d5482076d959dc8d9a7fee"],["/2023/05/02/javafx使用maven打包及运行/index.html","48897cb2a0055dbf4ce5110cb3746766"],["/2023/05/02/安利几个好用的网站/index.html","3aeba603f6335f3bd9ebf139576023ee"],["/2023/05/02/运算符级别比较/index.html","37d0aff88f60bf87dbb1b5d5dfc76b99"],["/2023/05/02/集合-Map/index.html","85392a6459fd1ddcef578f72a927676a"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","afdb969d1c21289a5c540c023f0de624"],["/2023/05/08/frp之内网穿透/index.html","9ee114d7cbf228fdcd4c1933b298f884"],["/2023/05/14/集合类的继承及实现概览/index.html","6536380152c0990c6f1d8b80367d3232"],["/2023/06/13/湖北飞young算号器/index.html","95bd9b35d7d846c333ba64aa1144a4e7"],["/2023/06/17/windows之重装系统/index.html","b147e0da0833f0dc3af9a5b484c51c7f"],["/2023/06/28/记一次打暑假工的经历/index.html","96c50fd106eb87265e2224cfeb922c94"],["/2023/07/08/maven的使用/index.html","c28cbed3cb3b5e5bb7329102c3f3cb37"],["/2023/07/11/Java-lambda的方法引用/index.html","3bb954e09fe2233cdb1fcebf508ecae2"],["/2023/09/04/Docker部署/index.html","f7d83120612588deeaefcc4299cab553"],["/2023/09/05/Docker的使用-壹/index.html","d6f77a074dd6f5bf5d5a5c1b4664cf21"],["/2023/09/05/docker的使用-贰/index.html","2252f67b890d4d0f32f1e4504a315b10"],["/2023/09/08/Docker的使用-叁/index.html","7cce5a2840c560aa6dc45603f18ee312"],["/2023/09/08/可道云桌面搭建笔记/index.html","2a50038fed3c57af4d9b93e7d12e53c1"],["/2023/09/09/Win至Linux的免密登录/index.html","856cf2e71e41d3b2e0b5565ae7ea06c0"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","7932273397ed45f828b9af926427ab2f"],["/2023/09/12/Docker之nginx的负载均衡/index.html","0848f666207525f7f591e7e8c5f17887"],["/2023/09/12/harbor本地仓库搭建/index.html","d8fb0290bd97ecc9b98a1af2841bb834"],["/2023/09/15/Linux2023-9-15作业/index.html","2a80849a7522fc11d4c9bc82c73b2a4d"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","c45b960c5f51ccb22ce376c48a71911e"],["/2023/09/18/Linux2023-9-18作业/index.html","b68f5c1ef49aebab50dce822d03e946b"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","d81cdf4d12bb778dbfc1441f9273d5ab"],["/2023/10/26/Git同时部署多个仓库/index.html","50584768214342b93ecff4da2cf126e7"],["/2023/10/26/Git的使用/index.html","79c3f12831236556ca51cc8e8d790fd3"],["/2023/11/07/Typora的破解/index.html","31d1e72b5f2b7014261d4ced9c298100"],["/2023/11/09/Xmind破解/index.html","2e4798564288f483eb2ca6d33048f3c5"],["/2023/11/22/JavaScript笔记/index.html","bd921324b9c2c06334ed5f024ee02e77"],["/2023/11/27/shell脚本笔记-2/index.html","5286fce6048764cd9000420c27193eb2"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","d96245ed47c4fab9db5dea6c4a09e26e"],["/2023/11/29/windows重装系统重制版/index.html","0b583141873b470c8c5f3bb4abbb1939"],["/2023/12/15/shell脚本笔记-1/index.html","972f637b398097a015e239a3fd364c32"],["/2023/12/16/shell脚本笔记-3/index.html","aab2ca65ac51abb854cc594912850e4e"],["/2024/02/09/2023年度总结/index.html","2791744864847c9f142ee20b09db0ba7"],["/2024/03/05/Selenium-的使用/index.html","567e22db2f51cfb320aaed9f387b5afa"],["/2024/03/11/JUnit/index.html","057fab677de977f2563c624d56537822"],["/2024/04/03/JSON/index.html","49451b544a8f486ac4a24df588c3ddf6"],["/2024/04/16/JavaWeb/index.html","fae7e88df8d1d99b6a9b3a34570362d1"],["/2024/04/16/SpringBoot基础/index.html","ca0d4412dbe6d1ef9eceff0571fd2161"],["/2024/04/16/SpringMVC/index.html","b69c7d0783af4981559b44fa13609d64"],["/2024/04/16/Spring基础/index.html","318ab0fd66a15cdd705603ac01ce3e60"],["/2024/04/16/spring开发注解集合/index.html","fd87579093a8b07db6192cbd21e9b558"],["/2024/04/22/Spring-ResponseEntity/index.html","e0d5ea6565d377d75b80be177a6a09c7"],["/2024/04/22/springboot多模块开发/index.html","4382cc6eb0605099df7cd87057eaafd3"],["/2024/04/23/springboot全局异常处理/index.html","0ab1d3234f459e890045c173181bb8c6"],["/2024/05/06/MySQL-1/index.html","ac432da4eccab95810eb1cc70ddb1144"],["/2024/05/06/MySQL-2/index.html","17c946680069b360fcec15d4345f678b"],["/2024/05/09/MySQL-3/index.html","f5b0686bc2790ce0c6b749ad8556d9d5"],["/2024/05/13/MySQL-4/index.html","9275c129803715a32e7ea927b0de37dd"],["/404.html","7722c6465fc7eba85b13723bb7f9f1ee"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","227f2539d75848c714776d691a500f8a"],["/about/site.html","1c9c6665268f12aa4dd925005ab67a1a"],["/albums/Test.html","5c5202c6cad57dfb545e5a380315f2e4"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","7c3b0dc0c02b326cc61349766dc1e6d9"],["/albums/sunset.html","99098bc1b6c9139df9b7e5383598c748"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","695cdf75b4bffc6f4baef95452520ed0"],["/albums/日常.html","b266cd561cdca826ecbb9b5042166398"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","328f601dccb5fbb3147a7970d4e8a104"],["/archives/2023/05/index.html","a54309f14938df34ce3dfa92bfb264cd"],["/archives/2023/06/index.html","bfcad6d30d5c86ba25f989b00c9e7a5c"],["/archives/2023/07/index.html","627d5fbd44e8637853d77da55b7cb921"],["/archives/2023/09/index.html","4e7c92fc29d5c6ed9ed1eb5e8a5e6cf5"],["/archives/2023/09/page/2/index.html","dbbdc4786a1c93963151c015df245130"],["/archives/2023/10/index.html","33b0c51e8f56d08043ed05fda0017879"],["/archives/2023/11/index.html","ec2d83a0a0be52be6871dc187d8aaf65"],["/archives/2023/12/index.html","68c80f2bffddbc60bc6eb163f663889b"],["/archives/2023/index.html","a04dfb222815de06dd5ca58ed9c7be09"],["/archives/2023/page/2/index.html","90c2b8c1832ce1afd8c6145d2d0aae78"],["/archives/2023/page/3/index.html","01ac1073bd5149c5f461304a88704b9b"],["/archives/2023/page/4/index.html","2d35cb8e6c71c6e988083b061122ac69"],["/archives/2024/02/index.html","362babf07d2bd6d6172a56a1f8ee7383"],["/archives/2024/03/index.html","b128a21edce44f8a1725e289e82756e8"],["/archives/2024/04/index.html","d1552ce83dc7f0cb73a90d608a163d6b"],["/archives/2024/05/index.html","9771277c901d8d7dc9907ba04ba17427"],["/archives/2024/index.html","8f43bbb42af44b9195123a0489d6bc19"],["/archives/2024/page/2/index.html","1b2fc09c1618d49f220c646ef22e335e"],["/archives/index.html","fd1cbdada753e271dd90d94a447aaa02"],["/archives/page/2/index.html","a2925e271270f354411e47cb86391bf9"],["/archives/page/3/index.html","8e95312a450085c48f6f28c3b17497ce"],["/archives/page/4/index.html","2242cbe66a8267c66d6d873dffe09e24"],["/archives/page/5/index.html","ef790e60c1d42ef9d8121436c59a9ed3"],["/archives/page/6/index.html","1823a7fdeb632218521ed1a6ba67eb10"],["/categories/index.html","bb4e5a02db3e96f1de2a52fe59a43c13"],["/categories/spring系列/index.html","8b0c1e55ab7e1caeb6f9c9796f10d66a"],["/categories/前端学习笔记/index.html","9e063fe2860bf252248db80c84407250"],["/categories/单元测试笔记/index.html","a53854f38ea8b651309dfc9042cbfecf"],["/categories/安利/index.html","2527c204a16eb0b3875dc2a3d7736ad5"],["/categories/工具类/index.html","e2b0f2aa519e6926d9b5b760400d3732"],["/categories/数据库/index.html","48f0cb9430e8483f0fe8ee143e393362"],["/categories/日记/index.html","6f92d0e99608c56afa0b6bd43d2cb51e"],["/categories/笔记/index.html","a7f72517cdf2946207743ebea58557eb"],["/categories/笔记/page/2/index.html","b5fc5754a451d408102753336773acb9"],["/categories/编程技巧/index.html","868dc4b81e93506ab41ba9d9c9cf804b"],["/categories/编程技巧/page/2/index.html","ae87fa695a5f74ca6c2b8788ae70127b"],["/categories/自动化测试笔记/index.html","72df4fed2888f8ea7310e7ca95bbdccc"],["/categories/计算机知识/index.html","ab68019be1103e2f0f4996ecbae4d79b"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","e33fd469e95a84a0cf201ffaa4e1173e"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","22e294da5eb3cc6712f61e04b5d627c5"],["/page/2/index.html","d9c93ebfbfb63b7a6ffe567c50a3433e"],["/page/3/index.html","748a69758a41d2528af988440ce9e842"],["/page/4/index.html","c9d5fd30764787a5f22a4142e183df2c"],["/page/5/index.html","7cd058779ab0638d99e7227ce77f512f"],["/page/6/index.html","48a1018667d90de597bba1d11ebbb6fb"],["/sw-register.js","32ab03d658fb47ef2f3e0d6a9a9555aa"],["/tags/2023/index.html","50fc577f359cdd34c2efef3d9ff87a8f"],["/tags/Docker/index.html","6df0abbfa888b2c61b8d10d9ed489015"],["/tags/Git/index.html","3b7d2c340095f241ce7e15bdf874070a"],["/tags/Grafana/index.html","fbf0f35bacf685bf3ca9330087795e30"],["/tags/JSON/index.html","6be8dba565ebf42b53e0b2a40350742a"],["/tags/Java/index.html","7052ba4dd4a511ec0eddf2d2c9b5bd07"],["/tags/Java/page/2/index.html","a26ea84683405b37a45a431d6779407d"],["/tags/JavaScript/index.html","2c6320869bb31f5946897d9ee3843256"],["/tags/Linux/index.html","db757a284bd9b959002bb9659ea49c3b"],["/tags/MySQL/index.html","36d71a16cbbf14e8a66f02388f2fcfec"],["/tags/Prometheus/index.html","5ad08ea3cfc2cc384de2203c09f30d73"],["/tags/ResponseEntity/index.html","317b254ce8fb5d1b6016364cdf718f39"],["/tags/SSH/index.html","3511cc23178afc6652d7c7643ab4c01a"],["/tags/Typora/index.html","6515b7f46361fbd2e9492d41ca1a841c"],["/tags/cAdvisor/index.html","1d36550b207be37eef55d582ea8f2669"],["/tags/frp/index.html","609a38fa213e6261c134811493c95026"],["/tags/harbor/index.html","a112e5cf60551012cd9c441450e75cc6"],["/tags/hexo/index.html","8df581b6181d5f05068808e47fe2b424"],["/tags/index.html","f30670da9b47400553c84d40d8f919b2"],["/tags/javafx/index.html","4ad20e606f13e70d2ea4389977eecaea"],["/tags/java线程/index.html","ffa8dea51ca6f645ed8a6ef2c89f1449"],["/tags/junit/index.html","1f8b5cd67f84801f6f139f47a0bf8eb2"],["/tags/lambda表达式/index.html","ce671d0f5dd68bf4e6e286b435473069"],["/tags/markdown/index.html","bf8aaa702f3cc759aa3815302ec30ad3"],["/tags/maven/index.html","e083256655ea1d913904185ee226de1e"],["/tags/mermaid/index.html","4875179f36ad28c5091fe04ddc59f949"],["/tags/python/index.html","58715a938b68650cc9dc2875655816f9"],["/tags/selenium/index.html","6c3f8f9853c4798911e46fd00d5c36ea"],["/tags/servlet/index.html","f0cbb1e6e932b18375b4af33763c0489"],["/tags/shell/index.html","923ef36ed5179b8e5d391791080d017c"],["/tags/spring/index.html","454eb15e068010e0e745193f340b8b67"],["/tags/springboot/index.html","fbe628553ee8bd057b87a842a21a7974"],["/tags/springmvc/index.html","19a75a28a4346a5f797884e266d8f3fb"],["/tags/spring注解/index.html","bd517d21da072330527bad314df0e7c9"],["/tags/xmind/index.html","47640740ba29c787f2b25ea5e5371a2b"],["/tags/分享/index.html","d9e295ad7a1cd7518e2e68c9b7b2de09"],["/tags/原创/index.html","42b5cda92df32331371f52e54889098c"],["/tags/原创/page/2/index.html","8a6878b73d4ebf66805810b106e1bd8a"],["/tags/原创/page/3/index.html","e7e46240ee2fedea1b18b8877f361bd8"],["/tags/原创/page/4/index.html","22a8fd58290f48d878b386223a60b3b0"],["/tags/原创/page/5/index.html","69053a603ea554e334239375d33cee01"],["/tags/可道云/index.html","8d359c01a3e5060c8679902645bd0548"],["/tags/年度总结/index.html","de628b8d8b9fdeccab645cf99668fbf7"],["/tags/思维导图/index.html","fdda89a131f347f4a7b0af592f6f6855"],["/tags/暑假工/index.html","b77eed7af8825eda7e8bc869d39ce49d"],["/tags/电脑技术/index.html","07687da87377c28e2a37a17ab7c5cca5"],["/tags/破解/index.html","88255fe9fee9b0d1a6c1c23107e7d2d0"],["/tags/计算机/index.html","803cdfa8e79f703a0d3b7e5934f52a3f"],["/tags/记录/index.html","948623323b571ed4f6476e723bd08d9b"],["/tags/集合/index.html","97a76b68ebfd5cfd21c6aa02591d85ec"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
