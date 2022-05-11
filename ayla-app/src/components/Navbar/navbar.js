import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/home" >Home</Link>
        <Link to="/city">City</Link>
      </nav>
    </>
  );
};

export default Navbar;
