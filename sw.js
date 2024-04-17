/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","bae7bb7fd8408fb378d02ee87d28cac3"],["/2023/04/28/Java/index.html","198b587928082fcc2da7a67986c7d0aa"],["/2023/04/29/Mermaid画图测试/index.html","ef6d9f68e4acb8264b8e1a95d7e07c77"],["/2023/04/30/hexo的部署及SSL应用/index.html","0c4ded8017b8867bf3a0e8819ccfa922"],["/2023/05/02/javafx使用maven打包及运行/index.html","24496dab58113930f41d24074b8054e8"],["/2023/05/02/安利几个好用的网站/index.html","3e39838fcc61ec94d48da47a16398b38"],["/2023/05/02/运算符级别比较/index.html","36971a2bc25450e138f10004ec467b11"],["/2023/05/02/集合-Map/index.html","e16751dfa45e0ac95450a09e5484c20f"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","c168bcc9c36686afbaf175c2ba9839b0"],["/2023/05/08/frp之内网穿透/index.html","896319c2a74d02f359bf56a069a5e2e9"],["/2023/05/14/集合类的继承及实现概览/index.html","eca5a017e93a839254b6591d42e42a8a"],["/2023/06/13/湖北飞young算号器/index.html","bba9d5646995557d7e9c0ec9bb5a0399"],["/2023/06/17/windows之重装系统/index.html","b3241d4951c68555f46c15754b9c6e39"],["/2023/06/28/记一次打暑假工的经历/index.html","dfb5afc3c54c808fe02fdfeec0ea6a74"],["/2023/07/08/maven的使用/index.html","712800bc1f08213a94bd41dba1d37e93"],["/2023/07/11/Java-lambda的方法引用/index.html","de6b808e05c6153529817500ee07f26a"],["/2023/09/04/Docker部署/index.html","dc3d88e4c0c34b359fcb8a421dea428f"],["/2023/09/05/Docker的使用-壹/index.html","8d75ef7bcafa3ec54d1e23607d0df7fa"],["/2023/09/05/docker的使用-贰/index.html","53e82551a31260740a16ef0538b17306"],["/2023/09/08/Docker的使用-叁/index.html","c219165a999e7ad0cd26606359abc624"],["/2023/09/08/可道云桌面搭建笔记/index.html","08a0bff0bbb3a9276603754b581740e1"],["/2023/09/09/Win至Linux的免密登录/index.html","17d1e7bacbd0ee67c8aacf12a97d8505"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","b0af81b6b421601cbe5dda84316e2ed1"],["/2023/09/12/Docker之nginx的负载均衡/index.html","90698ed05f40cc815149f460c7575968"],["/2023/09/12/harbor本地仓库搭建/index.html","6ea1d4c6226fabaaae9996c06360a241"],["/2023/09/15/Linux2023-9-15作业/index.html","e07e7f8bbdcfe8cea20f1bf9aa9a3163"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","b812db63244cf88290af54f8ed75f213"],["/2023/09/18/Linux2023-9-18作业/index.html","dda350415b9506b28505b21086c1ff09"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","703945bbc800f4f2f82314ce3abbc372"],["/2023/10/26/Git同时部署多个仓库/index.html","9f393dae53548e4cd822dd0530ec9911"],["/2023/10/26/Git的使用/index.html","187499762addcbb749f44d0af9a15cc7"],["/2023/11/07/Typora的破解/index.html","69bd86fdf49a0f5a2bca161f45490e2e"],["/2023/11/09/Xmind破解/index.html","00ad7a6cb7d1908e6d3222c4fbf81d1b"],["/2023/11/22/JavaScript笔记/index.html","c9eb47e5b68f15f9d98b9a825d5d1a38"],["/2023/11/27/shell脚本笔记-2/index.html","cbe66f0c4585a615b4843a030225bf85"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","a5b0612e8ccc3d8a225d14fb6445fac6"],["/2023/11/29/windows重装系统重制版/index.html","21bffe2abd93fd730625499a605ebdf3"],["/2023/12/15/shell脚本笔记-1/index.html","f0d302370dac0775f6fc646251120bca"],["/2023/12/16/shell脚本笔记-3/index.html","6d2c5e94cd5319b4cdeb696e7c17bb83"],["/2024/02/09/2023年度总结/index.html","abb41fecff873882097a5f58d77ea61c"],["/2024/03/05/Selenium-的使用/index.html","0909a70275aa3e63d3bacf1232a8b8de"],["/2024/03/11/JUnit/index.html","257a8fbec34f1ff020d9aa1f2dc828cb"],["/2024/04/03/JSON/index.html","1f85bba1f7e97e618c5de8db960f0ea6"],["/2024/04/16/JavaWeb/index.html","8f4fa8451f3b63dfd7e0548363f85c57"],["/2024/04/16/SpringBoot基础/index.html","f780da8bdb986a230c3f9b9c73e667a5"],["/2024/04/16/SpringMVC/index.html","a46ae92c686c708f358e071b636629e4"],["/2024/04/16/Spring基础/index.html","7718811a6030f33c34935e681977c884"],["/2024/04/16/springboot多模块开发/index.html","36b1eb9aa5b5efbdaeb58610038e3100"],["/2024/04/16/spring开发注解集合/index.html","403980807819f70816a89720f065eb04"],["/404.html","14bcfa74007808a62a4fa498644869a6"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","cd6a9c96dd166398c1a866ba2aa18d42"],["/about/site.html","490b1225f82c761b5b4b4baff35302c3"],["/albums/Test.html","0d9ed9173bad5a71ee244a59063a27c9"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","8701ca79a3c25c23b73e9726f47d6d1f"],["/albums/sunset.html","6aff5eb8f63b7e0bb11eb31acf19d76a"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","11fcdcc8967c013feda28268be19b23e"],["/albums/日常.html","23cd9e037510e561550fe5d166c576e3"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","212a0c67d1d78506ed234a27d321f558"],["/archives/2023/05/index.html","d0eb43aa76da64bc6b231d7c3ab074bb"],["/archives/2023/06/index.html","d1af05f14923d5a31ba54af9ff46d8b3"],["/archives/2023/07/index.html","46bd230c61c8781345467d2863bb9f61"],["/archives/2023/09/index.html","f50e97d3a6871b66d3e4c1f9aee5a56c"],["/archives/2023/09/page/2/index.html","49750fe8d3654b497c95fefa3ff89bf1"],["/archives/2023/10/index.html","628edce612dab621a201c971b2315704"],["/archives/2023/11/index.html","13744cf9afdd33ba099929021e110c40"],["/archives/2023/12/index.html","c912174d6581295e9f41a43af79d40f4"],["/archives/2023/index.html","a72554474fdac4528f8678f6a176d2ef"],["/archives/2023/page/2/index.html","ae247fb6afcabfcb50be09aeffd2cca4"],["/archives/2023/page/3/index.html","8dc95d7883934cda6b3e3b442d347772"],["/archives/2023/page/4/index.html","a86456c1e4b4df89d39771cc914f8806"],["/archives/2024/02/index.html","635442009266293a32e0cc01bbdc800f"],["/archives/2024/03/index.html","ebf2b54b34c8772db4bb24ecd3783a9c"],["/archives/2024/04/index.html","01ba747b9ff9261a92e1ad76120c8fe3"],["/archives/2024/index.html","faaa050547b9a0a5dac07942a5d59794"],["/archives/index.html","ed3c926785fec91d00c8b0c743c2363d"],["/archives/page/2/index.html","4677ff87a50ade08562c0b2f539fc868"],["/archives/page/3/index.html","3827e933bac97475b6bc0c07781f9cdd"],["/archives/page/4/index.html","6af109c84ffd3b80630efdee2705a556"],["/archives/page/5/index.html","22cabeee63b1bef4fd42389a1d54cf81"],["/categories/index.html","c47bea4a3c82e3da20eff4622e0d97fa"],["/categories/spring系列/index.html","b264badf30f1211dde8bf3169be537d8"],["/categories/前端学习笔记/index.html","f686c7ba3078cc6186b4a66afa5dadec"],["/categories/单元测试笔记/index.html","36519ed1f9c92f03dcca5e9c90905e6f"],["/categories/安利/index.html","4f60891af1dee5d40cf50b909f4dd7ef"],["/categories/日记/index.html","c128834f1cb39a8b7270cb4322af8bb1"],["/categories/笔记/index.html","c64c2344a483ba1dbf5e38451edd3b6f"],["/categories/笔记/page/2/index.html","174f6c8d21b63b777c8f72ee62cfb679"],["/categories/编程技巧/index.html","316d3455b8f5e7da58b79277600cabd9"],["/categories/编程技巧/page/2/index.html","43760c7c3380752f4b9c555307f6cef4"],["/categories/自动化测试笔记/index.html","c15d1f928734fda71288b1a9dfd30107"],["/categories/计算机知识/index.html","de4b7db424955b5dee079c3e08493b4e"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","1a609df6c236356a9993a227f8ce712e"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","df25752643d7be1fba5b488dae01bd4a"],["/page/2/index.html","7b3599449aecae6c180752869aa0d404"],["/page/3/index.html","852cabf25d6d0f51e10c60b3caace1fb"],["/page/4/index.html","c321b2b7103518cd65ae37e4ba4e9e4f"],["/page/5/index.html","8c7169011ca51a1b28473a0fd0eb0e1f"],["/sw-register.js","18652f1d4de07aab3fa989d4c8b57dc8"],["/tags/2023/index.html","48bf0cd036759d098d05d23da68b807f"],["/tags/Docker/index.html","cc3b7795610ee4d1ce27062ddc2f3078"],["/tags/Git/index.html","44d8bd6827e7823a41238fbbee32bc1c"],["/tags/Grafana/index.html","4b4e0e5533fbaef82ef15173b9d69caa"],["/tags/JSON/index.html","654dab1bc297381bc4ad0ec6a38b690a"],["/tags/JavaScript/index.html","f62c13becbda1e5d8003a6bbb01178b1"],["/tags/Linux/index.html","2816a0c7341849b3acb427ddc265fd66"],["/tags/Prometheus/index.html","4ac4abb795aff0dd436ea8fd622faca7"],["/tags/SSH/index.html","77797a01d6385ff905509a9bab733bbf"],["/tags/Typora/index.html","4e12c121c7ecd63102d6a94f2d6aa518"],["/tags/cAdvisor/index.html","a6045ef0ddc779f644092c0c74941bf2"],["/tags/frp/index.html","1a48583390c2cf875c2231c55ee47cf7"],["/tags/harbor/index.html","ee5231eae6a5e534e36cbe4964a8568a"],["/tags/hexo/index.html","853f629759f65595e911d7a9f55380a3"],["/tags/index.html","c302e3938a007f4a00a14313b2ac9f42"],["/tags/java/index.html","073f50f5ed2c9f5fee3ca5e2eefdaba0"],["/tags/java/page/2/index.html","96750b19d313aed4bf1c32714e77f936"],["/tags/javafx/index.html","20f7bc2fb6a09a617396fa0d417e4137"],["/tags/java线程/index.html","5d8e2d2f1be06cadbb5ac3386f93e20b"],["/tags/junit/index.html","b66c15ad56225979f68bafd5a11ffc48"],["/tags/lambda表达式/index.html","3974ed23fef30a55a024bec3e271c688"],["/tags/markdown/index.html","f11d2718570c9ce354f03b93217ebcae"],["/tags/maven/index.html","0b63b26f37bd24382c9d073b3e62e932"],["/tags/mermaid/index.html","026e66f54dbd45f8537f76bfb118c35f"],["/tags/python/index.html","c82bf831f2dd5ef92f10743ca8e8ac2d"],["/tags/selenium/index.html","90135407dead8e29c0a7756e40a745da"],["/tags/servlet/index.html","037cd424b962bcc941b53d646db55c6d"],["/tags/shell/index.html","0d50761d169cd56f4da650fbf04683c3"],["/tags/spring/index.html","d720bc286a9a822a280969338984d54d"],["/tags/springboot/index.html","759c0bda7c82a8454b93c58c01279b94"],["/tags/springmvc/index.html","0c19a1d6db04877ba77f88796e300dd8"],["/tags/spring注解/index.html","f63b91613172ed2493fac63c335f3a1e"],["/tags/xmind/index.html","f968caed7b589a675b409bdd96c32995"],["/tags/分享/index.html","1aae2c58d09c295f4b351b2fd43ce971"],["/tags/原创/index.html","00a49dbed441c201900efa8802530a7c"],["/tags/原创/page/2/index.html","e84e63fd5d55fa0a2908c2c2930ecbd5"],["/tags/原创/page/3/index.html","894a1f2bc3cdec32621ae60d71166086"],["/tags/原创/page/4/index.html","c865bf3bc7381dcd370ac85039e930c0"],["/tags/原创/page/5/index.html","a9a93cab69981d3e54577ac709826369"],["/tags/可道云/index.html","1f0b60bbfef6b5cdf6b4ccf1503cbc65"],["/tags/年度总结/index.html","d5193fd7a73ba3861eff9c85305e719a"],["/tags/思维导图/index.html","6672c63974bb12171baedf2b120edf84"],["/tags/暑假工/index.html","178d0eeb9fd0cd9acfa97e0c2f1b5b87"],["/tags/电脑技术/index.html","cbb112990e508021e8ebcf9af9e691c5"],["/tags/破解/index.html","03ffc941309dc94b742ccfb1d351fa6f"],["/tags/计算机/index.html","0736ba792123434e534cdf015dd4d77c"],["/tags/记录/index.html","2df1a7c75ad4788081d778fbf8906faf"],["/tags/集合/index.html","8db767856995438e69c1842bb4651d38"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
