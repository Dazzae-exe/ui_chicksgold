import React from "react";
import "../../styles/Footer/index.css";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";
import trustpilotLogo from "../../assets/svg/trustpilot.svg";
const SOCIAL_LINKS = [
  { id: 1, name: "facebook", icon: <IconBrandFacebook /> },
  { id: 2, name: "instagram", icon: <IconBrandInstagram /> },
  { id: 3, name: "twitter", icon: <IconBrandTwitter /> },
  { id: 4, name: "discord", icon: <IconBrandDiscord /> },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <figure className="footer-logo__image-container">
            <img
              src="https://chicksgold.com/logo/chicks-logo-large.svg"
              alt="CHICKS GOLD"
              className="footer-logo__image"
            />
            <a href="mailto:support@chicksgold.com">support@chicksgold.com</a>
          </figure>
          <div className="social-links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.name}`}
                className={`social-icon ${link.name}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Chicks Gold</h4>
            <ul>
              <li>
                <a href="#games">Games</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#copyright">Copyright Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Trust our assets</h4>
            <ul>
              <figure className="footer-column__trustpilot-logo">
                <img src={trustpilotLogo} alt="TRUSTPILOT" />
              </figure>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2017 - 2020 Chicksgold.com. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
