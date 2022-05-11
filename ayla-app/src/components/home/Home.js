import "./Home.css";
import "../footer/Footer";
import "../header/Header";
import "../tours/tour/Tour";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tour from "../tours/tour/Tour";
import data from "../../data/db.json";

function Home(props) {
  return (
    <>
      <Header title="Travel Destination" />
      <p>Welcome Home</p>
      {data.map((tour) => {
        return <Tour image={tour.image} name={tour.name} id={tour.id} />;
      })}

      <Footer />
    </>
  );
}

export default Home;
