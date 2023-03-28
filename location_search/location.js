var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(36.37030393452603, 127.34824875696489),
  level: 6
};

var map = new kakao.maps.Map(container, options);

// 마커를 생성하는 함수
function createMarker(latlng) {
  var marker = new kakao.maps.Marker({
    position: latlng,
    map: map
  });

  // 마커 클릭 시 이벤트 추가
  kakao.maps.event.addListener(marker, 'click', function() {
    // TODO: 게시판 글 목록을 표시하는 UI를 만들어서 표시하기
    // 일단 alert로 대체
    alert('게시판 글 목록');
  });
}

kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
  var latlng = mouseEvent.latLng;   
  
  // 마커를 생성하고, 생성한 마커에 클릭 이벤트를 추가
  createMarker(latlng);
});