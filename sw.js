/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2580.html","3f8cdc9ebc1004aa39fa006a8214a40c"],["/25802580.html","bb4880e554012331382f8159b9a19a6f"],["/258025802580.html","07666ebd42cb3fa95a470dca51a9e996"],["/9999/09/09/文章/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/9999/09/09/文章/Adsterra.html","4ec78614dc4c91839cc065a9f223743f"],["/9999/09/09/文章/Metrial822.png","4deb8d4f959f9d19c81bc44a10fc3cb1"],["/9999/09/09/文章/PlugRush.html","dd4039bbf02d2fba1408cbc2b534dcc5"],["/9999/09/09/文章/Popcash.html","1eb441204a135f6a916f0ee49eebe255"],["/9999/09/09/文章/PropellerAds.html","0a9d272318df792bed59e89369f12b33"],["/9999/09/09/文章/RevenueHits.html","68661af826e3e5312ed722d70aeaad69"],["/9999/09/09/文章/Slimspots.html","8a4e1b3220a9b7bab0b5bbf6aded0064"],["/9999/09/09/文章/TrafficShop.html","8e12e0520e2327d25b4d95eaa99af538"],["/9999/09/09/文章/Yllix.html","c501fcd268f92f9176cf867a45086467"],["/9999/09/09/文章/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/OUnion.html","0e6b3af9e0c8d8d40e29df95bd937cd4"],["/OUnion2.html","4ec3f1777d936abf9fc9dbe86b0ee1a9"],["/archives/2018/07/index.html","23f8954e22459d414d1d7ab2029fc783"],["/archives/2018/index.html","4339a7f9d030e0e6846b73447c4b6454"],["/archives/2019/04/index.html","3b644ee9091a6a6f850c2c970a6973f8"],["/archives/2019/07/index.html","1b46f610b0b8eea5dd6e4039398ec184"],["/archives/2019/10/index.html","055fea32b8bfece7b49852de1938876f"],["/archives/2019/12/index.html","03b60aa7f0f5dfe4a4d0ee11161a35fe"],["/archives/2019/index.html","6785101efa46a6d3b6130cb4126392be"],["/archives/2020/01/index.html","8109621aecf06e0308b9e8ebde411f47"],["/archives/2020/03/index.html","4783a8505bc79d45eb807a10e7b0c10f"],["/archives/2020/05/index.html","cc311f266d0f8e043027ce4e79101f88"],["/archives/2020/06/index.html","a8812b465d9275b1949203f947d3efd9"],["/archives/2020/07/index.html","2c53df989e39816681d04dd572561890"],["/archives/2020/10/index.html","f358a63bc60f397078695f327078ce9b"],["/archives/2020/12/index.html","c3a174407877a4bcf0c170fe3c1ecab7"],["/archives/2020/index.html","ddcd2771ef9ad2be94a123e99179b382"],["/archives/2021/01/index.html","3135977609f75033f1a9f07bf19415b6"],["/archives/2021/10/index.html","c3aa34594a73398c659ab1ba702c1126"],["/archives/2021/11/index.html","1a4150eeb3101b1ada3a576f7073ce0a"],["/archives/2021/12/index.html","77f3e6b3afda1756f5048389f3f44438"],["/archives/2021/index.html","3f989d40aef07d80d720c61e66b45f9a"],["/archives/2022/01/index.html","9203f5302d384517ddcb0fbbca19930e"],["/archives/2022/07/index.html","e0b9ed25285859a2a74d1253e2bcb75f"],["/archives/2022/index.html","20c3ca266ae8a5c1a32624f85784d866"],["/archives/2023/07/index.html","51ead43f12dbe347f39b67420ff02783"],["/archives/2023/08/index.html","da7cde6e078643c3f67f73a93a6f8fb0"],["/archives/2023/08/page/2/index.html","b9b78551a01357777b51408a5ecbdcee"],["/archives/2023/08/page/3/index.html","f6e4f45ebd19591718dfac8e36dacfb6"],["/archives/2023/index.html","b0d6d2fe61cab2044d52c42c45e25dd4"],["/archives/2023/page/2/index.html","37217b58ff5c0d50b0a41cbd05302351"],["/archives/2023/page/3/index.html","c7187251ce0113b473a30b3da469080c"],["/archives/2023/page/4/index.html","a52c058c4125d18046cbcef904c00b79"],["/archives/2024/02/index.html","e6059c8d257103be296efb56da73390c"],["/archives/2024/03/index.html","1be366794726b12d4b60c9c97f30f0d8"],["/archives/2024/index.html","a11b9f7d8e7737321c9abc27c732c2f1"],["/archives/2024/page/2/index.html","0d4c6e33a7ef865b3d485e8ecf5ad63c"],["/archives/9999/09/index.html","59a1bd55d0b04725383f38c0e401540a"],["/archives/9999/index.html","a0ed32daf9605bca1141286b5a153202"],["/archives/index.html","ebe8b6f91c87682a1edd1ba80eced950"],["/archives/page/2/index.html","906ae3b89b3c31f122f4b4accb467cfa"],["/archives/page/3/index.html","cb6a52c469459bf27f57f0389326ab73"],["/archives/page/4/index.html","fd03ee1f1d327cbd0846c5ededd12ce8"],["/archives/page/5/index.html","31efcf08370278e4a4a579ed63dc7192"],["/archives/page/6/index.html","360ccdfa53c511496c324d56180831dc"],["/archives/page/7/index.html","282a60a29489b838c2048a5fb566f0fa"],["/artitalk/index.html","f8dd2e73bddcb0a19dd212d80c0c1e78"],["/categories/Demo/index.html","5eb13d791e4dd739350db0248b5903cb"],["/categories/Docs文檔/index.html","a44dac31cc2f3610d74c0f43a897c6f7"],["/categories/Markdown/index.html","e242ef64578fda0116b9c4b97581d200"],["/categories/Thx/index.html","3f0c62c5252bf0c434d533be2c164a5b"],["/categories/categories/index.html","45a43791a48706c0adc4f6014073aa84"],["/categories/html/index.html","371c7b51f5353c39688ca6b512c1ae50"],["/categories/index.html","5c3f01b2240ae3f5ad5d052074f0d17d"],["/categories/lua代码/index.html","0e332a1a868ea11e7cf210cbaa26038c"],["/categories/作者自用软件库推荐/index.html","3f505fe68f6b956dcb97c4b74eb3ea66"],["/categories/动漫网站推荐/index.html","69dee6c14b28c8ed94582699c4789a88"],["/categories/合集/index.html","ab257dcb124202ad538a7988d2481b7f"],["/categories/国外网站推荐/index.html","7392c7cffbff29e0922c25ba74bf9f06"],["/categories/小工具网站推荐/index.html","644dc8e6ce4525f8e289a101e064b206"],["/categories/小说网站推荐/index.html","28b9e8944158db136ed9ad29056187e2"],["/categories/应用市场网站推荐/index.html","a1b65b486aea2ae7a261deb35ebea561"],["/categories/影视网站推荐/index.html","e1bf9355e65ce746d62742729f39219b"],["/categories/我的开发/index.html","ec7a6c8c794d41bd401855560bdea26e"],["/categories/文章推荐/index.html","a8a3c243270a335d3328d1f4fbf823a1"],["/categories/文章收录推荐/index.html","1561baaea2820686143c963d010d3826"],["/categories/文章转载/index.html","cf08ce331f0ac307b1ee490d3d3c3a8b"],["/categories/海贼王/index.html","ca292e5636fcc2ba16d4100f62e7b5ad"],["/categories/漫画网站推荐/index.html","f814bf57dd3ac7d567027c040ee0f070"],["/categories/直播网站推荐/index.html","a386f8535bdcfcb2037039ab1e81f7cf"],["/categories/网盘推荐/index.html","de6a3c20d10c5bbd93fd5a71a4f7a7a9"],["/categories/网站分享推荐/index.html","1557d04ad41790f5c480ce625a86e8e2"],["/categories/网站推荐/index.html","d32c1ea3628c4adb3be382b6116df290"],["/categories/美图网站推荐/index.html","e86e96c5ae9937d70eb37701363cc6fb"],["/categories/美女分享推荐/index.html","1fad1ce774f1f32f29e962116c860186"],["/categories/美食推荐/index.html","cc229a5b155d9d3291592455dac4fac4"],["/categories/表情包网站推荐/index.html","835b8218ddbc9553bc8fcff2e0ec0690"],["/categories/资源网站推荐/index.html","e471e2d6893b47e6c5f99355198d0171"],["/categories/软件库推荐/index.html","d05ef686bfd26214971a6ab5f21448d9"],["/categories/软件推荐/index.html","1aba6124e5da540271acde359f2ac40d"],["/categories/软件推荐/page/2/index.html","02ae8a0934eb0dad5e84fddd45f21e56"],["/categories/软件推荐/page/3/index.html","f03d03843ca997adcc2f54ded7b9a532"],["/categories/進階教程/index.html","3736ded61ab75c707112b049da2be8ef"],["/categories/闲聊杂谈/index.html","555a5e62184ed8f6bf6085d51eb03e78"],["/categories/阿里云盘推荐/index.html","10cd9c045ea817a98da252c0ddc17f35"],["/css/2style.css","614d91358f6b26c603779d5bc822bc7e"],["/css/custom.css","15d6e5b6ce6cd6d4a2b0effe06244960"],["/css/custom/fixed_comment.css","2e141a3fe37f0744338976e58b94189d"],["/css/custom/fixed_comment.js","f9edc32e935c98b69ad616c7a39b4418"],["/css/eurkon/eurkon.css","3459931d543ce237af6e62e6c6cbaa46"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","55bff58e528a855c451509dcebae3819"],["/css/mobie.css","524958f19b70239106d6aaa5decb86e2"],["/css/player.css","bf081626a42aae043604021ed40f6ef4"],["/css/reset.css","7f67c3ba6c820d0a0464ccb609f3c830"],["/css/style.css","219b80c89b65ad80bc928a568667a98b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/viewer.min.css","ec961a06f9292db17c03e324362159da"],["/equipment/index.html","c16e4f7232fd05b69721ecf227d571e6"],["/googleb0c521173282337f.html","a1202143e8bd8d5fc83b37ca723da70d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/img/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","8978dde59a0d7e7c28c87436982f6cf7"],["/js/card_weibo.js","5fa4471b13d0bd4315be295663388e16"],["/js/eurkon/color-thief.min.js","96805f1e38ea0b713936ec18e7b450a0"],["/js/eurkon/eurkon.js","26508939068f37c6e7f24897be41d48e"],["/js/eurkon/refresh.js","6de41747d67d724d4b7d619b87869443"],["/js/eurkon/rgbaster.min.js","90546dec3661d234ff3ee6f6bcad527c"],["/js/main.js","d66f147747b5511577de5e46affcb620"],["/js/search/algolia.js","cb2b0f7e1fcea9d7485a395f69c94468"],["/js/search/local-search.js","483487f7261461207536fd9bde606418"],["/js/tw_cn.js","dec7bff10294055b65e3dd37af6fb3c1"],["/js/utils.js","2ff83587b5454af8cbd934f5caf6b94c"],["/lazysizes.min.js","45bacd312d5098b4b59f563d8756c15d"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a9b6d52085bb26bdc3d3e7fb524eac24"],["/luago.html","9b133a922ad8f1c691da81f8d6417e9f"],["/luago.js","3d9c4c576287f2d0a92bc064492e8996"],["/page/2/index.html","7b02f501f2544ce26d1d77bc816d2335"],["/page/3/index.html","921a1edfe4b466b3628b2aac2bcc0d26"],["/page/4/index.html","5844fa0a14d3d1b9aa6184aac3c3ccb2"],["/page/5/index.html","56503f3639bf889629338b2223d5a606"],["/page/6/index.html","ac7a93fda291786c38dd09c7102792e8"],["/page/7/index.html","02a3e7fb0904402302fc0daa55d9f0a1"],["/page/video/index.html","15e9e412110344d4581ce3b0d69a2d42"],["/pinterest-bda12.html","d6f86ee6493eeb0791fed46cc662afd2"],["/pluginsSrc/@docsearch/css/dist/style.css","00d7257e4632574734bb6ceeaa1f48f8"],["/pluginsSrc/@docsearch/js/dist/umd/index.js","d7f1a1fcad32162a6f822e813413d0bf"],["/pluginsSrc/@egjs/infinitegrid/dist/infinitegrid.min.js","e0330821707eb7b0c2c5c262665d6ad9"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.css","b91328fff08db99c4d6823d8996033a1"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.umd.js","68db95a7900f8dcd2a86d077a96c4c7f"],["/pluginsSrc/@fortawesome/fontawesome-free/css/all.min.css","9402848c3d4bbc710c764326f8b887c9"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf","1931427c23716bb4ff98d03627f7137c"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2","b6356c957274676e6571c1ff5e11c9a8"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf","a0cc1c8265e3163aa654a5284ea11ace"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2","023a4a925fa3fce0f66b769ef6bbb264"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf","25914cfeafced317e1a0372187fbb2b9"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2","6c4eee562650e53cee32496bdfbe534b"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.ttf","71808e147dc6d82c198a4ba292c0cb69"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.woff2","c9e50ccabe9e36f370272197595ea1e5"],["/pluginsSrc/@waline/client/dist/waline.css","faeb77e3dd6a5cadd547571f2859d7cf"],["/pluginsSrc/@waline/client/dist/waline.js","87dc1d077e6f83b473960bdf9d10d4b3"],["/pluginsSrc/abcjs/dist/abcjs-basic-min.js","8b8171801585c9fb1423714323153074"],["/pluginsSrc/algoliasearch/dist/algoliasearch-lite.umd.js","9a98b48de33921bd6161cd35db7b5edd"],["/pluginsSrc/aplayer/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/pluginsSrc/aplayer/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/pluginsSrc/artalk/dist/Artalk.css","008be05627c6962ee0cc85144c93719d"],["/pluginsSrc/artalk/dist/Artalk.js","12bf77e5e13203c23da5d015d22edb36"],["/pluginsSrc/blueimp-md5/js/md5.min.js","2f577924085ebbe12e29f3ff706397d0"],["/pluginsSrc/butterfly-extsrc/dist/activate-power-mode.min.js","eb1c75760fdc1249dfb74db05ba39a5c"],["/pluginsSrc/butterfly-extsrc/dist/canvas-fluttering-ribbon.min.js","bee7265e6d121d3e2bbe25592163fa22"],["/pluginsSrc/butterfly-extsrc/dist/canvas-nest.min.js","b4b3398371256eb9c74a0001eb5fa25d"],["/pluginsSrc/butterfly-extsrc/dist/canvas-ribbon.min.js","15fcd2b43b47baa5418ae4004cd2c802"],["/pluginsSrc/butterfly-extsrc/dist/click-heart.min.js","8626378d634c886884e3f94ff060182e"],["/pluginsSrc/butterfly-extsrc/dist/click-show-text.min.js","56edbcd0697d5c8056d0d40d9bbeb26a"],["/pluginsSrc/butterfly-extsrc/dist/fireworks.min.js","b0f0a5c077706616aef9224fa0b4df76"],["/pluginsSrc/butterfly-extsrc/metingjs/dist/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/css/share.min.css","4b6e6c4b12b9206824231920ed3326c8"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/pluginsSrc/disqusjs/dist/browser/disqusjs.es2015.umd.min.js","1090676c68ac556956d14d40353c2da5"],["/pluginsSrc/disqusjs/dist/browser/styles/disqusjs.css","8edf59e04dfb9bb9b73d185e651262e0"],["/pluginsSrc/gitalk/dist/gitalk.css","8476031a633732dff9875feae0890070"],["/pluginsSrc/gitalk/dist/gitalk.min.js","8a817782fe4a94b4d2499bcfce04f8c3"],["/pluginsSrc/instant.page/instantpage.js","ae11493d70a8ce9fa776cc7aec1be764"],["/pluginsSrc/instantsearch.js/dist/instantsearch.production.min.js","dbd4c7b5d7445d80c3d937082c6a9d6e"],["/pluginsSrc/katex/dist/contrib/copy-tex.min.js","c3a3efd7d609e2e905aa386fc0f7d18e"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.ttf","56573229753fad48910bda2ea1a6dd54"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff","10824af77e9961cfd548c8a458f10851"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff2","66c678209ce93b6e2b583f02ce41529e"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf","497bf407c4c609c6cf1f1ad38f437f7f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff","de2ba279933d60f7819ff61f71c17bed"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2","a9e9b0953b078cd40f5e19ef4face6fc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf","e6fb499fc8f9925eea3138cccba17fff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff","a25140fbe6692bffe71a2ab861572eb3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2","08d95d99bf4a2b2dc7a876653857f154"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf","b9d7c4497cab3702487214651ab03744"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff","40934fc076960bb989d590db044fef62"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2","796f3797cdf36fcaea18c3070a608378"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf","97a699d83318e9334a0deaea6ae5eda2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff","e435cda5784e21b26ab2d03fbcb56a99"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2","f9e6a99f4a543b7d6cad1efb6cf1e4b1"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.ttf","8e431f7ece346b6282dae3d9d0e7a970"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff","4cdba6465ab9fac5d3833c6cdba7a8c3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff2","a9382e25bcf75d856718fcef54d7acdb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf","52fb39b0434c463d5df32419608ab08a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff","5f875f986a9bce1264e8c42417b56f74"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2","d873734390c716d6e18ff3f71ac6eb8b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.ttf","39349e0a2b366f38e2672b45aded2030"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff","8ffd28f6390231548ead99d7835887fa"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff2","652970624cde999882102fa2b6a8871f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.ttf","818582dae57e6fac46202cfd844afabb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff","f1cdb692ee31c10b37262caffced5271"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff2","f8a7f19f45060f7a177314855b8c7aa3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf","6589c4f1f587f73f0ad0af8ae35ccb53"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff","48155e43d9a284b54753e50e4ba586dc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2","1320454d951ec809a7dbccb4f23fccf0"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.ttf","fe5ed5875d95b18c98546cb4f47304ff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff","ed7aea12d765f9e2d0f9bc7fa2be626c"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff2","d8b7a801bd87b324efcbae7394119c24"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf","f2ac73121357210d91e5c3eaa42f72ea"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff","0e897d27f063facef504667290e408bd"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2","ad546b4719bcf690a3604944b90b7e42"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf","f60b4a34842bb524b562df092917a542"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff","ef725de572b71381dccf53918e300744"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2","e934cbc86e2d59ceaf04102c43dc0b50"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf","3243452ee6817acd761c9757aef93c29"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff","5f8637ee731482c44a37789723f5e499"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2","1ac3ed6ebe34e473519ca1da86f7a384"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.ttf","a189c37d73ffce63464635dc12cbbc96"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff","a82fa2a7e18b8c7a1a9f6069844ebfb9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff2","1b3161eb8cc67462d6e8c2fb96c68507"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.ttf","0d8d9204004bdf126342605f7bbdffe6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff","4788ba5b6247e336f734b742fe9900d5"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff2","82ef26dc680ba60d884e051c73d9a42d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.ttf","1fdda0e59ed35495ebac28badf210574"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff","b0628bfd27c979a09f702a2277979888"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff2","95a1da914c20455a07b7c9e2dcf2836d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.ttf","963af864cbb10611ba33267ba7953777"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff","4de844d4552e941f6b9c38837a8d487b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff2","9108a400f4787cffdcc3a3b813401e6a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.ttf","27a23ee69999affa55491c7dab8e53bf"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff","3045a61f722bc4b198450ce69b3e3824"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff2","61522cd3d9043622e235ab57762754f2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf","6bf4287568e1d3004b54d5d60f9f08f9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff","0e0460587676d22eae09accd6dcfebc6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2","b8b8393d2e65fcebda5fa99fa3264f41"],["/pluginsSrc/katex/dist/katex.min.css","1612bcd72cc503f18e2f302b3a2addd1"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/tex.js","29662ef385c73c4dd9e99b17cd2d579b"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/pluginsSrc/mathjax/es5/tex-mml-chtml.js","2e00d51c98dbb338e81054f240e1deb2"],["/pluginsSrc/medium-zoom/dist/medium-zoom.min.js","348914dc9144b3441a2a0c9687604a16"],["/pluginsSrc/mermaid/dist/mermaid.min.js","6ac0bc75c4398d190add2a099ecfc206"],["/pluginsSrc/node-snackbar/dist/snackbar.min.css","4220368aced9a5ce011f2ce9bd8b1035"],["/pluginsSrc/node-snackbar/dist/snackbar.min.js","8f19a3527021a6268cd8488a5debe7f8"],["/pluginsSrc/pace-js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/pluginsSrc/pace-js/themes/blue/pace-theme-minimal.css","7bba84cb68736f6ea9ae77cd934d995a"],["/pluginsSrc/pangu/dist/browser/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/pluginsSrc/pjax/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/pluginsSrc/prismjs/plugins/autoloader/prism-autoloader.min.js","4f48958b1802a9d99581aa5ab1e3f621"],["/pluginsSrc/prismjs/plugins/line-numbers/prism-line-numbers.min.js","ffdf7bdb8ddaf0c89a4e4225e1086264"],["/pluginsSrc/prismjs/prism.js","54e45d657b6a3471bd7cc72d0873c0b1"],["/pluginsSrc/twikoo/dist/twikoo.all.min.js","6e50dec5aa48cee1cedee5031e205c9e"],["/pluginsSrc/typed.js/dist/typed.umd.js","3ba6a3f6e22122d8f5ed22c423299981"],["/pluginsSrc/valine/dist/Valine.min.js","c748c413b03bcdb2064c84bc9e06613c"],["/pluginsSrc/vanilla-lazyload/dist/lazyload.iife.min.js","5c428686b7abb44130624001e05414d0"],["/posts/0.html","b4b976ac62883837b529f84c99393e09"],["/posts/13c8547c.html","b461a1a9057398272f0f77fda7655942"],["/posts/1750b1e.html","dd7656be1f02bba3da4a93c75b942f65"],["/posts/1886d22.html","a0d41552bae08ab3511b99e5068317af"],["/posts/1966b38a.html","825914017b7ae388a966b2df8d9be594"],["/posts/198a4240.html","e2ca9611250eb0618a53690d465e7567"],["/posts/1a5e1c0d.html","0668c13b6c95fe8172a732d1632436e4"],["/posts/1eb7c6da.html","227109b3c9f81b5fce0e44028751cb7f"],["/posts/1fa16eeb.html","4eb5096b430a88369fc2d7756181aac0"],["/posts/2023da43.html","30cdf8c8631c7d736603869116731b51"],["/posts/21cfbf15.html","7a0bfb6d804da67ceaf9e46cd2421cb7"],["/posts/239d9bb8.html","ea970f9a9ed67cce986ac50442932f17"],["/posts/246bafd2.html","6e7aa58761cfb6b3e72929556ce69e5f"],["/posts/26d84ff1.html","5dac33c9502086b3085fd5fafa002cd0"],["/posts/2b5a6d5d.html","b00a930a05692619be99f7e264c87a20"],["/posts/2ce2f8d4.html","5b4a0681741a7e85f9201f9297319e97"],["/posts/2df239ce.html","57a8d43956500ed0b83f332ca7889414"],["/posts/2dffafc5.html","7df1e69f7627c81886e1047aa0c0aeb7"],["/posts/30fe99f3.html","9cb301de6c4856a0bed1f0c95b31c203"],["/posts/32423d5.html","65963f181ef109eb1babd208f7236a59"],["/posts/33a14f44.html","b8c920c3903835cc915c6a8038ee56f4"],["/posts/35047491.html","0a9601aa24cd63f05db990d33308a5be"],["/posts/359243e.html","89546e03b845d92157d437ae39e74d4d"],["/posts/368d6781.html","fb49b005f221c181dd0998e8108a2d2e"],["/posts/38142277.html","763b1bc1dcab9a10cce8c69bde5fa6a6"],["/posts/38b005e1.html","6d2c05f3189503f7ed2100a920071ff4"],["/posts/38b6caa1.html","2d318abd5e6c1a4fc3498c8492f3b0d6"],["/posts/39b121ef.html","942b997b077d8f6e6a02cb81c437c79f"],["/posts/3abec1ed.html","396d974fb6d0da08a9772b4af69922f0"],["/posts/3e07c6ea.html","d19832e2917788bd322935fae432f2b8"],["/posts/4021dce1.html","52ab934157309de46399cf207ba2e179"],["/posts/4073eda.html","90c232e0bb16070f296cdf61804c07a5"],["/posts/42fa6192.html","28e95c8a06ff38e7dc0a43a9f1340008"],["/posts/4300826a.html","29de032f6518de661bf680eb2a191585"],["/posts/49479ad2.html","7df701086587e04fbb7cbd61ec20633b"],["/posts/4aa8abbe.html","34cb1b30b3159394e4a11f242486f9b9"],["/posts/4de20b3b.html","2a66460c3e8dc1200128059b035ec8ad"],["/posts/4e93ccea.html","577292623373445c3c0ea6757528c491"],["/posts/4edb8f20.html","ad9a74608855b340e5155cfa55e4d28f"],["/posts/507c070f.html","0c37989e85647921adf1860dd434edd6"],["/posts/5095a20c.html","6e9eab4ba87419a958ed2836564e9abe"],["/posts/52a47f9.html","7ab8d7eaf0f8e7bf6ef4d3ad4ac41374"],["/posts/52e14f90.html","2e20568281a511c336c6dee1c88b52c1"],["/posts/536c9f44.html","16a3e7df07adf88a1c7f8c94c6fb2e18"],["/posts/53a83f72.html","ed86b1250e7c63b88c2f5e5ea1c2ac31"],["/posts/551c5fa5.html","3f3579174856a93332cc8dc6863bf408"],["/posts/568325ac.html","83b6803fc910da0f51774db21e41d538"],["/posts/5729df21.html","72520603cd429b784b4969a02b76e554"],["/posts/575e5af9.html","bf6af45ea63c2cfc454f3ec99bbd57cc"],["/posts/57bd4a84.html","86095ee1898508c3e62304ad784a82f0"],["/posts/596e852b.html","1a671a28c63dfc71aa5da0f2270bb52d"],["/posts/5d51032d.html","05105ce18e9448121db95b12d26916f7"],["/posts/5f7c4ea0.html","ef531913296589ce91c6d9b7bbe04831"],["/posts/5f8718b7.html","c05331fb9197e8e3f783c19b52dac6c0"],["/posts/60284ea7.html","937ca6e983e63bd994060e8a2d8fa6f5"],["/posts/60c2c915.html","884fecb41c0bd10b4ad4a7c56b3e3eec"],["/posts/6201cf8d.html","93340fe1a72d7c72f3d9e979c313df04"],["/posts/636dabfe.html","53f1e23c1e617432bada928967431b26"],["/posts/64c9400d.html","32bde222acdb047366773dffd62d2c5a"],["/posts/6503a147.html","0658ca76de22021dfd8b8e70a9ca6825"],["/posts/66985181.html","12792f4e5da28367e9b842215593f56b"],["/posts/68623a63.html","0fc5d4c388b5a1664190479c1d393f6b"],["/posts/6ad51b4.html","c9243b5e074991cb605683692e672944"],["/posts/6b922888.html","c8acbaddd2b1143c49159d44371a1853"],["/posts/70f280ec.html","a03bcac71e389dd836ac09ef57f8b50e"],["/posts/71978ee7.html","a80d3e11a7208ec9104bca06b8fd3eb2"],["/posts/731e6299.html","bd88dc57f9941de2c7548e9352c8158e"],["/posts/7670b080.html","4cbd6859975a4f1dbc58010452de64be"],["/posts/768e8ecc.html","3a19a9b4214bdc600ce94191c584d0e1"],["/posts/77c9a2eb.html","161b9a07dbc374b0aff84a7ff97513c7"],["/posts/7801a0b2.html","3cb89785cd98ecb88d50d11322c34999"],["/posts/78430d81.html","49ec25b0fc8d4766dc9ceb909ce4413e"],["/posts/7af5e990.html","13a2d669def300ec9f13a78e38ac41e6"],["/posts/7b87ee30.html","2a50e7602c3ce2c6bd42650cc0fba40c"],["/posts/7d79717a.html","ba24ff5442716a4788426600734a5f53"],["/posts/7de6d28a.html","ef77af2fb8dbf729151639cb9ab60307"],["/posts/7f5771ec.html","0cb2bbbf95fffdfd2eea53025a43376d"],["/posts/8001d6e6.html","fd58e34fd8113f8fddc548864d6e980d"],["/posts/814432ce.html","80731b7115b68d7f9c436f1a40c85283"],["/posts/81786960.html","772993a31e8d9f39b70ede16591fa29f"],["/posts/81a831f8.html","9db7b166ecdaec1300e2e54f098fceda"],["/posts/847f802a.html","c8c0818d01a3995f6b910bcefb5a4d1f"],["/posts/889641a6.html","ed3afe53a1e0c7309ae72fdc4a75ee02"],["/posts/89757140.html","6071584fcd088ec37c7d393b8995f3bd"],["/posts/8bf59925.html","3664c8083f38a4a2e5bda3bf3e1ce3ad"],["/posts/8e23eec0.html","64281fe990ba49360a26852f47e179c1"],["/posts/913b2502.html","20d7150818fd130b82d267ce6b1f74b8"],["/posts/92f3b359.html","a2727f0fdc7cc1cf7dc02e458d075e6f"],["/posts/938c27be.html","90a970fd39c4e354c64292cb25066fcd"],["/posts/946ecc87.html","38aa55587be255f5f6c0874dfe63b350"],["/posts/953d25ac.html","742b380e3866d4e11b7fef6d9adb1e95"],["/posts/983b9cdf.html","0e48bea0104991f6a64eb0d50037b446"],["/posts/98817f44.html","e5fc85989a1e88e8c996272e1498986b"],["/posts/98d20436.html","df3f2d7e8cf70be57c7bdafea55010d1"],["/posts/9db656e5.html","3205a88e70d31ebc9e6a5d8161cfa342"],["/posts/9f789b3d.html","d2d1929ebbf8b0b7a038551ea0453b42"],["/posts/a1ecf766.html","82a183a91d3e248221b6fe8062804267"],["/posts/a51da93b.html","7bc7145faf722502663ddd745ff7aa9e"],["/posts/a5b7128b.html","135855d2019139afe80e4748e2396059"],["/posts/a819016a.html","24b53b99207a0f353ac397bcbc16a049"],["/posts/a90d7f93.html","0f7cec6743ea2dc7d35f726f908c718d"],["/posts/aa58734d.html","66cc741360ca3b32d85d64fc7a5a3afd"],["/posts/adbb14a7.html","3cb107c228a8f2c6a7770141ad04a0ac"],["/posts/af69aba0.html","39c68a2ca8341d74b92ca55dbffb0a6c"],["/posts/afc66f22.html","076f390a7785a4de7e36ce0ac382f533"],["/posts/b10c353e.html","e8ab80ce42e614d2246f3b886066947d"],["/posts/b284ac41.html","3b8d712d2ff9564391bc45b7fd1b119c"],["/posts/b2a9f0cf.html","ee379adb4adfcfa874a4c7889b2fad90"],["/posts/b2be80f.html","e8b5302716ce44516b0b448aeea95062"],["/posts/b37b5fe3.html","98ccc9473972682acd30291756373fa5"],["/posts/b62f9eda.html","9d9a1cf03fe67bc5073c3ae3d424fb9b"],["/posts/b6adbb.html","468019353bde52643939ef8fea3ed435"],["/posts/bca3a713.html","b4f1262dd7756ccbcd6fcd890f8673df"],["/posts/bcb29fcd.html","25cc434ea8a6a28aef9a4e1d3888981d"],["/posts/bfbe6787.html","1e91f33c3b0b8ae22784cbd26062ccae"],["/posts/c0297c2d.html","6ae2a1f6b777013fefa8f3b18e90defc"],["/posts/c13f1087.html","8c6397be7882fca33e3df23e82e823ca"],["/posts/c144987e.html","b005563178f04b71a171d13de55eea54"],["/posts/c180db3c.html","a6fd2482cb908d3dfc664854786dd4a3"],["/posts/c2b7b300.html","bede77feb0e444c350bd1c5e98b76c11"],["/posts/c2c733f6.html","1169320215c8b33278acbb3b9ba175ea"],["/posts/c304c6a1.html","bb164036dc8b037bc89cc938cae101d7"],["/posts/c62b54a0.html","16f9871a38736eaf17d37b259cc7ce0c"],["/posts/c7da2cfe.html","a6311ea5b527c77a4567fa3343760700"],["/posts/c8f54d07.html","b1503b6db629eee0625a15d6e65bd17c"],["/posts/c9711c19.html","5f15fdcfe5c62a30b7a4eaca752b9740"],["/posts/ccd6dc55.html","200753386a32aa176eb910bfd7be6987"],["/posts/ceeb73f.html","b1b3ea6038c506da9cb09e486591315e"],["/posts/cfb47711.html","41bf9a8d5168f80484c8f540af1e587f"],["/posts/cff7ed2d.html","91eb5c02287e8dec19cbf40f69873fd3"],["/posts/d250656c.html","1d2e8cfc5b161779d9b71d5d88942e0f"],["/posts/d2ade399.html","98b4c736dd857734a339ff1cd87d81e1"],["/posts/d46f6783.html","d5a54d07e1d71b99e54df83d9a6f996f"],["/posts/d6b675f3.html","961de450511d0c1c8e62490d6fb04873"],["/posts/d72ba00d.html","a705af2a24ee411e07f67bb21dfbd9d0"],["/posts/db9e0f83.html","c5c4be8b3c2520adb0f9667f31c05f7e"],["/posts/dc2d6da8.html","913239ef545c33acd194a3c88ed083bc"],["/posts/dc584b87.html","f2311511ef287a2c4c25409c2fc3db27"],["/posts/e063540a.html","48dc2ad4dea45da0b4eab6e16c5654ed"],["/posts/e0872e45.html","b2dcaf14329cf418e8a01e11dc305886"],["/posts/e0a5a9e8.html","5daa3a85d625bbc0ad250caf540440d2"],["/posts/e2486079.html","eac4e4d3f78e77a1d846671d35c08daf"],["/posts/e6cdcbc8.html","31c02af779f3b3a33d4a297c4a29c16a"],["/posts/ea33ab97.html","e38fe4c0c622c5cd1dfc4b80f28e42e8"],["/posts/ecb39c55.html","bf1dd14eb87bfb79c4f60b64228a6b3c"],["/posts/edadbf98.html","c44c2351987224332ff391a40b1f7036"],["/posts/ee507888.html","a0b996646f18f22805a0312c019542d5"],["/posts/f0a9a587.html","3514e3f4315f77e3b1ba019811d4f457"],["/posts/f18d9e91.html","7d4147fd000cc5246d76a422c99d5879"],["/posts/f1a5d141.html","d494b0a71473b06f1bc41482570101b1"],["/posts/f2242946.html","9cdf3c21a3d7ab56e458817896e99ae4"],["/posts/f32acbcc.html","a8f61565187ae00cbeadbb399758531e"],["/posts/f6010553.html","79c1b724f20f27718f2772a56fee70e8"],["/posts/f75a1c90.html","b8b10a25b2b3317fb28addd358966626"],["/posts/f9da1911.html","e24c82027969b168d615701c01b0d5e1"],["/posts/fd3d5dea.html","f77c16170fb62e397071df3b037c309e"],["/posts/fd96eead.html","4ba076bb82b636472d572e044298ed62"],["/posts/fe187ecc.html","43fdb0d7e7c64e93afdfd9f811c2649c"],["/posts/ffb80acf.html","78f4081591208558db51c54ea0b105da"],["/sw-register.js","204e994aa908f9a82c2d45f5d0c22ec6"],["/tags/Aplayer/index.html","d0e0f8070f2608053f6dfb7b5078d457"],["/tags/Bar/index.html","32dffcdc2720567079a9fcc81e0167be"],["/tags/Butterfly/index.html","c63eeeaf0bdbb7d6f7d9cf4a0d4c3352"],["/tags/Hexo/index.html","2c288277f442ab2162924adee5860214"],["/tags/butterfly/index.html","99f62a10cc4b14ee1902a4b2469a2461"],["/tags/demo/index.html","bc65732556772995b5f4a292fa414035"],["/tags/highlight/index.html","ab4f961187d71ace073d2f3af39b6e1e"],["/tags/index.html","0c9b9e289de6bee27295867709a5eae8"],["/tags/tags/index.html","37ea65bbbd05d307d1ab099bbcac0686"],["/tags/tags/page/2/index.html","68ab84a5b7f245193cf3b029ca8f4cc4"],["/tags/tags/page/3/index.html","710d229c38298ffd6faaac0019a27ee0"],["/tags/tags/page/4/index.html","e6dc599f4ff42c7e6ee25a57a18abe92"],["/tags/tags/page/5/index.html","5bf03ef45a566f29a3d41a55d01b8a49"],["/tags/top-img/index.html","887c97f01d1c185fee7402f8990221e0"],["/tags/主題/index.html","71916d0868c0dc638cd6eb183822ab36"],["/tags/優化/index.html","f8c99c90c8fe565c1ee39d6064c9a9c4"],["/tags/打賞/index.html","bd63dcbc1e5023d64e2b0d2c12ff2861"],["/tags/教程/index.html","a9e3516cda3db8372ed5a86016bd1fc4"],["/tags/標籤外掛/index.html","19b3da75974adc75ce0242e835150078"],["/tags/美化/index.html","673ba11b267c69bd7f1b8b78dfb60351"],["/tags/魔改/index.html","bd524079c3102a8d8c3014c9959a7549"],["/untitled.js","60b6022d611f9ba01a721942cc5d90eb"],["/userAgent.js","428949435f0f1dce3eb22d209e1fee61"],["/video/index.html","021ab02af89a57d797166f1a6a891b5c"],["/x-frame-bypass.js","d0e55673f7b13b00bbe5c2182932c465"],["/万能api视频解析/README.html","9a64bf4edad1202363c2d6b8fa534c01"],["/万能api视频解析/index.html","b44d17c74a060dd0efa1c1cc1c29f427"],["/小姐姐随机播放/index.html","90269a0706320cfdb5560418c82ee5a3"],["/小姐姐随机播放/static/css/bootstrap.min.css","bbace035fd25209e34be801cdeaf7a17"],["/小姐姐随机播放/static/css/images/bj.jpg","7014c63c5ba024799b083089e2429e2c"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/小姐姐随机播放/static/js/vidwo.js","492611017763533df2ad01defecc7fb1"],["/短视频/error.png","c0a42e5fa294aae62a201f0485a15a3e"],["/短视频/index.html","e5dfb0e4dd7ec20632070248a61c74da"],["/短视频/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/短视频/loading.png","5d9953167459e98abce58311c8031d98"],["/简单导航/404.html","63c9f24b15167b37e132229d013b1578"],["/简单导航/README.html","1e1e992aa8d0cd5a4b72be4bb455b0e5"],["/简单导航/index.html","bd0247b2ca49aaf359126cf330f51dd9"],["/简单导航/noonetodie/images/gdyx.png","a05471cce0082b41fbae133e67c1b6e2"],["/简单导航/noonetodie/images/wu.png","29de547658d091403d3242ef4266dc73"],["/简单导航/noonetodie/images/xiaoren.png","232b9342b8c5c61b56e72bab03076ffe"],["/简单导航/noonetodie/images/ygdbns.jpg","b6699f201e2ab40e54b64745cd2ea80c"],["/简单导航/noonetodie/index.html","cdf70535c52a1bab4fcf78c131411969"],["/简单导航/noonetodie/js/main.js","bd66da33e99276a1d187abdfef69bfe3"],["/简单导航/noonetodie/js/require.js","2a31ed34ccf92aa78c5c7ff5d4c39a26"],["/简单导航/win12/README.html","babd1d8604ddca4325c4edff1a10ddd1"],["/简单导航/win12/apps/icons/about/info.svg","a837ec9aaf652461cad073742fb8d89b"],["/简单导航/win12/apps/icons/about/update.svg","0c8c8ae96f167f403e14d7d3c9aa6b50"],["/简单导航/win12/apps/icons/explorer/disk.png","89df4f1a995fe5cabfa93a7ca15ab2d8"],["/简单导航/win12/apps/icons/explorer/diskwin.png","8f95b402294b0183543920364af3270b"],["/简单导航/win12/apps/icons/explorer/od.png","93fc2191ab284ce29a08e41a2250e95e"],["/简单导航/win12/apps/icons/explorer/qa.png","0e455f04220cf708a4d25df1e6dd9763"],["/简单导航/win12/apps/icons/explorer/rb.png","3ffbde87932c94cb55dc5d7e6cce49d6"],["/简单导航/win12/apps/icons/explorer/thispc.png","605323c51660aff3db4f27d0131d4fb1"],["/简单导航/win12/apps/icons/explorer/tool-copy.png","b78f25678bc1ba7fc5d2d6a4fb4a1933"],["/简单导航/win12/apps/icons/explorer/tool-cut.png","606378803bbafce26e9488030e82b4e6"],["/简单导航/win12/apps/icons/explorer/tool-new.png","403feb6235f6551cfd20dc970886a6be"],["/简单导航/win12/apps/icons/explorer/tool-paste.png","d5b06481b2887acd6ad5e3f399858e92"],["/简单导航/win12/apps/icons/explorer/tool-rename.png","56f0a1bb60c7bc13873ed4efca6ce8d6"],["/简单导航/win12/apps/icons/explorer/tool-sort.png","57b8f61c524fe9e894956abc0642e589"],["/简单导航/win12/apps/icons/explorer/tool-view.png","7844ce1cd03ed70b49ce47971440739e"],["/简单导航/win12/apps/icons/setting/apps.png","87bde3db35fcc7deae476223243f8ea8"],["/简单导航/win12/apps/icons/setting/blueteeth.png","1f5d3d76dd5cc368f4389f7d8ad28803"],["/简单导航/win12/apps/icons/setting/game.png","3b876313e35ed7cf27cdac26542b10cf"],["/简单导航/win12/apps/icons/setting/help.png","7f3ff22100323605dc256b8fd98829d3"],["/简单导航/win12/apps/icons/setting/icons.woff2","2ec186e1afec55ea3f2752eaf6dea238"],["/简单导航/win12/apps/icons/setting/network.png","adc513bff915108429498a7877268c29"],["/简单导航/win12/apps/icons/setting/personal.png","5bf45299de5e59cd47d4cb7450b0841d"],["/简单导航/win12/apps/icons/setting/safe.png","7badcf2f0c00f7a326a54d668fd1d435"],["/简单导航/win12/apps/icons/setting/system.png","fcf935c901ecd434f2fc1d5b62b636fa"],["/简单导航/win12/apps/icons/setting/time.png","72885b049d05e00aac0ef938606c52c4"],["/简单导航/win12/apps/icons/setting/update.png","968bc43be6076815e94589b122f39c53"],["/简单导航/win12/apps/icons/setting/user.png","43fb0b7556928ab822e482de64248687"],["/简单导航/win12/apps/style/about.css","c75d7cb412ff8a4ba5242a5f0a7f1fdc"],["/简单导航/win12/apps/style/calc.css","09234cb9b14fdf181b7dbddba3b41fee"],["/简单导航/win12/apps/style/explorer.css","a8346faca5487405c62575c99c61b203"],["/简单导航/win12/apps/style/setting.css","0dce996d85c5ac6e700f9b774ba575cf"],["/简单导航/win12/base.css","9e63250bbbad4e23ec2c80de035e42bf"],["/简单导航/win12/bg-dark.svg","4c8fed16d52c6b84b71d7b5c0f5acbc7"],["/简单导航/win12/bg.svg","9ed19a94566ac6946e4ab8c02e1b2c2f"],["/简单导航/win12/bootstrap-icons.css","8af014a7585ec6b944e3dc5cfd77b89a"],["/简单导航/win12/desktop.css","2eb10217a3e8a5ace18ca753e218ad74"],["/简单导航/win12/desktop.html","557db3709e343945c779e50399a22fc6"],["/简单导航/win12/desktop.js","19eef01c303d7bd548f31384f381f305"],["/简单导航/win12/fonts/bootstrap-icons.woff","be6df3f0c9855796ae0c099ee4ca43ce"],["/简单导航/win12/fonts/bootstrap-icons.woff2","31e1300d419245fd27614630601dc74d"],["/简单导航/win12/icon/about.png","02b078c4249f812ff0fba8f363c3374d"],["/简单导航/win12/icon/calc.png","f4d98a38e77f8eec4acf121d244ea2ba"],["/简单导航/win12/icon/camera.png","9e977d0605e9452a05db674bbddd4e4c"],["/简单导航/win12/icon/defender.png","86584d66cd939b45a063b1e6a4bbb564"],["/简单导航/win12/icon/explorer.png","c45749adb3de4dc9e1bda0a9fc1412e1"],["/简单导航/win12/icon/feedback.png","d74d3809ba1311cbad94ec1e7737ccd0"],["/简单导航/win12/icon/files/excel.png","9737aca13242b71cf76bd4121c965ca1"],["/简单导航/win12/icon/files/img.png","d1c6411703b689d31a365302a7228b10"],["/简单导航/win12/icon/files/ppt.png","76a0b864def30d5a985c3e99ba7d1c7b"],["/简单导航/win12/icon/files/word.png","3612aac2f6e8c58ac57c51584f49a4b2"],["/简单导航/win12/icon/folder/docs.png","dfa39b3a8d40b774873a8275fb260a86"],["/简单导航/win12/icon/folder/music.png","90089cea05d1f0240324e52871e35106"],["/简单导航/win12/icon/folder/pics.png","2c9c768e2c91cca37063eee8f960fc37"],["/简单导航/win12/icon/notepad.png","2260a01f65ee7798f382ed5afb157821"],["/简单导航/win12/icon/setting.png","e050ccc7621dab2bc49f226a91b093c5"],["/简单导航/win12/icon/store.png","23c0e553951ba31b1f10644f09dbc594"],["/简单导航/win12/icon/taskmanager.png","1344f0c1a1e9ad3203c5e224e347cc0a"],["/简单导航/win12/icon/teams.png","2b7969712645822d03c13cd7c7dc9ca8"],["/简单导航/win12/icon/terminal.png","1a3138fa728bf4172e24024b70a221f5"],["/简单导航/win12/icon/user.svg","64e91eb73625fb7b3d99295bcc42c588"],["/简单导航/win12/jq.min.js","7c14a783dfeb3d238ccd3edd840d82ee"],["/简单导航/win12/reload.html","b18f04f971c3d36315a1a79e151dba80"],["/简单导航/win12/shutdown.html","5f0bc8b8058fc83c6278418d60fa189e"],["/简单导航/win12/start.html","0fc718c9680a26cc8c79b4bd21609317"]];
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
