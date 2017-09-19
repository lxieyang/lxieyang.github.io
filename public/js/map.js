function initMap() {
var uluru = {lat: 40.442, lng: -79.943};
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
});
var marker = new google.maps.Marker({
    position: uluru,
    map: map
});
}