/**
 * Created by Administrator on 2016/12/14 0014.
 */


$('.image-block').on('tap', function(){
	$('.mask' ).show();
	$('.upload-box' ).show();
});

$('.cancel').on('tap', function(){
	$('.mask' ).hide();
	$('.upload-box' ).hide();
});

//$('input').focus(function(){
//	//$('.info-cell:after' ).css('display', 'none')
//
//})