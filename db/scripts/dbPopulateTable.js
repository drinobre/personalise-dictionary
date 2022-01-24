import query from "../index.js";

let dictionaryDb = [
  {
    id: 1,
    word: "Object",
    example: "objectName = {keyName: value, KeyName: value}",
    definition:
      "Also know as key/value pairs. Set of properties and the order doesn’t matter",
  },
  {
    id: 2,
    word: "assign operator",
    example: "let a = 5",
    definition: "use to declare variables",
  },
  {
    id: 3,
    word: "Variable",
    example: "let a = 5",
    definition:
      "referred to as buckets of information / pointer. Declare a variable using let (you can change but can’t be used more than once if not assign inside a function), const (you don’t want to change) or var (mutate and used on old version of javascript).",
  },
  {
    id: 4,
    word: "Expressions",
    example: null,
    definition:
      "Questions asked to Javascript which give us an answer back (produces a value)",
  },
  {
    id: 5,
    word: "Statements",
    example: "let a,b,c a=5 b=3 c=a+b",
    definition: "set of instructions (performs an action)",
  },
];

//invoke the function
async function populateDictionaryTable() {
  for (let i = 0; i < dictionaryDb.length; i++) {
    const word = dictionaryDb[i].word;
    const example = dictionaryDb[i].example;
    const definition = dictionaryDb[i].definition;

    const res = await query(
      `INSERT INTO dictionary (word, example, definition) VALUES ($1, $2, $3) RETURNING *`,
      [word, example, definition]
    );
    console.log(res.rows[0]);
  }
}

//invoke the function
populateDictionaryTable();
