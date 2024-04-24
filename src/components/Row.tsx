import { BiomDto } from "../services/bioms/bioms.dto";

export function Row({ biom }: { biom: BiomDto }) {
  return (
    <tr>
      <td>{biom.name}</td>
      <td>{biom.taxId}</td>
      <td>{biom.abundanceScore}</td>
      <td>{biom.relativeAbundance}</td>
      <td>{biom.uniqeMatchesFrequency}</td>
    </tr>
  );
}
