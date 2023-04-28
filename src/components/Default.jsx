import "./Default.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="Def_menu">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="Def_header_logo">
          <h1>
            <a href="/" />W H E R E &nbsp; P L A C E
          </h1>
        </div>
      </Link>
      <div className="Def_header_menu">
        <Link to="/hotPost" style={{ textDecoration: "none" }}>
          <span>인기 게시물</span>
        </Link>
        <Link to="/locationSearch" style={{ textDecoration: "none" }}>
          <span>위치 검색</span>
        </Link>
        <Link to="/tagSearch" style={{ textDecoration: "none" }}>
          <span>태그 검색</span>
        </Link>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <span>로그인</span>
        </Link>
      </div>
    </div>
  );
}

export default App;
