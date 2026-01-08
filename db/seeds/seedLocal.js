#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
    INSERT INTO messages (text, username, added)
    VALUES ('Hi there', 'Amando', now());
`;

async function seedLocal() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

seedLocal();
