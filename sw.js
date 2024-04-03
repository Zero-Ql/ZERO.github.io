/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","82ff5f143e9836d60f05a5a01c2464ca"],["/2023/04/28/Java/index.html","6f19d6f415e4ce77695d000188eb91a2"],["/2023/04/29/Mermaid画图测试/index.html","633b279f0ad717cb72ce6319a46b0236"],["/2023/04/30/hexo的部署及SSL应用/index.html","ca570019dd0d7c4ea46cca6fcd162d24"],["/2023/05/02/javafx使用maven打包及运行/index.html","5f75133a07dfb5aeeb5be8b25bc493c5"],["/2023/05/02/安利几个好用的网站/index.html","e32e44f9d36bac5687dcdaa4745bf936"],["/2023/05/02/运算符级别比较/index.html","740b2003c7b883d631d5ad25b08688e7"],["/2023/05/02/集合-Map/index.html","7eb448f8b757859746218dcb95392e04"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","548df40f0c6e9df675654c81e6af351b"],["/2023/05/08/frp之内网穿透/index.html","0bdea2e5f39a2c2da9bafcc1f8fc9bf1"],["/2023/05/14/集合类的继承及实现概览/index.html","173960bf9faa9646f848736a5a5c131a"],["/2023/06/13/湖北飞young算号器/index.html","39eb8f49234350c6535b98b5cb2fa7b1"],["/2023/06/17/windows之重装系统/index.html","4ffcf460fd508f79f6c3c86238526ddb"],["/2023/06/28/记一次打暑假工的经历/index.html","c0b52199b9fb3fc4002180c0b8da0bda"],["/2023/07/08/maven的使用/index.html","cefc2fa11311a218071733fb89fe2b8a"],["/2023/07/11/Java-lambda的方法引用/index.html","0b313577d92133278ab91a660ea9ffcb"],["/2023/09/04/Docker部署/index.html","ae4787413ed19ff207c9fc728b986661"],["/2023/09/05/Docker的使用-壹/index.html","8a6d6f0a9f191523166cb6c691f1183c"],["/2023/09/05/docker的使用-贰/index.html","934dde244b9edb253e66189b0b8a9fcd"],["/2023/09/08/Docker的使用-叁/index.html","3b216da966f509cdca575cfe1ce07358"],["/2023/09/08/可道云桌面搭建笔记/index.html","66264f125ec2b123c5253c5eb1015fcd"],["/2023/09/09/Win至Linux的免密登录/index.html","15568898abd0f6bef7089090235495ab"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","1be56b1f12e4227b17ae8081c1b14f1c"],["/2023/09/12/Docker之nginx的负载均衡/index.html","60ebe6c0279418120b6d1f77bd2f375c"],["/2023/09/12/harbor本地仓库搭建/index.html","34b0dd6b0c8221c2186b96e4f094dd45"],["/2023/09/15/Linux2023-9-15作业/index.html","d885e49c5000f057ff802133b97b5938"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","cadf5837492bcfdfe4f58b3835c8e14f"],["/2023/09/18/Linux2023-9-18作业/index.html","2362f23f78fad94dda66545ce8d52ec2"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","98b0f60a2c9ba9e0f70662f94e5c3514"],["/2023/10/26/Git同时部署多个仓库/index.html","84df648a74d3dbd8cbcacd3b9522ea11"],["/2023/10/26/Git的使用/index.html","cdd859a068e825529f784fe282ae519a"],["/2023/11/07/Typora的破解/index.html","f119bfcf4619cc2d626d155b1a2efca0"],["/2023/11/09/Xmind破解/index.html","a68d8aff2accb24de8d3e78bcf0d64bd"],["/2023/11/22/JavaScript笔记/index.html","87806cfb8ab13726637cfbd46a212ebd"],["/2023/11/27/shell脚本笔记-2/index.html","e3eb97606b501a0e9abab42476ff8c16"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","c645a80171189ab1e4a793fc2c4f80e7"],["/2023/11/29/windows重装系统重制版/index.html","881faeb765d188323a2a0505207f2b7a"],["/2023/12/15/shell脚本笔记-1/index.html","38f90c1396a4eb72a3df7fe750d956d6"],["/2023/12/16/shell脚本笔记-3/index.html","8f75e8c304ddb3af3979044c9a55e0fd"],["/2024/02/09/2023年度总结/index.html","a54bec00d73e8b4f6518eeec9901f9f5"],["/2024/03/05/Selenium-的使用/index.html","1d94461bc39b92e31876e58784433f13"],["/2024/03/11/JUnit/index.html","451d8b8f178ffb5ec9de81b1543be18f"],["/2024/04/03/JSON/index.html","0d7613d4fce2939b0e73bdf2a75bf411"],["/404.html","467869b0a3f03c16f3799363efaf25a6"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","e8082a9f803d75fce52a69cf2eed77db"],["/about/site.html","af4e0000c25d88890d1c14c7a159ff08"],["/albums/Test.html","d6b824c9390d18911ecd7a1e7a944ed6"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","abc34cd07729140814c6883d7394a4b6"],["/albums/sunset.html","cd8b0b60d35256113e262b63a77e2b0d"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","49e7444f5575d084271557ce84c74577"],["/albums/日常.html","50bab4388ef323a36499e1402e0408f0"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","e03e1a2b0c5c79d5c2cb1c113c276f88"],["/archives/2023/05/index.html","b9ae11a17047312f307fdfb9323b3aa1"],["/archives/2023/06/index.html","fe7f1211f16f8e2dee2323d897597fda"],["/archives/2023/07/index.html","22c9be5f1dbb2e216791d758ee73eb6a"],["/archives/2023/09/index.html","3ad535e31914b57e25e1596adcf6e7d0"],["/archives/2023/09/page/2/index.html","e027ebf151901f7a5b2bd4db328c2115"],["/archives/2023/10/index.html","0a5a794b4553f28606c22f008af8afad"],["/archives/2023/11/index.html","4c24b1c96f8a856bb760a7a7c5ebdaf4"],["/archives/2023/12/index.html","00968af943a057b8e5ce2b4b2ddbad49"],["/archives/2023/index.html","4c1dd0ac259dde10381f8a0908758d41"],["/archives/2023/page/2/index.html","87ed43585ddefa84236dd1455db41c90"],["/archives/2023/page/3/index.html","d136f65a33f288f7fb2a66389b15357d"],["/archives/2023/page/4/index.html","e1ec57fd9db49868cccd99db109a3bf9"],["/archives/2024/02/index.html","06e6ae5b88a22a7dc0ea7ab875b14c86"],["/archives/2024/03/index.html","ac854e486ab8e281728c52ee7f555c7e"],["/archives/2024/04/index.html","cc82791a1a0c6702e43a06477a404387"],["/archives/2024/index.html","854559e02e4dd516ca293ce4227c4755"],["/archives/index.html","2d9bbe5b51fe8446f70ca48bfc99acc4"],["/archives/page/2/index.html","9652c78d2cb79f03bd4dc9ce922543b2"],["/archives/page/3/index.html","b4739f0c7531b5b14872d80b705e4f4d"],["/archives/page/4/index.html","549fb65bfc4544a67c20a6145693c2bc"],["/archives/page/5/index.html","2a94b8f808f8094d99f7399dee077991"],["/categories/index.html","996a50257af120e459d8f4030e8e6289"],["/categories/前端学习笔记/index.html","acec7705cda678c5574f6af77117ffea"],["/categories/单元测试笔记/index.html","b6e5349d0ae5b2927e8b0eb901e8ae7e"],["/categories/安利/index.html","a88cd815b33071b314416551fb04ae02"],["/categories/日记/index.html","89d16e677e8fe3920f3ff57e13bf8dce"],["/categories/笔记/index.html","bd922ae64b95567b352b64b18ed3dd83"],["/categories/笔记/page/2/index.html","81f0534377f9592b6532ca23fe6264d7"],["/categories/编程技巧/index.html","7feeb7150d9e890034f1839e29a5357a"],["/categories/编程技巧/page/2/index.html","72a66a03c39cf01c019988d864afa44d"],["/categories/自动化测试笔记/index.html","3fd4e2bba53d53b9d8863775981cfdf4"],["/categories/计算机知识/index.html","45744ef23733f5ff4c9ef44f1f43bf0f"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","be9a202b1b0fc5f3c41d85718634928b"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","d0488100a11b561c4a0508ace4f02eaf"],["/page/2/index.html","9f5de1d2d6151b6ff9fb392c93f8fe79"],["/page/3/index.html","ee7c5d56c4641891345e97b6412baa0c"],["/page/4/index.html","ecdf1604a5fa135f2d2da80744658981"],["/page/5/index.html","2539b8df9cbf3f0df4e5670585ec79ff"],["/sw-register.js","bab33259fd70a160b9e2fb361f27f04e"],["/tags/2023/index.html","fc100f0eb08dee55bb2bbef6e8d4e2ad"],["/tags/Docker/index.html","b8fef41c41212995c40a2aa1a237b599"],["/tags/Git/index.html","88929b83f21c95756e32e863b135a09a"],["/tags/Grafana/index.html","9d4e5d3ac20dcb267a25191baff94416"],["/tags/JSON/index.html","7bd1b71bf7aea3cbe3cd60f796ac3481"],["/tags/JavaScript/index.html","bd123005242408b8c33b2a34ab1813ce"],["/tags/Linux/index.html","11ce4dd3ce4e7d0065a997ae138c7436"],["/tags/Prometheus/index.html","0112e2e23f50b4ad6825ad85e8bc24e3"],["/tags/SSH/index.html","fbb066a2a472ce1f4d3670f457091b65"],["/tags/Typora/index.html","b622dc059607472cdc2d11d471b5aeb1"],["/tags/cAdvisor/index.html","c51dd53b1cccf5983264701460b2b8de"],["/tags/frp/index.html","ed820b9eb138e40dda6ceebe13e7c310"],["/tags/harbor/index.html","ee015a4270716f2fd0728d083ce70584"],["/tags/hexo/index.html","d1eadbd68bcb098fcf4574e0c7eddc16"],["/tags/index.html","8af70c2c9a76bf5bc32f11dabd8932a2"],["/tags/java/index.html","d4a0a8843d5d701a278d9874c138feca"],["/tags/javafx/index.html","7ed4f50f0c066aa4ad5a3c74304e3f35"],["/tags/java线程/index.html","a34fdbd6ea3096dbe11b4c73bfdf218e"],["/tags/junit/index.html","d43787be75be0455b36e9c88f607b382"],["/tags/lambda表达式/index.html","e245e9925e0b9cf9c527c4513636795b"],["/tags/markdown/index.html","3199fe90f7a55c46bec70c3a2a703135"],["/tags/maven/index.html","c5e9590f91d5481906ecc5222ac34cb7"],["/tags/mermaid/index.html","63a9e74eb679cdb60dce369014f1b2c8"],["/tags/python/index.html","505110accf3fea3edf3eabf112254588"],["/tags/selenium/index.html","ed9fca189c650b6f2c2288f6aedccea3"],["/tags/shell/index.html","9d2aaf34ea68247d3c556e5f9cc152f2"],["/tags/xmind/index.html","76c294b23a34d5db5cae4c293bcef029"],["/tags/分享/index.html","beb21065f1c9275233abd5650b761f9a"],["/tags/原创/index.html","d72c037f1eda469fdb674640dec17912"],["/tags/原创/page/2/index.html","ea80ecfeb20dcd9f93f929c528d54c5d"],["/tags/原创/page/3/index.html","38e7c3177b70f8c7bc776ea8ec8a7b3e"],["/tags/原创/page/4/index.html","83834e4fd4b6419b8f461b585c88e2a3"],["/tags/可道云/index.html","e3a7901c1f9eb91c8914bc97aa138ed0"],["/tags/年度总结/index.html","8b6d288e9cbfffc14c27e30f6a1074d5"],["/tags/思维导图/index.html","a6413a74557855f46a8d28674268af4b"],["/tags/暑假工/index.html","fd0cb54d797610c050a2ef9537fbd4d1"],["/tags/电脑技术/index.html","803f8757ff24aeb013dab503c30297bc"],["/tags/破解/index.html","c240a84a7873aa396a339e86e957bbd3"],["/tags/计算机/index.html","6884ffda9020dd1873ece5e3b3e05d5d"],["/tags/记录/index.html","0387fd28d39f3548efbcfc4a0ebb41ea"],["/tags/集合/index.html","87c28363421d2b931e54aa44edc08008"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
