import "./TagSearch.css";
import Plus from "./items/PlusItem";
import BtnMyProfile from "./items/BtnMyProfile";
import React, { useState, useEffect } from "react";
import Default from "./Default";

function TagSearch() {
  const [tagText, setTagText] = useState();

  const setSearch = (e) => {
    setTagText(e.target.value);
  };

  const search = () => {
    fetch("url", {
      method: "GET , POST",
      body: tagText,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <Default />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Plus />
        <BtnMyProfile />
        <div id="tagS_tagTabel">
          <div
            style={{
              marginbottom: "20px",
              fontSize: "x-large",
              fontWeight: "bold",
              color: "white",
            }}
          >
            태그로 찾기
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="150px"
            height="150px"
            marginBottom="20px"
            color="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <div
            style={{
              marginBottom: "30px",
              marginTop: "20px",
              height: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              style={{ width: "250px", height: "30px" }}
              onChange={setSearch}
            ></input>
            <div id="tagS_Search" onClick={search}>
              검색
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TagSearch;
