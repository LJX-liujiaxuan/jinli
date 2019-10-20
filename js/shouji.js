
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

//划过li时div出现
//$(".li1").mouseenter(function(){
//	$(".yc1").animate({ 
//  	bottom: "0px"
// 	}, 400 );
//});
//$(".li1").mouseleave(function(){
//	$(".yc1").animate({ 
//  	bottom: "-111px"
// 	}, 200 );
//});

//$(function() {
//  $(".imglistli").on("mouseover", function() {
//      $(".yincang").animate({ 
//  		bottom: "0px"
// 		}, 400 );
//  })
//  $(".imglistli").on("mouseout", function() {
//      $(".yincang").animate({ 
//	    	bottom: "-111px"
//	   	}, 200 );
//  })
//})  

//在售商品勾选
let panduan=true;
hh("#zaishou").onclick=function(){
	if(panduan){
		hh("#gouxuan").style=`
			background-position: 0px -134px;
		`;
		panduan=false;
	}else{
		hh("#gouxuan").style=`
			background-position: 0px -148px;
		`;
		panduan=true;
	}
}

window.onload=function(){
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

function hh(str){
	if(str[0]=="#"){
		return document.getElementById(str.substring(1));
	}else if(str[0]=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

$.get("php/getGoodsList.php",function(data){
	let htmlStr="";
    let dataJson = JSON.parse(data);

    for(let i=0;i<dataJson.length;i++){

        htmlStr+=` 
        	<li class="imglistli">
        		<a href="spxq-亮点.html"><img src="${dataJson[i].goodsImg}"/></a>
				<p class="p1">
					<a href="spxq-亮点.html">
						${dataJson[i].goodsName}
						<span class="miaoshu">${dataJson[i].goodsDesc}</span>
					</a>
				</p>
				<p class="p2">
					<span class="xianjia">￥${dataJson[i].goodsPrice}</span>
				</p>
				<div class="yincang">
					<p class="yincangp">${dataJson[i].goodsDesc}</p>
					<a class="yincanga" href="spxq-亮点.html"></a>
				</div>
			</li>
        `;
    }
    console.log(htmlStr);
    hh("#imglist").innerHTML = htmlStr;
});