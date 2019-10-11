//轮播图
let myTimer=null;
let index=0;
function play(){
	myTimer=setInterval(()=>{
		let outIndex=index;
		index++;
		if(index>5){
			index=0;
		}
		render(index,outIndex);
	},2000);
}
function stop(){
	window.clearInterval(myTimer);
}
function goImg(transIndex){
	stop();
	let outIndex=index;
	index=transIndex;
	if(index>5){
		index=0;
	}
	render(index,outIndex);
}
function render(inIndex,outIndex){
	let imgs=$("#boximg").children;
	fadeInOut(imgs[inIndex],imgs[outIndex],500);
	let lis=$("#doudouBox").getElementsByTagName("li");
	lis[outIndex].style.backgroundColor="white";
	lis[inIndex].style.backgroundColor="#ff6a00";
}
window.onload=function(){
	var i;
	play();
	$("#box").onmouseover=function(){
		stop();
	}
	$("#box").onmouseout=function(){
		play();
	}
	$("#doudouBox").onmouseout=function(event){
		let evt=event || window.event;
		evt.stopPropagation();
	}
	$("#doudouBox").onmouseover=function(event){
		let evt=event || window.event;
		evt.stopPropagation();
	}
	let lis=$("#doudouBox").getElementsByTagName("li");
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			goImg(i);
		}
	}
	let imgs=$("#boximg").children;
	for(let i=0;i<imgs.length;i++){
      	$("#left").onclick = function(){    
			left();
		}
		$("#right").onclick = function(){  
			right();
		}
    }
}
function left(){ 
    let outIndex = index;
    index--;
    if(index>5){
        index=0;
    }
    if(index<0){
    	index=5;
    } 
    render(index,outIndex);
}
function right(){ 
    let outIndex = index;
    index++;
    if(index>5){
        index=0;
    }
    if(index<0){
    	index=5;
    }
    render(index,outIndex);
}
function fadeInOut(inImg,outImg,timeLong){
    let timeSpace = 16;
    let step = 1/(timeLong/timeSpace); 
    let opacity = 0;
    let myTimer = setInterval(()=>{
        opacity+=step;
        if(opacity>=1){
            opacity = 1;
            window.clearInterval(myTimer);
        }
        inImg.style.opacity = opacity;
        inImg.style.zIndex=1;
        outImg.style.opacity = 1-opacity;
        outImg.style.zIndex=0;
    },timeSpace);
}


//鼠标缓慢抬起阴影缓慢放下
$("#imgleft").onmousemove=function(){
	$("#limg").style=`
		box-shadow: 0px 15px 30px rgba(0,0,0,.2);
		transform: translateY(-3px);
		transition: all ease-in .3s;
	`;
	$("#dian").style=`
		top: -38px;
		transition: all ease-in .3s;
	`;
}
$("#imgleft").onmouseout=function(){
	$("#limg").style=`
		transform: translateY(0px);
		transition: all ease-in .3s;
	`;
	$("#dian").style=`
		top: -30px;
		transition: all ease-in .3s;
	`;
}
$("#jmpjhg").onmousemove=function(){
	$("#jmpjhg").style=`
		box-shadow: 0px 15px 30px rgba(0,0,0,.2);
		transform: translateY(-3px);
		transition: all ease-in .3s;
	`;
}
$("#jmpjhg").onmouseout=function(){
	$("#jmpjhg").style=`
		transform: translateY(0px);
		transition: all ease-in .3s;
	`;
}


//划过下拉菜单
$("#huaguodiv").onmouseenter=function(){
	$("#huaguocon").style.display="block";
}
$("#huaguodiv").onmouseleave=function(){
	$("#huaguocon").style.display="none";
}



//购物车下拉菜单
$("#gwc").onmouseenter=function(){
	$("#gwc").style=`
		border-left:1px solid #e7e7e7;
		border-right:1px solid #e7e7e7;
	`;
	$("#dl").style=`
		border-bottom:1px solid #e7e7e7;
	`;
	$("#ggdiv").style.display="block";
}
$("#gwc").onmouseleave=function(){
	$("#gwc").style=`
		border-left:none;
		border-right:none;
	`;
	$("#dl").style=`
		border-bottom:none;
	`;
	$("#ggdiv").style.display="none";
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
