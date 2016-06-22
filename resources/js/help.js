function lastUpdate () {
  var x = new Date(document.lastModified).toDateString();
  document.getElementById("lastUpdate").innerHTML = "Last update: " + x;
}
