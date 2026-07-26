import React, { Fragment, useEffect, useState } from "react";
import HeaderWindow from "./HeaderWindow";
import HeaderMobile from "./HeaderMobile";
import "../../style/components/header.css";
import HeaderEmployer from "./HeaderEmployer";
import constants from "../../utils/constants";

const Header: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<string | false>(false);
  const token = localStorage.getItem(constants.TOKEN);
  const [role] = useState<any>(token ? "employer" : "");
  function checkIsMobile() {
    const isMobile = window.innerWidth <= 1025 ? true : false;

    if (isMobile) {
      console.log(isMobile, "isMobile");
      setDeviceInfo("mob");
    } else {
      setDeviceInfo("browser");
    }
  }
  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.addEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div>
      {deviceInfo && deviceInfo === "mob" ? (
        <HeaderMobile />
      ) : (
        <Fragment>
          <HeaderWindow />
        </Fragment>
      )}
    </div>
  );
};

export default Header;
