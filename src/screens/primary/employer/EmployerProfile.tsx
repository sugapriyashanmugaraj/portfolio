import React, { useState } from "react";
import "../../../style/screens/profile/employer.css";
import { MenuItem, TextField } from "@mui/material";

const EmployerProfile = () => {
  const [jobStatus, setJobStatus] = useState<string>("Inactive");
  const jobStatusList = [
    { status: "Inactive" },
    { status: "Active" },
    { status: "Archived", hide: true },
  ];

  const handleJobChange = (e: any) => {
    setJobStatus(e.target.value);
  };

  return (
    <div className="employerProfCont">
      <div className="employerOutCont">
        <h3 className="empName">Hello, Bryan Olson</h3>
      </div>
      <div className="mt30">
        <span className="dfac">
          <h4 className="yourJobsText">Your job posts</h4>
          <p className="ml20 mr20 jobsCountAcc">20</p>
          <p className="showAllAc cp">Show all</p>
        </span>
        <div className="mt30 jobCardsCont">
          <div className="jobAcCard">
            <div className="jobCardStatus">
              <TextField
                select
                InputProps={{
                  className: `jobCardStatusSel ${
                    jobStatus === jobStatusList[0].status
                      ? "cardStatIn"
                      : jobStatus === jobStatusList[1].status
                      ? "cardStatAc"
                      : "cardStatDis"
                  }`,
                }}
                value={jobStatus}
                onChange={handleJobChange}
              >
                {jobStatusList.map((jobStat, i) => {
                  return (
                    !jobStat.hide && (
                      <MenuItem
                        key={i}
                        className="menuStatus"
                        value={jobStat.status}
                      >
                        {jobStat.status}
                      </MenuItem>
                    )
                  );
                })}
              </TextField>
            </div>
            <p className="freqJobTitleTxt mt15">Virtual Assistant</p>
            <p className="postCreatedOn mt10">Created on 2023-12-12-</p>
            <p className="applicTxt mt10">
              20 Applicants&nbsp;&nbsp;&nbsp;21 Hits
            </p>
            <span className="dfac mt10">
              <p className="postCreatedOn cp">Edit</p> &nbsp; &nbsp;
              <p style={{ color: "#ccc" }}>|</p> &nbsp; &nbsp;
              <p className="postCreatedOn cp">Delete</p>
            </span>
          </div>
          <div className="jobAcCard ml10">
            <div className="jobCardStatus">
              <TextField
                select
                InputProps={{
                  className: `jobCardStatusSel ${
                    jobStatus === jobStatusList[0].status
                      ? "cardStatIn"
                      : jobStatus === jobStatusList[1].status
                      ? "cardStatAc"
                      : "cardStatDis"
                  }`,
                }}
                value={jobStatus}
                onChange={handleJobChange}
              >
                {jobStatusList.map((jobStat, i) => {
                  return (
                    !jobStat.hide && (
                      <MenuItem
                        key={i}
                        className="menuStatus"
                        value={jobStat.status}
                      >
                        {jobStat.status}
                      </MenuItem>
                    )
                  );
                })}
              </TextField>
            </div>
            <p className="freqJobTitleTxt mt15">Virtual Assistant</p>
            <p className="postCreatedOn mt10">Created on 2023-12-12-</p>
            <p className="applicTxt mt10">
              20 Applicants&nbsp;&nbsp;&nbsp;21 Hits
            </p>
            <span className="dfac mt10">
              <p className="postCreatedOn cp">Edit</p> &nbsp; &nbsp;
              <p style={{ color: "#ccc" }}>|</p> &nbsp; &nbsp;
              <p className="postCreatedOn cp">Delete</p>
            </span>
          </div>
        </div>
        <h4 className="yourJobsText">Your workers</h4>
      </div>
    </div>
  );
};

export default EmployerProfile;
