$(".header-conf").on("tap",function(){$(".mask").show(),$(".cancel-alert").show(),$(".booking-conf").on("tap",function(){$(".cancel-alert").hide(),$(".publish-alert").show()})}),$(".tel-icon").on("tap",function(){$(".mask").show(),$(".cancel-alert").show(),$(".cancel").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()})}),$(".booking-room").on("tap",function(){$(".header").css("background","none"),$(".icon-back").css("background","none"),$(".mask").css("background","#ccc").show(),$(".booking-alert").show(),$(".sure").on("tap",function(){location.href="../order/order_detail.html"}),$(".cancel").on("tap",function(){location.href="../order/order.html"})}),$(".reson-li").on("tap",function(){var n=$(this).index();$(this).toggleClass("active"),2==n&&$(".reson-input").toggle()}),$(".cancel-btn").on("tap",function(){$(".mask").show(),$(".cancel-order").show()}),$(".upload-conf").on("tap",function(){$(".mask").show(),$(".publish-alert").show()}),$(".cancel-upload").on("tap",function(){$(".mask").show(),$(".upload-alert").show()}),$(".change-btn").on("tap",function(){location.href="../order/booking_change.html"}),$(".time-house").on("tap",function(){$(".mask").show(),$(".cancel-alert").show(),$(".cancel").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()}),$(".sure").on("tap",function(){$(".mask").hide(),$(".cancel-alert").hide()})});