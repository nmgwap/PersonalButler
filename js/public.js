//页面跳转公用方法
//只能跳转往上找同级的页面
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
	plus.nativeUI.toast( "功能正在开发!");
});