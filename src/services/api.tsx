import biomJson from "../assets/biom.json";

export const api = {
  getAllRows: async (): Promise<Array<Array<string>>> => {
    return await Promise.all(
      biomJson.rows.map(async (_, index) => await getRow(index))
    );
  },
};

const getRow = async (index: number): Promise<Array<string>> => [
  await getName(index),
  await getTaxId(index),
  await getAbundanceScore(index),
  await getRelativeAbundance(index),
  await getUniqeMatchesFrequency(index),
];

const getName = async (index: number): Promise<string> =>
  biomJson.rows[index].metadata.title;

const getTaxId = async (index: number): Promise<string> =>
  biomJson.rows[index].metadata.tax_id.toString();

const getAbundanceScore = async (index: number): Promise<string> =>
  biomJson.data[index * 3 + 1][2].toString();

const getRelativeAbundance = async (index: number): Promise<string> =>
  `${(biomJson.data[index * 3][2] * 100).toFixed(2)}%`;

const getUniqeMatchesFrequency = async (index: number): Promise<string> =>
  biomJson.data[index * 3 + 2][2].toString();
