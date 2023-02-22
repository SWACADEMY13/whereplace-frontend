var mapDiv = document.getElementById('map');

var map = new naver.maps.Map(mapDiv, mapOptions);

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.5112, 127.0981),
  map: map
});

var mapOptions = {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 16
};

var map = new naver.maps.Map('map', mapOptions); 