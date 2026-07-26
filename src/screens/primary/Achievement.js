import appImages from "../../assets";
import "../../style/screens/achievement.css";

// FontAwesome or Lucide icons can be used. Using Inline SVGs/FontAwesome icons here.
const achievementsData = [
  {
    id: 1,
    title: "Best Performer of Team Q2 - 2024",
    image: appImages.awards.awardC,
    alt: "Milestone One Image",
  },
  {
    id: 2,
    title: "Employee of the year - 2023, Wellness Ace",
    image: appImages.awards.awardAP,
    alt: "Milestone Two Image",
  },
  {
    id: 3,
    title: "Best Performer of the Team - 2021",
    image: appImages.awards.awardTG,
    alt: "Milestone Three Image",
  },
];

const Achievement = () => {
  return (
    <div className="achievement-container">
      {/* Timeline Section */}
      <div className="timeline">
        {/* Central Connecting Line */}
        <div className="timeline-line"></div>

        {achievementsData.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Center Icon Badge */}
            <div className="icon-badge">
              <i className="fa-solid fa-award"></i>
            </div>

            {/* Card Content */}
            <div className="card-content">
              <div className="card-image">
                <img src={item.image} alt={item.alt} />
              </div>
              <h3 className="card-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
