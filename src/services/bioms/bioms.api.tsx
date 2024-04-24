import biomJson from "../../assets/biom.json";
import { BiomDto } from "./bioms.dto";

export const biomApi = {
  getAllRows: async (): Promise<Array<BiomDto>> => {
    return await Promise.all(
      biomJson.rows.map(async (_: any, index: number) => await getRow(index))
    );
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
  biomJson.rows[index].metadata.title;

const getTaxId = async (index: number): Promise<number> =>
  biomJson.rows[index].metadata.tax_id;

const getAbundanceScore = async (index: number): Promise<number> =>
  biomJson.data[index * 3 + 1][2];

const getRelativeAbundance = async (index: number): Promise<string> =>
  `${(biomJson.data[index * 3][2] * 100).toFixed(2)}%`;

const getUniqeMatchesFrequency = async (index: number): Promise<number> =>
  biomJson.data[index * 3 + 2][2];
