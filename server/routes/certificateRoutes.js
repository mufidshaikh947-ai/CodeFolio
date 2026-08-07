const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const upload = require("../config/multer");
const {

    createCertificate,
    getCertificates,
    updateCertificate,
    deleteCertificate

} = require("../controllers/certificateController");

router.post(
    "/",
    authMiddleware,
    upload.single("certificateImage"),
    createCertificate
);

router.get("/", authMiddleware, getCertificates);

router.put(
    "/:id",
    authMiddleware,
    upload.single("certificateImage"),
    updateCertificate
);
router.delete("/:id", authMiddleware, deleteCertificate);


module.exports = router;
