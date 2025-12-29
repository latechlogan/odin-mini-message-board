const { Router } = require("express");
const router = Router();
const messageController = require("../controllers/messageController");

router.get("/", messageController.getMessages);

module.exports = router;
