//页面跳转公用方法
mui(".fatherbox").on('tap', '.publicjumppage', function() {
	//获取id
	var urlid = this.getAttribute("id");
	//手机app操作
	mui.plusReady(function() {
		var all = plus.webview.all();
		console.log(JSON.stringify(all))
		//显示预加载页面
		plus.webview.show(urlid, "slide-in-right", 150);
	})
});

//关于的那几个
mui(".notfatherbox").on('tap', '.publicjumppage', function() {
	//获取id
	var urlid = this.getAttribute("id");
	//手机app操作
	mui.plusReady(function() {
		var all = plus.webview.all();
		console.log(JSON.stringify(all))
		//显示预加载页面
		plus.webview.show(urlid, "slide-in-right", 150);
	})
});

//删除缓存功能
mui(".notfatherbox").on('tap', '.clearCache', function() {
	//清除缓存
	plus.nativeUI.toast("清除缓存成功!");
});

//检查更新功能
mui(".notfatherbox").on('tap', '.update', function() {
	//清除缓存
	plus.nativeUI.toast("当前已经是最新版本!");
});

//分享功能
mui(".notfatherbox").on('tap', '.shar', function() {
	//清除缓存
	plus.nativeUI.toast("正在开发!");
});

//页面暂时还未开发完成提示
mui(".nofatherbox").on('tap', '.publicjumppage', function() {
	//清除缓存
	plus.nativeUI.toast("功能正在开发!");
});