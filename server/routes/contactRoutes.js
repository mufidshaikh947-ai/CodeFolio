const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    sendMessage,
    getMessages,
    markAsRead,
    markAsReplied,
    deleteMessage

} = require("../controllers/contactController");


// Public
router.post(

    "/:username",

    sendMessage

);

// Private
router.get(

    "/",

    authMiddleware,

    getMessages

);
router.patch(

    "/:id/read",

    authMiddleware,

    markAsRead

);

router.patch(

    "/:id/replied",

    authMiddleware,

    markAsReplied

);

router.delete(

    "/:id",

    authMiddleware,

    deleteMessage

);

module.exports = router;
