function addLink(link,id) {
  elem = document.getElementById(id)
  // Set the href property.
  elem.href = link+id
}

var link = "https://shop.mng-intl.com/index.php/about/#"
idList = ["pien-tze-huang", "gao-xu", "gosh", "ay-caramba"]

for (i=0; i<=idList.length; i++) {
  addLink(idList[i],link) 
}
