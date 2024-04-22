/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","00d028ccaac5fe91bb39545ca1cb8ee8"],["/2023/04/28/Java/index.html","b4e7d07d0c4acc184336be7e6fcba30a"],["/2023/04/29/Mermaid画图测试/index.html","03c5db90d53079fe436a506ec3569396"],["/2023/04/30/hexo的部署及SSL应用/index.html","2777cfa4cc445def2338bebe5136807d"],["/2023/05/02/javafx使用maven打包及运行/index.html","721e80c5edc853d639b2c5f1161f26db"],["/2023/05/02/安利几个好用的网站/index.html","ce9d6889e50428711607c2629214ed0a"],["/2023/05/02/运算符级别比较/index.html","4efd804b0f21605319b25f7e5aecadfd"],["/2023/05/02/集合-Map/index.html","e6034a68683b30a7c98328cdf7faea16"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","df164054e2ffaccc6ba166260dfcad24"],["/2023/05/08/frp之内网穿透/index.html","783d124b96cc7bd5586169271f0e0e03"],["/2023/05/14/集合类的继承及实现概览/index.html","a5dfbe12b3181fc42c5f59ce9d42ed95"],["/2023/06/13/湖北飞young算号器/index.html","99506c8033b4e6f19fbe2c6d4be6abf4"],["/2023/06/17/windows之重装系统/index.html","3913bbf1705063f98ab745d76290d7f0"],["/2023/06/28/记一次打暑假工的经历/index.html","86100244b1c47a6e9a561aa45069b640"],["/2023/07/08/maven的使用/index.html","4e8099a196acceb49bb8d839a30cd105"],["/2023/07/11/Java-lambda的方法引用/index.html","2945c74be0c855f00b5d1dfe846376e3"],["/2023/09/04/Docker部署/index.html","6142a97f860594ed35d7a448a22a6dbe"],["/2023/09/05/Docker的使用-壹/index.html","e792807afa0efde131e8083157630dc4"],["/2023/09/05/docker的使用-贰/index.html","4183ab1bdec619960fd9fa5f69baecb7"],["/2023/09/08/Docker的使用-叁/index.html","466e598d150d40addc7408ff16811eb8"],["/2023/09/08/可道云桌面搭建笔记/index.html","8a11a472d303e75ce797204f81319bc5"],["/2023/09/09/Win至Linux的免密登录/index.html","88bb3cb9a934f7a67c902b754f9ddfd7"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","7959b5c07bcd9c96dfdb623bfe403bc4"],["/2023/09/12/Docker之nginx的负载均衡/index.html","5851e08fc1844521360df5bf9f3a2ebc"],["/2023/09/12/harbor本地仓库搭建/index.html","8d0eceb75fa84db004ef48aa382ae040"],["/2023/09/15/Linux2023-9-15作业/index.html","30ea31fe205c33c90f133b270b506776"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","4cda1d016478b9ae8c30801dcf55b5e3"],["/2023/09/18/Linux2023-9-18作业/index.html","7fc9514fc51388330c65da874857dd35"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","01af8628c8ddc49c6628c8e9e0ad463b"],["/2023/10/26/Git同时部署多个仓库/index.html","895d0510797c6f143a3c8309edd56867"],["/2023/10/26/Git的使用/index.html","d7952d83f27a47e1fdb164f2a3f57d01"],["/2023/11/07/Typora的破解/index.html","ea9472d8c4a9f5747f33caa0c5c44613"],["/2023/11/09/Xmind破解/index.html","d01002b65ee50099d5f795c0c3f27523"],["/2023/11/22/JavaScript笔记/index.html","eba63d17183d12e219af073c555b828e"],["/2023/11/27/shell脚本笔记-2/index.html","c0080371c9584b2e1468b6b36ad63279"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","deb3b4beb7903c5922d37a854c0aae2f"],["/2023/11/29/windows重装系统重制版/index.html","b552366cc4a82300b080ff313c697abb"],["/2023/12/15/shell脚本笔记-1/index.html","ab0a388c2a9ed46eeb801c222a8cdcf9"],["/2023/12/16/shell脚本笔记-3/index.html","71ec93355f316c21bed56469e838ca47"],["/2024/02/09/2023年度总结/index.html","daf77660af47f0321ed92b5629cb7f7f"],["/2024/03/05/Selenium-的使用/index.html","6cec74007b5122a95c43349f7a0d2444"],["/2024/03/11/JUnit/index.html","b1baa642a3da63a40b2bfc79fc243e35"],["/2024/04/03/JSON/index.html","d338867e25d4b496d7ccecc15b607738"],["/2024/04/16/JavaWeb/index.html","8bda2eb0017fed602fa5f7ac94ca11f1"],["/2024/04/16/SpringBoot基础/index.html","70536e0db2be95bc455ba957b51577c0"],["/2024/04/16/SpringMVC/index.html","34a8a9f1fa5d87e6355ad13d6d30b24b"],["/2024/04/16/Spring基础/index.html","f64808ae12c13e7b37d13c5fdefb8786"],["/2024/04/16/spring开发注解集合/index.html","087362b06fecee3e6a6161acb5994f9e"],["/2024/04/22/Spring-ResponseEntity/index.html","90f90762298766ad2c27ffd0e6effabb"],["/2024/04/22/springboot多模块开发/index.html","3372043e10e991593f5d342df208498e"],["/404.html","c56bf2ea1345def114c1baefefc1ad41"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","e903ffdaa7971dbd355fc38d58d190fe"],["/about/site.html","17b3f69c5a8a11973a008632a344c9f2"],["/albums/Test.html","5168ae8d334a34b73b98ccf764e8d1f9"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","5356916d22e0ca5417352702b0dc21d5"],["/albums/sunset.html","297f5d34678a6d1f0fc1a2fb190467fa"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","161af3fb3359ad16c42c2c9bd3e8efad"],["/albums/日常.html","327a88ae02a5f96f17f0120f8c020b04"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","87c78b417393a0c51d1644adfd8e1783"],["/archives/2023/05/index.html","86c37f5c358c8927c8fc011e348756b2"],["/archives/2023/06/index.html","be05d9aa638220a6e7f67386aad85425"],["/archives/2023/07/index.html","40fcec9e9b8a860bd5615b29b703929a"],["/archives/2023/09/index.html","a309dc20b9ea97799bccdeacd9c01cb0"],["/archives/2023/09/page/2/index.html","728c207bb413d9885f5c81fc4a849836"],["/archives/2023/10/index.html","ecd356c5b00fab2f513958e4e8a57c03"],["/archives/2023/11/index.html","78a101cfed19ecfcdd07c6480c91520a"],["/archives/2023/12/index.html","beb37c89f8d357b3aae358d59c16b8ef"],["/archives/2023/index.html","fcf91f412edc6c8c1ca0c19f4a4febdf"],["/archives/2023/page/2/index.html","da6f4728f5608b8afb4f0ee16585ecd6"],["/archives/2023/page/3/index.html","11af9418a96b345ba0b3290a198dd4fa"],["/archives/2023/page/4/index.html","dc16c060ae11dda48841b0a029010811"],["/archives/2024/02/index.html","3252f9b8aa79bf838cdc7c419251543f"],["/archives/2024/03/index.html","8337f11ede605547b047883fef07845f"],["/archives/2024/04/index.html","7db207198aa64fde1717da6c81cae90e"],["/archives/2024/index.html","40c6a4b3d16c3552f67e525221de17e9"],["/archives/2024/page/2/index.html","ee972a415ac46c85271db0bc9fdb8baf"],["/archives/index.html","76d06cf033ec8ad2bc563ba6d3fe2865"],["/archives/page/2/index.html","135152719f2f16d2d7a7f8a31de57913"],["/archives/page/3/index.html","7f2e07fcfbcf4f186d0208b89f7e64c0"],["/archives/page/4/index.html","92adb9d5807845c2050b6b1985590329"],["/archives/page/5/index.html","500b57310118048f8bb4e9c442dccb82"],["/categories/index.html","28c3dabcfcc384924c89943a8c2d55e3"],["/categories/spring系列/index.html","36d63f03bec86baa280d83b99628174b"],["/categories/前端学习笔记/index.html","02bd30e618433d4806239b645086c335"],["/categories/单元测试笔记/index.html","64fe89e16c349257d8c588fecd2b0cfc"],["/categories/安利/index.html","1f051ba6791fdbf04364415eb71c4461"],["/categories/工具类/index.html","64b4a72d213f39b87436d1a17f02c5dd"],["/categories/日记/index.html","dd94eaa002fc8fd0bfa0e58bf65ed397"],["/categories/笔记/index.html","a2338b7410ac680ec94a68765477fd98"],["/categories/笔记/page/2/index.html","d73941f0f8c4e76e9bee4895c720ee68"],["/categories/编程技巧/index.html","d850b70f60fe5752a189dfc3cbf26e1e"],["/categories/编程技巧/page/2/index.html","b1a28cc06f83cf78e9f45e2c852349b3"],["/categories/自动化测试笔记/index.html","3a5ceb652ba6ca3e92e849730a9f015c"],["/categories/计算机知识/index.html","d6b6e2acd91fc60ea30632ba86a6912e"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","34a5ee42b3d8965765fa5fc90be7e26b"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","6b69becda5bdcb112b37cb611e815dc5"],["/page/2/index.html","178eac06f63156f44ca92c75f0863fff"],["/page/3/index.html","0690b7980af8f1df0ad8b6775caff637"],["/page/4/index.html","dcb5e52d58cc6d0d780bf2d8a544c63c"],["/page/5/index.html","4c1a95725badb411ef3b5005a34b85ac"],["/sw-register.js","bb65e7afc0aa181a11abe0b1b6f2feac"],["/tags/2023/index.html","1bf55b5eaa69b4c10ba2becb7e69c5ca"],["/tags/Docker/index.html","0d62de029ede3cfd1ec96dfd80b130ca"],["/tags/Git/index.html","b825f42d3ffea1ec93ca18a9a7cacf50"],["/tags/Grafana/index.html","040a481ad066305bcb440d9789f22913"],["/tags/JSON/index.html","9c4606e6b9925ded30eefca97b9faac7"],["/tags/JavaScript/index.html","ff2d9c88fc852f172b2234c1acc4d2ac"],["/tags/Linux/index.html","6bb94b478aa4687b355023d831309801"],["/tags/Prometheus/index.html","fdd8a31220e87aac33c26bba472697d0"],["/tags/ResponseEntity/index.html","c48f44a0b4a184698be730be89e7ba5d"],["/tags/SSH/index.html","02d15dc4e07dbda3111cc8d9da587419"],["/tags/Typora/index.html","13fde7f509662e383ba132d1689f5b1c"],["/tags/cAdvisor/index.html","dd609d01100d38e7e4fc5600cb2b34bc"],["/tags/frp/index.html","1320025fbc52da80aafeb5042cc7640d"],["/tags/harbor/index.html","681ecb4b57d113c5596d9faff3c70ea2"],["/tags/hexo/index.html","a355a4c47698fba2906a646ea701eb13"],["/tags/index.html","3a85316c26bae477ccff96eb3fd07fef"],["/tags/java/index.html","766d92bf24432f7db443b193cbaac94d"],["/tags/java/page/2/index.html","490f594946c2ae7c14dbf67df9a045a0"],["/tags/javafx/index.html","296a5182b0b2866144996ef958d0ea1d"],["/tags/java线程/index.html","e8fa3e952a0947c802fb1b93c565611c"],["/tags/junit/index.html","f7bf7384ae9f315b406dc2c08bcc07aa"],["/tags/lambda表达式/index.html","edacf2ec6b42505c64ddc2437865384d"],["/tags/markdown/index.html","ddadcc60c9ead950df05869731e1c81b"],["/tags/maven/index.html","ebe82ec30f10e5e3b273d0b232031043"],["/tags/mermaid/index.html","680ea4fce57b7a5c106943808daef188"],["/tags/python/index.html","4f4aa112005b4374c8695e59a70e7e73"],["/tags/selenium/index.html","9797c8c661f971b855dc2840560b75ad"],["/tags/servlet/index.html","f47ea35436aad0b53ba7329f27fe3370"],["/tags/shell/index.html","bc24760791364c7486cac1a225196480"],["/tags/spring/index.html","4215e4af82d66de01936f19db8d3ebcd"],["/tags/springboot/index.html","8da964ff206d5dbcb27f468d0f459f59"],["/tags/springmvc/index.html","4e2704ce69089e79fd87949e8601a71b"],["/tags/spring注解/index.html","a63492c91267c602582d916a36571795"],["/tags/xmind/index.html","515fbf5a09e8dc8305df4dc716f90708"],["/tags/分享/index.html","8e2b199b93d91920c5a359ef1c4d2a9e"],["/tags/原创/index.html","4947e8fad705583e8caca408727f2ae5"],["/tags/原创/page/2/index.html","5257422ae0b0f46392ca607a1ae2db14"],["/tags/原创/page/3/index.html","f8d485942fe779b715e93d22baa58c04"],["/tags/原创/page/4/index.html","cbd20da5ef28384bbbfb793b3f6917e8"],["/tags/原创/page/5/index.html","971901e2973893ef7c84b3726170987b"],["/tags/可道云/index.html","615d452b296f72d885302c9dd9b7a245"],["/tags/年度总结/index.html","e5ce8004c95f197a1f354c9543e2a60c"],["/tags/思维导图/index.html","28a9fb42ecd8b2d9e4b35eeb37099c5e"],["/tags/暑假工/index.html","7681a1428e672e5bc1ac85a725b70cd5"],["/tags/电脑技术/index.html","409b69f462d24ec0ac199a0d563c496f"],["/tags/破解/index.html","43a7885d9187af2f1e448b2c64efe198"],["/tags/计算机/index.html","1010c229e1885fbdc30e39997bdcb5dc"],["/tags/记录/index.html","429dfeae212a7846650f8f47250bc089"],["/tags/集合/index.html","b8de069ad1fe3b4d8287a38e9a21f3df"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
