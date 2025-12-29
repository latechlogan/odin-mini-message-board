const { Router } = require("express");
const router = Router();
const messageController = require("../controllers/messageController");

router.get("/", messageController.getMessages);
router.get("/new", messageController.getNewMessageForm);
router.post("/new", messageController.postNewMessage);
router.get("/details/:id", messageController.getMessageDetails);

module.exports = router;
