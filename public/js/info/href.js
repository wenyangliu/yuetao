/**
 * Created by Administrator on 2016/12/14 0014.
 */
$('.icon-setting').on('tap', function(){
	location.href = '../info/setting.html'
});

$('#login_con').on('tap', function(){
	location.href = '../login/login.html'
});

$('#login_con2').on('tap', function(){
	location.href = '../info/info_edit.html'
});

$('.cell_one').on('tap', function(){
	location.href = '../info/info_publish02.html'
});
$('.cell_two').on('tap', function(){
	location.href = '../info/info_publish.html'
});
$('.cell_three').on('tap', function(){
	location.href = '../info/info_order.html'
});
$('.cell_four').on('tap', function(){
	location.href = '../info/info_history.html'
});
$('.cell_five').on('tap', function(){
	location.href = '../info/info_overdue.html'
});

$('.about').on('tap', function(){
	location.href = '../info/setting_about.html'
});
$('.clear').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
	$('.cancel' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	});
	$('.sure' ).on('tap', function(){
		$('.clear_count' ).text('');
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	})
});
$('.logout_btn').on('tap', function(){
	location.href = '../info/info.html'
});

//点击上传营业执照
$('.image-block').on('tap', function(){
	$('.mask' ).show();
	$('.upload-box' ).show();
});

$('.cancel').on('tap', function(){
	$('.mask' ).hide();
	$('.upload-box' ).hide();
});

$('.house' ).on('tap', function(){
	$('.need' ).removeClass('active');
	$(this ).addClass('active');
	$('.demand-cells' ).hide();
	$('.overdue-list' ).show();
});
$('.need' ).on('tap', function(){
	$('.house' ).removeClass('active');
	$(this ).addClass('active');
	$('.overdue-list' ).hide();
	$('.demand-cells' ).show();
});

$('.overdue-cell').on('swipeLeft', function(){
	$(this).css('left', '-65px');
	$(this).find('.delete' ).show();
	$(this).find('.delete' ).on('tap', function(){
		$(this ).parent().remove();
	})
}).on('swipeRight', function(){
	$(this).css('left', '0');
	$(this).find('.delete' ).hide();
});

