import { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./App.css";

function App() {
  const [filter, setFilter] = useState('all');

  const changeFilter = (event) => {
    setFilter(event.target.attributes.value.value);
  };
  return (
    <>
      <NavBar changeFilter={changeFilter} />
      <News filter={filter}/>
    </>
  );
}

export default App;
