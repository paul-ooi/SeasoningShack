window.addEventListener('load',pageReady,false);

function pageReady() {
var shape = document.getElementsByClassName("pointer");
var pointerDaily = document.getElementsByClassName("daily");
var pointerWeekly = document.getElementsByClassName("weekly");
var pointerMonthly = document.getElementsByClassName("monthly");
var dateVar = new Date();
var day = dateVar.getDay();
var month = dateVar.getMonth();

//pointer for daily
switch (day) {
	case 1:
	case 4:
		pointerDaily[0].style.display = "block";
		break;
	case 2:
	case 6:
		pointerDaily[1].style.display = "block";
		break;
	case 0:
	case 3:
		pointerDaily[2].style.display = "block";
		break;
}

//pointer for weekly
switch (day) {
	case 1:
		pointerWeekly[0].style.display = "block";
		break;
	case 2:
		pointerWeekly[1].style.display = "block";
		break;
	case 3:
		pointerWeekly[2].style.display = "block";
		break;
	case 4:
		pointerWeekly[3].style.display = "block";
		break;
	case 5:
		pointerWeekly[4].style.display = "block";
		break;
	case 6:
	case 0:
		pointerWeekly[5].style.display = "block";
		break;
	
}

//pointer for monthly
switch (month) {
	case 0:
		pointerMonthly[0].style.display = "block";
		break;
	case 1:
		pointerMonthly[1].style.display = "block";
		break;
	case 2:
		pointerMonthly[2].style.display = "block";
		break;
	case 3:
		pointerMonthly[3].style.display = "block";
		break;
	case 4:
		pointerMonthly[4].style.display = "block";
		break;
	case 5:
		pointerMonthly[5].style.display = "block";
		break;
	case 6:
		pointerMonthly[6].style.display = "block";
		break;
	case 7:
		pointerMonthly[7].style.display = "block";
		break;
	case 8:
		pointerMonthly[8].style.display = "block";
		break;
	case 9:
		pointerMonthly[8].style.display = "block";
		break;
	case 10:
		pointerMonthly[10].style.display = "block";
		break;
	case 11:
		pointerMonthly[11].style.display = "block";
		break;
}


}//end of pageReady function