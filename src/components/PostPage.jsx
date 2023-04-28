import "./PostPage.css";
import KakaoMap from "./items/KakaoMap";
import React, { useState } from "react";
import FileUpload from "react-drag-n-drop-image";
import Default from "./Default";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomBody() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="40px"
        color="white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      <div style={{ color: "white", fontWeight: "bold" }}>
        클릭 , 드래그 앤 드롭
      </div>
    </div>
  );
}

function PostPage() {
  const [text, setText] = useState("");

  // 사진 drag and frop
  const [files, setFiles] = useState([]);

  const onChange = (file) => {
    console.log("file", file.length);
    if (file.length < 2) {
      setFiles(file);
    }
  };
  const onRemoveImage = (id) => {
    setFiles((prev) => prev.filter((i) => i.id !== id));
  };
  const onError = (error) => {
    console.error(error);
  };

  //---------------

  //데이터 전송을 위한 함수
  const post = () => {
    const formData = new FormData();
    formData.aappend("file", files);
    formData.append("text", text);

    fetch("API 주소", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    }).then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      throw new Error("에러 발생!");
    });
  };
  const mainText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Default />
      <div className="PostPage_DeteilTable">
        <div className="PostPage_deteil">
          <div id="PostPage_showImg">
            <div
              style={{
                height: "20%",
                width: "100%",
                border: "solid",
                borderColor: "white",
              }}
            >
              <FileUpload
                onError={onError}
                body={<CustomBody />}
                overlap={false}
                fileValue={files}
                onChange={onChange}
              />
            </div>

            <div style={{ height: "80%", width: "100%", display: "flex" }}>
              <div className="upload-image-box">
                {files.map((item) => {
                  return (
                    <div
                      onClick={() => onRemoveImage(item.id)}
                      aria-hidden
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "10px",
                      }}
                      key={item.id}
                    >
                      <img
                        style={{ width: "365px", height: "520px" }}
                        src={item.preview}
                        alt="images"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="PostPage_inputTag">
            <div id="PostPage_tagList"></div>
            <div id="PostPage_deteilText">
              <textarea
                id="story"
                name="story"
                rows="5"
                cols="33"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                placeholder="내용입력.."
                onChange={mainText}
              ></textarea>
            </div>
            <div id="PostPage_Comment">
              <div
                style={{
                  backgroundColor: "#d4d4d4",
                  width: "90%",
                  height: "80%",
                  margin: "5%",
                }}
              >
                <KakaoMap />
              </div>
              <div id="PostPage_btn" onClick={post}>
                완료
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostPage;
