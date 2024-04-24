import { useEffect, useState } from "react";
import { biomApi } from "../services/bioms/bioms.api";
import { BiomDto } from "../services/bioms/bioms.dto";
import { Row } from "./Row";

export function Table({ search }: { search: string }) {
  const [biom, setBiom] = useState<Array<BiomDto>>([]);
  const [biomLoad, setBiomLoad] = useState(false);

  useEffect(() => {
    if (biom.length !== 0) setBiomLoad(true);
    else setTimeout(async () => setBiom(await biomApi.getAllRows()), 1000);
  }, [biom]);

  return (
    <>
      {biomLoad ? (
        <table>
          <tr>
            <th>Name</th>
            <th>Tax ID</th>
            <th>Abundance score</th>
            <th>Relative abundance</th>
            <th>Unique matches frequency</th>
          </tr>
          {biom
            .filter((biomElem) => biomElem.name.toLowerCase().includes(search))
            .map((biomElem: BiomDto) => (
              <Row biomElem={biomElem}></Row>
            ))}
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
