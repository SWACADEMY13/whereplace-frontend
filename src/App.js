import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Default from "./components/Default";
import HotPost from "./components/HotPost";
import LocationSearch from "./components/LocationSearch";
import TagSearch from "./components/TagSearch";
import MyProfile from "./components/MyProfile";
import PostPage from "./components/PostPage";
import DetailPage from "./components/DetailPage";
import { useCallback, useEffect, useState } from "react";
import Login from "./account/Login";
import Join from "./account/Join";

function App() {
  return (
    <div id="main">
      <BrowserRouter>
        {/* <Default/> */}
        <Routes>
          <Route path="/" element={<HotPost />} />
          <Route path="/hotPost" element={<HotPost />} />
          <Route path="/locationSearch" element={<LocationSearch />} />
          <Route path="/tagSearch" element={<TagSearch />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/PostPage" element={<PostPage />} />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
