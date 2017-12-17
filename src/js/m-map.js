window.initMap = function initMap() {
  var cen = { lat: 53.908, lng: 27.527 };
  var map = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: cen });
  var marker = new google.maps.Marker({ position: cen, map: map });
}
