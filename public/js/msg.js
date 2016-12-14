/**
 * Created by Administrator on 2016/12/13 0013.
 */


//var news = document.getElementById('news');
//var notice = document.getElementById('notice');
//var demand = document.getElementById('demand');
//
//news.addEventListener('touchend',function(){
//	location.href = 'msg_news.html'
//});
//notice.addEventListener('touchend',function(){
//	location.href = 'msg_notice.html'
//});
//demand.addEventListener('touchend',function(){
//	location.href = 'msg_demand.html'
//});

var news =document.getElementById("news");
var notice =document.getElementById("notice");
var demand =document.getElementById("demand");

news.addEventListener("touchend",function(){
	location.href="msg_news.html"
});
notice.addEventListener("touchend",function(){
	location.href="msg_notice.html"
});
demand.addEventListener("touchend",function(){
	location.href="msg_demand.html"
});