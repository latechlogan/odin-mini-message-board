const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

function insertNewMessage(messageData) {
  return pool.query(
    `
    INSERT INTO messages (text, username, added)
    VALUES ($1, $2, now())
    `,
    [messageData.text, messageData.username]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertNewMessage,
};
