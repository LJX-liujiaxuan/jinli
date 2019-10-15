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
$("#xyb").onclick=function(){
	let xhr=new XMLHttpRequest();
	xhr.open("post","php/loginCheck.php",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=="1"){
				addCookie("username",$("#dlminput").value,0);
				location.href="index.html";
			}else{
				$("#dlm").innerHTML="亲，用户名或者密码不对";
				$("#dlm").style=`
					color: red;
					display:block;
					padding-left:0px;
					background: none;
				`;
			}
		}
	}
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	let sendstr = `username=${$("#dlminput").value}&userpass=${$("#mminput").value}`;
	xhr.send(sendstr);
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