const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const upload = require("../config/multer");

const {

    createProject,
    getProjects,
    updateProject,
    deleteProject

} = require("../controllers/projectController");

router.post(

    "/",

    authMiddleware,

    upload.single("projectImage"),

    createProject

);

router.get(

    "/",

    authMiddleware,

    getProjects

);

router.put(

    "/:id",

    authMiddleware,

    upload.single("projectImage"),

    updateProject

);

router.delete(

    "/:id",

    authMiddleware,

    deleteProject

);

module.exports = router;
