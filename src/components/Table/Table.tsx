import { useEffect, useState } from "react";
import { biomApi } from "../../services/bioms/bioms.api";
import { BiomDto } from "../../services/bioms/bioms.dto";
import { Row } from "../Row/Row";
import "./Table.css"

export function Table({ search }: { search: string }) {
  const [biom, setBiom] = useState<Array<BiomDto>>([]);
  const [biomLoad, setBiomLoad] = useState(false);

  useEffect(() => {
    if (biom.length !== 0) setBiomLoad(true);
    else setTimeout(async () => setBiom(await biomApi.getAllRows()), 1000);
  }, [biom]);

  return (
    <div className="App-table-wrap">
      {biomLoad ? (
        <table className="App-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tax ID</th>
              <th>Abundance score</th>
              <th>Relative abundance</th>
              <th>Unique matches frequency</th>
            </tr>
          </thead>
          <tbody>
            {biom
              .filter((biomElem: BiomDto) =>
                biomElem.name.toLowerCase().includes(search)
              )
              .map((biomElem: BiomDto) => (
                <Row biomElem={biomElem}></Row>
              ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
