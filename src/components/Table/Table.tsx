import { useEffect, useRef, useState } from "react";
import { biomApi } from "../../services/biom/biom.api";
import { BiomDto } from "../../services/biom/biom.dto";
import { Row } from "../Row/Row";
import "./Table.css";
import { useSelector } from "react-redux";
import { SearchState } from "../../store";

export function Table() {
  const [biom, setBiom] = useState<Array<BiomDto>>([]);
  const biomLoad = useRef(false);
  const search = useSelector<SearchState, string>((state: SearchState) => state.searcher.search);

  const filterBiom = biom.filter((biomElem: BiomDto) =>
    biomElem.name.toLowerCase().includes(search)
  );

  useEffect(() => {
    const fetchBiom = async () => setBiom(await biomApi.getAllRows());

    biomLoad.current = true;
    fetchBiom();
  }, []);

  return (
    <div className="App-table-wrap">
      {biomLoad ? (
        filterBiom.length > 0 ? (
          <table className="App-table">
            <thead>
              <tr>
                {biomApi.getTableHead().map((elem: string) => (
                  <th key={elem}>{elem}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filterBiom.map((biomElem: BiomDto) => (
                <Row key={biomElem.name} biomElem={biomElem}></Row>
              ))}
            </tbody>
          </table>
        ) : (
          <p>There are no such bacteria in the table :(</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
