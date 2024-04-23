import React, { useEffect } from "react";
import "./App.css";
import { api } from "./services/api";

function App() {
  const [bioms, setBioms] = React.useState<Array<Array<number | string>>>([[]]);

  useEffect(() => {
    async function fetchAllRows() {
      setBioms(await api.getAllRows());
    }
    setTimeout(fetchAllRows, 5000);
  });

  return (
    <div className="App">
      <header className="App-header">
        {bioms.map((biom, index) => (
          <p key={index}>
            {index}: 
            {biom.map((row, row_index) => (
              <span key={row_index}>{row} </span>
            ))}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
