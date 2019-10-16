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
	yanzhengma();
}

$("#zhuce").onclick=function(){
	$("#gb1").innerHTML="注册";
	$("#gb1").style=`
		color:#888888;
		font-size:20px;
	`;
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

$("#ljdl").onclick=function(){
	if($("#sjh").value==""){
		$("#tishi").innerHTML="请输入手机号";
		$("#tishi").style.display="block";
		return false;
	}
	if($("#mm").value==""){
		$("#tishi").innerHTML="请输入密码";
		$("#tishi").style.display="block";
		return false;
	}
	
	let shijian;
	if(panduan){
		shijian=0;
	}else{
		shijian=10;
	}
	let xhr=new XMLHttpRequest();
	xhr.open("post","php/loginCheck.php",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=="1"){
				addCookie("username",$("#sjh").value,shijian);
				location.href="index.html";
			}else{
				$("#tishi").innerHTML="亲，用户名或者密码不对";
			}
		}
	}
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	let sendstr = `username=${$("#sjh").value}&userpass=${$("#mm").value}`;
	xhr.send(sendstr);
	
}
$("#mm").onfocus=function(){
	setInterval(()=>{
        let mm=$("#mm").value;
		if(mm.length==0){
			$("#mmpd").style.display="none";
		}else if(mm.length<3){
			$("#mmpd").src="img/register/delete.png";
			$("#mmpd").style.display="block";
		}else{
			$("#mmpd").src="img/register/correct.png";
			$("#mmpd").style.display="block";
		}
    },500);
}
$("#xyb").onclick=function(){
	if($("#sjh2").value==""){
		$("#tishi2").innerHTML="请输入手机号";
		$("#tishi2").style.display="block";
		return false;
	}
	if($("#mima").value==""){
		$("#tishi2").innerHTML="请输入密码";
		$("#tishi2").style.display="block";
		return false;
	}
	if($("#mimaqr").value==""){
		$("#tishi2").innerHTML="请输入确认密码";
		$("#tishi2").style.display="block";
		return false;
	}
	if($("#yzm").value==""){
		$("#tishi2").innerHTML="请输入图形验证码";
		$("#tishi2").style.display="block";
		return false;
	}
	
	let xhr=new XMLHttpRequest();
	xhr.open("post","php/regSave.php",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=="-1"){
				$("#tishi2").innerHTML="用户名被人使用";
				$("#tishi2").style.display="block";
			}else if(xhr.responseText=="0"){
				$("#tishi2").innerHTML="注册失败";
				$("#tishi2").style.display="block";
			}else if(xhr.responseText=="1"){
				$("#tishi2").innerHTML="注册成功，请登录";
				$("#tishi2").style.display="block";
			}
		}
	}
	//post方式：设置请求头
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//post方式：把传给服务器端数据（键值对）放在send函数的参数里
	let sendstr=`username=${$("#sjh2").value}&userpass=${$("#mima").value}`;
	xhr.send(sendstr);
}
$("#sjh2").onfocus=function(){
	setInterval(()=>{
        let mm=$("#sjh2").value;
		if(mm.length==0){
			$("#sjhpd").style.display="none";
		}else if(mm.length==11){
			$("#sjhpd").src="img/register/correct.png";
			$("#sjhpd").style.display="block";
		}else{
			$("#sjhpd").src="img/register/delete.png";
			$("#sjhpd").style.display="block";
		}
    },500);
}
$("#mima").onfocus=function(){
	setInterval(()=>{
        let mm=$("#mima").value;
		if(mm.length==0){
			$("#mimapd").style.display="none";
		}else if(mm.length>6){
			$("#mimapd").src="img/register/correct.png";
			$("#mimapd").style.display="block";
		}else{
			$("#mimapd").src="img/register/delete.png";
			$("#mimapd").style.display="block";
		}
    },500);
}
$("#mimaqr").onfocus=function(){
	setInterval(()=>{
        let mm=$("#mimaqr").value;
        let mima=$("#mima").value;
        if(mm==mima){
			$("#qrpd").src="img/register/correct.png";
			$("#qrpd").style.display="block";
		}else{
			$("#qrpd").src="img/register/delete.png";
			$("#qrpd").style.display="block";
		}
    },500);
}
$("#yzm").onfocus=function(){
	setInterval(()=>{
        let mm=$("#yzm").value;
		if(mm==str){
			$("#yzmpd").src="img/register/correct.png";
			$("#yzmpd").style.display="block";
		}else{
			$("#yzmpd").src="img/register/delete.png";
			$("#yzmpd").style.display="block";
		}
    },500);
}

//验证码
let str="";
function yanzhengma(){
	str="";
	for(let i=0;i<4;i++){
		let index=parseInt(Math.random()*10);
		str=str+index+" ";
	}
	$("#hygspan").innerHTML=str;
	$("#hygspan").style.backgroundColor = giveColor();
	$("#hygspan").style.color = giveColor();
}
$("#hyg").onclick=function(){
	yanzhengma();
}
function getColor(){
    // 封装随机生成颜色的函数作为返回值
    return Math.round(Math.random()*255);
}
function giveColor(){
    var red = getColor();
    var green = getColor();
    var blue = getColor();
    // 获取三个rgb的值
    var color= "rgb(" + red + "," + green + "," + blue + ")";
    // 吧rhb值拼接在一起给变量color
    return color;
    // 返回color
}

//function checkuser(obj){
//	let xhr=new XMLHttpRequest();
//	xhr.open("get","php/regSave.php?username="+$("#sjh2").value,true);
//	xhr.onreadystatechange=function(){
//		if(xhr.readyState==4 && xhr.status==200){
//			obj.nextElementSibling.innerHTML=xhr.responseText;
//		}
//	}
//	xhr.send();
//}

function $(str){
	if(str[0]=="#"){
		return document.getElementById(str.substring(1));
	}else if(str[0]=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}