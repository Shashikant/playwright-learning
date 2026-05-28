import fs from 'fs';


export function getTestData(testCaseName: string) {
  const data = JSON.parse(fs.readFileSync('test-data/leadData.json', 'utf-8'));

  return data[testCaseName];
}