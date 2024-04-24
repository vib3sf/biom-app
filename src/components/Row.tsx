import { BiomDto } from "../services/bioms/bioms.dto";

export function Row({ biomElem }: { biomElem: BiomDto }) {
  return (
    <tr>
      <td>{biomElem.name}</td>
      <td>{biomElem.taxId}</td>
      <td>{biomElem.abundanceScore}</td>
      <td>{biomElem.relativeAbundance}</td>
      <td>{biomElem.uniqeMatchesFrequency}</td>
    </tr>
  );
}
