if (!document.body.classList.contains('logged-in')) {
	menuTextList = document.getElementsByClassName("menu-text");
	for (var i=0; i<menuTextList.length; i++) {
		if (menuTextList[i].innerHTML =="My account") {
			menuTextList[i].innerHTML = "Login"
		}
		if (menuTextList[i].innerHTML =="我的帳戶") {
			menuTextList[i].innerHTML = "登入"
		}
	}
}
