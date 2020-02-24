var timer = 0;
//callback回调函数
function bind(obj, eventStr, callback){
	//绑定方法解决兼容性问题
	if(obj.addEventListener){
		// 正常浏览器
		obj.addEventListener(evenStr, callback, false);

	}else{
		// ie8及以下
		obj.attachEvent("on"+eventStr, callback);
	}
}

function getStyle(obj, name){
	// 解决获取style的兼容性问题
	return window.getComputedStyle?getComputedStyle(obj,null)[name]:obj.currentStyle[name];
}


function move(obj, dir, speed, interval, target){

	clearInterval(timer);
	// 判断移动的速度的正负值
	var currentPos = parseInt(getStyle(obj, "left"));

	if (currentPos > target){
		speed = (-1) * speed;
	}
	timer = setInterval(function(){
		var offset = parseInt(getStyle(obj, dir)) + speed; 




		if((speed >= 0 && offset > target)||(speed < 0 && offset < target)){
			offset = target;
		}


		obj["style"][dir] = offset + "px";
		if (offset == target){
			clearInterval(timer);
		}

	}, interval)
}
