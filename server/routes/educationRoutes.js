const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    createEducation,
    getEducations,
    updateEducation,
    deleteEducation

} = require("../controllers/educationController");

router.post("/", authMiddleware, createEducation);

router.get("/", authMiddleware, getEducations);

router.put("/:id", authMiddleware, updateEducation);

router.delete("/:id", authMiddleware, deleteEducation);

module.exports = router;
