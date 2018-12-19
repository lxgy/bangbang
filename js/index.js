/**
 * 重写mui.back()，一秒内连续点击两次，退出应用，仅安卓有效；
 */
var first = null;
mui.back = function() {
	if(!first) {
		first = new Date().getTime();
		/**
		 * 自动消失提示信息
		 */
		plus.nativeUI.toast("再按一次退出应用");
		setTimeout(function() {
			first = null;
		}, 1000);
	} else {
		if(new Date().getTime() - first < 1000) {
			/**
			 * 退出应用，仅安卓有效；
			 */
			plus.runtime.quit();
		}
	}
};