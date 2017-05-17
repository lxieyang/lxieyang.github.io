
/* Legacy */
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

var themePack = {
  black :   "theme-base-07",
  red   :   "theme-base-08",
  green :   "theme-base-0b",
  cyan  :   "theme-base-0c",
  blue  :   "theme-base-0d"
}

function changeThemeAccordingToDay () {
  var bodyHandle = $("body");
  bodyHandle.removeAttr("class");

  switch (new Date().getDay()) {
    case 0:   /* --- Sunday ---  */
        bodyHandle.addClass(themePack.red);
      break;
    case 1:   /* --- Monday ---  */
        bodyHandle.addClass(themePack.green);
      break;
    case 3:   /* --- Wednesday ---  */
        bodyHandle.addClass(themePack.cyan);
      break;
    case 5:   /* --- Friday ---  */
        bodyHandle.addClass(themePack.blue);
      break;
    case 2:   /* --- Tuesday ---  */
    case 4:   /* --- Thursday ---  */
    case 6:   /* --- Saturday ---  */
    default:
        bodyHandle.addClass(themePack.black);
      break;
  }
}

function lastUpdate () {
  var x = new Date(document.lastModified).toDateString();
  document.getElementById("lastUpdate").innerHTML = "Last update: " + x;
  changeThemeAccordingToDay()
}
