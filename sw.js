/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/07/17/video/index.html","6be1d8d2f753ead8159c980be7b38ffb"],["/2021/10/31/README_zh/index.html","ab01e82ac45f1488918163cb81f064d6"],["/2021/10/31/bug_report/index.html","26e4c89816b1c3b78c7a8fe2ce1de368"],["/2021/11/07/lua代码-多线程/index.html","18e302c5e1947efd7dc82a2c7f75a0a0"],["/2021/12/08/闲聊杂谈/index.html","fd60b3eee75c96b0eedabb8bf749eebe"],["/2021/12/18/壁纸 (1)/index.html","158ef1c109b0384a8bfc3ab755a7c3ee"],["/2022/01/02/我的开发/我的开发-2022-01-02 11_38_11/index.html","c26eb921c389eb00ac7612260284f814"],["/2022/01/09/UTermux/index.html","bc61370eb157bca0f6a04fee990aa179"],["/2022/07/30/美食推荐/Android动态权限申请从未如此简单/index.html","d71e065fe895b0f443099bb29e5bd1da"],["/2022/07/30/美食推荐/一个酸奶盒玩转酸奶蛋糕 /index.html","e6d7e40024ff36e8ca87a74bc20cfa09"],["/2022/07/30/美食推荐/做一道上口的糖醋排骨有多难 /index.html","5ea002582ddffd156565bac06cda9075"],["/2022/07/30/美食推荐/酸豆角简单做法 /index.html","7feba6b26b5bf5ed4d10b07b0446e360"],["/2023/07/14/皮皮虾4.5.0(去水印下载视频)/index.html","736a644c0367278f70d27411fa5d52e4"],["/2023/07/14/网盘推荐/index.html","dbf24d5bdb41dade6d473e43d3cee10a"],["/2023/07/15/社交软件/Telegram(9.6.7)/index.html","8eeeb200cc0125767a6a51e2e73036bd"],["/2023/07/16/分享抖音快手视频去水印怎么去水印 抖音快手一键去水印简单教程 /index.html","25270f081e36554775ed1099b165f597"],["/2023/07/16/快鸟下载V1.1/index.html","2e842846c2fc892cdcd6cba7a372bfd5"],["/2023/07/16/画质侠2.1.0/index.html","e81842dca3ad26536bf55ad2814814d9"],["/2023/07/18/登山赛车_1.58.0破解版，无限金币/index.html","1029c2b022d98b4a7600e6b4d0688f02"],["/2023/07/18/黑白隐藏图_1.0/index.html","069bc1b81c792d65c54d8f38d01e43e6"],["/2023/07/19/海贼王1088话汉化版/index.html","d1b041252dad771a2e948174b701148e"],["/2023/07/20/TikTok国际版APP v30.4.4抖音TikTok解锁版/index.html","79ee81baf2407b835729c5eec7ce2837"],["/2023/07/20/剪映APP(视频剪辑软件)v10.8.1.0 破解会员版/index.html","62db6c58ecc03e6b3daa2f009c469285"],["/2023/07/20/模板制作教程/index.html","42a8b0806ec74dbeb44f4e3b4714b022"],["/2023/07/23/京小辅_2.1(京东任务自动化)/index.html","3a9e54b74c57f2bd16cfef7e928f1ae4"],["/2023/07/23/作者自用软件库/index.html","4229c18d53f6631327d09d9b8759835c"],["/2023/07/23/大佬的书签，近五千个专业网站/index.html","1c9d700bc67648d833cfbeecf39dc610"],["/2023/07/23/纪录片爱好者福音。惊世巨作《纪录片》大合集。/index.html","3e2949a8976dc9de1c2699f54b5de558"],["/2023/07/23/网易云音乐推荐/index.html","1471fba8b2727cb6cc33b599a962b5b7"],["/2023/07/23/超级福利（电影爱好者狂喜）/index.html","dcbe47a1bfba86994e88e9a5fe4856ca"],["/2023/07/23/龙珠GT全集 国粤日语中字1080P/index.html","ad35c4a9f0285c108213a099f22ad6dc"],["/2023/07/30/Clash for Android_2.4.4.premium.apk/index.html","6b164a86d6a96eb017f6d1ce5294bfc2"],["/2023/07/30/Instander_263.2.0.19.104.apk/index.html","51e6a4873274de4e89b9f259eabb5d72"],["/2023/07/30/MoY画质助手_2023.1.5.apk/index.html","f2d15e615e68f837a04a64148cddaf7f"],["/2023/07/30/万能下载Pro_1.0.6.apk/index.html","4ff490246bfa3cd54ddbb26812e1971c"],["/2023/07/30/我的开发/弹窗广告测试/index.html","a52ff3be601907eeb4aec37b72d0e332"],["/2023/07/30/测试图片/index.html","d82d49682a41a188d88dd32cd2ea2620"],["/2023/08/05/我的开发/动漫网站推荐/index.html","faca19b0538d53c62bee60af98313816"],["/2023/08/05/我的开发/国外网站推荐/index.html","b4a181c9d36e1e7e8c20ff8f8f6144c6"],["/2023/08/05/我的开发/小工具网站推荐/index.html","d7d0b90a3998776aaab9e7e563af88b0"],["/2023/08/05/我的开发/小说网站推荐/index.html","64fd350f6828530042cfd97f6ac03296"],["/2023/08/05/我的开发/应用市场网站推荐/index.html","1f46c93bbca0e4938bfe5e2201306c28"],["/2023/08/05/我的开发/影视网站推荐/index.html","f6e2a25df89893e25ea1b5049e2051e0"],["/2023/08/05/我的开发/漫画网站推荐/index.html","4432a97be76e0c3e0f51660d001f9565"],["/2023/08/05/我的开发/直播网站推荐/index.html","3ecf4a3ba60d226926e89d4a2a7973c3"],["/2023/08/05/我的开发/美图网站推荐/index.html","af299709cf942b69c5e7a4013d4878f9"],["/2023/08/05/我的开发/表情包网站推荐/index.html","3567defa35d8c666d3b901358c8ec1d6"],["/2023/08/05/我的开发/资源网站推荐/index.html","aa78c2ee5a0485c68422c062e52ece36"],["/2023/08/05/我的开发/软件库推荐/index.html","648667874d8b81b4256a4a294d4f68a8"],["/2023/08/06/99手游加速器 v1.3.4 解锁版/index.html","f930000328d075f2ec607e22eed0852c"],["/2023/08/06/Niagara Launcher最新1.9.9解锁版/index.html","3bc4f1828e528251b5dae84d0b08e2c2"],["/2023/08/09/Ookla Speedtest v5.0.8 解锁版/index.html","1a44eb7a2147f5854958cddd12cb23d2"],["/2023/08/09/b站解锁版/index.html","52047fe3e1e796e8236dd29018649f69"],["/2023/08/09/剧圈6.0.0最新版去广告/index.html","064a29846139877a1023d86e6101093e"],["/2023/08/09/海豚小说阅读器/index.html","7c63884a2ae42f1d6ff80d25b0414662"],["/2023/08/09/视频搬运去重/index.html","4976a90bc2ccee9a90b05734f3ea8916"],["/2023/08/11/美食推荐/五香花生米简易教程/index.html","930bd4fd818ec438213f1229b94feadd"],["/2023/08/12/美食推荐/你好，大连（三）：大连老菜/index.html","9dda8a3770c536a3c47210cfd9bc52c4"],["/2023/08/12/美食推荐/泡豆腐炖咸菜家常做法 /index.html","e60a2358fec2ad42c3230cd16c148195"],["/2023/08/12/美食推荐/蒜苗腊肉/index.html","c79e69dbed84a7b9ed41262098f5807a"],["/2023/08/12/美食推荐/西红柿炒茄子，酸甜可口好味道/index.html","a7e6708aea0e994944d0ac6feb0b2d3a"],["/2023/08/12/美食推荐/这才是宽粉最好吃的做法，味道麻辣爽口好吃，做法超简单/index.html","e665d89e0d4a55d45350a16a4eec0696"],["/2023/08/15/FFF風之動漫/index.html","46ce5660c614d7e4811321e3adf73d42"],["/2023/08/15/海贼王【更新至1070集】/index.html","ea96e59330f175194ca9a1ef68514907"],["/2023/08/16/#爱追剧# #资源分享# #好电影#/index.html","bae985395b2b75e8fd0bd35ae7a94b42"],["/2023/08/16/SNH48成员写真集的网站/index.html","e9dfc3608dbfd08a22049939065532c0"],["/2023/08/16/【16日更新iOS】皮皮虾Pro-无广告/index.html","cd2d469428c30188d13f75cb105091f0"],["/2023/08/16/【分享】GPT4all本地就能用的AI - 有多个模型/index.html","26d677ceb729545b9fea3437676d66ab"],["/2023/08/16/【分享】NodeVideo 6.4.1 解锁高级版/index.html","4b3a671623dc28b7ce851af595fd63c5"],["/2023/08/16/【分享】万能下载Pro 1.0.6 短视频去水印/index.html","16e105623118321586dee668540d6190"],["/2023/08/16/【分享】清浊，一款专业清理手机垃圾的app/index.html","450d855976f5a038c72c332b29787ce9"],["/2023/08/16/【分享】看电视神器✔支持港澳台、国外电视台❤️可用电视/index.html","87906a209627ff93f149b20bdd8954b5"],["/2023/08/16/【分享】自动点击器 2.0.3 解锁会员/index.html","b4258340cf7da36b2a509a3a4fb89061"],["/2023/08/16/【分享】配音全能宝 v1.1.0 绿化版/index.html","ad880f54c83d89432d414058e3d28d5c"],["/2023/08/16/【分享】酷我音乐_最新版 完美解锁！可换图标！畅享所有会员歌曲！/index.html","80237432b1bca2163a35cb983c55561b"],["/2023/08/16/【分享】重磅！笔趣阁复活版本！全网书籍任性看！可听书！极致纯净！/index.html","f52e0cda40d08eb82e781d89527c2f1f"],["/2023/08/16/【原创】万能去水印 全网短视频去水印工具/index.html","483cd0a0d4c272d046cc84e0497aa78b"],["/2023/08/16/【原创修改】醒图8.1.0解锁会员/index.html","f509849ab4856d33b1dbb214cf278180"],["/2023/08/16/【软件分享】优酷小書版V8.6.8，极致去广精简页面！/index.html","9d283bf99a82e84072b2d28793954e13"],["/2023/08/16/【软件推】某博大赛助手1.0v 一款养眼APP/index.html","3eec128c573b646feb06cc8748bbb586"],["/2023/08/16/【集合】本周实用软件，期待下一次更新/index.html","fc50d3051d81c1ff6a53379101e1689b"],["/2023/08/16/一份很全的天涯神贴合集汇总/index.html","9a807431a9f476ef3f2186f881fd758a"],["/2023/08/16/介绍一些设计类的网站/index.html","2ad861b04559c4c32661eb637f412003"],["/2023/08/16/倒数日 1.18.1 高级版高级版本/index.html","5838c29ab0e03d6ef05612278bf9347c"],["/2023/08/16/笔趣阁最新纯净版/index.html","c59c27a7d9755ea6dd46e8c1646b8aa3"],["/2023/08/16/网站分享# #爱编程# /index.html","8f358c90c8e6e3b5f14a18d574b991e9"],["/2023/08/16/网站分享2/index.html","22ad1f1a1d3197934da86047fa88f4af"],["/2023/08/16/网站分享3/index.html","ef9c269ffddb120162512734ee151c68"],["/2023/08/16/醒图 8.1.0高级版耗子修改版/index.html","2c419570ab5e6b9fe0d4ec6743d7dd6c"],["/2023/08/19/ 资源帮 解锁版 /index.html","76a4355ca265ad196aedb4a0adfe8e17"],["/2023/08/19/#Spotify# 最新解锁版v8.8.56.538/index.html","628a679c59e5d040ffa75a416d8658d6"],["/2023/08/19/Photo Editor 照片编辑器 8.8.1 ，解锁全部功能，移除广告。/index.html","1c30b40f4bfd36afa58acfcce601c811"],["/2023/08/19/【分享】Qute终端控制台 v3.106 高级版/index.html","22769811457849f9a9c96629435a509f"],["/2023/08/19/【分享】极致工具箱1.6.6/index.html","70486d16e486eedb6ef4b9c1326b8cac"],["/2023/08/19/【周五动漫更新】/index.html","3ce4d56bc21033d17f759255be5df4ec"],["/2023/08/19/小X分身安卓9-13可用vip解锁版本/index.html","948bdf3f31112538a944000c4c673952"],["/2023/08/19/网站分享推荐/index.html","09c3cbd2bde84fc6a44c36f4abd96c2f"],["/2023/08/19/美女分享推荐im____neko/index.html","41ef8c7ba4f0c1f2384e8dda75bc6396"],["/2023/08/20/美女分享推荐leeesovelys2/index.html","0d810f7415139ba55b3b3cbc41af310c"],["/2023/08/25/壁纸推荐/index.html","afc968b79f31aaaac5b046b423ca7d90"],["/2023/08/26/美女壁纸分享33/index.html","6a4eef5a556e27d63a1eea8bcb2d4468"],["/2023/08/29/【分享】海豚阅读🔥海量小说免费看，支持飞卢起点/index.html","49a683beeaefc74b201ba92886b39524"],["/2023/08/29/不一样的带壳截图APPHiShoot2iMaterial/index.html","479a5fd6d4e7292bef4c43438b13ca2a"],["/2023/08/29/美女分享推荐3/index.html","640a965ab9bd9b1a178aba3f40879396"],["/2023/08/31/2000+小说txt直接拿走，男频女频都有 飞卢刺猬猫菠萝包起点书客晋江/index.html","dd8ea7e8d2f04805a1f27c5ae250b705"],["/2580.html","3f8cdc9ebc1004aa39fa006a8214a40c"],["/25802580.html","bb4880e554012331382f8159b9a19a6f"],["/258025802580.html","07666ebd42cb3fa95a470dca51a9e996"],["/9999/09/09/文章/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/9999/09/09/文章/Adsterra.html","4ec78614dc4c91839cc065a9f223743f"],["/9999/09/09/文章/Metrial822.png","4deb8d4f959f9d19c81bc44a10fc3cb1"],["/9999/09/09/文章/PlugRush.html","dd4039bbf02d2fba1408cbc2b534dcc5"],["/9999/09/09/文章/Popcash.html","1eb441204a135f6a916f0ee49eebe255"],["/9999/09/09/文章/PropellerAds.html","0a9d272318df792bed59e89369f12b33"],["/9999/09/09/文章/RevenueHits.html","68661af826e3e5312ed722d70aeaad69"],["/9999/09/09/文章/Slimspots.html","8a4e1b3220a9b7bab0b5bbf6aded0064"],["/9999/09/09/文章/TrafficShop.html","8e12e0520e2327d25b4d95eaa99af538"],["/9999/09/09/文章/Yllix.html","c501fcd268f92f9176cf867a45086467"],["/9999/09/09/文章/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/9999/09/09/文章/index.html","7a20971abf35d547fc97d63f06f6e45f"],["/9999/09/09/测试 (1)/index.html","cb3ccb0f9527c0a6ca89ab4afbb7f621"],["/OUnion.html","0d616c0ab596b5f5b7f10fabefe6f524"],["/OUnion2.html","a477c0c4f311406994ca5a0062a79083"],["/archives/2020/07/index.html","7898a26b20cf86a4dbb362d8496ada2d"],["/archives/2020/index.html","6b72ff259858d301ceedac8acb765c03"],["/archives/2021/10/index.html","882d395141032693f3f8d873695b3929"],["/archives/2021/11/index.html","3123203a1775d8b1730fee7979e73018"],["/archives/2021/12/index.html","0e9ff08b7484adb27ebe5192f9589053"],["/archives/2021/index.html","0fedc5ef8b0da0cf49a810b70dc4531a"],["/archives/2022/01/index.html","953412afd7ffc1c0c34556f8e2cf6a3a"],["/archives/2022/07/index.html","b8e162b9a67d889a93b255484767e847"],["/archives/2022/index.html","cd7b3d4bdada3d0acb8cbde16d3744d9"],["/archives/2023/07/index.html","46fe110525729d150e7ba8eee228799f"],["/archives/2023/08/index.html","16bff17e5c1003a8ac8f7d2923e60836"],["/archives/2023/08/page/2/index.html","8d2af448e8482aa796cc9125a41bcbec"],["/archives/2023/08/page/3/index.html","5c45f7c7a46e087cb03f440cff0ffe62"],["/archives/2023/index.html","ae4d74d564fbe37a939d38347bc89ab4"],["/archives/2023/page/2/index.html","aba2db91552cd3bd223001541b2e7b42"],["/archives/2023/page/3/index.html","95bde55995cd4dff97814bf2174583a7"],["/archives/2023/page/4/index.html","36fcaa3d902df3b20bc6d0dc1b9d36fc"],["/archives/9999/09/index.html","4ae0ecf6bc426b928a143f4943893ab5"],["/archives/9999/index.html","5d0c5de452e77710e290aeb1efc09bea"],["/archives/index.html","4c27c9ef454a79292c456bc92ea012e1"],["/archives/page/2/index.html","4393a9bb9caa3809dcb3f88a20aa1b50"],["/archives/page/3/index.html","253e6727b9aa224e57cd9b53f130065d"],["/archives/page/4/index.html","93f241078ea9626caa19479be7547cb9"],["/archives/page/5/index.html","93aaba2e983f1f506af3d04e7e55484f"],["/artitalk/index.html","0c12236c9ce9a1c6b1de08ebe7588eee"],["/categories/categories/index.html","05b07d763c7365c809946ba49a917b98"],["/categories/html/index.html","a591513115e143045d4a2525bace5c2e"],["/categories/index.html","733c957234ad52a4fab63dca0348d36b"],["/categories/lua代码/index.html","01b1486db59ffc91404d9cf8aab407c7"],["/categories/作者自用软件库推荐/index.html","8db5eb41f8d8bd5153c7bc681f0c38c1"],["/categories/动漫网站推荐/index.html","dc1f667ef37d98441bd91dfead481240"],["/categories/国外网站推荐/index.html","f312610ae1dc30f7b04dccd74b1058bd"],["/categories/小工具网站推荐/index.html","af203bb226e413a97feaffa84d7f3a84"],["/categories/小说网站推荐/index.html","8c8eedf4a734105f4dcba8dc29a8cd78"],["/categories/应用市场网站推荐/index.html","50a3be593a2cb862806209892edad299"],["/categories/影视网站推荐/index.html","a4ab5db0b6af3038ead21772d9fd910a"],["/categories/我的开发/index.html","27f16e634e9026bae4238e03f8eb43b5"],["/categories/文章推荐/index.html","3ce04384224eb24cba4953f2b6814b53"],["/categories/文章转载/index.html","5665d99d627a7aca8be54fc88f04ad2a"],["/categories/海贼王/index.html","638ba1da6599c6fb87c83ba23efe68e4"],["/categories/漫画网站推荐/index.html","a6dcb5d9ccb31f90215b677ed78ed8f2"],["/categories/直播网站推荐/index.html","8efcfc0e592d290022562650e62dd7ff"],["/categories/网易云音乐推荐/index.html","22e814f766281b5cd7b565a66fae3b31"],["/categories/网盘推荐/index.html","5cce8343eb5cd63acded91cb3448f699"],["/categories/网站分享推荐/index.html","e3db2d622d5c954ae290e2569c2122da"],["/categories/美图网站推荐/index.html","66739eb919efa605f50cea50a52babcd"],["/categories/美女分享推荐/index.html","e4d1e584295f33b2ee3e8a5cbbdc6631"],["/categories/美食推荐/index.html","21935676497a69907bf1fabd38d08278"],["/categories/表情包网站推荐/index.html","a4fb36b30ea572164b10045e6bb8bec8"],["/categories/资源网站推荐/index.html","c576c98cb1a48a54c91a10e5562910ed"],["/categories/软件库推荐/index.html","24b7d700094e058ce485aba1564baee3"],["/categories/软件推荐/index.html","7796b03f1783cf3b1c86ec362b15ed1c"],["/categories/软件推荐/page/2/index.html","4cc648ae9c6b7faeea6f64083d260c87"],["/categories/闲聊杂谈/index.html","a710dc80b6d1031c9f1d1b4088a484fc"],["/categories/阿里云盘推荐/index.html","364a9469d335d81770ab57f4e27f7b2a"],["/css/2style.css","614d91358f6b26c603779d5bc822bc7e"],["/css/custom.css","15d6e5b6ce6cd6d4a2b0effe06244960"],["/css/custom/fixed_comment.css","2e141a3fe37f0744338976e58b94189d"],["/css/custom/fixed_comment.js","f9edc32e935c98b69ad616c7a39b4418"],["/css/eurkon/eurkon.css","3459931d543ce237af6e62e6c6cbaa46"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","ebbdb2eb5ea389951ec8699a520f23af"],["/css/mobie.css","524958f19b70239106d6aaa5decb86e2"],["/css/player.css","bf081626a42aae043604021ed40f6ef4"],["/css/reset.css","7f67c3ba6c820d0a0464ccb609f3c830"],["/css/style.css","219b80c89b65ad80bc928a568667a98b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/viewer.min.css","ec961a06f9292db17c03e324362159da"],["/equipment/index.html","c372972647a2edaf74a7f94b2df474f4"],["/googleb0c521173282337f.html","a1202143e8bd8d5fc83b37ca723da70d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/img/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d10e87096b2f97985799c52b15d04146"],["/js/card_weibo.js","5fa4471b13d0bd4315be295663388e16"],["/js/eurkon/color-thief.min.js","96805f1e38ea0b713936ec18e7b450a0"],["/js/eurkon/eurkon.js","26508939068f37c6e7f24897be41d48e"],["/js/eurkon/refresh.js","6de41747d67d724d4b7d619b87869443"],["/js/eurkon/rgbaster.min.js","90546dec3661d234ff3ee6f6bcad527c"],["/js/main.js","d66f147747b5511577de5e46affcb620"],["/js/search/algolia.js","cb2b0f7e1fcea9d7485a395f69c94468"],["/js/search/local-search.js","483487f7261461207536fd9bde606418"],["/js/tw_cn.js","dec7bff10294055b65e3dd37af6fb3c1"],["/js/utils.js","2ff83587b5454af8cbd934f5caf6b94c"],["/lazysizes.min.js","45bacd312d5098b4b59f563d8756c15d"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","5832019ddc497ff3693f6643295b9e1f"],["/luago.html","cf2270c74879771e93b2f1bf6369c99d"],["/luago.js","3d9c4c576287f2d0a92bc064492e8996"],["/page/2/index.html","d4a9c5b3494d1d173b076a4266b8a63c"],["/page/3/index.html","43ccf8fd7807f194e1b24921c6fab9ba"],["/page/4/index.html","b2e0f049ef265531b342d26ae931f228"],["/page/5/index.html","60218e04723823af67c9e71d6533ad66"],["/page/video/index.html","fd02e0ae57e3c2c02c961a07e8d932fd"],["/pinterest-bda12.html","d6f86ee6493eeb0791fed46cc662afd2"],["/pluginsSrc/@docsearch/css/dist/style.css","7b9b2d58a76a948574c558639f28d1fb"],["/pluginsSrc/@docsearch/js/dist/umd/index.js","4016eb74e9eea32f3bd7ef5724c15ba5"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.css","1bf42bfbfd01f4a3e2efcf5dbb5c7262"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.umd.js","4a792eb6b0505cd8ef64bd13dd5acd22"],["/pluginsSrc/@fortawesome/fontawesome-free/css/all.min.css","5222e06b77a1692fa2520a219840e6be"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf","bb8cd014d7a55672934233c354e1c4a3"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2","005c9aa92b564b73b7582cc4f1fa49cb"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf","675809e48e35c47d51c7d6fcc687ee28"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2","747442fa76f1d9a31f9a54a2e8a4b448"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf","0248ab19e74fc3731de14d647db4687a"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2","d5e647388e2415268b700d3df2e30a0d"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.ttf","58f1253e5639d508a6fe310c97327f82"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.woff2","f20773a753bf1fbe9ccec04f90a470ea"],["/pluginsSrc/@waline/client/dist/waline.css","f9a6e928169c9000c7fdc6e2d4fe39ef"],["/pluginsSrc/@waline/client/dist/waline.js","8943d235ad431f230d318a492dbcd4ee"],["/pluginsSrc/abcjs/dist/abcjs-basic-min.js","726d0a3fbaf41b8039834394e517cd50"],["/pluginsSrc/algoliasearch/dist/algoliasearch-lite.umd.js","1e3dc6f644974934ffcb81baf749d76a"],["/pluginsSrc/aplayer/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/pluginsSrc/aplayer/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/pluginsSrc/artalk/dist/Artalk.css","afafe046a97a29a277282447c5c3861a"],["/pluginsSrc/artalk/dist/Artalk.js","520868f67b0544435b2ab31c95247bc6"],["/pluginsSrc/blueimp-md5/js/md5.min.js","2f577924085ebbe12e29f3ff706397d0"],["/pluginsSrc/butterfly-extsrc/dist/activate-power-mode.min.js","eb1c75760fdc1249dfb74db05ba39a5c"],["/pluginsSrc/butterfly-extsrc/dist/canvas-fluttering-ribbon.min.js","bee7265e6d121d3e2bbe25592163fa22"],["/pluginsSrc/butterfly-extsrc/dist/canvas-nest.min.js","b4b3398371256eb9c74a0001eb5fa25d"],["/pluginsSrc/butterfly-extsrc/dist/canvas-ribbon.min.js","15fcd2b43b47baa5418ae4004cd2c802"],["/pluginsSrc/butterfly-extsrc/dist/click-heart.min.js","8626378d634c886884e3f94ff060182e"],["/pluginsSrc/butterfly-extsrc/dist/click-show-text.min.js","56edbcd0697d5c8056d0d40d9bbeb26a"],["/pluginsSrc/butterfly-extsrc/dist/fireworks.min.js","b0f0a5c077706616aef9224fa0b4df76"],["/pluginsSrc/butterfly-extsrc/metingjs/dist/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/css/share.min.css","4b6e6c4b12b9206824231920ed3326c8"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/pluginsSrc/disqusjs/dist/browser/disqusjs.es2015.umd.min.js","1090676c68ac556956d14d40353c2da5"],["/pluginsSrc/disqusjs/dist/browser/styles/disqusjs.css","8edf59e04dfb9bb9b73d185e651262e0"],["/pluginsSrc/flickr-justified-gallery/dist/fjGallery.css","d163683c883a1f80bc86404561f8004d"],["/pluginsSrc/flickr-justified-gallery/dist/fjGallery.min.js","9d1c40a9e1b26d1fc2c2a1fbd959f01e"],["/pluginsSrc/gitalk/dist/gitalk.css","8476031a633732dff9875feae0890070"],["/pluginsSrc/gitalk/dist/gitalk.min.js","8a817782fe4a94b4d2499bcfce04f8c3"],["/pluginsSrc/instant.page/instantpage.js","ae11493d70a8ce9fa776cc7aec1be764"],["/pluginsSrc/instantsearch.js/dist/instantsearch.production.min.js","9339979995018dfebf4e0ee06cf7550e"],["/pluginsSrc/katex/dist/contrib/copy-tex.min.js","c3a3efd7d609e2e905aa386fc0f7d18e"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.ttf","56573229753fad48910bda2ea1a6dd54"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff","10824af77e9961cfd548c8a458f10851"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff2","66c678209ce93b6e2b583f02ce41529e"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf","497bf407c4c609c6cf1f1ad38f437f7f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff","de2ba279933d60f7819ff61f71c17bed"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2","a9e9b0953b078cd40f5e19ef4face6fc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf","e6fb499fc8f9925eea3138cccba17fff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff","a25140fbe6692bffe71a2ab861572eb3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2","08d95d99bf4a2b2dc7a876653857f154"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf","b9d7c4497cab3702487214651ab03744"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff","40934fc076960bb989d590db044fef62"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2","796f3797cdf36fcaea18c3070a608378"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf","97a699d83318e9334a0deaea6ae5eda2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff","e435cda5784e21b26ab2d03fbcb56a99"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2","f9e6a99f4a543b7d6cad1efb6cf1e4b1"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.ttf","8e431f7ece346b6282dae3d9d0e7a970"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff","4cdba6465ab9fac5d3833c6cdba7a8c3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff2","a9382e25bcf75d856718fcef54d7acdb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf","52fb39b0434c463d5df32419608ab08a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff","5f875f986a9bce1264e8c42417b56f74"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2","d873734390c716d6e18ff3f71ac6eb8b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.ttf","39349e0a2b366f38e2672b45aded2030"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff","8ffd28f6390231548ead99d7835887fa"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff2","652970624cde999882102fa2b6a8871f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.ttf","818582dae57e6fac46202cfd844afabb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff","f1cdb692ee31c10b37262caffced5271"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff2","f8a7f19f45060f7a177314855b8c7aa3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf","6589c4f1f587f73f0ad0af8ae35ccb53"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff","48155e43d9a284b54753e50e4ba586dc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2","1320454d951ec809a7dbccb4f23fccf0"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.ttf","fe5ed5875d95b18c98546cb4f47304ff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff","ed7aea12d765f9e2d0f9bc7fa2be626c"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff2","d8b7a801bd87b324efcbae7394119c24"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf","f2ac73121357210d91e5c3eaa42f72ea"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff","0e897d27f063facef504667290e408bd"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2","ad546b4719bcf690a3604944b90b7e42"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf","f60b4a34842bb524b562df092917a542"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff","ef725de572b71381dccf53918e300744"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2","e934cbc86e2d59ceaf04102c43dc0b50"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf","3243452ee6817acd761c9757aef93c29"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff","5f8637ee731482c44a37789723f5e499"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2","1ac3ed6ebe34e473519ca1da86f7a384"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.ttf","a189c37d73ffce63464635dc12cbbc96"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff","a82fa2a7e18b8c7a1a9f6069844ebfb9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff2","1b3161eb8cc67462d6e8c2fb96c68507"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.ttf","0d8d9204004bdf126342605f7bbdffe6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff","4788ba5b6247e336f734b742fe9900d5"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff2","82ef26dc680ba60d884e051c73d9a42d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.ttf","1fdda0e59ed35495ebac28badf210574"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff","b0628bfd27c979a09f702a2277979888"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff2","95a1da914c20455a07b7c9e2dcf2836d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.ttf","963af864cbb10611ba33267ba7953777"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff","4de844d4552e941f6b9c38837a8d487b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff2","9108a400f4787cffdcc3a3b813401e6a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.ttf","27a23ee69999affa55491c7dab8e53bf"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff","3045a61f722bc4b198450ce69b3e3824"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff2","61522cd3d9043622e235ab57762754f2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf","6bf4287568e1d3004b54d5d60f9f08f9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff","0e0460587676d22eae09accd6dcfebc6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2","b8b8393d2e65fcebda5fa99fa3264f41"],["/pluginsSrc/katex/dist/katex.min.css","1612bcd72cc503f18e2f302b3a2addd1"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/tex.js","29662ef385c73c4dd9e99b17cd2d579b"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/pluginsSrc/mathjax/es5/tex-mml-chtml.js","2e00d51c98dbb338e81054f240e1deb2"],["/pluginsSrc/medium-zoom/dist/medium-zoom.min.js","8041f939fde6eb0bd1cd8740deb965c6"],["/pluginsSrc/mermaid/dist/mermaid.min.js","bf484b91eb7ad991db3fe64a905ae8dc"],["/pluginsSrc/node-snackbar/dist/snackbar.min.css","4220368aced9a5ce011f2ce9bd8b1035"],["/pluginsSrc/node-snackbar/dist/snackbar.min.js","8f19a3527021a6268cd8488a5debe7f8"],["/pluginsSrc/pace-js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/pluginsSrc/pace-js/themes/blue/pace-theme-minimal.css","7bba84cb68736f6ea9ae77cd934d995a"],["/pluginsSrc/pangu/dist/browser/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/pluginsSrc/pjax/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/pluginsSrc/prismjs/plugins/autoloader/prism-autoloader.min.js","4f48958b1802a9d99581aa5ab1e3f621"],["/pluginsSrc/prismjs/plugins/line-numbers/prism-line-numbers.min.js","ffdf7bdb8ddaf0c89a4e4225e1086264"],["/pluginsSrc/prismjs/prism.js","54e45d657b6a3471bd7cc72d0873c0b1"],["/pluginsSrc/twikoo/dist/twikoo.all.min.js","e13758ff0fed6533233ccc638b9dd6db"],["/pluginsSrc/typed.js/dist/typed.umd.js","3ba6a3f6e22122d8f5ed22c423299981"],["/pluginsSrc/valine/dist/Valine.min.js","c748c413b03bcdb2064c84bc9e06613c"],["/pluginsSrc/vanilla-lazyload/dist/lazyload.iife.min.js","1ce4f414981382d7d65435a2412e09eb"],["/sw-register.js","414917f051b8529191e893a75f3e4654"],["/tags/index.html","922f0020d846eb31060db329b61e9b65"],["/tags/tags/index.html","7ca8cfb1154dbd538c6c1d70fbe93701"],["/tags/tags/page/2/index.html","d60ffbd7fd48e31b0cfee7c3751ac100"],["/tags/tags/page/3/index.html","adab1dcff7fde8ee7c1c0c5304801a02"],["/tags/tags/page/4/index.html","52eec3e6f0803bf8c1de90597d2da120"],["/untitled.js","60b6022d611f9ba01a721942cc5d90eb"],["/userAgent.js","428949435f0f1dce3eb22d209e1fee61"],["/video/index.html","f00b864b4da85b557120257ab1783819"],["/x-frame-bypass.js","d0e55673f7b13b00bbe5c2182932c465"],["/万能api视频解析/README.html","9a64bf4edad1202363c2d6b8fa534c01"],["/万能api视频解析/index.html","b44d17c74a060dd0efa1c1cc1c29f427"],["/小姐姐随机播放/index.html","90269a0706320cfdb5560418c82ee5a3"],["/小姐姐随机播放/static/css/bootstrap.min.css","bbace035fd25209e34be801cdeaf7a17"],["/小姐姐随机播放/static/css/images/bj.jpg","7014c63c5ba024799b083089e2429e2c"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/小姐姐随机播放/static/js/vidwo.js","492611017763533df2ad01defecc7fb1"],["/短视频/error.png","c0a42e5fa294aae62a201f0485a15a3e"],["/短视频/index.html","e5dfb0e4dd7ec20632070248a61c74da"],["/短视频/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/短视频/loading.png","5d9953167459e98abce58311c8031d98"],["/简单导航/404.html","63c9f24b15167b37e132229d013b1578"],["/简单导航/README.html","1e1e992aa8d0cd5a4b72be4bb455b0e5"],["/简单导航/index.html","bd0247b2ca49aaf359126cf330f51dd9"],["/简单导航/noonetodie/images/gdyx.png","a05471cce0082b41fbae133e67c1b6e2"],["/简单导航/noonetodie/images/wu.png","29de547658d091403d3242ef4266dc73"],["/简单导航/noonetodie/images/xiaoren.png","232b9342b8c5c61b56e72bab03076ffe"],["/简单导航/noonetodie/images/ygdbns.jpg","b6699f201e2ab40e54b64745cd2ea80c"],["/简单导航/noonetodie/index.html","cdf70535c52a1bab4fcf78c131411969"],["/简单导航/noonetodie/js/main.js","bd66da33e99276a1d187abdfef69bfe3"],["/简单导航/noonetodie/js/require.js","2a31ed34ccf92aa78c5c7ff5d4c39a26"],["/简单导航/win12/README.html","babd1d8604ddca4325c4edff1a10ddd1"],["/简单导航/win12/apps/icons/about/info.svg","a837ec9aaf652461cad073742fb8d89b"],["/简单导航/win12/apps/icons/about/update.svg","0c8c8ae96f167f403e14d7d3c9aa6b50"],["/简单导航/win12/apps/icons/explorer/disk.png","89df4f1a995fe5cabfa93a7ca15ab2d8"],["/简单导航/win12/apps/icons/explorer/diskwin.png","8f95b402294b0183543920364af3270b"],["/简单导航/win12/apps/icons/explorer/od.png","93fc2191ab284ce29a08e41a2250e95e"],["/简单导航/win12/apps/icons/explorer/qa.png","0e455f04220cf708a4d25df1e6dd9763"],["/简单导航/win12/apps/icons/explorer/rb.png","3ffbde87932c94cb55dc5d7e6cce49d6"],["/简单导航/win12/apps/icons/explorer/thispc.png","605323c51660aff3db4f27d0131d4fb1"],["/简单导航/win12/apps/icons/explorer/tool-copy.png","b78f25678bc1ba7fc5d2d6a4fb4a1933"],["/简单导航/win12/apps/icons/explorer/tool-cut.png","606378803bbafce26e9488030e82b4e6"],["/简单导航/win12/apps/icons/explorer/tool-new.png","403feb6235f6551cfd20dc970886a6be"],["/简单导航/win12/apps/icons/explorer/tool-paste.png","d5b06481b2887acd6ad5e3f399858e92"],["/简单导航/win12/apps/icons/explorer/tool-rename.png","56f0a1bb60c7bc13873ed4efca6ce8d6"],["/简单导航/win12/apps/icons/explorer/tool-sort.png","57b8f61c524fe9e894956abc0642e589"],["/简单导航/win12/apps/icons/explorer/tool-view.png","7844ce1cd03ed70b49ce47971440739e"],["/简单导航/win12/apps/icons/setting/apps.png","87bde3db35fcc7deae476223243f8ea8"],["/简单导航/win12/apps/icons/setting/blueteeth.png","1f5d3d76dd5cc368f4389f7d8ad28803"],["/简单导航/win12/apps/icons/setting/game.png","3b876313e35ed7cf27cdac26542b10cf"],["/简单导航/win12/apps/icons/setting/help.png","7f3ff22100323605dc256b8fd98829d3"],["/简单导航/win12/apps/icons/setting/icons.woff2","2ec186e1afec55ea3f2752eaf6dea238"],["/简单导航/win12/apps/icons/setting/network.png","adc513bff915108429498a7877268c29"],["/简单导航/win12/apps/icons/setting/personal.png","5bf45299de5e59cd47d4cb7450b0841d"],["/简单导航/win12/apps/icons/setting/safe.png","7badcf2f0c00f7a326a54d668fd1d435"],["/简单导航/win12/apps/icons/setting/system.png","fcf935c901ecd434f2fc1d5b62b636fa"],["/简单导航/win12/apps/icons/setting/time.png","72885b049d05e00aac0ef938606c52c4"],["/简单导航/win12/apps/icons/setting/update.png","968bc43be6076815e94589b122f39c53"],["/简单导航/win12/apps/icons/setting/user.png","43fb0b7556928ab822e482de64248687"],["/简单导航/win12/apps/style/about.css","c75d7cb412ff8a4ba5242a5f0a7f1fdc"],["/简单导航/win12/apps/style/calc.css","09234cb9b14fdf181b7dbddba3b41fee"],["/简单导航/win12/apps/style/explorer.css","a8346faca5487405c62575c99c61b203"],["/简单导航/win12/apps/style/setting.css","0dce996d85c5ac6e700f9b774ba575cf"],["/简单导航/win12/base.css","9e63250bbbad4e23ec2c80de035e42bf"],["/简单导航/win12/bg-dark.svg","4c8fed16d52c6b84b71d7b5c0f5acbc7"],["/简单导航/win12/bg.svg","9ed19a94566ac6946e4ab8c02e1b2c2f"],["/简单导航/win12/bootstrap-icons.css","8af014a7585ec6b944e3dc5cfd77b89a"],["/简单导航/win12/desktop.css","2eb10217a3e8a5ace18ca753e218ad74"],["/简单导航/win12/desktop.html","557db3709e343945c779e50399a22fc6"],["/简单导航/win12/desktop.js","19eef01c303d7bd548f31384f381f305"],["/简单导航/win12/fonts/bootstrap-icons.woff","be6df3f0c9855796ae0c099ee4ca43ce"],["/简单导航/win12/fonts/bootstrap-icons.woff2","31e1300d419245fd27614630601dc74d"],["/简单导航/win12/icon/about.png","02b078c4249f812ff0fba8f363c3374d"],["/简单导航/win12/icon/calc.png","f4d98a38e77f8eec4acf121d244ea2ba"],["/简单导航/win12/icon/camera.png","9e977d0605e9452a05db674bbddd4e4c"],["/简单导航/win12/icon/defender.png","86584d66cd939b45a063b1e6a4bbb564"],["/简单导航/win12/icon/explorer.png","c45749adb3de4dc9e1bda0a9fc1412e1"],["/简单导航/win12/icon/feedback.png","d74d3809ba1311cbad94ec1e7737ccd0"],["/简单导航/win12/icon/files/excel.png","9737aca13242b71cf76bd4121c965ca1"],["/简单导航/win12/icon/files/img.png","d1c6411703b689d31a365302a7228b10"],["/简单导航/win12/icon/files/ppt.png","76a0b864def30d5a985c3e99ba7d1c7b"],["/简单导航/win12/icon/files/word.png","3612aac2f6e8c58ac57c51584f49a4b2"],["/简单导航/win12/icon/folder/docs.png","dfa39b3a8d40b774873a8275fb260a86"],["/简单导航/win12/icon/folder/music.png","90089cea05d1f0240324e52871e35106"],["/简单导航/win12/icon/folder/pics.png","2c9c768e2c91cca37063eee8f960fc37"],["/简单导航/win12/icon/notepad.png","2260a01f65ee7798f382ed5afb157821"],["/简单导航/win12/icon/setting.png","e050ccc7621dab2bc49f226a91b093c5"],["/简单导航/win12/icon/store.png","23c0e553951ba31b1f10644f09dbc594"],["/简单导航/win12/icon/taskmanager.png","1344f0c1a1e9ad3203c5e224e347cc0a"],["/简单导航/win12/icon/teams.png","2b7969712645822d03c13cd7c7dc9ca8"],["/简单导航/win12/icon/terminal.png","1a3138fa728bf4172e24024b70a221f5"],["/简单导航/win12/icon/user.svg","64e91eb73625fb7b3d99295bcc42c588"],["/简单导航/win12/jq.min.js","7c14a783dfeb3d238ccd3edd840d82ee"],["/简单导航/win12/reload.html","b18f04f971c3d36315a1a79e151dba80"],["/简单导航/win12/shutdown.html","5f0bc8b8058fc83c6278418d60fa189e"],["/简单导航/win12/start.html","0fc718c9680a26cc8c79b4bd21609317"]];
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
