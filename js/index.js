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
	let imgs=hh("#boximg").children;
	fadeInOut(imgs[inIndex],imgs[outIndex],500);
	let lis=hh("#doudouBox").getElementsByTagName("li");
	lis[outIndex].style.backgroundColor="white";
	lis[inIndex].style.backgroundColor="#ff6a00";
}
window.onload=function(){
	var i;
	play();
	hh("#box").onmouseover=function(){
		stop();
	}
	hh("#box").onmouseout=function(){
		play();
	}
	hh("#doudouBox").onmouseout=function(event){
		let evt=event || window.event;
		evt.stopPropagation();
	}
	hh("#doudouBox").onmouseover=function(event){
		let evt=event || window.event;
		evt.stopPropagation();
	}
	let lis=hh("#doudouBox").getElementsByTagName("li");
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			goImg(i);
		}
	}
	let imgs=hh("#boximg").children;
	for(let i=0;i<imgs.length;i++){
      	hh("#left").onclick = function(){    
			left();
		}
		hh("#right").onclick = function(){  
			right();
		}
    }
	
	//账户显示和退出
	showUser();
	hh("#tuichu").onclick=function(){
		removeCookie("username");
		showUser();
	}
}
function showUser(){
	let username=getCookie("username");
	if(username!=null){
		hh("#zhanghu").innerHTML=username;
		hh("#wdzh").style.display="block";
		hh("#dl").style.display="none";
	}else{
		hh("#wdzh").style.display="none";
		hh("#dl").style.display="block";
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
hh("#imgleft").onmousemove=function(){
	hh("#limg").style=`
		box-shadow: 0px 15px 30px rgba(0,0,0,.2);
		transform: translateY(-3px);
		transition: all ease-in .3s;
	`;
	hh("#dian").style=`
		top: -38px;
		transition: all ease-in .3s;
	`;
}
hh("#imgleft").onmouseout=function(){
	hh("#limg").style=`
		transform: translateY(0px);
		transition: all ease-in .3s;
	`;
	hh("#dian").style=`
		top: -30px;
		transition: all ease-in .3s;
	`;
}
hh("#jmpjhg").onmousemove=function(){
	hh("#jmpjhg").style=`
		box-shadow: 0px 15px 30px rgba(0,0,0,.2);
		transform: translateY(-3px);
		transition: all ease-in .3s;
	`;
}
hh("#jmpjhg").onmouseout=function(){
	hh("#jmpjhg").style=`
		transform: translateY(0px);
		transition: all ease-in .3s;
	`;
}


//划过下拉菜单
hh("#huaguodiv").onmouseenter=function(){
	hh("#huaguocon").style.display="block";
}
hh("#huaguodiv").onmouseleave=function(){
	hh("#huaguocon").style.display="none";
}



//购物车下拉菜单
hh("#gwc").onmouseenter=function(){
	let pddl=hh("#dl").style.display;
	if(pddl=="block"){
		hh("#gwc").style=`
			border-left:1px solid #e7e7e7;
			border-right:1px solid #e7e7e7;
		`;
		hh("#dl").style=`
			border-bottom:1px solid #e7e7e7;
			display:block;
		`;
		hh("#ggdiv").style.display="block";
	}else{
		hh("#gwc").style=`
			border-left:1px solid #e7e7e7;
			border-right:1px solid #e7e7e7;
		`;
		hh("#wdzh").style=`
			border-bottom:1px solid #e7e7e7;
			display:block;
		`;
		hh("#ggdiv").style.display="block";
	}
	
}
hh("#gwc").onmouseleave=function(){
	let pddl=hh("#dl").style.display;
	if(hh("#dl").style.display=="block"){
		hh("#gwc").style=`
			border-left:none;
			border-right:none;
		`;
		hh("#dl").style=`
			border-bottom:none;
			display:block;
		`;
		hh("#ggdiv").style.display="none";
	}else{
		hh("#gwc").style=`
			border-left:none;
			border-right:none;
		`;
		hh("#wdzh").style=`
			border-bottom:none;
			display:block;
		`;
		hh("#ggdiv").style.display="none";
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
