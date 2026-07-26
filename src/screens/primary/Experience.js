import "../../style/screens/experience.css";

const journeyData = [
  {
    id: 1,
    name: "Sr. Software Engineer",
    classYear: "Oct 2025 - Present",
    institution: "FoodHub Software Solutions",
    location: "Chennai",
    description:
      "Passionate about ocean conservation and marine ecosystems. I am pursuing a degree in Marine Biology at Red University. My academic interests include coastal restoration, marine animal behavior, and the impact of climate change on ocean life.",
    image: "https://brand.foodhub.com/images/png/logo_vertical_new.png",
    email: "alicenoreman@email.com",
    resumeUrl: "#",
    linkedinUrl: "#",
    websiteUrl: "#",
    tech: ["React Native"],
    points: [
      "Contributed to the MyTakeAway application using React Native for Android, iOS, and Web.",
      "Delivered continuous and consistent features and enhancements as part of the FastTrack Delivery Team.",
      "Implemented new features and resolved production issues.",
      "Built reusable and scalable UI components.",
      "Integrated REST APIs for authentication, menu management, cart, orders, and customer profile modules.",
      "Optimized application performance, responsiveness, and rendering efficiency across platforms.",
      "Collaborated with UI/UX designers, QA engineers, and backend developers to deliver quality solutions.",
      "Maintained code quality through reviews, Git, and best practices.",
    ],
  },
  {
    id: 2,
    name: "Software Engineer",
    classYear: "Jan 2024 - Oct 2025",
    institution: "Madura Coats Pvt Ltd",
    location: "Madurai",
    description:
      "Passionate about ocean conservation and marine ecosystems. I am pursuing a degree in Marine Biology at Red University. My academic interests include coastal restoration, marine animal behavior, and the impact of climate change on ocean life.",
    image: "https://cdn.coats.com/wp-content/uploads/coats-logo.svg",
    email: "alicenoreman@email.com",
    resumeUrl: "#",
    linkedinUrl: "#",
    websiteUrl: "#",
    tech: ["React Native", "ReactJS", "NodeJS", "Express"],
    points: [
      "Built scalable UI components for high-performance mobile apps using React Native and TypeScript.",
      "Supported React-based web applications and worked in the Firebase backend with NodeJS.",
      "Strong familiarity with Agile development lifecycle, Jira Tracking.",
      "Worked on connecting GraphQL queries.",
      "Familiar with both iOS and Android Platforms.",
      "Delivered applications from scratch, key features that improve user engagement and efficiency.",
      "Worked with Snyk and SonarQube for code quality and security.",
      "Worked on Play Store and App Store deployments.",
      "Worked in version control, CI/CD pipelines, and production rollouts.",
    ],
  },
  {
    id: 3,
    name: "Software Developer",
    classYear: "Sep 2021 - Jan 2024",
    institution: "avancerPI Solutions",
    location: "Bangalore",
    description:
      "Passionate about ocean conservation and marine ecosystems. I am pursuing a degree in Marine Biology at Red University. My academic interests include coastal restoration, marine animal behavior, and the impact of climate change on ocean life.",
    image:
      "https://www.avancerpi.com/static/media/AvancerPILogoDarkBlue.39d311b2747f617aa5d4ee6e7472c0f0.svg",
    email: "alicenoreman@email.com",
    resumeUrl: "#",
    linkedinUrl: "#",
    websiteUrl: "#",
    tech: ["ReactJS", "React Native", "NodeJS", "Express", "MongoDB", "MySQL"],
    points: [
      "Served as a Full Stack MERN developer, owning UI/UX to deployment of internal projects and products.",
      "Developed and deployed scalable admin portals and internal dashboards with React, Node.js, Express, MongoDB and Material UI.",
      "Deployed web applications on VPS servers using Nginx, SSL certificate management.",
      "Managed end-to-end feature lifecycles and improved app performance and maintainability.",
      "Collaborated closely with stakeholders and design teams to translate business requirements into technical solutions.",
      "Guided junior developers through code reviews and onboarding processes.",
    ],
  },
  {
    id: 4,
    name: "Jr. Software Developer",
    classYear: "Mar 2020 - Sep 2021",
    institution: "Technogenesis Software Solutions",
    location: "Madurai",
    description:
      "Passionate about ocean conservation and marine ecosystems. I am pursuing a degree in Marine Biology at Red University. My academic interests include coastal restoration, marine animal behavior, and the impact of climate change on ocean life.",
    image: "https://www.technogenesis.in/images/TG_Logo%20Black.svg",
    email: "alicenoreman@email.com",
    resumeUrl: "#",
    linkedinUrl: "#",
    websiteUrl: "#",
    tech: ["React Native", "ReactJS"],
    points: [
      "Worked as a mobile and web app developer across a variety of industry-focused projects.",
      "Delivered multiple internal and client-facing applications for web and mobile platforms.",
      "Delivered products that serve different industries.",
      "Integrated RESTful APIs using Axios and handled authentication flows.",
      "Contributed to the full development lifecycle from requirement gathering to deployment.",
      "Delivered cross-platform compatibility and responsive design in mobile applications.",
      "Guided junior developers through code reviews and onboarding processes.",
    ],
  },
];

const Card = ({ item }) => {
  return (
    <div className="card">
      {/* Profile Image */}
      <div className="card-image-wrapper">
        <img src={item.image} alt={item.name} className="card-image" />
      </div>

      {/* Red Divider Line */}
      <div className="card-divider" />

      {/* Card Content Area */}
      <div className="card-body">
        <h3 className="card-name">{item.name}</h3>
        <p className="card-subheading">
          {item.classYear}, {item.location}
        </p>
        <p className="card-institution">{item.institution}</p>

        <ul className="card-bullet-list">
          {item.points.map((point, index) => (
            <li key={index} className="card-bullet-item">
              {point}
            </li>
          ))}
        </ul>

        {/* <div>
          <div className="tech-title">Tech Stack</div>
          <div className="tech-container">
            {item.tech.map((tech, index) => (
              <span className="tech-chip" key={index}>
                {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default function ExperienceJourney() {
  return (
    <div className="cards-container">
      {journeyData.map((data) => (
        <Card key={data.id} item={data} />
      ))}
    </div>
  );
}
