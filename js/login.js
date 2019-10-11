window.onload=function(){
		$("#dlminput").onfocus=function(){
		$("#dlm").innerHTML="请输入登录名或手机号登录";
		$("#dlm").style=`
			color: #B2B2B2;
			display:block;
			padding-left:0px;
			background: none;
		`;
	}
	$("#dlminput").onblur=function(){
		$("#dlm").style.display="none";
	}
	$("#mminput").onblur=function(){
		$("#mm").style.display="none";
	}
}
function testf(){
	if($("#dlminput").value==""){
		$("#dlm").innerHTML="登录名不能为空";
		$("#dlm").style=`
			display:block;
			color:red;
			padding-left:18px;
			background: url(img/login/bg.png) no-repeat -250px -77px;
		`;
	}
	if($("#mminput").value==""){
		$("#mm").style.display="block";
	}
}
function $(str){
	if(str[0]=="#"){
		return document.getElementById(str.substring(1));
	}else if(str[0]=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}