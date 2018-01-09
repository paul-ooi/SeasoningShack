window.addEventListener('load',pageReady,false);

function pageReady() {
var menuLink = document.getElementById("menu-link");
var specialsLink = document.getElementById("specials-link");
var childLinks = document.getElementsByClassName("sub-link-list");

/*show hide links for menu*/
menuLink.onmouseover = showMenu;
menuLink.onmouseout = hideMenu;
function showMenu() {
	childLinks[0].style.display = "block";
}
function hideMenu() {
	childLinks[0].style.display = "none";
}

/*show hide links for specials*/
specialsLink.onmouseover = showSpecials;
specialsLink.onmouseout = hideSpecials;
function showSpecials() {
	childLinks[1].style.display = "block";
}
function hideSpecials() {
	childLinks[1].style.display = "none";
}





}//end of pageReady function