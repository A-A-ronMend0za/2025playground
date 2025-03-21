const mainEl = $("#mainEl");
const week = ["☉", "☽", "♂︎", "☿", "♃", "♀︎", "♄"];

var today = $("#today");
var clockEl = $("#clockEl");
var dotwEl = $("#dotwEl");

setDay = () => {
  var date = dayjs().format("dddd MMMM D");
  today.text(date);
};

setTime = () => {
  var time = dayjs().format("HH:mm:ss");
  clockEl.text(time);
  setTimeout(setTime, 1000);
};

displayDays = (days) => {
  days.forEach((day, index) => {
    var dayNode = $("<section></section>").text(day);
    dayNode.addClass("dotw");
    dotwEl.append(dayNode);
    if (index === dayjs().day()) {
      dayNode.addClass("todayGlow");
    }
  });
  function startWeekMonday() {
    var sunday = dotwEl.children().first();
    dotwEl.append(sunday);
  }
  startWeekMonday();
};

setDay();
setTime();
displayDays(week);

// Things to do:
// suffix on date
// calendar hw
// pokeApiWeather
// pokeApi cardviewer
// bois
// Bills
// Charting
