window.onload = pageReady;
function pageReady() {
	
	var contents = document.querySelectorAll(".section-title");
	
	contents[0].addEventListener('click', toggle);
	contents[1].addEventListener('click', toggle);
	contents[2].addEventListener('click', toggle);
	contents[3].addEventListener('click', toggle);
	contents[4].addEventListener('click', toggle);
	
	function toggle(event) {
		var elem = event.target.nextElementSibling; //target the next element of the header
		
		if (elem.style.position == "relative") {
			elem.style.position = "absolute";
			elem.style.top = "-10000px";
		} else {
			elem.style.position = "relative";
			elem.style.top = "0px";
		}
	}
}//end of pageReady