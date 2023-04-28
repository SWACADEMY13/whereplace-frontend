import { useEffect, useState } from "react";

const { kakao } = window;
function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.37030393452603, 127.34824875696489),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%", borderRadius: "10px" }}
    ></div>
  );
}
export default KakaoMap;
