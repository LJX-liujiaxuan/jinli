function addCookie(key,value,dayCount,path,domain){
	let d=new Date();
	d.setDate(d.getDate()+dayCount);
	//escape():编码
	let str=`${key}=${escape(value)};expires=${d.toGMTString()}`;
	if(path!=undefined){
		str+=`;path=${path}`;
	}
	if(domain!=undefined){
		str+=`;domain=${domain}`;
	}
	document.cookie=str;
}
function getCookie(key){
	var str=unescape(document.cookie);
	let arr=str.split("; ");
	for(var i in arr){
		if(arr[i].startsWith(key+"=")){
			let [,value]=arr[i].split("=");
			return value;
		}
	}
	return null;
}
function removeCookie(key){
	addCookie(key,"",-1);
}
