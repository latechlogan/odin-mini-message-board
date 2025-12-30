const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date().toUTCString(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date().toUTCString(),
  },
];

let nextId = 2;

exports.getMessages = (req, res) => {
  res.render("index", { messages: messages });
};

exports.getNewMessageForm = (req, res) => {
  res.render("form");
};

exports.postNewMessage = (req, res) => {
  messages.push({
    id: nextId++,
    text: req.body.message,
    user: req.body.user,
    added: new Date().toUTCString(),
  });
  res.redirect("/");
};

exports.getMessageDetails = (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages[messageId];
  res.render("details", { message: message });
};
