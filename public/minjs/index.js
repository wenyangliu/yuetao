var startX,startY,moveX,moveY,times=0,timeOut,dom=document.getElementsByClassName("md")[0];dom.addEventListener("touchstart",function(e){console.log("touchstart");var t=e.touches[0];startX=t.clientX,startY=t.clientY,times=0,timeOut=setInterval(function(){times+=100},100)}),dom.addEventListener("touchmove",function(e){console.log("touchmove");var t=e.touches[0];moveX=t.clientX,moveY=t.clientY}),dom.addEventListener("touchend",function(e){console.log("touched"),console.log(startX,startY,moveX,moveY),moveY-startY>=20?dom.style.color="red":startY-moveY>=20&&(dom.style.color="blue");var t=parseInt(window.getComputedStyle(document.getElementsByClassName("md")[0]).fontSize);console.log(t),moveX-startX>=100?(t+=2,document.getElementsByClassName("md")[0].style.fontSize=t+"px"):startX-moveX>=100&&t>=14&&(t-=2,document.getElementsByClassName("md")[0].style.fontSize=t+"px"),clearInterval(timeOut),console.log(times),times>1e3&&console.log("tap")}),$.ajax({url:"/api/index",type:"get",dateType:"json",success:function(e){console.log("result",e)},complete:function(e){console.log("res",e)}});