import fs from 'fs';
import path from 'path';

export const generateWords = (letters, wordList) => {
  const results = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      results.push(m.join(''));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(letters.split(''));

  return results.filter(word => wordList.includes(word));
};

export const loadWordList = () => {
  const filePath = path.join(__dirname, '../assets/nederlands.txt');
  const data = fs.readFileSync(filePath, 'utf-8');
  return data.split('\n').map(word => word.trim());
};
