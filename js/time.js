window.onload=function starttime(){
        time(h1,'2024/3/15 18:00:00');     // 添加时间
        ptimer = setTimeout(starttime,1000); // 添加计时器
}
    function time(obj,futimg){
        var nowtime = new Date().getTime(); // 现在时间转换为时间戳
        var futruetime =  new Date(futimg).getTime(); // 未来时间转换为时间戳
        var msec = futruetime-nowtime; // 毫秒 未来时间-现在时间
        var time = (msec/1000);  // 毫秒/1000
        var day = parseInt(time/86400); // 天  24*60*60*1000
        var hour = parseInt(time/3600)-24*day;    // 小时 60*60 总小时数-过去的小时数=现在的小时数
        var minute = parseInt(time%3600/60); // 分 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
        var second = parseInt(time%60);  // 以60秒为一整份 取余 剩下秒数
        obj.innerHTML="时间正在一分一秒的流逝：<br>"+day+"天"+hour+"小时"+minute+"分"+second+"秒"+"<br><span>每个人都会被别人改变，很少有人能真正的影响别人</span>"
}