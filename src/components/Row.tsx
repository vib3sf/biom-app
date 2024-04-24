import { BiomDto } from "../services/bioms/bioms.dto";

export function Row({ biomElem }: { biomElem: BiomDto }) {
  return (
    <tr>
      <td data-label="name">{biomElem.name}</td>
      <td data-label="tax id">{biomElem.taxId}</td>
      <td data-label="abundance score">{biomElem.abundanceScore}</td>
      <td data-label="relative abundance">{biomElem.relativeAbundance}</td>
      <td data-label="unique matches frequency">
        {biomElem.uniqeMatchesFrequency}
      </td>
    </tr>
  );
}
