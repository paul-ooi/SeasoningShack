window.addEventListener('load', pageReady, false);

function pageReady() {
  var todayDate = new Date();
  var today = todayDate.getDay();
  var currentHH = todayDate.getHours();
  var openingHH;
  var closingHH;
  var todayDay;

  //Array of weekday values as displayed in HTML
  var weekDays = [1,2,3,4,5,6,0]; //Monday to Sunday
  //If today = to Value of <th> Day

  var rowIndex = weekDays.indexOf(today)

  //Target today's table row in each locations table pageReady
  var location1Schedule = document.querySelectorAll('#location-1 tr');
  var location2Schedule = document.querySelectorAll('#location-2 tr');



  function openToday(todayIndex, schedule) {
    var todaySchedule = schedule[todayIndex];
    //Make Today's schedule bold text make Red
    todaySchedule.setAttribute("style", "font-size: 1.1em; font-weight: 700; color: #ae3721;")

    //Set openingHH for specific Location
    openingHH = setOpenHH(todayIndex);
    //Set closingHH for Specific locations
    closingHH = setCloseHH(todayIndex);

    //If current Hour is > Opening time
    if (currentHH >= openingHH && currentHH <= closingHH) {
    //Change Opening time cell Data to Open
    todaySchedule.children[1].textContent = "OPEN";
    todaySchedule.children[1].style.textAlign = "right";
    //Change "to" cell data to "until"
    todaySchedule.children[2].textContent = " until ";
    } else {
    todaySchedule.children[0].textContent = "TODAY";
    }
  }

  function setOpenHH(indexOfToday) {
    //Set openingHH for Location1
    if (indexOfToday == 1 || indexOfToday == 3) {
      return 11;
    } else {
      return 9;
    }
  }

  function setCloseHH(indexOfToday) {
    //Set openingHH for Location1
    if (indexOfToday == 6 || indexOfToday == 0) {
      return 22;
    } else {
      return 21;
    }
  }

  openToday(rowIndex, location1Schedule);
  openToday(rowIndex, location2Schedule);

}//end of pageReady
