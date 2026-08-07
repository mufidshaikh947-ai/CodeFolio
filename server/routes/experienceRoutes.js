const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    createExperience,
    getExperiences,
    updateExperience,
    deleteExperience

} = require("../controllers/experienceController");

router.post("/", authMiddleware, createExperience);

router.get("/", authMiddleware, getExperiences);

router.put("/:id", authMiddleware, updateExperience);

router.delete("/:id", authMiddleware, deleteExperience);

module.exports = router;
