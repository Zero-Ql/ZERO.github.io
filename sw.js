/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","f7acc6634c8c84e52ed44403dc15bd35"],["/2023/04/28/Java/index.html","1099aef011048faecc747be3eee8a16a"],["/2023/04/29/Mermaid画图测试/index.html","3797c490a86c9fea1dda20e682ee8bdf"],["/2023/04/30/hexo的部署及SSL应用/index.html","a3d8a9cbcb1bab2078c82b3480c8b903"],["/2023/05/02/javafx使用maven打包及运行/index.html","63d70d1019a70cd97a97205ae76d80fb"],["/2023/05/02/安利几个好用的网站/index.html","68c56fcc52b30f879109495d5213b2ea"],["/2023/05/02/运算符级别比较/index.html","071f0682eb42873ac3261e334497bab0"],["/2023/05/02/集合-Map/index.html","148787dd47fe470052e05bfb6fe85c10"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","26aa3bce6a4f370a444516125f75946d"],["/2023/05/08/frp之内网穿透/index.html","faf7c50859edb688d62b65e4861ebd91"],["/2023/05/14/集合类的继承及实现概览/index.html","d7186d09a7fe2a5960fe7727120ecad8"],["/2023/06/13/湖北飞young算号器/index.html","6d8aa314045e37715ca3c8801859e739"],["/2023/06/17/windows之重装系统/index.html","698e67e73302f97383bb729520841948"],["/2023/06/28/记一次打暑假工的经历/index.html","d834e6523b4cbbfd85aa5a8e31a43df2"],["/2023/07/08/maven的使用/index.html","c19326a3a21cf37cc6652aad5a724c9c"],["/2023/07/11/Java-lambda的方法引用/index.html","296fbda11078cd684af1906bc1c9b9ed"],["/2023/09/04/Docker部署/index.html","0bac633324c77f51f8dd184dfcc2f008"],["/2023/09/05/Docker的使用-壹/index.html","8bcf13f48202a2284b2e7c51bd433a1e"],["/2023/09/05/docker的使用-贰/index.html","327ade8ed6f9f814659a20d839b4ee91"],["/2023/09/08/Docker的使用-叁/index.html","7c27f47930ac568e7209cb63f6572878"],["/2023/09/08/可道云桌面搭建笔记/index.html","e404990c33561da3f7f828e2777ad4e9"],["/2023/09/09/Win至Linux的免密登录/index.html","c8bcfdf160b35339526d3b686a11cd8b"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","68038fe242d88caf24699b0fbd35b11d"],["/2023/09/12/Docker之nginx的负载均衡/index.html","57ee4d1ad08049062cc4c4b789f3d2fd"],["/2023/09/12/harbor本地仓库搭建/index.html","2b7271af18380114f9f52533d1f4f4e7"],["/2023/09/15/Linux2023-9-15作业/index.html","ab5e111449527d959bf084773a680284"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","4628ee906e7e341867f5924ea0665cd3"],["/2023/09/18/Linux2023-9-18作业/index.html","2c0ddfa6cbbba7cfde7461f4d3676f57"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","3f53b2c1a2b960213ac26041a94ab878"],["/2023/10/26/Git同时部署多个仓库/index.html","6253a14d794038c47aea7dc8bf0575cc"],["/2023/10/26/Git的使用/index.html","d206babec5b51f662b5eb56dcaff4a75"],["/2023/11/07/Typora的破解/index.html","e3f186fc9ab22c909eb77b47fe7ffbc2"],["/2023/11/09/Xmind破解/index.html","64c07422d14415f4ce0dedfab49f9c86"],["/2023/11/22/JavaScript笔记/index.html","76363c1987dbcf6141c81a92b414eb8d"],["/2023/11/27/shell脚本笔记-2/index.html","a21347e8dd536ac2ca9a4e45e6ef9721"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","57c0b3f28d4bc11f80b998a083a85f12"],["/2023/11/29/windows重装系统重制版/index.html","a7ed14dedbec99607035d32c92e5546a"],["/2023/12/15/shell脚本笔记-1/index.html","b004f0d86693917f15c587469389086f"],["/2023/12/16/shell脚本笔记-3/index.html","03910bcbaed5f2cbe276b15422e1c147"],["/2024/02/09/2023年度总结/index.html","9907946c3a624f687ba3c4d3752140df"],["/2024/03/05/Selenium-的使用/index.html","c0ae6bc05bf25ba2ac058f175271f30e"],["/2024/03/11/JUnit/index.html","1f7ed92af0d206ac89d6c8c3cbc1849a"],["/2024/04/03/JSON/index.html","486022413630a2c8cf3efea3238d4d8f"],["/2024/04/16/JavaWeb/index.html","779a4d082a1ddac221a467e60ccce799"],["/2024/04/16/spring开发注解集合/index.html","a38c44f55e3754e7c00903f855a93436"],["/404.html","5414428c2bfa4413a7beff93acf5c9fd"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","50c48a5b564c5940da1c8a809615ba81"],["/about/site.html","c5f854dd36c2b476fe35ff0b0d4387a2"],["/albums/Test.html","9f21e68cc1b6d26b5277f2df34331007"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","80a79eed89b05a721ab311093c5ef72c"],["/albums/sunset.html","b58df31b6501fcc16a3f18cfbf14be97"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","22ad19edd090f1f6e11bb161c914b1f2"],["/albums/日常.html","8de99b7963551ecf4445b748384a9f4a"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","90af22a6b5652b8ac0df50ee8e3da075"],["/archives/2023/05/index.html","efdb2476e4191afa9c832580a2ca3450"],["/archives/2023/06/index.html","7daeace193b7222f5fce8bf6302272bd"],["/archives/2023/07/index.html","043f3505be9a93642e4f3e142dfed8bd"],["/archives/2023/09/index.html","f37eb276dade434ddc20075bba99b494"],["/archives/2023/09/page/2/index.html","0f64059c07e277f819abef4d39f1c0a6"],["/archives/2023/10/index.html","fb32c86ffbcdb561d561453e1ba08750"],["/archives/2023/11/index.html","bb4ed4b2c372087ac06f06da5d006735"],["/archives/2023/12/index.html","d506bf1e10cf8a7fda319fe38e72e176"],["/archives/2023/index.html","a50606a9054974d3c284dc8e098d6015"],["/archives/2023/page/2/index.html","811527e085d5cdca6a65e8594014aea6"],["/archives/2023/page/3/index.html","d0815dc837d4d8cba7a9553cc5284af6"],["/archives/2023/page/4/index.html","33c9988b61e690ca93954131ee55c195"],["/archives/2024/02/index.html","1d502ca103f9156318f7de0d7f2addc9"],["/archives/2024/03/index.html","2347e679991610a908a54ba742ee9c34"],["/archives/2024/04/index.html","c273a917dcb7d6acf9f395f05ecaf0f4"],["/archives/2024/index.html","bf6f77d8dda34aa485fc3098a81f3d35"],["/archives/index.html","67ec245c5fcb4399d6d52ad28be433d2"],["/archives/page/2/index.html","4180e340329350ce2b5424d2e2f009f8"],["/archives/page/3/index.html","bd5f3876ab44c38f178442b0d3060eec"],["/archives/page/4/index.html","6a38e722e6c7e85dd7070efdb03a08d4"],["/archives/page/5/index.html","b521a95382b77153cd1fdc809cb87945"],["/categories/index.html","3e482d1c1641d119b61503e317adec34"],["/categories/spring系列/index.html","4ab6e77d4bda2486e73abf0abd62fa70"],["/categories/前端学习笔记/index.html","95cdc12754f19d424aff33a5c544d7b3"],["/categories/单元测试笔记/index.html","7e692f9c8cfb8ef17f36b3be5610af5a"],["/categories/安利/index.html","996f9d135f01ad54b54b2ecc3c2a4f99"],["/categories/日记/index.html","bda0067b0a1b5dda6228782d390875b7"],["/categories/笔记/index.html","27a2c98fbb4137b7f27cb9af2c4fb9bc"],["/categories/笔记/page/2/index.html","a87871b87c8494dec77d6190bc5fb722"],["/categories/编程技巧/index.html","41362ffbc01cda726eb826022d4977dd"],["/categories/编程技巧/page/2/index.html","503eddc477619ac6a01913bcf94aee31"],["/categories/自动化测试笔记/index.html","75fb00eb9b306b1b39e8eb0073ec61b7"],["/categories/计算机知识/index.html","571542d62e4407d8cb055664ae66a9f2"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","518b579313ae5f6c81cede13e1e73b72"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","34b79672b7f202f7fde119457901fd08"],["/page/2/index.html","170e3782d7d8240cea08f6945862bcb7"],["/page/3/index.html","bf2994129b4029262f03b7c61a43c6da"],["/page/4/index.html","bfdab11659c990c4bae4b5ac42524275"],["/page/5/index.html","060112409f7cf1fdd3fe7860aec617d9"],["/sw-register.js","bf557960ede1c759d8fb9832178fd35f"],["/tags/2023/index.html","32047976d1af516dbc7f38cff9f40a7e"],["/tags/Docker/index.html","94de9be34e2ebd7313020568ebad676f"],["/tags/Git/index.html","c217d28bd506fe590e7c89dc21b5cfcd"],["/tags/Grafana/index.html","1e6bc09c4f256a86d35e5d8fba5d2b2f"],["/tags/JSON/index.html","5a43782b5560819531bd6bb746b6765a"],["/tags/JavaScript/index.html","5540f8da87af818e6f08ca1bc1c0dfd6"],["/tags/Linux/index.html","12a268570460280db96dbcf92892195f"],["/tags/Prometheus/index.html","446149589588a498310cccccb783ccee"],["/tags/SSH/index.html","ce8b4eb658be47ac3a1124a579973182"],["/tags/Typora/index.html","1896ea5fb73abaf6665614ea9408cf02"],["/tags/cAdvisor/index.html","dca0b43abc08589f71872f719a7fce49"],["/tags/frp/index.html","5c669f7b6435d350febe86e78abd47ef"],["/tags/harbor/index.html","23c38bb4ccd28f906ae55ff86df526fb"],["/tags/hexo/index.html","06376c5f66e7c8598143dcca68618465"],["/tags/index.html","6231ca5b6214277eaab791a6214f798b"],["/tags/java/index.html","257ff04448cea16b4b89f32733740b1b"],["/tags/javafx/index.html","94a37813b29f17dcff59abf55092656e"],["/tags/java线程/index.html","d8ff14ec64a1ecddd8228777700fba26"],["/tags/junit/index.html","eed6e372329ef95884a7a4e81180e4f3"],["/tags/lambda表达式/index.html","1c963da8edfe2b86d373e723ecd818b9"],["/tags/markdown/index.html","64821d5b040d0f5cbdd0bc748d6d9a48"],["/tags/maven/index.html","1f55e63127afc292d388dae4823ee984"],["/tags/mermaid/index.html","d71815cbaf6a2febd712961e6b716311"],["/tags/python/index.html","d530f78f313a230e8940e6b7ff7ca6f1"],["/tags/selenium/index.html","d2683c89417c90a9cfec05d2627dd77b"],["/tags/servlet/index.html","7283e16cb1d318d7a10071f13698b923"],["/tags/shell/index.html","f532ebe305eebe3999971adc808cc1ce"],["/tags/spring注解/index.html","c835e07accca9c5c5bcdaa312f73ecc0"],["/tags/xmind/index.html","8004093366a334216da87cd45dff11a2"],["/tags/分享/index.html","18a368ab7999a9c31ef73d1d4b8c5fd4"],["/tags/原创/index.html","816071aaf18a0b104ce2c2ce6628f271"],["/tags/原创/page/2/index.html","c416ad7cb8d0d44dfaa76182ee8baba1"],["/tags/原创/page/3/index.html","95d247976f39e3a902505bbc6b7df138"],["/tags/原创/page/4/index.html","d203aca7d5de606f4c70a03b2c48fe59"],["/tags/可道云/index.html","2fdf9aa969ed952bc83822ec63bf7ece"],["/tags/年度总结/index.html","4bc904aa6b233b3cd1c357518cbecd74"],["/tags/思维导图/index.html","6d1079be21e87b821008205cdd8207cd"],["/tags/暑假工/index.html","4ce6ed747c07e910384f3a260c85e6eb"],["/tags/电脑技术/index.html","5e46de4436a254f42f151875e1c46b34"],["/tags/破解/index.html","299ac100c5df082cd72a9eeec867a54c"],["/tags/计算机/index.html","ec83fb3618a2a424015ed6e1d5e3a12b"],["/tags/记录/index.html","790c8af1d3ded54efce74567ce783aba"],["/tags/集合/index.html","0e31f0547a72b32b2d9e4e86742c4dae"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
