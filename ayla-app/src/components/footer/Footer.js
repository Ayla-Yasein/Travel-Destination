import classes from "./Footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/Instagram.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>A Porject by yasein burqan and sohaib almomani&copy;</h3>
      <div>
        <a href="http://www.facebook.com/" target="_blank" rel="noReferrer">
          <img src={facebook} />
        </a>
        <a href="http://www.instagram.com/" target="_blank" rel="noReferrer">
          <img src={instagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
