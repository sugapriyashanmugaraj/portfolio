import appImages from "../../assets";
import "../../style/screens/main.css";
import "../../style/screens/home.css";
import React, { Fragment, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import Education from "./Education";
import Experience from "./Experience";
import Achievement from "./Achievement";
import MobileScreen from "./MobileScreen";
import Backend from "./Backend";
import Projects from "./Projects";

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const email = "sugapriyashanmugaraj.s@gmail.com";
  const phone = "+91 7092309393";
  const linkedin = "https://www.linkedin.com/in/sugapriyashanmugaraj";

  React.useEffect(() => {
    const typingText = document.querySelector(".typingText");

    const handleAnimationEnd = () => {
      setAnimationComplete(true);
      if (typingText) {
        typingText.style.animation = "changeBorderColor 1s forwards";
      }
    };

    if (typingText) {
      typingText.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      // Cleanup event listener when component unmounts
      if (typingText) {
        typingText.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="homeTagLinesCont mt10">
        <div className="tagImageAnim">
          <div className="contactStripCont">
            <div className="imageSection">
              <div className="tagImgLhs">
                <img
                  alt="Profile"
                  src={appImages.profPic}
                  className="tagLineIcon"
                />
              </div>

              <div className="tagImgRhs">
                <img
                  alt="search"
                  src={appImages.icons.searchGrey}
                  className="tagLineIconRhs"
                />
              </div>
            </div>

            <div className="contactDetails">
              <div className="contactStripItem">
                <FaEnvelope className="contactStripIcon" />
                <a className="contactStripText" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>

              <div className="contactStripItem">
                <FaPhoneAlt className="contactStripIcon" />
                <a
                  className="contactStripText"
                  href={`tel:${phone.replace(/\s/g, "")}`}
                >
                  {phone}
                </a>
              </div>

              <div className="contactStripItem">
                <FaLinkedinIn className="contactStripIcon" />
                <a
                  className="contactStripText"
                  href={`https://${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="typingAnim">
          <h1 className="tagLineHeadTxt">
            <span
              className={`typingText ${
                animationComplete ? "changeBorderColor text1" : "text1"
              }`}
            >
              Sugapriya S, Senior Software Engineer:
            </span>
          </h1>
          <h1 className="tagLineHeadTxt tagLineHeadTxtP">
            <span className="text2">Turning Ideas into Impactful Apps!</span>
          </h1>
        </div>
      </div>
      <h1 className="jobFreqSearch mt30">About Me</h1>
      <div className="smallSep mt10" />

      <p className="about-text mt20">
        I am a <strong>Senior Software Engineer</strong> with
        <strong> 5+ years of experience</strong> specializing in
        <strong> React Native</strong>, <strong>React.js</strong>, and
        <strong> full-stack JavaScript development</strong>. Throughout my
        career, I have designed and developed scalable applications for
        <strong> Android, iOS, and the Web</strong>, delivering products that
        are reliable, performant, and user-centric.
      </p>

      <p className="about-text">
        My experience spans multiple industries including
        <strong> Food Delivery</strong>, <strong>Retail</strong>,
        <strong> Healthcare</strong>, <strong>Education</strong>,
        <strong> FinTech</strong>, and
        <strong> Enterprise Solutions</strong>, where I have transformed
        business requirements into production-ready applications.
      </p>

      <p className="about-text">
        I enjoy solving complex technical challenges, optimizing application
        performance, integrating modern APIs, and creating intuitive user
        interfaces that enhance user engagement.
      </p>

      <p className="about-text">
        Beyond development, I continuously explore
        <strong> AI-assisted software development</strong>, emerging
        technologies, modern architecture patterns, and engineering best
        practices to deliver high-quality software that scales with business
        growth.
      </p>
      <div className="freqSep mt10" />

      <h1 className="jobFreqSearch mt30">Technology Stack</h1>
      <div className="smallSep mt10" />
      <div className="tech-stack-container">
        <MobileScreen />
        <Backend />
      </div>

      <h1 className="jobFreqSearch mt30">Featured Projects</h1>
      <div className="smallSep mt10" />
      <Projects />
      <div style={{ height: 30 }} />

      <div className="mt40">
        <h1 className="jobFreqSearch ">Career Timeline</h1>
        <div className="smallSep mt10" />
        <Experience />
      </div>

      <div className="mt20">
        <h1 className="jobFreqSearch">Key Achievements</h1>
        <div className="smallSep mt10" />
        <Achievement />
      </div>
      <div className="mt30">
        <h1 className="jobFreqSearch">Academic Background</h1>
        <div className="smallSep mt10" />
        <Education />
      </div>
      <div style={{ height: "50px" }} />
    </Fragment>
  );
};

export default Home;
