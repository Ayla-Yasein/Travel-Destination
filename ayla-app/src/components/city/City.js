import "./City.css";
import "../footer/Footer";
import "../header/Header";
import "../tours/tour/Tour";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from "../../data/db.json";
import Tour from "../tours/tour/Tour";

function City(props) {
  return (
    <>
      <Header />

      <p>Welcome City</p>
      <h1>
        {data.map((tour) => {
          return <Tour image={tour.image} name={tour.name} id={tour.id} price={"price : " + tour.price} />;
        })}
      </h1>

      <Footer />
    </>
  );
}

export default City;
