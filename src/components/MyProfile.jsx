import "./MyProfile.css";
import Item from "./items/HotPostItem";
import BtnMyProfile from "./items/BtnMyProfile";
import Plus from "./items/PlusItem";
import Default from "./Default";
import { useState, useEffect } from "react";

function MyProfile() {
  const [myData, setMyData] = useState([]);
  const [contents, setContents] = useState([]);
  const [scrollCheck, setScrollCheck] = useState(true);

  let sessionStorage = window.sessionStorage; // 로그인한 아이디 값을 가져오기 위한 session 선언
  let sessionId = sessionStorage.getItem("id");

  //초기 DB에 저장되어 있는 데이터 가져오는 함수
  useEffect(() => {
    getMyProfile();
    getContents();

    //scroll에 대한 이벤트 리스너 선언
    window.addEventListener("scroll", handleScroll);
  }, []);

  // scroll 인식 함수
  const handleScroll = () => {
    //scroll에 대한 정보
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    //scroll이 마지막에 도착 했을 경우 데이터 불러오는 조건문
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      console.log("scroll End");
      if (scrollCheck) {
        getContents();
        setScrollCheck(true);
      }
    }
  };

  //개인 정보 가져오는 함수
  const getMyProfile = () => {
    fetch("url 경로 입력", {
      method: "POST",
      headers: {
        "Content-Type": "applicaation/json",
      },
      body: JSON.stringify({
        id: sessionId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMyData(res.data); //res 안에 있는 값 입력 ( 수정 필요 )
      });
  };

  //작성 글에 대한 REST API 함수
  const getContents = () => {
    fetch("url 경로 입력", {
      method: "POST",
      headers: {
        "Content-Type": "applicaation/json",
      },
      body: JSON.stringify({
        id: sessionId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setContents(res.data); //res 안에 있는 값 입력 ( 수정 필요 )
      });
  };

  return (
    <div>
      <Default />
      <div className="MyPro_table">
        <BtnMyProfile />
        <Plus />
        <div className="MyPro_mainTavle">
          <div id="MyPro_profileBackground">
            {/* <img src={myData.backGround} /> */}
            <div id="MyPro_profileImg">
              {/* <img src={myData.profileImg}/> */}
            </div>
          </div>
          <div>
            <div className="MyPro_introduce">
              <div style={{ fontSize: "xx-large" }}>{myData.name}</div>
              <div
                style={{
                  fontSize: "x-large",
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                {/* {myData.text} */}
              </div>
            </div>
            <div>
              {contents.map(function (e, idx) {
                return <Item key={e.key} link={e.link} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
