const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const upload = require("../config/multer");

const {
    uploadProfileImage,
    uploadResume
} = require("../controllers/uploadController");

router.post(
    "/profile-image",
    authMiddleware,
    upload.single("profileImage"),
    uploadProfileImage
);

router.post(
    "/resume",
    authMiddleware,
    upload.single("resume"),
    uploadResume
);

module.exports = router;