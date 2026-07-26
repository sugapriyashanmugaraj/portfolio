import React from "react";
import "../../style/screens/project.css";
import { projects } from "../../utils/constants";

export default function Projects() {
  return (
    <div className="card-container mt40">
      {projects.map((item, index) => {
        const isEven = (index + 1) % 2 === 0;

        return (
          <div key={item.id} className={`card-item ${isEven ? "even" : "odd"}`}>
            {/* Logo */}
            <img src={item.image} className="card-logo" alt="logo" />
            {/* <span>{item.logoText}</span> */}
            {/* </div> */}

            {/* Title Banner */}
            <div className="card-title-banner">
              <h3 className="card-title">{item.title}</h3>
            </div>

            {/* Link */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {item.url}
            </a>

            {/* Right Accent Borders */}
            <div className="border-pink" />
            <div className="border-black" />
          </div>
        );
      })}
    </div>
  );
}
