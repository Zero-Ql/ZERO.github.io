/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","f9d82cf2f5dd2e667107e864dc5fa1fe"],["/2023/04/28/Java/index.html","7d61f6bb1f35c5f15a2b503a80ad5920"],["/2023/04/29/Mermaid画图测试/index.html","5f6377fe2fa2456c244d9b1e952e9255"],["/2023/04/30/hexo的部署及SSL应用/index.html","abb0ded8c428702fa071b2e433ba569c"],["/2023/05/02/javafx使用maven打包及运行/index.html","214dea8ad361c37a6bb6b1fde2e53087"],["/2023/05/02/安利几个好用的网站/index.html","61c70b5fd836a9ded2dfa6467f571bd4"],["/2023/05/02/运算符级别比较/index.html","05c2c71a53f70de302187f5be69a1c3c"],["/2023/05/02/集合-Map/index.html","578c2ae202f6d2f36341b93f99bb97aa"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","237ae9637e8fc063a0b10a956a3baa30"],["/2023/05/08/frp之内网穿透/index.html","03855b74bcd20e308ecd1a7c805f78b0"],["/2023/05/14/集合类的继承及实现概览/index.html","16b6cc3424e9707455eb3d2fabb86dc6"],["/2023/06/13/湖北飞young算号器/index.html","650cd1ad0285a2aa70defa5a03af7e2c"],["/2023/06/17/windows之重装系统/index.html","270141773e70563f7b2f58665490faac"],["/2023/06/28/记一次打暑假工的经历/index.html","28a1a12ff139a9766781a0fab7d7a9af"],["/2023/07/08/maven的使用/index.html","81848ea06c37ed22b30bb282b4b77c16"],["/2023/07/11/Java-lambda的方法引用/index.html","47d0fccb796f953a00f1bf8672e39be5"],["/2023/09/04/Docker部署/index.html","7a8632d74fb6f30b8bd4a88a9797c8d6"],["/2023/09/05/Docker的使用-壹/index.html","d7cd8ae211587ae7931d1d65987b91ac"],["/2023/09/05/docker的使用-贰/index.html","9bf5005e6b211439f4ff9611d9706b4b"],["/2023/09/08/Docker的使用-叁/index.html","e27c8feaa9448db7d49f35a4904be136"],["/2023/09/08/可道云桌面搭建笔记/index.html","75e34639087e60d21511a3cc73bcdc18"],["/2023/09/09/Win至Linux的免密登录/index.html","22656d00a626b73c841cfa6e20e953a4"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","e52d991cfa44e878e9582970158f8008"],["/2023/09/12/Docker之nginx的负载均衡/index.html","dcc21ae33f4d963d09f62dda07ed0093"],["/2023/09/12/harbor本地仓库搭建/index.html","c98cd1ca4a84e4fc0d470cd087adf52e"],["/2023/09/15/Linux2023-9-15作业/index.html","6ed1d76910367b36779ed5b3e7237866"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","09f1d0ff8998f9869fdbef1e4218e9a5"],["/2023/09/18/Linux2023-9-18作业/index.html","44f16d2d5fc0ca2dfe5166c4b07299f3"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","ff0dc9782896d7291ab1bf459c566c54"],["/2023/10/26/Git同时部署多个仓库/index.html","20317a2850e3a00f535195cb7cbe4247"],["/2023/10/26/Git的使用/index.html","f1fff0e1b5b59e7912a8581574c3581a"],["/2023/11/07/Typora的破解/index.html","ef16124a68858e0986394c00023261ee"],["/2023/11/09/Xmind破解/index.html","f97286d754d7b846cb3d8bcb6e103857"],["/2023/11/22/JavaScript笔记/index.html","f24c46dda0fa9d1fb7ec829c29517c4d"],["/2023/11/27/shell脚本笔记-2/index.html","f7b52ad986cedc613cd241094c6ea774"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","8d858e4c8068019c1a4e2b2e96edab08"],["/2023/11/29/windows重装系统重制版/index.html","dd2ca8a70674b4c65e4202dce4ee4b0e"],["/2023/12/15/shell脚本笔记-1/index.html","2a135560b44f59a0c3a697ffafd41264"],["/2023/12/16/shell脚本笔记-3/index.html","525428c6ebf8dc289729608ffbe8c805"],["/2024/02/09/2023年度总结/index.html","ffd01389b7ed4fd1b1fd480208f1534d"],["/2024/03/05/Selenium-的使用/index.html","726954e9cf0e385026409c26f0777e41"],["/2024/03/11/JUnit/index.html","0c6d8cc387df8a55eec7fb13f015f5f0"],["/404.html","aacb9ea27f573f88a080cf33506ba0f6"],["/about/index.html","3d3409e7ee51ee6b536904083fda9691"],["/about/site.html","3c9300ad76de7fb4e878d2bc48520897"],["/albums/Test.html","f319b4414ef8e2cef2d3a834c958e139"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","85820c407de58aaaafc5d0b501d68983"],["/albums/sunset.html","0ca706ce0ad4481767522cd8145135c5"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","791f668dc37e7ee83ebd384da5122897"],["/albums/日常.html","43cfbe73b6b1d169fb1ca394d3b0bd03"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","f598e7cb6f54d71aa9f2975a5a39dc2b"],["/archives/2023/05/index.html","22cb302838510feb826535df9335fb6a"],["/archives/2023/06/index.html","2ba06e1cf3ef8bd05a82d495be886777"],["/archives/2023/07/index.html","f83619d067e0fc486c0d7a4ff268b493"],["/archives/2023/09/index.html","3bc8102cba2527e0e5b9b8d0d17154a6"],["/archives/2023/09/page/2/index.html","83c979dcdb5020f282d788678ba628d4"],["/archives/2023/10/index.html","5966529d5c3b2258cf83ec95f9af6e4b"],["/archives/2023/11/index.html","ef777dcb147a106d7d0967fe27b42916"],["/archives/2023/12/index.html","8c3db782d8aad0a39ff35622d043eb1f"],["/archives/2023/index.html","ed8e07a7a63387dc849d5a6fd2d5583e"],["/archives/2023/page/2/index.html","5b7e1fb066f2fc453001b8294bf15f63"],["/archives/2023/page/3/index.html","284ceae7561e2bd503e0a0ce59d3334f"],["/archives/2023/page/4/index.html","940f3b725f3bb82b951184341bf1dca2"],["/archives/2024/02/index.html","0991066a0fe2814f8de64433a64c5ed2"],["/archives/2024/03/index.html","34e451cdf61e5599ffb3783f8057aa26"],["/archives/2024/index.html","27d7ed190758603867d29ad132e86c29"],["/archives/index.html","86b728cdc3f81e4f4e9676ba22794f1c"],["/archives/page/2/index.html","934f46780b836d9086d9f4da8fa01ded"],["/archives/page/3/index.html","865449f458a127047c1060a87174e5e3"],["/archives/page/4/index.html","d6c92fe998a3ac66cf71bea34234a74f"],["/archives/page/5/index.html","415a5dc8bfe6108adf1c37f122f10732"],["/categories/index.html","6818ca3b0fc634f5a593b45386761005"],["/categories/前端学习笔记/index.html","054aa2d4453d11c846ea90293b9405ee"],["/categories/单元测试笔记/index.html","a53464e483aef08376f0a7ab8d817667"],["/categories/安利/index.html","c2b3b7c3323af845adf08492af177498"],["/categories/日记/index.html","96a8a6e56701756eabba1ee7f068d36e"],["/categories/笔记/index.html","edfef96ed6827aa4bfc787b9b235ab20"],["/categories/笔记/page/2/index.html","01e8b9bbf7b458c6bb3bb65216df9a98"],["/categories/编程技巧/index.html","b4f38f6945531d538177444d80ce042c"],["/categories/编程技巧/page/2/index.html","b9da5c837a32a55a71c7ed2b1d9ad16d"],["/categories/自动化测试笔记/index.html","d9ba49b4f07f0849e8a744dd3e9f8636"],["/categories/计算机知识/index.html","83ed5701851228e9dde94f94fd5d7e91"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","15deed2421eec6f1b3ef5645744edfe5"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","70bc6c53b8947d9d40d278d2d6ee5b32"],["/page/2/index.html","47d2e2a5306b745e50941304d53642ca"],["/page/3/index.html","df19a722e5e4d10f1f46e593e697744c"],["/page/4/index.html","54cb01c037216e3dafb69eb29a16c086"],["/page/5/index.html","7de6dc219518842dd6584964e9ef2101"],["/sw-register.js","25d85f1e07aeaa94d78e082ea8af1f2a"],["/tags/2023/index.html","fa6cd0bfc5e7920c24b869d612c20f5c"],["/tags/Docker/index.html","de2d856500c7fc55ebc66bca32a0bb70"],["/tags/Git/index.html","915db5cb22c26155cdd391e7c5858689"],["/tags/Grafana/index.html","55539de8c597c5c1713657c46cddb8ab"],["/tags/JavaScript/index.html","e80963e3453cf4fdacf5ed370b23092d"],["/tags/Linux/index.html","6a4f4331952d3a25f2f9304243f4bbad"],["/tags/Prometheus/index.html","a7c5335ef7df2f6ad4c0d92164475227"],["/tags/SSH/index.html","b1d8ce6c75b5cdaf1e978f0bc0259aef"],["/tags/Typora/index.html","b72e9fb0e801b55ae0e9a36f03369a68"],["/tags/cAdvisor/index.html","971f330f8ad031b0e46d8a39bfb24e99"],["/tags/frp/index.html","2caa24b1893ba802011e17fb084d9b99"],["/tags/harbor/index.html","a016765bc8be1b4e8f3a94e6a9b97013"],["/tags/hexo/index.html","aaf93e70ffa6c62ed352de077b88586f"],["/tags/index.html","84084fcbe2409dcef700d767e649fdcd"],["/tags/java/index.html","296d73f3a75c64a622e7f2f8d2ec5114"],["/tags/javafx/index.html","61d431538202624d4ca147ca221510e6"],["/tags/java线程/index.html","9c9ddb7d1ea428d073c23a9719c711fc"],["/tags/junit/index.html","a250544ffa5cb2d4f65dc44e9594006a"],["/tags/lambda表达式/index.html","a1f74e53d549a0df02e0ea613c08662a"],["/tags/markdown/index.html","ef510d48041d531670e17606de74605d"],["/tags/maven/index.html","a6868e8709075361f8aa4fe8545bc41d"],["/tags/mermaid/index.html","d1417376f28a05670cf43289255a0253"],["/tags/python/index.html","a66534949b96dd20469618b905cb2883"],["/tags/selenium/index.html","c9b2e590ae9a8cfedf25fada9459aa17"],["/tags/shell/index.html","278fb89d17c08654857c997365d24f77"],["/tags/xmind/index.html","91aa5f6946c5c0704db7c43cab667e36"],["/tags/分享/index.html","c06b53ab869d5a723c8c7a7e2f454050"],["/tags/原创/index.html","c80793552b4844baa4c0d9e2e60cf895"],["/tags/原创/page/2/index.html","ea727be6ebe02e28c751707d902ca1e2"],["/tags/原创/page/3/index.html","7c7ec5090817996419f8661585266cb1"],["/tags/原创/page/4/index.html","87939a174019a2015c2a2902cf0c7998"],["/tags/可道云/index.html","2fd6de55e93b8e7db3bfea34a5418e53"],["/tags/年度总结/index.html","93969043fd82de750a07e2c6f6f6a6c4"],["/tags/思维导图/index.html","723ecf74df36b9a0b8536d720582532d"],["/tags/暑假工/index.html","5fbf5d11a096632debfb92b07153776f"],["/tags/电脑技术/index.html","f2bd6512317aa15edf6df76a072b585e"],["/tags/破解/index.html","9b935b205edf9eb04dc69025cb54626a"],["/tags/计算机/index.html","c963041a926420cfb54f5340c8c47fe5"],["/tags/记录/index.html","7de9bfb91e330f7bfafe206747e25f82"],["/tags/集合/index.html","8d28f5bd0dccd5c5cf884c3a1432a229"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
