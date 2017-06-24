window.onload = function() {
	//				小导航点击事件
	var navbar = document.getElementsByClassName('navbar');
	var nav = document.getElementsByClassName('navlist');

	for (var i = 0; i < navbar.length; i++) {
		navbar[i].onclick = function() {
			for (var i = 0; i < nav.length; i++) {
				if (nav[i].style.display == "none") {
					nav[i].style.display = "block";
				} else {
					nav[i].style.display = "none";
				}
			}
		}
	}

	//				导航栏固定
	var top = document.getElementById("top");

	//	解决浏览器变大导航消失的问题
	window.onresize = function() {
		var width = document.documentElement.clientWidth || document.body.clientWidth;
		if (width > 768) {
			for (var i = 0; i < nav.length; i++) {
				nav[i].style.display = "block";
			}
		} else {
			for (var i = 0; i < nav.length; i++) {
				nav[i].style.display = "none";
			}
		}
	}
	window.onscroll = function() {
		if (getScrollTop() > 60) {
			top.style.display = "block";
			top.style.position = "absolute";
			top.style.top = getScrollTop() + "px";
		} else {
			top.style.display = "none";
			top.style.top = "0px";
		}
	}

	//				获取滚动条卷上去的高度
	function getScrollTop() {
		var scrollTop = 0;
		//					兼容IE和火狐浏览器
		if (document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop;
		} else if (document.body) {
			//						兼容谷歌浏览器
			scrollTop = document.body.scrollTop;
		}
		return scrollTop;
	}

}