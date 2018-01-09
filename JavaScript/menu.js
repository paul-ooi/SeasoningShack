window.addEventListener('load',pageReady,false);

function pageReady() {
var headings = document.getElementsByClassName("section-title");
console.log(headings);
var contents = document.getElementsByClassName("content");
console.log(contents);

headings[0].onclick = toggle0;
function toggle0() {
	if (contents[0].style.position == "absolute") {
		contents[0].style.position = "relative";
		contents[0].style.top = "0px";
	}else{
		contents[0].style.position = "absolute";
		contents[0].style.top = "-10000px";
	}
}

headings[1].onclick = toggle1;
function toggle1() {
	if (contents[1].style.position == "relative") {
		contents[1].style.position = "absolute";
		contents[1].style.top = "-10000px";
	}else{
		contents[1].style.position = "relative";
		contents[1].style.top = "0px";
	}
	
}
headings[2].onclick = toggle2;
function toggle2() {
	if (contents[2].style.position == "relative") {
		contents[2].style.position = "absolute";
		contents[2].style.top = "-10000px";
	}else{
		contents[2].style.position = "relative";
		contents[2].style.top = "0px";
	}
}	

headings[3].onclick = toggle3;
function toggle3() {
	if (contents[3].style.position == "relative") {
		contents[3].style.position = "absolute";
		contents[3].style.top = "-10000px";
	}else{
		contents[3].style.position = "relative";
		contents[3].style.top = "0px";
	}
}

headings[4].onclick = toggle4;
function toggle4() {
	if (contents[4].style.position == "relative") {
		contents[4].style.position = "absolute";
		contents[4].style.top = "-10000px";
	}else{
		contents[4].style.position = "relative";
		contents[4].style.top = "0px";
	}
}




}//end of pageReady function