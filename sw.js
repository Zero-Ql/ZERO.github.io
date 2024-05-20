/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","02691acf49e7c036005f794fbb9f8944"],["/2023/04/28/Java/index.html","394c2e1f958a600a59a9d3da3fa7ec78"],["/2023/04/29/Mermaid画图测试/index.html","752e41981e2ce5263fe4c40dcbe227d3"],["/2023/04/30/hexo的部署及SSL应用/index.html","1e4150ecaf36675e2561239c7853b9b7"],["/2023/05/02/javafx使用maven打包及运行/index.html","9513e16de3fbaddc87f30cfeb2fa21ee"],["/2023/05/02/安利几个好用的网站/index.html","081891e3add1ec849c872d9fd176cf62"],["/2023/05/02/运算符级别比较/index.html","fc0b33da71c41e621d39c1d67bc8eaa2"],["/2023/05/02/集合-Map/index.html","46d61e2934f72cbc504254b09e6feefd"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","e21c01435b5d32db43bd0179eb2e3e79"],["/2023/05/08/frp之内网穿透/index.html","c939ad5a035fe33a0f4458d6eca55da2"],["/2023/05/14/集合类的继承及实现概览/index.html","7b1644885cbb20359694e127bf076ce6"],["/2023/06/13/湖北飞young算号器/index.html","661490549b003e6d3f9cf3976385a0af"],["/2023/06/17/windows之重装系统/index.html","4b06874568ef3d815f7cb14aa0bc1910"],["/2023/06/28/记一次打暑假工的经历/index.html","f2effe29d1025b1edd2cb38a0080708d"],["/2023/07/08/maven的使用/index.html","ada4e2c81a95b7393162975220d6ce0e"],["/2023/07/11/Java-lambda的方法引用/index.html","5840fc32a232165a04a2d135c1c6a911"],["/2023/09/04/Docker部署/index.html","869fcbe99de460f083436dfb3165df0e"],["/2023/09/05/Docker的使用-壹/index.html","cf6f4a899a52af4243fc6276d903d37f"],["/2023/09/05/docker的使用-贰/index.html","6dd464ebfbddd70c4d34b3f596125471"],["/2023/09/08/Docker的使用-叁/index.html","6a103efbaa0c7715b054155263d69c0b"],["/2023/09/08/可道云桌面搭建笔记/index.html","72cfbe82f175c28e3e509c1b5a01e919"],["/2023/09/09/Win至Linux的免密登录/index.html","cf2ab199ae2ffa6a2a05204c00acd0c3"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","dc090e5561d49170f86c0b1bea12b50b"],["/2023/09/12/Docker之nginx的负载均衡/index.html","24fba7300eda8b6ced242891ab7531b6"],["/2023/09/12/harbor本地仓库搭建/index.html","4b70eadfe727cdf8338f3ad61ce383b4"],["/2023/09/15/Linux2023-9-15作业/index.html","368d4ea7ca145945c29cea7577e27dc2"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","4bf1ea59b9e0af341d25830461fca9b2"],["/2023/09/18/Linux2023-9-18作业/index.html","a189cd7ae47ce820bc66eb434208a692"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","84c8bae3007324eb22816355caa98ea9"],["/2023/10/26/Git同时部署多个仓库/index.html","c128f6d921899faf6e1c981edafff17c"],["/2023/10/26/Git的使用/index.html","267658c658b34bff3f0f8fe9dcf6fa04"],["/2023/11/07/Typora的破解/index.html","1eb00604053a2b743019fb2093306364"],["/2023/11/09/Xmind破解/index.html","d76066d95b64ecf9ed9dd83a39d3cd5e"],["/2023/11/22/JavaScript笔记/index.html","d7157f1dab05274da6eac44f674c0f1f"],["/2023/11/27/shell脚本笔记-2/index.html","e2edec73512a6d7d045ee53ec83afa62"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","b0cad220592d40b3b7fe35e314864634"],["/2023/11/29/windows重装系统重制版/index.html","fefac1e30ebd439001bcfc6742525e60"],["/2023/12/15/shell脚本笔记-1/index.html","5d3cac1a6db4fc29241d544d80b55656"],["/2023/12/16/shell脚本笔记-3/index.html","c78537558b4bf02a95d9f40cc5fc7748"],["/2024/02/09/2023年度总结/index.html","46ffb9387a1b487646c107fb5d6983bc"],["/2024/03/05/Selenium-的使用/index.html","c0c2f2d7d9f76296183d5cf2f655fd84"],["/2024/03/11/JUnit/index.html","23ffb2effe01582f10a9dbd8cfe492ad"],["/2024/04/03/JSON/index.html","5786fa855afe05392911f6a378b9d42b"],["/2024/04/16/JavaWeb/index.html","cfacf07a0edf915b92555c0233d1f394"],["/2024/04/16/SpringBoot基础/index.html","80ad06593679bf2ef1e75d36a50d4133"],["/2024/04/16/SpringMVC/index.html","69139ced34911691d485a7a77f0481af"],["/2024/04/16/Spring基础/index.html","0661b5e6be329a8c6273d81f8685bd68"],["/2024/04/16/spring开发注解集合/index.html","10e950b5cbdf53d9d458e15893b9c2e9"],["/2024/04/22/Spring-ResponseEntity/index.html","4a4576c2d272561542159c10ea790715"],["/2024/04/22/springboot多模块开发/index.html","d952ce2f912a0e2c4bb63e88cf3876dc"],["/2024/04/23/springboot全局异常处理/index.html","bb59c054405a97e46b18d19131d34a48"],["/2024/05/06/MySQL-1/index.html","cbd3a35ee749e54b8b04056ec5eed8ba"],["/2024/05/06/MySQL-2/index.html","e7a05b2d046102ccc1528406fcdd8a40"],["/2024/05/09/MySQL-3/index.html","ce554b02a9c1f27a9a4b04d02421f40b"],["/2024/05/13/MySQL-4/index.html","7ababc206ba1f24652567c7ffeed5a28"],["/2024/05/14/MySQL-5/index.html","c56a1b9c3fe174ca5829b07ab875ffd6"],["/404.html","0526be54b649e320d3661572014b959f"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","dab81880971b685742f301e28f6b4177"],["/about/site.html","2593fdb3551d567b2bd38f613a5decbe"],["/albums/Test.html","f38469974db6cebbb83d10387b24fd48"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","c0cc780dbad9f5252a40e25dcc720a71"],["/albums/sunset.html","49958a089b751d1988b5fbd160c7c450"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","8f6e0de5137622bfd854be950c722824"],["/albums/日常.html","ad1121dd2cb55679731f11bcf02f42da"],["/archives/2023/04/index.html","0c3bd8632d0eb3cd174cd4538819f909"],["/archives/2023/05/index.html","4bd9f16e65cbb10b46598115cfccb1d4"],["/archives/2023/06/index.html","1d2b648ac942377ae59eac15a4870e67"],["/archives/2023/07/index.html","62722bee3eb02a3093b63588a7f1e184"],["/archives/2023/09/index.html","d1fcbc6ac9a62ae41575c23fb1d498a4"],["/archives/2023/09/page/2/index.html","514b7dc44cb23d130dae3519979e995c"],["/archives/2023/10/index.html","bdb9302cd72019283b6d460afd8fca76"],["/archives/2023/11/index.html","103e757623f7653f5fa9029797bb6b2b"],["/archives/2023/12/index.html","62b0cdf0b30e1515078e96c1379a900b"],["/archives/2023/index.html","0f77eea771876b1bf400b0be84c0f2fa"],["/archives/2023/page/2/index.html","d8611d7250685a67efd878aadcf66847"],["/archives/2023/page/3/index.html","55d14c0a18ab8e226f83057a93f1c6d4"],["/archives/2023/page/4/index.html","398cbf34435a6870053c4c060c8e8480"],["/archives/2024/02/index.html","9808f164b59a5aa581eda64796e157d9"],["/archives/2024/03/index.html","e66463412c74fea57d107ab233cc50fc"],["/archives/2024/04/index.html","065597dc827ae91ee370da198232ea0a"],["/archives/2024/05/index.html","43214035298c34d9e1a4c016eb69a156"],["/archives/2024/index.html","214a3651f31c48e8f89b50143d1f9979"],["/archives/2024/page/2/index.html","020fe5f3c929ea2a870d17dbdc9b0d7b"],["/archives/index.html","c1300ca998020dbf7b169f613074af53"],["/archives/page/2/index.html","c4cab2c98b0185deccc53e2a3fe525c5"],["/archives/page/3/index.html","44678cd106871d160adcfe1880158cbe"],["/archives/page/4/index.html","b4e60f99ec909276ec3dda8c30a97d2e"],["/archives/page/5/index.html","08262e166c515eadb6b98106a7615a18"],["/archives/page/6/index.html","8fb582f4c5ca8823c352dcb0a47957a4"],["/categories/index.html","769f300c82a8b57397dcd1a7699ba5a3"],["/categories/spring系列/index.html","85422694b74ae2e4375f094de43b8278"],["/categories/前端学习笔记/index.html","f690d6602050030b9b3fbddb84ad73b1"],["/categories/单元测试笔记/index.html","f2770664e96c14b20ad930f6e005d488"],["/categories/安利/index.html","55291cae69560b505feca29cc03cbeca"],["/categories/工具类/index.html","1bef23eaf09e1499316223a9400014ff"],["/categories/数据库/index.html","388d93d3c46ddb914778f5ba65c53b8c"],["/categories/日记/index.html","b35bdb8bca686542d3b2c31dd68f0bfa"],["/categories/笔记/index.html","7394a9c462d563f3c9518cef369b8e38"],["/categories/笔记/page/2/index.html","fb34cb1d8a2b4090d8ced051c55b2cb6"],["/categories/编程技巧/index.html","2e6bf5016daa05ed2c21d4444b4635d5"],["/categories/编程技巧/page/2/index.html","650fa4547afd6c8da1f34c0a6e44588e"],["/categories/自动化测试笔记/index.html","2283d9bab1078a28d8d5d59f96ed06eb"],["/categories/计算机知识/index.html","fc7ecb1916b7cd6e7c578b49f9ffbbf4"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","307568652f433247de351baed9d67899"],["/images/brightbj.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/darkbj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","fba0af092ea201e663f8de898191e497"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","8b7a4d3784ed1b45cddea3b64e361df5"],["/page/2/index.html","b4803273731ef0f43a32f1d7e780338c"],["/page/3/index.html","1a1994ae421ff3458ec7dd8c9f07062b"],["/page/4/index.html","1a8ab270a303a7c832c5c107870adacf"],["/page/5/index.html","8d34dbb09fc2624ef368fb04b01129fe"],["/page/6/index.html","46a7931e100acd74af85a709bb2f7331"],["/sw-register.js","ed24cfa41ea20b350e2a3e1f1dfa70ce"],["/tags/2023/index.html","5aeb310575c338edbefb60ae40f9139d"],["/tags/Docker/index.html","d7fb3eafc316886c2450c191f54db449"],["/tags/Git/index.html","4b51278a32250c442d328eb6e0f0b659"],["/tags/Grafana/index.html","f15767ef113f18c44f506c3f5359f7d4"],["/tags/JSON/index.html","e7f0cd90846486fe8f0433e9857a9858"],["/tags/Java/index.html","442706b5b631c134c3aad73ae6d434fe"],["/tags/Java/page/2/index.html","b572e8f0cb5faf13506f6fd159fdf2c9"],["/tags/JavaScript/index.html","9686253dff84145ed232dffeee79bd86"],["/tags/Linux/index.html","9f4f15a2076e031cc12a206006beae02"],["/tags/MySQL/index.html","d60c3fac7d42107c81ce41520d6694f6"],["/tags/Prometheus/index.html","9788f67df591fcdab156126c3a205740"],["/tags/ResponseEntity/index.html","07bb99bc15ad48156e44d63f3551bc74"],["/tags/SSH/index.html","2a5c06ed47c34c89ee852f21d4195d64"],["/tags/Typora/index.html","4a38a7a52257fd081306b28347537fd0"],["/tags/cAdvisor/index.html","d9a2c9ca92bc05abd54831cf031ed347"],["/tags/frp/index.html","fd28cff0a6d7bcc2dbbb07b9b7a873cc"],["/tags/harbor/index.html","4c7d15008e39a4b0ab2f647d2ff3c185"],["/tags/hexo/index.html","3007db8e5eb97bd29ab265d3e2448fcd"],["/tags/index.html","bdcf9693ceba92fd1a3963e0d208d3b8"],["/tags/javafx/index.html","3b73f75384cadce642e304629ba8e408"],["/tags/java线程/index.html","876f37cf5dc4b0f7d10cc14e6a2500a3"],["/tags/junit/index.html","6bbc7e029adb44b4c9eb5c88a8e7979c"],["/tags/lambda表达式/index.html","b03545eb066f3cf0d206379324e1367c"],["/tags/markdown/index.html","f3d20559cbb568ed60f4df69d5043dda"],["/tags/maven/index.html","b8ec3d596d1df56288aad3df72daf352"],["/tags/mermaid/index.html","d619889805f4971286f734980eaa0c2d"],["/tags/python/index.html","a4e8ab80e921f0579933ce87f63f84f1"],["/tags/selenium/index.html","4ba122f66eddd584f1884d39ae8db8a8"],["/tags/servlet/index.html","23739ee67ba5d1b407bb1f5ab8be6bd1"],["/tags/shell/index.html","ad839a9be89e8406a8f18aa3d400b721"],["/tags/spring/index.html","6399e07b7415479f722d8ed5699b24af"],["/tags/springboot/index.html","62aa09a1bc24b1c529eda9625f9fcf4b"],["/tags/springmvc/index.html","8689a6e08bb4bf571c6e37745815d6ce"],["/tags/spring注解/index.html","fdb7f1d2d6270d4f6bddaa46c72d1cee"],["/tags/xmind/index.html","6134441740b15c368a4b7b69090902ce"],["/tags/分享/index.html","a05f3dfe86850c54c4ecaf35e239de11"],["/tags/原创/index.html","eae0cf68d292d2c4e1624df7af1652de"],["/tags/原创/page/2/index.html","87aae7966933055d44cb010e2c27145d"],["/tags/原创/page/3/index.html","554ba098d8214bd53370bb01d2cef840"],["/tags/原创/page/4/index.html","2dda3f5bca2275db84d77a1c0ee92a12"],["/tags/原创/page/5/index.html","ac94fdb3dd9b2f89e3f96c1c958b1aae"],["/tags/可道云/index.html","b74359d78cf532f401801d20b97f0ad1"],["/tags/年度总结/index.html","235d3e8bd6834043afb69b60438b4426"],["/tags/思维导图/index.html","e27d2e6b08a6b9b4858596efd5896995"],["/tags/暑假工/index.html","01f3906aacca43f28167f5b61bde2d30"],["/tags/电脑技术/index.html","012cdb184c0d043471fd9febd01dba6b"],["/tags/破解/index.html","b1f111fc86b06edc954a07bfe21adc5e"],["/tags/计算机/index.html","a6e467e1eb199957e7725c75fcf387b5"],["/tags/记录/index.html","835cbd3d5043a4dc3983cda146d6917b"],["/tags/集合/index.html","fde331b9109016e37ad6621505252a78"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
