/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","de34401741768a8d70ccb02bc3782ccd"],["/2023/04/28/Java/index.html","1a3f0b35ef1b36ece51b22a9f5e448b6"],["/2023/04/29/Mermaid画图测试/index.html","8b7d4fa89ac6a8ef59e27299f68b727c"],["/2023/04/30/hexo的部署及SSL应用/index.html","5a5f003d968b3656d82ce432cb7cd7f2"],["/2023/05/02/javafx使用maven打包及运行/index.html","ce1e362075d461427e37269a392eda2a"],["/2023/05/02/安利几个好用的网站/index.html","8711078090b8d7fa43683fdf2e75760b"],["/2023/05/02/运算符级别比较/index.html","6f7b5a5983fe5b2be9abe74ea865db6f"],["/2023/05/02/集合-Map/index.html","2b6dde3906d4e6e9fabeba7d3ada0764"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","0273e0afbceb216303dd750c4860d288"],["/2023/05/08/frp之内网穿透/index.html","59fd2e8637c42afb3bf7e61c12974c4e"],["/2023/05/14/集合类的继承及实现概览/index.html","229b703af0ffca2d482eceae18b3fc82"],["/2023/06/13/湖北飞young算号器/index.html","3311721b011baa52e44f54b5fd046796"],["/2023/06/17/windows之重装系统/index.html","547a0932d889f6868800c1425185ecb4"],["/2023/06/28/记一次打暑假工的经历/index.html","800cfc31b605a0dc5044ad67b829676f"],["/2023/07/08/maven的使用/index.html","c3b02d46387c67efdf1fe4eef4ee6b4d"],["/2023/07/11/Java-lambda的方法引用/index.html","56180dfafb5482961aa76dfab665a402"],["/2023/09/04/Docker部署/index.html","0e2c9ff9d1b6924607c7ff22e67586cb"],["/2023/09/05/Docker的使用-壹/index.html","412d9209ac9d4fe17937366102651f78"],["/2023/09/05/docker的使用-贰/index.html","fdbd7d4d11b0f21de09fb43ca398e895"],["/2023/09/08/Docker的使用-叁/index.html","d864fa1277994771e7a215f396e6bb14"],["/2023/09/08/可道云桌面搭建笔记/index.html","6c9530b64eeb9903382c86088dcc952a"],["/2023/09/09/Win至Linux的免密登录/index.html","d968f6d8654797885884fc2dcb806b02"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","ef3c5e7dcc1edc3c81783f7355688289"],["/2023/09/12/Docker之nginx的负载均衡/index.html","00e22f7a096cca2320fe67b504c8dbce"],["/2023/09/12/harbor本地仓库搭建/index.html","1a1bf140a47bf0cdfbbe94f5f5e1ff50"],["/2023/09/15/Linux2023-9-15作业/index.html","66cf1d815c408cb945219b780ae3fca5"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","31c69d6897851ea7d2620fd1b2d83d72"],["/2023/09/18/Linux2023-9-18作业/index.html","858dee400e92bdc8c2071b9ba2d7e816"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","6315f2972081e743c59b1f8ebf53a4c9"],["/2023/10/26/Git同时部署多个仓库/index.html","17a7288904d0812dc6dab08cf8a84fa1"],["/2023/10/26/Git的使用/index.html","d6ff023337b19f01563e80c148337b20"],["/2023/11/07/Typora的破解/index.html","6f9980013c36790121ccdf22759fd0aa"],["/2023/11/09/Xmind破解/index.html","abbf5cb48d983b922665f71ddd344229"],["/2023/11/22/JavaScript笔记/index.html","848a7e490ea0435c60443b5ddc328d75"],["/2023/11/27/shell脚本笔记-2/index.html","8277e9daa31dfb79a11beee85760889f"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","36b2871a15afe5ec8130e7447590c924"],["/2023/11/29/windows重装系统重制版/index.html","27c9dcd041036e259cc4e57f8a074b78"],["/2023/12/15/shell脚本笔记-1/index.html","88f18771601837f6844bd2f76dd28e41"],["/2023/12/16/shell脚本笔记-3/index.html","5817ec3d13f1d980c2c2dd54ac3236c5"],["/2024/02/09/2023年度总结/index.html","f1f414d22b50b530679b69f56e83c796"],["/2024/03/05/Selenium-的使用/index.html","0160e2b9358a73065a7a8adb1da28854"],["/2024/03/11/JUnit/index.html","d6cb049c87ac84e8a522372c80e98fd3"],["/2024/04/03/JSON/index.html","df5cc4bab3fe0c7fc62628ae0423a0d1"],["/2024/04/16/JavaWeb/index.html","2246ca70755fcf3b6e320867f9d8b7e5"],["/2024/04/16/SpringBoot基础/index.html","c53edfa068f0ca41c6d628cb7f6c87d4"],["/2024/04/16/SpringMVC/index.html","635cac621ad0d502895ee81c0b67852c"],["/2024/04/16/Spring基础/index.html","4f47124ee10c1756dd0b5b8414ae7ac9"],["/2024/04/16/spring开发注解集合/index.html","c8aa901f5591384f6253584a7b128a38"],["/2024/04/22/Spring-ResponseEntity/index.html","804f0f74ce8205549f71820d1987db2d"],["/2024/04/22/springboot多模块开发/index.html","9e62820c9ae1e16a935e88cf8458bcdc"],["/2024/04/23/springboot全局异常处理/index.html","65c99fe6eb4c7da13881ba3d860dd71b"],["/404.html","aaaaac19a8ac804084cf65e149ddbf7f"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","c9b4dcb4056264fcbde1e078e15c9131"],["/about/site.html","655a2a533251763db39754a7badb9595"],["/albums/Test.html","26c457cef6a2f1813e6f8e9370345028"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","f88da1cb0a6056277ae7be4af30ccdb3"],["/albums/sunset.html","69f10f40e34d4465f81005a961b69bdb"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","977125b56f1eb00ec4e322563362d00c"],["/albums/日常.html","8b7378feb62e9cf352346ebf004cf5b6"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","89696f6b597f4bdfec4262c99924a33a"],["/archives/2023/05/index.html","d779e38837e58531fd532017c4103f2c"],["/archives/2023/06/index.html","dfecc9187a3be574615c3097bb1a7d2e"],["/archives/2023/07/index.html","2deee90cdbe642004cb4af24aad2dc7a"],["/archives/2023/09/index.html","feb0376541929590f48a0f70ed4e8465"],["/archives/2023/09/page/2/index.html","c5848c0ed16fbf3d725ddcbf5691d8ea"],["/archives/2023/10/index.html","137aa4d70ccc1608293d7b76fc6f9f5d"],["/archives/2023/11/index.html","de59ed09732bedb4fcd15b8605f9b0f9"],["/archives/2023/12/index.html","9e62f98a6edf2f0c194e225066390619"],["/archives/2023/index.html","784b77b393cc83df0cde0a5c167c5243"],["/archives/2023/page/2/index.html","30ec48ae9736ceb24ed42c5725387787"],["/archives/2023/page/3/index.html","c0c741ef192bfe0d962263323ae581b8"],["/archives/2023/page/4/index.html","883adfa1702389b5b98f7872050aab74"],["/archives/2024/02/index.html","b02082ec9ff3b9aecadf62996b0bfa70"],["/archives/2024/03/index.html","3531e07ca00760c7e694bca866790e88"],["/archives/2024/04/index.html","30b1697e5bbaa42fc644d1b488e4a59a"],["/archives/2024/index.html","47fadd3115a2a01d86afc2b03e434ee1"],["/archives/2024/page/2/index.html","d048d5f80cf090e3e9ea02144d75dec1"],["/archives/index.html","f64576b5ad0eda361b8b69bad8f49ab1"],["/archives/page/2/index.html","49b2d7acbaf2f10da99fae84b0ec7dab"],["/archives/page/3/index.html","5f0e834a6d92a891d460032478067102"],["/archives/page/4/index.html","742d61b2926d0e41c1b68667cb24f23b"],["/archives/page/5/index.html","4962c4540feac6a4c0d314f2e1a03fff"],["/archives/page/6/index.html","7ff8c406e5a34408507fe1f3a9e46478"],["/categories/index.html","f513efe0b1f4a998c7257c9f04dfc5d9"],["/categories/spring系列/index.html","5a1a48085d656d414f0b78368da47b05"],["/categories/前端学习笔记/index.html","86029443dc1f106030ce0eafd4b765b6"],["/categories/单元测试笔记/index.html","44ad98e8509e7f70c92cd8e4adfaf433"],["/categories/安利/index.html","65710cb1d3dc02c94a1349176cbbe3f6"],["/categories/工具类/index.html","dc3618b6c7c176b1e4c6e1216c144669"],["/categories/日记/index.html","1264530e355b29908d86045d548e925c"],["/categories/笔记/index.html","e6599a6e34dadd792d640bf477d30f11"],["/categories/笔记/page/2/index.html","02f85f839e2b956ea4aacb7cec316500"],["/categories/编程技巧/index.html","bcc5dfca7938bd45a36b5d3b89a04993"],["/categories/编程技巧/page/2/index.html","9d19926c3b8aa4e7b463f5b3663b9018"],["/categories/自动化测试笔记/index.html","ba07e26b1fe0e8104d92fc2d56ec115c"],["/categories/计算机知识/index.html","1941fc468caeb86598a662ad3bb6ba54"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","25807571a0de154980e179d763d9301e"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","5b73d6019166f838a2d9b383ccf93efd"],["/page/2/index.html","2224db992d376bcdea498ea7e6b1109c"],["/page/3/index.html","21550a326b372a69a8a60999986ea962"],["/page/4/index.html","e56335ba85abf7582b285718fef9131c"],["/page/5/index.html","2dae84d01d2ca3a600b890ee0d8a3b66"],["/page/6/index.html","f466ef9e4f12cea5460c33497252e28f"],["/sw-register.js","6d7f63178a91958445a4a47571f69f4f"],["/tags/2023/index.html","c9b0c0350e83cd1d1ff7916d9c3124ba"],["/tags/Docker/index.html","52e7c38e6e961e608d57f5f0a5c4bb53"],["/tags/Git/index.html","b00aaab42845193c6e77458bb48a0d32"],["/tags/Grafana/index.html","d3b5e062d46368b16ed0d27c558bfb75"],["/tags/JSON/index.html","04d9fe35e2e359f148529dcd88c5b581"],["/tags/Java/index.html","6a91af75c9d9deaaf8cdeceb29778ad1"],["/tags/Java/page/2/index.html","1454198865b112f47d83c523e587dfbf"],["/tags/JavaScript/index.html","4366394f955a8d34de8346837db3dd2b"],["/tags/Linux/index.html","91918d29fbc331998afccbad7de4efc6"],["/tags/Prometheus/index.html","d7fbcb2731034b8a4e3354dadd33114a"],["/tags/ResponseEntity/index.html","325d2138a1cd81105af778ef61ae14fa"],["/tags/SSH/index.html","cfddfdbf5449ee2cc68050ef12fcc68b"],["/tags/Typora/index.html","ebf5a3d14f810810c2b2c59f4339680d"],["/tags/cAdvisor/index.html","e1a9f50ac7f8a50089c25ee60dc945d7"],["/tags/frp/index.html","60abe7338f2f78ef85b896b270332dd4"],["/tags/harbor/index.html","4891b29da846df5f48b8127bad1b1349"],["/tags/hexo/index.html","e0b041ea0bc5d4896d43109c78fe15a8"],["/tags/index.html","af361d7b929db16a40dfbf37b4752b49"],["/tags/javafx/index.html","c8bbdbbb783b27237d536bbe02a72e0b"],["/tags/java线程/index.html","ff5184571912cb526babf62c8906339b"],["/tags/junit/index.html","53a5d4ebb11052cea8258a0d74d4625f"],["/tags/lambda表达式/index.html","4c639096accd245b2576270da7fd859c"],["/tags/markdown/index.html","a43067cbf7a688ebf5ca485ca145c7d3"],["/tags/maven/index.html","0aadf1277f8628527b988eb191d6c528"],["/tags/mermaid/index.html","da3f11cff5ac5c0f29fdcc2120d0edb3"],["/tags/python/index.html","21f9fbbc4afc1e46167e4c5f4a11ed6c"],["/tags/selenium/index.html","4f94cc0b65da6a9bc410e4ed9fc01ed3"],["/tags/servlet/index.html","0c5a1dfbdb67d48d022a3a935932c2cf"],["/tags/shell/index.html","b68745acb1f1f290129ce4616852b7b8"],["/tags/spring/index.html","397d6d81cdf9e5d4051da18a92719385"],["/tags/springboot/index.html","eeb77e8e02665270e0fbf73c4703b732"],["/tags/springmvc/index.html","0771b81f7e3e75d9bf917e32c1f44df3"],["/tags/spring注解/index.html","e95ce0ea34936a2d449f8137eda8ae13"],["/tags/xmind/index.html","508b185726945bc8c0748d6b064a623d"],["/tags/分享/index.html","634deaa0e6a68fa9c88c9baf1a416f05"],["/tags/原创/index.html","3477e09daf6e1237a21cc22a3b0be68d"],["/tags/原创/page/2/index.html","fe4dd1cc83f73715da13515dd23c3d43"],["/tags/原创/page/3/index.html","77d4dbc7700cfa6c4db50b38c02c4c49"],["/tags/原创/page/4/index.html","2f8a664332cf10895a3ad3bdcc8ba4fc"],["/tags/原创/page/5/index.html","188fc11068fc919179e7a99a73d3c3d7"],["/tags/可道云/index.html","9bf1057fb2fe569d1908b45512ee202d"],["/tags/年度总结/index.html","b710db374a7d9598f8b773437be9c609"],["/tags/思维导图/index.html","ccfe5de30b88ea663883ba7ae1fc4e3c"],["/tags/暑假工/index.html","1db08d741c019836299aa256d042494c"],["/tags/电脑技术/index.html","5f039b8792c83ac0d955a49b5c5c4b4f"],["/tags/破解/index.html","cc219cb9aa1c8396f709f39cada4dcb4"],["/tags/计算机/index.html","a272d38ea37cfe45b9d3406c68b1c509"],["/tags/记录/index.html","bf6306b68feee473d4629b704b502bbb"],["/tags/集合/index.html","294319f715fb5e339ae1acbb7128bb8c"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
