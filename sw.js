/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/07/17/video/index.html","dcd5bcd5993aca84c99e63b6b5e9f055"],["/2021/10/31/README_zh/index.html","9895219d8e0814c765b22c8612ebf2cd"],["/2021/10/31/bug_report/index.html","073f3891337dab79e5aca5311e97d684"],["/2021/11/07/lua代码-多线程/index.html","f96e870373432984e572d00f874957c1"],["/2021/12/08/闲聊杂谈/index.html","98fe0d8ff01038555d4df6635f3cb118"],["/2021/12/18/壁纸 (1)/index.html","39d501c63ad284a56265b2d5d29fd833"],["/2022/01/02/我的开发/我的开发-2022-01-02 11_38_11/index.html","a0ebf3b1962ae4e2d4200a379b38aca7"],["/2022/01/09/UTermux/index.html","a48ef952e9f5d231e62c062adf3c8236"],["/2022/07/30/美食推荐/Android动态权限申请从未如此简单/index.html","54ab4c95ed0baa68c82411170fdbad1e"],["/2022/07/30/美食推荐/一个酸奶盒玩转酸奶蛋糕 /index.html","b1d34b98060a9717936312f565de431b"],["/2022/07/30/美食推荐/做一道上口的糖醋排骨有多难 /index.html","5fc1253b66c72846840d4296697f860e"],["/2022/07/30/美食推荐/酸豆角简单做法 /index.html","a77d02cd64302bce9782f77c0aebb4fa"],["/2023/07/14/皮皮虾4.5.0(去水印下载视频)/index.html","dabdb27bfbae4820022cf4b95a7c2d06"],["/2023/07/14/网盘推荐/index.html","c77e70b843c7ff990080d62639dad5ff"],["/2023/07/15/社交软件/Telegram(9.6.7)/index.html","37af4678f8961d253c8e3255cc2d48ce"],["/2023/07/16/分享抖音快手视频去水印怎么去水印 抖音快手一键去水印简单教程 /index.html","aaaae6ca53caddb711ff57bc8358da2a"],["/2023/07/16/快鸟下载V1.1/index.html","01f5ab0c671259a4212d5988a0d87289"],["/2023/07/16/画质侠2.1.0/index.html","2766683c767e65b1d0aaec1d465aace6"],["/2023/07/18/登山赛车_1.58.0破解版，无限金币/index.html","a88934c288d53d3dc324d62cb02fafec"],["/2023/07/18/黑白隐藏图_1.0/index.html","495aea542bc523e3c9b48720abd8a88d"],["/2023/07/19/海贼王1088话汉化版/index.html","87944ac927bf4d3083dfc6cb811496de"],["/2023/07/20/TikTok国际版APP v30.4.4抖音TikTok解锁版/index.html","b016851eff1ba520955587957856c622"],["/2023/07/20/剪映APP(视频剪辑软件)v10.8.1.0 破解会员版/index.html","1a9a63ac1e9eaea88fbcb1b231414a73"],["/2023/07/20/模板制作教程/index.html","825412353dcf8f236cf8597437205b84"],["/2023/07/23/京小辅_2.1(京东任务自动化)/index.html","761e7defbb51b92f8678a091fac60936"],["/2023/07/23/作者自用软件库/index.html","c94af6ebae7dbf4338541986190f632d"],["/2023/07/23/大佬的书签，近五千个专业网站/index.html","5bc68f42e25a5fda9b00ef1c753d182c"],["/2023/07/23/纪录片爱好者福音。惊世巨作《纪录片》大合集。/index.html","1eb2be44ab536ddfde07bcff89396f53"],["/2023/07/23/网易云音乐推荐/index.html","fc297b35604f0ae4b8e318bfa7d4fbc8"],["/2023/07/23/超级福利（电影爱好者狂喜）/index.html","a0349dc21e3574cc4839869bf3a4680c"],["/2023/07/23/龙珠GT全集 国粤日语中字1080P/index.html","0b1261f8197dfa9d76b765b3af57d89a"],["/2023/07/30/Clash for Android_2.4.4.premium.apk/index.html","a3c68f89b96d125f6545ded351a8fba7"],["/2023/07/30/Instander_263.2.0.19.104.apk/index.html","9a46c74e71267ad76954e8fb6d8ef0fd"],["/2023/07/30/MoY画质助手_2023.1.5.apk/index.html","384328a406ba18e91e655c0aa6110153"],["/2023/07/30/万能下载Pro_1.0.6.apk/index.html","e9cacb670b55a41a1b162ca288a8ade0"],["/2023/07/30/我的开发/弹窗广告测试/index.html","a414cb2a48ff209fb46c17cbb2e3f3cd"],["/2023/07/30/测试图片/index.html","9a380a15ccf7c98bd174237d2343943d"],["/2023/08/05/我的开发/动漫网站推荐/index.html","0caae3522ebe887df5bc46bde9943488"],["/2023/08/05/我的开发/国外网站推荐/index.html","a756997f6445c76db0233bc38243acc0"],["/2023/08/05/我的开发/小工具网站推荐/index.html","3e09509a63d76d4fac45d0cf8131af50"],["/2023/08/05/我的开发/小说网站推荐/index.html","3c17c4ccb7cbf6de02589d2e59a13f9f"],["/2023/08/05/我的开发/应用市场网站推荐/index.html","56ee4c1fdabc14fabdcbf93470933fd6"],["/2023/08/05/我的开发/影视网站推荐/index.html","ad040e4e70b7d5ca20bcef9568027ba9"],["/2023/08/05/我的开发/漫画网站推荐/index.html","e2b3c0e039b5a5002117afdaef574834"],["/2023/08/05/我的开发/直播网站推荐/index.html","a5281cffaa569bab730390d36b022819"],["/2023/08/05/我的开发/美图网站推荐/index.html","144363ad7cbf313ba6f9359e480775d3"],["/2023/08/05/我的开发/表情包网站推荐/index.html","5e265145cfc7409f7d86419b2802a467"],["/2023/08/05/我的开发/资源网站推荐/index.html","921743b939b38777cfe82ad9bb26b5b4"],["/2023/08/05/我的开发/软件库推荐/index.html","3f2681f990fb38e9f8777a89654d38bc"],["/2023/08/06/99手游加速器 v1.3.4 解锁版/index.html","fa77c927e10f8968b5749611a9b1d043"],["/2023/08/06/Niagara Launcher最新1.9.9解锁版/index.html","e530d4b24751ecdb28ff8622af245885"],["/2023/08/09/Ookla Speedtest v5.0.8 解锁版/index.html","e31bcdbec82fe3645b1a5f33751aebb3"],["/2023/08/09/b站解锁版/index.html","553d7995e696200b3d4ef1be6be954c3"],["/2023/08/09/剧圈6.0.0最新版去广告/index.html","3b519e1c17b64df9e556680de469095b"],["/2023/08/09/海豚小说阅读器/index.html","db90cfc98e4e01b69bf4f8387579df84"],["/2023/08/09/视频搬运去重/index.html","d947a19e062969df906b70e6d96efccf"],["/2023/08/11/美食推荐/五香花生米简易教程/index.html","54ec12df312d485e7c538f7e1c045b8f"],["/2023/08/12/美食推荐/你好，大连（三）：大连老菜/index.html","553042a85ac2e16ab259482b147eae0f"],["/2023/08/12/美食推荐/泡豆腐炖咸菜家常做法 /index.html","2b5559711cf6783eff6d966e52d06ab2"],["/2023/08/12/美食推荐/蒜苗腊肉/index.html","5fc6cea4721d80e5d63c8ed9711a54bc"],["/2023/08/12/美食推荐/西红柿炒茄子，酸甜可口好味道/index.html","17c274e2eb0d0d7500ba516fe0968c84"],["/2023/08/12/美食推荐/这才是宽粉最好吃的做法，味道麻辣爽口好吃，做法超简单/index.html","6751828d2b75ed21ede657105e5159e9"],["/2023/08/15/FFF風之動漫/index.html","5d24f69ed87ef5547a5965d95febd48a"],["/2023/08/15/海贼王【更新至1070集】/index.html","c5e4aebc044feb9d5cda55b700082c61"],["/2023/08/16/#爱追剧# #资源分享# #好电影#/index.html","09d0369d991e72bd74e651882641e80b"],["/2023/08/16/SNH48成员写真集的网站/index.html","b6c213125bcae95fc14e8979943b1073"],["/2023/08/16/【16日更新iOS】皮皮虾Pro-无广告/index.html","f508c4a7a9c001313a365f3775de5311"],["/2023/08/16/【分享】GPT4all本地就能用的AI - 有多个模型/index.html","36f661571586598003e97f10079fc16e"],["/2023/08/16/【分享】NodeVideo 6.4.1 解锁高级版/index.html","979172a49d178a3e8f24a2f1535c022e"],["/2023/08/16/【分享】万能下载Pro 1.0.6 短视频去水印/index.html","0555f116dc2fd20e3420f87eacbd497c"],["/2023/08/16/【分享】清浊，一款专业清理手机垃圾的app/index.html","cbe6ded74c4d27ac63cfd47c5f3157d1"],["/2023/08/16/【分享】看电视神器✔支持港澳台、国外电视台❤️可用电视/index.html","121a6ba92105bc62a6c8c45bf58607df"],["/2023/08/16/【分享】自动点击器 2.0.3 解锁会员/index.html","68c61f672b4a0ac138363c53580e8383"],["/2023/08/16/【分享】配音全能宝 v1.1.0 绿化版/index.html","6ca3742e27fe6fe075ce8103075da61f"],["/2023/08/16/【分享】酷我音乐_最新版 完美解锁！可换图标！畅享所有会员歌曲！/index.html","dac28e8b4a7cd0257755be959ca773b4"],["/2023/08/16/【分享】重磅！笔趣阁复活版本！全网书籍任性看！可听书！极致纯净！/index.html","1c4733cfd859474c9bb7eca393f51d16"],["/2023/08/16/【原创】万能去水印 全网短视频去水印工具/index.html","7d4d5aeee27b01943adf0d289d519026"],["/2023/08/16/【原创修改】醒图8.1.0解锁会员/index.html","c4b83247ccb1a7f386e1ed612f2dc7bf"],["/2023/08/16/【软件分享】优酷小書版V8.6.8，极致去广精简页面！/index.html","6c113d766760551b63d90b0d181cdeea"],["/2023/08/16/【软件推】某博大赛助手1.0v 一款养眼APP/index.html","eba77be5a73e1b927eedb7f547b68f65"],["/2023/08/16/【集合】本周实用软件，期待下一次更新/index.html","15ce162ab5fe497d684187513c2d4b06"],["/2023/08/16/一份很全的天涯神贴合集汇总/index.html","e17aaddc19154da33ca8e32551466287"],["/2023/08/16/介绍一些设计类的网站/index.html","8b00f79e8a648ac6ad55992a6046a622"],["/2023/08/16/倒数日 1.18.1 高级版高级版本/index.html","dfd579e466619e419bacf8e7a1f02c17"],["/2023/08/16/笔趣阁最新纯净版/index.html","dff60618e8ca845babc5e95d2d9589b5"],["/2023/08/16/网站分享# #爱编程# /index.html","8b8e200875a205fe936eecb012ccef16"],["/2023/08/16/网站分享2/index.html","a30a8fcc0c77224bbdcf815afa508a21"],["/2023/08/16/网站分享3/index.html","f2ea578a74c1ab0b57dd7aefb1a76b5c"],["/2023/08/16/醒图 8.1.0高级版耗子修改版/index.html","24ed2acf01dc54a782661fce0cbb80cb"],["/2023/08/19/ 资源帮 解锁版 /index.html","720d37f47256d7949bf6528bec7f5b20"],["/2023/08/19/#Spotify# 最新解锁版v8.8.56.538/index.html","11601a7f63df4035036e03789751ff1c"],["/2023/08/19/Photo Editor 照片编辑器 8.8.1 ，解锁全部功能，移除广告。/index.html","ef43ac2af2dd341b2787554b61dab510"],["/2023/08/19/【分享】Qute终端控制台 v3.106 高级版/index.html","9e7f537d8c4700f2a64e2cb346d226ff"],["/2023/08/19/【分享】极致工具箱1.6.6/index.html","8281b7927e630e978fcb804493129d24"],["/2023/08/19/【周五动漫更新】/index.html","8f441530875757645751a92a6c547413"],["/2023/08/19/小X分身安卓9-13可用vip解锁版本/index.html","33ea55bc694bad026a5f7f3bc58bab66"],["/2023/08/19/网站分享推荐/index.html","731b39149153102df4525d6fcff6d5c9"],["/2023/08/19/美女分享推荐im____neko/index.html","b1ea5231ccba28aad9f30f2298fb0849"],["/2023/08/20/美女分享推荐leeesovelys2/index.html","5763a383de27c23b5e87f01f8c6f075d"],["/2023/08/25/壁纸推荐/index.html","cec0620399f320cf9d08c8f246286981"],["/2023/08/26/美女壁纸分享33/index.html","e6a8904107eee1764e9b0f80cfaca309"],["/2023/08/29/【分享】海豚阅读🔥海量小说免费看，支持飞卢起点/index.html","07af464120ed6adc5340aeac977a2158"],["/2023/08/29/不一样的带壳截图APPHiShoot2iMaterial/index.html","a97a0ad2f1608177470a5e9f969e819c"],["/2023/08/29/美女分享推荐3/index.html","17252138ab126eb792e9fc0d0c89a00f"],["/2023/08/31/2000+小说txt直接拿走，男频女频都有 飞卢刺猬猫菠萝包起点书客晋江/index.html","0893e5851b4ed5075aebdbee4d07c11b"],["/2024/02/03/测试3/index.html","50159ef1d78cca527de66f43b8442142"],["/2024/02/04/永久免费使用！番茄畅听可听有声书！可看小说[玫瑰]/index.html","ded5323b8bd7ad81af236029ce5b398d"],["/2580.html","3f8cdc9ebc1004aa39fa006a8214a40c"],["/25802580.html","bb4880e554012331382f8159b9a19a6f"],["/258025802580.html","07666ebd42cb3fa95a470dca51a9e996"],["/9999/09/09/文章/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/9999/09/09/文章/Adsterra.html","4ec78614dc4c91839cc065a9f223743f"],["/9999/09/09/文章/Metrial822.png","4deb8d4f959f9d19c81bc44a10fc3cb1"],["/9999/09/09/文章/PlugRush.html","dd4039bbf02d2fba1408cbc2b534dcc5"],["/9999/09/09/文章/Popcash.html","1eb441204a135f6a916f0ee49eebe255"],["/9999/09/09/文章/PropellerAds.html","0a9d272318df792bed59e89369f12b33"],["/9999/09/09/文章/RevenueHits.html","68661af826e3e5312ed722d70aeaad69"],["/9999/09/09/文章/Slimspots.html","8a4e1b3220a9b7bab0b5bbf6aded0064"],["/9999/09/09/文章/TrafficShop.html","8e12e0520e2327d25b4d95eaa99af538"],["/9999/09/09/文章/Yllix.html","c501fcd268f92f9176cf867a45086467"],["/9999/09/09/文章/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/9999/09/09/文章/index.html","41b312d0b8d4182050b4ef203a628313"],["/9999/09/09/测试 (1)/index.html","befaf078e2dad4397ef6eab3f8b4073e"],["/OUnion.html","c78d92d6ff23de09c5a3637e573d664d"],["/OUnion2.html","4ec3f1777d936abf9fc9dbe86b0ee1a9"],["/archives/2020/07/index.html","2c8c1a81ca651ef30042eabb4ceca1a0"],["/archives/2020/index.html","1d059773b384d2158b530305a672c01a"],["/archives/2021/10/index.html","0e8f3170059b2dab210f124888e3139f"],["/archives/2021/11/index.html","eb2d693eff007abea0f87cb1aad65446"],["/archives/2021/12/index.html","965cdc468eb1338f369bb98f8b883304"],["/archives/2021/index.html","4ab5e053c52dfa3d38d7481b0228ec4b"],["/archives/2022/01/index.html","f683b25215e3303684d50bef9cf4b69c"],["/archives/2022/07/index.html","a694e1723bf0b0b9c216426195dc8c7e"],["/archives/2022/index.html","41fdff6f4e11eba5e25d21a56089df3d"],["/archives/2023/07/index.html","13039ec8fa213976bf034857c2b00b1d"],["/archives/2023/08/index.html","87710cd627f82eb0e1a87b1cb7bdf23c"],["/archives/2023/08/page/2/index.html","e1a70c00848e66c2a005310684f069fd"],["/archives/2023/08/page/3/index.html","c95f8699b2d15c83d46072cffaff0020"],["/archives/2023/index.html","fd423d95194586328a2f269c70f8e830"],["/archives/2023/page/2/index.html","2fdfa9a4656c97075d419fd52f18d1cb"],["/archives/2023/page/3/index.html","d206f05ef6bd32015513ccb3e5c9b4be"],["/archives/2023/page/4/index.html","20ef54f8beccee8917c1582789b74df1"],["/archives/2024/02/index.html","7643d43d04a06614ed970a69b7b7c659"],["/archives/2024/index.html","74270ada4f571b3d75a40d1dcc93960f"],["/archives/9999/09/index.html","c92d68313201878829115a6d9f120027"],["/archives/9999/index.html","444e02a9a321969609ca40fa088dc32a"],["/archives/index.html","92d09ede4f098bb43fb31fa1d21fc8f5"],["/archives/page/2/index.html","d4f49a1c74116d797e747d769c6e5e60"],["/archives/page/3/index.html","1f259fd99b249504282319fcf55fa8bd"],["/archives/page/4/index.html","a7eef93002cee0e77e0f7259b61cad91"],["/archives/page/5/index.html","56cc5180446636f954cbd868ef420437"],["/artitalk/index.html","fe8c5d09c97a004770e482f65a5adbf7"],["/categories/categories/index.html","578520d1468e770e58ed6478235f45b7"],["/categories/html/index.html","cf707264534ab95a898b0d934663a4b1"],["/categories/index.html","d95fac613e9e95addbcf58610a1abf0a"],["/categories/lua代码/index.html","ab7a3f0e8801bad3d062f44c13205928"],["/categories/作者自用软件库推荐/index.html","4419a79c927b7b774015bad25eb6e761"],["/categories/动漫网站推荐/index.html","6a07905bcbdc1f226ae7a747df8ef5a2"],["/categories/国外网站推荐/index.html","ba334cfdcbf13a900953a3fd046ecfbd"],["/categories/小工具网站推荐/index.html","ad0bc3049df17d4c33614fce7cadcb24"],["/categories/小说网站推荐/index.html","280a7b67c699f8ee0fb134c6abaf4404"],["/categories/应用市场网站推荐/index.html","caf561204325ede569064ee120ed9f05"],["/categories/影视网站推荐/index.html","eb0a9c2da92b9f370312554a5504627c"],["/categories/我的开发/index.html","db174b60719e38c6bb8138df5eb9eeb3"],["/categories/文章推荐/index.html","cb8c2ea1e9d14b0fd52e569701df6b0f"],["/categories/文章收录推荐/index.html","7caeaf2bed0d16b10c577476251b36cd"],["/categories/文章转载/index.html","c9fdda747d5e9d90e97e8ba0d78f80eb"],["/categories/海贼王/index.html","2b83576d7d8874481906384c04d52d29"],["/categories/漫画网站推荐/index.html","b0e721c6064467bdd0e0e66e7bf61a83"],["/categories/直播网站推荐/index.html","eace55b0eeb8a03d42f27324b542f397"],["/categories/网盘推荐/index.html","477fdec81d5eceefdb5ce5fdc08a65fd"],["/categories/网站分享推荐/index.html","fd36b14c334e6a5f050d197c6a3b404b"],["/categories/美图网站推荐/index.html","65ab9aa465dc591a1ad81df2ee22cf77"],["/categories/美女分享推荐/index.html","5f0e247999afcd3e7bab1d07185e8526"],["/categories/美食推荐/index.html","8965d9c7efa504189a4ab35b91014bee"],["/categories/表情包网站推荐/index.html","76a6ae5ffdc52d6798131076f58b05b0"],["/categories/资源网站推荐/index.html","802d72d2bcd959e6d8048c4546e09c96"],["/categories/软件库推荐/index.html","d0832699e247ae897965c6dd93f7b7ab"],["/categories/软件推荐/index.html","dab29246129601bff1f5b9835784fad5"],["/categories/软件推荐/page/2/index.html","9904a4e8f57835f0503f2d8778c3e8c2"],["/categories/软件推荐/page/3/index.html","b415cd6822b3b0eb2f440e9a69c97f82"],["/categories/闲聊杂谈/index.html","25759532631516432164a4bcae8119c5"],["/categories/阿里云盘推荐/index.html","f7ac50ba91203f6ed4c466807f4b1bbb"],["/css/2style.css","614d91358f6b26c603779d5bc822bc7e"],["/css/custom.css","15d6e5b6ce6cd6d4a2b0effe06244960"],["/css/custom/fixed_comment.css","2e141a3fe37f0744338976e58b94189d"],["/css/custom/fixed_comment.js","f9edc32e935c98b69ad616c7a39b4418"],["/css/eurkon/eurkon.css","3459931d543ce237af6e62e6c6cbaa46"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","ebbdb2eb5ea389951ec8699a520f23af"],["/css/mobie.css","524958f19b70239106d6aaa5decb86e2"],["/css/player.css","bf081626a42aae043604021ed40f6ef4"],["/css/reset.css","7f67c3ba6c820d0a0464ccb609f3c830"],["/css/style.css","219b80c89b65ad80bc928a568667a98b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/viewer.min.css","ec961a06f9292db17c03e324362159da"],["/equipment/index.html","5b1a0c6f1eeec08a435496e4b4d28d79"],["/googleb0c521173282337f.html","a1202143e8bd8d5fc83b37ca723da70d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/ADmBp2LrCIkFXYK.png","7f48216e5680c4fa4c81cc5785dc1dc4"],["/img/djT6INolfML3Yra.png","65788761dd1308b336f195b6a948bcb6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ddc9d92616cb313216ad922958674021"],["/js/card_weibo.js","5fa4471b13d0bd4315be295663388e16"],["/js/eurkon/color-thief.min.js","96805f1e38ea0b713936ec18e7b450a0"],["/js/eurkon/eurkon.js","26508939068f37c6e7f24897be41d48e"],["/js/eurkon/refresh.js","6de41747d67d724d4b7d619b87869443"],["/js/eurkon/rgbaster.min.js","90546dec3661d234ff3ee6f6bcad527c"],["/js/main.js","d66f147747b5511577de5e46affcb620"],["/js/search/algolia.js","cb2b0f7e1fcea9d7485a395f69c94468"],["/js/search/local-search.js","483487f7261461207536fd9bde606418"],["/js/tw_cn.js","dec7bff10294055b65e3dd37af6fb3c1"],["/js/utils.js","2ff83587b5454af8cbd934f5caf6b94c"],["/lazysizes.min.js","45bacd312d5098b4b59f563d8756c15d"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","aacc0d6df4a2549d8e736845cd45a377"],["/luago.html","fc0968736e7618e0db7e0e9fe83ffe90"],["/luago.js","3d9c4c576287f2d0a92bc064492e8996"],["/page/2/index.html","6a7e5d4d9b32c865c64dd76eb0894d82"],["/page/3/index.html","5f01188e9033cfdbae58c4763a3c81b3"],["/page/4/index.html","15d5939ee9ca48dfb591f608e7110abc"],["/page/5/index.html","3f059a7734d25c6e0142f2d4ee808fad"],["/page/video/index.html","d683eae915eb5991fe002894ae0facaf"],["/pinterest-bda12.html","d6f86ee6493eeb0791fed46cc662afd2"],["/pluginsSrc/@docsearch/css/dist/style.css","7b9b2d58a76a948574c558639f28d1fb"],["/pluginsSrc/@docsearch/js/dist/umd/index.js","4016eb74e9eea32f3bd7ef5724c15ba5"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.css","023b19fbbba0616cab34685d3725248a"],["/pluginsSrc/@fancyapps/ui/dist/fancybox/fancybox.umd.js","b7bf93ec2164a973e4c371630c3cbed7"],["/pluginsSrc/@fortawesome/fontawesome-free/css/all.min.css","9402848c3d4bbc710c764326f8b887c9"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf","1931427c23716bb4ff98d03627f7137c"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2","b6356c957274676e6571c1ff5e11c9a8"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf","a0cc1c8265e3163aa654a5284ea11ace"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2","023a4a925fa3fce0f66b769ef6bbb264"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf","25914cfeafced317e1a0372187fbb2b9"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2","6c4eee562650e53cee32496bdfbe534b"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.ttf","71808e147dc6d82c198a4ba292c0cb69"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.woff2","c9e50ccabe9e36f370272197595ea1e5"],["/pluginsSrc/@waline/client/dist/waline.css","f9a6e928169c9000c7fdc6e2d4fe39ef"],["/pluginsSrc/@waline/client/dist/waline.js","8943d235ad431f230d318a492dbcd4ee"],["/pluginsSrc/abcjs/dist/abcjs-basic-min.js","8b8171801585c9fb1423714323153074"],["/pluginsSrc/algoliasearch/dist/algoliasearch-lite.umd.js","9a98b48de33921bd6161cd35db7b5edd"],["/pluginsSrc/aplayer/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/pluginsSrc/aplayer/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/pluginsSrc/artalk/dist/Artalk.css","a3fe0dc2d1afb65e62766d9c4be2160a"],["/pluginsSrc/artalk/dist/Artalk.js","b2bff60c28963670c3f4cd28f482be7c"],["/pluginsSrc/blueimp-md5/js/md5.min.js","2f577924085ebbe12e29f3ff706397d0"],["/pluginsSrc/butterfly-extsrc/dist/activate-power-mode.min.js","eb1c75760fdc1249dfb74db05ba39a5c"],["/pluginsSrc/butterfly-extsrc/dist/canvas-fluttering-ribbon.min.js","bee7265e6d121d3e2bbe25592163fa22"],["/pluginsSrc/butterfly-extsrc/dist/canvas-nest.min.js","b4b3398371256eb9c74a0001eb5fa25d"],["/pluginsSrc/butterfly-extsrc/dist/canvas-ribbon.min.js","15fcd2b43b47baa5418ae4004cd2c802"],["/pluginsSrc/butterfly-extsrc/dist/click-heart.min.js","8626378d634c886884e3f94ff060182e"],["/pluginsSrc/butterfly-extsrc/dist/click-show-text.min.js","56edbcd0697d5c8056d0d40d9bbeb26a"],["/pluginsSrc/butterfly-extsrc/dist/fireworks.min.js","b0f0a5c077706616aef9224fa0b4df76"],["/pluginsSrc/butterfly-extsrc/metingjs/dist/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/css/share.min.css","4b6e6c4b12b9206824231920ed3326c8"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/pluginsSrc/disqusjs/dist/browser/disqusjs.es2015.umd.min.js","1090676c68ac556956d14d40353c2da5"],["/pluginsSrc/disqusjs/dist/browser/styles/disqusjs.css","8edf59e04dfb9bb9b73d185e651262e0"],["/pluginsSrc/flickr-justified-gallery/dist/fjGallery.css","d163683c883a1f80bc86404561f8004d"],["/pluginsSrc/flickr-justified-gallery/dist/fjGallery.min.js","9d1c40a9e1b26d1fc2c2a1fbd959f01e"],["/pluginsSrc/gitalk/dist/gitalk.css","8476031a633732dff9875feae0890070"],["/pluginsSrc/gitalk/dist/gitalk.min.js","8a817782fe4a94b4d2499bcfce04f8c3"],["/pluginsSrc/instant.page/instantpage.js","ae11493d70a8ce9fa776cc7aec1be764"],["/pluginsSrc/instantsearch.js/dist/instantsearch.production.min.js","b1050a43601e4ac24b92f99e67f04b68"],["/pluginsSrc/katex/dist/contrib/copy-tex.min.js","c3a3efd7d609e2e905aa386fc0f7d18e"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.ttf","56573229753fad48910bda2ea1a6dd54"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff","10824af77e9961cfd548c8a458f10851"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff2","66c678209ce93b6e2b583f02ce41529e"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf","497bf407c4c609c6cf1f1ad38f437f7f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff","de2ba279933d60f7819ff61f71c17bed"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2","a9e9b0953b078cd40f5e19ef4face6fc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf","e6fb499fc8f9925eea3138cccba17fff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff","a25140fbe6692bffe71a2ab861572eb3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2","08d95d99bf4a2b2dc7a876653857f154"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf","b9d7c4497cab3702487214651ab03744"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff","40934fc076960bb989d590db044fef62"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2","796f3797cdf36fcaea18c3070a608378"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf","97a699d83318e9334a0deaea6ae5eda2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff","e435cda5784e21b26ab2d03fbcb56a99"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2","f9e6a99f4a543b7d6cad1efb6cf1e4b1"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.ttf","8e431f7ece346b6282dae3d9d0e7a970"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff","4cdba6465ab9fac5d3833c6cdba7a8c3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff2","a9382e25bcf75d856718fcef54d7acdb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf","52fb39b0434c463d5df32419608ab08a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff","5f875f986a9bce1264e8c42417b56f74"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2","d873734390c716d6e18ff3f71ac6eb8b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.ttf","39349e0a2b366f38e2672b45aded2030"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff","8ffd28f6390231548ead99d7835887fa"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff2","652970624cde999882102fa2b6a8871f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.ttf","818582dae57e6fac46202cfd844afabb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff","f1cdb692ee31c10b37262caffced5271"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff2","f8a7f19f45060f7a177314855b8c7aa3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf","6589c4f1f587f73f0ad0af8ae35ccb53"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff","48155e43d9a284b54753e50e4ba586dc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2","1320454d951ec809a7dbccb4f23fccf0"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.ttf","fe5ed5875d95b18c98546cb4f47304ff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff","ed7aea12d765f9e2d0f9bc7fa2be626c"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff2","d8b7a801bd87b324efcbae7394119c24"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf","f2ac73121357210d91e5c3eaa42f72ea"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff","0e897d27f063facef504667290e408bd"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2","ad546b4719bcf690a3604944b90b7e42"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf","f60b4a34842bb524b562df092917a542"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff","ef725de572b71381dccf53918e300744"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2","e934cbc86e2d59ceaf04102c43dc0b50"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf","3243452ee6817acd761c9757aef93c29"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff","5f8637ee731482c44a37789723f5e499"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2","1ac3ed6ebe34e473519ca1da86f7a384"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.ttf","a189c37d73ffce63464635dc12cbbc96"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff","a82fa2a7e18b8c7a1a9f6069844ebfb9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff2","1b3161eb8cc67462d6e8c2fb96c68507"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.ttf","0d8d9204004bdf126342605f7bbdffe6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff","4788ba5b6247e336f734b742fe9900d5"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff2","82ef26dc680ba60d884e051c73d9a42d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.ttf","1fdda0e59ed35495ebac28badf210574"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff","b0628bfd27c979a09f702a2277979888"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff2","95a1da914c20455a07b7c9e2dcf2836d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.ttf","963af864cbb10611ba33267ba7953777"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff","4de844d4552e941f6b9c38837a8d487b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff2","9108a400f4787cffdcc3a3b813401e6a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.ttf","27a23ee69999affa55491c7dab8e53bf"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff","3045a61f722bc4b198450ce69b3e3824"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff2","61522cd3d9043622e235ab57762754f2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf","6bf4287568e1d3004b54d5d60f9f08f9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff","0e0460587676d22eae09accd6dcfebc6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2","b8b8393d2e65fcebda5fa99fa3264f41"],["/pluginsSrc/katex/dist/katex.min.css","1612bcd72cc503f18e2f302b3a2addd1"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/tex.js","29662ef385c73c4dd9e99b17cd2d579b"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/pluginsSrc/mathjax/es5/tex-mml-chtml.js","2e00d51c98dbb338e81054f240e1deb2"],["/pluginsSrc/medium-zoom/dist/medium-zoom.min.js","348914dc9144b3441a2a0c9687604a16"],["/pluginsSrc/mermaid/dist/mermaid.min.js","f86704aa977453537b4e942203b83656"],["/pluginsSrc/node-snackbar/dist/snackbar.min.css","4220368aced9a5ce011f2ce9bd8b1035"],["/pluginsSrc/node-snackbar/dist/snackbar.min.js","8f19a3527021a6268cd8488a5debe7f8"],["/pluginsSrc/pace-js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/pluginsSrc/pace-js/themes/blue/pace-theme-minimal.css","7bba84cb68736f6ea9ae77cd934d995a"],["/pluginsSrc/pangu/dist/browser/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/pluginsSrc/pjax/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/pluginsSrc/prismjs/plugins/autoloader/prism-autoloader.min.js","4f48958b1802a9d99581aa5ab1e3f621"],["/pluginsSrc/prismjs/plugins/line-numbers/prism-line-numbers.min.js","ffdf7bdb8ddaf0c89a4e4225e1086264"],["/pluginsSrc/prismjs/prism.js","54e45d657b6a3471bd7cc72d0873c0b1"],["/pluginsSrc/twikoo/dist/twikoo.all.min.js","6e50dec5aa48cee1cedee5031e205c9e"],["/pluginsSrc/typed.js/dist/typed.umd.js","3ba6a3f6e22122d8f5ed22c423299981"],["/pluginsSrc/valine/dist/Valine.min.js","c748c413b03bcdb2064c84bc9e06613c"],["/pluginsSrc/vanilla-lazyload/dist/lazyload.iife.min.js","1ce4f414981382d7d65435a2412e09eb"],["/sw-register.js","1c502a9f818bf7d71c3563bdda14b274"],["/tags/index.html","9472567a8c3248b0649ca18b79674ee2"],["/tags/tags/index.html","22a5ebe4ce304e21e978c64985b203b9"],["/tags/tags/page/2/index.html","256770c779520ad935cd232484f869a5"],["/tags/tags/page/3/index.html","dd63aa832b1be9abd76a1644d27f395a"],["/tags/tags/page/4/index.html","fff436bc191d0724fef4fd64701b3a3a"],["/untitled.js","60b6022d611f9ba01a721942cc5d90eb"],["/userAgent.js","428949435f0f1dce3eb22d209e1fee61"],["/video/index.html","612c9fd0ed987f5034a98cd3f96afe75"],["/x-frame-bypass.js","d0e55673f7b13b00bbe5c2182932c465"],["/万能api视频解析/README.html","9a64bf4edad1202363c2d6b8fa534c01"],["/万能api视频解析/index.html","b44d17c74a060dd0efa1c1cc1c29f427"],["/小姐姐随机播放/index.html","90269a0706320cfdb5560418c82ee5a3"],["/小姐姐随机播放/static/css/bootstrap.min.css","bbace035fd25209e34be801cdeaf7a17"],["/小姐姐随机播放/static/css/images/bj.jpg","7014c63c5ba024799b083089e2429e2c"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/小姐姐随机播放/static/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/小姐姐随机播放/static/js/vidwo.js","492611017763533df2ad01defecc7fb1"],["/短视频/error.png","c0a42e5fa294aae62a201f0485a15a3e"],["/短视频/index.html","e5dfb0e4dd7ec20632070248a61c74da"],["/短视频/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/短视频/loading.png","5d9953167459e98abce58311c8031d98"],["/简单导航/404.html","63c9f24b15167b37e132229d013b1578"],["/简单导航/README.html","1e1e992aa8d0cd5a4b72be4bb455b0e5"],["/简单导航/index.html","bd0247b2ca49aaf359126cf330f51dd9"],["/简单导航/noonetodie/images/gdyx.png","a05471cce0082b41fbae133e67c1b6e2"],["/简单导航/noonetodie/images/wu.png","29de547658d091403d3242ef4266dc73"],["/简单导航/noonetodie/images/xiaoren.png","232b9342b8c5c61b56e72bab03076ffe"],["/简单导航/noonetodie/images/ygdbns.jpg","b6699f201e2ab40e54b64745cd2ea80c"],["/简单导航/noonetodie/index.html","cdf70535c52a1bab4fcf78c131411969"],["/简单导航/noonetodie/js/main.js","bd66da33e99276a1d187abdfef69bfe3"],["/简单导航/noonetodie/js/require.js","2a31ed34ccf92aa78c5c7ff5d4c39a26"],["/简单导航/win12/README.html","babd1d8604ddca4325c4edff1a10ddd1"],["/简单导航/win12/apps/icons/about/info.svg","a837ec9aaf652461cad073742fb8d89b"],["/简单导航/win12/apps/icons/about/update.svg","0c8c8ae96f167f403e14d7d3c9aa6b50"],["/简单导航/win12/apps/icons/explorer/disk.png","89df4f1a995fe5cabfa93a7ca15ab2d8"],["/简单导航/win12/apps/icons/explorer/diskwin.png","8f95b402294b0183543920364af3270b"],["/简单导航/win12/apps/icons/explorer/od.png","93fc2191ab284ce29a08e41a2250e95e"],["/简单导航/win12/apps/icons/explorer/qa.png","0e455f04220cf708a4d25df1e6dd9763"],["/简单导航/win12/apps/icons/explorer/rb.png","3ffbde87932c94cb55dc5d7e6cce49d6"],["/简单导航/win12/apps/icons/explorer/thispc.png","605323c51660aff3db4f27d0131d4fb1"],["/简单导航/win12/apps/icons/explorer/tool-copy.png","b78f25678bc1ba7fc5d2d6a4fb4a1933"],["/简单导航/win12/apps/icons/explorer/tool-cut.png","606378803bbafce26e9488030e82b4e6"],["/简单导航/win12/apps/icons/explorer/tool-new.png","403feb6235f6551cfd20dc970886a6be"],["/简单导航/win12/apps/icons/explorer/tool-paste.png","d5b06481b2887acd6ad5e3f399858e92"],["/简单导航/win12/apps/icons/explorer/tool-rename.png","56f0a1bb60c7bc13873ed4efca6ce8d6"],["/简单导航/win12/apps/icons/explorer/tool-sort.png","57b8f61c524fe9e894956abc0642e589"],["/简单导航/win12/apps/icons/explorer/tool-view.png","7844ce1cd03ed70b49ce47971440739e"],["/简单导航/win12/apps/icons/setting/apps.png","87bde3db35fcc7deae476223243f8ea8"],["/简单导航/win12/apps/icons/setting/blueteeth.png","1f5d3d76dd5cc368f4389f7d8ad28803"],["/简单导航/win12/apps/icons/setting/game.png","3b876313e35ed7cf27cdac26542b10cf"],["/简单导航/win12/apps/icons/setting/help.png","7f3ff22100323605dc256b8fd98829d3"],["/简单导航/win12/apps/icons/setting/icons.woff2","2ec186e1afec55ea3f2752eaf6dea238"],["/简单导航/win12/apps/icons/setting/network.png","adc513bff915108429498a7877268c29"],["/简单导航/win12/apps/icons/setting/personal.png","5bf45299de5e59cd47d4cb7450b0841d"],["/简单导航/win12/apps/icons/setting/safe.png","7badcf2f0c00f7a326a54d668fd1d435"],["/简单导航/win12/apps/icons/setting/system.png","fcf935c901ecd434f2fc1d5b62b636fa"],["/简单导航/win12/apps/icons/setting/time.png","72885b049d05e00aac0ef938606c52c4"],["/简单导航/win12/apps/icons/setting/update.png","968bc43be6076815e94589b122f39c53"],["/简单导航/win12/apps/icons/setting/user.png","43fb0b7556928ab822e482de64248687"],["/简单导航/win12/apps/style/about.css","c75d7cb412ff8a4ba5242a5f0a7f1fdc"],["/简单导航/win12/apps/style/calc.css","09234cb9b14fdf181b7dbddba3b41fee"],["/简单导航/win12/apps/style/explorer.css","a8346faca5487405c62575c99c61b203"],["/简单导航/win12/apps/style/setting.css","0dce996d85c5ac6e700f9b774ba575cf"],["/简单导航/win12/base.css","9e63250bbbad4e23ec2c80de035e42bf"],["/简单导航/win12/bg-dark.svg","4c8fed16d52c6b84b71d7b5c0f5acbc7"],["/简单导航/win12/bg.svg","9ed19a94566ac6946e4ab8c02e1b2c2f"],["/简单导航/win12/bootstrap-icons.css","8af014a7585ec6b944e3dc5cfd77b89a"],["/简单导航/win12/desktop.css","2eb10217a3e8a5ace18ca753e218ad74"],["/简单导航/win12/desktop.html","557db3709e343945c779e50399a22fc6"],["/简单导航/win12/desktop.js","19eef01c303d7bd548f31384f381f305"],["/简单导航/win12/fonts/bootstrap-icons.woff","be6df3f0c9855796ae0c099ee4ca43ce"],["/简单导航/win12/fonts/bootstrap-icons.woff2","31e1300d419245fd27614630601dc74d"],["/简单导航/win12/icon/about.png","02b078c4249f812ff0fba8f363c3374d"],["/简单导航/win12/icon/calc.png","f4d98a38e77f8eec4acf121d244ea2ba"],["/简单导航/win12/icon/camera.png","9e977d0605e9452a05db674bbddd4e4c"],["/简单导航/win12/icon/defender.png","86584d66cd939b45a063b1e6a4bbb564"],["/简单导航/win12/icon/explorer.png","c45749adb3de4dc9e1bda0a9fc1412e1"],["/简单导航/win12/icon/feedback.png","d74d3809ba1311cbad94ec1e7737ccd0"],["/简单导航/win12/icon/files/excel.png","9737aca13242b71cf76bd4121c965ca1"],["/简单导航/win12/icon/files/img.png","d1c6411703b689d31a365302a7228b10"],["/简单导航/win12/icon/files/ppt.png","76a0b864def30d5a985c3e99ba7d1c7b"],["/简单导航/win12/icon/files/word.png","3612aac2f6e8c58ac57c51584f49a4b2"],["/简单导航/win12/icon/folder/docs.png","dfa39b3a8d40b774873a8275fb260a86"],["/简单导航/win12/icon/folder/music.png","90089cea05d1f0240324e52871e35106"],["/简单导航/win12/icon/folder/pics.png","2c9c768e2c91cca37063eee8f960fc37"],["/简单导航/win12/icon/notepad.png","2260a01f65ee7798f382ed5afb157821"],["/简单导航/win12/icon/setting.png","e050ccc7621dab2bc49f226a91b093c5"],["/简单导航/win12/icon/store.png","23c0e553951ba31b1f10644f09dbc594"],["/简单导航/win12/icon/taskmanager.png","1344f0c1a1e9ad3203c5e224e347cc0a"],["/简单导航/win12/icon/teams.png","2b7969712645822d03c13cd7c7dc9ca8"],["/简单导航/win12/icon/terminal.png","1a3138fa728bf4172e24024b70a221f5"],["/简单导航/win12/icon/user.svg","64e91eb73625fb7b3d99295bcc42c588"],["/简单导航/win12/jq.min.js","7c14a783dfeb3d238ccd3edd840d82ee"],["/简单导航/win12/reload.html","b18f04f971c3d36315a1a79e151dba80"],["/简单导航/win12/shutdown.html","5f0bc8b8058fc83c6278418d60fa189e"],["/简单导航/win12/start.html","0fc718c9680a26cc8c79b4bd21609317"]];
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
