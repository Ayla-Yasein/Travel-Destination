import classes from "./Header.css";
import logoImage from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className={classes.headerData}>
        <img src={logoImage} alt="logo" className={classes.img} />
        <h1 className={classes.header}>Travel Destinations</h1>
      </div>
      <nav>
        <a href="#">Home</a>
      </nav>
    </header>
  );
};

export default Header;
