import "./HotPost.css";
import Item from "./items/HotPostItem";
import Plus from "./items/PlusItem";
import BtnMyProfile from "./items/BtnMyProfile";
import { useEffect, useRef, useState } from "react";
import Default from "./Default";

function Hotpost() {
  const [scrollCheck, setScrollCheck] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [postData, setPostData] = useState([]);

  // 페이지 이동 시 가장 먼저 실행
  useEffect(() => {
    // 초기 DB에 저장되어 있는 내용 불러오는 함수
    getData();
    //scroll에 대한 이벤트 리스너 선언
    window.addEventListener("scroll", handleScroll);
  }, []);

  //초기 데이터 불러오는 함수
  const getData = () => {
    setScrollCheck(false);
    fetch("url", {
      method: "GET",
      body: null,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        //setPostData 를 통해서 데이터 입력하는 Code 추가
        // ex) setPostData(res.data);
      });
  };

  const handleScroll = () => {
    //scroll에 대한 정보
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    //scroll이 마지막에 도착 했을 경우 데이터 불러오는 조건문
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      console.log("scroll End");
      if (scrollCheck) {
        getData();
        setScrollCheck(true);
      }
    }
  };

  return (
    <div>
      <Default />

      <div className="HotP_table">
        <div className="HotP_mainTavle">
          {postData.map(function (e, idx) {
            return <Item key={e.key} link={e.link} />;
          })}
        </div>
        <BtnMyProfile />
        <Plus />
      </div>
    </div>
  );
}
export default Hotpost;
