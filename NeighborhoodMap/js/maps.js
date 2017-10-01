
function initMap () {
  var lax = {lat: 33.9416, lng: -118.4085};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: lax
  });
  var marker = new google.maps.Marker({
    position: lax,
    map: map
  });
}