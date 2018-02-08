var u = window.navigator.userAgent;
const isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(u);
const isAndroid = /(Android|Linux)/i.test(u);
const isMobile = 'ontouchstart' in window;
const isWeixin = /MicroMessenger/i.test(navigator.userAgent);
const orientation = 'onorientationchange' in window ? 'orientationchange' : 'resize';  //横竖屏
const clone = (origin) => JSON.parse(JSON.stringify(origin));

const setTime = (callback) => {
    var a = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback){
        return window.setTimeout(function (){
            callback();
        }, 16.7);
    });
    return a(callback);
};
const clearTime = (id) => {
    var a = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (id){
        window.clearTimeout(id);
    };
    return a(id);
};
var scrollMoveTimer = null;
const scrollMove = (options) => {
    options = options || {};
    options.time = options.time || 700;
    options.type = options.type || "ease-out";
    options.y = options.y || 0;
    var start = document.documentElement.scrollTop || document.body.scrollTop;

    var dis = options.y - start;
    var n = 0;
    var count = Math.floor(options.time / 16.7);
    if (!dis) {return false;}

    clearTime(scrollMoveTimer);
    scrollMoveTimer = setTime(base);

    function base(){
        n++;
        var v,cur;
        switch (options.type) {
            case "linear":
              v = n / count;
              cur = start + dis * v;
              break;
            case "ease-in":
              v = n / count;
              cur = start + dis * v * v * v;
              break;
            case "ease-out":
              v = 1 - n / count;
              cur = start + dis * (1 - v * v * v);
              break;
        }
        document.documentElement.scrollTop = document.body.scrollTop = cur;

        if (n === count) {
            clearTime(scrollMoveTimer);
            options.end && options.end();
        }else{
            scrollMoveTimer = setTime(base);
        }
    }
};

export {
    isIos,
    isAndroid,
    isMobile,
    isWeixin,
    orientation,
    clone,
    scrollMove
};