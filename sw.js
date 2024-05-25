/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","a5ad28ef3ccfee2b5d105aa2366e5c40"],["/2023/04/28/Java/index.html","79fd8af731327c18d39eea592a753bc0"],["/2023/04/29/Mermaid画图测试/index.html","c4c8aa0b319200741b982c7cabdedd3d"],["/2023/04/30/hexo的部署及SSL应用/index.html","edfdd95fffec113086ee80145ac4532a"],["/2023/05/02/javafx使用maven打包及运行/index.html","413136ea504c9b150ec7656e71a09495"],["/2023/05/02/安利几个好用的网站/index.html","5b4317eb38792c9969e79d19ff10be0a"],["/2023/05/02/运算符级别比较/index.html","aac402f3dbbd7315222f6ae525721054"],["/2023/05/02/集合-Map/index.html","96db226e9c3ec0f524b3cb0fff52c9c2"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","d4d3926915dbe98db83b3294f2f3cbe7"],["/2023/05/08/frp之内网穿透/index.html","c183519e4cd1bad5fae9ca02b1db7d26"],["/2023/05/14/集合类的继承及实现概览/index.html","54c54943da59a0772733864b829bc82c"],["/2023/06/13/湖北飞young算号器/index.html","026c9ffb0f61a14940a74e4155a3a34e"],["/2023/06/17/windows之重装系统/index.html","fe26198551d3981709ed5393100faef4"],["/2023/06/28/记一次打暑假工的经历/index.html","ee03a79318b6edfa0793160e5c57f087"],["/2023/07/08/maven的使用/index.html","079205ce33e262e5a7e8303055230c34"],["/2023/07/11/Java-lambda的方法引用/index.html","7527dca16c50e9e52eee6b218f53ce69"],["/2023/09/04/Docker部署/index.html","aebc21e139a4316af48044c4aae04d34"],["/2023/09/05/Docker的使用-壹/index.html","c3d7c7b96a5598f2e16a53434830ad9d"],["/2023/09/05/docker的使用-贰/index.html","8d121708c4fa283649446b90d5add81a"],["/2023/09/08/Docker的使用-叁/index.html","70cc46b54bc7bf8cdd85c603d7b675e5"],["/2023/09/08/可道云桌面搭建笔记/index.html","dbbc1712a402576dfdf89fd652b1beea"],["/2023/09/09/Win至Linux的免密登录/index.html","d1edaaeabd75d0da133443f745473457"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","4f1bc9b0e76e2b07a401efff6d6d1d3e"],["/2023/09/12/Docker之nginx的负载均衡/index.html","bfe557394b8eadca3b255297da068da8"],["/2023/09/12/harbor本地仓库搭建/index.html","ea4f2d01bd4f307d7c3393da383ce26f"],["/2023/09/15/Linux2023-9-15作业/index.html","341f26c923032374efe30577521a4e75"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","a8faf47795e24049c31a3e1be5e6cc0c"],["/2023/09/18/Linux2023-9-18作业/index.html","36f9ca224501772dd90a6328b9536de5"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","8abb224652c7a72b1bf8be3775ceb14e"],["/2023/10/26/Git同时部署多个仓库/index.html","11a0a302a3bc17dd5e03382ab0ff955d"],["/2023/10/26/Git的使用/index.html","e96d522ca95c759b265d3f8946a68d2d"],["/2023/11/07/Typora的破解/index.html","3255c85ed107d3f90a9a1af1f5c38662"],["/2023/11/09/Xmind破解/index.html","b919f8d92dfc0125a6d0af9bf552bb0f"],["/2023/11/22/JavaScript笔记/index.html","99fe0b0df493f42ac0d47d5b12697a96"],["/2023/11/27/shell脚本笔记-2/index.html","2bce5cc7dd3621c77f3dd54d872b65e1"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","86f379c8f30b7d73f869e2adcdf3eacb"],["/2023/11/29/windows重装系统重制版/index.html","5c9b595f5dcc6c5046ef1c478d1be1ac"],["/2023/12/15/shell脚本笔记-1/index.html","4f96a3d2b769f1a9ef684bf08ed4a813"],["/2023/12/16/shell脚本笔记-3/index.html","0951dfd22e3d17c5d650c674b4c1676f"],["/2024/02/09/2023年度总结/index.html","8906731b777e488308ea9f2ab6dcdb7f"],["/2024/03/05/Selenium-的使用/index.html","eda69b29a7b371a3018b6f0aa4bc452c"],["/2024/03/11/JUnit/index.html","49c43df49ae75be15fb694ac8b5f8702"],["/2024/04/03/JSON/index.html","754212b16c4cd9e32b523114cf080750"],["/2024/04/16/JavaWeb/index.html","7093495273bdfc80a8ba0bf6ae5653d7"],["/2024/04/16/SpringBoot基础/index.html","3a738466713e74f096d6b771082bc81a"],["/2024/04/16/SpringMVC/index.html","5197659d17931642bec45306d49a8b5b"],["/2024/04/16/Spring基础/index.html","3a39d01ea5229297c4329040eb32c64a"],["/2024/04/16/spring开发注解集合/index.html","6bf54ec9dec21e98583fd390e17fd59e"],["/2024/04/22/Spring-ResponseEntity/index.html","662bea60affeb7817fea1e5c1c41e1ea"],["/2024/04/22/springboot多模块开发/index.html","ff6e7cb0fa0bfdc0ea0779e5b09a7b2a"],["/2024/04/23/springboot全局异常处理/index.html","a8a22e6aea0e7a036e6bf67764a08f09"],["/2024/05/06/MySQL-1/index.html","d64ef7f3f420ea176c9b680446cdccef"],["/2024/05/06/MySQL-2/index.html","7e0fbf11ea123bd046e9f778194ff13b"],["/2024/05/09/MySQL-3/index.html","a6b67c2bffdfaa805301b1e58f14849b"],["/2024/05/13/MySQL-4/index.html","5481b9c32585e9081cdd9d2cb13596a7"],["/2024/05/14/MySQL-5/index.html","2370e92ba53c363c820517743dd8d836"],["/2024/05/26/MyBatisPlus-1/index.html","4e1c9b503f997813db0e0e6ade63dd9c"],["/404.html","44ea1ed25bf53e2e2a9a12bbe0c44371"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","9c95003b1fbc2ce37966c3f29c6fc32f"],["/about/site.html","1acebec7ab592a816cca7cf8737ebe10"],["/albums/Test.html","cad89d2b78405f7402ae89e9cc56f44c"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","c97b2894b06d603b9d8f1bf3b1264780"],["/albums/sunset.html","91d0c5eaef922c2053fd941b91d018aa"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","fae4f7b16d3edada7bb0e280204cfd42"],["/albums/日常.html","1ef27bba8631603663b8493b73af720f"],["/archives/2023/04/index.html","c94febcdfb454e0a0950ff0236506228"],["/archives/2023/05/index.html","42a2d6f74e06526f65ca534b8636258f"],["/archives/2023/06/index.html","cbaace8e544f6c7f0b9d449e85731ad8"],["/archives/2023/07/index.html","7f4a05816e39983f2bd8485abba695d1"],["/archives/2023/09/index.html","cd28ffa50bfb4c98ba4073791b10ed1a"],["/archives/2023/09/page/2/index.html","a24d3a9106ea970b7e5ed65b8f1c2351"],["/archives/2023/10/index.html","8a51b6cdde9733862f29c3d26bd804e7"],["/archives/2023/11/index.html","c94b75e3271b87ed42d62dd2b1962d9a"],["/archives/2023/12/index.html","66f1f28284ea81f3a97672def443e71e"],["/archives/2023/index.html","42e529c338a4651fefc09c4a9d90c540"],["/archives/2023/page/2/index.html","5e32c8041830e23d47e1b0f77586f345"],["/archives/2023/page/3/index.html","99aa5841cb0cc90cabac155c482f9ce4"],["/archives/2023/page/4/index.html","ed3479a1dd35c456b16a9514a631eb65"],["/archives/2024/02/index.html","3002f784bb5211fbf09dde02c08c8660"],["/archives/2024/03/index.html","edda9e00416b5e2d379edaabecc85fd4"],["/archives/2024/04/index.html","9eef6c773c2d0f21645cfe416484acea"],["/archives/2024/05/index.html","ea709263fa6e3dd28e5b5c34514b89ad"],["/archives/2024/index.html","7d7586f4d62f13f1baf46d03fe2f6aa5"],["/archives/2024/page/2/index.html","14256ec0d5453a421ce1317b711e273d"],["/archives/index.html","5c91a3b09ed5e9305c1e300f359d09d2"],["/archives/page/2/index.html","00d97744aa3d8f349f57d18022b956ea"],["/archives/page/3/index.html","4cfee464b1ef9a6613f77a95c7e00bdf"],["/archives/page/4/index.html","b711c4780f18770648568be3c66094d5"],["/archives/page/5/index.html","cb5e3222cd165889ccbeefc9de59a93d"],["/archives/page/6/index.html","9fbb0b8eaf32f4f2509de6d9e0f8ec30"],["/categories/index.html","f852e242d0f56071346cd439cd548a05"],["/categories/spring系列/index.html","2a66fdeb43903bd8c33cce2a1627b433"],["/categories/前端学习笔记/index.html","8d338e2f31966988b47cfbe0cfebfe50"],["/categories/单元测试笔记/index.html","249d4c7fc2d2dc869c6240bc0680b8a7"],["/categories/安利/index.html","4507117a0ec3fcc5b21e87dee1c94f16"],["/categories/工具类/index.html","2642f1504ad28ce6a57d48f99027d7b4"],["/categories/数据库/index.html","64e109de66acefea556db8d609b1c1e1"],["/categories/日记/index.html","9f7bffa07904ff8d8b5fb0a0583256f8"],["/categories/笔记/index.html","7d67692cd510a25843718797c0be625b"],["/categories/笔记/page/2/index.html","be7530ed7a9a1dd791adaaacb13d0bb4"],["/categories/编程技巧/index.html","2353b2d87a2a603462cdcf5bfb197186"],["/categories/编程技巧/page/2/index.html","4ac757bf1fbb97db4576ac33f8f886eb"],["/categories/自动化测试笔记/index.html","8693fd1803a3b78ac32e7ec015c6aa8d"],["/categories/计算机知识/index.html","b8789b6bf14e2a037a5039cb5078ca56"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","307568652f433247de351baed9d67899"],["/images/brightbj.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/darkbj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","4dda364af0ba93906eb60c94529d7757"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","94b1c1f488b2f2eac2929f51657cb568"],["/page/2/index.html","e8c06136aa4d26c49c0209e15cca5f7c"],["/page/3/index.html","7a25b19817613c2d77c02bf444a59ded"],["/page/4/index.html","d655c95ea200f0f90c2af6c8205f039f"],["/page/5/index.html","fef252ff1323ed2806e7104b5ba98c86"],["/page/6/index.html","fabdb409ee249d1161db2dce9960a370"],["/sw-register.js","06abc56e915a56a58bd7d897476fcea3"],["/tags/2023/index.html","21047f4e086b2069db51717c45151cf2"],["/tags/Docker/index.html","b30e5c41b1a1bc643be50e6433f269b5"],["/tags/Git/index.html","3f16e47d9044c792c2cf860260612514"],["/tags/Grafana/index.html","0e5c829cc16a73b899d0a2dfb5bf1475"],["/tags/JSON/index.html","ca233c26390fbbb1595e8c61401f2fca"],["/tags/Java/index.html","1bf62ca9e422e62b803d3ecf903501ac"],["/tags/Java/page/2/index.html","99b45ac442fff1a48beaf01a3ef3bbf0"],["/tags/JavaScript/index.html","c2da17b4394a1fe97dd5f757c2e927c9"],["/tags/Linux/index.html","e84d312f53c86b647f5b56433f328c82"],["/tags/MySQL/index.html","3241d74914258168061a26a88cd7c772"],["/tags/Prometheus/index.html","010cd7606d48b942496b527ba011748d"],["/tags/ResponseEntity/index.html","7d0c54ecb28263d9fb0b5f03ec58ba81"],["/tags/SSH/index.html","5f24c175779679eae8b7d589e1fb5695"],["/tags/Typora/index.html","e764af3d2f156b22efd6812c77ff0fa0"],["/tags/cAdvisor/index.html","6e5af9aea196aaa41cc06a700fcb84d3"],["/tags/frp/index.html","cf54a0707004f7cdf54242bacfb1a3e4"],["/tags/harbor/index.html","d5004403503ac6da3927f2ae0d7e3646"],["/tags/hexo/index.html","23eb140f33defbbdfb6a2fdc081ad9d5"],["/tags/index.html","ee5eb633a7ff3c2c9e0e6f43769c7d1f"],["/tags/javafx/index.html","fe2a27da4e87225173fe832fddae1f56"],["/tags/java线程/index.html","d105310ccd3adeec9cec5226c310e0fb"],["/tags/junit/index.html","730342b25ca6063a6378dfc8d9c987a4"],["/tags/lambda表达式/index.html","fecd88f3e59ce98ae7a7987b32144886"],["/tags/markdown/index.html","73043684e93038d113ba763bc40a19c7"],["/tags/maven/index.html","81a4feeb9658d9465e4248e8076e8d85"],["/tags/mermaid/index.html","5f156d689be50db9299eea2c74c16134"],["/tags/mybatis/index.html","4d8342a78d00b362ff424acc8be8d024"],["/tags/mybatisplus/index.html","397c978ad0e85d5bf8428ecfd5297eab"],["/tags/python/index.html","54b12fa4be8d639d784ea4a988494d08"],["/tags/selenium/index.html","7a6d3cf365d666d4d3fcb9b4f245a94f"],["/tags/servlet/index.html","bf541f018416ad1c00da607e1a9a5ffe"],["/tags/shell/index.html","0f559fb05cd2d49bb74a520383118485"],["/tags/spring/index.html","13febbf37a3bbd1049398160d78a7e0c"],["/tags/springboot/index.html","6e18359c0a395eeba4b8dbb85c654886"],["/tags/springmvc/index.html","5616d739aefc72dd99fa6649a594b31a"],["/tags/spring注解/index.html","76a1c42c50f2c77edce482e2b1790f27"],["/tags/xmind/index.html","eb67cced7dc20908b4b221c8d59fc69b"],["/tags/分享/index.html","b64c0baae26aba0c65911d7ee664105d"],["/tags/原创/index.html","9f5eaa7721bab7f492cd7a34f63a3019"],["/tags/原创/page/2/index.html","08b26facf76d75dcff932b5bf0663afb"],["/tags/原创/page/3/index.html","835024e7e4e5725ccb0ea788cead9758"],["/tags/原创/page/4/index.html","09ce9853433e1eefd219606dec6f3b2d"],["/tags/原创/page/5/index.html","b737e1c9919a8657d54885ff4b71f22b"],["/tags/可道云/index.html","a2d83ff67e884f18a66ae06e3193af45"],["/tags/年度总结/index.html","d8f1a072c148cbae700dcf4d8f922053"],["/tags/思维导图/index.html","1ea20ca3f86888b01a4591ec8f53b945"],["/tags/暑假工/index.html","e541e210e5186ac73ece39e775acd229"],["/tags/电脑技术/index.html","eb8033cf49797ae4df727845c7e727b8"],["/tags/破解/index.html","c358f66b03d55817d40a7326c900ede2"],["/tags/计算机/index.html","4be112a9724f161b47f6a51c6f273b7f"],["/tags/记录/index.html","e279fcd426ab2d4c10b1e626ef0039e7"],["/tags/集合/index.html","5681cc616c317066166bac053d909225"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
