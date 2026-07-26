import React, { useState } from "react";
import "../style/components/footer.css";

import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUserTie,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = formData;

    const body = `
Name : ${name}

Email : ${email}

Subject : ${subject}

Message :

${message}
`;

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=sugapriyashanmugaraj@gmail.com&su=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
  };

  const highlightChips = [
    "UGC Rank Holder",
    "Divisional chess winner",
    "Typewriter higher certified",
    "Quick Learner",
    "Positive Thinker",
    "Self Motivator",
    "Hard Worker cum Smart Worker",
    "Open to AI Development",
    "Creative Thinker",
  ];

  const quickLinks = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sugapriyashanmugaraj",
    },
    {
      title: "GitHub",
      link: "https://github.com/sugapriyashanmugaraj",
    },
    {
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=917092309393",
    },
    {
      title: "Email Me",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=sugapriyashanmugaraj@gmail.com",
    },
  ];

  return (
    <footer className="portfolioFooter">
      <div className="footerGlass">
        {/* LEFT */}

        <div className="footerLeft">
          <span className="footerTag">Let's Connect</span>

          <h2 className="footerTitle">
            Let's Build Something Amazing Together
          </h2>

          <p className="footerDesc">
            Whether you have an exciting opportunity, an innovative project, or
            simply want to connect, I'd be delighted to hear from you. Feel free
            to reach out anytime.
          </p>

          <div className="footerForm">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <button className="sendBtn" onClick={handleSubmit}>
              <FaPaperPlane />
              Send Message
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="footerRight">
          <div className="footerCard">
            <h3>
              <FaUserTie />
              Other than profession
            </h3>

            <div className="chipContainer">
              {highlightChips.map((chip, index) => (
                <span className="footerChip" key={index}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="footerInfoGrid">
            <div className="footerCard">
              <h3>
                <FaEnvelope />
                Contact
              </h3>

              <div className="contactItem">
                <FaEnvelope />
                <span>sugapriyashanmugaraj@gmail.com</span>
              </div>

              <div className="contactItem">
                <FaPhoneAlt />
                <span>+91 70923 09393</span>
              </div>

              <div className="contactItem">
                <FaMapMarkerAlt />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            <div className="footerCard">
              <h3>Quick Connect</h3>

              <div className="socialLinks"></div>
              {quickLinks.map((item, index) => {
                const getIcon = () => {
                  switch (item.title) {
                    case "LinkedIn":
                      return <FaLinkedinIn />;
                    case "GitHub":
                      return <FaGithub />;
                    case "WhatsApp":
                      return <FaWhatsapp />;
                    default:
                      return <FaEnvelope />;
                  }
                };

                return (
                  <button
                    key={index}
                    className="socialBtn"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    <span className="socialIcon">{getIcon()}</span>

                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomLeft">
          © {new Date().getFullYear()} Sugapriya Shanmugaraj
        </div>

        <div
          className="footerTop"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑ Back to Top
        </div>
      </div>
    </footer>
  );
};

export default Footer;
