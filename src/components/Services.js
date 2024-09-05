import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Otak Atik Gatuk",
    // icon: "bi bi-phone",
    icon: "bi bi-laptop",
    desc: "'Otak atik gatuk' is a Javanese expression that literally translates to 'manipulate something to make it fit.' The deeper meaning of this phrase is the ability to tinker with or try out various solutions and adjustments until something fits or works, even if at first, it may seem unrelated or random",
  },
  {
    id: 2,
    name: "Esuk dhele sore tempe",
    icon: "bi bi-laptop",
    desc: "Javanese phrase 'esuk dhele sore tempe' which traditionally implies frequent changes in decisions. For me, it reflects the ability to swiftly adjust to new circumstances, ensuring effective responses to dynamic situations while maintaining relevance and focus on achieving goals.",
  },
  {
    id: 3,
    name: "Alon-alon waton kelakon",
    icon: "bi bi-triangle",
    desc: "I believe in perseverance and patience in achieving goals. Guided by the Javanese principle 'alon-alon waton kelakon' (slowly but surely), I focus on carefully planned and consistent actions. I value strategic, measured steps to ensure each action contributes positively to long-term success.",
  },
  {
    id: 4,
    name: "Ngudi kawruh, teteg ing lelakon",
    icon: "bi bi-columns",
    desc: "As someone committed to continuous learning and growth, I embrace the principle of 'Ngudi kawruh, teteg ing lelakon.' I am dedicated to acquiring new knowledge and expanding my skills while remaining steadfast and consistent in executing every task and project. This approach ensures effective application",
  },
  {
    id: 5,
    name: "Sabar lan telaten",
    icon: "bi bi-distribute-vertical",
    desc: "By adopting the principle of 'Sabar lan telaten' I not only focus on the process of learning and skill development but also apply this principle in every aspect of my life. This allows me to handle challenges more effectively, complete tasks with greater efficiency, and consistently apply the knowledge I’ve gained in both work and daily life",
  },
  {
    id: 6,
    name: "Aja gumunan",
    icon: "bi bi-globe2",
    desc: "'Aja gumunan' don't be easily surprised or impressed, is a principle I consistently apply in every aspect of my life. I strive to remain calm and objective when facing new or unusual situations. Instead of being swayed or overly impressed, I focus on facts and rational analysis, which helps me make well-considered decisions and maintain a clear perspective",
  },
];
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"why me"} subHeading={"<php echo 'why me' ?>"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
