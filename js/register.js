let panduan=true;
$("#dianji").onclick=function(){
	if(panduan){
		$("#dianji").src="img/register/selected.png";
		panduan=false;
	}else{
		$("#dianji").src="img/register/square.png";
		panduan=true;
	}
}

window.onload=function(){
	$("#dong").style=`
		left:0;
		opacity: 1;
		transition: all ease-in .4s;
	`;
}

$("#zhuce").onclick=function(){
	$("#gb1").innerHTML="注册";
	$("#gb1").style=`
		color:#888888;
		font-size:20px;
	`;
//	$("#gb2").href="#";
	$("#gb2").href="register.html";
	$("#gbspan").innerHTML="登录";
	$("#gbspan").style=`
		color:#ff9000;
		font-size:20px;
	`;
	$("#gbimg").src="img/register/icon2.jpg"; 
	$("#zcul").style.display="flex";
	$("#zc").style=`
		left:0;
		opacity: 1;
		transition: all ease-in .4s;
	`;
	
	$("#dong").style.display="none";
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