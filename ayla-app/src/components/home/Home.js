import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

const Home = (props) => {
  return (
    <>
      <Header></Header>
      <Tours data={props.data}></Tours>
      <Footer></Footer>
    </>
  );
};

export default Home;
