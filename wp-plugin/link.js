function addLink(link,id) {
  elem = document.getElementById(id)
  if (elem) return 0;
  var a = document.createElement('a'); 
                  
  // Create the text node for anchor element.
  var link = document.createTextNode("link");

  // Append the text node to anchor element.
  a.appendChild(link);

  // Set the href property.
  a.href = link+id; 
  elem.prepend(a)
}

var link = "https://shop.mng-intl.com/index.php/about/#"
idList = ["pien-tze-huang", "gao-xu", "gosh", "ay-caramba"]

for (i=0; i<=idList.length; i++) {
  addLink(idList[i],link) 
}
