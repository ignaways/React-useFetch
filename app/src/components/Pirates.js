import useFetch from "../hooks/use-fetch";
import "../App.css";
const Pirates = (props) => {
  const url = "http://localhost:3000/pirates";
  const { data, isLoading, isError } = useFetch(url);

  const clickHandler = (id) => {
    props.setId(id);
    props.setPage("detail");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.map((item) => {
        return (
          <p onClick={() => clickHandler(item.id)} key={item.id} className="pirates__text">
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default Pirates;
