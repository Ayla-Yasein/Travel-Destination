import { Link } from "react-router-dom";
function Tour(props) {
  return (
    <>
      <Link to={`/city/${props.id}`}>
        <div className="tours-section">
          <img src={props.image} alt={props.name} />
          <h1>{props.name}</h1>
          <p>{props.info}</p>
          <p>{props.price}</p>
        </div>
      </Link>
    </>
  );
}
export default Tour;
