window.addEventListener('load',pageReady,false);

function pageReady() {
var menuLink = document.getElementById("menu-link");
var specialsLink = document.getElementById("specials-link");
var childLinks = document.getElementsByClassName("hidden-links");

/*show hide links for menu*/
menuLink.onmouseover = showMenu;
menuLink.onmouseout = hideMenu;
function showMenu() {
	for (var i = 0; i < 5; i++) {
		childLinks[i].style.display = "inline-block";
	}
}
function hideMenu() {
	for (var i = 0; i < 5; i++) {
		childLinks[i].style.display = "none";
	}
}

/*show hide links for specials*/
specialsLink.onmouseover = showSpecials;
specialsLink.onmouseout = hideSpecials;
function showSpecials() {
	for (var i = 5; i < 8; i++) {
		childLinks[i].style.display = "inline-block";
	}
}
function hideSpecials() {
	for (var i = 5; i < 8; i++) {
		childLinks[i].style.display = "none";
	}
}





}//end of pageReady function