/**
 * Created by Administrator on 2016/12/16 0016.
 */
//$('.btn-block').on('tap', function(){
//
//});

$('.header-conf').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
	$('.booking-conf').on('tap', function(){
		$('.cancel-alert' ).hide();
		$('.publish-alert' ).show();
	});
});


$('.tel-icon').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
});

$('.reson-li' ).on('tap', function(){
	var i = $(this ).index();
	$(this).toggleClass('active');
	if(i == 2){
		$('.reson-input' ).toggle()
	}
});

$('.cancel-btn').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-order' ).show();
});
$('.upload-conf').on('tap', function(){
	$('.mask' ).show();
	$('.publish-alert' ).show();
});
$('.cancel-upload').on('tap', function(){
	$('.mask' ).show();
	$('.upload-alert' ).show();
});

