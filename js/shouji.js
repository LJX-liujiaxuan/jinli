
//购物车下拉菜单
hh("#gwc").onmouseenter=function(){
	hh("#gwc").style=`
		border-left:1px solid #e7e7e7;
		border-right:1px solid #e7e7e7;
	`;
	hh("#dl").style=`
		border-bottom:1px solid #e7e7e7;
	`;
	hh("#ggdiv").style.display="block";
}
hh("#gwc").onmouseleave=function(){
	hh("#gwc").style=`
		border-left:none;
		border-right:none;
	`;
	hh("#dl").style=`
		border-bottom:none;
	`;
	hh("#ggdiv").style.display="none";
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
//$(".li2").mouseenter(function(){
//	$(".yc2").animate({ 
//  	bottom: "0px"
// 	}, 400 );
//});
//$(".li2").mouseleave(function(){
//	$(".yc2").animate({ 
//  	bottom: "-111px"
// 	}, 200 );
//});
//$(".li3").mouseenter(function(){
//	$(".yc3").animate({ 
//  	bottom: "0px"
// 	}, 400 );
//});
//$(".li3").mouseleave(function(){
//	$(".yc3").animate({ 
//  	bottom: "-111px"
// 	}, 200 );
//});
//$(".li4").mouseenter(function(){
//	$(".yc4").animate({ 
//  	bottom: "0px"
// 	}, 400 );
//});
//$(".li4").mouseleave(function(){
//	$(".yc4").animate({ 
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


function hh(str){
	if(str[0]=="#"){
		return document.getElementById(str.substring(1));
	}else if(str[0]=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}