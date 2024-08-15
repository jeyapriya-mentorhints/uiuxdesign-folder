import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div id="footer">
      <div className="social media">
        Follow us on :
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebook} className="fontsa" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className="fontsa" />
          </li>
          <li>
            <FontAwesomeIcon icon={faXTwitter} className="fontsa" />
          </li>
        </ul>
      </div>
      <div className="email">
        Contact us:
        <p>MentorHints@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
