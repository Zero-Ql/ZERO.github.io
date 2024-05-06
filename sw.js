/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","ac63734bab0a60b5fa65325ee8fde6bb"],["/2023/04/28/Java/index.html","ca3af150902d31b61866912c82aa0869"],["/2023/04/29/Mermaid画图测试/index.html","cb3e83a9ecbe0c8d2cc46669c043b068"],["/2023/04/30/hexo的部署及SSL应用/index.html","89b3f5e73475e5d18122bc0e1a1ea196"],["/2023/05/02/javafx使用maven打包及运行/index.html","9cca971a017de57c8c160c36a4c1abd9"],["/2023/05/02/安利几个好用的网站/index.html","de85160d1a7545a140b87df9079139e0"],["/2023/05/02/运算符级别比较/index.html","f572b76b56c13866309080cfee98f531"],["/2023/05/02/集合-Map/index.html","7dd5b57f389dab27f3a6efa417cf3c1e"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","8a43e9cb3b1096779908e742cf8ae5f9"],["/2023/05/08/frp之内网穿透/index.html","600141469c4d18d41026bd655c9f0e22"],["/2023/05/14/集合类的继承及实现概览/index.html","e19545276b2ff0c4fa445efc2e909417"],["/2023/06/13/湖北飞young算号器/index.html","d06bd48f9dffd15c46222839094ba063"],["/2023/06/17/windows之重装系统/index.html","e6303111dfeaf9164595e2ff369b4cad"],["/2023/06/28/记一次打暑假工的经历/index.html","016d2662989ca46afc8124fafe8a68cf"],["/2023/07/08/maven的使用/index.html","c729d89cd3f49ab8a99ddf2833b7a8bb"],["/2023/07/11/Java-lambda的方法引用/index.html","7219757beed15ba3af8d348fca8ea4ee"],["/2023/09/04/Docker部署/index.html","bd2ba9fb66ddd0d1328051de74709e8b"],["/2023/09/05/Docker的使用-壹/index.html","c377fd20df6c5afcc073ac04898d7afc"],["/2023/09/05/docker的使用-贰/index.html","ad3afabed8e61e561a3ee73d6dc9677e"],["/2023/09/08/Docker的使用-叁/index.html","398121025a9883d62521b5648efe5525"],["/2023/09/08/可道云桌面搭建笔记/index.html","8e6f24fffb58386379be97d8de3b808a"],["/2023/09/09/Win至Linux的免密登录/index.html","7bdfc36f552672b9271dcc332752a7e6"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","052b315258fe5f726293ba4d1aaa4919"],["/2023/09/12/Docker之nginx的负载均衡/index.html","d6cdd76270241d0ae71aae81eebf48c0"],["/2023/09/12/harbor本地仓库搭建/index.html","bad9b2a8b7a519c682d6bf11d73a815e"],["/2023/09/15/Linux2023-9-15作业/index.html","4ad6d97c71214c2365e511435b1f0279"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","ee50f7595ef03c502352d40632902650"],["/2023/09/18/Linux2023-9-18作业/index.html","3597a72f6717c217103e7188767a1104"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","d7d2dfcc434b58eaf9f31034bd358cb0"],["/2023/10/26/Git同时部署多个仓库/index.html","4e1663ae1320412081c845e49c6352ab"],["/2023/10/26/Git的使用/index.html","299e14538395e8513bff59443508b03a"],["/2023/11/07/Typora的破解/index.html","2f6412885e87e5772ff70855bc8ec454"],["/2023/11/09/Xmind破解/index.html","8c2abdf6cfbf0c0f217931f908d969d3"],["/2023/11/22/JavaScript笔记/index.html","369bf3602417ac3ce23ec793736894a3"],["/2023/11/27/shell脚本笔记-2/index.html","872cb6a3a7297582d84bf439943bdb51"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","fd2db7d55e0a450205dffbf2748a84e1"],["/2023/11/29/windows重装系统重制版/index.html","ec6b252ee4f40909591996d0002dc9b1"],["/2023/12/15/shell脚本笔记-1/index.html","5709db8fb2570db0899af5bc33cd54bb"],["/2023/12/16/shell脚本笔记-3/index.html","552bb52017a8353ba22055c6adf10297"],["/2024/02/09/2023年度总结/index.html","ceef4a3d42c252712d333d2191ffbfb7"],["/2024/03/05/Selenium-的使用/index.html","2e7dd688ea04d489203130699d10f74b"],["/2024/03/11/JUnit/index.html","2cb2169457ead73a1c7823c054e3116e"],["/2024/04/03/JSON/index.html","f182b3a532ed91f3162709c83a12df7b"],["/2024/04/16/JavaWeb/index.html","4453e79011b3074bea36068a7734e58f"],["/2024/04/16/SpringBoot基础/index.html","a233db63bfe566407e588c597f749980"],["/2024/04/16/SpringMVC/index.html","f930253cbc9f4ed01304935440f28ba6"],["/2024/04/16/Spring基础/index.html","a325b7edea5c22131072711d8052306e"],["/2024/04/16/spring开发注解集合/index.html","4b442771268a79d7f1f78b5c5780053c"],["/2024/04/22/Spring-ResponseEntity/index.html","9e53f1e9d8587fc716228b6e626d877b"],["/2024/04/22/springboot多模块开发/index.html","7fa213a2dbe3f305a1f104daf608e585"],["/2024/04/23/springboot全局异常处理/index.html","cf261bfabbceffaacc803f3de79e7548"],["/2024/05/06/MySQL-1/index.html","90f215c79b21f2a18a74c68a98119c40"],["/2024/05/06/MySQL-2/index.html","064747bfda33d696703adf18b7b18c3d"],["/404.html","a4131c83a69574191dc71392a10d3e74"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","9f1161519179211aae2e16ce537be035"],["/about/site.html","59df31c93928cb20af5fef62c864070d"],["/albums/Test.html","a83c5e140af970633c0fa6f2fb081824"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","de5b0626f54121acea40497400e2fba1"],["/albums/sunset.html","b26fbfd99d5ccc7afcf79a62a2a2b1c4"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","551966d6f640c3b969a6f061d7984164"],["/albums/日常.html","3e52a995a8c81e085ebc5a81af9b7b36"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","e817cd63f9777b05b8f8bd0400438cf5"],["/archives/2023/05/index.html","2084caae5d9183ae33aa663bd932cc2c"],["/archives/2023/06/index.html","3d665bb240b9a29136ba405a0179eda7"],["/archives/2023/07/index.html","33aebe68625833aca39deb592432f069"],["/archives/2023/09/index.html","95a9b5a09930b3c7fc81f89ddedf006a"],["/archives/2023/09/page/2/index.html","b1af7b0c64876d13e83cff269c09d39c"],["/archives/2023/10/index.html","df98bae2a8f74732208e4dd1a210ffa4"],["/archives/2023/11/index.html","0f2bac1c77652c34f29033f37f85c32d"],["/archives/2023/12/index.html","4cbbeb310714189434e5c6154a3ba5a4"],["/archives/2023/index.html","13efb85026aae73f4e383dc59ed143e6"],["/archives/2023/page/2/index.html","10a7db576c3dfd2d1e931690c9d24744"],["/archives/2023/page/3/index.html","68fe827f834e572b7a08501100c5c248"],["/archives/2023/page/4/index.html","e2e9272abbed64482bd9fdc100b67189"],["/archives/2024/02/index.html","c8dd50db229d5554edf5fedb98d86bb8"],["/archives/2024/03/index.html","c6ab30cce40ecf8af8d5cc0cd5604f81"],["/archives/2024/04/index.html","5bf414200bdde19d3ae2d8084bcad932"],["/archives/2024/05/index.html","45a7b8c27ad2185699f8dcdaa1d67b5a"],["/archives/2024/index.html","316b04edf9fd9c706d9dbc60092eb896"],["/archives/2024/page/2/index.html","9fb704a037431f792422cf33c5b1abf7"],["/archives/index.html","84726775497d8d239246f4655e8fa91f"],["/archives/page/2/index.html","04f61c131d1b5f8cbd9c154e282b70cf"],["/archives/page/3/index.html","4339e062063cf76af66ecca1ff495ba4"],["/archives/page/4/index.html","2ba9a855ea6d575b28985890f6b68b14"],["/archives/page/5/index.html","431b7bf19167f1bee4543cf037ac9ad4"],["/archives/page/6/index.html","196de8a224fb4352a7e68060fab2e5eb"],["/categories/index.html","6d5e94edf2d5dd2fb7c626dcd23b0a17"],["/categories/spring系列/index.html","d603d2426c9f182b4ab5bb9181adefda"],["/categories/前端学习笔记/index.html","c84f2a01f4142aff828ce4980be50cd5"],["/categories/单元测试笔记/index.html","21ddd4bc00f587a2c2eebb6de742e2ba"],["/categories/安利/index.html","942ccc08f108004d9861e15909eba8e8"],["/categories/工具类/index.html","efbc50408d8033a147cc1e872b782659"],["/categories/数据库/index.html","07b78156789e0e21b82519e2da5be60a"],["/categories/日记/index.html","97d0f1299a6b04f22492a5d6c6bc1276"],["/categories/笔记/index.html","d26019c331499fa218f00b056d20b32f"],["/categories/笔记/page/2/index.html","ce6ed88563a3925eb70a999f73c9d2f8"],["/categories/编程技巧/index.html","2036e7164a45c74fbc44b11d968605df"],["/categories/编程技巧/page/2/index.html","da26bd60a67b42c6f002b80e68dd65ec"],["/categories/自动化测试笔记/index.html","ee7a3d9eea40f3042802f983d6fc4e90"],["/categories/计算机知识/index.html","e65864f813f50bbd261df20a6731377b"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","791a2188168710efe0cceff592fb40cc"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","255601d311e6cf9a4697e6916e4f9399"],["/page/2/index.html","1022e65836dbdedc796eacde9a1a5572"],["/page/3/index.html","f469b8a9a63fe16144bee1870684420b"],["/page/4/index.html","0b9aed31f104ce39651de285f1e08224"],["/page/5/index.html","dad697b3d7d33e035ff6acb2a3caca81"],["/page/6/index.html","1e88f2fa762548c2f00d36f736f7eb6c"],["/sw-register.js","1ed0fdcdc420feea8ac9bcf308e42ad7"],["/tags/2023/index.html","caa4f32545cb3b267c7fa097aea68577"],["/tags/Docker/index.html","529247bed35a6f2bc3c4ebd76fce2f1e"],["/tags/Git/index.html","f711f3d1a483eb89969e1ffd9a75dacf"],["/tags/Grafana/index.html","07108abc6d393a260df063e689df68f3"],["/tags/JSON/index.html","31c8aa3d0af194d3a44166b92f9007d6"],["/tags/Java/index.html","346439eee62f6c7888d9acd04a57a347"],["/tags/Java/page/2/index.html","77e8772229c952a3fb3df41478fb7d42"],["/tags/JavaScript/index.html","42369470aa015be68101ff2e68e064ef"],["/tags/Linux/index.html","e8f61d25555f70e2b43aad12b896aece"],["/tags/MySQL/index.html","d620cc68103c04bc16fc35a30a4198c6"],["/tags/Prometheus/index.html","a958588cbf35f942079ddb6b3076db99"],["/tags/ResponseEntity/index.html","75dccb356019a75f027819701bf7ed4d"],["/tags/SSH/index.html","2e584c2af9ea08ee1a11455a162c40fe"],["/tags/Typora/index.html","796cf01401c3d5c9d331c57948cf16d2"],["/tags/cAdvisor/index.html","be960361bfb4db16291b89ce478e7100"],["/tags/frp/index.html","a3a5cc6abaac3fbbf2fc013032d60ff9"],["/tags/harbor/index.html","bc9564dbe46629397464d2d4bfcc6820"],["/tags/hexo/index.html","9ea3a3a1cbffb7b49c069ced47cf038c"],["/tags/index.html","b217f4d8cbf133d8b35573642d1739a2"],["/tags/javafx/index.html","ccad487e907a453791a7b1388532a7b3"],["/tags/java线程/index.html","884b9f43610ab472a589df2d66e72361"],["/tags/junit/index.html","245f22a2c355075a8a30527dd801232d"],["/tags/lambda表达式/index.html","d6ab6c1d1683843c933c06815ceebd93"],["/tags/markdown/index.html","d80b8d7a04f2e4f43c9f28221bb78c6d"],["/tags/maven/index.html","2660c49f082490827c5e7d3b4684bee6"],["/tags/mermaid/index.html","489b9590e6fb5a8c27708fb6f5a3de5a"],["/tags/python/index.html","ce347164a2e4c548176b8ec97b28abc1"],["/tags/selenium/index.html","258e983580ab5d0ad07245dbb6e99336"],["/tags/servlet/index.html","fd7ca3d3c16671e46f9d75a1f6b5a211"],["/tags/shell/index.html","c60dc52da8214f0ab2afa1cc54ab52a8"],["/tags/spring/index.html","cef0594ae4dafb63c2c119a946d64712"],["/tags/springboot/index.html","7da1adee4c2d6d5aa495ddd2a62081e9"],["/tags/springmvc/index.html","db2632d4102fb7d0c42bee0f648c15ac"],["/tags/spring注解/index.html","79ba888780c175dda2e1fbb28df4c1b0"],["/tags/xmind/index.html","3fdffeefedb5ae652eaa893c64ef5434"],["/tags/分享/index.html","5ef474ceb36e7fcf4cac714e00149791"],["/tags/原创/index.html","16926b47a1b80ac379c5a4b745121ce3"],["/tags/原创/page/2/index.html","a015bbb474159cdcbfb93aa37aec76f3"],["/tags/原创/page/3/index.html","65e4f9c4370cbfa0d5db95bee3c2b177"],["/tags/原创/page/4/index.html","424e867ecaf4f85f6ec2b63b5b1804cf"],["/tags/原创/page/5/index.html","611ff29702a91e269682f5313e8de3c6"],["/tags/可道云/index.html","ed88d7e101102c6e469fe33381d38d62"],["/tags/年度总结/index.html","40b8302932cc93bd17a56a63a7830c21"],["/tags/思维导图/index.html","b5651b429c66cd00db2ad9b9e7bb763f"],["/tags/暑假工/index.html","61eab876d06411c2eb113bed3356798d"],["/tags/电脑技术/index.html","762baa658ddb66fc9d586fbf5edb3c08"],["/tags/破解/index.html","a1c726499944926ca64c22316ce549ab"],["/tags/计算机/index.html","e4e76a3bb460f46d39e3fa427d574fc2"],["/tags/记录/index.html","9b4ed0990efe71490ac93cd3ca8d84d7"],["/tags/集合/index.html","7ea2bf3da275b0c580d1f87ed73ae136"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
