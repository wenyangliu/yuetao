/**
 * Created by Administrator on 2016/12/14 0014.
 */



function testVal(){
	if($('#username').val() != '' && $('#password').val() != ''){
		$('#btn').css('background' , '#ea5404' );
		$('#btn' ).on('tap', function(){
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