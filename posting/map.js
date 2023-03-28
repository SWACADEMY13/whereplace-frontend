var container = document.getElementById('map');
var options = {
	center: new kakao.maps.LatLng(36.3696881172841, 127.346645436586),
	level: 3
};

var map = new kakao.maps.Map(container, options);

// 이전 마커 객체를 저장할 변수
var marker;

// 지도를 클릭했을 때 마커를 생성하고 이전 마커를 삭제하는 이벤트 핸들러
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    // 이전 마커가 있으면 삭제
    if (marker) {
        marker.setMap(null);
    }
    // 클릭한 위치에 마커 생성
    var latlng = mouseEvent.latLng;
    marker = new kakao.maps.Marker({
        position: latlng,
        map: map
    });
});