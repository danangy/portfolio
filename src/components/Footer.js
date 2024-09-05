const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">
              {/* <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a> */}
              <a href="https://www.instagram.com/danangy_/">
                <i className="fab fa-instagram" />
              </a>
              <a href="www.linkedin.com/in/danang-yanurianto-02a976140">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/danangy">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="m-0">
              © {new Date().getFullYear()} copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
