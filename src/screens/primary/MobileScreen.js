import "../../style/screens/mobile.css";

// SVG Logos dataset matching your requested tech stack
const skillLogos = {
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  scss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  tailwind:
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  mui: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

export default function FrontendSkillsMobile() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="screen-title">Frontend</h1>

      <div className="mobile-view-wrapper">
        {/* Outer Phone Shell */}
        <div className="phone-mockup">
          {/* Dynamic Island / Camera Punch Hole */}
          <div className="notch">
            <div className="camera"></div>
            <div className="sensor"></div>
          </div>

          {/* Status Bar */}
          <div className="phone-status-bar">
            <span className="time">9:41</span>
            <div className="status-icons">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>
          <div className="screen-viewport">
            {/* CARD 1: React Native & ReactJS */}
            <section className="skill-card">
              <div className="card-header">
                <h3>React Native & ReactJS</h3>
                <div className="header-logos">
                  <img
                    src={skillLogos.react}
                    alt="React"
                    className="spinning-react"
                  />
                </div>
              </div>

              <div className="mini-website-frame">
                <div className="browser-header">
                  <div className="window-buttons">
                    <span className="dot close"></span>
                    <span className="dot minimize"></span>
                    <span className="dot maximize"></span>
                  </div>
                  <div className="url-bar">local:3000</div>
                </div>

                <div className="browser-content">
                  <div className="react-hero">
                    <div className="hero-text">
                      <h4>React Core</h4>
                      <ul>
                        <li>• Components</li>
                        <li>• State & Hooks</li>
                        <li>• Cross-Platform Mobile</li>
                      </ul>
                    </div>
                    <img
                      src={skillLogos.react}
                      alt="React Logo"
                      className="large-react-logo spinning-react"
                    />
                  </div>
                </div>
              </div>

              <div className="card-footer-tags">
                <span className="tag">
                  <img src={skillLogos.react} alt="" /> React Native
                </span>
                <span className="tag">
                  <img src={skillLogos.react} alt="" /> ReactJS
                </span>
                <span className="tag">
                  <img src={skillLogos.redux} alt="" /> Redux
                </span>
              </div>
            </section>

            {/* CARD 2: JavaScript & TypeScript IDE split */}
            <section className="skill-card">
              <div className="card-header">
                <h3>JavaScript & TypeScript</h3>
              </div>

              <div className="ide-split-grid">
                {/* JavaScript Tab */}
                <div className="ide-column js-theme">
                  <div className="ide-tab">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="tab-title">javascript-original.js</span>
                  </div>
                  <div className="ide-content">
                    <div className="brand">
                      <img src={skillLogos.javascript} alt="JS" />
                      <div>
                        <strong>JavaScript</strong>
                        <small>Modern ESNext</small>
                      </div>
                    </div>
                    <ol className="code-lines">
                      <li>Arrow Functions</li>
                      <li>Array Methods</li>
                      <li>Async / Await</li>
                    </ol>
                  </div>
                </div>

                {/* TypeScript Tab */}
                <div className="ide-column ts-theme">
                  <div className="ide-tab">
                    <span className="dot red"></span>
                    <span className="dot green"></span>
                    <span className="tab-title">typescript-original.ts</span>
                  </div>
                  <div className="ide-content">
                    <div className="brand">
                      <img src={skillLogos.typescript} alt="TS" />
                      <div>
                        <strong>TypeScript</strong>
                        <small>Strict Types</small>
                      </div>
                    </div>
                    <ol className="code-lines">
                      <li>Type Interfaces</li>
                      <li>Generics</li>
                      <li>Type Safety</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* CARD 3: Styling Toolkit */}
            <section className="skill-card">
              <div className="card-header">
                <h3>Styling (CSS, SCSS, Tailwind, Bootstrap)</h3>
              </div>

              <div className="styling-stack">
                {/* CSS3 */}
                <div className="style-row">
                  <div className="tech-info">
                    <img src={skillLogos.css3} alt="CSS3" />
                    <div>
                      <strong>CSS3</strong>
                      <small>css3-original.svg</small>
                    </div>
                  </div>
                  <div className="color-swatches">
                    <span className="swatch blue"></span>
                    <span className="swatch cyan"></span>
                    <span className="swatch purple"></span>
                  </div>
                </div>

                {/* SCSS */}
                <div className="style-row">
                  <div className="tech-info">
                    <img src={skillLogos.scss} alt="SCSS" />
                    <div>
                      <strong>SCSS</strong>
                      <small>sass-original.svg</small>
                    </div>
                  </div>
                  <div className="color-swatches">
                    <span className="swatch pink"></span>
                    <span className="swatch rose"></span>
                  </div>
                </div>

                {/* Tailwind CSS */}
                <div className="style-row">
                  <div className="tech-info">
                    <img src={skillLogos.tailwind} alt="Tailwind" />
                    <div>
                      <strong>Tailwind</strong>
                      <small>tailwindcss-icon.svg</small>
                    </div>
                  </div>
                  <div className="class-pills">
                    <code>p-4</code>
                    <code>bg-sky-100</code>
                    <code>rounded-xl</code>
                  </div>
                </div>

                {/* Bootstrap */}
                <div className="style-row">
                  <div className="tech-info">
                    <img src={skillLogos.bootstrap} alt="Bootstrap" />
                    <div>
                      <strong>Bootstrap</strong>
                      <small>bootstrap-original.svg</small>
                    </div>
                  </div>
                  <div className="component-mock flex-gap">
                    <span className="bs-badge">B</span>
                    <div className="bs-btn-mock"></div>
                  </div>
                </div>

                {/* Material UI */}
                <div className="style-row">
                  <div className="tech-info">
                    <img src={skillLogos.mui} alt="Material UI" />
                    <div>
                      <strong>Material UI</strong>
                      <small>materialui-original.svg</small>
                    </div>
                  </div>
                  <div className="component-mock">
                    <div className="mui-card-mock"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* CARD 4: Python (Replacing Backend Section)
          <section className="skill-card python-card">
            <div className="card-header">
              <h3>Programming & Scripting</h3>
            </div>
            <div className="python-banner">
              <img
                src={skillLogos.python}
                alt="Python"
                className="python-icon"
              />
              <div className="python-details">
                <h4>Python</h4>
                <p>
                  Data logic, automation scripts, and utility backend functions.
                </p>
              </div>
            </div>
          </section> */}
          </div>

          {/* Home Bar Indicator */}
          <div className="home-bar"></div>
        </div>
      </div>
    </div>
  );
}
