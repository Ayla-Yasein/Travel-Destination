import React from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from "../../data/db.json";

const TourDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Header />

      <div className="container">
        {data
          .filter((city) => city.id === id)
          .map((ele) => (
            <>
              <img src={ele.image} alt={ele.name} />
              <h1>{ele.name}</h1>
              <p>{ele.info}</p>
              <h3>{"Price : " + ele.price}</h3>
            </>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default TourDetails;
