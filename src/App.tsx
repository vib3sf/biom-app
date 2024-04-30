import { useState } from "react";
import "./App.css";
import { Table } from "./components/Table/Table";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Footer } from "./components/Footer/Footer";
import { useInput } from "./hooks/useInput";

function App() {
  const {value, onChange} = useInput("");
  return (
    <div className="App">
      <SearchBar onChange={onChange}></SearchBar>
      <Table search={value}></Table>
      <Footer></Footer>
    </div>
  );
}

export default App;
