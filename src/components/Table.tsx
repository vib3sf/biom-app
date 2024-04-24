import { useEffect, useState } from "react";
import { biomApi } from "../services/bioms/bioms.api";
import { BiomDto } from "../services/bioms/bioms.dto";
import { Row } from "./Row";

export function Table() {
  const [bioms, setBioms] = useState<Array<BiomDto>>([]);
  const [biomsLoad, setBiomsLoad] = useState(false);

  useEffect(() => {
    async function fetchAllRows() {
      setBioms(await biomApi.getAllRows());
    }

    if (bioms.length !== 0) setBiomsLoad(true);
    else setTimeout(fetchAllRows, 1000);
  }, [bioms]);

  return (
    <>
      {biomsLoad ? (
        <table>
          <tr>
            <th>Name</th>
            <th>Tax ID</th>
            <th>Abundance score</th>
            <th>Relative abundance</th>
            <th>Unique matches frequency</th>
          </tr>
          {bioms.map((biom: BiomDto) => (
            <Row biom={biom}></Row>
          ))}
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
