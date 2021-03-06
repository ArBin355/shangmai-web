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

	//				Tab切换
	var liti = document.getElementById('liti');
	var navLi = liti.getElementsByTagName('li');
	var newscon = document.getElementsByClassName('joininfo');
	var cur_index = 0;
	if (navLi.length != newscon.length) {
		return;
	} else {
		for (var i = 0; i < navLi.length; i++) {
			navLi[i].index = i;
			navLi[i].onclick = function() {
				for (var j = 0; j < navLi.length; j++) {
					navLi[j].className = ' ';
					newscon[j].className = 'joininfo';
					newscon[j].style.display = 'none';
				}
				cur_index = this.index;
				navLi[cur_index].className = 'active';
				newscon[cur_index].style.display = "block";
			}
		}
	}

	//				模态窗体
	var btnShowDailog = document.getElementsByClassName("joinbot");
	var showDailogbg = document.getElementById("showDailogbg");
	var showDailog = document.getElementById("showDailog");
	var btnsubmit = document.getElementById("btnsubmit");

	var swidth = document.documentElement.clientWidth;
	var bgheight = document.body.clientHeight;
	var sheight = document.documentElement.clientHeight;

	for (var i = 0; i < btnShowDailog.length; i++) {
		btnShowDailog[i].onclick = function() {
			showDailogbg.style.display = "block";
			showDailogbg.style.height = bgheight + "px";

			//模态框
			showDailog.style.display = "block";
			showDailog.style.top = (sheight - showDailog.offsetHeight) / 2 + getScrollTop() + "px";
			showDailog.style.left = (swidth - showDailog.offsetWidth) / 2 + "px";
			document.body.style.overflow = "hidden";
		}

		btnsubmit.onclick = function() {
			showDailogbg.style.display = "none";
			showDailog.style.display = "none";
			document.body.style.overflow = "auto";
		}
	}

}