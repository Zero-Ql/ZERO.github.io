/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","ab088a1fe0f44608d04badf31395e0da"],["/2023/04/28/Java/index.html","e664219c87f778bb2a843f2d91c4c035"],["/2023/04/29/Mermaid画图测试/index.html","67bc8bba7241b3de21d24ee2d05187a9"],["/2023/04/30/hexo的部署及SSL应用/index.html","919b75aba285f1ae9392b7a6a9e189e8"],["/2023/05/02/javafx使用maven打包及运行/index.html","a52e51cac2cdfe5427c9a2d4f028a7f6"],["/2023/05/02/安利几个好用的网站/index.html","0348641f49cd2b4a7c66ac59f5665e63"],["/2023/05/02/运算符级别比较/index.html","13aeccd13bc38fc075416fcdfe58e950"],["/2023/05/02/集合-Map/index.html","922372c239d5bda5eb216d748ebf2e73"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","aa1ae3767f3126576504794481a3c7e0"],["/2023/05/08/frp之内网穿透/index.html","93552d4cbc412881ab248946bec9f0c6"],["/2023/05/14/集合类的继承及实现概览/index.html","42a4959167a6d6a73ab4a71c3d9ccd7e"],["/2023/06/13/湖北飞young算号器/index.html","4a25ad5c2803bbed7d985a1184650588"],["/2023/06/17/windows之重装系统/index.html","8780ca3280e86d3b4ad6e36c90603c8a"],["/2023/06/28/记一次打暑假工的经历/index.html","dd5b2aae4eec61bae22d73c490452bec"],["/2023/07/08/maven的使用/index.html","ceb11be30838653fac03ab4b2e7ab58b"],["/2023/07/11/Java-lambda的方法引用/index.html","35619351c1ff6e48f9de99cc742fb729"],["/2023/09/04/Docker部署/index.html","3c35acb364cf02fc7a9796069e669a0b"],["/2023/09/05/Docker的使用-壹/index.html","1e2d96db5005c08228aad882ce639f7b"],["/2023/09/05/docker的使用-贰/index.html","b5f9bbf4db0052e04c6f39df9c79dfaf"],["/2023/09/08/Docker的使用-叁/index.html","20baa4afe0b319c87436d1a151ea286b"],["/2023/09/08/可道云桌面搭建笔记/index.html","0f820e4f1b9e1543bd3a855973ef9e87"],["/2023/09/09/Win至Linux的免密登录/index.html","77e842050c5e1073fae3836e1d0e5a9e"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","71007f646e2e55b0afa944463de255c8"],["/2023/09/12/Docker之nginx的负载均衡/index.html","d3177a7079a54cacc0a94831cb4d81df"],["/2023/09/12/harbor本地仓库搭建/index.html","8e7104ee358649ca6955971f4bb9df1f"],["/2023/09/15/Linux2023-9-15作业/index.html","ac99e0148d94e400392ddd408217d2dd"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","846a4522efa30e5e3403bdd728753e72"],["/2023/09/18/Linux2023-9-18作业/index.html","65cd258e7146499f30261980f13c6f91"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","03b383317c5e152227e04b532e36e515"],["/2023/10/26/Git同时部署多个仓库/index.html","0e9f119210781a42928133fce11b3178"],["/2023/10/26/Git的使用/index.html","9657416be9bce605c99083037ca6fdbc"],["/2023/11/07/Typora的破解/index.html","c691b890f6f99be0c435d8ce7d62b2b7"],["/2023/11/09/Xmind破解/index.html","2c3d430c79f6c19eefe9512ed714ca7c"],["/2023/11/22/JavaScript笔记/index.html","a2dbe4bd6b2537573a60c5acb4fcfce8"],["/2023/11/27/shell脚本笔记-2/index.html","de1e6f257d6982d0561d4c72bb7773c2"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","4b7b4e7a6cd2686c651bb4273433288c"],["/2023/11/29/windows重装系统重制版/index.html","64eecf8e099df9b1c4abc201465382ed"],["/2023/12/15/shell脚本笔记-1/index.html","063f9648db6da3c0c6abd47a76bcb2b6"],["/2023/12/16/shell脚本笔记-3/index.html","8e21c870bb3e8612e1457abf1cf79f4f"],["/2024/02/09/2023年度总结/index.html","77b20e4c36a41e78f81fefce24436382"],["/2024/03/05/Selenium-的使用/index.html","fe4fc5b5be5105e31bb71619bf99b697"],["/2024/03/11/JUnit/index.html","f5120ee1f128c933d2bda49b0b56e91d"],["/2024/04/03/JSON/index.html","41b4982dd484af958f9da0d000392da4"],["/2024/04/16/JavaWeb/index.html","1b152728ee9c2216138898ee33c64ef2"],["/2024/04/16/SpringBoot基础/index.html","3613fa838a9a86118993b2856f28ce78"],["/2024/04/16/SpringMVC/index.html","fc58f654e287a56514b86b4094dd639c"],["/2024/04/16/Spring基础/index.html","c6d6d7b02db63920ea09015c35993c4c"],["/2024/04/16/spring开发注解集合/index.html","3e4a35cd68bdf7500d02dfca47673206"],["/2024/04/22/Spring-ResponseEntity/index.html","70d2bffa8cdcb1608177265978cd778e"],["/2024/04/22/springboot多模块开发/index.html","bb9d6e2eb1cdc30d3abc8e5d908d98e1"],["/2024/04/23/springboot全局异常处理/index.html","d90d9bfe5836812700435c4dc012507e"],["/2024/05/06/MySQL-1/index.html","66ac75c3cfaf31214781b69f06d384ab"],["/2024/05/06/MySQL-2/index.html","f0ead5ca085f13163b78df707f2a839a"],["/2024/05/09/MySQL-3/index.html","ca11b8134c9204d097095f368855e2dd"],["/404.html","2909bf41c62f2d4a0d96cddce35f178d"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","be893c1e817d2904d433217d92f49fe5"],["/about/site.html","ca640b6e0e66c7e8bef864f4c5a9b942"],["/albums/Test.html","f2b60565e0a8910586f36ea136278f0f"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","136b69ff67e2882ad8798fdcab5257ef"],["/albums/sunset.html","e78c3963f0381a3e611aa3edd1b05433"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","26c776d2c437f337c3209df43f4fba6e"],["/albums/日常.html","75e9b8c719a8d89cace8c0dc163bd323"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","05f8176a73b7c85b431274de75e95084"],["/archives/2023/05/index.html","a35f0a8314c739083a0544d356274dea"],["/archives/2023/06/index.html","8e6fd0ac53f8bd7dff8c52fcacd41749"],["/archives/2023/07/index.html","f5a88e01924d194b77e3cf11c035e24c"],["/archives/2023/09/index.html","5e7b43e6c17975283a4b960240df0817"],["/archives/2023/09/page/2/index.html","9678fdb67ae5da48e3d4dbfc13800561"],["/archives/2023/10/index.html","e019bec64781cd0b20ea6a02278f9acf"],["/archives/2023/11/index.html","24bee7b38412eee1f4a118b931cda388"],["/archives/2023/12/index.html","3439fe7a226c06eb6793c29a536b312d"],["/archives/2023/index.html","fbb9f4d11a25668b76031a28ba4cec08"],["/archives/2023/page/2/index.html","4b4dff3412590bfa6eb671890c3db547"],["/archives/2023/page/3/index.html","37b3008492539f5208bd950dbda1a123"],["/archives/2023/page/4/index.html","91bf83d4bd5cdcac36e38f46a8a4fdd4"],["/archives/2024/02/index.html","a5031ea7bc1b5a9fb615e64527a15371"],["/archives/2024/03/index.html","0facfd7fc6e1a95bb6f969684a166d5f"],["/archives/2024/04/index.html","210edde18a3ebc1956244aa58093b901"],["/archives/2024/05/index.html","38116838abb07ff442bf2d7bb865296b"],["/archives/2024/index.html","8a843cc538196744867b5d16c7f8cc9c"],["/archives/2024/page/2/index.html","0c9562db557053508c44ba930d9cb740"],["/archives/index.html","5f7a0e8c3d2cdaeaa48e8dd9ba7ab5eb"],["/archives/page/2/index.html","769e6d781cfafe3c3502ed9759e6be11"],["/archives/page/3/index.html","8956f8c9bfa7ae2a9fc71b3555405e16"],["/archives/page/4/index.html","78edca21fb48290e1c77dc5847e3d4e0"],["/archives/page/5/index.html","ce5887175c3d06fb74103fbeb65dd774"],["/archives/page/6/index.html","4d334ac56c0e9a9317d27bb735363be9"],["/categories/index.html","68553de43032c91298c45525643a404b"],["/categories/spring系列/index.html","9f7924eb79962f8f160f105c764ad439"],["/categories/前端学习笔记/index.html","c88b747386c988765a66911b577c2996"],["/categories/单元测试笔记/index.html","80d9f610ce7a7a524949211678a7be86"],["/categories/安利/index.html","74cabf325c4d2f892e6f09b7aa3904e9"],["/categories/工具类/index.html","84df3f4dd80705fed4b74f59e46d4b37"],["/categories/数据库/index.html","4821fd1b14fdafbfa1514637d90fa2b3"],["/categories/日记/index.html","bf3aea0ef26e95f371dbb26dea2163a4"],["/categories/笔记/index.html","c7de25a490e0971a6116c091ec37b27a"],["/categories/笔记/page/2/index.html","448c09f71edc0220ad410e548c080708"],["/categories/编程技巧/index.html","114306898e6e6244a1f6235629e3a334"],["/categories/编程技巧/page/2/index.html","ac4224fa420cb72e31263c89e1c7e255"],["/categories/自动化测试笔记/index.html","7b97a4890e5ae55b601e179276f5efe8"],["/categories/计算机知识/index.html","9d15e6a95c1dd25ec5585d4b4970cc21"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","4d44627635212ef5a3d9b95ff4b93b9f"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","06c25f0d205cdceeb39c3e039eaba9bc"],["/page/2/index.html","6e9450d88d63edc1a02dc6855ef9a972"],["/page/3/index.html","77a7745ea12065cd6e7fa5a6b5bd8b67"],["/page/4/index.html","63891bbb5d7783fed73fc015df40d9b6"],["/page/5/index.html","858015dc5e2aa651ef3b7ea2af604d11"],["/page/6/index.html","5507e64b2363b92959dfb854482761ca"],["/sw-register.js","6e32d017a441277b1fe844b72faffdc0"],["/tags/2023/index.html","d25dad5579ed3f97f3b76ae7a3a26a8f"],["/tags/Docker/index.html","41879f7d81bced5696aa224991ea47cc"],["/tags/Git/index.html","08d37a7d7cc0eb3a66f75ecddc8c8e49"],["/tags/Grafana/index.html","b853fe6825eed6f9ff868fac5d9c7054"],["/tags/JSON/index.html","e22dbf07b3dcbec93e29f2a1978bc8a5"],["/tags/Java/index.html","b4ae1bc7cc9e9683e4c174904c17bf9c"],["/tags/Java/page/2/index.html","e73ecec91b294a71c87d8444f002fbc8"],["/tags/JavaScript/index.html","5a844992339b15c7e17ab320c29ec56d"],["/tags/Linux/index.html","5dc963eb5d72c9b09c0ebc0522d84b4b"],["/tags/MySQL/index.html","b77e9bc77a74510903b7fb2386643b94"],["/tags/Prometheus/index.html","02fc48861e82edab532a6adfa2864a1c"],["/tags/ResponseEntity/index.html","b736884d38647198b8a1c3ca6c6d3e79"],["/tags/SSH/index.html","71827affd3b86baca1b286c08ec30a43"],["/tags/Typora/index.html","d3b8263493f8264de0bff51ce693b11e"],["/tags/cAdvisor/index.html","ed4e4fa7c107200d18a02abb1d3a37c8"],["/tags/frp/index.html","ce5a03798d06707034b8b22cf3ee79c0"],["/tags/harbor/index.html","acf13e4c2e66aa6f7bc866abe62be2cd"],["/tags/hexo/index.html","a441e5c0c2f8b78329830c340ed5329b"],["/tags/index.html","0655fc8c9883f27b75aa2b854c09198e"],["/tags/javafx/index.html","5948a42d476433d9f4aa69278b1ec45e"],["/tags/java线程/index.html","d955e54424c87ae61bed5bd15d91aaf5"],["/tags/junit/index.html","1dc65f1419bfd4c5d0a42cba88bb8098"],["/tags/lambda表达式/index.html","03e420ea37d3baef78dbabf629b1c3f0"],["/tags/markdown/index.html","35062c91575f67bf524e49dc6fbd8ac9"],["/tags/maven/index.html","1044236c256082e571f4ff727d270e9f"],["/tags/mermaid/index.html","71b76598498fd379d23146374bc45401"],["/tags/python/index.html","5ca475c78e263361c6fc49564abb0f54"],["/tags/selenium/index.html","507aa2769b1f10fa66b8e4dcfc0028e6"],["/tags/servlet/index.html","c37b9b4f11e28e70bae74290b7da80fa"],["/tags/shell/index.html","0d9e505c5d0084faeba873f0d289aee4"],["/tags/spring/index.html","bd47235fc207eb5a1c347431b3c5b702"],["/tags/springboot/index.html","e6fab3c0f7c506f737a339688dd22d3a"],["/tags/springmvc/index.html","836163216cf4aae2e49ca01bd027ffb3"],["/tags/spring注解/index.html","98801bf76c0f8f82f0aedc0ab8bea668"],["/tags/xmind/index.html","71b8f3007c178b67d9a225cca6fa3dd1"],["/tags/分享/index.html","fa3b822e214e27addb4caa983dbe7567"],["/tags/原创/index.html","d818bfde2b8b973ffda15eb6c2917918"],["/tags/原创/page/2/index.html","c80946fb1e9e2714d2ad53153711152c"],["/tags/原创/page/3/index.html","a39248f05efa766e011db58d8cfb6f8a"],["/tags/原创/page/4/index.html","6c97b5220f455722bdc06a63e6c59d88"],["/tags/原创/page/5/index.html","332f92ddfb4b78a4a27eb1a0b783c6c8"],["/tags/可道云/index.html","e4301e01d1d72442bc56501e9b51f568"],["/tags/年度总结/index.html","7e21aac3496fa2d429ea03290a7d024b"],["/tags/思维导图/index.html","65d0f24eadf1b34bbcb88fb869e5e59c"],["/tags/暑假工/index.html","fb20dca843605975beff0b784d20391c"],["/tags/电脑技术/index.html","6a6507ad7a1503b8dc4956d736e574b1"],["/tags/破解/index.html","2bfada2d834aa12ac4f77892cedf1249"],["/tags/计算机/index.html","8888ce7dfe3febc2687c6a479bda9de5"],["/tags/记录/index.html","a6c3f8a5194356a9b91301b57273de47"],["/tags/集合/index.html","8162970d5dd3667e25ad6690a34a80f8"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
