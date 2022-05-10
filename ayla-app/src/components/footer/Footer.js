import classes from "./Footer.module.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/Instagram.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>A Porject by yasein burqan&copy;</h3>
      <div>
        <a href="#">
          <img src={facebook} />
        </a>
        <a href="#">
          <img src={instagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
