import { Fragment } from "react";

const HeaderMobile = () => {
  return (
    <Fragment>
      <div className="headerMobCont dfacjb">
        <div className="headerMobInnCont"></div>
      </div>
      {/* <div style={{ height: 87.5, width: "100%", zIndex: -1 }}></div>

      {toggleMenu && (
        <Fragment>
          <div className="sideMenuCont">
            <ul className="sideMenuList">
              <li
                className="sideSingleMenu dfac"
                onClick={() => {
                  handleToggle(false);
                  navigate("/");
                }}
              >
                Home&nbsp;
              </li>
              <li className="sideSingleMenu dfac">
                Functional process&nbsp;
                <i className="material-icons helpIcon">help_outline</i>
              </li>
              <li
                className="sideSingleMenu"
                onClick={() => {
                  navigate("/pricing");
                }}
              >
                Pricing
              </li>
              <li className="sideSingleMenu">Success Stories</li>
              <li className="sideSingleMenu">
                <button
                  className="announceJobBtn"
                  onClick={() => {
                    navigate("/postAJob");
                  }}
                >
                  Announce a job
                </button>
              </li>
              <li className="sideSingleMenu">
                <button
                  className="getJobBtn"
                  onClick={() => {
                    navigate("/jobs");
                  }}
                >
                  Get a job
                </button>
              </li>
              <li
                className="highMenuName sideSingleMenu"
                onClick={() => navigate("/login")}
              >
                Login{" "}
              </li>
              <li
                className="highMenuName sideSingleMenu"
                onClick={() => navigate("/signup")}
              >
                SignUp{" "}
              </li>
            </ul>
          </div>
        </Fragment>
      )} */}
    </Fragment>
  );
};

export default HeaderMobile;
