let panduan=true;
hh("#dianji").onclick=function(){
	if(panduan){
		hh("#dianji").src="img/register/selected.png";
		panduan=false;
	}else{
		hh("#dianji").src="img/register/square.png";
		panduan=true;
	}
}

window.onload=function(){
	hh("#dong").style=`
		left:0;
		opacity: 1;
		transition: all ease-in .4s;
	`;
	yanzhengma();
}

hh("#zhuce").onclick=function(){
	hh("#gb1").innerHTML="注册";
	hh("#gb1").style=`
		color:#888888;
		font-size:20px;
	`;
	hh("#gb2").href="register.html";
	hh("#gbspan").innerHTML="登录";
	hh("#gbspan").style=`
		color:#ff9000;
		font-size:20px;
	`;
	hh("#gbimg").src="img/register/icon2.jpg"; 
	hh("#zcul").style.display="flex";
	hh("#zc").style=`
		left:0;
		opacity: 1;
		transition: all ease-in .4s;
	`;
	
	hh("#dong").style.display="none";
}

hh("#ljdl").onclick=function(){
	if(hh("#sjh").value==""){
		hh("#tishi").innerHTML="请输入手机号";
		hh("#tishi").style.display="block";
		return false;
	}
	if(hh("#mm").value==""){
		hh("#tishi").innerHTML="请输入密码";
		hh("#tishi").style.display="block";
		return false;
	}
	
	let shijian;
	if(panduan){
		shijian=1;
	}else{
		shijian=10;
	}
	let xhr=new XMLHttpRequest();
	xhr.open("post","php/loginCheck.php",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=="1"){
				addCookie("username",hh("#sjh").value,shijian);
				location.href="index.html";
			}else{
				hh("#tishi").innerHTML="亲，用户名或者密码不对";
			}
		}
	}
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	let sendstr = `username=${hh("#sjh").value}&userpass=${hh("#mm").value}`;
	xhr.send(sendstr);
	
}
hh("#mm").onfocus=function(){
	setInterval(()=>{
        let mm=hh("#mm").value;
		if(mm.length==0){
			hh("#mmpd").style.display="none";
		}else if(mm.length<3){
			hh("#mmpd").src="img/register/delete.png";
			hh("#mmpd").style.display="block";
		}else{
			hh("#mmpd").src="img/register/correct.png";
			hh("#mmpd").style.display="block";
		}
    },500);
}
hh("#xyb").onclick=function(){
	if(hh("#sjh2").value==""){
		hh("#tishi2").innerHTML="请输入手机号";
		hh("#tishi2").style.display="block";
		return false;
	}
	if(hh("#mima").value==""){
		hh("#tishi2").innerHTML="请输入密码";
		hh("#tishi2").style.display="block";
		return false;
	}
	if(hh("#mimaqr").value==""){
		hh("#tishi2").innerHTML="请输入确认密码";
		hh("#tishi2").style.display="block";
		return false;
	}
	if(hh("#yzm").value==""){
		hh("#tishi2").innerHTML="请输入图形验证码";
		hh("#tishi2").style.display="block";
		return false;
	}
	let lj="http://localhost/test/jinli/img/register/delete.png";
	if(hh("#sjhpd").src==lj || hh("#mimapd").src==lj || hh("#qrpd").src==lj){
		return false;
	}
	
	let xhr=new XMLHttpRequest();
	xhr.open("post","php/regSave.php",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=="-1"){
				hh("#tishi2").innerHTML="用户名被人使用";
				hh("#tishi2").style.display="block";
			}else if(xhr.responseText=="0"){
				hh("#tishi2").innerHTML="注册失败";
				hh("#tishi2").style.display="block";
			}else if(xhr.responseText=="1"){
				hh("#tishi2").innerHTML="注册成功，请登录";
				hh("#tishi2").style.display="block";
			}
		}
	}
	//post方式：设置请求头
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//post方式：把传给服务器端数据（键值对）放在send函数的参数里
	let sendstr=`username=${hh("#sjh2").value}&userpass=${hh("#mima").value}`;
	xhr.send(sendstr);
}
hh("#sjh2").onfocus=function(){
	setInterval(()=>{
        let mm=hh("#sjh2").value;
		if(mm.length==0){
			hh("#sjhpd").style.display="none";
		}else if(mm.length==11){
			hh("#sjhpd").src="img/register/correct.png";
			hh("#sjhpd").style.display="block";
		}else{
			hh("#sjhpd").src="img/register/delete.png";
			hh("#sjhpd").style.display="block";
		}
    },500);
}
hh("#mima").onfocus=function(){
	setInterval(()=>{
        let mm=hh("#mima").value;
		if(mm.length==0){
			hh("#mimapd").style.display="none";
		}else if(mm.length>6){
			hh("#mimapd").src="img/register/correct.png";
			hh("#mimapd").style.display="block";
		}else{
			hh("#mimapd").src="img/register/delete.png";
			hh("#mimapd").style.display="block";
		}
    },500);
}
hh("#mimaqr").onfocus=function(){
	setInterval(()=>{
        let mm=hh("#mimaqr").value;
        let mima=hh("#mima").value;
        if(mm.length==0){
        	hh("#qrpd").style.display="none";
        }else if(mm==mima){
			hh("#qrpd").src="img/register/correct.png";
			hh("#qrpd").style.display="block";
		}else{
			hh("#qrpd").src="img/register/delete.png";
			hh("#qrpd").style.display="block";
		}
    },500);
}
hh("#yzm").onfocus=function(){
	setInterval(()=>{
       	let mm=hh("#yzm").value;
		if(mm.length==0){
        	hh("#yzmpd").style.display="none";
        }else if(mm==str){
			hh("#yzmpd").src="img/register/correct.png";
			hh("#yzmpd").style.display="block";
		}else{
			hh("#yzmpd").src="img/register/delete.png";
			hh("#yzmpd").style.display="block";
		}
    },500);
}

//验证码
let str="";
function yanzhengma(){
	str="";
	for(let i=0;i<4;i++){
		let index=parseInt(Math.random()*10);
		str+=index;
	}
	hh("#hygspan").innerHTML=str;
	hh("#hygspan").style.backgroundColor = giveColor();
	hh("#hygspan").style.color = giveColor();
}
hh("#hyg").onclick=function(){
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
//	xhr.open("get","php/regSave.php?username="+hh("#sjh2").value,true);
//	xhr.onreadystatechange=function(){
//		if(xhr.readyState==4 && xhr.status==200){
//			obj.nextElementSibling.innerHTML=xhr.responseText;
//		}
//	}
//	xhr.send();
//}

function hh(str){
	if(str[0]=="#"){
		return document.getElementById(str.substring(1));
	}else if(str[0]=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}