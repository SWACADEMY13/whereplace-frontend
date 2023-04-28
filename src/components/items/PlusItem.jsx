import { Link } from "react-router-dom";
import "./PlusItem.css";
function PlusItem() {
  return (
    <Link to="/PostPage">
      <div id="Plus_target">
        <div id="Plus_selectItem">+</div>
      </div>
    </Link>
  );
}
export default PlusItem;
