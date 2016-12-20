/**
 * Created by Administrator on 2016/12/14 0014.
 */



function testVal(){
	if($('#username').val() != '' && $('#password').val() != ''){
		$('#btn').css('background' , '#ea5404' ).on('tap', function(){
			location.href = '../info/info_agent.html'
		})

	}
}
$('.footer_reg').on('tap', function(){
	location.href = '../login/register.html'
});

$('.footer_pass').on('tap', function(){
	location.href = '../login/passwd.html'
});

function testReg(){
	if($('#tel').val() != '' && $('#code').val() != '' && $('#pass').val() != '' && $('#passwd').val() != '' && $('#iden').val() != ''){
		$('.btn_reg').css('background' , '#ea5404' ).on('tap', function(){
			$('.mask' ).css('background','#ccc').show();
			$('.publish-alert' ).show();
			$('.confirm').on('tap', function(){
				location.href = '../info/info.html'
			});
		})
	}
}
function testPass(){
	if($('#username').val() != '' && $('#code').val() != '' && $('#pass').val() != '' && $('#passwd').val() != ''){
		$('.btn_reg').css('background' , '#ea5404' ).on('tap', function(){
			location.href = '../info/info.html'
		})
	}
}


//选择身份

$('.iden').on('tap', function(){
	$('.cell-box' ).toggle();
	$('.cell-li' ).on('tap', function(){
		var text = $(this ).text();

		var val = $(this ).data('val');

		$('.iden' ).text(text ).data('val', val);
		$('.cell-box' ).hide();
	})
});

var code = document.getElementById('cell-code');

var wait=60;

function time(o) {

	if (wait == 0) {
		o.innerHTML="获取验证码";
		o.style.background = '';
		wait = 60;
	}
	else {

		o.innerHTML=wait+'s后重新获取';
		o.style.background = '#c7c7c7';
		wait--;
		setTimeout(function() {time(o)},1000)
	}
}

code.addEventListener('touchend', function(e){
	time(this);
})



