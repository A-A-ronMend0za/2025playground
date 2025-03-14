var today = $("#today");
var clockEl = $("#clockEl");
var mainEl = $("#mainEl");

const week = ["☉", "☽", "♂︎", "☿", "♃", "♀︎", "♄"];

function setDay() {
  var date = dayjs().format("dddd MMMM D");
  today.text(date);
}

setDay();
