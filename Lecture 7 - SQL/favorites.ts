import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

type FavoriteData = {
  Timestamp: string;
  language: string;
  problem: string;
};

(() => {
  const csvFilePath = path.resolve(__dirname, 'favorites.csv');

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  parse(
    fileContent,
    {
      delimiter: ',',
      columns: true,
    },
    (error, result: FavoriteData[]) => {
      if (error) {
        console.log(error, 'ERROR!');
      }

      console.log(result, 'RESULT');
    }
  );
})();
