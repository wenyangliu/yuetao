function testVal(){""!=$("#username").val()&&""!=$("#password").val()&&($("#btn").css("background","#ea5404"),$("#btn").on("tap",function(){location.href="../info/info_agent.html"}))}$(".footer_reg").on("tap",function(){location.href="../login/register.html"}),$(".footer_pass").on("tap",function(){location.href="../login/passwd.html"});