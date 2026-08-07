const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createSkill,
    getSkills,
    updateSkill,
    deleteSkill
} = require("../controllers/skillController");
router.post("/", authMiddleware, createSkill);

router.get("/", authMiddleware, getSkills);

router.put("/:id", authMiddleware, updateSkill);

router.delete("/:id", authMiddleware, deleteSkill);

module.exports = router;
