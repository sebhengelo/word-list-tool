import React from 'react';

const WordList = ({ words }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Generated Words</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index} className="border-b p-2">{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
