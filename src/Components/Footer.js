import { Fade } from "react-reveal";

const Footer = ({ data }) => {
  const renderSocialLinks = () => {
    if (!data || !data.social || data.social.length === 0) {
      return null;
    }

    return data.social.map((network) => (
      <li key={ network.name }>
        <a href={ network.url }>
          <i className={ network.className }></i>
        </a>
      </li>
    ));
  };

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{ renderSocialLinks() }</ul>

            <ul className="copyright">
              <li>
                <span style={ { color: "#fff" } }>2024 || Made by &copy; </span>
                {/* <a
                  title="Udit sharma"
                  href="https://linktr.ee/imatul"
                  target="_blank"
                  rel="noreferrer"
                > */}
                  <span style={ { color: "#3d3d" } }>Udit Sharma</span>
                {/* </a> */}
              </li>
            </ul>
          </div>
        </Fade>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
