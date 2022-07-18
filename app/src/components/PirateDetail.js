import useFetch from "../hooks/use-fetch";
import "../App.css";
const PiratesDetail = (props) => {
  const id = props.id;
  const url = `http://localhost:3000/pirates/${id ? id : 1}`;
  const { data: pirate, isLoading, isError } = useFetch(url);

  const clickHandler = () => {
    props.setPage("pirates");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const { name, age } = pirate;
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <p onClick={clickHandler} className="pirates__text">
        Back
      </p>
    </div>
  );
};

export default PiratesDetail;
