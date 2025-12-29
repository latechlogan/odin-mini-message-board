const { Router } = require("express");
const router = Router();
const messageController = require("../controllers/messageController");

router.get("/", messageController.getMessages);
router.get("/new", messageController.getNewMessageForm);
router.post("/new", messageController.postNewMessage);

module.exports = router;
