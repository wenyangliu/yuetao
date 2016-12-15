/**
 * Created by Administrator on 2016/12/14 0014.
 */
var $slider = $('.slider_block');

var $sliderCon = $('.slider_container');

var $point = $('.point_block');

var wd = $(window ).width();

var lg = $slider.length;

var allWd = wd * lg;

var hg = wd * 0.85;

$sliderCon.width(allWd);

$slider.width(wd ).height(hg);

var swipeNow = 0;
var slideTime = null;

$sliderCon.on('swipeLeft', function(){
	clearTimeout(slideTime);

	if(swipeNow < lg - 1){
		var swipeWd = (++swipeNow) * wd;
		$sliderCon.css('transform', 'translateX(-'+ swipeWd + 'px)');

		$point.removeClass('active' ).eq(swipeNow ).addClass('active');

		autoSwipe();
	}
});
$sliderCon.on('swipeRight', function(){
	clearTimeout(slideTime);
	if(swipeNow > 0){
		var swipeWd = (--swipeNow) * wd;
		$sliderCon.css('transform', 'translateX(-'+ swipeWd + 'px)');

		$point.removeClass('active' ).eq(swipeNow ).addClass('active');
		autoSwipe();
	}
});

function autoSwipe(){
	slideTime = setTimeout(function(){
		if(swipeNow < lg - 1){
			var swipeWd = (++swipeNow) * wd;
			$sliderCon.css('transform', 'translateX(-'+ swipeWd + 'px)');
			$point.removeClass('active' ).eq(swipeNow ).addClass('active');

			autoSwipe();
		}
	},2000)
}

autoSwipe();

$query = $('.query_block');
$query.on('tap', function(){
	var i = $(this ).index();
	$query.removeClass('active' ).eq(i).addClass('active');
	//console.log(i)
	$('.header' ).addClass('active');
	$('.search_box').addClass('active');
	$('.query_box').addClass('active');
});

$('.query_price').on('tap', function(){
	var $self = $(this);
	if($self.hasClass('active-down')){
		console.log('up');
		$self.removeClass('active-down').addClass('active-up');
	}else if($self.hasClass('active-up')){
		console.log('normal');
		$self.removeClass('active-up');
	}else{
		console.log('down');
		$self.addClass('active-down');
	}
});
$('.query_box' ).on('tap', function(){
	$(this ).attr('top', '50px')
	//console.log('s')
});

$(window).on('swipeUp', function(){
	$('.header' ).addClass('active');
	$('.search_box').addClass('active');
	$('.query_box').addClass('active');
});