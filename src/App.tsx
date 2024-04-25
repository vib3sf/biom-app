import { useState } from "react";
import "./App.css";
import { Table } from "./components/Table/Table";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <SearchBar setSearch={setSearch}></SearchBar>
      <Table search={search}></Table>
      <Footer></Footer>
    </div>
  );
}

export default App;
