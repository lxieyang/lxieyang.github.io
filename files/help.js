function lastupdate() 
{
    var x = new Date(document.lastModified);
    document.getElementById("demo").innerHTML = "Last update: " + x;
}
function copyright() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright &copy; " + n + ", Xieyang Liu.  All rights reserved.";
}