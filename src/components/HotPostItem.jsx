import "./HotPostItem.css";
import DeteilPage from "../DeteilPage";
import { Link } from "react-router-dom";

function HotPostItem(props) {
  //hotPost에서 보낸 idx값을 이용하여 상세페이지 인텓스 생성
  const url = `/DeteilPage/${props.idx}`;
  return (
    <Link to={url} id="link">
      <div className="HItem_item"></div>
    </Link>
  );
}
export default HotPostItem;
