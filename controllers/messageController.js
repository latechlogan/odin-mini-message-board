const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

exports.getMessages = (req, res) => {
  res.render("index", { messages: messages });
};

exports.getNewMessageForm = (req, res) => {
  res.render("form");
};

exports.postNewMessage = (req, res) => {
  res.send("successful 'POST' to /new");
};
