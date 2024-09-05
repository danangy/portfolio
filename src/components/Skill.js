import SectionTitle from "./SectionTitle";

const skillsData = [
  { id: 1, name: "HTML", icon: "fab fa-html5" },
  { id: 2, name: "NodeJs", icon: "fab fa-node-js" },
  { id: 3, name: "React JS", icon: "fab fa-react" },
  { id: 4, name: "Python", icon: "fab fa-python" },
  { id: 5, name: "PHP", icon: "fab fa-php" },
  { id: 6, name: "Laravel", icon: "fab fa-laravel" },
  
];
const experiencesData = [
  {
    id: 1,
    date: "2024 - Present",
    designation: "IT Programmer Junior",
    company: "PT Horestco",
  },
  {
    id: 2,
    date: "2023 - 2024",
    designation: "Freelancer",
    // company: "pxdraft Ltd, UK",
  },
  // {
  //   id: 3,
  //   date: "Jan 2021 - Present",
  //   designation: "Creative Director",
  //   company: "pxdraft Ltd, UK",
  // },
  // {
  //   id: 4,
  //   date: "Jan 2021 - Present",
  //   designation: "Creative Director",
  //   company: "pxdraft Ltd, UK",
  // },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills and  Experience"}
              subHeading={"Experience"}
              text={
                "I have extensive experience in backend development, including designing, optimizing, and maintaining efficient systems, with a strong focus on performance, database management, and system integration."
              }
            />

            <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src="assets/img/smile.png" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
