function autoSwipe(){slideTime=setTimeout(function(){if(swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}},2e3)}var $slider=$(".slider_block"),$sliderCon=$(".slider_container"),$point=$(".point_block"),wd=$(window).width(),lg=$slider.length,allWd=wd*lg,hg=.85*wd;$sliderCon.width(allWd),$slider.width(wd).height(hg);var swipeNow=0,slideTime=null;$sliderCon.on("swipeLeft",function(){if(clearTimeout(slideTime),swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),$sliderCon.on("swipeRight",function(){if(clearTimeout(slideTime),swipeNow>0){var e=--swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),autoSwipe(),$query=$(".query_block"),$(".down-box").hide(),$query.on("tap",function(){var e=$(this),o=e.index();$(".header").addClass("active"),$(".search_box").addClass("active"),$(".query_box").addClass("active"),$(".slider_box").hide(),$(".overdue-list").addClass("active"),e.hasClass("active")?(e.removeClass("active"),$(".down-box").eq(o).hide(),$(".mask").hide()):($query.removeClass("active"),e.addClass("active"),$(".down-box").hide().eq(o).show(),$(".mask").show())}),$(".more .box-right").first().show().next().hide(),$(".more .box-right").first().show().next().next().hide();var $moreLi=$(".more-li");$moreLi.on("tap",function(){var e=$(this).index();$moreLi.removeClass("active").eq(e).addClass("active"),$(".more .box-right").hide().eq(e).show()}),$(".query_price").on("tap",function(){var e=$(this);e.hasClass("active-down")?(console.log("up"),e.removeClass("active-down").addClass("active-up"),$(".overdue-cell").remove().sort(function(e,o){return e.textContent.match(/\d+(?= 元)/)-o.textContent.match(/\d+(?= 元)/)}).each(function(e,o){$(".overdue-list").append(o)}),$(".price-tips").show(),$(".price-tips").html("价格从低到高")):e.hasClass("active-up")?(console.log("normal"),e.removeClass("active-up"),$(".price-tips").hide()):(console.log("down"),e.addClass("active-down"),$(".overdue-cell").remove().sort(function(e,o){return o.textContent.match(/\d+(?= 元)/)-e.textContent.match(/\d+(?= 元)/)}).each(function(e,o){$(".overdue-list").append(o)}),$(".price-tips").show(),$(".price-tips").html("价格从高到低"))}),$(window).on("swipeUp",function(){$(".header").addClass("active"),$(".search_box").addClass("active"),$(".query_box").addClass("active"),$(".slider_box").hide(),$(".overdue-list").addClass("active"),$(".toTop").show()}),$(window).on("swipeDown",function(){$(".header").removeClass("active"),$(".search_box").removeClass("active"),$(".query_box").removeClass("active"),$(".slider_box").show(),$(".overdue-list").removeClass("active"),$(".toTop").hide()}),$(".select-city").on("tap",function(){location.href="../index/select_city.html"}),$(".index-icon").on("tap",function(){location.href="../index/index.html"}),$(".order-icon").on("tap",function(){location.href="../order/order.html"}),$(".news-icon").on("tap",function(){location.href="../msg/msg_news.html"}),$(".info-icon").on("tap",function(){location.href="../info/info.html"}),$(".publish_icon").on("tap",function(){location.href="../publish/publish.html"}),$(".toTop").on("tap",function(){$("html,body").scrollTop(0),$(".toTop").hide()}),$(".collect").on("tap",function(){$(this).toggleClass("active")});