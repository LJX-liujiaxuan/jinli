window.onload=function(){
	hh("#dlminput").onfocus=function(){
		hh("#dlm").innerHTML="请输入登录名或手机号登录";
		hh("#dlm").style=`
			color: #B2B2B2;
			display:block;
			padding-left:0px;
			background: none;
		`;
	}
	hh("#dlminput").onblur=function(){
		hh("#dlm").style.display="none";
	}
	hh("#mminput").onblur=function(){
		hh("#mm").style.display="none";
	}
}
hh("#xyb").onclick=function(){
	let sendstr=`username=${hh("#dlminput").value}&userpass=${hh("#mminput").value}`;
	ajax1908Promise({
		"method":"post",
		"url":"php/loginCheck.php",
		"datas":sendstr,
	}).then(function(str){
		if(str=="1"){
			addCookie("username",hh("#dlminput").value,10);
			location.href="index.html";
		}else{
			hh("#dlm").innerHTML="亲，用户名或者密码不对";
			hh("#dlm").style=`
				color: red;
				display:block;
				padding-left:0px;
				background: none;
			`;
		}
	},function(){
		hh("#dlm").innerHTML="亲，服务器开小差了......";
	});
}
function testf(){
	if(hh("#dlminput").value==""){
		hh("#dlm").innerHTML="登录名不能为空";
		hh("#dlm").style=`
			display:block;
			color:red;
			padding-left:18px;
			background: url(img/login/bg.png) no-repeat -250px -77px;
		`;
	}
	if(hh("#mminput").value==""){
		hh("#mm").style.display="block";
	}
}
function hh(str){
	if(str[0]=="#"){
		return document.getElementById(str.substring(1));
	}else if(str[0]=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}