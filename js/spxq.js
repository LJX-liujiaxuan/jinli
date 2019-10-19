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

let danjia=hh("#zongjia").innerHTML;
console.log(danjia);
//总价计算
hh("#jia").onclick=function(){
	if(hh("#num").value>=5){
		alert("每个订单数量不能超过5台！");
	}else{
		hh("#num").value=parseInt(hh("#num").value)+1;
		hh("#zongjia").innerHTML=danjia*hh("#num").value;
	}
}
hh("#jian").onclick=function(){
	if(hh("#num").value<=1){
		hh("#num").value=1;
		hh("#zongjia").innerHTML=danjia;
	}else{
		hh("#num").value=hh("#num").value-1;
		hh("#zongjia").innerHTML=danjia*hh("#num").value;
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

//导航栏吸顶
$(function () {
    var ie6 = document.all;
    var dv = $('.nav'), st;
    dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
    $(window).scroll(function () {
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st > parseInt(dv.attr('otop'))) {
            if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                dv.css({ position: 'absolute', top: 0});
            }
            else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', top: 0 ,'padding-top':'10px'});
        } else if (dv.css('position') != 'static') dv.css({ 'position': 'static' ,'padding-top':'40px'});
    });
});

$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
//		autoplay:true,
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },
	    navigation: {
	     	nextEl: '.swiper-button-next',
	     	prevEl: '.swiper-button-prev',
	    },
	    keyboard: {
		 	enabled: true,
		}, 
	})     
})

//购物车弹出
hh("#shitanchu").onclick=function(){
	hh("#tanchu").style.display="block";
}
hh("#tuichu").onclick=function(){
	hh("#tanchu").style.display="none";
} 