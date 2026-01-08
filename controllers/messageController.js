const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
}

function getNewMessageForm(req, res) {
  res.render("form", {
    errors: null,
    username: "",
    message: "",
  });
}

const validateMessage = [
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 1, max: 255 })
    .withMessage("Username must be 255 characters or less."),
  body("message")
    .trim()
    .notEmpty()
    .isLength({ min: 1, max: 1000 })
    .withMessage("The character limit on messages is 1000 charcters."),
];

async function postNewMessage(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).render("form", {
      errors: result.mapped(),
      username: req.body.username,
      message: req.body.message,
    });
  }
  const messageData = {
    text: req.body.message,
    username: req.body.username,
  };
  await db.insertNewMessage(messageData);
  res.redirect("/");
}

async function getMessageDetails(req, res) {
  const messageId = parseInt(req.params.id);
  const message = await db.getMessageById(messageId);
  res.render("details", { message: message });
}

module.exports = {
  getMessages,
  getNewMessageForm,
  validateMessage,
  postNewMessage,
  getMessageDetails,
};
