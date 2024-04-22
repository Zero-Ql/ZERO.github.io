/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","f54e5d29e86cdcc73ad26162b74fe609"],["/2023/04/28/Java/index.html","e504c12db8e05977108c952405a07555"],["/2023/04/29/Mermaid画图测试/index.html","f14bfc3e5124928de0075deae026f029"],["/2023/04/30/hexo的部署及SSL应用/index.html","960f1d9e4ca8b876473b6e2252ca472c"],["/2023/05/02/javafx使用maven打包及运行/index.html","00c728cbc1e5b5347880ab598189f28f"],["/2023/05/02/安利几个好用的网站/index.html","bfa2b9ad0a8d34e694cd76019f983723"],["/2023/05/02/运算符级别比较/index.html","eda5f22c9f0be42e2218006cb0633663"],["/2023/05/02/集合-Map/index.html","7f38e4a09751bf809bd5a8f2e5d87412"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","a8c637fd93930bb5e2c7e8d72fccefa3"],["/2023/05/08/frp之内网穿透/index.html","add03cf4b3d1484f7032228497c7ef5d"],["/2023/05/14/集合类的继承及实现概览/index.html","8113d12e144beda50b62bf700498d312"],["/2023/06/13/湖北飞young算号器/index.html","1f61ef3a805da53d6f16c0cd97af1d8e"],["/2023/06/17/windows之重装系统/index.html","8e91a1bb2233c4aa08db046b8eaa8983"],["/2023/06/28/记一次打暑假工的经历/index.html","d81dbe12e050724f6c2f5940db7bf615"],["/2023/07/08/maven的使用/index.html","c138689f102be9836a542382cf66f3b6"],["/2023/07/11/Java-lambda的方法引用/index.html","bd98652f99889f41b9e8a0aa0c650849"],["/2023/09/04/Docker部署/index.html","3e9b0e163e214dbd394f2e70b7468000"],["/2023/09/05/Docker的使用-壹/index.html","ccbb24e3fac601a405e8e548fd1e92d4"],["/2023/09/05/docker的使用-贰/index.html","84e62cec628839f9e19e1ce331299ebd"],["/2023/09/08/Docker的使用-叁/index.html","3b4a3aa6ecf961cc2fe49cf9850123d8"],["/2023/09/08/可道云桌面搭建笔记/index.html","2ef278b041be1e2104c2953ecd6e1052"],["/2023/09/09/Win至Linux的免密登录/index.html","5610908eca519534b7a025b49d536999"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","971f85ea856116b09f86edc1f34f61f5"],["/2023/09/12/Docker之nginx的负载均衡/index.html","a9375050f5b4bb671e2ab89abeb9d07e"],["/2023/09/12/harbor本地仓库搭建/index.html","221690ad6ed1c4ddcbbea19ddef23639"],["/2023/09/15/Linux2023-9-15作业/index.html","3bf81ccfa2fa22a8eca8ae3b794f1d8b"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","20063f888f9b25d4fcb4d8d1ff504bc2"],["/2023/09/18/Linux2023-9-18作业/index.html","e6f8ded7fe0e0cffddf96a5f9be22630"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","15638e208da1bb148789bad20180001b"],["/2023/10/26/Git同时部署多个仓库/index.html","ef45224c48fd8d970611784bdc738de2"],["/2023/10/26/Git的使用/index.html","a2e6d2bb558a60c721f5e0b0138138b8"],["/2023/11/07/Typora的破解/index.html","5cad451fb4bcd15299ebe4106c4208b5"],["/2023/11/09/Xmind破解/index.html","1ef7fb33d7d1ec8d074f360eedd60059"],["/2023/11/22/JavaScript笔记/index.html","100cab5a9ff368320c10705aeac08b45"],["/2023/11/27/shell脚本笔记-2/index.html","54733b4d08d28fdb6fcafacdd051b6fa"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","ea4db6c075a445c4736a0142c8df8e90"],["/2023/11/29/windows重装系统重制版/index.html","f16c1ba618f6650ce145777735c7c577"],["/2023/12/15/shell脚本笔记-1/index.html","cc54df870b1d8df7160ddd7a9c532937"],["/2023/12/16/shell脚本笔记-3/index.html","70186b61de920ff94a403339f549a172"],["/2024/02/09/2023年度总结/index.html","b053f6803893d34195d0bcce58ff1a7f"],["/2024/03/05/Selenium-的使用/index.html","1fcd8af767bb199cca075fc601fd0f7e"],["/2024/03/11/JUnit/index.html","556978785d0a37b2fa95efc32d24213b"],["/2024/04/03/JSON/index.html","80328e984cf028a41ddaef9fc2e5736b"],["/2024/04/16/JavaWeb/index.html","5ce8deab54f0c8ab4840a9cdd81a8e22"],["/2024/04/16/SpringBoot基础/index.html","0f3913c950dddd2507d47403e2e1ca58"],["/2024/04/16/SpringMVC/index.html","5131f3dcaac0d55d57531c9bc504b19d"],["/2024/04/16/Spring基础/index.html","0f90454a773d2399d2c6c093ed1d6fed"],["/2024/04/16/spring开发注解集合/index.html","e4bcf33d86e2637c86546369b505adbd"],["/2024/04/22/Spring-ResponseEntity/index.html","a8847cfe200d5f2e64bc375879519483"],["/2024/04/22/springboot多模块开发/index.html","00f90f3bb3d66f82102755027832579e"],["/404.html","e62430ca2bffd4ac9b0daf2fb2ba4f01"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","8787c19fc8478fe47b3ab2d16a2635f2"],["/about/site.html","d89493e5ee3c2a48e9c0793f57d5430f"],["/albums/Test.html","33ba0a12acd8d4ce9b5a3d775d11616c"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","4e13894ba5a2bb028b32e993def19e94"],["/albums/sunset.html","ddcd016dcd31673a635628053ad68e11"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","50d356600d8504619005de3b35d51449"],["/albums/日常.html","1fa47987c046cd11c913d99e533a32fb"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","71be95b68f897892b831217da5da45d1"],["/archives/2023/05/index.html","480b78b53b2001119e966be5a3814906"],["/archives/2023/06/index.html","3e072dcae5757d39af7ef25c28f704ea"],["/archives/2023/07/index.html","cf9b709823968c56e3d875657408713a"],["/archives/2023/09/index.html","df2c9686dd85b69f071b534651f97530"],["/archives/2023/09/page/2/index.html","aa275c6b75b4b37cb6442e823f8a6811"],["/archives/2023/10/index.html","715bea8900cf6333a4cbe29ee75f266a"],["/archives/2023/11/index.html","7f9a108356a3a3c55aa1ca8ef64f80d5"],["/archives/2023/12/index.html","f3b6260f2b3ef0499a2574db12a858fb"],["/archives/2023/index.html","ce0480295109902274a99a455aa0a019"],["/archives/2023/page/2/index.html","0b4a49d9388f7fede396965520d5a326"],["/archives/2023/page/3/index.html","8b55923b88dfee91543877bc444eedc3"],["/archives/2023/page/4/index.html","8a37684d451a1191e880be8c9f759540"],["/archives/2024/02/index.html","95f6b243ae7d3948be023ae0ece6d790"],["/archives/2024/03/index.html","689855d3dea9d92e216a685360ea6a91"],["/archives/2024/04/index.html","6a662d44189a6bb3d1eefcbaa57c35a7"],["/archives/2024/index.html","44fa84b228da73fb8b160034367f095f"],["/archives/2024/page/2/index.html","e9a24c3d4a12db386038b83d975433cf"],["/archives/index.html","2ff149f81aed5f6815db3b2e914fccbc"],["/archives/page/2/index.html","cf2d7457f970507d8a09d8751be13b25"],["/archives/page/3/index.html","91e686265ff041573d5b24a12b0d3d2c"],["/archives/page/4/index.html","4a7a750308612286107021507a3b4b84"],["/archives/page/5/index.html","72cd02af6c60af03708ae3cca2f0fb16"],["/categories/index.html","f2ac45b38394a73a582d5d59c7912f43"],["/categories/spring系列/index.html","001d7c46d6b3d7148f9aa473792d01a5"],["/categories/前端学习笔记/index.html","aea583166354a4ccd2f69707cbd3bba9"],["/categories/单元测试笔记/index.html","c707fd65920efeb3c6c78e39bb9f03b1"],["/categories/安利/index.html","4e9a6851f3ca5fe0f0b126ed00f6fd39"],["/categories/工具类/index.html","6d677d756b275fc8c7e4968923f96b63"],["/categories/日记/index.html","310a08cf5ff19c6147e353bcf516464e"],["/categories/笔记/index.html","3a67b882c5c09f9ca4660b56ce9813e2"],["/categories/笔记/page/2/index.html","a889c1f096b9579f8ada9e72310ada4a"],["/categories/编程技巧/index.html","17eeb3104ae89661445437429a3f3014"],["/categories/编程技巧/page/2/index.html","640ad6a15b8b5cc8c31450980b392081"],["/categories/自动化测试笔记/index.html","8aba84571145385e30f7b4f7e8d7c77c"],["/categories/计算机知识/index.html","bc5effd1cdaf620addc115bd8747a27d"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","9f3957daef70f007bc856f34036cbbdb"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","c5016484c7bf6b4009d63ad86e22b543"],["/page/2/index.html","2cc9b42d655c4b0e7a9ba1793e810364"],["/page/3/index.html","cd8043b67d59cd400018a3299c819106"],["/page/4/index.html","43bb274cc2f41425151db192e7bc7baf"],["/page/5/index.html","c5b0dd085c1f31c8491030bdacb40946"],["/sw-register.js","baa9cbcbdb77d4c4bc2b8adda50a038e"],["/tags/2023/index.html","5ee81a50f4ea122b719d619b7937ef6b"],["/tags/Docker/index.html","f4f2be688a6d99fcfa4d3738c6b782a9"],["/tags/Git/index.html","dc8dcac892a792dcd1021f06e48582f7"],["/tags/Grafana/index.html","10e1a651702b9129218378b1519b8802"],["/tags/JSON/index.html","d69b15e64a47cecdfdb10d464ac1d6c7"],["/tags/JavaScript/index.html","54e010adfdd0e5b7c627998f9136e706"],["/tags/Linux/index.html","232b08eb4377118df4bc5593b3f7d0fc"],["/tags/Prometheus/index.html","25c55043d28a8a78d5057f2d2e313a15"],["/tags/ResponseEntity/index.html","41ae4ac275fe29ac313b89027359948d"],["/tags/SSH/index.html","9ba8c45fca3a700f855402c4684cd6d5"],["/tags/Typora/index.html","e9c81d7b880b7f6bbbddf6ee513884e1"],["/tags/cAdvisor/index.html","4068679b940481682a73d58ed1a6297a"],["/tags/frp/index.html","9bb358c464902af923dfe827de987618"],["/tags/harbor/index.html","fcd9e32be01da3f101508c942d83fb0f"],["/tags/hexo/index.html","531ffe7a6054fa43aa707bd44547cbd9"],["/tags/index.html","d4d260be63d11db4ff62962b6fd1aa28"],["/tags/java/index.html","4cc9471acf844c7d88c9b06958fb28e9"],["/tags/java/page/2/index.html","10ea1bba8de8a9536d4db6a77d97d4a0"],["/tags/javafx/index.html","fe029b10e787695434166ee9c194dcf0"],["/tags/java线程/index.html","a9ad9b3ab8bee2b66fd68ae2b9589822"],["/tags/junit/index.html","c77f590589338a4cfc4ec8edfd5221f7"],["/tags/lambda表达式/index.html","b1d1e68f07bccbb58225a32a7b79f739"],["/tags/markdown/index.html","f27242c61f698bc69c09659b8fbbb26c"],["/tags/maven/index.html","99555036caadf2bea4ff22d05cbe8020"],["/tags/mermaid/index.html","7fc24be9935d48dbf3b02f12912dd446"],["/tags/python/index.html","28e7ca351a8a64d39f929966afbd9246"],["/tags/selenium/index.html","e91fe2f55d477f56506c3099bb76f966"],["/tags/servlet/index.html","7c37e6c323410516020372d30f2e2e1f"],["/tags/shell/index.html","bfff0e945769d36fc2e1fcf91c49182b"],["/tags/spring/index.html","7b9c91c215e27557451b7556cde3ba37"],["/tags/springboot/index.html","e229b62c7318845f2e1023601837b0cb"],["/tags/springmvc/index.html","3172387e33c523b0a9a2bd48b66eed73"],["/tags/spring注解/index.html","2eac1c01c0ef2db1fd3fe0a0441b04cc"],["/tags/xmind/index.html","c89f9547b9f8ad7bcb5e0a5084c2f833"],["/tags/分享/index.html","bbd389bf45d19d1eb314f240e88bbb10"],["/tags/原创/index.html","0ae0c43d06acc48d71bcc9b74d6197e8"],["/tags/原创/page/2/index.html","00e5e49b73875c21a6620fa4fc8227fb"],["/tags/原创/page/3/index.html","974f20bd28e6d67feddd01e46ff32ae2"],["/tags/原创/page/4/index.html","157e50e1d3fdb5decd71353816cc3113"],["/tags/原创/page/5/index.html","c0d0b9a6c953a63f3c4c44f0834a3392"],["/tags/可道云/index.html","b0b619a41fc6321ab02cb2b99629815d"],["/tags/年度总结/index.html","fc3a8f65aeedc67cc465258c68eedeea"],["/tags/思维导图/index.html","802f7b3b57fd0d3a9e5038612900cb84"],["/tags/暑假工/index.html","d0e57957692bec4664a969d074973d0d"],["/tags/电脑技术/index.html","70725effd78b9236354f2f1d50f73d8f"],["/tags/破解/index.html","5d122918b84564452262cb2f1206528a"],["/tags/计算机/index.html","bcde8376290c3fe57fce548fd41498a6"],["/tags/记录/index.html","1dd94eda4dddda3697ed968139f165b6"],["/tags/集合/index.html","86806a45a01534bc0d89ddf7dc9f2318"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
