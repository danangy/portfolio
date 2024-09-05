const Home = () => {
  return (
<section id="home" className="home-section">
  <div className="effect-1">
    <img src="assets/img/effect-1.svg" className="svg" alt="image" />
  </div>
  <div className="effect-2">
    <img src="assets/img/effect-2.svg" className="svg" alt="image" />
  </div>
  <div className="container">
    <div className="row min-vh-100 align-items-center">
      <div className="col-lg-12 pe-xl-5 py-5">
        <div className="home-intro one-page-nav">
          <h6>
            <span>print("Hello world")</span>
          </h6>
          <h1>
            <br />
            Here We Go
          </h1>
          <p>
            The world of programming is a field that I am currently immersed in. Within it, I find challenges and opportunities to create innovative technological solutions. My name is Danang Yanurianto, S.Kom, an IT programmer with a deep passion for developing software that solves real-world problems and enhances efficiency. With skills in Node.js, Python, and PHP, I focus on developing applications and systems that not only meet needs but also systematically solve problems.
          </p>
          <div className="btn-bar">
            <a className="px-btn px-btn-theme" href="#contactus">
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};
export default Home;
