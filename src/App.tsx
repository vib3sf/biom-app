import { useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <SearchBar setSearch={setSearch}></SearchBar>
      <Table search={search}></Table>
    </div>
  );
}

export default App;
