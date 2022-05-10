import classes from "./Tours.module.css";

const Tours = (props) => {
  let travelDestinations = props.data.map((ele) => {
    return (
      <li className={classes.card} key={ele.id}>
        <h1>{ele.name}</h1>
        <img src={ele.image} alt={`A tour in ${ele.name}`} />
      </li>
    );
  });
  return <ul>{travelDestinations}</ul>;
};

export default Tours;
