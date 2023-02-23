var mapOptions = {
    center: new naver.maps.LatLng(37.5666805, 126.9784147), // 서울 중심 좌표
    zoom: 10 // 지도 확대 레벨
};
var map = new naver.maps.Map('map', mapOptions); // 지도를 생성하고 id가 "map"인 div에 넣어줍니다.

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5666805, 126.9784147),
    map: map
}); // 마커 생성하고 지도 위에 표시합니다.