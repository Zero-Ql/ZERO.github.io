/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","690e8d3127c2fd82f8e5ce5748541a7d"],["/2023/04/28/Java/index.html","45511e97f9cab6f7923554ed956247cb"],["/2023/04/29/Mermaid画图测试/index.html","918e26130300167f8a7e987e91a8fcf4"],["/2023/04/30/hexo的部署及SSL应用/index.html","bafe53a741432ea4a38cbca09b3dd796"],["/2023/05/02/javafx使用maven打包及运行/index.html","201b1f63b4756ae801e091e5dc5fa9a0"],["/2023/05/02/安利几个好用的网站/index.html","e24a7b99b4171124e79cd5bb7dde4f87"],["/2023/05/02/运算符级别比较/index.html","838425c65ccb3be58ad466723b692203"],["/2023/05/02/集合-Map/index.html","a645fac4ad838c7e98936974b29a895f"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","17099f017ab18ca246f82a843f42058d"],["/2023/05/08/frp之内网穿透/index.html","a3df7beb9215e2c84c675620b132672e"],["/2023/05/14/集合类的继承及实现概览/index.html","05d012319ec2d45d9fc4353a13680239"],["/2023/06/13/湖北飞young算号器/index.html","db13a60b85bd3c8fe22d0d76d2f50961"],["/2023/06/17/windows之重装系统/index.html","1dd618fca86ca1c67f830e5fdfc12f1e"],["/2023/06/28/记一次打暑假工的经历/index.html","44f1aa65d77112858537c04d7f2830d0"],["/2023/07/08/maven的使用/index.html","e4813fd5065cdb0f3b62dd82892f3e2f"],["/2023/07/11/Java-lambda的方法引用/index.html","a4beeacbd41cf01efbde9e330a7ef936"],["/2023/09/04/Docker部署/index.html","e2767cc7679f5eb0ca35a51fa80f9111"],["/2023/09/05/Docker的使用-壹/index.html","f24598664e7e1f217d228f6d8422d403"],["/2023/09/05/docker的使用-贰/index.html","7a27d016fe40a628fc8dddd1260c2cbf"],["/2023/09/08/Docker的使用-叁/index.html","c49a33ef5ab7bc934ee87108afcec08d"],["/2023/09/08/可道云桌面搭建笔记/index.html","533e90fa2b5feaad3b3fd71a4af6103d"],["/2023/09/09/Win至Linux的免密登录/index.html","7ff3428348c9b4b1a419ce11ddc1291b"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","11e65230fef861796af7072e43fde742"],["/2023/09/12/Docker之nginx的负载均衡/index.html","f07b08319c06c1b40d731ad748f461f2"],["/2023/09/12/harbor本地仓库搭建/index.html","60022906363df204fa455d76b6d57a8b"],["/2023/09/15/Linux2023-9-15作业/index.html","7f677162312ab2da8c18cf4abcb8625b"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","d860d6443fb9b7d08de09754238663a5"],["/2023/09/18/Linux2023-9-18作业/index.html","7e69be99be1823f98337b61bbc51f3dd"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","746c0d6c73053394cba862b6a408d1eb"],["/2023/10/26/Git同时部署多个仓库/index.html","9351a8af59c1ff4083250219b2c50e2a"],["/2023/10/26/Git的使用/index.html","87ccdf0b87d76f99f1af94f8580f2040"],["/2023/11/07/Typora的破解/index.html","48371adaa300126c11ca24bb91592936"],["/2023/11/09/Xmind破解/index.html","a0f0506250e22aa58172c4bd4467287b"],["/2023/11/22/JavaScript笔记/index.html","ffc9931277c2ffd5f411d2e61f7ef6a6"],["/2023/11/27/shell脚本笔记-2/index.html","9fad4fb4d9a5fc77ec272b7ad3dc633a"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","f45214bd08775836f08fd4e84d573d5e"],["/2023/11/29/windows重装系统重制版/index.html","21c5561824b5bcf7fbb2fed7cec6c8de"],["/2023/12/15/shell脚本笔记-1/index.html","9070eebe3e42e722c060fa6e0c540f6b"],["/2023/12/16/shell脚本笔记-3/index.html","8c33262b6881537da094cf77a0ea9c9e"],["/2024/02/09/2023年度总结/index.html","1b28474c0a016ec310b14850c56c7b22"],["/2024/03/05/Selenium-的使用/index.html","c722adb3a7cb0b98c6a234fcd8b77b1e"],["/2024/03/11/JUnit/index.html","0bb2793732f9f74272a9064184cf444d"],["/2024/04/03/JSON/index.html","4e277505e5c7dcac976f69e14d2ea8b9"],["/2024/04/16/JavaWeb/index.html","cbef573da6b0ad3d7a64131130bf9604"],["/2024/04/16/SpringBoot基础/index.html","52843ac8c7c91ace05ad7e553606a798"],["/2024/04/16/SpringMVC/index.html","8b4e01a950a0ff1976c285b30ec7be04"],["/2024/04/16/Spring基础/index.html","68541792c1e9b586817627c194ec55cf"],["/2024/04/16/springboot多模块开发/index.html","6ecec9ffe0e7ae79a1fcfc8263c1ab5b"],["/2024/04/16/spring开发注解集合/index.html","da5cac032f07a4c037696e48b0da8a2f"],["/404.html","7aa333874fa62a950c6c18b76d3c2294"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","18afb22eb198cd52b573307b964fbbae"],["/about/site.html","ecd6b9738711c1e621feedf78aeafd10"],["/albums/Test.html","aa0eac04086ec35009de1801a64f647a"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","b325e6dfaeb10b2a08e7bfdcaca8cc5a"],["/albums/sunset.html","bfbced5f1636ae629478de873d57212c"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","20ca1393e24b9fa34dac14aaffd47ffd"],["/albums/日常.html","14e94870dc82ce7b7f28a43bdc660397"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","5af7dd8d980fa9dcd81efcf4c0bc9789"],["/archives/2023/05/index.html","44deab032e8399bd30413d97e59d7b30"],["/archives/2023/06/index.html","386e76194c95687e61319273a1602b85"],["/archives/2023/07/index.html","408b6287cf1eaba3bf9051f4134ec992"],["/archives/2023/09/index.html","3661ace75420002cd71960d31ec8d013"],["/archives/2023/09/page/2/index.html","cd1ac2f981386f4eaf3cfabddbdd6559"],["/archives/2023/10/index.html","3bc608b38adf256a064311ba8ff8fcd3"],["/archives/2023/11/index.html","6ee92a928e07fb86850ef962efade703"],["/archives/2023/12/index.html","3bbc606d832b693f74037ab52e60fe9b"],["/archives/2023/index.html","b7eba0f680d4a7cdfcf9539714188a2a"],["/archives/2023/page/2/index.html","5a6e8cc7b4110e92bf93024f674905c5"],["/archives/2023/page/3/index.html","37b54b93085dd193f9e85f941f8d0529"],["/archives/2023/page/4/index.html","cd6961f9948c12a664d01ca5b5840036"],["/archives/2024/02/index.html","25b54a55d37fd30766c25335052eef6d"],["/archives/2024/03/index.html","da732cf854fe29f1f19f0ff4fc9bb221"],["/archives/2024/04/index.html","e7af00d12a4403afa2f54fae450e3ee6"],["/archives/2024/index.html","ab1d7e62719196081fd88eb4bea8e614"],["/archives/index.html","bfc1ead728b5d1aac91ecbf6c27397fe"],["/archives/page/2/index.html","ad08877641a1c950023644739436c5e1"],["/archives/page/3/index.html","5abeb53d60c3f91f75557b0db2017c0f"],["/archives/page/4/index.html","cf9e94119d5040d9cd1d2902d6adb013"],["/archives/page/5/index.html","bfb96d6d8ee6b0427628564d2e2f218b"],["/categories/index.html","c073ded9c987e301711ca381d72404b7"],["/categories/spring系列/index.html","cbb28f64211efe2b49e65a8c0ecbaa09"],["/categories/前端学习笔记/index.html","0172f76b211a095b9f7f271ebcd5cd2b"],["/categories/单元测试笔记/index.html","2fac3e7a94e3d271f525cf85f6a292ec"],["/categories/安利/index.html","1da829d9b01d7257c72ff99bc20e8787"],["/categories/日记/index.html","50fb046893d845f7278ce73b920edfe7"],["/categories/笔记/index.html","ed3aa7d61296b49de4de861da9350e5c"],["/categories/笔记/page/2/index.html","a68b7e98b1dd67250542ba5054eae2b6"],["/categories/编程技巧/index.html","08d9c4c7ec9a44a374c4fc87165dce12"],["/categories/编程技巧/page/2/index.html","345c0da915834ea18a915ad4a0000730"],["/categories/自动化测试笔记/index.html","74406575ec69ccc3637957238f3b0ad9"],["/categories/计算机知识/index.html","9c9d7a6fd1a053a505bb2e44d86a58c4"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","316f19bbd779673c88647fe859fcf241"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","a7c67fe64dfb8f30f7633d7a57475c97"],["/page/2/index.html","57ae35b6e2862c4fec26f7d54cb44afd"],["/page/3/index.html","2c9b64c27d6c76a07f9105d160c25962"],["/page/4/index.html","2730ef20367404710f3f69c2aa295e3d"],["/page/5/index.html","12dd009b639fc81bf0c7486d608f7f63"],["/sw-register.js","0c319cb5163a6100516f63ba90608fcf"],["/tags/2023/index.html","4426291d8a6491acca893d5390f7a4bd"],["/tags/Docker/index.html","a33d91c7f097e3ba37a8c1489b791dc1"],["/tags/Git/index.html","bcf13827750e7a2ce933544a329239cd"],["/tags/Grafana/index.html","1e9a1fcb73781595b51ace406bd9a905"],["/tags/JSON/index.html","df5b2560735b00f1c9a278dece097a2f"],["/tags/JavaScript/index.html","f7ac0e9cf0a785f2b61834ed82bef3e2"],["/tags/Linux/index.html","9d7d753712f854fa95073cc73d5f6c89"],["/tags/Prometheus/index.html","59c8b0f15ca6960887f739155e6bbf0e"],["/tags/SSH/index.html","53b5710b45e17dbd8f906368043ad315"],["/tags/Typora/index.html","a40d0e54df94dd2a3442654898cedab4"],["/tags/cAdvisor/index.html","9fd2deda2802349471d4020178878b44"],["/tags/frp/index.html","a1c73e3d7ebae8d453a9d7cd334aeaa9"],["/tags/harbor/index.html","e5d96fb662d71e0a18070f024adaaae5"],["/tags/hexo/index.html","10f38fdb7cbec5b57a1b064d5f68a599"],["/tags/index.html","4cb3f1aa87e6f84a2d5a106d9fbeb4d7"],["/tags/java/index.html","b444af44f13b16b7636d7103e9d42b37"],["/tags/java/page/2/index.html","b3136e683b9926d288f44d19d28788c1"],["/tags/javafx/index.html","783482544c4c15bd8875d71ef6cee0ed"],["/tags/java线程/index.html","c843b461662a0936d6859b6ae7c23436"],["/tags/junit/index.html","1d18e2fe80b8fa14a8bf9711a0ffc56f"],["/tags/lambda表达式/index.html","2966dae37607191bb0563cdb642ba9fa"],["/tags/markdown/index.html","e563a0b30f70e8a6aa4e056b9967210a"],["/tags/maven/index.html","b877d9641b005513fd59cc07f0005217"],["/tags/mermaid/index.html","3f0442d6bb88a28a0a8d82d7fe12c0d4"],["/tags/python/index.html","f52ef4bf68988f1400d93691d5f079ed"],["/tags/selenium/index.html","e2926ae6d4b80b41b5348ef6ea37e236"],["/tags/servlet/index.html","e5ae73b667a6b9b3fc672443f599a9b6"],["/tags/shell/index.html","ce06138bd4f4abe367cc6458e6ba3d63"],["/tags/spring/index.html","7d58bebf6b5d805dd95cea97f6514c7a"],["/tags/springboot/index.html","a4a352b6599793b782705db04d29e441"],["/tags/springmvc/index.html","13ba2eefe65cce098865beaba239bc69"],["/tags/spring注解/index.html","523dd0924780e4a6abe59c0ac363c54a"],["/tags/xmind/index.html","2a15ae2ca13ce9954ad149a90220dd99"],["/tags/分享/index.html","bdea03c9f02c8f10f2e042c6ac7ae2b9"],["/tags/原创/index.html","328d4d5603703c5a7b1af3624cfd2be0"],["/tags/原创/page/2/index.html","ee5ab128f70d27a4dd2841813a50e35c"],["/tags/原创/page/3/index.html","88d94e527597d9e0bdb7bfaa33c91362"],["/tags/原创/page/4/index.html","3853a59b4ea01a709d4d2dafdf8e1c6f"],["/tags/原创/page/5/index.html","5c0d1bfbb74b0cee40a60d9c88cea2a5"],["/tags/可道云/index.html","40b6b56c720243c7559cd81135211116"],["/tags/年度总结/index.html","47370293d422c0a7b6d0d0e613e3cb1d"],["/tags/思维导图/index.html","d251ede354a8f96289bef27e7e49bc28"],["/tags/暑假工/index.html","02bd8453071ce9b0d15ec2dabb321cca"],["/tags/电脑技术/index.html","edea13b59ef61e7c20868279b341cd98"],["/tags/破解/index.html","44dda17fa8734b6b03eafcd1ef3580f8"],["/tags/计算机/index.html","0abcbe8ea6ffc2748c8bff0fe097a025"],["/tags/记录/index.html","651aff75be3fe70d476c49aaa9dcfdf8"],["/tags/集合/index.html","9f701e9754d1eae91ceeb54140bee0f1"],["/wztb.png","c7827658dd2eee50653b6cfa5ee982dd"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
