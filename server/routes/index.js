const express = require("express");

const router = express.Router();


const authRoutes = require("./authRoutes");

const userRoutes = require("./userRoutes");

const skillRoutes = require("./skillRoutes");

const projectRoutes = require("./projectRoutes");

const experienceRoutes = require("./experienceRoutes");

const educationRoutes = require("./educationRoutes");

const certificateRoutes = require("./certificateRoutes");

const uploadRoutes = require("./uploadRoutes");

const portfolioRoutes = require("./portfolioRoutes");

const contactRoutes = require("./contactRoutes");

router.get("/", (req, res) => {
    res.send("CodeFolio Backend is Running...");
});

router.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "API is working"
    });
});

router.use("/api/auth", authRoutes);

router.use("/api/users", userRoutes);

router.use("/api/skills", skillRoutes);

router.use("/api/projects", projectRoutes);

router.use("/api/experiences", experienceRoutes);

router.use("/api/educations", educationRoutes);

router.use("/api/certificates", certificateRoutes);

router.use("/api/upload", uploadRoutes);

router.use("/api/portfolio", portfolioRoutes);

router.use("/api/contact", contactRoutes);

module.exports = router;