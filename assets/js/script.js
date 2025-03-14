var today = $("#today");
var clockEl = $("#clockEl");
var mainEl = $("#mainEl");
var dotwEl = $("#dotwEl");

const week = ["☉", "☽", "♂︎", "☿", "♃", "♀︎", "♄"];

function setDay() {
  var date = dayjs().format("dddd MMMM D");
  today.text(date);
}

function setTime() {
  var time = dayjs().format("HH:mm:ss");
  clockEl.text(time);
  setTimeout(setTime, 1000);
}

function displayDays(days) {
  days.forEach((day, index) => {
    var dayNode = $("<section></section>").text(day);
    dayNode.addClass("dotw");
    dotwEl.append(dayNode);
    if (index === dayjs().day()) {
      dayNode.addClass("todayGlow");
    }
  });
  startWeekMonday();
}

function startWeekMonday() {
  var sunday = dotwEl.children().first();
  dotwEl.append(sunday);
}

setDay();
setTime();
displayDays(week);
