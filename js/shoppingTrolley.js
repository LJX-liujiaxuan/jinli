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

//$.get("php/getShoppingCart.php",function(data){
//	console.log(data);
//	let htmlStr="";
//  let dataJson = JSON.parse(data);
//
//  for(let i=0;i<dataJson.length;i++){
//
//      htmlStr+=` 
//      	<li class="imglistli">
//      		<a href="spxq-亮点.html"><img src="${dataJson[i].goodsImg}"/></a>
//				<p class="p1">
//					<a href="spxq-亮点.html">
//						${dataJson[i].goodsName}
//						<span class="miaoshu">${dataJson[i].goodsDesc}</span>
//					</a>
//				</p>
//				<p class="p2">
//					<span class="xianjia">￥${dataJson[i].goodsPrice}</span>
//				</p>
//				<div class="yincang">
//					<p class="yincangp">${dataJson[i].goodsDesc}</p>
//					<a class="yincanga" href="spxq-亮点.html"></a>
//				</div>
//			</li>
//      `;
//  }
//  console.log(htmlStr);
//  hh("#mysp").innerHTML = htmlStr;
//});
 
function hh(str){
	if(str[0]=="#"){
		return document.getElementById(str.substring(1));
	}else if(str[0]=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
