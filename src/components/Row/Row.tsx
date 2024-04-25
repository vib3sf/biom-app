import { biomApi } from "../../services/bioms/bioms.api";
import { BiomDto } from "../../services/bioms/bioms.dto";
import "./Row.css";

export function Row({ biomElem }: { biomElem: BiomDto }) {
  return (
    <tr>
      {Object.values(biomElem).map((elem, index) => (
        <td key={index} data-label={biomApi.getTableHead()[index]}>
          {elem}
        </td>
      ))}
    </tr>
  );
}
