var locations =[
{lat: 33.9416, lng: -118.4085}, //lax
{lat:22.3186, lng:114.1796} //hk
]

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

function hongKong(){
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat:22.3186, lng:114.1796}
  });

  var markers = locations.map(function(location) {
      return new google.maps.Marker({
        position: location,
        map : map
    });
  });
}