import { useEffect, useState } from "react";
import { biomApi } from "../services/bioms/bioms.api";
import { BiomDto } from "../services/bioms/bioms.dto";

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
          {bioms.map((biom, index) => (
            <tr>
              <td>{biom.name}</td>
              <td>{biom.taxId}</td>
              <td>{biom.abundanceScore}</td>
              <td>{biom.relativeAbundance}</td>
              <td>{biom.uniqeMatchesFrequency}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
