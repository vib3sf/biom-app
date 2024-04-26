import biomJson from "../../assets/biom.json";
import { BiomDto } from "./bioms.dto";

export const biomApi = {
  getAllRows: async (): Promise<Array<BiomDto>> => {
    return await Promise.all(
      biomJson.rows.map(async (_: any, index: number) => {
        return await getRow(index);
      })
    );
  },
  getTableHead: (): Array<string> => {
    return [
      "name",
      "tax id",
      "abundance score",
      "relative abundance",
      "unique matches freq",
    ];
  },
};

const getRow = async (index: number): Promise<BiomDto> => {
  return {
    name: await getName(index),
    taxId: await getTaxId(index),
    abundanceScore: await getAbundanceScore(index),
    relativeAbundance: await getRelativeAbundance(index),
    uniqeMatchesFrequency: await getUniqeMatchesFrequency(index),
  };
};

const getName = async (index: number): Promise<string> =>
  biomJson.rows[index].metadata.lineage[7].name;

const getTaxId = async (index: number): Promise<number> =>
  biomJson.rows[index].metadata.lineage[7].tax_id;

const getAbundanceScore = async (index: number): Promise<number> =>
  biomJson.data[index * 3 + 1][2];

const getRelativeAbundance = async (index: number): Promise<string> => {
  const relativeAbundance = biomJson.data[index * 3][2] * 100;
  return relativeAbundance < 0.01
    ? "<0.01%"
    : `${relativeAbundance.toFixed(2)}%`;
};

const getUniqeMatchesFrequency = async (index: number): Promise<number> =>
  biomJson.data[index * 3 + 2][2];
