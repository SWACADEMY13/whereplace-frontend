import "./BtnMyProfile.css";
import { Link } from "react-router-dom";

function GetMyProfile() {
  return (
    <Link to="/MyProfile">
      <div id="GPro_getMyProfile">
        <div id="GPro_forfileImg"></div>
        <div>내 프로필</div>
      </div>
    </Link>
  );
}
export default GetMyProfile;
