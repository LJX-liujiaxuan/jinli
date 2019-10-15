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