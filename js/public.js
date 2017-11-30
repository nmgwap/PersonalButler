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

//页面暂时还未开发完成提示
mui(".notfatherbox").on('tap', '.publicjumppage', function() {
	plus.nativeUI.toast("功能正在开发!");
});

//删除缓存功能
mui(".notfatherbox").on('tap', '.clearCache', function() {
	//清除缓存
	plus.nativeUI.toast("清除缓存成功!");
});