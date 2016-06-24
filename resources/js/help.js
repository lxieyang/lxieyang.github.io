function changeTheme() {
  $("body").removeAttr("class");
  var day = new Date().getDay();
  if(day == 2 || day == 4 || day == 6) {
    $("body").addClass("theme-base-07");  // black
  } else if (day == 0) {
    $("body").addClass("theme-base-08");  // red
  } else if (day == 3) {
    $("body").addClass("theme-base-0c");  // cyan
  } else if (day == 5) {
    $("body").addClass("theme-base-0d");  // blue
  } else if (day = 1) {
    $("body").addClass("theme-base-0b");  // green
  }
}

function lastUpdate () {
  var x = new Date(document.lastModified).toDateString();
  document.getElementById("lastUpdate").innerHTML = "Last update: " + x;
  changeTheme()
}
