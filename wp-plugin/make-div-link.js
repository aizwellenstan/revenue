function addLink(link,id) {
	console.log(id)
	var element = document.getElementById(id);
	element.onclick = function() {
		location.href = link;
	};
	/*classList = "elementor-column elementor-inner-column";
	var parent = element.parentNode;
	var aTag = document.createElement('a');
	aTag.setAttribute('href', link);
	aTag.style.display = "block";
	parent.replaceChild(aTag, element);
	aTag.appendChild(element);*/
}

var link = "https://shop.mng-intl.com/index.php/about/#"
idList = ["pien-tze-huang", "gao-xu", "gosh", "ay-caramba"]

if (window.location.href=='https://shop.mng-intl.com/') {
	for (i=0; i<idList.length; i++) {
	  addLink(link+idList[i],idList[i]) 
	}
}

