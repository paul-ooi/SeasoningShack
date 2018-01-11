window.addEventListener('load', pageReady, false);

function pageReady() {
  //Get the current Day and Hour
  var date = new Date();
  var today = date.getDay();
  var nowHH = date.getHours();

  //get the Location Opening Hours Node
  var loc1 = document.querySelector('#location1 h4');
  var loc2 = document.querySelector('#location2 h4');

  function restaurant() {
    this.storeHours = {
    open : [],
    close : []
    },
    this.checkOpen =
      function () {
        //If Restaurant is open now
        if (nowHH >= this.storeHours.open[today] && nowHH < (this.storeHours.close[today]+12)) {
          return true;
        } else {
          return false;
        }
      }
  };

  var annex = new restaurant();
  var kensington = new restaurant();

  //Set Annex open Hours
  annex.storeHours.open[0] = 9;
  annex.storeHours.open[1] = 9;
  annex.storeHours.open[2] = 11;
  annex.storeHours.open[3] = 9;
  annex.storeHours.open[4] = 11;
  annex.storeHours.open[5] = 9;
  annex.storeHours.open[6] = 9;

  //Set Annex close Hours
  annex.storeHours.close[0] = 11;
  annex.storeHours.close[1] = 10;
  annex.storeHours.close[2] = 10;
  annex.storeHours.close[3] = 10;
  annex.storeHours.close[4] = 10;
  annex.storeHours.close[5] = 10;
  annex.storeHours.close[6] = 11;

  //Set Kensington open Hours
  kensington.storeHours.open[0] = 9;
  kensington.storeHours.open[1] = 9;
  kensington.storeHours.open[2] = 11;
  kensington.storeHours.open[3] = 9;
  kensington.storeHours.open[4] = 11;
  kensington.storeHours.open[5] = 9;
  kensington.storeHours.open[6] = 9;

  //Set Kensington close Hours
  kensington.storeHours.close[0] = 11;
  kensington.storeHours.close[1] = 10;
  kensington.storeHours.close[2] = 10;
  kensington.storeHours.close[3] = 10;
  kensington.storeHours.close[4] = 10;
  kensington.storeHours.close[5] = 10;
  kensington.storeHours.close[6] = 11;

  //Set the Open statement based on the Current Hour
  function updateHours (location, heading) {
    if (location.checkOpen()) {
      heading.innerHTML = "Open until <br>" + String(location.storeHours.close[today]) + " PM";
    } else {
        //if time is before open say it will open at specific time
        if (nowHH <= location.storeHours.open[today]){
          heading.innerHTML = "Opening at <br>" + String(location.storeHours.open[today] + " AM");
        }
        //if time is after close say it will open at specific time tomorrow, as long as today is not saturday
        else if (nowHH >= location.storeHours.close[today] && today != 6){
          heading.innerHTML = "Open tomorrow <br>" + "at " + String(location.storeHours.open[today+1]) + " AM";
        } else {
          //if today is saturday
          heading.innerHTML = "Open tomorrow <br>" + location.storeHours.open[0] + " AM";
        }
    }
  }//end of updateHours

  updateHours(annex,loc1);
  updateHours(kensington,loc2);

}//end of pageReady
