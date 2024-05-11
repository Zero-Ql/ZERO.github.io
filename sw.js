/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","018144f7658f5f0c8388960711d79619"],["/2023/04/28/Java/index.html","0386cf6ef95c261b95d68929bdba1fd2"],["/2023/04/29/Mermaid画图测试/index.html","44bf2f1d9f3d2c45d4bd87940cbf2d67"],["/2023/04/30/hexo的部署及SSL应用/index.html","2d58709b6925ff1fed5686e219cf507e"],["/2023/05/02/javafx使用maven打包及运行/index.html","d41ab0b5286a06cda9fd9e2dfd779843"],["/2023/05/02/安利几个好用的网站/index.html","3ec6746995205793fd2fce8904ac7377"],["/2023/05/02/运算符级别比较/index.html","e325dbfdefdf4e88489e39d4ff95f3ba"],["/2023/05/02/集合-Map/index.html","294799e66c98f1b552d5d22b0fbe3633"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","a597b85af944812cb3ddbe006edc2f9b"],["/2023/05/08/frp之内网穿透/index.html","964298b698019b026687c91a0dec7d85"],["/2023/05/14/集合类的继承及实现概览/index.html","dc61addfd55902e1348ea69d7de2ef27"],["/2023/06/13/湖北飞young算号器/index.html","9232e768503aecf43a79b8b05a59a999"],["/2023/06/17/windows之重装系统/index.html","0c0e11f0744e31d110d609e43a95e4ab"],["/2023/06/28/记一次打暑假工的经历/index.html","c66c4dbcebaff7000f72d706ef4d5852"],["/2023/07/08/maven的使用/index.html","2b1868093225e9dff32aeb9ccb296b43"],["/2023/07/11/Java-lambda的方法引用/index.html","02a295e050713e7e20d3d53df58ce569"],["/2023/09/04/Docker部署/index.html","5bfa1727b6134e7aea601df6257b33ed"],["/2023/09/05/Docker的使用-壹/index.html","a3e2d3afeaef079993fecbfb74fa505c"],["/2023/09/05/docker的使用-贰/index.html","5ab3f85f39a69bbbcac5e1009fd240e4"],["/2023/09/08/Docker的使用-叁/index.html","a2f30fd7e8abff7aff0c03642a1537c9"],["/2023/09/08/可道云桌面搭建笔记/index.html","1473df2d872285dd41bf8845067f7dfd"],["/2023/09/09/Win至Linux的免密登录/index.html","83e0efc521fb17b0f9156397036d87b5"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","6f495de55c513ae723c1a0235659eeb4"],["/2023/09/12/Docker之nginx的负载均衡/index.html","990b0f7d456cabd526660d6bb0ad9c67"],["/2023/09/12/harbor本地仓库搭建/index.html","252c9c33b841ff05ba93bac7d1fe64f8"],["/2023/09/15/Linux2023-9-15作业/index.html","be4eef2873706f5ac4738eb99d6c9916"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","3125927767b199817e5ad524031d70fe"],["/2023/09/18/Linux2023-9-18作业/index.html","f3cf217b2e81853f2d9d8df515792101"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","a32d07b5bd0c0c5978fcdd93eecd5257"],["/2023/10/26/Git同时部署多个仓库/index.html","be7e3de1aef657230e91bbbd2a0396de"],["/2023/10/26/Git的使用/index.html","c24568e2c6b8191a12fcdf72b58c3757"],["/2023/11/07/Typora的破解/index.html","c178e4cf052aa680737b439030abdd65"],["/2023/11/09/Xmind破解/index.html","7119dc8778dd8e877712d0aa09e4457c"],["/2023/11/22/JavaScript笔记/index.html","a04261ad9f1ef930be4749c506fda43a"],["/2023/11/27/shell脚本笔记-2/index.html","0f88801b99234261b33cfbb4d3fdf907"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","025db51c9d8db9301b4e99efbb9bae4d"],["/2023/11/29/windows重装系统重制版/index.html","2dd9af944f91dfb4bd2a26b0ef6ffe16"],["/2023/12/15/shell脚本笔记-1/index.html","6c312fd9b3462a763233f4f943e15496"],["/2023/12/16/shell脚本笔记-3/index.html","fc8e05103800651f3df14c191f1841fd"],["/2024/02/09/2023年度总结/index.html","836947ccb965ad2ca6d962af3d13df17"],["/2024/03/05/Selenium-的使用/index.html","712bc9d3676857c755fbc8598d4160fd"],["/2024/03/11/JUnit/index.html","d87deaae80357750254b84e6ad1efa83"],["/2024/04/03/JSON/index.html","63b34f14c83d8624d1f0c9811024d7a0"],["/2024/04/16/JavaWeb/index.html","a142ff22b016db37ddae8f5df9193d03"],["/2024/04/16/SpringBoot基础/index.html","49e87b6ae5c8fd73f9759a830837b49b"],["/2024/04/16/SpringMVC/index.html","395a8adcb0773a16ce23f5775417806c"],["/2024/04/16/Spring基础/index.html","1b2df94422a87b378141a9e59d4108b4"],["/2024/04/16/spring开发注解集合/index.html","5276558bc531c77e67dd47204a8fbbf9"],["/2024/04/22/Spring-ResponseEntity/index.html","476eda0f3a452a2f4a0dadc05511bc72"],["/2024/04/22/springboot多模块开发/index.html","792a120e01d6e5f11f294068725414e2"],["/2024/04/23/springboot全局异常处理/index.html","6aec779d1635adb54e642e3b6fa88fce"],["/2024/05/06/MySQL-1/index.html","0b656252339d5060e851ef2c0467ce11"],["/2024/05/06/MySQL-2/index.html","1faf7d71578a8ba035d34d352e38ae72"],["/2024/05/09/MySQL-3/index.html","688f1d0e068df613ed06dab5500918d8"],["/404.html","99c4a753389cf71456d35080611be09b"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","d7f0582970b63dae5b1994aca81e10d3"],["/about/site.html","c77a7dc1b57472dcd971927a66d5ccba"],["/albums/Test.html","e87003c651c94a2fd0e30a1ec0a07611"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","93adf3604334bd44db9d9dc8274ed512"],["/albums/sunset.html","06e463c20ec13adde079eaeedc1afa2d"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","17fb19a1b1d15ecbbb22836562d8fee8"],["/albums/日常.html","bf3067fecd295d513bfc4c6f0d3165a9"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","aa3dec759a961852fe79f0bd9c934964"],["/archives/2023/05/index.html","a0ccef4dba109340c4e5af5c493aecda"],["/archives/2023/06/index.html","b36538080e45112195bdc7628cee38c6"],["/archives/2023/07/index.html","52fce30b4b52e8a177311d195be99b98"],["/archives/2023/09/index.html","069cd8aeb8e25a518ed0a42d69ffc46a"],["/archives/2023/09/page/2/index.html","444b6e1239e5b92b4960e804e51364ab"],["/archives/2023/10/index.html","e8d8fba0d67c492b6e78bdacba4d58ff"],["/archives/2023/11/index.html","e7bf7c735dc215a29049c4961e00ebae"],["/archives/2023/12/index.html","55832f95f60a61ba9e554ade7e1e13da"],["/archives/2023/index.html","cba00f2a6b54ecec3a1d996b036f9a54"],["/archives/2023/page/2/index.html","ab3857452b9d68a63350423a087ace28"],["/archives/2023/page/3/index.html","17fe4b5dbdf1b0350f6084285b415116"],["/archives/2023/page/4/index.html","5920413a3d113633bba33bb8cd1b8771"],["/archives/2024/02/index.html","507507f241fb64d8665cc7604a1f936f"],["/archives/2024/03/index.html","3f422d713c1b571706261948706a9af6"],["/archives/2024/04/index.html","255e020619dc5179a59c30a51d7ec7c9"],["/archives/2024/05/index.html","de4206fba85c1f87ed7f94c0c57886f5"],["/archives/2024/index.html","698387a4d45b0991b45687cce81a3c5c"],["/archives/2024/page/2/index.html","d26d3a8e2c91cd4a797f19a6214c33ec"],["/archives/index.html","d5be5f1c1e011a0b3a8162243d20a3f4"],["/archives/page/2/index.html","02b010d00c745994b2d76ab40cac4d0e"],["/archives/page/3/index.html","12a2d2178674d0a2c7db41512e191f07"],["/archives/page/4/index.html","3ccd6f7b6fc379f7cf4fa88d9d9cf4d5"],["/archives/page/5/index.html","d84df2a5f434cb1b4183835b4f68af4e"],["/archives/page/6/index.html","7552a829e2a3cb5fc3dc3aed5a486257"],["/categories/index.html","6cb61d237c0338325b21a25d343c3034"],["/categories/spring系列/index.html","a4e2caf4e59fea50b8fcb0db52daada8"],["/categories/前端学习笔记/index.html","25ea25b1f7d321ed402c0329a87eadd9"],["/categories/单元测试笔记/index.html","8d72be3928848c0607bfc434dc808c5a"],["/categories/安利/index.html","51538a04f35cd82290916231c7a70320"],["/categories/工具类/index.html","6ae41b330efa252d49dfbccb01d87b85"],["/categories/数据库/index.html","169e3f6fed79707dc767a37c07af8df9"],["/categories/日记/index.html","6ae0c9f70f894fff44a69de71f3dbf09"],["/categories/笔记/index.html","4c6aa1c06f43f02d61b3437572f8ae07"],["/categories/笔记/page/2/index.html","3cd02eee0bf3e5fcef4d6b730913b234"],["/categories/编程技巧/index.html","3a9fd83907abce41264b9ead95b62862"],["/categories/编程技巧/page/2/index.html","7971f3a728f9f1d3e25f1982d2d6b7a1"],["/categories/自动化测试笔记/index.html","8cfb07f1e210d4b738b03c69dddb5aef"],["/categories/计算机知识/index.html","de17936a73eabd159a7b78d991bcdc7d"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","8eed36355d5c07ee12a48bc61f81b174"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","06c1203f64c27f7ac169d3effcb9913f"],["/page/2/index.html","bde672009664d0c29ef2cf48be921b95"],["/page/3/index.html","80b7dfc626bef9b32f68091628696fc3"],["/page/4/index.html","4787f995ca94e2f18793d15102541ccc"],["/page/5/index.html","18f0e7805d6cb0d55263d1f0d8ebd4f0"],["/page/6/index.html","b287b334c157df126c967fe1b2990a03"],["/sw-register.js","635743ea8483f42792234f851730749d"],["/tags/2023/index.html","2b9f4e84530699d6d475477bae0d468e"],["/tags/Docker/index.html","c46cad5b5c82cbbc2ed12682e3326dc0"],["/tags/Git/index.html","a25d1ed3dde5902b4f29ef2906505f08"],["/tags/Grafana/index.html","99bee91308c7d4360f559e4c5a2796d0"],["/tags/JSON/index.html","6d5bf568d8513d66b58abe03beaea696"],["/tags/Java/index.html","3525a68cc85d2f5be6d8b6620a0ee09f"],["/tags/Java/page/2/index.html","768e9c242577036ffed76314da7e853d"],["/tags/JavaScript/index.html","26b691bcb895d534d1c5e120ec769141"],["/tags/Linux/index.html","e8630898f0d65c682bf7d8029ca27fdd"],["/tags/MySQL/index.html","4406918c603252cf0d66061bffb09f2d"],["/tags/Prometheus/index.html","39d5deaab849bf7749e9121e6a4d6e88"],["/tags/ResponseEntity/index.html","055ccca203924d79ff961d8726240fb1"],["/tags/SSH/index.html","f5365aeaf067e65b7ae39c209ac097ed"],["/tags/Typora/index.html","e4ec734d8a9ed3a23d2cdd91eb963710"],["/tags/cAdvisor/index.html","7a7521e441b71a93a4af05b127a4c18a"],["/tags/frp/index.html","8e319d84d7d5a633efc186d339ac2825"],["/tags/harbor/index.html","e6ed6454fbff74a0719b35d02912e34c"],["/tags/hexo/index.html","d567366f837e71097f67dc2ced34b178"],["/tags/index.html","7be6dd64ebd652bfd5c636e5d1d049aa"],["/tags/javafx/index.html","5958c46f6242d6726c69d048f0e34bad"],["/tags/java线程/index.html","7e842b30965302a3dd29a3d1008e26c8"],["/tags/junit/index.html","061ae2beea48cc8262e98d89484351c2"],["/tags/lambda表达式/index.html","bd1b7ca1c91b79adc2559287d4e9867b"],["/tags/markdown/index.html","4cbd9378b555c2ccb47e3165094b7729"],["/tags/maven/index.html","97dff27668912af473315511a4406fda"],["/tags/mermaid/index.html","56fbfcac0d2fa88cb30e1dfe2cb5ec57"],["/tags/python/index.html","a35c7b882e5a67bc01bd5e21d05ef1c4"],["/tags/selenium/index.html","c93bb103ea84031aaaf1fc8fb3946cae"],["/tags/servlet/index.html","dce8a8e6d7f3201da7e0dc576b3f01af"],["/tags/shell/index.html","584b263f94a6458fab5f57d73303df5e"],["/tags/spring/index.html","a4a23e37afb67bf046bea8afd7c6d666"],["/tags/springboot/index.html","36c782f1548c6160e940f1235c14fe50"],["/tags/springmvc/index.html","95824572f8d5f1aec6f567bf81225503"],["/tags/spring注解/index.html","a4709c3b746f1ec84a80f47e1c620bd5"],["/tags/xmind/index.html","335f60c69dafc6429453e3fc3dbd3cda"],["/tags/分享/index.html","c68ab12c77544ab88b5ec2b454dce8a3"],["/tags/原创/index.html","cc468d58872a96d5b11c1bb855ae3847"],["/tags/原创/page/2/index.html","baf4e188305930c4a1f6f539512884c3"],["/tags/原创/page/3/index.html","d4ec2e6b53a0aed0fae8e3b22b1acb47"],["/tags/原创/page/4/index.html","e8d32d69856938196a6a7d8133493d01"],["/tags/原创/page/5/index.html","7c8f0c54ff35f9b7b18ce83216dba2dd"],["/tags/可道云/index.html","a905dc9e7befa09e73ab3b8a09cf2d49"],["/tags/年度总结/index.html","06f5f424893c0afcba314f68037092b2"],["/tags/思维导图/index.html","c607a4db7137df310c86603d88277774"],["/tags/暑假工/index.html","8d5360c9af265df9b8f148ea6fd08ff8"],["/tags/电脑技术/index.html","655877be539d80985b4938a3f0c78686"],["/tags/破解/index.html","77eaa12ccfcce74b275ac0a62ca4ed87"],["/tags/计算机/index.html","25b3e4c34933e8edc24ebba0c9e733cc"],["/tags/记录/index.html","461c52dfc88f99c1d110e02497ab3e38"],["/tags/集合/index.html","d28901a04d02d0ecbd0abdaba1015771"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
