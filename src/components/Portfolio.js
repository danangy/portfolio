import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Notification change oli with GPS",
    subtitle: "Html, PHP",
    image: "assets/img/project-1.jpg",
  },
  {
    id: 2,
    title: "Form submit auto push notif email",
    subtitle: "Html, NodeJs",
    image: "assets/img/form izin notif email.png",
  },
  {
    id: 3,
    title: "3d view image 360",
    subtitle: "Html, Javascript",
    image: "assets/img/3d image html.png",
  },

];

const Portfolio = () => {
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Portfolio"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a href={portfolio.image} className="gallery-link">
                    <img src={portfolio.image} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <a href={portfolio.image} className="gallery-link">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
