/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1718118026542.png","8a0928268b3b8b6d814f35c27bd80b27"],["/1718118228833.png","10c0a740a9a2bee9f3cda1108e7f0195"],["/1718118230654.png","31af858ba9ce2ed6df771ddbf358df23"],["/17203286678380.png","75aa26a09f2041c5f9ea9defc043621c"],["/2580.html","39f1d2a24302d3a943717f567753ce3f"],["/25802580.html","b206098b48e7ceba38365d8b400c7f57"],["/258025802580.html","4e6a2ade4ff9226402f3ef9396ddf43c"],["/9999/09/09/文章/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/9999/09/09/文章/Adsterra.html","4ec78614dc4c91839cc065a9f223743f"],["/9999/09/09/文章/Metrial822.png","4deb8d4f959f9d19c81bc44a10fc3cb1"],["/9999/09/09/文章/PlugRush.html","dd4039bbf02d2fba1408cbc2b534dcc5"],["/9999/09/09/文章/Popcash.html","1eb441204a135f6a916f0ee49eebe255"],["/9999/09/09/文章/PropellerAds.html","0a9d272318df792bed59e89369f12b33"],["/9999/09/09/文章/RevenueHits.html","68661af826e3e5312ed722d70aeaad69"],["/9999/09/09/文章/Slimspots.html","8a4e1b3220a9b7bab0b5bbf6aded0064"],["/9999/09/09/文章/TrafficShop.html","8e12e0520e2327d25b4d95eaa99af538"],["/9999/09/09/文章/Yllix.html","c501fcd268f92f9176cf867a45086467"],["/9999/09/09/文章/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/OUnion.html","cc97173e0b81e289ca10aad0c42342ad"],["/OUnion2.html","ca80fa9cf77d14ad45bc997aa9c58115"],["/archives/2018/07/index.html","79c8f466c39862c19aa5bc49d5e9ccea"],["/archives/2018/index.html","aa5505439b026e81ea056ce1ce8bd542"],["/archives/2019/04/index.html","0230576f5d4ab9edcdba2d00ca46373b"],["/archives/2019/07/index.html","cc2060f391fa81cff0f5470bfa9bc66a"],["/archives/2019/10/index.html","da42b53163dd7d6ac893086d39b64332"],["/archives/2019/12/index.html","5f7c2828a56496c0c3745e379538a96b"],["/archives/2019/index.html","9208bce955853c66c04a578a6b089374"],["/archives/2020/01/index.html","d590f599a625dd01587615268a58c70e"],["/archives/2020/03/index.html","e15983d0391bfaa51524a7034f55fac4"],["/archives/2020/05/index.html","c4561a6f22ff8edb26fd595412833e3e"],["/archives/2020/06/index.html","cbe66a15bcf3fbc12e651545bdb1498b"],["/archives/2020/07/index.html","e9a1b4d79488cb1a240e4f24cec67f8d"],["/archives/2020/10/index.html","9f8c5339bb7e2c4b275d6da896356f02"],["/archives/2020/12/index.html","0bae6264f96d53d232dd71634e9cbba9"],["/archives/2020/index.html","c1e80e611102c6273bd6fbc77d00b7f7"],["/archives/2021/01/index.html","ccb506b7b0ed981d4d50e4ed5812009f"],["/archives/2021/10/index.html","b3b319981083b841f34db31971dd4d2d"],["/archives/2021/11/index.html","8407063e64339da526fe6844e4f0dd66"],["/archives/2021/12/index.html","16cad54c5b50a6454534879a3ed9537b"],["/archives/2021/index.html","c8028b6c904a7eedc680747823d1313b"],["/archives/2022/01/index.html","e3e7849dbaba7450fdaf059f89b1e27f"],["/archives/2022/07/index.html","ed9621d1b1235e6cef8fb238ecede69d"],["/archives/2022/index.html","8897ea953519c95455f79128be47809f"],["/archives/2023/07/index.html","cc7e5449ffd2e8cbd1402720731df0eb"],["/archives/2023/08/index.html","e40c8e12b1bf5c5d5ae144e46e2180f3"],["/archives/2023/08/page/2/index.html","e2746a0d1bad48e3cd7b5d0354f1513b"],["/archives/2023/08/page/3/index.html","df07090aded14b1dd059bc2793fda999"],["/archives/2023/index.html","ffb33d3649fd612a2de0dd153ef23058"],["/archives/2023/page/2/index.html","8028225ffe8ae83aa3235eafaedede64"],["/archives/2023/page/3/index.html","d018368be24c8b56e4397a7972916663"],["/archives/2023/page/4/index.html","6a456a5ea36b14f84a1e8f933e50b1a6"],["/archives/2024/02/index.html","feeafccd6e0d5480bafd918ecc7c4003"],["/archives/2024/03/index.html","70e352c5cdc8df83b3550703b7ce4e54"],["/archives/2024/04/index.html","d12a9b5ac3b41fb9ec98a3e538847e9c"],["/archives/2024/05/index.html","2fec91e99d2c3bd523097b1a6cfda8c3"],["/archives/2024/06/index.html","eedc558b5b7ea1be51e87ba5ff861a7d"],["/archives/2024/06/page/2/index.html","b17fb7098e0134aa05c36d2c07647690"],["/archives/2024/07/index.html","376837905becd70a217fd4bb2142c3bc"],["/archives/2024/07/page/2/index.html","67e18916de007c5691231baea2f9a4ac"],["/archives/2024/07/page/3/index.html","c568bf601f8ce278e68b73a3f175758f"],["/archives/2024/07/page/4/index.html","c4d674f7ece578395c266e1dbb347d03"],["/archives/2024/08/index.html","79d1db2c2121956f9a34947f5a779ee1"],["/archives/2024/08/page/2/index.html","355474c9dd34cf8bedfbfe944291d96a"],["/archives/2024/08/page/3/index.html","76f979f60409f65c600ce9fa5eda185c"],["/archives/2024/09/index.html","68088650cfb0633a7fe1701d96df3dd6"],["/archives/2024/10/index.html","484f5a2ccdd8c5d19280cc12fee2b45d"],["/archives/2024/index.html","6d7cfd6135fe898b68894c34d2d34b8f"],["/archives/2024/page/10/index.html","3d41fc2adb6eb9307964c38260144be9"],["/archives/2024/page/2/index.html","a15c3a5f59a8921dbf0a2027462aba3b"],["/archives/2024/page/3/index.html","b1fbc60c335f197360da6409b5b0b07f"],["/archives/2024/page/4/index.html","a7337e026e427374c9f0a075f9ba9cda"],["/archives/2024/page/5/index.html","2801ebd91260b33c59dde78178cb560e"],["/archives/2024/page/6/index.html","e2f214a3f5750163014937cc9957a62e"],["/archives/2024/page/7/index.html","7813a76f7d7a7e363913c30796e3ffad"],["/archives/2024/page/8/index.html","c4bf787990f11e262dfa7006aab9a87a"],["/archives/2024/page/9/index.html","d0c33452201538c09f0b0aa7872fb859"],["/archives/index.html","f2aebce18c74bbff0ad49af14a33f32d"],["/archives/page/10/index.html","a9dc44d04de0e8b64c93e0175634dfb2"],["/archives/page/11/index.html","f2327f0b52edcff8bd6db308226f9416"],["/archives/page/12/index.html","8bbd7d3f0205af92679b0c3f31e301e1"],["/archives/page/13/index.html","f803ab1afec9555b47a4393590a06c35"],["/archives/page/14/index.html","632859b8e4ba8001f03d51e697bbeb1a"],["/archives/page/15/index.html","42dcbd42108fe27ff34b611a0086ac1b"],["/archives/page/2/index.html","3248bf19aab85814ca28ce7280a0be3f"],["/archives/page/3/index.html","c3dee707d07022b1e289f8afaca54830"],["/archives/page/4/index.html","e782774c316c8f682683256373c16ae7"],["/archives/page/5/index.html","68d0bd5436ef21322df2cfd828781b43"],["/archives/page/6/index.html","d7a01e84b0c426b1f2ef7e886df826d1"],["/archives/page/7/index.html","1d6b910fa4113a16e38e13ecfe33dece"],["/archives/page/8/index.html","f36e4ca35120985d4876af92c9dfa7f3"],["/archives/page/9/index.html","7db07aa5e69a3ec5b26f2fd6d5a5c3e9"],["/artitalk/index.html","82474bc0615d301c32cc702e490f19a1"],["/categories/Demo/index.html","0b48064de5239ebd2822730689e6e4d1"],["/categories/Docs文檔/index.html","d7c1ac7e1adc8fa28f6927aad7a51b61"],["/categories/Markdown/index.html","f4c94123dfe4b772eddabe1fb197893a"],["/categories/Thx/index.html","60715a083bc6ba1e6d1ba2c976f76087"],["/categories/categories/index.html","93c90ab344f04733cf5973add8b1850c"],["/categories/html/index.html","de1d40d5f49219f296273f70365c1e7f"],["/categories/index.html","8549b99effae3fd3b9d8fc55d572dd17"],["/categories/lua代码/index.html","129cd2101b9a2ebf7bec746a63580052"],["/categories/作者自用软件库推荐/index.html","a00146cf2ebc524ca48f616810964011"],["/categories/动漫网站推荐/index.html","774e66c0a6763c049173aeadd2633ff7"],["/categories/合集/index.html","4d59018bc4e7730ef0412674a3bea12d"],["/categories/国外网站推荐/index.html","e324aa4b2e6d236e7288df76cb923fcb"],["/categories/小工具网站推荐/index.html","3f35bd95b03e9f0734dd220580992114"],["/categories/小说网站推荐/index.html","e7069464a027094b277336ecc03c7d14"],["/categories/应用市场网站推荐/index.html","093e62cbedfd648a67fed014c32c8a20"],["/categories/影视网站推荐/index.html","79266e24be94510ae7c56c1b8ec93697"],["/categories/我的开发/index.html","4eebd346fca97b965d1f757aeff9200d"],["/categories/文章推荐/index.html","71146684f6f60f75d8c0a33d5b49ece1"],["/categories/文章收录推荐/index.html","079d496409c724381c1c9e19fbc23571"],["/categories/文章转载/index.html","64da50a58cd70d94a4c6624a4edb32e0"],["/categories/海贼王/index.html","b662698fa1f8a510225008666e2fe019"],["/categories/漫画网站推荐/index.html","5474f3b55640a775bc51f1b491800ccc"],["/categories/直播网站推荐/index.html","579f7b39365ef0020d059a1ae861050c"],["/categories/网盘推荐/index.html","e0d11f4db7ca24e7c092267a5a88dd0a"],["/categories/网站分享推荐/index.html","733e25cedc9f5e5b2360daa39b4ca6a1"],["/categories/网站推荐/index.html","e8b2afd7d005e20b496fa33e863e4538"],["/categories/美图网站推荐/index.html","384e904a999ba5fa6a47a73193c0dfec"],["/categories/美女分享推荐/index.html","6d5cdbd1518b93da4400178551b8d1ec"],["/categories/美食推荐/index.html","515047d5e23424105c09c8e9085898e4"],["/categories/表情包网站推荐/index.html","bfc422f7e0739243af7efc5a58faba80"],["/categories/资源网站推荐/index.html","b03b0bced2a1da35e04544c2e945e2bc"],["/categories/软件库推荐/index.html","866cac006030a6b4a0f709891fbfd050"],["/categories/软件推荐/index.html","c70159736138345bbc86489333a6d9de"],["/categories/软件推荐/page/10/index.html","4a14391b375e6c0cf8b006b13ace4822"],["/categories/软件推荐/page/11/index.html","78dd6d5f0125da1fb9b6a1059623e239"],["/categories/软件推荐/page/12/index.html","2a73b5174ff09c1960e768e67130478b"],["/categories/软件推荐/page/2/index.html","27bb6c7ddbc62dc598409d2acc065d6e"],["/categories/软件推荐/page/3/index.html","4bca52b600a7a5ff7c6c6f2a0ffdb721"],["/categories/软件推荐/page/4/index.html","af1a9f14ef3e8a9e11b607561a595216"],["/categories/软件推荐/page/5/index.html","53992a024eb15a2de8afeefbd20d65dd"],["/categories/软件推荐/page/6/index.html","cf46727feda7c21bb49eeab899ca91fd"],["/categories/软件推荐/page/7/index.html","49ff54c000f6b519153a0ff20a318c34"],["/categories/软件推荐/page/8/index.html","8d0e277b4929304b651a237321518ff6"],["/categories/软件推荐/page/9/index.html","05a14d3ecc22eb90e6fb15324c5ef79f"],["/categories/進階教程/index.html","be25771efa79b258e71194ffa1fcef2c"],["/categories/闲聊杂谈/index.html","bf43f7bdbfc0063b3aa13459fe53c7ad"],["/categories/阿里云盘推荐/index.html","58bbd29e0a99348425ce12897ae93fd8"],["/css/2style.css","614d91358f6b26c603779d5bc822bc7e"],["/css/custom.css","15d6e5b6ce6cd6d4a2b0effe06244960"],["/css/custom/fixed_comment.css","702d1a40520f45ee748b05010bc22ba2"],["/css/custom/fixed_comment.js","f9edc32e935c98b69ad616c7a39b4418"],["/css/eurkon/eurkon.css","ede1c099cb01cabb1505cd520d7afc00"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","dc17cfd04ed265715239111a52b74ee4"],["/css/lua.css","a32c17881bab67473fd4a74372edbc8c"],["/css/mobie.css","524958f19b70239106d6aaa5decb86e2"],["/css/player.css","bf081626a42aae043604021ed40f6ef4"],["/css/reset.css","7f67c3ba6c820d0a0464ccb609f3c830"],["/css/style.css","219b80c89b65ad80bc928a568667a98b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/viewer.min.css","ec961a06f9292db17c03e324362159da"],["/equipment/index.html","da7b7a9524c2cd4e596f3cdec605b55a"],["/googleb0c521173282337f.html","a1202143e8bd8d5fc83b37ca723da70d"],["/hk/404.html","659f32b710781a4df890393084e0b317"],["/hk/gonggao.png","9b4198c32ee1efe7434ed66a9d1038b1"],["/hk/index.html","7eee6cc4be85574d8c4dc81e3a4b4e30"],["/hk/main.css","44e8024975d9cc46036b7958d2c1b288"],["/hk/zglt.html","e655eaa41b0e4847ecca663639a1806e"],["/hk/zgyd.html","4eea335061b20fecf0a60edfc9c8714b"],["/hk/刀客源码网.html","129c8f8f672d5dcc9a0711b311fc4362"],["/img/404.jpg","10c0a740a9a2bee9f3cda1108e7f0195"],["/img/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/img/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","38770290821a2d2ae22f0728683509fa"],["/js/card_weibo.js","5fa4471b13d0bd4315be295663388e16"],["/js/day.js","9ecbbfaff260a5decaac659cff9c2c96"],["/js/eurkon/color-thief.min.js","96805f1e38ea0b713936ec18e7b450a0"],["/js/eurkon/eurkon.js","45abdc07a0ca42bda16f214f59f34488"],["/js/eurkon/refresh.js","6de41747d67d724d4b7d619b87869443"],["/js/eurkon/rgbaster.min.js","90546dec3661d234ff3ee6f6bcad527c"],["/js/lunar.js","cbf72e0a749b2b1473dac72e16f7ffc1"],["/js/main.js","e8fba2bc3e87389d1ee16ec25d5e1d34"],["/js/search/algolia.js","cb2b0f7e1fcea9d7485a395f69c94468"],["/js/search/local-search.js","483487f7261461207536fd9bde606418"],["/js/tw_cn.js","dec7bff10294055b65e3dd37af6fb3c1"],["/js/utils.js","2ff83587b5454af8cbd934f5caf6b94c"],["/lazysizes.min.js","45bacd312d5098b4b59f563d8756c15d"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","9eaa55c0907bcf787033d58ed87b8569"],["/luago.html","74c4deaa85eec2dfeb805011cde0ba7d"],["/luago.js","3d9c4c576287f2d0a92bc064492e8996"],["/mmexport478b70be3042bd0f6c5025b81a90278e_1721696014150.png","abff5c7bf33e61926afb5a276f42c91c"],["/page/10/index.html","7cbc40ce478469cafd303d634cce0256"],["/page/11/index.html","85711446b31d556b92a819f24ce90ab8"],["/page/12/index.html","c821d25330c5c26d81771d5152279079"],["/page/13/index.html","1c8282921b30693c92f1d1a8868bd18a"],["/page/14/index.html","c8e6f00ef03ae46ae17914cc05e09b07"],["/page/15/index.html","8db7a7de7567ba0139b00627d04e985c"],["/page/2/index.html","788214d1e2f835f2e112a350b669af78"],["/page/3/index.html","25893d6aeb086c1419bdc254a4e2f03e"],["/page/4/index.html","83d1966310fbd0883f5775840292417b"],["/page/5/index.html","c4d340cce17bc35388bf45df30be4d3b"],["/page/6/index.html","70ab93f8e2eb066d6eb37955abd3e267"],["/page/7/index.html","2339ed079e3eb9e159b9e02cb566eae3"],["/page/8/index.html","dd7929b903f1eeb1b85aefc50289ffbd"],["/page/9/index.html","bf51d0db95ef882f5f20dc4cc6f98e12"],["/page/video/index.html","aeccd5b3bf1425fcdc988abb46cc22ba"],["/pinterest-bda12.html","1f1ddf0595c94a35bfd6b1cdd326b48e"],["/posts/0.html","9206d4edcb2039f64c83c1e6e28b108f"],["/posts/109a1fd9.html","f4bc15a775de099ff314451540aec64c"],["/posts/12251e0.html","9c4ea023a3eab1a1c6915c1853372977"],["/posts/1291b5ce.html","c032e259b334233e0dfb369edb4f35fc"],["/posts/12f524f6.html","a879e5e6a4fe8fd31af0952b3f49ba23"],["/posts/13356800.html","5d51b22b8bfa79ce9384e3af36117966"],["/posts/13c8547c.html","bd14e980ec1a1a29b63e92c7eeaca835"],["/posts/1405936e.html","829057dcddce28a05b983954bf7813a7"],["/posts/1440fbb8.html","f23a19e9b6da9de82cc25d3aac451ba6"],["/posts/150041bf.html","6b0352190fd41c3d430b662c6d5b6618"],["/posts/1568bde6.html","b790b587f689c4b491cae773d2591fe6"],["/posts/1750b1e.html","fd5d4bc32520becf46fdf10b631fadc4"],["/posts/1886d22.html","c98a7113cb8b5abf72971360cbdb8deb"],["/posts/18e4e471.html","a8ca93276079036d9f34e5fb17b2c328"],["/posts/1915b59d.html","1f600f1af624ec3eed7d8cf4d9b2a298"],["/posts/19641904.html","2df92582bdbca7f7adb15ef590fb7c91"],["/posts/1966b38a.html","95a5f6c24113684250e20d402a70c5f5"],["/posts/198a4240.html","a03a189f3e6ba8b4d7a85bdee6187105"],["/posts/1a3980be.html","180ab0b6faa1b1de6dafec6276cce68a"],["/posts/1a5e1c0d.html","3bd8eacf10944a86a731e4e30e5d06ce"],["/posts/1e1c1d24.html","453d23fe04c6e0b2d96ad2b2ff59acb0"],["/posts/1eb7c6da.html","a63628aa5fb2de5c29d199083343aeea"],["/posts/1edfa44.html","55d3f1fdbe87757aae87dde3b4766c57"],["/posts/1f213857.html","3557a18739db39e6ef1c5c9fc1c37258"],["/posts/1fa16eeb.html","3e6716058a190077d767a186522ae7ca"],["/posts/2023da43.html","f6ad4535cdb9c897439c7ec69d3b2450"],["/posts/20678fea.html","f47e82cf98d7e94526b1854ddf8f77c5"],["/posts/20c54726.html","817f207a2bb906cfec938b9f13354b5c"],["/posts/21cfbf15.html","6281ec81d366b1d3f779d02747380675"],["/posts/239d9bb8.html","43d17beea862f15525b89274f2eeef58"],["/posts/24423bd1.html","8b7f062f8021dadf51d61bc38753b8fa"],["/posts/2447bf2f.html","867fe12f2d4f2e9332c0b5bc1145d7ff"],["/posts/246bafd2.html","f81edbf16f27e3b0154aaecdc64b6d32"],["/posts/2493b870.html","a2f9d4fb46f8ac7d6d9caee6ad451366"],["/posts/25cfbcd7.html","066f115f9be78b7dfeb2d54803ca78da"],["/posts/26d84ff1.html","9585d4b02ae9f2bb355f5bb3ca93ac20"],["/posts/28246ec4.html","f1aadda925d84908ff3f6d76e7e38cf5"],["/posts/28b22255.html","50f1dfa37bcce681a019a31d060ec313"],["/posts/2b096de5.html","d3cfcfbbb8d5f11c2ec17e050e9ade71"],["/posts/2b2a8302.html","47fe62800bb589864cedb1bab9f17706"],["/posts/2b5a6d5d.html","ee78a0d43840aa496bf87ee41f3b1068"],["/posts/2cadce64.html","9bcff3dd7b1431b23c7c58c8be9e0d76"],["/posts/2cd88606.html","ee643a4f6cb1ee14df342b759e61bd19"],["/posts/2ce2f8d4.html","7a5d551d3e29a2144c83bac1471cac78"],["/posts/2df239ce.html","cfa2485b6edf019f40b68784e7e7af7e"],["/posts/2dffafc5.html","167eaaf46f10864c4af29c1c16f6efad"],["/posts/309e582a.html","668486636ab32a2e3ae32f95c1516e4f"],["/posts/30f32a5b.html","f0499e6a56bad22f718ce8b7d0ee96a5"],["/posts/30fe99f3.html","411aa5f9f1972cd52c343474fa544adc"],["/posts/32423d5.html","b201a0fef48c2a16348a570ed4faea72"],["/posts/328e1bbe.html","f0716ac3006970056bbfa11ae93c2e2a"],["/posts/333223b4.html","ad2bd55298a41bf9259f6347cbb8a44c"],["/posts/33a14f44.html","25717e8fb155d49105e2674099b8fc28"],["/posts/35047491.html","7044bd222fed8c6ceebc8998b48022db"],["/posts/359243e.html","35ddad37481e6290fed817688673e36a"],["/posts/3654b0b.html","2fc5b2e80c14e26bbe2917c8645697ef"],["/posts/368d6781.html","3963282113c6e4e10ded945160f7ab3f"],["/posts/3739bc14.html","52ba792454156c5b242b5b7a8a0cb6e6"],["/posts/37f6d690.html","277378b630102e7d9f18e433488622b5"],["/posts/38142277.html","9c4941f6dd2f6d4d6b901ea274519c68"],["/posts/38b005e1.html","4929862ee953ae30894e9ebd8bdacaa5"],["/posts/38b292bc.html","c8e7e62952d6bd5db1ac116c618ba621"],["/posts/38b6caa1.html","8d952da1e9a6e965bd042ab958287c2a"],["/posts/39b121ef.html","a86e0fd5b45182c004e1622b3513fd4e"],["/posts/39e5f3e0.html","026827895d8e11aa9aa2d5d19a3db859"],["/posts/3abec1ed.html","e065a09e796679d8fa99ff4f63d5b7d8"],["/posts/3b5ad35b.html","de15c68908a57fe2c09689aaddfad46f"],["/posts/3be895f2.html","a4229f78569f17983f49a78b1abcd77a"],["/posts/3cf3a546.html","778805c5a6e3fed1f434137b04d42232"],["/posts/3e023911.html","87614320f5dc5dd604ce5d3b2c41d31b"],["/posts/3e07c6ea.html","b2ad5418ddea327829fa096a86adc350"],["/posts/3f3dfdc3.html","44c45f3ecbfea2f2ad8ac810b1549be1"],["/posts/4021dce1.html","10b7dedc6193e5d4a559b1e7c785f84c"],["/posts/4073eda.html","69070ca85603c20b8ca3fb8446c8b956"],["/posts/42f1b0af.html","958bf5c304251ef72ad8827b0594ff08"],["/posts/42fa6192.html","1b247d93955b4cbc482e91ecc225fc38"],["/posts/4300826a.html","2765a6dc37f8fe787448455a435ede3b"],["/posts/4328bb6b.html","b31d946d04134581f137b3b5836a3d90"],["/posts/453e049b.html","9170c6bef9c141c6f9030ec7e8a29a2b"],["/posts/46ad6373.html","35c3e7fed9f33aeeae872bf657544a8c"],["/posts/477150c7.html","9dfa20b90517eb08f01ba32d386c889f"],["/posts/48578481.html","2523f1c67ae7a8acd10f00e8d938be3e"],["/posts/49479ad2.html","ce5e5c3fc97698716078719cce417c82"],["/posts/494c5ca8.html","e863acc8880796bd2adf804beab69b8a"],["/posts/4aa8abbe.html","5c7b4f023b4d65c523a95bf1895fdf3f"],["/posts/4c19caa9.html","b4df0147c4078688ea99b95998b970ae"],["/posts/4c8c8702.html","b70cde12876af7aa0919aafaa9a7a6d8"],["/posts/4de20b3b.html","3c1302d67122b1e3e71a8621e54e6a65"],["/posts/4e93ccea.html","a0048579b839fe5c835de333ca3ea24b"],["/posts/4edb8f20.html","3ceee68daa78361617daa26df0faeb1b"],["/posts/506b48e4.html","b248780abe9bffde6065bb8e8256b26a"],["/posts/507c070f.html","c8882c1cfd1a7a1beff2def5dc24b134"],["/posts/508f89c7.html","19105ec2729fb9e00cc9a26198e9ada7"],["/posts/5090e19e.html","08ef307122ab34fd7dff36eb2c18cb15"],["/posts/5095a20c.html","7b7552020ecae42062be7489ae3a914b"],["/posts/51998d20.html","3a5a9d0ccff4ca17490de56051d9b581"],["/posts/52a47f9.html","18bbcc3bfda2dd84ed6edc3bef3661bf"],["/posts/52e14f90.html","f1722761d9fe934bc4edcbf17726948e"],["/posts/5351f2cd.html","c5cf59701791bf97482d8747962839a0"],["/posts/536c9f44.html","656ed520c6ef4564e0044301e745105a"],["/posts/53a83f72.html","b6f0e1a3180309636814970f6c6dd2a2"],["/posts/551c5fa5.html","6534caccabd24d0da9c28a92651a3c35"],["/posts/55854339.html","65244ee638bc4f6a5863d68496bdca50"],["/posts/568325ac.html","75e64557c8546edb4c0cf6f2be8a0506"],["/posts/57057618.html","e7440ad0510a58850507faf2b290c906"],["/posts/5729df21.html","36b1bef6b06ba388a9f3d1a04a9bef17"],["/posts/575e5af9.html","3dcfe7d20a142a5437af6c3dde9b90b9"],["/posts/57bd4a84.html","9d12fbc831162e8c6c9532862362bfb6"],["/posts/596e852b.html","5e7376c4b11ffd503f887daa7101473a"],["/posts/597f69de.html","c918314135492e3732473df9c1988172"],["/posts/5a48333d.html","a7eb05b20deefefb3fb538634a138cc9"],["/posts/5bc8be5.html","04890d495bf2cd2d2eaf058ff00d8a91"],["/posts/5c3770e6.html","743df335f17d177469b0ea59ba981ae3"],["/posts/5c88f941.html","1e7cd21f3333976703432549ae376ab1"],["/posts/5d4ce330.html","b09c7567700a8d3e1f990f78ba198dd9"],["/posts/5d51032d.html","b3424ae34a8009a35d86a52887a8116a"],["/posts/5f0e72a2.html","14c8eba1ea0d25fbedc5d13210c60c88"],["/posts/5f7c4ea0.html","73728b56dbd6726092154ba4a6b1ba30"],["/posts/5f8718b7.html","dfd953f68109e928668decf68bca9225"],["/posts/5ff009ed.html","5b1486b9aa96b0ef159d1c6fa8e25936"],["/posts/60284ea7.html","ac9d3bbac85700384adecfa69d28aac6"],["/posts/602d1f76.html","aeec582c8174df016e7519cffabb763a"],["/posts/607c47f9.html","c1d3c9babe2e16345f28ad1400aa3782"],["/posts/60c2c915.html","02e22b90d71bc6e66f51bfd709dcaae2"],["/posts/61edba1c.html","0c23675f37e462b938c664e1539bd476"],["/posts/6201cf8d.html","00f174e2c2a321500bb0621db89f30e4"],["/posts/636dabfe.html","02bece5e7a2a6f85f94ce2b5e327578f"],["/posts/639e396b.html","1a45dc93933d452464d58d728a4a65f5"],["/posts/64033042.html","3fc99be9ec2b71ae72c1b9920fade543"],["/posts/640f0305.html","e9c1db370bdaa68770b72100377d68d4"],["/posts/64267146.html","fa6ff2744bf48e936bc617629b69afb4"],["/posts/64c9400d.html","6753d80930776638a8894b2c220b369c"],["/posts/6503a147.html","32f864f42b1c326c8ef153c0c316fa0a"],["/posts/657793d6.html","7f815c3d66cca17a701219b007df9be1"],["/posts/66985181.html","c3669ff6cad918ea705e2291697c43ef"],["/posts/68623a63.html","d959c6e12fe6a8f6d5d88147152bc3f5"],["/posts/68b42bf4.html","18bc7dfd7c86c9a53d7695f3033a8e5e"],["/posts/693e8557.html","db6f16bbabef62c2fcabfe86ab7960b2"],["/posts/6a5ca45.html","ab4603e25b121cb02d36b16232e18b97"],["/posts/6ad51b4.html","7af13ee4deb13aece052470dfbfaf92a"],["/posts/6b28d75a.html","19057aebcf27b7f44d9abddc14a73447"],["/posts/6b6cc13f.html","238f394946415ad7fa0b3278fbb324d9"],["/posts/6b915706.html","6d16c6cda7996662521cd2c49dbaa971"],["/posts/6b922888.html","feecbcfa744fa52f608e70ef24a371cb"],["/posts/6caf3fb3.html","30f1978f3976e42db172dca7ca8a5176"],["/posts/6df9bf11.html","6f9f6ff3f73e9597f45f1fc770b20b8c"],["/posts/6e1fea2c.html","b7425fc014375e5b5e0266f150829579"],["/posts/6eab0399.html","f7bb33fd077c6c19a07d7262388197a5"],["/posts/6f192216.html","2cf33582eecfa22e5854a34a19a31460"],["/posts/6fbd24e5.html","0e58a3d3d113b3d07f1de6153b13afff"],["/posts/70c4d13a.html","c5b9ad4308678e0fadce74331ae2f486"],["/posts/70f280ec.html","45bbd743b9dc8d4146f3bcf3374dc009"],["/posts/7140a0a.html","da47c275e458d5cef1203d503153049b"],["/posts/71978ee7.html","8c0d91a54a49630a52ae21d3f7316137"],["/posts/7234f018.html","318587389222984f8193849440190964"],["/posts/731e6299.html","1c1b7d4d701603677d8fb20e4de282ab"],["/posts/735634e8.html","cede4be826013b824aa18c743163139f"],["/posts/73b7bf1.html","67dcffe3fbaf9153e39a07261bab7b72"],["/posts/7670b080.html","b35d4147fb551cdd8c24937a32837b3f"],["/posts/768e8ecc.html","897fe52b8dc417f5d1134a032f884a72"],["/posts/77c9a2eb.html","815a532b5aaf0ffa68d75a84aa2609b8"],["/posts/7801a0b2.html","5468b34c14e5037aa652d1bc9953dbfc"],["/posts/78430d81.html","072db806ba86cae0ee423428a5f0a33e"],["/posts/78f1cd.html","10d3909a920401ed53c8ff9874fba55a"],["/posts/79252bf9.html","19e0f35ac4a188311fd29f4cb8d0cd39"],["/posts/7af5e990.html","d196280e34dcac81e3012bea277bae00"],["/posts/7b67b808.html","edf04a4d2e133d7c61c18e4ea1a29599"],["/posts/7b87ee30.html","d054ebd4ad586b815edc5461bbaa06b7"],["/posts/7d79717a.html","342b2dd3492adef02473f1560077a0fc"],["/posts/7de6d28a.html","b0b26fce5b1ac76fd3cbb0fe11f90c7b"],["/posts/7e0e646a.html","520bcd32f5a29151b613dbb89584d6e3"],["/posts/7e5455c4.html","8f4cf277a2d4d3045d46640b7fdad11f"],["/posts/7e81641a.html","ba1d4c40979bd0c70f3b1e430cea928b"],["/posts/7f370aa4.html","e8204d9b0340787ad2b0b8d09b5f0b5d"],["/posts/7f5771ec.html","69dc1271b5cd3ed5a31226cf0240b8fa"],["/posts/8001d6e6.html","1289cef8606a1acbed3477a1de386067"],["/posts/8049e805.html","a592492ebb49607cc98751dcaf43297b"],["/posts/8097658.html","7b17c3970909c7f2289453eb014b8474"],["/posts/814432ce.html","38d6e09bd7b1d22bc6622dfd76e89175"],["/posts/81786960.html","90cf73236840fa9533d6154de9045020"],["/posts/81a831f8.html","bd057b8f2f56903453c1f96a1766fa7f"],["/posts/81d8717b.html","bd72110394fcc681d5a628df588d1d68"],["/posts/82357def.html","6da047766aab181603ee66ca6cc38953"],["/posts/827264e5.html","e4435489e7f22ec3b7aff073203eb31b"],["/posts/8284c8e9.html","7aadee8dc2f7ccd7b98540fc4f7b637f"],["/posts/847f802a.html","d319bd8f29ff2f48ed173162b9695b33"],["/posts/860679a6.html","19e3012dc46366e6873dd6d3e1bfc0b9"],["/posts/889641a6.html","3009003ab73efd20ed099c77f29266a8"],["/posts/88e04742.html","2981e08cc798460eb59395db85198764"],["/posts/89757140.html","905aaa0a31c9204be9cfa19d7a66b040"],["/posts/89b58547.html","234ee36bc04b1734c8efe110d6d98309"],["/posts/8acf83ac.html","b9274d9b3f121924825daddcd63b4d9b"],["/posts/8b344631.html","86838b0ceb1f38b277556c567dc29e71"],["/posts/8bdcfb92.html","73af84cbb4810eaaec7919dbe28ebb6d"],["/posts/8bf59925.html","2f079a419ebd03ca713e01a68ce4e63a"],["/posts/8c0ed596.html","e7b17a167dea3a05087898f95077bfcf"],["/posts/8c7ab70c.html","fa52e50e4e93f9df069984b7443c81cc"],["/posts/8c9ef42d.html","b25e2f298d2e051d7da9b1911a17c1e7"],["/posts/8cd805ae.html","5e4f741606f77d07c57ad7e6a5d4c105"],["/posts/8d2e234f.html","ec9dbb4c2f297a23a2c0a75dc8ebac07"],["/posts/8dcecde8.html","c84e98b469ff5b14b0f7c6b81f93d4c8"],["/posts/8e23eec0.html","0d52b05cdffea52b7253209aa5125daf"],["/posts/8f7ff6ba.html","ce17b6d6488c366f95be971114b6f4ea"],["/posts/91131d45.html","db7ccc669ffa742acd65beb5599a305e"],["/posts/913b2502.html","38bdc7d9edd4434e687fac3740e992b0"],["/posts/917ecca3.html","f9a17dd6fcb75d8a7c353a925f425de1"],["/posts/92f3b359.html","462a9872dffde1e727d4651a8ec62b50"],["/posts/938c27be.html","15ba6afbd5e14bcd3dd050ff91aa2e30"],["/posts/946ecc87.html","dbe77f76b41a4e74d39dc7d76703ea12"],["/posts/9522235a.html","c28b24cd6741863e84528e27a06a71ae"],["/posts/953d25ac.html","4a4b345005a56425ceefd9fd64a287f6"],["/posts/95c091bd.html","67d112b8771857a0af58882f128a4fe3"],["/posts/95def683.html","a685aa1b532d7535e5258bb78cd0231b"],["/posts/95ec7c89.html","edf92d65fe00129bc8ec1552f633dddc"],["/posts/9719ae68.html","77e77f890bb95adefad1d56fa431d812"],["/posts/983b9cdf.html","4fc8c0b873ca9d0b2e53a9d553676946"],["/posts/98817f44.html","6166c91b877f0eb885b2abb41484a96c"],["/posts/98d20436.html","64fcbbdc37a79b03005f1f515ad5c0c2"],["/posts/9a54aa8d.html","cb80d03c5b658e20003f76d94ca10460"],["/posts/9c5154bc.html","702a5cdaea4b8d7ffc08675bb8e54434"],["/posts/9d7bddec.html","4c6f61117cf33cfaca7be9bd115519b5"],["/posts/9db656e5.html","279fb346e161123fd2dc1ac771a37711"],["/posts/9ede5e65.html","21d36c1bddfa118eaa6b82f09c9270bd"],["/posts/9f789b3d.html","704bbfdee96f3ae542ad6603d63edce9"],["/posts/a1ecf766.html","52e39461329fffb8de2488b03cbc3690"],["/posts/a355ca2f.html","923addc4ef89a562ad53da01afe3b34f"],["/posts/a3dfc912.html","95cd6a0c33a4dce2f6a52ab002618c48"],["/posts/a51da93b.html","8cfe68abf341ec9d80f61af3d926ea1e"],["/posts/a56a2eb2.html","00871659c7bdee0380b2be5eb9f0e998"],["/posts/a590589d.html","dc9fdc0ecace57a8c614ba0ce86e07e8"],["/posts/a5b7128b.html","9e4526735ae0f79746614d391a07e95b"],["/posts/a6a38b7e.html","31c2f4a0c791f9c6580188fcdfbe3ba5"],["/posts/a74dc0c2.html","d675567e3108d059cf61515a0a8081a8"],["/posts/a819016a.html","0b8028c0284a60c7f5ea332116fe4509"],["/posts/a846cf73.html","88f0613235772e6ad22a2a57a4fcb1fe"],["/posts/a90d7f93.html","4b9b0bda9b6c3b47e53364a4910365d4"],["/posts/aa58734d.html","158a0b60ba4b9f314efaf947ce08d938"],["/posts/ab8b68ca.html","497b0d70d5cc43cf909bf68a9d93664e"],["/posts/ac9c2c54.html","b7ad0346492407104d6bbabe1ae4af13"],["/posts/adbb14a7.html","8b25e34909e1a07a7387a64a804f5eeb"],["/posts/aec1a9d9.html","3ef395e5ce7b4caada6d954ac8068101"],["/posts/af012d15.html","7e2211909052bc7270a38a2d4a9e06fe"],["/posts/af153626.html","737238b01496bc529e53b72a735a8333"],["/posts/af5c3e7b.html","ced2d22d1fadc68a98ae6546efdf2bdb"],["/posts/af675a24.html","91ed3208f2c4dc87490557a924ff6542"],["/posts/af69aba0.html","5fc67457b5ab85e98d9eadde8a7ffe1e"],["/posts/afc66f22.html","eccf4972131ec354bf25fb830ac625f3"],["/posts/b10c353e.html","ee132e77d6305ae97d61175e0a218b88"],["/posts/b251d454.html","37b7bb1334f77d6caf6891539ba4d568"],["/posts/b284ac41.html","acd6ce830bff0106b775f3736ed56b6a"],["/posts/b2a9f0cf.html","e14bab0689fc581f604d510ed34019e3"],["/posts/b2be80f.html","ce6103b35c9fc7f95bfc17e1b053cb7d"],["/posts/b2e5fc63.html","259ca48362edc3614a813c1f4f65809f"],["/posts/b37b5fe3.html","817618410b4352394eefaac4b6002400"],["/posts/b3b49638.html","c02df2547106fa5f551fee3b1f133a7d"],["/posts/b3fc3e6b.html","473716bf27af210f7000cf4121d8c228"],["/posts/b479c8cf.html","b67494a5b9ee19bfb62ed8ce9495882e"],["/posts/b4a32689.html","6d98d2b9bc1e814eb80275675686cdc8"],["/posts/b56eb2da.html","f43038e0e2ef4fa768f27dd87b4bbc27"],["/posts/b5ab3744.html","54ac8051f3176d4d40c260a8677dbae9"],["/posts/b5c75557.html","66f2d2e2db1f98af271b11fdd5d4c8ca"],["/posts/b62f9eda.html","abf7783bd1604683624807be7a613267"],["/posts/b6adbb.html","ec5d27032b2df0f39885b47c473ad3a1"],["/posts/b7222ea6.html","9acf8c6424e4bc5f472e6456698fd4cc"],["/posts/b77e0441.html","3630e1ab09604a7af4af32e2e210b46f"],["/posts/b925a2c.html","973d262daf16d2a4c6076073524396b1"],["/posts/b9aa082f.html","cc09764c90689d8e965c7352ad11caa0"],["/posts/b9c8b9ac.html","eb922ab9673d1f6f7645a47605b73757"],["/posts/bac29bbc.html","df20ee7934a22843e19b187d2afa44cd"],["/posts/bbf12734.html","ad9d0c73fcc45052adc6754003623dd0"],["/posts/bc48aaa3.html","ea2fb4c985d2194705dc971f81c4afe2"],["/posts/bca3a713.html","d6bc642192dbba8a70ca546043acb06f"],["/posts/bcb29fcd.html","7083b82b35bf7ec15d31e45cfe3c9c6e"],["/posts/bd0b120b.html","0722173518987879ba21aba1712dc909"],["/posts/be6e5947.html","a6e2a95915e03b125e91198d0223c4d4"],["/posts/bebdb061.html","0833a0dcf5ef001879beac4efd525fe8"],["/posts/bfbe6787.html","dd4aca067fcc1377088893b4ab7983e5"],["/posts/c0297c2d.html","8c28090fc97a4b0860331f6d685a7f8d"],["/posts/c0c25c2.html","6c54fc2fe5f3abf3bef6ed5e847960b8"],["/posts/c13265cd.html","a6d30dc2415813aea7b59366a8eaef5d"],["/posts/c13f1087.html","fec3b4741b1154323f4fa14c2c2535c5"],["/posts/c144987e.html","15a89c1ae3c2ba39068ae2105f419826"],["/posts/c180db3c.html","60f879e5bb45af0062c7437b6f2d225b"],["/posts/c1a3db91.html","75a36ba9c4a96246511b0ef64bef005b"],["/posts/c2b7b300.html","796faed2f92a2efdcb0889c56f391da1"],["/posts/c2c733f6.html","8324ea34dc2e1e2f612d1fcd9ffb95a2"],["/posts/c2ef3a27.html","98438cebcdcd031d06ca01536aa22c79"],["/posts/c304c6a1.html","00cc14ae23cf4197ef61c168ff8f5cf0"],["/posts/c447f343.html","b2831454d47e334ac228b38562111fd9"],["/posts/c453a313.html","0c54f5eb2c3a4084cba271e345995f3a"],["/posts/c45a9693.html","41a0f902ea4ec90c694c8efbe71205e8"],["/posts/c45bb618.html","628761d90c98eb210a3ce914a517a09c"],["/posts/c53c5c30.html","95f6a872df8c8602a338d619b5c68c14"],["/posts/c5d22c3.html","972a1e94588636f0f485052bb3a24205"],["/posts/c62b54a0.html","8afca6c2a3745a7244937b74c98ce548"],["/posts/c7da2cfe.html","2f966b2ae221885da1756048a5ede9a8"],["/posts/c8a3a8bd.html","1734c81285f9ccab2a7c5b88e660f265"],["/posts/c8f54d07.html","089e5f94170703cd0bd23191cc1a4426"],["/posts/c9711c19.html","a6576e11abf8f3450dcca8ee7e8394cb"],["/posts/c988a99a.html","62aabe6175ab7c7091ce47d8dccf600e"],["/posts/cb689d9d.html","249c463f26fc44f3a7c205ea834604fc"],["/posts/ccd6dc55.html","31a979928c14f7c186dc8206f9ce99f8"],["/posts/cd511b20.html","9a601448a5f9c9b6e8f0213a35c83f70"],["/posts/ceeb73f.html","b17dcf32b29cbbb943e71d7a3dbbc6d0"],["/posts/cfa8511d.html","aea7246848cfb8762075c4526cfc61e7"],["/posts/cfb47711.html","190b2643e1900a82383765c9fc32b45e"],["/posts/cff7ed2d.html","ce4152f5ba50621727572d08fe1d7ba6"],["/posts/d250656c.html","79783a38a1de6310fd7e3011cac758c2"],["/posts/d2ade399.html","92b54284363a6fac3f85f358447fb37a"],["/posts/d46f6783.html","9e822f128b574c9dc7229135e4c4e77a"],["/posts/d6b675f3.html","264c714395095a0552e2b06a44340fac"],["/posts/d72ba00d.html","006dbf0735b3fa565ae6eab86274bfe0"],["/posts/d82aeca8.html","03714e52c0c186821aee7879e8ef3558"],["/posts/d8a8a379.html","bcd9614be776141733edf4f837168efd"],["/posts/d9911b87.html","673b6aeab875f3ba713fe817afcc6f7c"],["/posts/db9e0f83.html","398ab12c2199db9e00034e1570a4b1a5"],["/posts/dc2d6da8.html","1f3bfb08366d64422e7e3c6975f8584f"],["/posts/dc584b87.html","f30e6f9afba0fe447428fb31162035a0"],["/posts/dd303c3e.html","5c23bf0f67e63accd9094dbc90ffb55a"],["/posts/ddc3b679.html","a195e73c12a110d7ff39040408b97bdc"],["/posts/df6220c0.html","448b7be6315e089a98604f8a18e8b6ec"],["/posts/e063540a.html","81e28b44601d0566bac3f7c98a24f8b5"],["/posts/e0872e45.html","d9a362fa8ed8f7b6acb2b545635af76c"],["/posts/e0a5a9e8.html","a89f6d351da42be5a85fb456b54da8b9"],["/posts/e161050e.html","08cec9f9e0301e0dd03849b1d83c4dc9"],["/posts/e1734d00.html","9d002e8096d66acae659c776a3f208fe"],["/posts/e2486079.html","2ecf681eab97c28addd72b3e2a59cb23"],["/posts/e2bbb677.html","4053258bd297534155e0314c13547a8b"],["/posts/e35a235a.html","d9db3056a593b61af713e9e8a78d7d22"],["/posts/e595a83a.html","a5e53044a40c0494fe0238b25f0ff1f6"],["/posts/e62406c5.html","b5f1bb9878bd016522a619e6a63aa215"],["/posts/e6384e4b.html","9137aeed882e57a845414fb63ede58d0"],["/posts/e649a517.html","8c266020ddd7f9a06767e4f19c89109b"],["/posts/e680f38a.html","7d7650b65b74c29967e31976b8470e88"],["/posts/e6cdcbc8.html","e6024e281c6c6a8150621f187bd66011"],["/posts/e8495b18.html","f56312965244eabbf3aba2a53686f100"],["/posts/e8dbb5be.html","8b237b25d07e5345588a50431ee70d9c"],["/posts/ea33ab97.html","ccb4129d6d6a7c57fd1f885652a2ec4d"],["/posts/ebbb5fc6.html","d1224692f898c5db6873eb973ca04efe"],["/posts/ecb39c55.html","3a249365038a9119a9113bc97e15ccb0"],["/posts/edadbf98.html","76b3b63b020e4778ebe92ca53b42c288"],["/posts/edc470ef.html","52773fb7a9d67e53c4c4f2d013db771c"],["/posts/ee507888.html","e67ab2d1153d21a0b61799ddc7b8c149"],["/posts/ef51c88f.html","70078c7bdaf4ac5262c6fe27b5248d0c"],["/posts/f0a9a587.html","65e9d9e93aff99f08ad6bfc9bb2ad16a"],["/posts/f11c54e5.html","f129bdf6bc58a921004dac533c7b4821"],["/posts/f18d9e91.html","7d4e537ad2add3dca47bab1adf7b23e2"],["/posts/f1a5d141.html","831d723c8d5103f6ac14c82380263c1c"],["/posts/f2242946.html","58c09eaf362b05226371e7bb6c38814a"],["/posts/f32acbcc.html","9fb3776a744b917a6ef0388f5068d3ca"],["/posts/f3380c38.html","46586b91e8adcde57673012c57e214b7"],["/posts/f4f078b6.html","141581e97a30e37515c5c66d947336f4"],["/posts/f5be0c94.html","be4e7be8373b22f3837545e0664c42cc"],["/posts/f6010553.html","29202ef6338915bc16ba38b42769bac2"],["/posts/f61cb86f.html","511ec8fd3ca10595854801ac07c38bbe"],["/posts/f75a1c90.html","8ab8349f5db9abfe8e409b7a6fbd208a"],["/posts/f8f3bb76.html","3a67227c06b6d2c4007e7ddbee885a37"],["/posts/f9da1911.html","1d5e59b033aed4fe2221760faa593d68"],["/posts/fb2b1683.html","5094129dbc229b8620bafaf893849955"],["/posts/fb350f3c.html","a9eadaefbf240c9343b1142166ae45f7"],["/posts/fc100f09.html","3aac4885a3fed29c14bd649422da530b"],["/posts/fc2f654c.html","1ffb13866ca2907661aa0ae093693437"],["/posts/fd1b791b.html","ba1899e938ff23d49ca879956e74bfe7"],["/posts/fd3d5dea.html","5217e4d6f07039d41da868f5be19ecca"],["/posts/fd96eead.html","24ef4959200526234f3ff69ae2f4db78"],["/posts/fdf95b52.html","c279a64aeb2106b04621adafda165704"],["/posts/fe187ecc.html","0a2f66898d4a0ad1fc2ba33c32136979"],["/posts/fe610e6f.html","7c611dc8e85e195802452a2b5229eede"],["/posts/fee9093d.html","2eaaaed40ef9dc83f56b41314b16fed0"],["/posts/ff0feaed.html","afd0961e2b63d5a8f2dc3709c0dbb3c6"],["/posts/ffb80acf.html","f3230fabefd7aeb3ec7601c00ac499f9"],["/qrcode_1725078974876.jpg","624570451ec6525f22f843a504459d6c"],["/sw-register.js","bf4e43997b360bae73b66cb8cafda410"],["/tags/Aplayer/index.html","18058888be2c129555d8425caafa62c6"],["/tags/Bar/index.html","8a68475dc2963f22e3cdedd87e4f7597"],["/tags/Butterfly/index.html","d338f9ce35128ccef9adfc18cd3fb2cf"],["/tags/Hexo/index.html","ad359f06700c967b75896be43d5e61e7"],["/tags/butterfly/index.html","458027fc3f979cd00e58237de0035a9c"],["/tags/demo/index.html","8206fb765b1ae65dfc48c6ea4442790b"],["/tags/highlight/index.html","4c8b86b94fc592a613bd87e4d3771f25"],["/tags/index.html","7e3cb077a9b15553e728488f710da62e"],["/tags/tags/index.html","84031146c90cf96ff1cafea3e0189f63"],["/tags/tags/page/10/index.html","5380f7bb0b1b02e1dbd15c3b9e02bd80"],["/tags/tags/page/11/index.html","15ec7c4e6981ef5968803feb6ba1006d"],["/tags/tags/page/12/index.html","40f4801e84b1d9fef077f9e5f4db0a26"],["/tags/tags/page/13/index.html","28182a35d6aaca12616ecdc2910acb42"],["/tags/tags/page/14/index.html","dffdf4332ba00b676b06c2f2e6a41623"],["/tags/tags/page/2/index.html","b48cdf2a97f1cc9e4e84d8c7caf84341"],["/tags/tags/page/3/index.html","02e05b5f1cd24fb2cf168ab639af9249"],["/tags/tags/page/4/index.html","43c62b3cfd6eca54b1c0fbd7c7c25aa4"],["/tags/tags/page/5/index.html","45ebbe53cfe7091c2b8021d523d85e5e"],["/tags/tags/page/6/index.html","24a0c27bc374cbcc7a8ce554586ace90"],["/tags/tags/page/7/index.html","040788b69b793de76b44de9021aa5516"],["/tags/tags/page/8/index.html","b44d0a009b702323ca6501856972e247"],["/tags/tags/page/9/index.html","7d208a0b484bdf87151f3efd486e201a"],["/tags/top-img/index.html","e4316087633544e9e15002ec1e4e7351"],["/tags/主題/index.html","3cc5e846257fc3976ea230276288a100"],["/tags/優化/index.html","443bc0673a47f2ae3e33e4695efc142a"],["/tags/打賞/index.html","373d8f30232cf1854f5e06bfdb233f29"],["/tags/教程/index.html","93593071b8dd1006fba9b87749946786"],["/tags/標籤外掛/index.html","561fec87474d99f0fa743c88355348e5"],["/tags/美化/index.html","6131142a76e02f6d3a82ee2caaf328cc"],["/tags/魔改/index.html","2de8d2ef6d1ab5e25f9d51e864f9cd8b"],["/untitled.js","60b6022d611f9ba01a721942cc5d90eb"],["/userAgent.js","428949435f0f1dce3eb22d209e1fee61"],["/video/index.html","5374dba1e1cd328e888e750feb8c40a9"],["/x-frame-bypass.js","d0e55673f7b13b00bbe5c2182932c465"],["/万能api视频解析/README.html","9a64bf4edad1202363c2d6b8fa534c01"],["/万能api视频解析/index.html","ab179f80ef26668d5b2d950d1deafffc"],["/小姐姐随机播放/index.html","a14198eb64ad2650af6676c74e4b962c"],["/小姐姐随机播放/static/css/bootstrap.min.css","bbace035fd25209e34be801cdeaf7a17"],["/小姐姐随机播放/static/css/images/bj.jpg","7014c63c5ba024799b083089e2429e2c"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/小姐姐随机播放/static/js/vidwo.js","492611017763533df2ad01defecc7fb1"],["/短视频/error.png","c0a42e5fa294aae62a201f0485a15a3e"],["/短视频/index.html","e5dfb0e4dd7ec20632070248a61c74da"],["/短视频/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/短视频/loading.png","5d9953167459e98abce58311c8031d98"],["/简单导航/404.html","45fbbcb83dcd5948f6c724a5143c7093"],["/简单导航/README.html","1e1e992aa8d0cd5a4b72be4bb455b0e5"],["/简单导航/index.html","47962a71a1a1e8254ddae0a8de45469d"],["/简单导航/noonetodie/images/gdyx.png","a05471cce0082b41fbae133e67c1b6e2"],["/简单导航/noonetodie/images/wu.png","29de547658d091403d3242ef4266dc73"],["/简单导航/noonetodie/images/xiaoren.png","232b9342b8c5c61b56e72bab03076ffe"],["/简单导航/noonetodie/images/ygdbns.jpg","b6699f201e2ab40e54b64745cd2ea80c"],["/简单导航/noonetodie/index.html","07fa5db2fdea75e9fe03dc10f35e1e82"],["/简单导航/noonetodie/js/main.js","bd66da33e99276a1d187abdfef69bfe3"],["/简单导航/noonetodie/js/require.js","2a31ed34ccf92aa78c5c7ff5d4c39a26"],["/简单导航/win12/README.html","babd1d8604ddca4325c4edff1a10ddd1"],["/简单导航/win12/apps/icons/about/info.svg","a837ec9aaf652461cad073742fb8d89b"],["/简单导航/win12/apps/icons/about/update.svg","0c8c8ae96f167f403e14d7d3c9aa6b50"],["/简单导航/win12/apps/icons/explorer/disk.png","89df4f1a995fe5cabfa93a7ca15ab2d8"],["/简单导航/win12/apps/icons/explorer/diskwin.png","8f95b402294b0183543920364af3270b"],["/简单导航/win12/apps/icons/explorer/od.png","93fc2191ab284ce29a08e41a2250e95e"],["/简单导航/win12/apps/icons/explorer/qa.png","0e455f04220cf708a4d25df1e6dd9763"],["/简单导航/win12/apps/icons/explorer/rb.png","3ffbde87932c94cb55dc5d7e6cce49d6"],["/简单导航/win12/apps/icons/explorer/thispc.png","605323c51660aff3db4f27d0131d4fb1"],["/简单导航/win12/apps/icons/explorer/tool-copy.png","b78f25678bc1ba7fc5d2d6a4fb4a1933"],["/简单导航/win12/apps/icons/explorer/tool-cut.png","606378803bbafce26e9488030e82b4e6"],["/简单导航/win12/apps/icons/explorer/tool-new.png","403feb6235f6551cfd20dc970886a6be"],["/简单导航/win12/apps/icons/explorer/tool-paste.png","d5b06481b2887acd6ad5e3f399858e92"],["/简单导航/win12/apps/icons/explorer/tool-rename.png","56f0a1bb60c7bc13873ed4efca6ce8d6"],["/简单导航/win12/apps/icons/explorer/tool-sort.png","57b8f61c524fe9e894956abc0642e589"],["/简单导航/win12/apps/icons/explorer/tool-view.png","7844ce1cd03ed70b49ce47971440739e"],["/简单导航/win12/apps/icons/setting/apps.png","87bde3db35fcc7deae476223243f8ea8"],["/简单导航/win12/apps/icons/setting/blueteeth.png","1f5d3d76dd5cc368f4389f7d8ad28803"],["/简单导航/win12/apps/icons/setting/game.png","3b876313e35ed7cf27cdac26542b10cf"],["/简单导航/win12/apps/icons/setting/help.png","7f3ff22100323605dc256b8fd98829d3"],["/简单导航/win12/apps/icons/setting/icons.woff2","2ec186e1afec55ea3f2752eaf6dea238"],["/简单导航/win12/apps/icons/setting/network.png","adc513bff915108429498a7877268c29"],["/简单导航/win12/apps/icons/setting/personal.png","5bf45299de5e59cd47d4cb7450b0841d"],["/简单导航/win12/apps/icons/setting/safe.png","7badcf2f0c00f7a326a54d668fd1d435"],["/简单导航/win12/apps/icons/setting/system.png","fcf935c901ecd434f2fc1d5b62b636fa"],["/简单导航/win12/apps/icons/setting/time.png","72885b049d05e00aac0ef938606c52c4"],["/简单导航/win12/apps/icons/setting/update.png","968bc43be6076815e94589b122f39c53"],["/简单导航/win12/apps/icons/setting/user.png","43fb0b7556928ab822e482de64248687"],["/简单导航/win12/apps/style/about.css","c75d7cb412ff8a4ba5242a5f0a7f1fdc"],["/简单导航/win12/apps/style/calc.css","09234cb9b14fdf181b7dbddba3b41fee"],["/简单导航/win12/apps/style/explorer.css","a8346faca5487405c62575c99c61b203"],["/简单导航/win12/apps/style/setting.css","0dce996d85c5ac6e700f9b774ba575cf"],["/简单导航/win12/base.css","9e63250bbbad4e23ec2c80de035e42bf"],["/简单导航/win12/bg-dark.svg","4c8fed16d52c6b84b71d7b5c0f5acbc7"],["/简单导航/win12/bg.svg","9ed19a94566ac6946e4ab8c02e1b2c2f"],["/简单导航/win12/bootstrap-icons.css","8af014a7585ec6b944e3dc5cfd77b89a"],["/简单导航/win12/desktop.css","2eb10217a3e8a5ace18ca753e218ad74"],["/简单导航/win12/desktop.html","98d0b194afbda4a30acc9d8f3759ff78"],["/简单导航/win12/desktop.js","19eef01c303d7bd548f31384f381f305"],["/简单导航/win12/fonts/bootstrap-icons.woff","be6df3f0c9855796ae0c099ee4ca43ce"],["/简单导航/win12/fonts/bootstrap-icons.woff2","31e1300d419245fd27614630601dc74d"],["/简单导航/win12/icon/about.png","02b078c4249f812ff0fba8f363c3374d"],["/简单导航/win12/icon/calc.png","f4d98a38e77f8eec4acf121d244ea2ba"],["/简单导航/win12/icon/camera.png","9e977d0605e9452a05db674bbddd4e4c"],["/简单导航/win12/icon/defender.png","86584d66cd939b45a063b1e6a4bbb564"],["/简单导航/win12/icon/explorer.png","c45749adb3de4dc9e1bda0a9fc1412e1"],["/简单导航/win12/icon/feedback.png","d74d3809ba1311cbad94ec1e7737ccd0"],["/简单导航/win12/icon/files/excel.png","9737aca13242b71cf76bd4121c965ca1"],["/简单导航/win12/icon/files/img.png","d1c6411703b689d31a365302a7228b10"],["/简单导航/win12/icon/files/ppt.png","76a0b864def30d5a985c3e99ba7d1c7b"],["/简单导航/win12/icon/files/word.png","3612aac2f6e8c58ac57c51584f49a4b2"],["/简单导航/win12/icon/folder/docs.png","dfa39b3a8d40b774873a8275fb260a86"],["/简单导航/win12/icon/folder/music.png","90089cea05d1f0240324e52871e35106"],["/简单导航/win12/icon/folder/pics.png","2c9c768e2c91cca37063eee8f960fc37"],["/简单导航/win12/icon/notepad.png","2260a01f65ee7798f382ed5afb157821"],["/简单导航/win12/icon/setting.png","e050ccc7621dab2bc49f226a91b093c5"],["/简单导航/win12/icon/store.png","23c0e553951ba31b1f10644f09dbc594"],["/简单导航/win12/icon/taskmanager.png","1344f0c1a1e9ad3203c5e224e347cc0a"],["/简单导航/win12/icon/teams.png","2b7969712645822d03c13cd7c7dc9ca8"],["/简单导航/win12/icon/terminal.png","1a3138fa728bf4172e24024b70a221f5"],["/简单导航/win12/icon/user.svg","64e91eb73625fb7b3d99295bcc42c588"],["/简单导航/win12/jq.min.js","7c14a783dfeb3d238ccd3edd840d82ee"],["/简单导航/win12/reload.html","c7c083cfb015cd1ac48f416aaa993fa4"],["/简单导航/win12/shutdown.html","95ff4a3132042c5571ca934117eb00b8"],["/简单导航/win12/start.html","cfba5c1cc197a66daad0df217cb7d31f"]];
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
