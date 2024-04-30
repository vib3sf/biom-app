import "./App.css";
import { Table } from "./components/Table/Table";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Table></Table>
      <Footer></Footer>
    </div>
  );
}

export default App;
