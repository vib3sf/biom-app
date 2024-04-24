import React, { useEffect } from "react";
import "./App.css";
import { biomApi } from "./services/bioms/bioms.api";
import { BiomDto } from "./services/bioms/bioms.dto";

function App() {
  const [bioms, setBioms] = React.useState<Array<BiomDto>>([]);
  const [biomsLoading, setBiomsLoading] = React.useState(false);

  useEffect(() => {
    async function fetchAllRows() {
      setBioms(await biomApi.getAllRows());
    }

    console.log(bioms);
    if(bioms.length !== 0) {
      setBiomsLoading(true);
    }
    else
      setTimeout(fetchAllRows, 1000);
  }, [bioms]);

  return (
    <div className="App">
      <header className="App-header">
        {biomsLoading ? bioms.map((biom, index) => (
          <p key={index}>
            {biom.name} {biom.taxId} {biom.relativeAbundance}
          </p>
        )) : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
