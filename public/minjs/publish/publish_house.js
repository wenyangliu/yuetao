$(".search-input").on("focus",function(){$(".close-icon").show(),$(".close-icon").on("tap",function(){$(this).hide(),$(".search-input").val(" ")})});var $radioList=$(".radio-box .radio-block");$radioList.on("tap",function(){var t=$(this);t.hasClass("selected")||($radioList.removeClass("selected"),t.addClass("selected"))});var $selectTitle=$(".select-title"),$selectList=$(".select-list");$selectTitle.on("tap",function(){$(this).siblings(".select-list").toggle()}),$selectList.find(".select-li").on("tap",function(){var t=$(this),s=t.parent(".select-list"),e=t.text(),i=t.data("val");s.siblings(".select-title").text(e).data("val",i),s.hide()}),$(".publish-block").on("tap",function(){$(".mask").show(),$(".publish-alert").show()}),$(".icon-back").on("tap",function(){$(".mask").show(),$(".cancel-alert").show()}),$(".cancel").on("tap",function(){location.href="../publish/publish_house.html"});