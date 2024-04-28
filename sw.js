/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/27/测试文章/94840836_p0.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/2023/04/27/测试文章/index.html","67873e8ebd5d54d16ca722210f7dcfcc"],["/2023/04/28/Java/index.html","f7cfff069b820747f5005b6279fac0e2"],["/2023/04/29/Mermaid画图测试/index.html","3d38c4ff1259e3a8bfa8935e1ffb3bf9"],["/2023/04/30/hexo的部署及SSL应用/index.html","8344c163e3e5fe99bf6a10678a42531e"],["/2023/05/02/javafx使用maven打包及运行/index.html","3664b3431155043f0b37453cee9504f6"],["/2023/05/02/安利几个好用的网站/index.html","841940d74b97ab41fc0d7e1beeabc9e4"],["/2023/05/02/运算符级别比较/index.html","ff68cf73b407ddb44764e89aab21bfc5"],["/2023/05/02/集合-Map/index.html","5b980531a6dd329a1978ff19713f9e89"],["/2023/05/06/记一次电脑启动原神蓝屏解决方案/index.html","9fbe01ace59f5e4d117f1c3285d607c5"],["/2023/05/08/frp之内网穿透/index.html","6b6b3ca4609e2921ea66479320fbd407"],["/2023/05/14/集合类的继承及实现概览/index.html","9598613ad1c48be67596aff84eb79556"],["/2023/06/13/湖北飞young算号器/index.html","cca9f5dfe5f15f9c6fef5937f84b11c4"],["/2023/06/17/windows之重装系统/index.html","dd50cb0456ba8b3659a4be69ada5b0eb"],["/2023/06/28/记一次打暑假工的经历/index.html","b7e981478e2a5d4e06e503237866a7d7"],["/2023/07/08/maven的使用/index.html","a3088cd1f0401348cf33fcf6ab5b1bd9"],["/2023/07/11/Java-lambda的方法引用/index.html","112c4fc1347ae32a4a8d524756b90097"],["/2023/09/04/Docker部署/index.html","c942b36ddb275e2e02831a153b92deb7"],["/2023/09/05/Docker的使用-壹/index.html","f1c0ce242ccf535ec6815d347276833e"],["/2023/09/05/docker的使用-贰/index.html","37b575e3b38f559b50233a871fdc461d"],["/2023/09/08/Docker的使用-叁/index.html","5ad547fd6dd41ebafb9d66df5220c4f6"],["/2023/09/08/可道云桌面搭建笔记/index.html","91fac354109fdd3d973639f17f01e542"],["/2023/09/09/Win至Linux的免密登录/index.html","5ce02341dace98b316825536ba72df6a"],["/2023/09/11/Docker构建镜像及使用的笔记/index.html","b4bd131e2e8547f16861fcb040ab544e"],["/2023/09/12/Docker之nginx的负载均衡/index.html","0d20d1dfa1e0a5983015979f163eb021"],["/2023/09/12/harbor本地仓库搭建/index.html","5cab2260b84f8f5cd707b1d48b46d74d"],["/2023/09/15/Linux2023-9-15作业/index.html","8089daf5b595c2a58d55109863bc8743"],["/2023/09/16/谈谈看完《孤注一掷》的感想/index.html","c5cb77a2afeab0ac682b6b193034b3bf"],["/2023/09/18/Linux2023-9-18作业/index.html","f124d8b0794dc0d0a65b9e1f62c25f63"],["/2023/09/26/使用cAdvisor-Prometheus-Grafana监控Docker容器/index.html","7072911da9b17bd4c429ed56bd15b03b"],["/2023/10/26/Git同时部署多个仓库/index.html","05b1cd40ca67341303d3ad383119e3ce"],["/2023/10/26/Git的使用/index.html","9e4fa1fbf5c1192a2d8147c2a810cdeb"],["/2023/11/07/Typora的破解/index.html","f691184320857375df097857120446b2"],["/2023/11/09/Xmind破解/index.html","aa1a4124046bf97155dacb68daef1a62"],["/2023/11/22/JavaScript笔记/index.html","75c8a3710724bcac3b16ec52fbd56163"],["/2023/11/27/shell脚本笔记-2/index.html","c9553ccb1cf5de6e35b82eed8ee8eeaa"],["/2023/11/28/任意版本win远程桌面使用内网穿透连接/index.html","e71f3c17f5f0be71e113360c81d86429"],["/2023/11/29/windows重装系统重制版/index.html","5dd180926fd8bd3200db8e477cec0e8f"],["/2023/12/15/shell脚本笔记-1/index.html","5f34cd9fc82583b37eb73afb8b0c345a"],["/2023/12/16/shell脚本笔记-3/index.html","a831c3e3c9fb40117d8e1cb41d0659bd"],["/2024/02/09/2023年度总结/index.html","c13e356945af2d1c244e333408ef3c18"],["/2024/03/05/Selenium-的使用/index.html","16f126fdab67422ee7692ffd2d84e14d"],["/2024/03/11/JUnit/index.html","516262391d74cd877d60e8f118ae4e82"],["/2024/04/03/JSON/index.html","fd746309affcdaf50ac892156f827bc0"],["/2024/04/16/JavaWeb/index.html","9c5d2f0e7ecb3c50faae1ec06b4fdcb4"],["/2024/04/16/SpringBoot基础/index.html","fead090f330a5a303f744721d438c769"],["/2024/04/16/SpringMVC/index.html","86e0190773848476d2819b047d87d06f"],["/2024/04/16/Spring基础/index.html","49de05ab771a5e164f327950b85c186d"],["/2024/04/16/spring开发注解集合/index.html","6dc43a7e0d2a8e9ba7d2cdeac87a06d4"],["/2024/04/22/Spring-ResponseEntity/index.html","ac845ad4a70efbfd9c0ba17b7fecbe09"],["/2024/04/22/springboot多模块开发/index.html","9c5fe7f893c68290fd188589b60d5bda"],["/2024/04/23/springboot全局异常处理/index.html","e9e5102bc665dd487c37ba18ac2f5221"],["/404.html","e2782d072d5ca0bca35ab139a2170bed"],["/404_Script.js","9fecf254ce59a39e1d773b492378bc53"],["/about/index.html","1bc62096b0f176646303bf596bc3b9d0"],["/about/site.html","d54bb721dad0dd593f9ec240a15f3735"],["/albums/Test.html","2300a1ec7563233c8f88936899f65e8c"],["/albums/Test/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/albums/index.html","dea5d69610a6a8ce4ad34b76e7949a90"],["/albums/sunset.html","63d5071143f4982005045ddc94997aef"],["/albums/sunset/bj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/albums/壁纸.html","bea24e017f10b7c192647b785d21c4ff"],["/albums/日常.html","71f1a2232abe3be7cc57ac7822c84f29"],["/albums/日常/1.jpg","1e41ecb0d387116e5069c9ea845b79ad"],["/albums/日常/2.jpg","b3e9650190e500e024f91d310670aae6"],["/albums/日常/3.jpg","2abcc2e690e127d6889eb713a26c924a"],["/albums/日常/4.jpg","8601f302e984dd2f52cc3e57d4d017a8"],["/albums/日常/5.jpg","c9d778caa2b4da32023f6c662a7341e0"],["/albums/日常/6.jpg","69982a9ab145ecfaf060ef66c5443c97"],["/albums/日常/7.jpg","78229164de1ada543d947e3bc0f2ac77"],["/albums/日常/8.jpg","dfc6dd055bf9c863ebe37995ee6f165d"],["/archives/2023/04/index.html","b03c3ec3b3651d451034bd6dd0434930"],["/archives/2023/05/index.html","80a7a219c03db14b4b3b2e349417cace"],["/archives/2023/06/index.html","59b4b3e06ae94ced4251d45219d79806"],["/archives/2023/07/index.html","5ba239372143bb14b9848038d2ebac84"],["/archives/2023/09/index.html","2b7cabd26e546c3148604453d8f476d3"],["/archives/2023/09/page/2/index.html","1d6c48fa4b9f5b8d0c941988f7da8bb6"],["/archives/2023/10/index.html","289ca53718146df8e4ad3692bbd06731"],["/archives/2023/11/index.html","e8464e9211f4331666e692432e8837c2"],["/archives/2023/12/index.html","d23a715881e473e430e437e66c2cfa31"],["/archives/2023/index.html","539b32f94d07d7a7e456660eaee8abe7"],["/archives/2023/page/2/index.html","6391eaacccd148c73892f217f3d0ffc0"],["/archives/2023/page/3/index.html","24c3ff93fec3f2cd26a2e2a068262376"],["/archives/2023/page/4/index.html","62a4993017fd0c641796c88900ed5922"],["/archives/2024/02/index.html","47076be9d3edde2331168b7ef7c68770"],["/archives/2024/03/index.html","9f1ed9640d6ba1ed0bb2f1c17706f85d"],["/archives/2024/04/index.html","4ee1ea3c672f0018876db7511d7a3154"],["/archives/2024/index.html","721d28c8ec9a86295b2c4ab003e2ac42"],["/archives/2024/page/2/index.html","54e2d7c20c03adb547df28fc2551689b"],["/archives/index.html","f07dbf8c3972aaf10001a7ccf1dc9390"],["/archives/page/2/index.html","72ee31c083425f86e4aad15acf44df0e"],["/archives/page/3/index.html","640c5388106099dc8f8955feb35eadbd"],["/archives/page/4/index.html","bbaa8266cb3aa5351aa95899f46f7bf1"],["/archives/page/5/index.html","ab7391ed0dda55528aeeb8bb3d015b67"],["/archives/page/6/index.html","ec2f39c2fd5419570053caa054d950f1"],["/categories/index.html","a6f1a31b69f7cd32a4c87f4f4c425509"],["/categories/spring系列/index.html","ae6d7a7d93ac95c18dcd24eba44139a0"],["/categories/前端学习笔记/index.html","1cb07d222c42991c678d776e43b6e11d"],["/categories/单元测试笔记/index.html","3392127afba23ef39b2e6bf056aa7930"],["/categories/安利/index.html","45178febddffcb806dfc88acee79266e"],["/categories/工具类/index.html","58ef5be8e583263e96b48e085b8aec70"],["/categories/日记/index.html","e0644faef1f9e72abfdee08419b910fa"],["/categories/笔记/index.html","9d2881284941fecbc3c68df0d46b003e"],["/categories/笔记/page/2/index.html","8cc6edde020d95e1b3b77239eaf50b03"],["/categories/编程技巧/index.html","7f9c44caa00fe762b1798c2608dfa374"],["/categories/编程技巧/page/2/index.html","3f6200cd98e34f1f5eae2594b741deb3"],["/categories/自动化测试笔记/index.html","74f0d92aa0932563b0a7212b2279e3ad"],["/categories/计算机知识/index.html","62b0b213747025b349e2eaf290b4d7a1"],["/css/README.html","39ac7a156748ea980e19d1a57351b4c0"],["/css/hexo-theme-yun.css","2dd69aa6f81d421fcb78c27af2883ea5"],["/images/abj.jpg","67d19c5755f7179b1e3b3ad7913c8b48"],["/images/bjb.jpg","69ff4607e07e344c8f53194838cd295c"],["/images/docker的使用-壹/1.png","46e744abf9d04cc4ee0ec7b542c7fb30"],["/images/docker的使用-壹/2.png","4c8df07a0f7d9579752463ae90108f01"],["/images/docker的使用-壹/3.png","30979d93d56e2b8abf8a33b145e9043e"],["/images/docker的使用-贰/1.png","785a089c95abe0f9ade56b1483c18d0f"],["/images/docker的使用-贰/2-3.png","3ec82ff3f55ca4c477b37f1b13ec07a1"],["/images/docker的使用-贰/4.png","fa925e57931e2f1a4f0633003b958cf0"],["/images/docker的使用-贰/5.png","0285d962b6a687fc2de2174b7a69cb21"],["/images/icon120.png","66823855111ab5a4c35867a54638128f"],["/images/l7.png","6685493823b76c2b57c7583f2dbc6695"],["/images/l8.png","e2e9f9e471abf410028f0835f6fe35fc"],["/images/test.jpg","12ff690ba45da19f4da7a1b7185370bd"],["/images/wa.jpg","fd7dad69068606c348261f90cf39b40d"],["/index.html","c3b6abf57400aaa826ae75fd5f7a7c5f"],["/js/analytics/leancloud-visitors.js","3b07f687dce2d7a08cccaf552fdf42a0"],["/js/chunk-72ZP56JR.js","057276d9c9cb6224881dde190c6dbd9f"],["/js/chunk-FEIY7W7S.js","3ef93ccfbbc95d8c64ba9e38752ba428"],["/js/comments/disqus.js","25830e4f1bc3bdd7916a60a73d5168a5"],["/js/comments/waline.js","c8671037215325e6afafef942a8fdee8"],["/js/gallery-decrypt.js","b28b80cb444e87389a4c2f7c9ba00d8a"],["/js/hexo-theme-yun.js","210be2b5da5325a841812a61b1d6fb19"],["/js/pjax.js","978feafed4ef06c273a152b4d432ade4"],["/js/say.js","f642a189ce86e6296d783b1f7898d88c"],["/js/search/algolia-search.js","e9e37b68607e170a7bb8bcf80750dce3"],["/js/search/local-search.js","28ab7bcf447654361241094af1178d10"],["/js/sidebar.js","072a46a4cbc6d3c2f01229741193f23e"],["/js/ui/banner.js","ebf08467f6408d982f69dcbeecbe8267"],["/js/ui/fireworks.js","5aac30979e637959c5a4486a4b902e7d"],["/js/utils.js","955c85adc7bd32dd906ee39c5b730498"],["/links/index.html","d3c9494af3db5326adb9419ff646a417"],["/page/2/index.html","c83202ccf150ac6636d70c93ae4582c8"],["/page/3/index.html","8f53201a2470a8a6f0f8f2b22e2a42f1"],["/page/4/index.html","5cbae33210224bf3374f6a3090f8b25c"],["/page/5/index.html","9d82b1460135311de275157f3d75df88"],["/page/6/index.html","ad91d278019a9010edc8509a9c918e75"],["/sw-register.js","0c0cedea0a4984a2f510324e889d2a1b"],["/tags/2023/index.html","d8343146dd44bf3034f1d85af94f8bc0"],["/tags/Docker/index.html","cf395934b6a65cf91eaf396502af14ae"],["/tags/Git/index.html","3eb851676c53925f5b4a7bdccd132c9f"],["/tags/Grafana/index.html","59ebca1a780c8305c069c34410c78153"],["/tags/JSON/index.html","4b6c637b78273af922953ee1cb4b9836"],["/tags/Java/index.html","811bb89d81e1193465604f713438f1bd"],["/tags/Java/page/2/index.html","03f54e1e5ab0dc137194bcb734b5a170"],["/tags/JavaScript/index.html","4826cb003861259141d8effaa5127e02"],["/tags/Linux/index.html","6f1e71904ce94b3adc9e78257a954bd5"],["/tags/Prometheus/index.html","96c6c0b4581e7a382617083373e10ef7"],["/tags/ResponseEntity/index.html","4143ab0870f26a6725d9d9237d3ed327"],["/tags/SSH/index.html","a18f079a4bdb1556acd0a523d8b1fe3c"],["/tags/Typora/index.html","453ad47c722b7a5d6edb69375bdb6ce0"],["/tags/cAdvisor/index.html","4683a6d6147ea6debc993e6fec25e857"],["/tags/frp/index.html","08c64aa3b2439fcd18cebd92de6aa7cc"],["/tags/harbor/index.html","358902dbe2b48fb0a1213ea6320ae92d"],["/tags/hexo/index.html","0b63e3521ed5b808dccae3dddaaa4ff0"],["/tags/index.html","e4bdce1ff3aa682b91b345ca45a08649"],["/tags/javafx/index.html","7ce5055873b63069ec221ac3bf04d25d"],["/tags/java线程/index.html","b59b36810fc80745459eea7f97a66a66"],["/tags/junit/index.html","a03d567e9f67a066faca4227bdbb553d"],["/tags/lambda表达式/index.html","00d23eb47f943cc89c146484387f7ffa"],["/tags/markdown/index.html","72b7b768650a2a43480065cd467cc17e"],["/tags/maven/index.html","8be27a5264607845ac97a51fcfb4ad58"],["/tags/mermaid/index.html","ac7889f0ab5aec37911a292e599d0c82"],["/tags/python/index.html","d79008c7ee543889b126c138a8085ee4"],["/tags/selenium/index.html","cb21b846d82a75126c8645c6d88855cb"],["/tags/servlet/index.html","b1378b0321351ce3a59faa6eefd472da"],["/tags/shell/index.html","6ef23a1872c0fba8a31c9caedda61ad3"],["/tags/spring/index.html","b29d456f23e476021218f22b39b7b8e9"],["/tags/springboot/index.html","0b280e8e5ad077a001db71f244dc4139"],["/tags/springmvc/index.html","5f52c927f2b6068899c8ff3cd7a999f4"],["/tags/spring注解/index.html","792abfe9711eaf7fb03f0eecdbe3780d"],["/tags/xmind/index.html","c3ab5b18b056b12fa0811de09e4d7f96"],["/tags/分享/index.html","9ead3348b3357cdbc7d0c981ceba2e8a"],["/tags/原创/index.html","7396e2085dde6416445b0ef462aa65f4"],["/tags/原创/page/2/index.html","604b3bedc871d9ecdde73eed2120b72e"],["/tags/原创/page/3/index.html","111f4cc54b8938949c8a1d52629323cd"],["/tags/原创/page/4/index.html","d2d9d3fd94a554598948f0d17ca7b15d"],["/tags/原创/page/5/index.html","e52e5765538d79ba96bfa76a63eefbc2"],["/tags/可道云/index.html","6246b76af6aa810db0fbce93ada95130"],["/tags/年度总结/index.html","4b1763e83966bc20411c7db35559bd09"],["/tags/思维导图/index.html","b71610ef7016ccaaf5d9416df31b91c1"],["/tags/暑假工/index.html","86d7fd26dda997d6ff18798d11b292d0"],["/tags/电脑技术/index.html","2def47e9061cfff3c9736c6de762aaaf"],["/tags/破解/index.html","c7f79c33503af43d4b7347b75071cc56"],["/tags/计算机/index.html","081f02aece97ff96281306b8d48ce05f"],["/tags/记录/index.html","18e4c3b723d571c8822a2a2c6afbb909"],["/tags/集合/index.html","fd6f084ac9e45be6128b1be82b80aaaa"],["/yun.png","2c82d6847fdad2661d89b47af441cc45"],["/yun.svg","d857d9e35dbb588e4e80d4966e7f2d1c"]];
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
