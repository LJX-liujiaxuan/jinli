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
	if($("#yzm").value==""){
		$("#tishi2").innerHTML="请输入图形验证码";
		$("#tishi2").style.display="block";
		return false;
	}
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
$("#yzm").onfocus=function(){
	setInterval(()=>{
        let mm=$("#yzm").value;
		if(mm.length==0){
			$("#yzmpd").style.display="none";
		}else if(mm.length==4){
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
for(let i=0;i<4;i++){
	let index=parseInt(Math.random()*10);
	str+=index;
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