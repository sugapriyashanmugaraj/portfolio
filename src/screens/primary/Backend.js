import "../../style/screens/backend.css";
import { FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";

const Monitor = () => {
  const backendSkills = [
    { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
    { name: "NodeJS", icon: <FaNodeJs style={{ color: "#339933" }} /> },
    { name: "ExpressJS", icon: <SiExpress style={{ color: "#ffffff" }} /> },
  ];

  const databaseSkills = [
    { name: "Firebase", icon: <SiFirebase style={{ color: "#FFCA28" }} /> },
    { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
    { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
    { name: "GraphQL", icon: <SiGraphql style={{ color: "#E10098" }} /> },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="screen-title">Backend and Others</h1>

      <div className="monitor-container">
        {/* Outer Monitor Frame */}
        <div className="monitor-screen-frame">
          {/* Inner Purple Area */}
          <div className="monitor-inner-screen">
            {/* Terminal / Code Area */}
            <div className="terminal-window">
              {/* Header / Window Bar */}
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-tab-title">
                  backend_skills.config
                </span>
              </div>

              {/* Content Display */}
              <div className="terminal-body">
                {/* Backend Tech Section */}
                <div className="skills-group">
                  <h3 className="section-title">Backend Stack</h3>
                  <div className="skills-grid">
                    {backendSkills.map((skill, index) => (
                      <div className="skill-chip" key={index}>
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database Section */}
                <div className="skills-group">
                  <h3 className="section-title">
                    <FaDatabase className="db-heading-icon" /> Databases
                  </h3>
                  <div className="skills-grid">
                    {databaseSkills.map((skill, index) => (
                      <div className="skill-chip" key={index}>
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitor Bezel Bottom Dots */}
        <div className="bezel-dots">
          <span className="bezel-dot small"></span>
          <span className="bezel-dot medium"></span>
          <span className="bezel-dot small"></span>
        </div>

        {/* Stand Neck */}
        <div className="monitor-stand-neck">
          <div className="stand-shadow"></div>
        </div>

        {/* Stand Base */}
        <div className="monitor-stand-base"></div>
      </div>
    </div>
  );
};

export default Monitor;
