import { useState, useEffect } from 'react';
import WordList from '../components/WordList';
import { generateWords, loadWordList } from '../utils/wordUtils';

export default function Home() {
  const [letters, setLetters] = useState('');
  const [words, setWords] = useState([]);
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    const fetchWordList = async () => {
      const loadedWordList = loadWordList();
      setWordList(loadedWordList);
    };

    fetchWordList();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedWords = generateWords(letters, wordList);
    setWords(generatedWords);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Word Spelling Application</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={letters}
          onChange={(e) => setLetters(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter letters"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Generate Words</button>
      </form>
      <WordList words={words} />
    </div>
  );
}
