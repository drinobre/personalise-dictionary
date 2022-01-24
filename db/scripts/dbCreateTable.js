// Create table using SQL language

// import the query function
import query from "../index.js";

// create a table using SQL and store in a variable
const sqlQuery = `CREATE TABLE IF NOT EXISTS dictionary(
    id_Number SERIAL PRIMARY KEY,
    word TEXT,
    example TEXT,
    definition TEXT
)`;

// create a function to create the table

async function createTable() {
  const results = await query(sqlQuery);
  console.log(results);
}

//invoke the function
createTable();
