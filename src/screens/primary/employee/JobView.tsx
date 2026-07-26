import React from "react";
import { useLocation } from "react-router-dom";
import "../../../style/screens/jobs/jobView.css";
import {
  AccessTime,
  ArrowBackIos,
  CalendarMonth,
  MonetizationOn,
  Work,
} from "@mui/icons-material";

const JobView = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get("id");
  return (
    <div>
      <div className="jobViewBan">
        <div className="backOptCont">
          <ArrowBackIos className="backArrIcon" />
          <p className="goBackTxt">Go back to job search</p>
        </div>
        <div className="jobViewBanTxt">
          <p className="pleaseLoginTxt">
            Please <span className="banBtnHigh">login</span> or{" "}
            <span className="banBtnHigh">register</span> as a job-seeker to
            apply for this job
          </p>
        </div>
        <div className="jobDetSepBarCont">
          <div className="jobViewBanPart">
            <div className="dfac">
              <Work className="jobBanIcon" />
              <div className="db ml10">
                <p className="partTitle">Type of work</p>
                <p className="partDet mt5">Full Time</p>
              </div>
            </div>
          </div>
          <div className="jobViewBanPart">
            <div className="dfac">
              <MonetizationOn className="jobBanIcon" />
              <div className="db ml10">
                <p className="partTitle">SALARY</p>
                <p className="partDet mt5">$2.2 - $4 /Hr</p>
              </div>
            </div>
          </div>
          <div className="jobViewBanPart">
            <div className="dfac">
              <AccessTime className="jobBanIcon" />
              <div className="db ml10">
                <p className="partTitle">Hours per week</p>
                <p className="partDet mt5">40</p>
              </div>
            </div>
          </div>
          <div className="jobViewBanPart">
            <div className="dfac">
              <CalendarMonth className="jobBanIcon" />
              <div className="db ml10">
                <p className="partTitle">Date posted</p>
                <p className="partDet mt5">Jan 11, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobView;
