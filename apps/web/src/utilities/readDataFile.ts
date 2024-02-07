import fs from "fs/promises";
import path from "path";

const readDataFile = async (file: string) => {
  const filePath = path.join(process.cwd(), `src/data/${file}`);
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
};

export default readDataFile;
