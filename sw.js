/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1718118026542.png","8a0928268b3b8b6d814f35c27bd80b27"],["/1718118228833.png","10c0a740a9a2bee9f3cda1108e7f0195"],["/1718118230654.png","31af858ba9ce2ed6df771ddbf358df23"],["/2580.html","3f8cdc9ebc1004aa39fa006a8214a40c"],["/25802580.html","bb4880e554012331382f8159b9a19a6f"],["/258025802580.html","07666ebd42cb3fa95a470dca51a9e996"],["/9999/09/09/文章/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/9999/09/09/文章/Adsterra.html","4ec78614dc4c91839cc065a9f223743f"],["/9999/09/09/文章/Metrial822.png","4deb8d4f959f9d19c81bc44a10fc3cb1"],["/9999/09/09/文章/PlugRush.html","dd4039bbf02d2fba1408cbc2b534dcc5"],["/9999/09/09/文章/Popcash.html","1eb441204a135f6a916f0ee49eebe255"],["/9999/09/09/文章/PropellerAds.html","0a9d272318df792bed59e89369f12b33"],["/9999/09/09/文章/RevenueHits.html","68661af826e3e5312ed722d70aeaad69"],["/9999/09/09/文章/Slimspots.html","8a4e1b3220a9b7bab0b5bbf6aded0064"],["/9999/09/09/文章/TrafficShop.html","8e12e0520e2327d25b4d95eaa99af538"],["/9999/09/09/文章/Yllix.html","c501fcd268f92f9176cf867a45086467"],["/9999/09/09/文章/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/OUnion.html","0e6b3af9e0c8d8d40e29df95bd937cd4"],["/OUnion2.html","4ec3f1777d936abf9fc9dbe86b0ee1a9"],["/archives/2018/07/index.html","8a81820d5d60405c2a016b317aeaa814"],["/archives/2018/index.html","7d5bd904adfbd46af5cc3b51aca8447f"],["/archives/2019/04/index.html","a8662542d2011dcfef098f3b28738ade"],["/archives/2019/07/index.html","102464c45531c986d0c85a2de0e3dfe0"],["/archives/2019/10/index.html","44bb0ba5ba1826414d382e9e69e66380"],["/archives/2019/12/index.html","d6efe354567f3370b6b6137a366f6764"],["/archives/2019/index.html","7c837d805c1405af3191cdd0c11f2f43"],["/archives/2020/01/index.html","40501627258bfb0235b0b4a3de325afe"],["/archives/2020/03/index.html","2e28da911fe2b89450be85cf4ce54b4d"],["/archives/2020/05/index.html","b8d714f57a2a42a56ecfb10a826cf17d"],["/archives/2020/06/index.html","e5943a47f765f9cc81eeb8b0febd37b6"],["/archives/2020/07/index.html","6ecfb91af30d53c18b93d597ea9e2d85"],["/archives/2020/10/index.html","08787ee4350f3784944ea41a209276a4"],["/archives/2020/12/index.html","82dfd2ecee01aeb37147f7b41faf3df0"],["/archives/2020/index.html","019f24343e11561786f7b8693278152e"],["/archives/2021/01/index.html","3f61cb3c842867bc130b2be2ee351d81"],["/archives/2021/10/index.html","7055477b2a0c3be46c04de32e8821c05"],["/archives/2021/11/index.html","296bcd8ceac3558de76771cbeab4878e"],["/archives/2021/12/index.html","d7e8aab34fa596d214c4540932722e0c"],["/archives/2021/index.html","b51d207f8749f9bd40389ba8e213eecf"],["/archives/2022/01/index.html","9929eace5e87c03c93a73b66ab3cb2d2"],["/archives/2022/07/index.html","a9f64c185ee1a5d18b5edb34a2bc4eab"],["/archives/2022/index.html","1d56c1445112c45e6f6cf263e6f001e3"],["/archives/2023/07/index.html","a7b832fc01049cbf682904335cec7264"],["/archives/2023/08/index.html","6d01d6ca618d70291a8a9dd2caf9e9bf"],["/archives/2023/08/page/2/index.html","b11c6174338a0f0bf57ee61c34de41bd"],["/archives/2023/08/page/3/index.html","71a9c1b3921903e8d98fb83b6c0c1013"],["/archives/2023/index.html","8a043d4093ebacf58be2f113d788a934"],["/archives/2023/page/2/index.html","0765c0693c83b1ee647b7ddc989290a9"],["/archives/2023/page/3/index.html","03d13858ca2dfe86e65602c99fc79603"],["/archives/2023/page/4/index.html","ea0b96def2a94915367ce7e663358c1c"],["/archives/2024/02/index.html","3294713ba269fd8e2e40c36d26e9817c"],["/archives/2024/03/index.html","c53554c6e245b7818943c8d148d6a675"],["/archives/2024/04/index.html","6ca2d4fd6acc121585916141c5212046"],["/archives/2024/05/index.html","6bc778bd1957c928ce62a64e44c840bd"],["/archives/2024/06/index.html","cb29c9e7e3f0b35062dbe2e94b06fbbe"],["/archives/2024/06/page/2/index.html","5cf423fbbc150f23a0928f117d3068ee"],["/archives/2024/index.html","4bf3fd65111adc3cd6cb4eb0c0828eab"],["/archives/2024/page/2/index.html","a94e618a0df4f2f98b2c1549917c6f2a"],["/archives/2024/page/3/index.html","f001d8094695de08d9013d713204a480"],["/archives/index.html","8a25ee5dafac4dbaadd13ccee9ca791b"],["/archives/page/2/index.html","1066bedcf2d94c5a7b9f3d77ef587b68"],["/archives/page/3/index.html","3b1ac4f67030ad0aafc5b7dcc65e670e"],["/archives/page/4/index.html","96a558a7b347e86944899e9184602dab"],["/archives/page/5/index.html","cc447a4af7ac298bc20b7666243b2cdb"],["/archives/page/6/index.html","8613982bdb0c1c74a42d2d89fb12af6f"],["/archives/page/7/index.html","2dd07f9d4ba7daccbfad2b771c7a170a"],["/archives/page/8/index.html","d32b723225f4ab029a594599db4f1a7c"],["/artitalk/index.html","c1d8b90da411937681f7c6f5fbe7f3f3"],["/categories/Demo/index.html","157fa8cf053cfa15eeb612cf67a18bc0"],["/categories/Docs文檔/index.html","9f5d1814b8eafd81cd87ca24e4162558"],["/categories/Markdown/index.html","9d60969a2e282397372431d657bdd248"],["/categories/Thx/index.html","1627e7eb26a411ddb7b7d623519646d5"],["/categories/categories/index.html","0f8d9d54b47d3841195ba910d955885e"],["/categories/html/index.html","5b3d4d2467cfc32f4f04fb40dc21dd62"],["/categories/index.html","2c3afda3627a9ed9bf506d78ceabaa00"],["/categories/lua代码/index.html","18cae8a1996e009c3fc472d847cfd044"],["/categories/作者自用软件库推荐/index.html","aa14ba1e941d6084e4b6ce20062c0ad4"],["/categories/动漫网站推荐/index.html","6aa8ab76f32d44d4afb58eff6e7872d8"],["/categories/合集/index.html","430131ff3fd03ce05e590e552cd34bf2"],["/categories/国外网站推荐/index.html","6182c7d70022a3821dfd2fbfd79bd8d1"],["/categories/小工具网站推荐/index.html","eec2491e33f0dc2bff0e4306de1e67fa"],["/categories/小说网站推荐/index.html","f2ec2f2e84408c8b67a87a8a76af3b79"],["/categories/应用市场网站推荐/index.html","1fe68b7d399d5d543960c5f6b73a57e1"],["/categories/影视网站推荐/index.html","294ba938847a4d2e0719cd25480fb376"],["/categories/我的开发/index.html","5c9b2595cd2492c7a84a486af0a219b8"],["/categories/文章推荐/index.html","01090464a07ba51b055f431acc7d78b7"],["/categories/文章收录推荐/index.html","5cda2d6a7cf22e78fb15ca5437052c98"],["/categories/文章转载/index.html","11a852704e0be913be954207761d65e7"],["/categories/海贼王/index.html","5ac9325e26dd14eb7f3afc5a1e363a34"],["/categories/漫画网站推荐/index.html","7199b2c69519634f7b922863c298cb46"],["/categories/直播网站推荐/index.html","2279d9a3d5daf7cb02546d32fc454016"],["/categories/网盘推荐/index.html","0d960cb71b2e4bad22e31656c948057b"],["/categories/网站分享推荐/index.html","2b8c15445f51ef2a5c532ea60c10a7ac"],["/categories/网站推荐/index.html","66381edeced0336038a569c250001def"],["/categories/美图网站推荐/index.html","b1886efecbdcb59806a5ac740a8417f0"],["/categories/美女分享推荐/index.html","1aca608efcb8e0c4e2b10a690a0930cb"],["/categories/美食推荐/index.html","a99ca719038ba409748512a2b9b25e4c"],["/categories/表情包网站推荐/index.html","07adb0d8158ef2856e0ed99f821a7ee7"],["/categories/资源网站推荐/index.html","7e2c01184c7607c343d8947b8716fa60"],["/categories/软件库推荐/index.html","6d014a0f763e708b303d1bfec96cbd89"],["/categories/软件推荐/index.html","d0b0499252310e0f8a41112a868f5ed7"],["/categories/软件推荐/page/2/index.html","fd00c3e3db3fb22995d9ff8c735ace96"],["/categories/软件推荐/page/3/index.html","b6153d2b54a436cf422b6da56828aad3"],["/categories/软件推荐/page/4/index.html","e06b38b5a794e8433e5769db4982e6d3"],["/categories/软件推荐/page/5/index.html","612515ac92787779f063fc1ddd7b76b1"],["/categories/進階教程/index.html","4defb33c03c54b095157eef2308a741d"],["/categories/闲聊杂谈/index.html","179fe1e26a69e9310cd3b6e0bbeda6d7"],["/categories/阿里云盘推荐/index.html","3ad692788b9c8e9171d58d4a7fb73601"],["/css/2style.css","614d91358f6b26c603779d5bc822bc7e"],["/css/custom.css","15d6e5b6ce6cd6d4a2b0effe06244960"],["/css/custom/fixed_comment.css","702d1a40520f45ee748b05010bc22ba2"],["/css/custom/fixed_comment.js","f9edc32e935c98b69ad616c7a39b4418"],["/css/eurkon/eurkon.css","ede1c099cb01cabb1505cd520d7afc00"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","dc17cfd04ed265715239111a52b74ee4"],["/css/lua.css","a32c17881bab67473fd4a74372edbc8c"],["/css/mobie.css","524958f19b70239106d6aaa5decb86e2"],["/css/player.css","bf081626a42aae043604021ed40f6ef4"],["/css/reset.css","7f67c3ba6c820d0a0464ccb609f3c830"],["/css/style.css","219b80c89b65ad80bc928a568667a98b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/viewer.min.css","ec961a06f9292db17c03e324362159da"],["/equipment/index.html","6c961afc94bb5361a3a10f80263eef9c"],["/googleb0c521173282337f.html","a1202143e8bd8d5fc83b37ca723da70d"],["/img/404.jpg","10c0a740a9a2bee9f3cda1108e7f0195"],["/img/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/img/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bb1f2127b2c32dc32703051a27dcf52f"],["/js/card_weibo.js","5fa4471b13d0bd4315be295663388e16"],["/js/day.js","9ecbbfaff260a5decaac659cff9c2c96"],["/js/eurkon/color-thief.min.js","96805f1e38ea0b713936ec18e7b450a0"],["/js/eurkon/eurkon.js","45abdc07a0ca42bda16f214f59f34488"],["/js/eurkon/refresh.js","6de41747d67d724d4b7d619b87869443"],["/js/eurkon/rgbaster.min.js","90546dec3661d234ff3ee6f6bcad527c"],["/js/lunar.js","cbf72e0a749b2b1473dac72e16f7ffc1"],["/js/main.js","e8fba2bc3e87389d1ee16ec25d5e1d34"],["/js/search/algolia.js","cb2b0f7e1fcea9d7485a395f69c94468"],["/js/search/local-search.js","483487f7261461207536fd9bde606418"],["/js/tw_cn.js","dec7bff10294055b65e3dd37af6fb3c1"],["/js/utils.js","2ff83587b5454af8cbd934f5caf6b94c"],["/lazysizes.min.js","45bacd312d5098b4b59f563d8756c15d"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","6465eba63e10cde2a301fa04d1238f3f"],["/luago.html","d92ec3462f45b0ec3a977f142f525706"],["/luago.js","3d9c4c576287f2d0a92bc064492e8996"],["/page/2/index.html","938bdb15054502f27ba39969879c38c3"],["/page/3/index.html","e7d220d988ebfa5bbd8c6aa2b0cea198"],["/page/4/index.html","3b01e713482457d01bc9bf52d9abe4f7"],["/page/5/index.html","8929f302e8bb0a8fbce975c81c356f9c"],["/page/6/index.html","29871e795a36d6b322d1bc7b7b76f633"],["/page/7/index.html","89e9cbdfb2d9e4ad5ae0dc7d83c5b5c3"],["/page/8/index.html","168ec0d7c3bca4da8c4c3026c3dc4891"],["/page/video/index.html","229351d34c54e1b4f2e8543cbde66277"],["/pinterest-bda12.html","d6f86ee6493eeb0791fed46cc662afd2"],["/pluginsSrc/@docsearch/css/dist/style.css","00d7257e4632574734bb6ceeaa1f48f8"],["/pluginsSrc/@docsearch/js/dist/umd/index.js","d7f1a1fcad32162a6f822e813413d0bf"],["/pluginsSrc/@egjs/infinitegrid/dist/infinitegrid.min.js","e0330821707eb7b0c2c5c262665d6ad9"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.css","6273cfb7c536e571916509ef02d26aa5"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.umd.js","0cb6b36bc12b1753e10d64eacb992fab"],["/pluginsSrc/@fortawesome/fontawesome-free/css/all.min.css","c325be79a5ecca85d68eb9e5b65a547a"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf","b7dee83cb5ee2c47b053e2620f4bbb78"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2","b55b1345f0b919f0cab774ec25d6654e"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf","3c264849ff4eb9b6e99eab9cd54c80ae"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2","aa7c5fa494807f7a9ec907defee083e8"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf","0a95f951745ba02faa8773ea6a1ebaed"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2","1ec0ba058c021acf7feaa18081445d63"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.ttf","95b97efa98f9e3fb869bc9634c43a0cc"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.woff2","fdb652dcc200dd23b8b8040176858c36"],["/pluginsSrc/@waline/client/dist/waline.css","faeb77e3dd6a5cadd547571f2859d7cf"],["/pluginsSrc/@waline/client/dist/waline.js","08f08583dbfe951670fb0ceaf9bb16e3"],["/pluginsSrc/abcjs/dist/abcjs-basic-min.js","011d55bbb15fafcfa66c9d3794a7b280"],["/pluginsSrc/algoliasearch/dist/algoliasearch-lite.umd.js","3680b9e24b8dad0c38ee2c0e2fc3a9bb"],["/pluginsSrc/aplayer/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/pluginsSrc/aplayer/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/pluginsSrc/artalk/dist/Artalk.css","f0d2ae6970c712529472cc290804f9c0"],["/pluginsSrc/artalk/dist/Artalk.js","193dad75c38b37d0814388aed4c62faf"],["/pluginsSrc/blueimp-md5/js/md5.min.js","2f577924085ebbe12e29f3ff706397d0"],["/pluginsSrc/butterfly-extsrc/dist/activate-power-mode.min.js","eb1c75760fdc1249dfb74db05ba39a5c"],["/pluginsSrc/butterfly-extsrc/dist/canvas-fluttering-ribbon.min.js","bee7265e6d121d3e2bbe25592163fa22"],["/pluginsSrc/butterfly-extsrc/dist/canvas-nest.min.js","b4b3398371256eb9c74a0001eb5fa25d"],["/pluginsSrc/butterfly-extsrc/dist/canvas-ribbon.min.js","15fcd2b43b47baa5418ae4004cd2c802"],["/pluginsSrc/butterfly-extsrc/dist/click-heart.min.js","8626378d634c886884e3f94ff060182e"],["/pluginsSrc/butterfly-extsrc/dist/click-show-text.min.js","56edbcd0697d5c8056d0d40d9bbeb26a"],["/pluginsSrc/butterfly-extsrc/dist/fireworks.min.js","b0f0a5c077706616aef9224fa0b4df76"],["/pluginsSrc/butterfly-extsrc/metingjs/dist/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/css/share.min.css","4b6e6c4b12b9206824231920ed3326c8"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/pluginsSrc/disqusjs/dist/browser/disqusjs.es2015.umd.min.js","1090676c68ac556956d14d40353c2da5"],["/pluginsSrc/disqusjs/dist/browser/styles/disqusjs.css","8edf59e04dfb9bb9b73d185e651262e0"],["/pluginsSrc/gitalk/dist/gitalk.css","8476031a633732dff9875feae0890070"],["/pluginsSrc/gitalk/dist/gitalk.min.js","8a817782fe4a94b4d2499bcfce04f8c3"],["/pluginsSrc/instant.page/instantpage.js","ae11493d70a8ce9fa776cc7aec1be764"],["/pluginsSrc/instantsearch.js/dist/instantsearch.production.min.js","24b7773ce2e1e149c3aa452ff90d8cf2"],["/pluginsSrc/katex/dist/contrib/copy-tex.min.js","6be74da2bd31a1975da5090d5926cd54"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.ttf","56573229753fad48910bda2ea1a6dd54"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff","10824af77e9961cfd548c8a458f10851"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff2","66c678209ce93b6e2b583f02ce41529e"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf","497bf407c4c609c6cf1f1ad38f437f7f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff","de2ba279933d60f7819ff61f71c17bed"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2","a9e9b0953b078cd40f5e19ef4face6fc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf","e6fb499fc8f9925eea3138cccba17fff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff","a25140fbe6692bffe71a2ab861572eb3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2","08d95d99bf4a2b2dc7a876653857f154"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf","b9d7c4497cab3702487214651ab03744"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff","40934fc076960bb989d590db044fef62"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2","796f3797cdf36fcaea18c3070a608378"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf","97a699d83318e9334a0deaea6ae5eda2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff","e435cda5784e21b26ab2d03fbcb56a99"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2","f9e6a99f4a543b7d6cad1efb6cf1e4b1"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.ttf","8e431f7ece346b6282dae3d9d0e7a970"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff","4cdba6465ab9fac5d3833c6cdba7a8c3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff2","a9382e25bcf75d856718fcef54d7acdb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf","52fb39b0434c463d5df32419608ab08a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff","5f875f986a9bce1264e8c42417b56f74"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2","d873734390c716d6e18ff3f71ac6eb8b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.ttf","39349e0a2b366f38e2672b45aded2030"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff","8ffd28f6390231548ead99d7835887fa"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff2","652970624cde999882102fa2b6a8871f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.ttf","818582dae57e6fac46202cfd844afabb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff","f1cdb692ee31c10b37262caffced5271"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff2","f8a7f19f45060f7a177314855b8c7aa3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf","6589c4f1f587f73f0ad0af8ae35ccb53"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff","48155e43d9a284b54753e50e4ba586dc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2","1320454d951ec809a7dbccb4f23fccf0"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.ttf","fe5ed5875d95b18c98546cb4f47304ff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff","ed7aea12d765f9e2d0f9bc7fa2be626c"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff2","d8b7a801bd87b324efcbae7394119c24"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf","f2ac73121357210d91e5c3eaa42f72ea"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff","0e897d27f063facef504667290e408bd"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2","ad546b4719bcf690a3604944b90b7e42"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf","f60b4a34842bb524b562df092917a542"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff","ef725de572b71381dccf53918e300744"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2","e934cbc86e2d59ceaf04102c43dc0b50"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf","3243452ee6817acd761c9757aef93c29"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff","5f8637ee731482c44a37789723f5e499"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2","1ac3ed6ebe34e473519ca1da86f7a384"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.ttf","a189c37d73ffce63464635dc12cbbc96"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff","a82fa2a7e18b8c7a1a9f6069844ebfb9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff2","1b3161eb8cc67462d6e8c2fb96c68507"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.ttf","0d8d9204004bdf126342605f7bbdffe6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff","4788ba5b6247e336f734b742fe9900d5"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff2","82ef26dc680ba60d884e051c73d9a42d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.ttf","1fdda0e59ed35495ebac28badf210574"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff","b0628bfd27c979a09f702a2277979888"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff2","95a1da914c20455a07b7c9e2dcf2836d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.ttf","963af864cbb10611ba33267ba7953777"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff","4de844d4552e941f6b9c38837a8d487b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff2","9108a400f4787cffdcc3a3b813401e6a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.ttf","27a23ee69999affa55491c7dab8e53bf"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff","3045a61f722bc4b198450ce69b3e3824"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff2","61522cd3d9043622e235ab57762754f2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf","6bf4287568e1d3004b54d5d60f9f08f9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff","0e0460587676d22eae09accd6dcfebc6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2","b8b8393d2e65fcebda5fa99fa3264f41"],["/pluginsSrc/katex/dist/katex.min.css","e8260820cb428e74f60edf271cda5847"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/tex.js","29662ef385c73c4dd9e99b17cd2d579b"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/pluginsSrc/mathjax/es5/tex-mml-chtml.js","2e00d51c98dbb338e81054f240e1deb2"],["/pluginsSrc/medium-zoom/dist/medium-zoom.min.js","348914dc9144b3441a2a0c9687604a16"],["/pluginsSrc/mermaid/dist/mermaid.min.js","d45bbdfb739484ee9a37f1d8a71bd44a"],["/pluginsSrc/node-snackbar/dist/snackbar.min.css","4220368aced9a5ce011f2ce9bd8b1035"],["/pluginsSrc/node-snackbar/dist/snackbar.min.js","8f19a3527021a6268cd8488a5debe7f8"],["/pluginsSrc/pace-js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/pluginsSrc/pace-js/themes/blue/pace-theme-minimal.css","7bba84cb68736f6ea9ae77cd934d995a"],["/pluginsSrc/pangu/dist/browser/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/pluginsSrc/pjax/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/pluginsSrc/prismjs/plugins/autoloader/prism-autoloader.min.js","4f48958b1802a9d99581aa5ab1e3f621"],["/pluginsSrc/prismjs/plugins/line-numbers/prism-line-numbers.min.js","ffdf7bdb8ddaf0c89a4e4225e1086264"],["/pluginsSrc/prismjs/prism.js","54e45d657b6a3471bd7cc72d0873c0b1"],["/pluginsSrc/twikoo/dist/twikoo.all.min.js","818e21e4e215343025c4e261019a830e"],["/pluginsSrc/typed.js/dist/typed.umd.js","3ba6a3f6e22122d8f5ed22c423299981"],["/pluginsSrc/valine/dist/Valine.min.js","c748c413b03bcdb2064c84bc9e06613c"],["/pluginsSrc/vanilla-lazyload/dist/lazyload.iife.min.js","de63970719fb650aee5e0fc7da2d2e6f"],["/posts/0.html","dea2b95e2b2bbb96347e3bd5bd46757a"],["/posts/1291b5ce.html","aa9e639defb46d93da6fe2ce29e47542"],["/posts/13c8547c.html","aacfe656b9d49b63d74c48044f7cd989"],["/posts/1750b1e.html","1a10a7f311e820e922d00a34d31c66b5"],["/posts/1886d22.html","08ebc073047e72b259b356b0b24ccf3a"],["/posts/1966b38a.html","b2ce20f3a1b7940ee77b7bd241570382"],["/posts/198a4240.html","4aa4bf23fb2d5a49da2382a5a290a466"],["/posts/1a5e1c0d.html","dfaeafee492ff4b7ac241dbfb01d7521"],["/posts/1eb7c6da.html","13df9950dd7f6577b78abd7c82fc06e9"],["/posts/1fa16eeb.html","ba732a28f571d3b37387899149a01fc1"],["/posts/2023da43.html","f8e76603e31ff374b39565f40c8e459b"],["/posts/21cfbf15.html","dc0abd1d358313d0478c5233bdae83ff"],["/posts/239d9bb8.html","e9302deb393011f6dd96d00b4aa54d69"],["/posts/246bafd2.html","591b5f3ae25990e463252fe357ba81ce"],["/posts/26d84ff1.html","e01b1b3e3919be6c502e4e035694ab27"],["/posts/2b096de5.html","9f722088ec5ad43cd80294b2fed0aad9"],["/posts/2b2a8302.html","388474e2a017cb87e199590ec08b86bd"],["/posts/2b5a6d5d.html","20fda13ad82d8c7b4a3d5a1d6e9a1574"],["/posts/2ce2f8d4.html","a9888590f1b672a2b1ae4fec24abde1c"],["/posts/2df239ce.html","df3c8efcb79d15184e9d56e404b65933"],["/posts/2dffafc5.html","14a227dec08cf8cb08f48d5a0b9f5611"],["/posts/309e582a.html","b4f022fe521c68b10a7a0c8af723f2d6"],["/posts/30fe99f3.html","6992ebfab3b1924c8dea50eed131eee6"],["/posts/32423d5.html","f72782904f76a57c6a6aad2f3cd0b230"],["/posts/333223b4.html","25403f923e184510fa8a5f2b9223900f"],["/posts/33a14f44.html","2bf7633b11385740dec83e3e0aa7e44e"],["/posts/35047491.html","9f834dd5b732021771cda8abab41d7b9"],["/posts/359243e.html","7ea4d9b2f0f1df8ed32c0a2583947645"],["/posts/368d6781.html","6d088f0103fb2b8ccff06beeb97df62b"],["/posts/37f6d690.html","1ed707f2a38cb6c6d0562bcfa5c6c407"],["/posts/38142277.html","d08194b6275f11bf852ddd66a7832b2f"],["/posts/38b005e1.html","a661db73a14591d8461a7e62bc84a43e"],["/posts/38b6caa1.html","c133eb1c02f34c0c4815ced6cad6287d"],["/posts/39b121ef.html","f13c2ecb4ac224f7b2ef6cd8c271a89f"],["/posts/3abec1ed.html","af797c8459622533c78c027834a4d82b"],["/posts/3b5ad35b.html","b33dd7e7fcf4606b93b6537327a7a901"],["/posts/3be895f2.html","4af91ca4311a39d627d0d0e5226db904"],["/posts/3cf3a546.html","d7a9d114c5b91c8ff1a66e0a1e86e4c7"],["/posts/3e023911.html","a7ecf973c0314e2f427fc71dca684445"],["/posts/3e07c6ea.html","24b9d5822f479f799a69d6c76aeed444"],["/posts/4021dce1.html","74af4aeba582346c6c34b3b11584a869"],["/posts/4073eda.html","13e5c17f0a6ac96426297da3dd611484"],["/posts/42fa6192.html","257231b23b96fdd42371c03840f3ad9b"],["/posts/4300826a.html","c7a32e5895ab2a318973b243e7972e44"],["/posts/49479ad2.html","5e71a7e59bac90664b8071ed94f90687"],["/posts/4aa8abbe.html","d7394cf78bb8eeced14fa879196a49e9"],["/posts/4de20b3b.html","579a8b92bbedb9efbc0f4434324bd028"],["/posts/4e93ccea.html","9627fad415f0ace7d17f52fddc866ec6"],["/posts/4edb8f20.html","4eb73e0f8179ab6d6fb1258689c27531"],["/posts/507c070f.html","0bb4ad1515068651f5975cb6700f5f4c"],["/posts/5095a20c.html","713c593ac6e26df7bc33b6503ed10a03"],["/posts/51998d20.html","fb2efe7b703489ee36ea1e42035282bf"],["/posts/52a47f9.html","e87005dd9abcbe05427ea96f61b49720"],["/posts/52e14f90.html","ba3a207bef1562237de93e3a66ba194f"],["/posts/536c9f44.html","574f0abbbd979f99cf1f9ab568723a7f"],["/posts/53a83f72.html","3164b75a45b2585581ba7f852a229a34"],["/posts/551c5fa5.html","72990c824d4e529b2af5615c9198db20"],["/posts/55854339.html","8f5bc0bf8f226296d229a3b96e42a94d"],["/posts/568325ac.html","a240a05b727abe9bfdba787618dc799f"],["/posts/57057618.html","6d70f72e5a8225e85047554a6ed38c18"],["/posts/5729df21.html","ee9a48218a9c18c44aef73cf939b406b"],["/posts/575e5af9.html","5f4fe6a3c81f86da875a2d57cfefdf11"],["/posts/57bd4a84.html","16cd7f482012771380befb5a78e676ad"],["/posts/596e852b.html","b58fd6edd4b7bb570710cbe5a495ae86"],["/posts/5d51032d.html","805f0448888c1afb2b81c7dc8cb35752"],["/posts/5f7c4ea0.html","9e8ebf13cd18ba7e35abd67c81d17f80"],["/posts/5f8718b7.html","ffbb49293adcbe6031a879d3132e5204"],["/posts/5ff009ed.html","fc861fce7e4630c91c209a0003706290"],["/posts/60284ea7.html","a831d1a702c0f44f6c4560a4fd313e5e"],["/posts/60c2c915.html","64269e6ed9db78d0602bd836a232a4c4"],["/posts/6201cf8d.html","ab5fdbf46cd962f68333b2af7b83704b"],["/posts/636dabfe.html","92751a3d0fb8ffeaab78f86e8d6af2e6"],["/posts/64c9400d.html","e869323458153fa736269cb0c1e5af26"],["/posts/6503a147.html","1562203e8caf5022104ba44252ee23e0"],["/posts/66985181.html","d57dc75fd9927150b519ec75aa0cbcd5"],["/posts/68623a63.html","1ace432eef1277ab8edc1e7e45ac7a75"],["/posts/693e8557.html","ed83474f14c62bd39e4fe024ef254a05"],["/posts/6ad51b4.html","ae23b015aeadc80a6e0886fdda406fba"],["/posts/6b915706.html","e337c3979da482bf9f7f116eda1a83d9"],["/posts/6b922888.html","b21621564929a933be8a896abb38486e"],["/posts/6caf3fb3.html","20ea978bd6b34cd19e296dc795fb98c6"],["/posts/70f280ec.html","b178c778c3609cf3c4dcb127593b122f"],["/posts/71978ee7.html","76e80679a1f6a92de278e70c03706a6b"],["/posts/731e6299.html","c90c199c6cd8f0e4f8ef541bf698ad92"],["/posts/7670b080.html","8ed416a3079c9b5a0a838ded06a61dd6"],["/posts/768e8ecc.html","0af2dba57c83ec4f37f61c938fcb86f1"],["/posts/77c9a2eb.html","b8ca7b87b6d59c5d36fb3b00061e8a47"],["/posts/7801a0b2.html","f1c3be4049ed4dd908bd64b62d50bb5f"],["/posts/78430d81.html","903fa9d80adc6ffeca601f3b1a378d0f"],["/posts/78f1cd.html","4515a698e5de707cb1aa1f3508072c59"],["/posts/7af5e990.html","a303b0fe9141edb3f6e88cd8be80717c"],["/posts/7b87ee30.html","d92bef59a30977b9f6e71808473525a8"],["/posts/7d79717a.html","59da895d798d47190ab2505706de520d"],["/posts/7de6d28a.html","23f23c3b598fe33421cee620d77c8e1a"],["/posts/7f370aa4.html","ec27837bec9afdae34798e90cac43ba1"],["/posts/7f5771ec.html","eb8f9536240a4c9f7f97f13c13771f95"],["/posts/8001d6e6.html","3bdffa039ecadc6facacd734da2b25ec"],["/posts/814432ce.html","01582ed769423fcef23673ee1aecf70b"],["/posts/81786960.html","242eb4a808f584596210f8a70f8c13a3"],["/posts/81a831f8.html","afb54ef559f0941831caa5155fa69967"],["/posts/81d8717b.html","414078e3aae60ea9dd08df534889b91e"],["/posts/82357def.html","7cdeed9f680bd02658b8dfd02a4d9159"],["/posts/847f802a.html","c881c395d0f7165b14570ac84be4d70b"],["/posts/860679a6.html","6887022828d8d1da22f9299211db41cd"],["/posts/889641a6.html","85ca6e28013712bddcd41e747d31b71b"],["/posts/89757140.html","c3ebadd48345ae0b8828cb4b12e73ce8"],["/posts/8bf59925.html","2fbb90b18f381b455388672832228a25"],["/posts/8c0ed596.html","5c323fc832040f715f7973516e5d53fd"],["/posts/8d2e234f.html","8577b2989cb8a46ad2265e0259cd4a58"],["/posts/8e23eec0.html","f2ccf315b772c2ded0ce898380ee20dc"],["/posts/913b2502.html","5aef2682a97b5077daf4c50ef0f4abbb"],["/posts/917ecca3.html","7121d300e3bb8a4dd64db0c7c52573be"],["/posts/92f3b359.html","2aa76fdb5f79937529b0a98b1ae993d1"],["/posts/938c27be.html","b36189a8234c19c22ebd7496d05177dd"],["/posts/946ecc87.html","bdb2436dcf0eec0484be72f0b1f1eb7c"],["/posts/9522235a.html","5b53d4a66b32571cd3dd3acf68548ac9"],["/posts/953d25ac.html","9537dce609e853659045957f323f05ad"],["/posts/95def683.html","91a08597d3ef066a6ea48a2707f457a2"],["/posts/983b9cdf.html","91c33a269651a6878d6058c9e556418b"],["/posts/98817f44.html","8b6649678ac678d4c7548ffd5af9708b"],["/posts/98d20436.html","5f68e0b0c88bb3b133730372b7231c5b"],["/posts/9db656e5.html","b977cfa27c420513f43a8066ad0bf648"],["/posts/9ede5e65.html","e3a09a831d5e9372d7aa28ded64f2a6c"],["/posts/9f789b3d.html","788cef0f2f22bdae346cf98857f66bb1"],["/posts/a1ecf766.html","57c2b0c6253d64fcfe96187aae69396d"],["/posts/a3dfc912.html","500241f43cd2dfdb0c7663feb06e90b1"],["/posts/a51da93b.html","937fe2845f63e321f746306a21d78a15"],["/posts/a56a2eb2.html","e459696733a264de4418489b066929b4"],["/posts/a590589d.html","64b9bd2b150ca52cdfea196dad0a54af"],["/posts/a5b7128b.html","91c5e2ca98bd675108149147edb3b761"],["/posts/a6a38b7e.html","6bcd45a7882a378bd79c3cee5ab6d09a"],["/posts/a819016a.html","901dd9abfccf24b7d905905227d8f02a"],["/posts/a90d7f93.html","9ecc5660d6e1707e0a3761dbd1357f66"],["/posts/aa58734d.html","304f6f189a8aa3bf637877eba308b3bc"],["/posts/adbb14a7.html","97d36b351b1ebdd4643e780c5593cf59"],["/posts/af012d15.html","11622fa234145125e66af8929c9f37a9"],["/posts/af69aba0.html","f6bc364f7a9c5f5c580a178bb824546a"],["/posts/afc66f22.html","541a73466df65702f5bc56022d7e5aeb"],["/posts/b10c353e.html","006fdb4388f009247508068de9ffa62e"],["/posts/b284ac41.html","5c0dedfa0854c66771b1af3e030e0641"],["/posts/b2a9f0cf.html","9545c9890a6613cb349beb84235bcfe3"],["/posts/b2be80f.html","272db638079786a209b18e18870be931"],["/posts/b37b5fe3.html","e1c0fc10bcc90f5211b911d7584990f8"],["/posts/b3fc3e6b.html","fa9daa8ee98f4376464bdc6effd34a74"],["/posts/b479c8cf.html","68903e61757e668ed130885c5295f433"],["/posts/b4a32689.html","b333feff4c2f012ef976f6fe9303dfd2"],["/posts/b5c75557.html","1c0801821478986e819b21c7e986a7ff"],["/posts/b62f9eda.html","f30cb96acdda0f0142cd2e5a23283db5"],["/posts/b6adbb.html","4703439cf2d59ae1e4c8785c68aeae82"],["/posts/b925a2c.html","64db61c4df95a0caf685df9b24f36035"],["/posts/bc48aaa3.html","4d874a55af3aef16a394690780ad1cce"],["/posts/bca3a713.html","ca2960b4db625f5bc6a4ecc29156e473"],["/posts/bcb29fcd.html","94d11c131753778e6eb2ef198ea57343"],["/posts/bfbe6787.html","10b5433fc7cc211fff10e254853b1ff1"],["/posts/c0297c2d.html","cc1aebbe19bff3495282791b02bde303"],["/posts/c13f1087.html","0585152f1cbb000c62ba78d8f3e7d459"],["/posts/c144987e.html","166f3bc4c99ded51b510ab3469a4d749"],["/posts/c180db3c.html","9eb31ffb974e67a89fb3186d94b02896"],["/posts/c2b7b300.html","d90cb2fc8119a0e4cadbfce67eea2dd3"],["/posts/c2c733f6.html","8d701b4e0ea8e6654c307552ff53e0d7"],["/posts/c2ef3a27.html","2eb529e8f8098bb64150333004d58ab8"],["/posts/c304c6a1.html","07299462883f028494d44202186ff105"],["/posts/c62b54a0.html","a439c4cd0926cf544656599255d42d49"],["/posts/c7da2cfe.html","381d0ce6694f2e79aaa2e7872a75adf2"],["/posts/c8f54d07.html","6b2c6a5dc542e46cb78575598b1607a1"],["/posts/c9711c19.html","f4d55865c032036c94960df48dc8fe38"],["/posts/ccd6dc55.html","e4b75ebb090efd28021093132bd2cf0f"],["/posts/ceeb73f.html","9685662d355f17c382f38d30d494937f"],["/posts/cfb47711.html","3afa52585917ca8c99491dfc21cd83a9"],["/posts/cff7ed2d.html","67c8445197ae29a9e3cacce5ebaaa33a"],["/posts/d250656c.html","e2f966c6a4d75136d47747028561056c"],["/posts/d2ade399.html","90c8a9199ccb0c05499f5df74dfb6fc4"],["/posts/d46f6783.html","6d7df8e994bf204f155b6c32dc03c9ba"],["/posts/d6b675f3.html","36d07918b4c3bc437b74b109ae1bd306"],["/posts/d72ba00d.html","cd84391cd15b497949e73774628e83a0"],["/posts/db9e0f83.html","9eef0ce33e1395a22d01ae88e8af3ba5"],["/posts/dc2d6da8.html","7fa36f8f2d8983d7bca916f7e6d37e45"],["/posts/dc584b87.html","4c945ed3e65169588ca1473b8a265c54"],["/posts/df6220c0.html","5aaa525c991af33a0a350619ef495d02"],["/posts/e063540a.html","4583429e648ad5307f06e8dd344fa939"],["/posts/e0872e45.html","b880e5dca43c653817092874500c972d"],["/posts/e0a5a9e8.html","4c0d83b33240dad79bd50859678bc4c4"],["/posts/e2486079.html","21bc596f1366225f88f8a37ea5a55c0c"],["/posts/e6cdcbc8.html","7cdef4f0e74375035a0b7f65536c6d1c"],["/posts/ea33ab97.html","f63946cda5f4a4b271a205892d33cb38"],["/posts/ebbb5fc6.html","8bbdc79c095d6b22a0d6693880de1e62"],["/posts/ecb39c55.html","7dadcceb165295b806cb88200055f3e5"],["/posts/edadbf98.html","db4d103197eea299ac80a3fcd4075ae0"],["/posts/ee507888.html","cbe88738de8f0824aac0b648e361767c"],["/posts/f0a9a587.html","8790a7c92a0856f8e7e2a44da58f0e24"],["/posts/f18d9e91.html","2dfa269f6e6341d99d28963585b253fe"],["/posts/f1a5d141.html","5268b99a9ae6eeec09f241d44df5d8cf"],["/posts/f2242946.html","ae77b5b9b2366c660d7771ab07fb6442"],["/posts/f32acbcc.html","02d9aa98d96dc5aaa3b90efa2f388fe6"],["/posts/f6010553.html","eb50b414e0eb516d117fb2397bfeeb34"],["/posts/f75a1c90.html","d918cb7911fee9107c5e1515077c7264"],["/posts/f9da1911.html","8bc1d443cd07d441e7246afd76c5e764"],["/posts/fb2b1683.html","c2b0534895b50e525b2c25644509af9a"],["/posts/fb350f3c.html","01bbf6dd338eb357176ddd50cec43748"],["/posts/fc2f654c.html","fc40cc13c594d20cdc06d5ed063296ff"],["/posts/fd1b791b.html","8ed1a50241a8cf772e8cd5a7e5f1b9fb"],["/posts/fd3d5dea.html","b7bf06ad5987d009b189d12d9d481e94"],["/posts/fd96eead.html","c8890ee3662a692f377d830f85d25152"],["/posts/fe187ecc.html","dd9faa42ecc7f475055fec3fe19237bf"],["/posts/ffb80acf.html","14177d80673e231dd36c459cce68a1d3"],["/sw-register.js","0c3083bbdb0c8a62f98de56b125b4be8"],["/tags/Aplayer/index.html","39d4e3d373046f40d924959402dd778e"],["/tags/Bar/index.html","05e714a2a3112f390960d3888055b02d"],["/tags/Butterfly/index.html","2758311819789e092995268f778f659e"],["/tags/Hexo/index.html","4dd3feb137db6f56535e6c388e608b16"],["/tags/butterfly/index.html","ad8c1ed7df2a78008b1ee5c880927e4a"],["/tags/demo/index.html","df459fd11d84830b4a10f3a3024af628"],["/tags/highlight/index.html","cf682529e4f8b9cc7144dd48f6c3b499"],["/tags/index.html","fbe591249ed3766739328dc58eee94bc"],["/tags/tags/index.html","b45bb56218aee4f64ffc3e5998b81aa5"],["/tags/tags/page/2/index.html","d0f7488854f176ee4a56604515aa00b7"],["/tags/tags/page/3/index.html","71cfe93e42bb51407e5d8a3aa96f1ee4"],["/tags/tags/page/4/index.html","feddb3340f6c0a1e88852c6995a9f4b7"],["/tags/tags/page/5/index.html","03a5081b14125e8501710686ae5fcb48"],["/tags/tags/page/6/index.html","b313314b09129783de1ef38c1effb207"],["/tags/tags/page/7/index.html","d8e6518539422ba993bdab9950157d79"],["/tags/top-img/index.html","9ea058fcb6f1c7590c4b233aaecda542"],["/tags/主題/index.html","f31a76c85ac38dee5f6acb61726e6290"],["/tags/優化/index.html","ea9bbe07916540ab1c3ce93388892817"],["/tags/打賞/index.html","61044332d0a312d41d7f73aafe1846fc"],["/tags/教程/index.html","c7d3ed9dd419e4b3d64689e3c844c9d5"],["/tags/標籤外掛/index.html","f43f4195e2c2e929ef7bed10862c1109"],["/tags/美化/index.html","60c2bd973c4c822f25b5aef8c2f8b3b1"],["/tags/魔改/index.html","49283fe3225a1ca02b8c211b556760ea"],["/untitled.js","60b6022d611f9ba01a721942cc5d90eb"],["/userAgent.js","428949435f0f1dce3eb22d209e1fee61"],["/video/index.html","21ed68a52fd05566f53ba6ef1999ff25"],["/x-frame-bypass.js","d0e55673f7b13b00bbe5c2182932c465"],["/万能api视频解析/README.html","9a64bf4edad1202363c2d6b8fa534c01"],["/万能api视频解析/index.html","b44d17c74a060dd0efa1c1cc1c29f427"],["/小姐姐随机播放/index.html","90269a0706320cfdb5560418c82ee5a3"],["/小姐姐随机播放/static/css/bootstrap.min.css","bbace035fd25209e34be801cdeaf7a17"],["/小姐姐随机播放/static/css/images/bj.jpg","7014c63c5ba024799b083089e2429e2c"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/小姐姐随机播放/static/js/vidwo.js","492611017763533df2ad01defecc7fb1"],["/短视频/error.png","c0a42e5fa294aae62a201f0485a15a3e"],["/短视频/index.html","e5dfb0e4dd7ec20632070248a61c74da"],["/短视频/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/短视频/loading.png","5d9953167459e98abce58311c8031d98"],["/简单导航/404.html","63c9f24b15167b37e132229d013b1578"],["/简单导航/README.html","1e1e992aa8d0cd5a4b72be4bb455b0e5"],["/简单导航/index.html","bd0247b2ca49aaf359126cf330f51dd9"],["/简单导航/noonetodie/images/gdyx.png","a05471cce0082b41fbae133e67c1b6e2"],["/简单导航/noonetodie/images/wu.png","29de547658d091403d3242ef4266dc73"],["/简单导航/noonetodie/images/xiaoren.png","232b9342b8c5c61b56e72bab03076ffe"],["/简单导航/noonetodie/images/ygdbns.jpg","b6699f201e2ab40e54b64745cd2ea80c"],["/简单导航/noonetodie/index.html","cdf70535c52a1bab4fcf78c131411969"],["/简单导航/noonetodie/js/main.js","bd66da33e99276a1d187abdfef69bfe3"],["/简单导航/noonetodie/js/require.js","2a31ed34ccf92aa78c5c7ff5d4c39a26"],["/简单导航/win12/README.html","babd1d8604ddca4325c4edff1a10ddd1"],["/简单导航/win12/apps/icons/about/info.svg","a837ec9aaf652461cad073742fb8d89b"],["/简单导航/win12/apps/icons/about/update.svg","0c8c8ae96f167f403e14d7d3c9aa6b50"],["/简单导航/win12/apps/icons/explorer/disk.png","89df4f1a995fe5cabfa93a7ca15ab2d8"],["/简单导航/win12/apps/icons/explorer/diskwin.png","8f95b402294b0183543920364af3270b"],["/简单导航/win12/apps/icons/explorer/od.png","93fc2191ab284ce29a08e41a2250e95e"],["/简单导航/win12/apps/icons/explorer/qa.png","0e455f04220cf708a4d25df1e6dd9763"],["/简单导航/win12/apps/icons/explorer/rb.png","3ffbde87932c94cb55dc5d7e6cce49d6"],["/简单导航/win12/apps/icons/explorer/thispc.png","605323c51660aff3db4f27d0131d4fb1"],["/简单导航/win12/apps/icons/explorer/tool-copy.png","b78f25678bc1ba7fc5d2d6a4fb4a1933"],["/简单导航/win12/apps/icons/explorer/tool-cut.png","606378803bbafce26e9488030e82b4e6"],["/简单导航/win12/apps/icons/explorer/tool-new.png","403feb6235f6551cfd20dc970886a6be"],["/简单导航/win12/apps/icons/explorer/tool-paste.png","d5b06481b2887acd6ad5e3f399858e92"],["/简单导航/win12/apps/icons/explorer/tool-rename.png","56f0a1bb60c7bc13873ed4efca6ce8d6"],["/简单导航/win12/apps/icons/explorer/tool-sort.png","57b8f61c524fe9e894956abc0642e589"],["/简单导航/win12/apps/icons/explorer/tool-view.png","7844ce1cd03ed70b49ce47971440739e"],["/简单导航/win12/apps/icons/setting/apps.png","87bde3db35fcc7deae476223243f8ea8"],["/简单导航/win12/apps/icons/setting/blueteeth.png","1f5d3d76dd5cc368f4389f7d8ad28803"],["/简单导航/win12/apps/icons/setting/game.png","3b876313e35ed7cf27cdac26542b10cf"],["/简单导航/win12/apps/icons/setting/help.png","7f3ff22100323605dc256b8fd98829d3"],["/简单导航/win12/apps/icons/setting/icons.woff2","2ec186e1afec55ea3f2752eaf6dea238"],["/简单导航/win12/apps/icons/setting/network.png","adc513bff915108429498a7877268c29"],["/简单导航/win12/apps/icons/setting/personal.png","5bf45299de5e59cd47d4cb7450b0841d"],["/简单导航/win12/apps/icons/setting/safe.png","7badcf2f0c00f7a326a54d668fd1d435"],["/简单导航/win12/apps/icons/setting/system.png","fcf935c901ecd434f2fc1d5b62b636fa"],["/简单导航/win12/apps/icons/setting/time.png","72885b049d05e00aac0ef938606c52c4"],["/简单导航/win12/apps/icons/setting/update.png","968bc43be6076815e94589b122f39c53"],["/简单导航/win12/apps/icons/setting/user.png","43fb0b7556928ab822e482de64248687"],["/简单导航/win12/apps/style/about.css","c75d7cb412ff8a4ba5242a5f0a7f1fdc"],["/简单导航/win12/apps/style/calc.css","09234cb9b14fdf181b7dbddba3b41fee"],["/简单导航/win12/apps/style/explorer.css","a8346faca5487405c62575c99c61b203"],["/简单导航/win12/apps/style/setting.css","0dce996d85c5ac6e700f9b774ba575cf"],["/简单导航/win12/base.css","9e63250bbbad4e23ec2c80de035e42bf"],["/简单导航/win12/bg-dark.svg","4c8fed16d52c6b84b71d7b5c0f5acbc7"],["/简单导航/win12/bg.svg","9ed19a94566ac6946e4ab8c02e1b2c2f"],["/简单导航/win12/bootstrap-icons.css","8af014a7585ec6b944e3dc5cfd77b89a"],["/简单导航/win12/desktop.css","2eb10217a3e8a5ace18ca753e218ad74"],["/简单导航/win12/desktop.html","557db3709e343945c779e50399a22fc6"],["/简单导航/win12/desktop.js","19eef01c303d7bd548f31384f381f305"],["/简单导航/win12/fonts/bootstrap-icons.woff","be6df3f0c9855796ae0c099ee4ca43ce"],["/简单导航/win12/fonts/bootstrap-icons.woff2","31e1300d419245fd27614630601dc74d"],["/简单导航/win12/icon/about.png","02b078c4249f812ff0fba8f363c3374d"],["/简单导航/win12/icon/calc.png","f4d98a38e77f8eec4acf121d244ea2ba"],["/简单导航/win12/icon/camera.png","9e977d0605e9452a05db674bbddd4e4c"],["/简单导航/win12/icon/defender.png","86584d66cd939b45a063b1e6a4bbb564"],["/简单导航/win12/icon/explorer.png","c45749adb3de4dc9e1bda0a9fc1412e1"],["/简单导航/win12/icon/feedback.png","d74d3809ba1311cbad94ec1e7737ccd0"],["/简单导航/win12/icon/files/excel.png","9737aca13242b71cf76bd4121c965ca1"],["/简单导航/win12/icon/files/img.png","d1c6411703b689d31a365302a7228b10"],["/简单导航/win12/icon/files/ppt.png","76a0b864def30d5a985c3e99ba7d1c7b"],["/简单导航/win12/icon/files/word.png","3612aac2f6e8c58ac57c51584f49a4b2"],["/简单导航/win12/icon/folder/docs.png","dfa39b3a8d40b774873a8275fb260a86"],["/简单导航/win12/icon/folder/music.png","90089cea05d1f0240324e52871e35106"],["/简单导航/win12/icon/folder/pics.png","2c9c768e2c91cca37063eee8f960fc37"],["/简单导航/win12/icon/notepad.png","2260a01f65ee7798f382ed5afb157821"],["/简单导航/win12/icon/setting.png","e050ccc7621dab2bc49f226a91b093c5"],["/简单导航/win12/icon/store.png","23c0e553951ba31b1f10644f09dbc594"],["/简单导航/win12/icon/taskmanager.png","1344f0c1a1e9ad3203c5e224e347cc0a"],["/简单导航/win12/icon/teams.png","2b7969712645822d03c13cd7c7dc9ca8"],["/简单导航/win12/icon/terminal.png","1a3138fa728bf4172e24024b70a221f5"],["/简单导航/win12/icon/user.svg","64e91eb73625fb7b3d99295bcc42c588"],["/简单导航/win12/jq.min.js","7c14a783dfeb3d238ccd3edd840d82ee"],["/简单导航/win12/reload.html","b18f04f971c3d36315a1a79e151dba80"],["/简单导航/win12/shutdown.html","5f0bc8b8058fc83c6278418d60fa189e"],["/简单导航/win12/start.html","0fc718c9680a26cc8c79b4bd21609317"]];
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
