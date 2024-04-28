/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","82a8d6b165f8bb991361fff4d1e44940"],["/2023/04/28/Java/index.html","2cd9ac4b85b91341c8af08cd5db50584"],["/2023/04/29/Mermaid画图测试/index.html","678cc96d6273a35e39b8b07b1a599018"],["/2023/04/30/hexo的部署及SSL应用/index.html","6cff541eb9c4e5088601c895aee7f30d"],["/2023/05/02/javafx使用maven打包及运行/index.html","bf5136f3368a9f46842f1f31de6701c1"],["/2023/05/02/安利几个好用的网站/index.html","d3ebddd26c121ccab6280bd774287687"],["/2023/05/02/运算符级别比较/index.html","277b831912b0d311bd292fe686d90027"],["/2023/05/02/集合-Map/index.html","a502de52ced133c34039e2acdc0272ee"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","ebf6ae63df6465d4e0387449300b21a0"],["/2023/05/08/frp之内网穿透/index.html","2006481b02fce85512958e2d3dec5148"],["/2023/05/14/集合类的继承及实现概览/index.html","c46fc7808be98cd66789f4566d1b5396"],["/2023/06/13/湖北飞young算号器/index.html","074873c557cb80626657c6d2cc76d326"],["/2023/06/17/windows之重装系统/index.html","7befd8750783429c5b658a8663c15d11"],["/2023/06/28/记一次打暑假工的经历/index.html","a332c1373ecb8b14c399e5efda7c531d"],["/2023/07/08/maven的使用/index.html","f2ecb42f92b422c1a41055746151e368"],["/2023/07/11/Java-lambda的方法引用/index.html","1f940c252489b00fddb17f05e974bcfa"],["/2023/09/04/Docker部署/index.html","7c222f279c63fa9c01294e5cdc67d9fa"],["/2023/09/05/Docker的使用-壹/index.html","bc15835b7b23f6b6f874cfa27a8a384a"],["/2023/09/05/docker的使用-贰/index.html","abfc81e98560c7b66624a3ea67d1d08d"],["/2023/09/08/Docker的使用-叁/index.html","7a5aa2941b6bcfae039285f35d7de1b7"],["/2023/09/08/可道云桌面搭建笔记/index.html","c20780875911ba131914fc3b4f5c0e79"],["/2023/09/09/Win至Linux的免密登录/index.html","45d53e5c51e1bbb61cf80142f061dfc4"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","839862ea4f94eb6e1716c24b747deb51"],["/2023/09/12/Docker之nginx的负载均衡/index.html","0c44990e19f8c7404d3d53f28b34febf"],["/2023/09/12/harbor本地仓库搭建/index.html","6305b70256c1fc4c019af105794154bc"],["/2023/09/15/Linux2023-9-15作业/index.html","b5622e6aad2a5baab98c3c90c548d24e"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","4eaa7c7451ea8793d49b0d7b4928ab83"],["/2023/09/18/Linux2023-9-18作业/index.html","ddc9960e19cf843335e5799119778e27"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","7c208cfed2e51b8c3645ad9e739cc1c4"],["/2023/10/26/Git同时部署多个仓库/index.html","c87db8342f34312ff5cae7739e1e4d2d"],["/2023/10/26/Git的使用/index.html","758460741e677c39cade4dc08002dc17"],["/2023/11/07/Typora的破解/index.html","b1afe51f69c01ab78b3dd8e868bf2b9f"],["/2023/11/09/Xmind破解/index.html","73bba5b9abd1dabcb144c788b4768267"],["/2023/11/22/JavaScript笔记/index.html","f991ec7d05bb9621cdb02ed3b46fd406"],["/2023/11/27/shell脚本笔记-2/index.html","cadac1ab326b10cdc1d59009a53d3074"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","ecf0be5cfaf33d468be7d1c4ad92e5b1"],["/2023/11/29/windows重装系统重制版/index.html","ce22646eee0f63c91337d292ee24e225"],["/2023/12/15/shell脚本笔记-1/index.html","7e484bbfd3817acd28654ef114894915"],["/2023/12/16/shell脚本笔记-3/index.html","a06cc6f49a6463139a83863e38c3a9c6"],["/2024/02/09/2023年度总结/index.html","aa53ff6ca8ecc1f3455a7c38661eb209"],["/2024/03/05/Selenium-的使用/index.html","a6991ec44a23e6e7b7e36aa39843182c"],["/2024/03/11/JUnit/index.html","6ac9ca98529d80859465559cfb077818"],["/2024/04/03/JSON/index.html","aed38cef883b18f9e55717ec6a3ecd66"],["/2024/04/16/JavaWeb/index.html","f322a628830678334a712f0873e08352"],["/2024/04/16/SpringBoot基础/index.html","953264fb681b0b4041b41651d61db31a"],["/2024/04/16/SpringMVC/index.html","c230074d7b9501f90463e90fe37f3002"],["/2024/04/16/Spring基础/index.html","a7c74afb6dfa623ad4f514e573fede3b"],["/2024/04/16/spring开发注解集合/index.html","54b78b1139996c31d833d6508e044097"],["/2024/04/22/Spring-ResponseEntity/index.html","71deca2c18a6b1f36d48e3879ab30566"],["/2024/04/22/springboot多模块开发/index.html","4e38d280fe6c2c07090be4f1ce82479e"],["/2024/04/23/springboot全局异常处理/index.html","80f4cb76c5935f823011bd5fa98dc48e"],["/404.html","05a4df4c20c834590986ea47064095f5"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","5822687fc2c9d096e6257c2bbf3d4e9a"],["/about/site.html","280fc0ed9c31d540c7f2dfe90734c25c"],["/albums/Test.html","27b411b3261ad9177f043a37ea882825"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","77ea41c94fe0739184a4e293d04cd76e"],["/albums/sunset.html","aca763e38f7a2a805f945010a4034ee2"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","430ceba1991810c76b4d996ad0d869a1"],["/albums/日常.html","2740c6ce8282d64c44bedaf3a0bee56d"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","a52f9e81841790491040d7557191c239"],["/archives/2023/05/index.html","1984b269a28e33a284c14f1569de04ae"],["/archives/2023/06/index.html","110e8ff872600bbf403a65581e7fdbe5"],["/archives/2023/07/index.html","a09a9a4cc89d9f94b89be0f5ab522fe8"],["/archives/2023/09/index.html","f9114735c48553d1ec7edbd615bbe38c"],["/archives/2023/09/page/2/index.html","c5b8051523d0c69a453a52ce22e1a91a"],["/archives/2023/10/index.html","576ab604bbd786b4b958d6e1c158ee11"],["/archives/2023/11/index.html","192ad77c94f1197deb282e55755afc51"],["/archives/2023/12/index.html","4def4c1ee0403a20cdac390e003ee8de"],["/archives/2023/index.html","2aba612ee56a096bcb2deda488e9c243"],["/archives/2023/page/2/index.html","0c7b7c91e54110a4e080a1824d3452e4"],["/archives/2023/page/3/index.html","6bb5acda78b509ba73c60a64fdc5d471"],["/archives/2023/page/4/index.html","121264c346adda0c79505ba5151600db"],["/archives/2024/02/index.html","313b7eff73e92ed86267442ac4eab29a"],["/archives/2024/03/index.html","d747a0c4841e5f179e2c683b01b47cb3"],["/archives/2024/04/index.html","cff564f478daf9761757750f74f16407"],["/archives/2024/index.html","3dd294a306d92da150dd63227a7d496f"],["/archives/2024/page/2/index.html","94c83842431aec1ad82cbc551168346b"],["/archives/index.html","7065a1e96540ee330ffeb215a632ce84"],["/archives/page/2/index.html","27ac771204529950a02cfff6f037f0e9"],["/archives/page/3/index.html","c6b1f0d3ff2fcb381d86fb606c92f5d3"],["/archives/page/4/index.html","fdc12d4a72155a24c5d4601e8c42ef22"],["/archives/page/5/index.html","39da4636126d5cd4714f9bebff51e5be"],["/archives/page/6/index.html","df39d11d50db3217f0d7dc34342315e3"],["/categories/index.html","570a0d362d50caf1f4936cfc04d145ec"],["/categories/spring系列/index.html","f0082b7588ae4b4987313b27b0f75553"],["/categories/前端学习笔记/index.html","f24c9ee4067aa114c0a9f8f3a23dba53"],["/categories/单元测试笔记/index.html","fde5f4a2ad628d7b1f361ebdf80c5c6f"],["/categories/安利/index.html","dfc442b3e3ab1b42f5e0b7408f70747d"],["/categories/工具类/index.html","6aa41b85ebb5fccdfc3d54be5f7936b5"],["/categories/日记/index.html","9290aaeed111a538b4ee32fe73546970"],["/categories/笔记/index.html","6ac9cd3f4f7af1c568cb2ad7d1ee34fd"],["/categories/笔记/page/2/index.html","a892db8919479de3174e0bcd8c70c22b"],["/categories/编程技巧/index.html","dabcca51056647185cfd2e6df2d1393f"],["/categories/编程技巧/page/2/index.html","f4c69f6d7ef2244e9e78555fbe5f389f"],["/categories/自动化测试笔记/index.html","15afeab6da03c5375302f03eb1e53cbf"],["/categories/计算机知识/index.html","a5af16b43505633a06602979b3b7a39f"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","9469a7058251c7c8b3a050b4f6fa2034"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","73993672f170f0413181d7a5d0ce79bb"],["/page/2/index.html","5da5fcdcd5bd6139e893ae94e8843c99"],["/page/3/index.html","49d036bccac99a01b9488354438a95ed"],["/page/4/index.html","030ca6f311f1d590f56a4fc991f13cf7"],["/page/5/index.html","755661293ee723b99932adc6bed691af"],["/page/6/index.html","3f930c3958b77ad0a8e531473d9871d8"],["/sw-register.js","074aa2bbad525a23d977d646a65fb3a2"],["/tags/2023/index.html","795df36b4ad2b6e80562b3513603cff5"],["/tags/Docker/index.html","75217afaf6789b1bbaff1b453d33f19c"],["/tags/Git/index.html","5665fa68908d849b31ac4caf939fdad8"],["/tags/Grafana/index.html","a1ac612cd49919896c645341edf684fc"],["/tags/JSON/index.html","4b33116668eae2938ecddc7ef3a40d20"],["/tags/Java/index.html","011787e255469416f2694471acba91d6"],["/tags/Java/page/2/index.html","98c507e5f57a9334bcea63fa54039273"],["/tags/JavaScript/index.html","913c1878dd94e6e53d3f526bd767c80e"],["/tags/Linux/index.html","bbc80b930a4b5a0a44c28e722e339765"],["/tags/Prometheus/index.html","a04447b1f9654b4827940d454d3ba1ad"],["/tags/ResponseEntity/index.html","e3cffddb297f3993bb073a261793f7c2"],["/tags/SSH/index.html","6ffb47d161cd4b398103a006e3613ca0"],["/tags/Typora/index.html","33320e1042d64567c5e6703a7bb9e207"],["/tags/cAdvisor/index.html","bbdd5219fc3b2bc21e28c0a0228efed0"],["/tags/frp/index.html","766cf51eb37ff16b8e53470092af3d5b"],["/tags/harbor/index.html","79e792accc2f77af41024a332c633e15"],["/tags/hexo/index.html","2d25753cd2c7dd8ca29276af3d265e7a"],["/tags/index.html","2b5daffffe706b7c1ace544b40c3d669"],["/tags/javafx/index.html","58ac45d2568d74a67618b0a1c26e4ad3"],["/tags/java线程/index.html","34ff7ae8399318b3814caea74772577d"],["/tags/junit/index.html","3f010a96df55caafdccd7ebc5afe14d6"],["/tags/lambda表达式/index.html","3317bfb773e6b0714425f6ea7e0317ce"],["/tags/markdown/index.html","60788cd0825abd9e612b4d45bc5f9310"],["/tags/maven/index.html","56c84b73514f3acb852c79af221a504f"],["/tags/mermaid/index.html","15e6c4f910d26ac2701ed5e32504e3c1"],["/tags/python/index.html","44474b16c3b1d197e4f48b7a375b166b"],["/tags/selenium/index.html","46bc23d92fb759d3f869a96b61fad2fc"],["/tags/servlet/index.html","61907c2b487c29d072de31f05b96d4ef"],["/tags/shell/index.html","5889e72a665963542f118c57e2ab3709"],["/tags/spring/index.html","80a53ab5a6259a838c994f142227a763"],["/tags/springboot/index.html","bb6ef4a5883f112ba8ab2e0e6b7c1bbd"],["/tags/springmvc/index.html","960553d1bec4b310a71f6d0322eca6a5"],["/tags/spring注解/index.html","7ba0c4b6327de3f3b0ba8510c6f006ec"],["/tags/xmind/index.html","8f3c3932556e79681458e0b9b1620cac"],["/tags/分享/index.html","cd3c6ccf3a75aca3715b18b33e48bf61"],["/tags/原创/index.html","b069a6c30d4f57cae784fde909fd454f"],["/tags/原创/page/2/index.html","1f089ea5c4afcf9943236f5e51eb2df2"],["/tags/原创/page/3/index.html","8f0a90a13912110c6d33e48854ed509b"],["/tags/原创/page/4/index.html","d6f9fd208bc9ec929358cadb508c000d"],["/tags/原创/page/5/index.html","dffafa139c5ac3886f6e00daa5ae097b"],["/tags/可道云/index.html","e298f73300aaeb852466f60550a2f039"],["/tags/年度总结/index.html","5a8513ca457f1845f7ebbbcffc3b16e5"],["/tags/思维导图/index.html","225fd85349a7ed375edca66cf490ba07"],["/tags/暑假工/index.html","ce6ab0fdd3ee257b711dba3bfb2a5d3b"],["/tags/电脑技术/index.html","af0b9b48194e0a469bb071e51670af04"],["/tags/破解/index.html","886269f168e766431cbf7e1f2aafa76e"],["/tags/计算机/index.html","c9e063018cdc1d14e3966e27d005d06a"],["/tags/记录/index.html","f4b454e9fb85fdbc6189c6617c67d45b"],["/tags/集合/index.html","299d3d97a5276e81348420f4eab4a1bb"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
