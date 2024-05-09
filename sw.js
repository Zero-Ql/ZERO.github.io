/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","6c79877aa8f3786a68caeb8b6c67afe9"],["/2023/04/28/Java/index.html","6fc3518c0b08a994994882dddd16980d"],["/2023/04/29/Mermaid画图测试/index.html","7749abeca4506f3a486b805912e65de5"],["/2023/04/30/hexo的部署及SSL应用/index.html","e18e74ed3aef9cd1a4ee059e05dede07"],["/2023/05/02/javafx使用maven打包及运行/index.html","aaad68cd52a1c7bc47b3338379028ff6"],["/2023/05/02/安利几个好用的网站/index.html","b35e57033296e81ce86f5b166bef2cb0"],["/2023/05/02/运算符级别比较/index.html","0efd159831131b8e72b382670457b1c3"],["/2023/05/02/集合-Map/index.html","8f4442d2d193df8e0257f7b94d66979e"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","56823e5fdfa687e505366a03e8f4872b"],["/2023/05/08/frp之内网穿透/index.html","20ed98d95468c4f54a821fc721f3d530"],["/2023/05/14/集合类的继承及实现概览/index.html","2618adedc9eb83d62779d999b0bcfe2d"],["/2023/06/13/湖北飞young算号器/index.html","ebd5fa13c353a4a18a07bd8bda722e35"],["/2023/06/17/windows之重装系统/index.html","d0066584b060b55c509935fadc83c458"],["/2023/06/28/记一次打暑假工的经历/index.html","73c8cf243c2e3c1003bfdab1efdd5348"],["/2023/07/08/maven的使用/index.html","a417dc25c8bcc14810de1683d8f0babb"],["/2023/07/11/Java-lambda的方法引用/index.html","6f188b7169f8035ac9d41d74cba34a52"],["/2023/09/04/Docker部署/index.html","3e7dc4b6b2034e4dfb72913a73477006"],["/2023/09/05/Docker的使用-壹/index.html","64a6149dfed8332fef715ae2a53a9b80"],["/2023/09/05/docker的使用-贰/index.html","b03e9183c7d3c686b254b9b0a331a0de"],["/2023/09/08/Docker的使用-叁/index.html","57243e9337cc6f92546db6253278d018"],["/2023/09/08/可道云桌面搭建笔记/index.html","7c6f4671eb10798aa0e8bed23b283e98"],["/2023/09/09/Win至Linux的免密登录/index.html","9ed5dda7731f8dd56332e7999df25b9a"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","53a303153b76d189e4ab6223d8866d48"],["/2023/09/12/Docker之nginx的负载均衡/index.html","f0a722bcf51c1df7d6872381b9e5d882"],["/2023/09/12/harbor本地仓库搭建/index.html","3cba7c78a6d40d06c3d12a9cc502e37d"],["/2023/09/15/Linux2023-9-15作业/index.html","2b10397b1427154429b189d421b98f6f"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","73c75ca5a6fbd8c69e9429a55104ba38"],["/2023/09/18/Linux2023-9-18作业/index.html","b412ff3cbf4d109c39f142536d2a25cc"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","5cb3f4bfc8f80a62e1b1cfd5d5d11764"],["/2023/10/26/Git同时部署多个仓库/index.html","3c892d6d8e34e219eeca4ebd93e129d5"],["/2023/10/26/Git的使用/index.html","f050fc8ae21f35290e893eddf529282c"],["/2023/11/07/Typora的破解/index.html","572270eecd854ca98592abe0fa124837"],["/2023/11/09/Xmind破解/index.html","1a4370dd3e26cff203f5bef9ce7983e6"],["/2023/11/22/JavaScript笔记/index.html","6ee6fe00c78fec9e0a704a63ce6a757e"],["/2023/11/27/shell脚本笔记-2/index.html","d35301d079cb4227e2490fc871cd3d62"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","dfc5f61de05992208e916e889f336302"],["/2023/11/29/windows重装系统重制版/index.html","b37858d2d847652a9bcccfa868ed7ff9"],["/2023/12/15/shell脚本笔记-1/index.html","a842999af59bc5a5a5f199680089bc70"],["/2023/12/16/shell脚本笔记-3/index.html","a989f80dc5179ccb349a33b447eff1c8"],["/2024/02/09/2023年度总结/index.html","8cf91629ead0ae38ce1b1980f20117f8"],["/2024/03/05/Selenium-的使用/index.html","19a1d4c4907a65f837d19f723074acfb"],["/2024/03/11/JUnit/index.html","7e4bb5196168e69859c2e69c69578b32"],["/2024/04/03/JSON/index.html","da0150c86535d0b336d7be73bb081a50"],["/2024/04/16/JavaWeb/index.html","97ce5c922ac860e8c8cdc01e46cbd8f2"],["/2024/04/16/SpringBoot基础/index.html","601f6fdd2082bbaf576613859f9eb829"],["/2024/04/16/SpringMVC/index.html","32706e0e9c4e6dab978915fad4b56897"],["/2024/04/16/Spring基础/index.html","d66ae11154bf226a2ad2ee41b9c2216e"],["/2024/04/16/spring开发注解集合/index.html","4ac013e4c54da3290d6a3cba68e32a97"],["/2024/04/22/Spring-ResponseEntity/index.html","32d3f0cc5cc01300623ab1fd12c36791"],["/2024/04/22/springboot多模块开发/index.html","d4081cc1822e68ad5475323f119bd633"],["/2024/04/23/springboot全局异常处理/index.html","96e9192cdff1716b0555dba01e03b801"],["/2024/05/06/MySQL-1/index.html","2c672d5aa7809018819e957ff5b864e3"],["/2024/05/06/MySQL-2/index.html","d02fa7dfdea73c27c1b16d578066711d"],["/2024/05/09/MySQL-3/index.html","2493f1082f8e77d43316c75c9a2aa8c9"],["/404.html","3cbabf4906903aa774f6f6c09bab3ba8"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","17ec6ad73abeb1d66b0ba720daf50f48"],["/about/site.html","33ad1c9e63bd4d7dff9189e1c6dc372e"],["/albums/Test.html","b77cf1154489be70fa933588f16085da"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","ccf74959db7d7e31df0bfc9e09a5f897"],["/albums/sunset.html","fa0f8121caf17e36ccd9e6549084ec71"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","b77023fc0e36ac8f030ff67501954d4a"],["/albums/日常.html","e30ee8859f45e4e2944717d3f33166b3"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","686b26d8d8e5562b115c2d4d71cae8d6"],["/archives/2023/05/index.html","818565d3a55599e967ceae8b9e8b2e65"],["/archives/2023/06/index.html","90393ec5f440147f4432db27172640bf"],["/archives/2023/07/index.html","0efb2d99f0a27d3c98c0a9a2386110c4"],["/archives/2023/09/index.html","20d5872cb0b467f1bd3a15f758a0ca72"],["/archives/2023/09/page/2/index.html","b5f9e555b7b3dfb3b001dcfd1fb30254"],["/archives/2023/10/index.html","b707c792474535eae7107044801e2b27"],["/archives/2023/11/index.html","810d75df1cf17599cb4b6ef072c586e9"],["/archives/2023/12/index.html","f269a90b076546c6870f0ca2c159cb8b"],["/archives/2023/index.html","f74ab2ced403b7baa55e0d42b1278194"],["/archives/2023/page/2/index.html","3fc2ef182f80d6c15808710ba57a1109"],["/archives/2023/page/3/index.html","2d21979b13547fe41d119ec487f01200"],["/archives/2023/page/4/index.html","d07eb2b9ed095a891627fefae1d45b50"],["/archives/2024/02/index.html","3d2d4dcab5613b90c9099332abc27ec4"],["/archives/2024/03/index.html","72596a3e2cf20646863c4b68b0ce100c"],["/archives/2024/04/index.html","4e404d5bcb4752b06e3d31c24046d655"],["/archives/2024/05/index.html","22d31853e932b31ab3ff17809637ff8d"],["/archives/2024/index.html","e61d8e8870fccdc82b1618fd28bfab9e"],["/archives/2024/page/2/index.html","9ecea436928c709a5adc4602c5898b0d"],["/archives/index.html","ac716f82edf23276a6a070387a16fd4e"],["/archives/page/2/index.html","85c4edf5395a1ffb30be75c8c8058072"],["/archives/page/3/index.html","b14da65d7b0a5613d390c0b3f15df733"],["/archives/page/4/index.html","62bb07b1bcc818c1be9d6feaee9ee122"],["/archives/page/5/index.html","964dff3dc9275429aad09cd62707fb81"],["/archives/page/6/index.html","db5f65f88e4c20a0f46e7fb406a2b0d8"],["/categories/index.html","f020aa26438698fb704618f978b63205"],["/categories/spring系列/index.html","be622454cf3a5590976d40861a29c0b5"],["/categories/前端学习笔记/index.html","16ec4ac4efbfad8372ab3b8e9e82e7b2"],["/categories/单元测试笔记/index.html","9787763e1b525b481b18b3c2343767fe"],["/categories/安利/index.html","3d3c51a93f9a675f43682ef5f5b3688b"],["/categories/工具类/index.html","d595bcde088adc874d75d58418160dca"],["/categories/数据库/index.html","0f5cfd49ebc3ed41784545b3f2c826e5"],["/categories/日记/index.html","4de97564598eb8d04a98b4d217943f2e"],["/categories/笔记/index.html","4fd227211ad2b340876b1a946310f880"],["/categories/笔记/page/2/index.html","37bb7c98704f8f26937c7685c172847a"],["/categories/编程技巧/index.html","aa91d58ec094eaec7b757b03b5df3099"],["/categories/编程技巧/page/2/index.html","4a460548360ceff73f40aa1fef904bce"],["/categories/自动化测试笔记/index.html","391bc8c8ae0cbfd590a44ff86a76ff1e"],["/categories/计算机知识/index.html","2cd95bad9ac9a7f5041c4f1b515a30b7"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","fdcd36b320a55badf85464e168b2a370"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","fcf760103742b798419b5b8b62157f82"],["/page/2/index.html","ced2df4cf7211c1f81b6614c84d172d5"],["/page/3/index.html","0f3d89b9baf8c638ddc1843c5d9fb4a5"],["/page/4/index.html","ec4512036a10ee14b9cf6007fcc44f14"],["/page/5/index.html","159bde17f357aae4f3335e893caea852"],["/page/6/index.html","002a490ebacec2ef7b9c9332545744d4"],["/sw-register.js","202715bf60f18236f71b429b845eca43"],["/tags/2023/index.html","30c14c4521fc7f1771a92a86f4366620"],["/tags/Docker/index.html","a555eb244e82653cd7e4606ad4a6f62b"],["/tags/Git/index.html","81946c22527112b9838b202df6bc502a"],["/tags/Grafana/index.html","ea909c2083781ae968cace4de2503a6a"],["/tags/JSON/index.html","34bb16c6933a3a0a9684f701897c41e1"],["/tags/Java/index.html","7a4ed5c79c336605af44c0d0e40309d6"],["/tags/Java/page/2/index.html","c25e3f0b91b57c7132a495a6aa36d92a"],["/tags/JavaScript/index.html","0d7d60cb1bac248fd211023a68b8c660"],["/tags/Linux/index.html","4764250151fc8c5946ca0351815aedd4"],["/tags/MySQL/index.html","e6b6c457ebcc61f02f8c998d611e5d2b"],["/tags/Prometheus/index.html","bcf3ef84afbccfc9a6b563e338be5f4f"],["/tags/ResponseEntity/index.html","d9cc24a697e54e35d1165cf6ba3a50ab"],["/tags/SSH/index.html","1f706c3ba1306e1623bd988de0e4c2b8"],["/tags/Typora/index.html","8d8e44a12bcda870f40868b344c6f330"],["/tags/cAdvisor/index.html","39d8dd8dec990f25cc0993b0c1d5421a"],["/tags/frp/index.html","12299146476b0fbbccab8aefcefdf2e3"],["/tags/harbor/index.html","cac06c85f4e791c5e8162ff9adc91c17"],["/tags/hexo/index.html","54ff8255808c60797ae57aa76b065472"],["/tags/index.html","cce2f701cd5c41c08ef1b2f22eb6c164"],["/tags/javafx/index.html","a56518fae6399b3b3d6d17f318cf35b7"],["/tags/java线程/index.html","cc8d7987f62e75089572b0d25f053fba"],["/tags/junit/index.html","5d0928c074c0ffd53210929f099b45e3"],["/tags/lambda表达式/index.html","1797b3d6ac06f81e17ded9afd072f3f4"],["/tags/markdown/index.html","cf3838cae7666000a24916bee5bdbe15"],["/tags/maven/index.html","7f5e7b75c7a91dc177cb030de0422b78"],["/tags/mermaid/index.html","123f84d199f7847eacc2efa3a8fe4091"],["/tags/python/index.html","3ee2121fd1b1b9a830a3c391bcabc418"],["/tags/selenium/index.html","83b1e4d3cecf00539039fb35f5035833"],["/tags/servlet/index.html","06ad743baf8850f29753741b9fa75a3e"],["/tags/shell/index.html","466a7f071bec1ddc98c6be50bc6e689e"],["/tags/spring/index.html","153e804f1ce8e28201308055b995fa30"],["/tags/springboot/index.html","4051d7498d8cf2cb45c85783aefd73a4"],["/tags/springmvc/index.html","454f64991aa211c594ed65933705ad15"],["/tags/spring注解/index.html","84bb2150d75234582b9889346ecaf7ef"],["/tags/xmind/index.html","c5836e873a4ec2321d75e1783c121fc2"],["/tags/分享/index.html","69e862272ec1f622496e9fe478a1912f"],["/tags/原创/index.html","a881b0756ac262ef92c0c19f1d5c457e"],["/tags/原创/page/2/index.html","b7278f774f7d9dab3b4b8dba07fcc562"],["/tags/原创/page/3/index.html","f595a3a55e4bfd59f8316e143655dff9"],["/tags/原创/page/4/index.html","2f4249b57d1bbf1c9b6f2713b243ba0a"],["/tags/原创/page/5/index.html","077cb99a8a88901195eba0c9036de654"],["/tags/可道云/index.html","656a84446f917f4279dbde4e190974e6"],["/tags/年度总结/index.html","40d702850d5ab64390aeadd497f75cb0"],["/tags/思维导图/index.html","ff4b3108eb8766af9f95eaaf518c1f6e"],["/tags/暑假工/index.html","d04400e4188e432a9828f250285c8b17"],["/tags/电脑技术/index.html","59e667809145bc2ed232268279c656a1"],["/tags/破解/index.html","e56d48e9a04692358958b201a9123419"],["/tags/计算机/index.html","9cc88e849f97f335ec6a1e069ef248f9"],["/tags/记录/index.html","30af8877edb2667a07c8233ea6178f45"],["/tags/集合/index.html","aa0414463aa9022b7439dd0b83dfec60"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
