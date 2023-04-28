import "./DetailPage.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Default from "./Default";
import Msg from "./items/Msg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DetailPage() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const [input, setInput] = useState("");

  let sessionStorage = window.sessionStorage;
  const id = sessionStorage.getItem("idx");

  //url 값 가져오기 위한 변수 선언
  const urlData = window.location.search;
  const param = new URLSearchParams(urlData);

  //초기 data get
  useEffect(() => {
    //url정보를 컨트롤러에서 정제해서 활용 하븐방법 및 js 에서 수정하는 방법 2가지
    fetch("url", {
      method: "POST",
      body: JSON.stringify({
        idx: param.get("idx"),
      }),
    })
      .then((res) => res.json(location.pathname))
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const getInput = (e) => {
    setInput(e.target.value);
  };

  //댓글 저장 버튼 누르면 실행
  const btnSave = () => {
    fetch("url 경로 입력", {
      method: "POST",
      headers: {
        "Content-Type": "applicaation/json",
      },
      body: JSON.stringify({
        id: id,
        input: input,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("댓글 저장 완료!");
          location.reload();
        } else {
          alert("댓글 저장 실패!");
        }
      });
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Default />
      <div className="DetP_DeteilTable">
        <div className="DetP_deteil">
          <div id="DetP_showImg">
            <Slider
              {...settings}
              style={{ height: "100%", backgroundSize: "cover" }}
            >
              {/* data map 돌려 사용 */}
              <img
                src={"https://source.unsplash.com/user/max_duz/300x300"}
                className="DetP_img"
              />
              <img
                src={"https://source.unsplash.com/user/max_duz/300x300"}
                className="DetP_img"
              />
              <img
                src={"https://source.unsplash.com/user/max_duz/300x300"}
                className="DetP_img"
              />
            </Slider>
          </div>
          <div id="DetP_inputTag">
            <div id="DetP_tagList"></div>
            <div id="DetP_deteilText">
              <div
                style={{
                  width: "20%",
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  backgroundColor: "white",
                }}
              >
                <a>{data.text}</a>
              </div>
            </div>
            <div id="DetP_comment">
              <div
                style={{
                  backgroundColor: "#d4d4d4",
                  width: "100%",
                  height: "93%",
                  margin: "7%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#d4f2d4",
                    height: "90%",
                    width: "100%",
                    overflow: "auto",
                  }}
                >
                  <Msg />
                  <Msg />
                  <Msg />
                  <Msg />
                  <Msg />
                  <Msg />
                  <Msg />
                  <Msg />
                  <Msg />
                </div>
                <div
                  style={{
                    height: "10%",
                    width: "100%",
                  }}
                >
                  <div
                    style={{ width: "100%", height: "100%", display: "flex" }}
                  >
                    <div
                      style={{
                        width: "15%",
                        height: "100%",
                        backgroundColor: "#ffffff",
                        borderRadius: "100%",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "75%",
                        height: "100%",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <input id="DetP_input" onChange={getInput}></input>
                    </div>
                    <button
                      placeholder="hello"
                      className="DetP_btn"
                      onClick={btnSave}
                    >
                      입력
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
