import useFetch from "./hooks/useFetch";
import './App.css';
const App = () => {
  const { data, isLoading, isError } = useFetch("https://my-json-server.typicode.com/ignaways/fake-api-anime/data");
  return (
    <div className="container__main">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {
        data.length > 0 &&
        <div>
          {
            data.map((e, i) => {
              return <div className='content__text' key={i}> * {e.title}</div>
            })
          }
        </div>
      }
    </div>
  )
};
export default App;
