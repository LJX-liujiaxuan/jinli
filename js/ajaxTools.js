function ajax1908(method,url,datas,isAsync,func){
	let xhr=new XMLHttpRequest();
	let urlAndData=url;
	if(method.toLowerCase()=="get"){
		urlAndData+="?"+datas;
	}
	xhr.open(method,urlAndData,isAsync);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			func(xhr.responseText);
		}
	}
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(datas);
	}else{
		xhr.send();
	}
}

function ajax1908AndDefault(obj){
	let defaultObj={
		method:"get",
		url:"#",
		datas:"",
		isAsync:true,
		func:null
	}
	for(let key in defaultObj){
		if(obj[key]!=undefined){
			defaultObj[key]=obj[key];
		}
	}
	let xhr=new XMLHttpRequest();
	let urlAndData=defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get"){
		urlAndData+="?"+defaultObj.datas;
	}
	xhr.open(defaultObj.method,urlAndData,defaultObj.isAsync);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.datas);
	}else{
		xhr.send();
	}
}

function ajax1908Promise(obj){
	let defaultObj={
		method:"get",
		url:"#",
		datas:"",
		isAsync:true
	}
	for(let key in defaultObj){
		if(obj[key]!=undefined){
			defaultObj[key]=obj[key];
		}
	}
	let xhr=new XMLHttpRequest();
	let urlAndData=defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get"){
		urlAndData+="?"+defaultObj.datas;
	}
	xhr.open(defaultObj.method,urlAndData,defaultObj.isAsync);
	let p=new Promise(function(resolve,reject){
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					resolve&&resolve(xhr.responseText);
				}else{
					reject&&reject(xhr.responseText);
				}
			}
		}
	});
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.datas);
	}else{
		xhr.send();
	}
	return p;
}
