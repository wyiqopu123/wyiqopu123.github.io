class LinkEvent {
    constructor() {
        this.init();
    }
    init() {
        this.setReferrer();
        this.listenLinkClick();
        this.listenWindowOpen();
        window.addEventListener("popstate", () => this.setReferrer());
    }
    getReferrer() {
        //读取当前来源的内容
        return this.referrer
    }
    //设置引荐网址来源
    setReferrer() {
        //根据业务自行处理
        this.referrer = '&token=23232'
    }
    //监听a链接的点击
    listenLinkClick() {
        document.body.addEventListener("click",function (event) {
                var target = event.target || event.srcElement;      // 兼容处理
                if (target.nodeName.toLocaleLowerCase() === "a") {    // 判断是否匹配目标元素
                    if (event.preventDefault) {     // 对捕获到的 a 标签进行处理
                        event.preventDefault();
                    } else {
                        window.event.returnValue = true;
                    }
                    this.choosePush(target); // 处理完 a 标签的内容，重新触发跳转，根据原来 a 标签页 target 来判断是否需要新窗口打开
                }
            }.bind(this)
        );
    }
    //判断是否需要新窗口打开
    choosePush(el) {
        const target = el.getAttribute("target");
        const href = el.getAttribute("href");
        const url = this.formatNavigatedUrl(href);
        if (target === "_blank") {
          //  window.open(url);   // window.reopen(url);
            window.location.href =  "luago.html?id=" + url;
        } else {
         //   window.location.href =  "luago.html?id=" + url;
            window.open(url);   // window.reopen(url);
        }
    }
    //监听window.open方法的调用
    listenWindowOpen() {
        var orgOpen = window.open;
        window.open = function (...args) {
            args[0] = this.formatNavigatedUrl(args[0], this.getQueryVariable(args[0]));
            return orgOpen(...args);
        }.bind(this);
    }
    //监听window.location方法的调用(无法实现)
    listenWindowLocation() {
        //因为window.location方法为原生属性，不允许重写
        //使用 Object.defineProperty以及Proxy都不能监听到set行为
        //只能是进行全局调用$formatNavigatedUrl进行已有url替换
    }
    /**
     * 处理网址并添加参数
     * @param {string} url https://www.baidu.com
     * @returns https://www.baidu.com?name=webapp
     */
    formatNavigatedUrl(url, params = {}) {
        const origin = url.split("?")[0];
        const searchParams = this.getQueryVariable(url)
        searchParams['referrer'] = this.getReferrer()
        //处理自定义参数
        Object.keys(params).forEach(key => {
            searchParams[key] = params[key]
        })
        let formatParams = this.objetToQuery(searchParams)
        return (url = `${origin}${formatParams?`?${formatParams}`:''}`);
    }
    /**
     * 获取url参数
     * @param {string} url 
     * @param {string} variable 需要取值的key，不传为取所有
     */
    getQueryVariable(url, variable) {
        var query = url.split("?")[1] || '';
        var vars = query.split("&");
        let params = {}
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            (pair[0] && pair[1]) && (params[pair[0]] = pair[1].split('#')[0].split('/')[0])
            if (variable && pair[0] == variable) {
                //特殊处理 http://localhost:9528/nested/menu2?ref=34343343#/dashboard
                //这种url截取的参数会带34343343#/dashboard。所以要截掉#后面的多余部分
                return pair[1].split('#')[0].split('/')[0];
            }
        }
        return variable ? '' : params;
    }
    //对象转url参数
    objetToQuery(searchParams) {
        let arr = Object.keys(searchParams)
        return arr.reduce((p, c, index) => {
            p += `${c}=${searchParams[c]}${index < arr.length - 1 ? '&' : ""}`
            return p
        }, '')
    }
}
window.LinkEvent = LinkEvent;
//   export default LinkEvent;
new LinkEvent();
