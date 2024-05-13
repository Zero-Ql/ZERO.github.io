/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","fb798991cb8d67fc5da8d64c6abc48b2"],["/2023/04/28/Java/index.html","5c8ff4bdc044849351c91ea12f94e153"],["/2023/04/29/Mermaid画图测试/index.html","76e4d143e2a4d2a07271886797b4de26"],["/2023/04/30/hexo的部署及SSL应用/index.html","777b028feda8b2a3ab0051fe88365672"],["/2023/05/02/javafx使用maven打包及运行/index.html","43ccd4d0ccc1ad2b12dfbb5212689767"],["/2023/05/02/安利几个好用的网站/index.html","f8fbce02f2e7ead03f9e0802824a35ba"],["/2023/05/02/运算符级别比较/index.html","a2a224f5290f8584c2f50a3f6371e960"],["/2023/05/02/集合-Map/index.html","e8c5c6458e0d41b813ef288cc064ab5f"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","a6e76703bdfc1a390e4f52a2eee4a9a8"],["/2023/05/08/frp之内网穿透/index.html","94f2b5ade94cd77ac1d1f32bae3e7ad4"],["/2023/05/14/集合类的继承及实现概览/index.html","f84a966a0883529076ca8bbb639e35f0"],["/2023/06/13/湖北飞young算号器/index.html","f74f91ef6d007d4cf5bd058c34943fe1"],["/2023/06/17/windows之重装系统/index.html","ac9f905641ec379bcb9d399ae7c4ed55"],["/2023/06/28/记一次打暑假工的经历/index.html","14a4a62851dba2a2f98fbe4743d0c58a"],["/2023/07/08/maven的使用/index.html","edcc09b14de3def6167ddf28c65a190f"],["/2023/07/11/Java-lambda的方法引用/index.html","d1132e0188636562be5a97a4b930dd81"],["/2023/09/04/Docker部署/index.html","5dcfb546160778c61535f8c967e01079"],["/2023/09/05/Docker的使用-壹/index.html","b74896d4f0134b7921fb81fd66d57afe"],["/2023/09/05/docker的使用-贰/index.html","7ade8806543c7af062f84afdbe713495"],["/2023/09/08/Docker的使用-叁/index.html","275174a87c3298e28195210c7a091905"],["/2023/09/08/可道云桌面搭建笔记/index.html","7e01b7fc021737b25d8fbd2128a6d043"],["/2023/09/09/Win至Linux的免密登录/index.html","00a6e41b4addd564812bd59f0f82a134"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","230a19840c7342558c4e4381acb60e37"],["/2023/09/12/Docker之nginx的负载均衡/index.html","3ae511a1d315acab14b92066aef97e67"],["/2023/09/12/harbor本地仓库搭建/index.html","e4470b64605b44b5e239ebcb14538ea9"],["/2023/09/15/Linux2023-9-15作业/index.html","6828774fcd2c7047954a58153ce86de6"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","b6bdcb7006dab49a5cceca9eb35bcc5f"],["/2023/09/18/Linux2023-9-18作业/index.html","6f7561c7ed91539b043304eb9bcbc779"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","43ca0db093a471d1eff5fd8d8963f974"],["/2023/10/26/Git同时部署多个仓库/index.html","e674c4d77c8830e797a77388affd1c13"],["/2023/10/26/Git的使用/index.html","cff0af637b74ee8396d0d46f931add51"],["/2023/11/07/Typora的破解/index.html","1a854f2828e2b1f46d5adec00eacf01d"],["/2023/11/09/Xmind破解/index.html","b819e63d914d35f8ebcf3c143aaa06c0"],["/2023/11/22/JavaScript笔记/index.html","8262f61c545e95682d4d64bf50fce9b1"],["/2023/11/27/shell脚本笔记-2/index.html","38ec523bb0801d2ecafa7d089d4d6ae2"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","e3220cb9d0fba415e26613be52b6f49a"],["/2023/11/29/windows重装系统重制版/index.html","baa3d3307d813dbd7b97ee63b971f6bb"],["/2023/12/15/shell脚本笔记-1/index.html","76c6fef897770c12ba01ec7c8b043d43"],["/2023/12/16/shell脚本笔记-3/index.html","82158666bdc66b46af22acf16ff9e431"],["/2024/02/09/2023年度总结/index.html","6899bc6e98e13d3be8b8d99b79fac503"],["/2024/03/05/Selenium-的使用/index.html","6780fdf172a3e38e7ca25f7bc465662f"],["/2024/03/11/JUnit/index.html","f09d61ef079b41977e1d06240d8330dd"],["/2024/04/03/JSON/index.html","092373e162a483737f03f3e13c0634c1"],["/2024/04/16/JavaWeb/index.html","07d474cfe863cf4cbf2696dcb34bb4ca"],["/2024/04/16/SpringBoot基础/index.html","c43ed940ebf90f8fe4b68d1b167c2b4e"],["/2024/04/16/SpringMVC/index.html","be55e635555a90b520f6f7d2a85a2778"],["/2024/04/16/Spring基础/index.html","f001570eab8b48a8edcc62b6b767fe90"],["/2024/04/16/spring开发注解集合/index.html","73b49e0602e5e58e274e21ee5acdf284"],["/2024/04/22/Spring-ResponseEntity/index.html","8379cac9b1178eeedcfea20deff85f07"],["/2024/04/22/springboot多模块开发/index.html","254de67359c5a80c8003d3d7b9ac5de2"],["/2024/04/23/springboot全局异常处理/index.html","33f01d9b195e876e8698338e91b80a74"],["/2024/05/06/MySQL-1/index.html","44cb2c86ed24208b3a4b0aa4ee103961"],["/2024/05/06/MySQL-2/index.html","c4394a80bbfb0a8f4a5f7c4294e1422e"],["/2024/05/09/MySQL-3/index.html","51c288e0e2b0ce8ae964bb2631d06a37"],["/2024/05/13/MySQL-4/index.html","ec2f1623eeb347514058cb8fc276487f"],["/404.html","11d538fcb5984a05bacbcd57ff9819ee"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","dece1181b59eab51767bb75918086b71"],["/about/site.html","9f4672861155f17c645975afb0421384"],["/albums/Test.html","624d9c0bfcae2eeae7d80d4a97d43a22"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","7945e22c3b1de68ed2176919b0de4421"],["/albums/sunset.html","b4e10d651296557450cc886bd875d6bc"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","e3018289d30339146a703284087e7f74"],["/albums/日常.html","82701d0f7956fbb9fdef235405cf4678"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","7c6bdceda9ecc80bd0e02bba9a97b46f"],["/archives/2023/05/index.html","41c99b85087d23b2b8b85cbad0c0d9ea"],["/archives/2023/06/index.html","7af7f2bd4a7f216c048069a5b1aa69af"],["/archives/2023/07/index.html","709c19873119afd24744aa44c478e432"],["/archives/2023/09/index.html","982597a23396ebdab7af87db9ad86851"],["/archives/2023/09/page/2/index.html","d3cf3fea19cefe6319a187bd01af4968"],["/archives/2023/10/index.html","73c30c07ab1f747a961ee69ba6a84b26"],["/archives/2023/11/index.html","4bfc7b474ab2273128ecbe136f12a81b"],["/archives/2023/12/index.html","017c8ec8879b8a0467a4893a4cebc538"],["/archives/2023/index.html","add9f5636b0b0b75f30b13162d111636"],["/archives/2023/page/2/index.html","7afdb39c66f3b700d5a982b934c5e92b"],["/archives/2023/page/3/index.html","219af7f443552a5d359161da47b2c948"],["/archives/2023/page/4/index.html","c9e6ef01c81c6906df7125e4b21427b7"],["/archives/2024/02/index.html","77a9929156d1fde89bdf8b05defb4fe8"],["/archives/2024/03/index.html","74934320b55f12d1ec020703d37327f4"],["/archives/2024/04/index.html","5894496981c7a5eb84940a42aee3a0ac"],["/archives/2024/05/index.html","d764928ba168d6debea474c7d7ca3c7f"],["/archives/2024/index.html","31d4e2dbf9201f3a234e07cbb1d36894"],["/archives/2024/page/2/index.html","66ee9e0f169c2413877c201e0caf9b9c"],["/archives/index.html","5bd4e07c0aa858c0a1d356d2c3b579a7"],["/archives/page/2/index.html","51c776f730bdb07bda29d8978515df6a"],["/archives/page/3/index.html","384ab87af59e91d62854678bc812e8a8"],["/archives/page/4/index.html","1475e8a07e533c16ba3d9ba4cf4280fc"],["/archives/page/5/index.html","87a7cdeaa183be467e4d5fd532de81ac"],["/archives/page/6/index.html","13102f4ef1d19058c407ac08303ca81e"],["/categories/index.html","b202b93c2f0d2b9237f565542948f0a2"],["/categories/spring系列/index.html","47cc732773f63be4994a93115dc85e43"],["/categories/前端学习笔记/index.html","3954e544ee38b2b58cdfe2ea9c96b6ee"],["/categories/单元测试笔记/index.html","a54c1714159b854d06321c58ee6504cf"],["/categories/安利/index.html","d2c14c8f8e8e2f1ba312f266daac192e"],["/categories/工具类/index.html","d96cc609fa4063be2ac6a026b912b450"],["/categories/数据库/index.html","7f35fdd4c9359731b721fc064fed4ab9"],["/categories/日记/index.html","595fc3387c46625c3fef286f9cfb1059"],["/categories/笔记/index.html","415acd471d5b5f80bcbbb313d696effc"],["/categories/笔记/page/2/index.html","e76c6d25ac761151648d885a6ab7be78"],["/categories/编程技巧/index.html","5b2b1bd9af0510ef9fe123f05acd95b2"],["/categories/编程技巧/page/2/index.html","116f34a7159b314fe584afde99804d69"],["/categories/自动化测试笔记/index.html","765d20ad669ef9ee6b9edd1e2fd356ab"],["/categories/计算机知识/index.html","e200b571ebf2b4b862039f66f94dfe72"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","65fd2bc9b0e89ec5134b419f218c71e9"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","865a607cf40d6092ff8a7e12f58f4ac8"],["/page/2/index.html","d1cedfec51e3d23099d320d64b3305fd"],["/page/3/index.html","a80b28f8e19f4a648b2c2111b85feb0d"],["/page/4/index.html","90417f12f19686fb13e231a79f744195"],["/page/5/index.html","bb7069bbf7e9ce2d0b632822591cdd12"],["/page/6/index.html","cf4f07e25dc32b0f183bd51f356504fd"],["/sw-register.js","9f470bbe2ea9d0c412f98b63ee61506f"],["/tags/2023/index.html","80d8fb21c45dc31a680efc5fc196e69e"],["/tags/Docker/index.html","1bfd0987760455f043bed00b66e5798f"],["/tags/Git/index.html","a28c0810a09b416ad9d49d21038b4949"],["/tags/Grafana/index.html","f6c8e05df12dda250e7e057e158b5a50"],["/tags/JSON/index.html","7f623dd276026575b2a3883773a93e82"],["/tags/Java/index.html","7a4635cb546588850f3dc7f637f1d673"],["/tags/Java/page/2/index.html","f0c3a0cf016078b803d28e55469932d5"],["/tags/JavaScript/index.html","c5a3b849419a755eb6f50656a79ae288"],["/tags/Linux/index.html","1a42e291a39e94603c7f4315ae22970b"],["/tags/MySQL/index.html","c3ed8be4e40a2c2c93b0b7dc24a83818"],["/tags/Prometheus/index.html","9df27bbac03613359eabd73a431047c7"],["/tags/ResponseEntity/index.html","10c315c8dfdfa8809c5f54e8488171db"],["/tags/SSH/index.html","edf119de2534b5d837c75f9d5dfd277d"],["/tags/Typora/index.html","730a7c769f9aa0571e73d8681628e852"],["/tags/cAdvisor/index.html","2dd7859321da21f998ecbfd7b81716d1"],["/tags/frp/index.html","9bdd0e7449b10a84f05e306f62dbf4a5"],["/tags/harbor/index.html","499f409681b1fd474a397596e0838374"],["/tags/hexo/index.html","d8025d63575bcac8f327d92151e6b1b5"],["/tags/index.html","72308aa2dc04c854ff910d09d2c1e769"],["/tags/javafx/index.html","a57825529455d832f1a091dc954a13a3"],["/tags/java线程/index.html","da691a7c7e2dc59de3e72ad97ea1a6de"],["/tags/junit/index.html","b51518d01b21c6460a932f3c2c447da3"],["/tags/lambda表达式/index.html","ee7002d2331144336600da0ed7e0ba54"],["/tags/markdown/index.html","8bec51278c962c87cafee08248121bbe"],["/tags/maven/index.html","aab59f1a84e0ae566ac4c6d07a830025"],["/tags/mermaid/index.html","422fd574a74e14c73d24b998e8ad75b9"],["/tags/python/index.html","b5432e6d3c461cf22432dbc6fcaebf94"],["/tags/selenium/index.html","1ac1859ee045b88e1875d61f4d6a4859"],["/tags/servlet/index.html","6284337a54552e9e5c51ca5069e71059"],["/tags/shell/index.html","ccb96a517494256c0fa57c57d7603eca"],["/tags/spring/index.html","085049f131c798de4ee73e7473665d8c"],["/tags/springboot/index.html","7a49d61d1ff88aa0ef2a16f54bc12b0a"],["/tags/springmvc/index.html","7e73b95c00c112a009b798209651b71b"],["/tags/spring注解/index.html","6960a63052371bdef22c68c605238654"],["/tags/xmind/index.html","d483fbdcf0b04f9ed3bb12deaf4ed454"],["/tags/分享/index.html","31b320507a110f945f8804fa8e46f3e7"],["/tags/原创/index.html","d4be56b2ae3c7562a892383be55179f9"],["/tags/原创/page/2/index.html","22e9b41989bc4fc6cc98c805634569e3"],["/tags/原创/page/3/index.html","ee08b9a90e9272d64064afd18d48b5b9"],["/tags/原创/page/4/index.html","1e4285a0dbc472b836bd62887669db34"],["/tags/原创/page/5/index.html","f6656f000d6bf49a4f896879ddf25ebb"],["/tags/可道云/index.html","7e2a9ebf6f5205bf8403b33fc3fa6e92"],["/tags/年度总结/index.html","b17bf76503f215410830e79be4cccbd1"],["/tags/思维导图/index.html","157942be90974a0587cab77bc1e850da"],["/tags/暑假工/index.html","9cbbe146fd60232bb05f07382d954824"],["/tags/电脑技术/index.html","4385ea440089452ef25525efd607a797"],["/tags/破解/index.html","f8c4610e65e6cd8dfbd37c4c91f9ff3a"],["/tags/计算机/index.html","b6f1b537546ceb2df4acfe0b7c263c1b"],["/tags/记录/index.html","2cbdb50565f30220b9dad3bfa7ad6751"],["/tags/集合/index.html","bebd1ea4c058e85c1a544a91c85e293b"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
