import { useState } from "react";
import "./App.css";
import { Table } from "./components/Table";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="search"></label>
        <input
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
          placeholder="Search..."
          id="search"
        ></input>
      </header>
      <Table search={search}></Table>
    </div>
  );
}

export default App;
