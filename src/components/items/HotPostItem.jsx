import "./HotPostItem.css";
import DeteilPage from "../DetailPage";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function HotPostItem(props) {
  const [url, setUrl] = useState();
  useEffect(() => {
    console.log(props.idx);
    console.log(props.imgLink);
    setUrl(`/DetailPage/?idx=${props.idx}`);
    console.log(url);
  }, [props]);

  return (
    <Link to={url} id="link">
      <div className="HItem_item">
        {
          <img
            url={props.imgLink}
            style={{ width: "150px", height: "150px", borderRadius: "10px" }}
          />
        }
      </div>
    </Link>
  );
}
export default HotPostItem;
