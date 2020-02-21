
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

//解决绑定的事件的输入参数的兼容性问题
event = event || window.event;
//取消掉事件的冒泡
event.cancelBubble = true;

