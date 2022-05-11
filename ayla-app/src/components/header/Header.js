/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from "./Header.css";
import logoImage from "../../assets/logo3.png";

const Header = () => {
  return (
    <header>
      <div className={classes.headerData}>
        <a>
          <img class="logo" src={logoImage} alt="logo" className={classes.img} />
        </a>
        <h1 className={classes.header}></h1>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">City</a>
      </nav>
    </header>
  );
};

export default Header;
