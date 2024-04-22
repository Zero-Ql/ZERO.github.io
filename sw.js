/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","68bd8c2ba3cd722bcf5e7dfe50c11807"],["/2023/04/28/Java/index.html","936b97b47c499a751060cfab021e3a49"],["/2023/04/29/Mermaid画图测试/index.html","c0ee816fea1d03f1339e00c7c2630398"],["/2023/04/30/hexo的部署及SSL应用/index.html","660869b449869a4f45df491e3369ceaf"],["/2023/05/02/javafx使用maven打包及运行/index.html","b18f3ef057e26a6cd78c1d5fcec982c4"],["/2023/05/02/安利几个好用的网站/index.html","2d077ea8f5af0ab9f0d02db20b840352"],["/2023/05/02/运算符级别比较/index.html","ee51fdaa586799589a035e8ec38febcb"],["/2023/05/02/集合-Map/index.html","9e95ad6a3ff2df48c5e85333d079f9d2"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","2e2c2e1ca8d1e93e20d2db9fbe0d5471"],["/2023/05/08/frp之内网穿透/index.html","4e057511af2ba92ac5bb51c9a56f44d6"],["/2023/05/14/集合类的继承及实现概览/index.html","9b9d507aec601753669bb1bce8d9a856"],["/2023/06/13/湖北飞young算号器/index.html","07ee010bdbde9dbefd7a58d005cf686b"],["/2023/06/17/windows之重装系统/index.html","401f8da4494cd5824d3b14715ffa57cd"],["/2023/06/28/记一次打暑假工的经历/index.html","a266265045e5fc0b504ed5ebb278827b"],["/2023/07/08/maven的使用/index.html","ca9a0095e89a92439f26eb835c4a63c4"],["/2023/07/11/Java-lambda的方法引用/index.html","26c8bd02f620afcbc9f33958d25b29f7"],["/2023/09/04/Docker部署/index.html","bae48dbcb258ec6188b7ca23b9c6e03f"],["/2023/09/05/Docker的使用-壹/index.html","143f887a15c862f6bfb06572b94ddf74"],["/2023/09/05/docker的使用-贰/index.html","a80600174fceef059c9c3238c4ba9398"],["/2023/09/08/Docker的使用-叁/index.html","b0f609c403c84294d90a8db746619fab"],["/2023/09/08/可道云桌面搭建笔记/index.html","788fd7a4df77b0097294efae60d8fdfc"],["/2023/09/09/Win至Linux的免密登录/index.html","7e61c81e54154540b0b7fccc1ca365cb"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","c06c027c413f8604c0959a0cf7c9954b"],["/2023/09/12/Docker之nginx的负载均衡/index.html","ab97f15534e2e2d321c13cc285276a20"],["/2023/09/12/harbor本地仓库搭建/index.html","a612f04d652a3463ffdee1d583548a5b"],["/2023/09/15/Linux2023-9-15作业/index.html","0f15b29666368eea317994f0e6c7bfd8"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","8455ba02daf5c17ab31d4e11442ae33c"],["/2023/09/18/Linux2023-9-18作业/index.html","b1d06adeb736215951d2b93852ba6a59"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","30735583489515d55092778501237d35"],["/2023/10/26/Git同时部署多个仓库/index.html","c65d1756226556037c2b1ed4ff52a538"],["/2023/10/26/Git的使用/index.html","77a449b34fe7bb6599db460b06660f14"],["/2023/11/07/Typora的破解/index.html","362ed51c5c0618079fcd171497788b2e"],["/2023/11/09/Xmind破解/index.html","86aa9e7281312c48c44aacc8337767e9"],["/2023/11/22/JavaScript笔记/index.html","aaf866c80289eed35d3853f4f5cb8519"],["/2023/11/27/shell脚本笔记-2/index.html","4f5da1038eb19ca4bc9d2f26ecbf9656"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","2e146d136c67859d5c50241a78498a40"],["/2023/11/29/windows重装系统重制版/index.html","eb369615f225384d0f9a9c9065de25a9"],["/2023/12/15/shell脚本笔记-1/index.html","deadcb686c4dee2957943681df7fc563"],["/2023/12/16/shell脚本笔记-3/index.html","25fd0d2cfa25336b6226888e04662580"],["/2024/02/09/2023年度总结/index.html","5c5d1689fa0ac458229bb92d7d85d690"],["/2024/03/05/Selenium-的使用/index.html","f6816c2e53934396c3b64f71fde379b1"],["/2024/03/11/JUnit/index.html","067ce1a50dc888a1260faff6f016ae14"],["/2024/04/03/JSON/index.html","6502e3d970c792b1412659ea07e13d6f"],["/2024/04/16/JavaWeb/index.html","0954cdec071354e7496cb8afbb3d7d55"],["/2024/04/16/SpringBoot基础/index.html","cdc6a5c5e720ce847ba26043213bb42e"],["/2024/04/16/SpringMVC/index.html","7e8a245d411cb994cb77fd449e1bc91c"],["/2024/04/16/Spring基础/index.html","b86f2f344182fba35fa280248fa1340d"],["/2024/04/16/spring开发注解集合/index.html","3f8654ab8545243cdb4688fa92c16066"],["/2024/04/22/springboot多模块开发/index.html","a4668e390110f2d8fb2e46d89a121161"],["/404.html","cb0a18b34b9515fc82138c0d9d24ee70"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","9238de1ec3853c3276aaf2771de9711e"],["/about/site.html","335d9922a78b99112f7f6ab449b78746"],["/albums/Test.html","d6a4155910cfbf5cf62f1dd2ea34c1fd"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","971f357e286d78c83a9362bca42be280"],["/albums/sunset.html","35a71bd3debe0bb6dc59d5078c047697"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","2e0bf5294754aca7a8acd61f5076a171"],["/albums/日常.html","2f2c8a10c67fe0ba74f3d0bd7df82d36"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","d4de686f0ef3901cc5dd6d08ff9f8629"],["/archives/2023/05/index.html","1b24107ea3e17b89b42aac9822dd0aef"],["/archives/2023/06/index.html","af09080b719cbf1cad0a7e006107f2b4"],["/archives/2023/07/index.html","02e4e1f5fa9f022444b4569f1cbf941f"],["/archives/2023/09/index.html","58ba6238794962c8d0f930c0635fc921"],["/archives/2023/09/page/2/index.html","387679ee4e220958d3455c1f7b2ebe27"],["/archives/2023/10/index.html","4a3e9679b3ec1fb17dd2b910a4281123"],["/archives/2023/11/index.html","7734e8dc28b911ea151f765268305cfd"],["/archives/2023/12/index.html","9086916090e9514a3d302bf463537d2a"],["/archives/2023/index.html","7c270d652a7a65addee39fae78f7f238"],["/archives/2023/page/2/index.html","a6153834fdc61248b61520db11874a07"],["/archives/2023/page/3/index.html","393547f92d179974826636e31daccbf2"],["/archives/2023/page/4/index.html","53727099a8e34d3f8790d54b4cfd8526"],["/archives/2024/02/index.html","2b4e1bfaf5e6466342abf6a7773a362e"],["/archives/2024/03/index.html","ea9df2b65a694c185f58086bb69c3799"],["/archives/2024/04/index.html","c651470db7ec23b4b63e906aaa9fe8d1"],["/archives/2024/index.html","6dda428bce9ebb4fc4c0fa7be41d0f26"],["/archives/index.html","0333e33ab6030f43bd5d5f0ebf3a6657"],["/archives/page/2/index.html","d39337924a21ba64dde68d517256dd36"],["/archives/page/3/index.html","7c90fe70e895a7e05814b40175a43ccb"],["/archives/page/4/index.html","b275a0f8be5b4d0dcd27c0adc95992e3"],["/archives/page/5/index.html","eb17c96f72d57ac5eeeb637343237e1b"],["/categories/index.html","7750c0f98d99d5cfdae07f5f77b41c0c"],["/categories/spring系列/index.html","ec0c89ae26d361aaccf51468072a6f0d"],["/categories/前端学习笔记/index.html","d2ee7e819d138ddbbbd4be8fa7b0e731"],["/categories/单元测试笔记/index.html","72b195ada629cde09c2946b65191d96e"],["/categories/安利/index.html","6dcec54227eed917219e7c5e19f353bb"],["/categories/日记/index.html","d554c35833a4b1ea8835ebcafa651bb5"],["/categories/笔记/index.html","f334edaa0dd24773fe582a99ede75583"],["/categories/笔记/page/2/index.html","1273bd02dbdfca2ecafea467bac995e5"],["/categories/编程技巧/index.html","891b5c75698edc9aadcf296780f549b7"],["/categories/编程技巧/page/2/index.html","c4e730a36483851479df3178aacf06a5"],["/categories/自动化测试笔记/index.html","b6566d0c6bcaea25617afb0b05a51ac0"],["/categories/计算机知识/index.html","c3f4890482c38e87ea8aa6cc6e79b1bc"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","d2379ea778467f771895fff3d2e04dfe"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","19825c1e857593dfed426f17910b82ca"],["/page/2/index.html","1cb30ca8663eda06d3a9286c78e7ce4e"],["/page/3/index.html","48916f4e52537a38dc615dc3727eb408"],["/page/4/index.html","b0238af7d6d7da80ad9d5e06c3ae9f5e"],["/page/5/index.html","137270ebabb75a0bbe0999a5c8b635a3"],["/sw-register.js","eb86b94222056aab9b9a131ee448c464"],["/tags/2023/index.html","fdb71ae808566830de70d35ded5f56e6"],["/tags/Docker/index.html","db870f546504b6144a0a09c555132604"],["/tags/Git/index.html","7128bb74499467775f8f3e1fe0f1e13b"],["/tags/Grafana/index.html","da8f79ad305affc09d4a13d5059ce11a"],["/tags/JSON/index.html","008a3f9375c94d01cf73847573eeb8df"],["/tags/JavaScript/index.html","9171388f965657e2a5906abfdd61278c"],["/tags/Linux/index.html","8c0ca1f7968b20233ed8743265566f15"],["/tags/Prometheus/index.html","44043c382de02b70f5b8c026b8260750"],["/tags/SSH/index.html","4f505b69a69960028433398a277e344d"],["/tags/Typora/index.html","b74499a27b5d7b5a2596625af2144cf3"],["/tags/cAdvisor/index.html","ba94bca8b431c032332f04249d76deeb"],["/tags/frp/index.html","a58e5240bddaf985667d96bc4d16017e"],["/tags/harbor/index.html","4d6dd99bb66f065c25ac7702181f5e68"],["/tags/hexo/index.html","6dd1cfcd037e23222f21e60d9e21cb70"],["/tags/index.html","2a241f8811538ddcb3b79f94810440d6"],["/tags/java/index.html","1fb6df3996910be5d07d4db26753620f"],["/tags/java/page/2/index.html","cfe707666c3b97b9910b4d4665884473"],["/tags/javafx/index.html","8fffd8d5684af61628c4219b65f22cda"],["/tags/java线程/index.html","b8b8f4d4e0ed24f2ea7a329f1ba948c6"],["/tags/junit/index.html","08c7fa11ee14565a4be82d1c7c0c95af"],["/tags/lambda表达式/index.html","bc03c779e44b7ca810909d4dce37fb92"],["/tags/markdown/index.html","8b6a25bc54b3a1589c69f9ccd424e1d0"],["/tags/maven/index.html","7df851b841bbfa887b695994074a3574"],["/tags/mermaid/index.html","ad0406cb235e036fcbdbe099cb734521"],["/tags/python/index.html","39c7c243a8190eaffa886f5ff64d453a"],["/tags/selenium/index.html","9534852402afc7a11c7fd69bdfe8fd63"],["/tags/servlet/index.html","6a0267cb05e1fe96deaa3050ded45b64"],["/tags/shell/index.html","4cdd7a78707588f6c2e67ed017c206c3"],["/tags/springboot/index.html","77178e07fd3e4065ff30f72ff53dd96a"],["/tags/springmvc/index.html","37037436837f7fbda85924b7b73d6dff"],["/tags/spring注解/index.html","908d8674dedf77647b1b51cd0beab426"],["/tags/xmind/index.html","738d3fc721917e56f9915a6451faba92"],["/tags/分享/index.html","9bc168db8e32666ef0196ce8e89e137a"],["/tags/原创/index.html","27aeccc33ed72b14687c2bcbd747a692"],["/tags/原创/page/2/index.html","291f2c91c8561fe2cffd224cf335fef0"],["/tags/原创/page/3/index.html","6d98334aada17e199f0b7fb23621abcc"],["/tags/原创/page/4/index.html","01916c6df52513ce430b71e296bbb9d6"],["/tags/原创/page/5/index.html","86dd0f6a46cf4790501019fbcf1f5323"],["/tags/可道云/index.html","8d902a9f64fb6e566dbf9646db4d0e5c"],["/tags/年度总结/index.html","c122b2e9299aa238e4734355caf6721a"],["/tags/思维导图/index.html","0d9a92873c50f3e87d27e99e06ef8b1d"],["/tags/暑假工/index.html","743542810dbdca3b6a944c46b1616956"],["/tags/电脑技术/index.html","c2274ec76e57a9cfe725503fe4b3c5f1"],["/tags/破解/index.html","4a29d711ef1f3710f206d22e6ce615e1"],["/tags/计算机/index.html","aa270440e4035c783e3357794ed2c88a"],["/tags/记录/index.html","38eaae953269fe086cf46889cb002c90"],["/tags/集合/index.html","00ee7f4df6c8588f781667c52598023e"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
