var today = $("#today");
var clockEl = $("#clockEl");
var mainEl = $("#mainEl");

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

setDay();
setTime();
