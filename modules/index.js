// Functions to be excecuted
import query from "../db/index.js";

// Select all
export async function getAllWords() {
  const data = await query(`SELECT * FROM dictionary;`);
  return data.rows;
}

// Filter by word
export async function getContentByWord(word) {
  const data = await query(
    `SELECT * FROM dictionary WHERE word ILIKE '%' || $1 || '%';`,
    [word]
  );
  return data.rows;
}

// Add new word on the dictionary
export async function createNewWordDefinition(word, example, definition) {
  const data = await query(
    `INSERT INTO dictionary (word, example, definition) VALUES ($1, $2, $3) RETURNING *;`,
    [word, example, definition]
  );
  return data.rows;
}
