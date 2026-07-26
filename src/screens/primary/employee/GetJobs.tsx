import { CheckBox, Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";
import "../../../style/screens/jobs/jobsList.css";
import { useNavigate } from "react-router-dom";

const GetJobs = () => {
  const data = [
    {
      jobDesignation: "Frontend Developer",
      description: "A skilled developer proficient in frontend technologies.",
      author: "John Doe",
      package: "basic",
      date: "2024-01-10",
      workType: "full time",
    },
    {
      jobDesignation: "UI/UX Designer",
      description: "An expert in crafting user interfaces and experiences.",
      author: "Jane Smith",
      package: "intermediate",
      date: "2024-01-11",
      workType: "full time",
    },
    {
      jobDesignation: "Full Stack Engineer",
      description: "Experienced in both frontend and backend technologies.",
      author: "Bob Johnson",
      package: "advanced",
      date: "2024-01-12",
      workType: "full time",
    },
    // Add more records as needed...
    {
      jobDesignation: "Part-time React.js Developer",
      description:
        "Specializing in building React applications on a part-time basis.",
      author: "Alice Brown",
      package: "basic",
      date: "2024-01-15",
      workType: "part time",
    },
    {
      jobDesignation: "Data Scientist",
      description:
        "Mastering the implementation of various data structures in Python.",
      author: "Charlie Wilson",
      package: "intermediate",
      date: "2024-01-16",
      workType: "any",
    },
    {
      jobDesignation: "Web Designer",
      description: "Creating responsive and mobile-friendly websites with CSS.",
      author: "Eva Martinez",
      package: "basic",
      date: "2024-01-17",
      workType: "full time",
    },
    {
      jobDesignation: "Database Administrator",
      description: "Managing databases with expertise in MongoDB.",
      author: "David Lee",
      package: "advanced",
      date: "2024-01-18",
      workType: "full time",
    },
    {
      jobDesignation: "Angular Developer",
      description:
        "Deep diving into the Angular framework for web development.",
      author: "Grace Chen",
      package: "advanced",
      date: "2024-01-19",
      workType: "full time",
    },
    {
      jobDesignation: "Machine Learning Engineer (Part-time)",
      description:
        "Applying machine learning techniques using Python in part-time roles.",
      author: "Samuel Davis",
      package: "advanced",
      date: "2024-01-20",
      workType: "part time",
    },
    {
      jobDesignation: "Web Security Analyst",
      description: "Securing web applications with best practices.",
      author: "Olivia White",
      package: "intermediate",
      date: "2024-01-21",
      workType: "full time",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="jobsListOut mt30">
      <div className="jobSearchBarJobs">
        <TextField
          placeholder="Search for a job title or company"
          fullWidth
          InputProps={{
            className: "jobSearchJobsInp",
            startAdornment: (
              <div className="postJobIcon">
                <Search className="searchJobsL" />
              </div>
            ),
            endAdornment: (
              <button className="searchBarInnBtn cp">Search</button>
            ),
          }}
        />
      </div>
      <div className="jobsListInCont">
        <section className="filterSection">
          <p className="filterHeading">Filter by skills:</p>
          <p className="mt10 jobsListSearchTxt">Search upto 3 skills</p>
          <TextField
            placeholder="Search for skills"
            InputProps={{
              className: "jobSearchFilterInp mt10",
              startAdornment: (
                <div className="postJobIcon">
                  <Search className="searchJobsL" />
                </div>
              ),
              //   endAdornment: (
              //     <button className="searchBarInnBtn cp filtSearchBtn">
              //       Search
              //     </button>
              //   ),
            }}
          />
          <div className="mt30 mb30 filterSep" />
          <p className="mt10 jobsListSearchTxt">Employment type</p>
          <div className="dfac mt10">
            <CheckBox fontSize="small" />
            <p
              className="jobsListSearchTxt ml10"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              Employment type
            </p>
          </div>
          <div className="dfac mt10">
            <CheckBox fontSize="small" />
            <p
              className="jobsListSearchTxt ml10"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              Part-time
            </p>
          </div>
          <div className="dfac mt10">
            <CheckBox fontSize="small" />
            <p
              className="jobsListSearchTxt ml10"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              Full-time
            </p>
          </div>
          <button
            className="seeMoreBtn cp mt20"
            style={{
              marginTop: 0,
              border: "0.25px solid #ccc",
              fontSize: 16,
              height: "30px",
              width: "90%",
            }}
            onClick={() => {}}
          >
            Refine Search
          </button>
        </section>
        <section className="listSection">
          <p className="jobsCountList">Displaying 27 out of 27 jobs</p>
          {data.map((jobData, i) => {
            return (
              <div className="jobListJobCard" key={i}>
                <div className="empProfileAvatarCont">
                  <img
                    alt="empProfile"
                    src="https://picsum.photos/200/300"
                    className="empProfileAvatar"
                  />
                </div>
                <div className="ml15">
                  <h6 className="jobListCardTitle">
                    {jobData?.jobDesignation}{" "}
                    {jobData?.workType === "any" ? (
                      <span className="jobTypeTextAny">
                        {jobData?.workType}
                      </span>
                    ) : jobData?.workType === "part time" ? (
                      <span className="jobTypeTextAny jobTypeTextPart">
                        {jobData?.workType}
                      </span>
                    ) : (
                      <span className="jobTypeTextAny jobTypeTextFull">
                        {jobData?.workType}
                      </span>
                    )}
                  </h6>
                  <span className="dfac mt5">
                    <p className="jobPoster ">Max Gal &nbsp;&nbsp; </p>
                    <p className="posterDateSep"> . &nbsp;&nbsp;</p>
                    <p className="postedOnTxt">Posted on Jan 10, 2024 </p>
                  </span>
                  <span>
                    <p className="packageTxt mt5">Let's discuss</p>
                  </span>
                  <span className="df container">
                    <p className="jobDescListTxt mt10">
                      {String(`Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining
              essentially unchanged`).substring(0, 325)}
                      ...
                      <span
                        className="seeMoreJobList"
                        onClick={() => {
                          navigate("/job?id=1");
                        }}
                      >
                        See more
                      </span>
                    </p>
                  </span>
                </div>
              </div>
            );
          })}
          <div className="jobListPagCont">
            <div className="singlePageCont">
              <p className="pageNum">{"First"}</p>
            </div>
            <div className="singlePageCont">
              <p className="pageNum">{"<"}</p>
            </div>
            <div className="singlePageCont">
              <p className="pageNum">1</p>
            </div>
            <div className="singlePageCont">
              <p className="pageNum">2</p>
            </div>
            <div className="singlePageCont">
              <p className="pageNum">3</p>
            </div>
            <div className="singlePageCont">
              <p className="pageNum">{">"}</p>
            </div>
            <div className="singlePageCont">
              <p className="pageNum">{"Last"}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetJobs;
