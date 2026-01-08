#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR(255),
        username TEXT,
        added TIMESTAMP
    );
`;

async function migrate() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

migrate();
