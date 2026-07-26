import appImages from "../../assets";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import {
  ArrowDropDown,
  Logout,
  Notes,
  PushPinOutlined,
  Search,
  Settings,
} from "@mui/icons-material";
import "../../style/screens/jobs/post.css";

const HeaderEmployer = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="headerWinInnCont">
        <div className="dfac searchEmpHeadCont">
          <div className="headerLogoCont cp" onClick={() => navigate("/")}>
            <img alt="logo" src={appImages.icons.favicon} className="logoImg" />
          </div>
          <div className="searchEmpHeadInnCont">
            <TextField
              placeholder="Search"
              fullWidth
              InputProps={{
                startAdornment: <Search className="homeSearchIcon" />,
                endAdornment: (
                  <button className="searchBarInnBtn cp">Search</button>
                ),
                sx: { height: 45, paddingRight: 0.5 },
              }}
            />
          </div>
        </div>
        <div className="dfac">
          <button className="plainButtonGrey">Messages</button>
          <button
            className="seeMoreBtn cp ml15 mr5"
            style={{
              marginTop: 0,
              border: "1.25px solid #444251",
              fontSize: 16,
            }}
            onClick={() => {
              navigate("/postAJob");
            }}
          >
            Post a job
          </button>
          <p className="sepHead">|</p>
          <div
            className="dfac ml5 cp accountMenu"
            onMouseOver={() => {
              var element = document.getElementById("settingsMenu");
              if (element && element?.style) {
                element.style.display = "block";
              }
            }}
            onClick={() => {
              navigate("/myaccount");
            }}
          >
            <p className="accountTxt">Account</p>
            <ArrowDropDown />
          </div>
        </div>
      </div>
      <div className="settingsMenu" id="settingsMenu">
        <ul
          onMouseOver={() => {
            var element = document.getElementById("settingsMenu");
            if (element && element?.style) {
              element.style.display = "block";
            }
          }}
          onMouseOut={() => {
            var element = document.getElementById("settingsMenu");
            if (element && element?.style) {
              element.style.display = "none";
            }
          }}
        >
          <li>
            <p>Role</p>
            <p className="rolePrem">Premium</p>
          </li>
          <li>
            <Notes />
            <p className="ml10 fwn">Job posts</p>
          </li>
          <li>
            <PushPinOutlined />
            <p className="ml10 fwn">Pinned Workers</p>
          </li>
          <li>
            <Settings />
            <p className="ml10 fwn">Account Settings</p>
          </li>
          <li>
            <Logout />
            <p className="ml10 fwn">Log Out</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderEmployer;
