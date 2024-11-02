# Word Spelling Application

This project is a web application built with NextJS, Tailwind CSS, and the Preline framework. It allows users to input a few letters and lists out all different words that can be spelled with those letters.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application.

## Usage Instructions

1. Open the application in your browser.
2. Enter a few letters in the input field.
3. Click the "Generate Words" button.
4. The application will display a list of words that can be formed with the input letters.

## Word List Loading

The application now supports loading a word list from a remote URL. The word list is used as a reference for the possible words to generate. The words are fetched and parsed from the provided URL when the application loads.
