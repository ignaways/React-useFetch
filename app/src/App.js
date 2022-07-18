import { useState } from "react";
import Pirates from "./components/Pirates";
import PirateDetail from "./components/PirateDetail";
const App = () => {
  const [page, setPage] = useState("pirates");
  const [id, setId] = useState(null);

  switch (page) {
    case "detail":
      return <PirateDetail id={id} setPage={setPage} />;
    default:
      return <Pirates setPage={setPage} setId={setId} />;
  }
};
export default App;
