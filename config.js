// Connect the .env file with the process.env ??
// Why do we need this step?
// Can we have this information straight on the index.js file?
// new messages_1.DatabaseError(messageValue, length, name);

export const dbHost = process.env.PGHOST;
export const dbUser = process.env.PGUSER;
export const database = process.env.PGDATABASE;
export const password = process.env.PGPASSWORD;
export const dbPort = process.env.PGPORT;
