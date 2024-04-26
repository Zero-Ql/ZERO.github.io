/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","b90f6798e503f3a04489cd68fc304920"],["/2023/04/28/Java/index.html","732f27f7d1816fc4fb1588b9340db428"],["/2023/04/29/Mermaid画图测试/index.html","52e43e8459427055743b04ada7bf2773"],["/2023/04/30/hexo的部署及SSL应用/index.html","dce5fd0a9777567f0d4915a3a4c5bea6"],["/2023/05/02/javafx使用maven打包及运行/index.html","637cbbc6bd1a443800e46e86033822f6"],["/2023/05/02/安利几个好用的网站/index.html","40d4ac618195a6e168797d84ada85f73"],["/2023/05/02/运算符级别比较/index.html","43da5a80cd6d678498d050ae143c2ddb"],["/2023/05/02/集合-Map/index.html","57433ced4d3ab13615a7e3fc67b9463c"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","311191f9965df3d2f290b9207079f598"],["/2023/05/08/frp之内网穿透/index.html","983a86981103f17fbd281e1dbbd800e2"],["/2023/05/14/集合类的继承及实现概览/index.html","a26c031e333778e2a489bcf382430515"],["/2023/06/13/湖北飞young算号器/index.html","448333db980f13d529e929545f50382d"],["/2023/06/17/windows之重装系统/index.html","88224a8df25df86c52439948d0a929c4"],["/2023/06/28/记一次打暑假工的经历/index.html","93a700b497c421ae92bfdf11f531ca7c"],["/2023/07/08/maven的使用/index.html","9c3dcee87b3267fa5e771acfbb015405"],["/2023/07/11/Java-lambda的方法引用/index.html","142903196f4fbab3f827d733d57013df"],["/2023/09/04/Docker部署/index.html","a1dc82445a23048dbdfd26353ac52922"],["/2023/09/05/Docker的使用-壹/index.html","72f5140b919ddd8928203be40c61074e"],["/2023/09/05/docker的使用-贰/index.html","106678fe4ce05628c322e454a6030534"],["/2023/09/08/Docker的使用-叁/index.html","4b5137c7a9550fe6f6fb8215db2d02a5"],["/2023/09/08/可道云桌面搭建笔记/index.html","e3438906003c1353ba643626901cfca8"],["/2023/09/09/Win至Linux的免密登录/index.html","b68adc437b310b149427c7b8dd0fcc28"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","29e9b516df92d191112e1d36dd7c0861"],["/2023/09/12/Docker之nginx的负载均衡/index.html","2bbf505d16a92435862f41463cf8dd2e"],["/2023/09/12/harbor本地仓库搭建/index.html","9e300f83f9800c3e99dc3ce836282269"],["/2023/09/15/Linux2023-9-15作业/index.html","c7993e1bd2ad21ac2db3da40078d55c7"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","6f880a24203a831fd2195ee1c61be705"],["/2023/09/18/Linux2023-9-18作业/index.html","8e9408617d708d9921842602a98291c6"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","53f95248b0562fce5dbb12faacd8f2d8"],["/2023/10/26/Git同时部署多个仓库/index.html","0cdb5fda3ab9475e12dbb11b748b3bc9"],["/2023/10/26/Git的使用/index.html","a6aba595a5c3c38f4653b82b5e5c5cff"],["/2023/11/07/Typora的破解/index.html","726ff7261fec537f560bdaabe20aca65"],["/2023/11/09/Xmind破解/index.html","ea6064e1cad24c79c39398018f6061d1"],["/2023/11/22/JavaScript笔记/index.html","0ec48f9d743bcda07b7ebf362fb7e532"],["/2023/11/27/shell脚本笔记-2/index.html","c90e68020e3d3b1531ce494e9db0b303"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","5756a994c0bc568c77fde59a1cc2baee"],["/2023/11/29/windows重装系统重制版/index.html","e39e9dae728fe546e82d45df73267c5b"],["/2023/12/15/shell脚本笔记-1/index.html","eab3ff107d196b294060e628adced04a"],["/2023/12/16/shell脚本笔记-3/index.html","6ede7ffd38d6ff7e1eba689d7919ebe9"],["/2024/02/09/2023年度总结/index.html","136300f4ae24eb8ebeff877abb5deaf8"],["/2024/03/05/Selenium-的使用/index.html","d2da941606cc26e0133ad05498b36c83"],["/2024/03/11/JUnit/index.html","b8163d891ccf065a22f8d9bef37b8805"],["/2024/04/03/JSON/index.html","88de3c8a0346df75884a1491d71c9c1f"],["/2024/04/16/JavaWeb/index.html","550e984ef07d649aa26cbb01159a1488"],["/2024/04/16/SpringBoot基础/index.html","b22a3813874048c60b4aff8bd31c6e26"],["/2024/04/16/SpringMVC/index.html","2abd672ab35013e726199e878bf30976"],["/2024/04/16/Spring基础/index.html","8af1e0f9ed3d5bc9d8ce81864bdfdfde"],["/2024/04/16/spring开发注解集合/index.html","f0852ccbbef2d51cf479def4d78036dd"],["/2024/04/22/Spring-ResponseEntity/index.html","d747ed2c12105f05801c3cf6b844e35b"],["/2024/04/22/springboot多模块开发/index.html","723c28d416c0e4d408579db96b4a69be"],["/2024/04/23/springboot全局异常处理/index.html","0c31ccf54c3d5e30946cdbb713556de1"],["/404.html","127593b115fe4efb846205726bcf280e"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","4416f7806b28dc1ef07e00af7a7881d6"],["/about/site.html","0775acf85fd720cab797e6604b802858"],["/albums/Test.html","c39259d7193c6fd92019ff8b203ba937"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","6149510ae7a2f83b09f35f02c91508c5"],["/albums/sunset.html","a032f2f0d8e28195f962ec5f681ec58d"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","6a5937e9986257040fe2a60e8e738bb6"],["/albums/日常.html","f8a8da181a7747c5980984ed671bcca7"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","548af7026a017a501f9b7903432bdf66"],["/archives/2023/05/index.html","a32b34e9d9c84f83ebaddb9dff5eb5f2"],["/archives/2023/06/index.html","e25eedfe155a9a58a6ae15d17ec03018"],["/archives/2023/07/index.html","5464283ae223267a2c6179d420efb26e"],["/archives/2023/09/index.html","72c88158c63415078d72dcaf9d46d76c"],["/archives/2023/09/page/2/index.html","a26f45459f3615f31b913df6079a781b"],["/archives/2023/10/index.html","01b1324497a492e409430d6ecda3dfae"],["/archives/2023/11/index.html","c6890f3d6ea5baa9f5242530fdcb6860"],["/archives/2023/12/index.html","664f36786d7b40a6f3174da4fbc378e3"],["/archives/2023/index.html","50cd3e7b9eee540cf8f3249e0f1e6683"],["/archives/2023/page/2/index.html","f8c48b8a97fb6e8b8df31ed35fc966c3"],["/archives/2023/page/3/index.html","d6a2e4b7a03e996d685fc500aa4b475c"],["/archives/2023/page/4/index.html","82ab0efca64e7d8f78292157b6c602fc"],["/archives/2024/02/index.html","d675e7348499cd2a6a0335c4588b6c2b"],["/archives/2024/03/index.html","8cb5c75cc7c8851cdef3f8bc52adf9cc"],["/archives/2024/04/index.html","32e2e0ed798a50235dbf393bfa08d17c"],["/archives/2024/index.html","de59fdf48ec9af87fc536d9fcb13d6aa"],["/archives/2024/page/2/index.html","a440837a6d616bb3c12a92c0c8b1a7c7"],["/archives/index.html","e71f01d929705f95929f9e24ec4955c0"],["/archives/page/2/index.html","7f41d58f2c598f92b4401e4f2c330243"],["/archives/page/3/index.html","8a01ad976f91270397b3852a91ce459c"],["/archives/page/4/index.html","3c211a8b17c43a41d9c652474e05a3af"],["/archives/page/5/index.html","5fb582dd891d5db062c37f7220447016"],["/archives/page/6/index.html","1e236004ff25533550927ba37fac1d63"],["/categories/index.html","e63d5ce59b8a7b8cb58db76dc9ca624d"],["/categories/spring系列/index.html","f1dab82789b64b56111e70228ad03065"],["/categories/前端学习笔记/index.html","81697c66a278b4fca4c833d88e363be6"],["/categories/单元测试笔记/index.html","f87879ed108959af20997449da60d619"],["/categories/安利/index.html","c56ba0bf635504ead0a8853ea1ec0030"],["/categories/工具类/index.html","72e6a9f9813821a6e5d1eee384f41f74"],["/categories/日记/index.html","e786bdd924925c167922849b627c952c"],["/categories/笔记/index.html","16c62238ea7e0abb4e1bc8037b809056"],["/categories/笔记/page/2/index.html","4ae22c3578794e1bd7d74d6df7cadb72"],["/categories/编程技巧/index.html","b2285c8d5cdf6897eb210b8a0cc88e2d"],["/categories/编程技巧/page/2/index.html","8f5d4bb58ec33decfcb7606a9bd59ab6"],["/categories/自动化测试笔记/index.html","1635b4f3691ae334459f86e3e1b62880"],["/categories/计算机知识/index.html","66a75353908683755690528ae692fd92"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","8d5f491c17cfecb246f5a47570cdfc3d"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","a034025d76b4b21bbf9ce3d8c36797ac"],["/page/2/index.html","839a9653693a29e535ad3e6fa8ca3695"],["/page/3/index.html","06c5f9c69bffef85d5959d980edd6afc"],["/page/4/index.html","e9008a13973d205dc21b3fef8ed735d4"],["/page/5/index.html","4a6c72b04d48b15456781a72eb579218"],["/page/6/index.html","a94e785f26d5c2e6a19ae476616d41f0"],["/sw-register.js","a25867aa8ca48b6244e8b2915b8e4591"],["/tags/2023/index.html","5393ff683c13453240a6c07feed965c1"],["/tags/Docker/index.html","8934b7dfca1f9309e33497d72dabc491"],["/tags/Git/index.html","4dcea352f6c0a54f9f2798eddcb2c65c"],["/tags/Grafana/index.html","9a7f43a1addfd2b5fffd8248de32cee1"],["/tags/JSON/index.html","76aa164decc4709ec78919d8339bd99f"],["/tags/Java/index.html","e14e2131ff27ab6c39eb4afea3f4b685"],["/tags/Java/page/2/index.html","c1d612e681ab2c2f8579b887b64fdbfc"],["/tags/JavaScript/index.html","4d74fa96304541a455308e14e74c7b72"],["/tags/Linux/index.html","2eb22204ffc118df472cc295302b64ae"],["/tags/Prometheus/index.html","825ba04ae9e5b054b5142d1f18960827"],["/tags/ResponseEntity/index.html","25486eb0d4414522fee4b24fdcb8723a"],["/tags/SSH/index.html","0bfb5d07659c5d7d6238bc6a4943a92c"],["/tags/Typora/index.html","41ebcc1bd539c8206aab5360e0a8644a"],["/tags/cAdvisor/index.html","9228ac03959b33be20f319e86895fbdc"],["/tags/frp/index.html","fe8d749a9f79f79a7ca1685d3a9ed897"],["/tags/harbor/index.html","50a9325d34ac5d7da34e962044e902ca"],["/tags/hexo/index.html","05af1969ec3023bdfcd668fed0ea7aa7"],["/tags/index.html","b5b403db0dd3009df4f91e48bba71eba"],["/tags/javafx/index.html","7c833a2c5cc4ca22bae302a867254101"],["/tags/java线程/index.html","cfd87916d94f66a8994113c496891ae3"],["/tags/junit/index.html","e79a4bb7ed070b779431663967f56961"],["/tags/lambda表达式/index.html","db7c940d24ea0b8a47684ef8dd9e844c"],["/tags/markdown/index.html","e1ee51a620db948fe9dfdc052be299df"],["/tags/maven/index.html","53a56006b110833db8e0964f77dd9433"],["/tags/mermaid/index.html","b5f459ba5a65c9c76f172b7cf3a64647"],["/tags/python/index.html","055bfda10c30d66966d3e6d238bd5b09"],["/tags/selenium/index.html","28433c6f5f0ee8e80713906bf1d8a9cb"],["/tags/servlet/index.html","0588af4d065e00a1e09e8ca08becf80a"],["/tags/shell/index.html","288767025d5b5f1cbcf53bf7a2d6c06c"],["/tags/spring/index.html","0d8b568e53b97d4222147a009c03e954"],["/tags/springboot/index.html","b604f71e3599fae10c0f644805447ce0"],["/tags/springmvc/index.html","82186a319eda9ac934d276e4df85e56c"],["/tags/spring注解/index.html","1001890302a03e8a6e9aa96d90422081"],["/tags/xmind/index.html","517b02512ae9f76c89a2ec8d9aa89668"],["/tags/分享/index.html","4d03c818904bc626c1fce5f8fe8bf8da"],["/tags/原创/index.html","f1bbc0bcb7bd1231e21299e505869900"],["/tags/原创/page/2/index.html","000d55d745d3020da7fb1569e24f46d0"],["/tags/原创/page/3/index.html","a7c3dc38b2fa4162edf3cb0de236208d"],["/tags/原创/page/4/index.html","80e7db0a53008e3048b70dfbb06a409f"],["/tags/原创/page/5/index.html","09d11984b6b2dfaad5e61c3bf033277a"],["/tags/可道云/index.html","8e446aa8b92f541f4ecffe079935e7b2"],["/tags/年度总结/index.html","c653dd26915f445d0847eaabef4edded"],["/tags/思维导图/index.html","870281b962e1d7c130807b627fce6963"],["/tags/暑假工/index.html","54dae95150adc322501fd3b3f53bebbb"],["/tags/电脑技术/index.html","c86ed1c4236afc1537ff1a8102942e3e"],["/tags/破解/index.html","70a51844bda9225739d832ccc981225b"],["/tags/计算机/index.html","c52d036ab7cb13c5c76b0208378dfb04"],["/tags/记录/index.html","1f05b27020ec8f0ba2107ddd2c0ea043"],["/tags/集合/index.html","df98cfec03449a23c0340501d69f5277"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
