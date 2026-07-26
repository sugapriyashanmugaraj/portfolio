import "../../style/screens/education.css";

const steps = [
  {
    title: "MCA (2026)",
    subtitle: "8.7CGPA",
  },
  {
    title: "BSC-CS (2019)",
    subtitle: "8.4CGPA",
  },
  {
    title: "HSC (2016)",
    subtitle: "78%",
  },
  {
    title: "SSLC (2014)",
    subtitle: "94%",
  },
];

function Education() {
  return (
    <div className="progress-card">
      <div className="progress-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-top">
              <div className="circle">
                <i className="fa-solid fa-check"></i>
              </div>

              {index !== steps.length - 1 && <div className="line"></div>}
            </div>

            <div className="step-content">
              <h4>{step.title}</h4>
              <p className="subtitle">{step.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
