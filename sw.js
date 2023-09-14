/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/07/17/video/index.html","f801204542560dd849a6f3e1a7ed3f6c"],["/2021/10/31/README_zh/index.html","f942ffe6fa1c5bfaf3813d841eb7b028"],["/2021/10/31/bug_report/index.html","23783bf8a929c9b634f61c001a65901a"],["/2021/11/07/lua代码-多线程/index.html","2264b7f8d161422afa0e4a5f0665a186"],["/2021/12/08/闲聊杂谈/index.html","4dd3ebad868953f0038526690d7f4238"],["/2021/12/18/壁纸 (1)/index.html","2e86e22534413ad4d3e7fdc37cdd8118"],["/2022/01/02/我的开发/我的开发-2022-01-02 11_38_11/index.html","ba8d5a54b7903f517d9cb26225de37d9"],["/2022/01/09/UTermux/index.html","0dde007d39e78aa918c2f516f2007c66"],["/2022/07/30/美食推荐/Android动态权限申请从未如此简单/index.html","0e4d4ea8911330f3a3546859b8c7cd5e"],["/2022/07/30/美食推荐/一个酸奶盒玩转酸奶蛋糕 /index.html","ff86da4da2e64ee8f1262daba8a885c4"],["/2022/07/30/美食推荐/做一道上口的糖醋排骨有多难 /index.html","69a060bc19e0ed9cef9174635af4c6c5"],["/2022/07/30/美食推荐/酸豆角简单做法 /index.html","71d6181218199d1c428577975997c6e7"],["/2023/07/14/皮皮虾4.5.0(去水印下载视频)/index.html","a6db7765c9005f93c9194de3fbd6b0cf"],["/2023/07/14/网盘推荐/index.html","538d064a97eba3a0735cf69ccd2c5804"],["/2023/07/15/社交软件/Telegram(9.6.7)/index.html","fba6c09b217935269fe350dfed80bcbc"],["/2023/07/16/分享抖音快手视频去水印怎么去水印 抖音快手一键去水印简单教程 /index.html","b2202060207c3052c01cd783eba68333"],["/2023/07/16/快鸟下载V1.1/index.html","38b300cf84cc5e14b847fa1d4f5f4542"],["/2023/07/16/画质侠2.1.0/index.html","014b9b4c0df448011f80a17ef539fbbb"],["/2023/07/18/登山赛车_1.58.0破解版，无限金币/index.html","9599939efb3c409968e5455776cf09e5"],["/2023/07/18/黑白隐藏图_1.0/index.html","7af4aa0add4453acf7b4f19c4a276730"],["/2023/07/19/海贼王1088话汉化版/index.html","c75a142fc0e6f0b38d8288b8a72ac655"],["/2023/07/20/TikTok国际版APP v30.4.4抖音TikTok解锁版/index.html","73b8e41613db28c702ea8fcc381bec2b"],["/2023/07/20/剪映APP(视频剪辑软件)v10.8.1.0 破解会员版/index.html","ef01eb549cbe0832f3f0a10642be9297"],["/2023/07/20/模板制作教程/index.html","85b3c11f90e34ee07dff92e5502e971d"],["/2023/07/23/京小辅_2.1(京东任务自动化)/index.html","45090eb2bcdf49984d00b3051bc86ab4"],["/2023/07/23/作者自用软件库/index.html","f273ad794cbabc5ed0fc54ce00c95088"],["/2023/07/23/大佬的书签，近五千个专业网站/index.html","b70cff8c1d6127bb96fc8cb5b06808e5"],["/2023/07/23/纪录片爱好者福音。惊世巨作《纪录片》大合集。/index.html","3b35373118129dec930cf9f0f07c1926"],["/2023/07/23/网易云音乐推荐/index.html","5f117d7453d3b9d1949738b28058551b"],["/2023/07/23/超级福利（电影爱好者狂喜）/index.html","6673805f308d010f517327d85933f3ce"],["/2023/07/23/龙珠GT全集 国粤日语中字1080P/index.html","c612bcb25e472f03fd9744e5bbb953a3"],["/2023/07/30/Clash for Android_2.4.4.premium.apk/index.html","a53779011cdda8c38b6581ef9f0ddf59"],["/2023/07/30/Instander_263.2.0.19.104.apk/index.html","6cedfb660b233dcd0287ea3c1e965533"],["/2023/07/30/MoY画质助手_2023.1.5.apk/index.html","1bb87f4cd05a6822da8fdb1091f55906"],["/2023/07/30/万能下载Pro_1.0.6.apk/index.html","eabb3f194b04ea8fbef967e3e0ea7a96"],["/2023/07/30/我的开发/弹窗广告测试/index.html","4055babef6c4a7d6fff5793b5ad5d027"],["/2023/07/30/测试图片/index.html","1a62f0ec42957db5851da4b1c1a9b598"],["/2023/08/05/我的开发/动漫网站推荐/index.html","58a1e9799674280a8d5d846e0fb0c468"],["/2023/08/05/我的开发/国外网站推荐/index.html","2e306b5a64c8070bf0348040b1fb62f9"],["/2023/08/05/我的开发/小工具网站推荐/index.html","64f9bef3f9df213f7c1eaf8d9f71358d"],["/2023/08/05/我的开发/小说网站推荐/index.html","20481af297b912fc8dcd353136b34c65"],["/2023/08/05/我的开发/应用市场网站推荐/index.html","cd91f7a2678b5501c095adce02c12a89"],["/2023/08/05/我的开发/影视网站推荐/index.html","3ae6d3bd48de5b258487204429534e49"],["/2023/08/05/我的开发/漫画网站推荐/index.html","7521b82e34a117951d8f14354adfc1d8"],["/2023/08/05/我的开发/直播网站推荐/index.html","0c69534755d5738e8ad7455dc6cb8a57"],["/2023/08/05/我的开发/美图网站推荐/index.html","1218d6fed0a13739844001b73ac811a6"],["/2023/08/05/我的开发/表情包网站推荐/index.html","c5695090bf1d81975bf99bb41f135371"],["/2023/08/05/我的开发/资源网站推荐/index.html","bb1d709528b2171ee1cd5417a9c4190f"],["/2023/08/05/我的开发/软件库推荐/index.html","155df5e71af1ac45273a745350d17f3f"],["/2023/08/06/99手游加速器 v1.3.4 解锁版/index.html","4e4c9b2eb1ed1524441c0b8074175955"],["/2023/08/06/Niagara Launcher最新1.9.9解锁版/index.html","f14361ce106cdab6a0a2c22fc94075ff"],["/2023/08/09/Ookla Speedtest v5.0.8 解锁版/index.html","a9e9cd423c8d582ccb21f59248c65df5"],["/2023/08/09/b站解锁版/index.html","9b2a9817bf1507f426dc6a057581ee28"],["/2023/08/09/剧圈6.0.0最新版去广告/index.html","25c6b518ccc191b8ccc5f800bc55f764"],["/2023/08/09/海豚小说阅读器/index.html","ce1ffee68d663c497e73f30dade10767"],["/2023/08/09/视频搬运去重/index.html","03cbad12a0037a8fa5808bdc9908d393"],["/2023/08/11/美食推荐/五香花生米简易教程/index.html","becb34bc84a93ed560c022f59ac2f3a2"],["/2023/08/12/美食推荐/你好，大连（三）：大连老菜/index.html","de2bb5055255f0a2f08a528caf9edf0f"],["/2023/08/12/美食推荐/泡豆腐炖咸菜家常做法 /index.html","96dc55d2c1d1e3dd59fbe6b6a9a1515d"],["/2023/08/12/美食推荐/蒜苗腊肉/index.html","f278cfc641198fdf38b111b1cbed9ce6"],["/2023/08/12/美食推荐/西红柿炒茄子，酸甜可口好味道/index.html","52a504ccc6a09a528563396da1550041"],["/2023/08/12/美食推荐/这才是宽粉最好吃的做法，味道麻辣爽口好吃，做法超简单/index.html","16779503d3b497006e5803449c9b5c23"],["/2023/08/15/FFF風之動漫/index.html","03057220d3e3c10bcb968bce87a74b1f"],["/2023/08/15/海贼王【更新至1070集】/index.html","e7969efea0ea7b85de7241f3562de62e"],["/2023/08/16/#爱追剧# #资源分享# #好电影#/index.html","25a3b3fc265ec4c2380cacbd9ad00a84"],["/2023/08/16/SNH48成员写真集的网站/index.html","1c27a5630c60fb74621c0c3bf2717c10"],["/2023/08/16/【16日更新iOS】皮皮虾Pro-无广告/index.html","bc5db4ba7ab7a3ab29acc611ce4b0929"],["/2023/08/16/【分享】GPT4all本地就能用的AI - 有多个模型/index.html","5c10ddaed8ae0f6f58c2cb38fe081789"],["/2023/08/16/【分享】NodeVideo 6.4.1 解锁高级版/index.html","5d85bd2e964489d2077d83bc29c9e2af"],["/2023/08/16/【分享】万能下载Pro 1.0.6 短视频去水印/index.html","d8a88de9b928e37dd2ccf65fa6f99a52"],["/2023/08/16/【分享】清浊，一款专业清理手机垃圾的app/index.html","f55e0fa985cf45dbb5b5f7d43cc18792"],["/2023/08/16/【分享】看电视神器✔支持港澳台、国外电视台❤️可用电视/index.html","13916a601ac45a87dee5cda81f87787b"],["/2023/08/16/【分享】自动点击器 2.0.3 解锁会员/index.html","ae29c411830168c879919b1ecd02107b"],["/2023/08/16/【分享】配音全能宝 v1.1.0 绿化版/index.html","2ed7d2bebfa69a15cb5e4705d1b1545d"],["/2023/08/16/【分享】酷我音乐_最新版 完美解锁！可换图标！畅享所有会员歌曲！/index.html","4b71a0396138fa9d7f24037073cd33ae"],["/2023/08/16/【分享】重磅！笔趣阁复活版本！全网书籍任性看！可听书！极致纯净！/index.html","a2b2d8ac0ae8920a6269088d3c05639e"],["/2023/08/16/【原创】万能去水印 全网短视频去水印工具/index.html","91179cf2c96e20fbb71322860d409fee"],["/2023/08/16/【原创修改】醒图8.1.0解锁会员/index.html","86e03121e551a9914d01daf9f619e891"],["/2023/08/16/【软件分享】优酷小書版V8.6.8，极致去广精简页面！/index.html","b8c34f5cc146a92ca00c8fcdc77fddbd"],["/2023/08/16/【软件推】某博大赛助手1.0v 一款养眼APP/index.html","6940bce4e8a4b4b837d4a94b770ed333"],["/2023/08/16/【集合】本周实用软件，期待下一次更新/index.html","b0b46d8e43bf814d7eed72aac5f1f3a5"],["/2023/08/16/一份很全的天涯神贴合集汇总/index.html","5f99d5360ca361366d04d7e733d96428"],["/2023/08/16/介绍一些设计类的网站/index.html","28eb2d368c7041f69824a3efd82b6947"],["/2023/08/16/倒数日 1.18.1 高级版高级版本/index.html","35dbb4966692b7e661f9fea621559ea0"],["/2023/08/16/笔趣阁最新纯净版/index.html","abb92ed1a1a66a70b003c8ade9e15a47"],["/2023/08/16/网站分享# #爱编程# /index.html","9461f5df1ca6ca5bd885914d35c10d27"],["/2023/08/16/网站分享2/index.html","7a3693be8ea745dc190c2eaf5b891672"],["/2023/08/16/网站分享3/index.html","0ed490ded66f77b500b9bd792b7d16b6"],["/2023/08/16/醒图 8.1.0高级版耗子修改版/index.html","ea80570ee8b071d020fa6cfe05556a65"],["/2023/08/19/ 资源帮 解锁版 /index.html","5c1d0e88255cecf141744d628c8d2e6c"],["/2023/08/19/#Spotify# 最新解锁版v8.8.56.538/index.html","356f504ddaccd0f198231db6cc52a09b"],["/2023/08/19/Photo Editor 照片编辑器 8.8.1 ，解锁全部功能，移除广告。/index.html","78589d8fe78bd6b06a21403b52d26b8d"],["/2023/08/19/【分享】Qute终端控制台 v3.106 高级版/index.html","ce9093c256ae76b54134f9473eb811ff"],["/2023/08/19/【分享】极致工具箱1.6.6/index.html","01b7d0c17334d201c507f3f433d30379"],["/2023/08/19/【周五动漫更新】/index.html","b96f4e2adbf23d616c6c8be4020a5258"],["/2023/08/19/小X分身安卓9-13可用vip解锁版本/index.html","31b543cc3d1feb08a07ab6f1af963e59"],["/2023/08/19/网站分享推荐/index.html","5e9aaeedccad7ec53d927d5ca013ac0f"],["/2023/08/19/美女分享推荐im____neko/index.html","b6824daa3071b211dda2b4d5a97d01b2"],["/2023/08/20/美女分享推荐leeesovelys2/index.html","5b8dfe9e6d4072c1efff19310d3d497f"],["/2023/08/25/壁纸推荐/index.html","444e74ebf6c24b4ee8cfacbaaf582a1f"],["/2023/08/26/美女壁纸分享33/index.html","38a489eaf4d7bf3753d013afc2b0d7f2"],["/2023/08/29/【分享】海豚阅读🔥海量小说免费看，支持飞卢起点/index.html","60620757013662d44e7b5888134cde50"],["/2023/08/29/不一样的带壳截图APPHiShoot2iMaterial/index.html","084f12e1c566982df5125552acb5a640"],["/2023/08/29/美女分享推荐3/index.html","c165ba744753542e58cab322cde5e3dd"],["/2023/08/31/2000+小说txt直接拿走，男频女频都有 飞卢刺猬猫菠萝包起点书客晋江/index.html","251c8c816e0f9b175f0f70fd3a676954"],["/2580.html","3f8cdc9ebc1004aa39fa006a8214a40c"],["/25802580.html","bb4880e554012331382f8159b9a19a6f"],["/258025802580.html","07666ebd42cb3fa95a470dca51a9e996"],["/9999/09/09/文章/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/9999/09/09/文章/Adsterra.html","4ec78614dc4c91839cc065a9f223743f"],["/9999/09/09/文章/Metrial822.png","4deb8d4f959f9d19c81bc44a10fc3cb1"],["/9999/09/09/文章/PlugRush.html","dd4039bbf02d2fba1408cbc2b534dcc5"],["/9999/09/09/文章/Popcash.html","1eb441204a135f6a916f0ee49eebe255"],["/9999/09/09/文章/PropellerAds.html","0a9d272318df792bed59e89369f12b33"],["/9999/09/09/文章/RevenueHits.html","68661af826e3e5312ed722d70aeaad69"],["/9999/09/09/文章/Slimspots.html","8a4e1b3220a9b7bab0b5bbf6aded0064"],["/9999/09/09/文章/TrafficShop.html","8e12e0520e2327d25b4d95eaa99af538"],["/9999/09/09/文章/Yllix.html","c501fcd268f92f9176cf867a45086467"],["/9999/09/09/文章/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/9999/09/09/文章/index.html","809bac597d339aac042ab601f4d9eb5a"],["/9999/09/09/测试 (1)/index.html","068ed603d31deb775bd9d826c0fd19f6"],["/OUnion.html","e3a661f2134ace796602ab0ab810f7bc"],["/OUnion2.html","a477c0c4f311406994ca5a0062a79083"],["/archives/2020/07/index.html","964c6fa6ae29c62ced1ebe155bdba1a2"],["/archives/2020/index.html","c1b1e1c89dcaa5c4be899f29910832db"],["/archives/2021/10/index.html","738f43e6d44df758633a25933351a7c5"],["/archives/2021/11/index.html","2aadd0b0efed050510f164b4d037dfaf"],["/archives/2021/12/index.html","3b3f7bb7599fb1b7163d9b10f0b17007"],["/archives/2021/index.html","c58060a699ea4186a861d38f948a3d93"],["/archives/2022/01/index.html","fe9ca75084d3e45924c410084b3078ca"],["/archives/2022/07/index.html","1a4f0af9764ed80e58dd7054547e3a2b"],["/archives/2022/index.html","e4913dde28f9cf3cacb45d3a8b238c8f"],["/archives/2023/07/index.html","ec0e48c5c700665837995b8581d2aa47"],["/archives/2023/08/index.html","d173d71c0a037fa72cb1dda7dd08c091"],["/archives/2023/08/page/2/index.html","d4fcab39687ac3b40aeb1a8e005c2408"],["/archives/2023/08/page/3/index.html","3c43151877da131093de5276ad1b1ceb"],["/archives/2023/index.html","c0129fa53e0274856bf70376829b4c03"],["/archives/2023/page/2/index.html","16ce5290f2ce5a696868b5dabcffd9ca"],["/archives/2023/page/3/index.html","cc7b9ddd472d45d050f34d3fa9e1f0c9"],["/archives/2023/page/4/index.html","d16eba8beaec775e69fac0bfa6fd329b"],["/archives/9999/09/index.html","1627368ba29da394c737128a1bd95c9a"],["/archives/9999/index.html","4cf4f1bbaaf59cd1252adbcfdbc2a4c4"],["/archives/index.html","6401dc1c96f319368232370c2a184d4b"],["/archives/page/2/index.html","417e03e5f0c4e2c3176807fafcaeaa0f"],["/archives/page/3/index.html","e1e648db91813ac849089049d6ebc24b"],["/archives/page/4/index.html","7f08c4091d113c3efdfda3978b0f873d"],["/archives/page/5/index.html","ef594b4c7a55105b1b5700333d6a3492"],["/artitalk/index.html","f4924821f766e468053c0b4fbfb7604a"],["/categories/categories/index.html","41b57ecf434a4bf9de4f63ea1c347123"],["/categories/html/index.html","82dbd104a4b36eff6c5a3ced68c0ea51"],["/categories/index.html","fe91eeed0a130cd5ee053bb36d2618dd"],["/categories/lua代码/index.html","b299a2c315de91844c144737cfc9a161"],["/categories/作者自用软件库推荐/index.html","e7e4b692e85e2404ce257b88f858f320"],["/categories/动漫网站推荐/index.html","e9e80f7f04572b3d58cbdaadcbcae7ef"],["/categories/国外网站推荐/index.html","39a0594078df60199faa634f44b9fa3e"],["/categories/小工具网站推荐/index.html","660d86eb325243fc008fed24e98b019d"],["/categories/小说网站推荐/index.html","82c7a48df3ff4bd404e6327f7cbef729"],["/categories/应用市场网站推荐/index.html","22fe98aa03e3fbc4075627ed56de6e0c"],["/categories/影视网站推荐/index.html","427ea04c1805152645f7cff35228e31a"],["/categories/我的开发/index.html","87a3a0e0fd8387f8b7ea831490c4254b"],["/categories/文章推荐/index.html","4b6b404960999b2426ee4a3f344545cf"],["/categories/文章转载/index.html","9b81375be2dbeb51d8fb718a6e4d62c0"],["/categories/海贼王/index.html","0ef01652b0b1ed4284b78aa82c926f45"],["/categories/漫画网站推荐/index.html","77a1c95d0a7c26cf34d1bdd590440adf"],["/categories/直播网站推荐/index.html","110761621d3d7ba48f93b66936f64a2b"],["/categories/网易云音乐推荐/index.html","991ded2afc002657b6feee77f280e388"],["/categories/网盘推荐/index.html","ebf3783bcc5c9a53ef44041ca9b6ccf3"],["/categories/网站分享推荐/index.html","fd12af2dd05c7d93b805fb0ea97da5b2"],["/categories/美图网站推荐/index.html","046a928b18e43d9e3e3bfe41e132f83e"],["/categories/美女分享推荐/index.html","9749dc6aab86df262880fd943a3ad616"],["/categories/美食推荐/index.html","2a1659ce80d5ede4c0a095da6b897fdc"],["/categories/表情包网站推荐/index.html","b8e8c0e1334da25755790a195d98b89e"],["/categories/资源网站推荐/index.html","6e5e960f3be16cfb7f2a9037add6f5d9"],["/categories/软件库推荐/index.html","09321b0c8241aefbde64a783c22affc8"],["/categories/软件推荐/index.html","1340a22628b403d67e88bfb6fda77d05"],["/categories/软件推荐/page/2/index.html","11fa7ac63f2e181b664292e13325bfaa"],["/categories/闲聊杂谈/index.html","bdfabcc8d33853281dc23ad2e5f08b00"],["/categories/阿里云盘推荐/index.html","42cb7a9dc9b9c57a55109921f3d9491b"],["/css/2style.css","614d91358f6b26c603779d5bc822bc7e"],["/css/custom.css","15d6e5b6ce6cd6d4a2b0effe06244960"],["/css/custom/fixed_comment.css","2e141a3fe37f0744338976e58b94189d"],["/css/custom/fixed_comment.js","f9edc32e935c98b69ad616c7a39b4418"],["/css/eurkon/eurkon.css","3459931d543ce237af6e62e6c6cbaa46"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","ebbdb2eb5ea389951ec8699a520f23af"],["/css/mobie.css","524958f19b70239106d6aaa5decb86e2"],["/css/player.css","bf081626a42aae043604021ed40f6ef4"],["/css/reset.css","7f67c3ba6c820d0a0464ccb609f3c830"],["/css/style.css","219b80c89b65ad80bc928a568667a98b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/viewer.min.css","ec961a06f9292db17c03e324362159da"],["/equipment/index.html","8c2fc1976dd199dd107a7fd82b20ba38"],["/googleb0c521173282337f.html","a1202143e8bd8d5fc83b37ca723da70d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/img/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","aae5e99e5ef8f8616795a97af18a4f66"],["/js/card_weibo.js","5fa4471b13d0bd4315be295663388e16"],["/js/eurkon/color-thief.min.js","96805f1e38ea0b713936ec18e7b450a0"],["/js/eurkon/eurkon.js","26508939068f37c6e7f24897be41d48e"],["/js/eurkon/refresh.js","6de41747d67d724d4b7d619b87869443"],["/js/eurkon/rgbaster.min.js","90546dec3661d234ff3ee6f6bcad527c"],["/js/main.js","d66f147747b5511577de5e46affcb620"],["/js/search/algolia.js","cb2b0f7e1fcea9d7485a395f69c94468"],["/js/search/local-search.js","483487f7261461207536fd9bde606418"],["/js/tw_cn.js","dec7bff10294055b65e3dd37af6fb3c1"],["/js/utils.js","2ff83587b5454af8cbd934f5caf6b94c"],["/lazysizes.min.js","45bacd312d5098b4b59f563d8756c15d"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","e476cd8c65d7ca51adc2d55d90fa175d"],["/luago.html","cf2270c74879771e93b2f1bf6369c99d"],["/luago.js","3d9c4c576287f2d0a92bc064492e8996"],["/page/2/index.html","8ffa7e0ed191a2b5691304127d4dc67e"],["/page/3/index.html","3ae6b0d766b37f05eac5a5031d768cda"],["/page/4/index.html","d3c6e83bfedc0a57d9b797f4790aa6a2"],["/page/5/index.html","6ff3de0889d68bc71ace8c2d0aeaf07e"],["/page/video/index.html","df260eab0ce258b253faab785daf859e"],["/pinterest-bda12.html","d6f86ee6493eeb0791fed46cc662afd2"],["/pluginsSrc/@docsearch/css/dist/style.css","7b9b2d58a76a948574c558639f28d1fb"],["/pluginsSrc/@docsearch/js/dist/umd/index.js","4016eb74e9eea32f3bd7ef5724c15ba5"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.css","315cfed6299c90ee619e36986c9064ff"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.umd.js","09c88d7767071e4bd0bc48dad4b200e4"],["/pluginsSrc/@fortawesome/fontawesome-free/css/all.min.css","5222e06b77a1692fa2520a219840e6be"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf","bb8cd014d7a55672934233c354e1c4a3"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2","005c9aa92b564b73b7582cc4f1fa49cb"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf","675809e48e35c47d51c7d6fcc687ee28"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2","747442fa76f1d9a31f9a54a2e8a4b448"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf","0248ab19e74fc3731de14d647db4687a"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2","d5e647388e2415268b700d3df2e30a0d"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.ttf","58f1253e5639d508a6fe310c97327f82"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.woff2","f20773a753bf1fbe9ccec04f90a470ea"],["/pluginsSrc/@waline/client/dist/waline.css","f9a6e928169c9000c7fdc6e2d4fe39ef"],["/pluginsSrc/@waline/client/dist/waline.js","5bfdeab452f800ec6584ff5f22ce7a49"],["/pluginsSrc/abcjs/dist/abcjs-basic-min.js","726d0a3fbaf41b8039834394e517cd50"],["/pluginsSrc/algoliasearch/dist/algoliasearch-lite.umd.js","1e3dc6f644974934ffcb81baf749d76a"],["/pluginsSrc/aplayer/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/pluginsSrc/aplayer/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/pluginsSrc/artalk/dist/Artalk.css","7b742af32120e35b0abbc1816a4bd24a"],["/pluginsSrc/artalk/dist/Artalk.js","e470814cc6cb2019cc2b2165e0966904"],["/pluginsSrc/blueimp-md5/js/md5.min.js","2f577924085ebbe12e29f3ff706397d0"],["/pluginsSrc/butterfly-extsrc/dist/activate-power-mode.min.js","eb1c75760fdc1249dfb74db05ba39a5c"],["/pluginsSrc/butterfly-extsrc/dist/canvas-fluttering-ribbon.min.js","bee7265e6d121d3e2bbe25592163fa22"],["/pluginsSrc/butterfly-extsrc/dist/canvas-nest.min.js","b4b3398371256eb9c74a0001eb5fa25d"],["/pluginsSrc/butterfly-extsrc/dist/canvas-ribbon.min.js","15fcd2b43b47baa5418ae4004cd2c802"],["/pluginsSrc/butterfly-extsrc/dist/click-heart.min.js","8626378d634c886884e3f94ff060182e"],["/pluginsSrc/butterfly-extsrc/dist/click-show-text.min.js","56edbcd0697d5c8056d0d40d9bbeb26a"],["/pluginsSrc/butterfly-extsrc/dist/fireworks.min.js","b0f0a5c077706616aef9224fa0b4df76"],["/pluginsSrc/butterfly-extsrc/metingjs/dist/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/css/share.min.css","4b6e6c4b12b9206824231920ed3326c8"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/pluginsSrc/disqusjs/dist/browser/disqusjs.es2015.umd.min.js","1090676c68ac556956d14d40353c2da5"],["/pluginsSrc/disqusjs/dist/browser/styles/disqusjs.css","8edf59e04dfb9bb9b73d185e651262e0"],["/pluginsSrc/flickr-justified-gallery/dist/fjGallery.css","d163683c883a1f80bc86404561f8004d"],["/pluginsSrc/flickr-justified-gallery/dist/fjGallery.min.js","9d1c40a9e1b26d1fc2c2a1fbd959f01e"],["/pluginsSrc/gitalk/dist/gitalk.css","8476031a633732dff9875feae0890070"],["/pluginsSrc/gitalk/dist/gitalk.min.js","8a817782fe4a94b4d2499bcfce04f8c3"],["/pluginsSrc/instant.page/instantpage.js","ae11493d70a8ce9fa776cc7aec1be764"],["/pluginsSrc/instantsearch.js/dist/instantsearch.production.min.js","4cf48badf0898211dd77d0c0e483efa2"],["/pluginsSrc/katex/dist/contrib/copy-tex.min.js","c3a3efd7d609e2e905aa386fc0f7d18e"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.ttf","56573229753fad48910bda2ea1a6dd54"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff","10824af77e9961cfd548c8a458f10851"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff2","66c678209ce93b6e2b583f02ce41529e"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf","497bf407c4c609c6cf1f1ad38f437f7f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff","de2ba279933d60f7819ff61f71c17bed"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2","a9e9b0953b078cd40f5e19ef4face6fc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf","e6fb499fc8f9925eea3138cccba17fff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff","a25140fbe6692bffe71a2ab861572eb3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2","08d95d99bf4a2b2dc7a876653857f154"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf","b9d7c4497cab3702487214651ab03744"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff","40934fc076960bb989d590db044fef62"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2","796f3797cdf36fcaea18c3070a608378"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf","97a699d83318e9334a0deaea6ae5eda2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff","e435cda5784e21b26ab2d03fbcb56a99"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2","f9e6a99f4a543b7d6cad1efb6cf1e4b1"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.ttf","8e431f7ece346b6282dae3d9d0e7a970"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff","4cdba6465ab9fac5d3833c6cdba7a8c3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff2","a9382e25bcf75d856718fcef54d7acdb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf","52fb39b0434c463d5df32419608ab08a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff","5f875f986a9bce1264e8c42417b56f74"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2","d873734390c716d6e18ff3f71ac6eb8b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.ttf","39349e0a2b366f38e2672b45aded2030"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff","8ffd28f6390231548ead99d7835887fa"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff2","652970624cde999882102fa2b6a8871f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.ttf","818582dae57e6fac46202cfd844afabb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff","f1cdb692ee31c10b37262caffced5271"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff2","f8a7f19f45060f7a177314855b8c7aa3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf","6589c4f1f587f73f0ad0af8ae35ccb53"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff","48155e43d9a284b54753e50e4ba586dc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2","1320454d951ec809a7dbccb4f23fccf0"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.ttf","fe5ed5875d95b18c98546cb4f47304ff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff","ed7aea12d765f9e2d0f9bc7fa2be626c"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff2","d8b7a801bd87b324efcbae7394119c24"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf","f2ac73121357210d91e5c3eaa42f72ea"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff","0e897d27f063facef504667290e408bd"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2","ad546b4719bcf690a3604944b90b7e42"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf","f60b4a34842bb524b562df092917a542"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff","ef725de572b71381dccf53918e300744"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2","e934cbc86e2d59ceaf04102c43dc0b50"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf","3243452ee6817acd761c9757aef93c29"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff","5f8637ee731482c44a37789723f5e499"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2","1ac3ed6ebe34e473519ca1da86f7a384"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.ttf","a189c37d73ffce63464635dc12cbbc96"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff","a82fa2a7e18b8c7a1a9f6069844ebfb9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff2","1b3161eb8cc67462d6e8c2fb96c68507"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.ttf","0d8d9204004bdf126342605f7bbdffe6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff","4788ba5b6247e336f734b742fe9900d5"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff2","82ef26dc680ba60d884e051c73d9a42d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.ttf","1fdda0e59ed35495ebac28badf210574"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff","b0628bfd27c979a09f702a2277979888"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff2","95a1da914c20455a07b7c9e2dcf2836d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.ttf","963af864cbb10611ba33267ba7953777"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff","4de844d4552e941f6b9c38837a8d487b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff2","9108a400f4787cffdcc3a3b813401e6a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.ttf","27a23ee69999affa55491c7dab8e53bf"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff","3045a61f722bc4b198450ce69b3e3824"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff2","61522cd3d9043622e235ab57762754f2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf","6bf4287568e1d3004b54d5d60f9f08f9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff","0e0460587676d22eae09accd6dcfebc6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2","b8b8393d2e65fcebda5fa99fa3264f41"],["/pluginsSrc/katex/dist/katex.min.css","09b67732753fe0586733e13f4c0628f1"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/tex.js","29662ef385c73c4dd9e99b17cd2d579b"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/pluginsSrc/mathjax/es5/tex-mml-chtml.js","2e00d51c98dbb338e81054f240e1deb2"],["/pluginsSrc/medium-zoom/dist/medium-zoom.min.js","8041f939fde6eb0bd1cd8740deb965c6"],["/pluginsSrc/mermaid/dist/mermaid.min.js","4caa0cd492ab46328e6678d134ccfa7b"],["/pluginsSrc/node-snackbar/dist/snackbar.min.css","4220368aced9a5ce011f2ce9bd8b1035"],["/pluginsSrc/node-snackbar/dist/snackbar.min.js","8f19a3527021a6268cd8488a5debe7f8"],["/pluginsSrc/pace-js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/pluginsSrc/pace-js/themes/blue/pace-theme-minimal.css","7bba84cb68736f6ea9ae77cd934d995a"],["/pluginsSrc/pangu/dist/browser/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/pluginsSrc/pjax/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/pluginsSrc/prismjs/plugins/autoloader/prism-autoloader.min.js","4f48958b1802a9d99581aa5ab1e3f621"],["/pluginsSrc/prismjs/plugins/line-numbers/prism-line-numbers.min.js","ffdf7bdb8ddaf0c89a4e4225e1086264"],["/pluginsSrc/prismjs/prism.js","54e45d657b6a3471bd7cc72d0873c0b1"],["/pluginsSrc/twikoo/dist/twikoo.all.min.js","120703835d0086fa856e5437c22d2f99"],["/pluginsSrc/typed.js/dist/typed.umd.js","3ba6a3f6e22122d8f5ed22c423299981"],["/pluginsSrc/valine/dist/Valine.min.js","c748c413b03bcdb2064c84bc9e06613c"],["/pluginsSrc/vanilla-lazyload/dist/lazyload.iife.min.js","e4827c5dd3c4e42d696ecf0a60919704"],["/sw-register.js","329e1a41d2aeec9931b7ff77c77cc218"],["/tags/index.html","af8525077d1f6f0919123497aeacd8c7"],["/tags/tags/index.html","c54211670bd4a61ed527eb1cadab2e7b"],["/tags/tags/page/2/index.html","8f5eaed884aefcaa72d2018bab6460ef"],["/tags/tags/page/3/index.html","f4b1fcb4a6530066b511b17d0b40474c"],["/tags/tags/page/4/index.html","c44402c148b0d09db1688a6d103283e8"],["/untitled.js","60b6022d611f9ba01a721942cc5d90eb"],["/userAgent.js","428949435f0f1dce3eb22d209e1fee61"],["/video/index.html","22d04d22c5caf5dd1937ca95840578cf"],["/x-frame-bypass.js","d0e55673f7b13b00bbe5c2182932c465"],["/万能api视频解析/README.html","9a64bf4edad1202363c2d6b8fa534c01"],["/万能api视频解析/index.html","b44d17c74a060dd0efa1c1cc1c29f427"],["/小姐姐随机播放/index.html","90269a0706320cfdb5560418c82ee5a3"],["/小姐姐随机播放/static/css/bootstrap.min.css","bbace035fd25209e34be801cdeaf7a17"],["/小姐姐随机播放/static/css/images/bj.jpg","7014c63c5ba024799b083089e2429e2c"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/小姐姐随机播放/static/js/vidwo.js","492611017763533df2ad01defecc7fb1"],["/短视频/error.png","c0a42e5fa294aae62a201f0485a15a3e"],["/短视频/index.html","e5dfb0e4dd7ec20632070248a61c74da"],["/短视频/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/短视频/loading.png","5d9953167459e98abce58311c8031d98"],["/简单导航/404.html","63c9f24b15167b37e132229d013b1578"],["/简单导航/README.html","1e1e992aa8d0cd5a4b72be4bb455b0e5"],["/简单导航/index.html","bd0247b2ca49aaf359126cf330f51dd9"],["/简单导航/noonetodie/images/gdyx.png","a05471cce0082b41fbae133e67c1b6e2"],["/简单导航/noonetodie/images/wu.png","29de547658d091403d3242ef4266dc73"],["/简单导航/noonetodie/images/xiaoren.png","232b9342b8c5c61b56e72bab03076ffe"],["/简单导航/noonetodie/images/ygdbns.jpg","b6699f201e2ab40e54b64745cd2ea80c"],["/简单导航/noonetodie/index.html","cdf70535c52a1bab4fcf78c131411969"],["/简单导航/noonetodie/js/main.js","bd66da33e99276a1d187abdfef69bfe3"],["/简单导航/noonetodie/js/require.js","2a31ed34ccf92aa78c5c7ff5d4c39a26"],["/简单导航/win12/README.html","babd1d8604ddca4325c4edff1a10ddd1"],["/简单导航/win12/apps/icons/about/info.svg","a837ec9aaf652461cad073742fb8d89b"],["/简单导航/win12/apps/icons/about/update.svg","0c8c8ae96f167f403e14d7d3c9aa6b50"],["/简单导航/win12/apps/icons/explorer/disk.png","89df4f1a995fe5cabfa93a7ca15ab2d8"],["/简单导航/win12/apps/icons/explorer/diskwin.png","8f95b402294b0183543920364af3270b"],["/简单导航/win12/apps/icons/explorer/od.png","93fc2191ab284ce29a08e41a2250e95e"],["/简单导航/win12/apps/icons/explorer/qa.png","0e455f04220cf708a4d25df1e6dd9763"],["/简单导航/win12/apps/icons/explorer/rb.png","3ffbde87932c94cb55dc5d7e6cce49d6"],["/简单导航/win12/apps/icons/explorer/thispc.png","605323c51660aff3db4f27d0131d4fb1"],["/简单导航/win12/apps/icons/explorer/tool-copy.png","b78f25678bc1ba7fc5d2d6a4fb4a1933"],["/简单导航/win12/apps/icons/explorer/tool-cut.png","606378803bbafce26e9488030e82b4e6"],["/简单导航/win12/apps/icons/explorer/tool-new.png","403feb6235f6551cfd20dc970886a6be"],["/简单导航/win12/apps/icons/explorer/tool-paste.png","d5b06481b2887acd6ad5e3f399858e92"],["/简单导航/win12/apps/icons/explorer/tool-rename.png","56f0a1bb60c7bc13873ed4efca6ce8d6"],["/简单导航/win12/apps/icons/explorer/tool-sort.png","57b8f61c524fe9e894956abc0642e589"],["/简单导航/win12/apps/icons/explorer/tool-view.png","7844ce1cd03ed70b49ce47971440739e"],["/简单导航/win12/apps/icons/setting/apps.png","87bde3db35fcc7deae476223243f8ea8"],["/简单导航/win12/apps/icons/setting/blueteeth.png","1f5d3d76dd5cc368f4389f7d8ad28803"],["/简单导航/win12/apps/icons/setting/game.png","3b876313e35ed7cf27cdac26542b10cf"],["/简单导航/win12/apps/icons/setting/help.png","7f3ff22100323605dc256b8fd98829d3"],["/简单导航/win12/apps/icons/setting/icons.woff2","2ec186e1afec55ea3f2752eaf6dea238"],["/简单导航/win12/apps/icons/setting/network.png","adc513bff915108429498a7877268c29"],["/简单导航/win12/apps/icons/setting/personal.png","5bf45299de5e59cd47d4cb7450b0841d"],["/简单导航/win12/apps/icons/setting/safe.png","7badcf2f0c00f7a326a54d668fd1d435"],["/简单导航/win12/apps/icons/setting/system.png","fcf935c901ecd434f2fc1d5b62b636fa"],["/简单导航/win12/apps/icons/setting/time.png","72885b049d05e00aac0ef938606c52c4"],["/简单导航/win12/apps/icons/setting/update.png","968bc43be6076815e94589b122f39c53"],["/简单导航/win12/apps/icons/setting/user.png","43fb0b7556928ab822e482de64248687"],["/简单导航/win12/apps/style/about.css","c75d7cb412ff8a4ba5242a5f0a7f1fdc"],["/简单导航/win12/apps/style/calc.css","09234cb9b14fdf181b7dbddba3b41fee"],["/简单导航/win12/apps/style/explorer.css","a8346faca5487405c62575c99c61b203"],["/简单导航/win12/apps/style/setting.css","0dce996d85c5ac6e700f9b774ba575cf"],["/简单导航/win12/base.css","9e63250bbbad4e23ec2c80de035e42bf"],["/简单导航/win12/bg-dark.svg","4c8fed16d52c6b84b71d7b5c0f5acbc7"],["/简单导航/win12/bg.svg","9ed19a94566ac6946e4ab8c02e1b2c2f"],["/简单导航/win12/bootstrap-icons.css","8af014a7585ec6b944e3dc5cfd77b89a"],["/简单导航/win12/desktop.css","2eb10217a3e8a5ace18ca753e218ad74"],["/简单导航/win12/desktop.html","557db3709e343945c779e50399a22fc6"],["/简单导航/win12/desktop.js","19eef01c303d7bd548f31384f381f305"],["/简单导航/win12/fonts/bootstrap-icons.woff","be6df3f0c9855796ae0c099ee4ca43ce"],["/简单导航/win12/fonts/bootstrap-icons.woff2","31e1300d419245fd27614630601dc74d"],["/简单导航/win12/icon/about.png","02b078c4249f812ff0fba8f363c3374d"],["/简单导航/win12/icon/calc.png","f4d98a38e77f8eec4acf121d244ea2ba"],["/简单导航/win12/icon/camera.png","9e977d0605e9452a05db674bbddd4e4c"],["/简单导航/win12/icon/defender.png","86584d66cd939b45a063b1e6a4bbb564"],["/简单导航/win12/icon/explorer.png","c45749adb3de4dc9e1bda0a9fc1412e1"],["/简单导航/win12/icon/feedback.png","d74d3809ba1311cbad94ec1e7737ccd0"],["/简单导航/win12/icon/files/excel.png","9737aca13242b71cf76bd4121c965ca1"],["/简单导航/win12/icon/files/img.png","d1c6411703b689d31a365302a7228b10"],["/简单导航/win12/icon/files/ppt.png","76a0b864def30d5a985c3e99ba7d1c7b"],["/简单导航/win12/icon/files/word.png","3612aac2f6e8c58ac57c51584f49a4b2"],["/简单导航/win12/icon/folder/docs.png","dfa39b3a8d40b774873a8275fb260a86"],["/简单导航/win12/icon/folder/music.png","90089cea05d1f0240324e52871e35106"],["/简单导航/win12/icon/folder/pics.png","2c9c768e2c91cca37063eee8f960fc37"],["/简单导航/win12/icon/notepad.png","2260a01f65ee7798f382ed5afb157821"],["/简单导航/win12/icon/setting.png","e050ccc7621dab2bc49f226a91b093c5"],["/简单导航/win12/icon/store.png","23c0e553951ba31b1f10644f09dbc594"],["/简单导航/win12/icon/taskmanager.png","1344f0c1a1e9ad3203c5e224e347cc0a"],["/简单导航/win12/icon/teams.png","2b7969712645822d03c13cd7c7dc9ca8"],["/简单导航/win12/icon/terminal.png","1a3138fa728bf4172e24024b70a221f5"],["/简单导航/win12/icon/user.svg","64e91eb73625fb7b3d99295bcc42c588"],["/简单导航/win12/jq.min.js","7c14a783dfeb3d238ccd3edd840d82ee"],["/简单导航/win12/reload.html","b18f04f971c3d36315a1a79e151dba80"],["/简单导航/win12/shutdown.html","5f0bc8b8058fc83c6278418d60fa189e"],["/简单导航/win12/start.html","0fc718c9680a26cc8c79b4bd21609317"]];
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
