const validator = require("validator");
const Project = require("../models/Project");
const { getUploadedAsset, deleteCloudinaryAsset } = require("../config/cloudinary");

// Create Project
const createProject = async (req, res) => {

    try {

        const {
            title,
            description,
            technologies,
            githubLink,
            liveLink,
            category,
            features,
            displayOrder,
            status,
            featured
        } = req.body;

        if (!title || !description) {

            return res.status(400).json({
                success: false,
                message: "Project title and description are required."
            });

        }

        if (githubLink && !validator.isURL(githubLink)) {

            return res.status(400).json({
                success: false,
                message: "Invalid GitHub URL."
            });

        }

        if (liveLink && !validator.isURL(liveLink)) {

            return res.status(400).json({
                success: false,
                message: "Invalid Live Demo URL."
            });

        }

        const asset = getUploadedAsset(req.file);

        const project = await Project.create({

            user: req.user.id,

            title,

            description,

            technologies,

            githubLink,

            liveLink,

            image: asset?.url || "",
            imagePublicId: asset?.publicId || "",

            category,

            features: features
                ? features
                      .split(",")
                      .map(item => item.trim())
                      .filter(item => item.length > 0)
                : [],

            displayOrder: displayOrder || 0,

            status: status || "Completed",

            featured:
                featured === true ||
                featured === "true"

        });

        res.status(201).json({

            success: true,
            message: "Project created successfully.",
            project

        });

    }

    catch (error) {

        const asset = getUploadedAsset(req.file);
        if (asset?.publicId) await deleteCloudinaryAsset(asset.publicId, asset.resourceType);

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal server error."

        });

    }

};

// Get All Projects
const getProjects = async (req, res) => {

    try {

        const projects = await Project.find({

            user: req.user.id

        }).sort({

            displayOrder: 1,
            featured: -1,
            createdAt: -1

        });

        res.status(200).json({

            success: true,
            count: projects.length,
            projects

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal server error."

        });

    }

};

// Update Project
const updateProject = async (req, res) => {

    try {

        const updates = {};
        const asset = getUploadedAsset(req.file);

        const allowedFields = [

            "title",
            "description",
            "technologies",
            "githubLink",
            "liveLink",
            "category",
            "features",
            "displayOrder",
            "status",
            "featured"

        ];

        allowedFields.forEach(field => {

            if (req.body[field] !== undefined) {

                updates[field] = req.body[field];

            }

        });

        if (updates.githubLink && !validator.isURL(updates.githubLink)) {

            return res.status(400).json({

                success: false,
                message: "Invalid GitHub URL."

            });

        }

        if (updates.liveLink && !validator.isURL(updates.liveLink)) {

            return res.status(400).json({

                success: false,
                message: "Invalid Live Demo URL."

            });

        }

        if (updates.features !== undefined) {

            updates.features = updates.features
                .split(",")
                .map(item => item.trim())
                .filter(item => item.length > 0);

        }

        if (updates.featured !== undefined) {

            updates.featured =
                updates.featured === true ||
                updates.featured === "true";

        }

        if (asset) {
            updates.image = asset.url;
            updates.imagePublicId = asset.publicId;
        }

        const existingProject = await Project.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!existingProject) {
            if (asset?.publicId) await deleteCloudinaryAsset(asset.publicId, asset.resourceType);
            return res.status(404).json({ success: false, message: "Project not found." });
        }

        const project = await Project.findOneAndUpdate(

            { _id: req.params.id, user: req.user.id },

            updates,

            {

                new: true,
                runValidators: true

            }

        );

        if (asset?.publicId) {
            await deleteCloudinaryAsset(existingProject.imagePublicId, "image");
        }

        res.status(200).json({

            success: true,
            message: "Project updated successfully.",
            project

        });

    }

    catch (error) {

        const asset = getUploadedAsset(req.file);
        if (asset?.publicId) await deleteCloudinaryAsset(asset.publicId, asset.resourceType);

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal server error."

        });

    }

};

// Delete Project
const deleteProject = async (req, res) => {

    try {

        const project = await Project.findOneAndDelete({

            _id: req.params.id,
            user: req.user.id

        });

        if (!project) {

            return res.status(404).json({

                success: false,
                message: "Project not found."

            });

        }

        await deleteCloudinaryAsset(project.imagePublicId, "image");

        res.status(200).json({

            success: true,
            message: "Project deleted successfully."

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal server error."

        });

    }

};

module.exports = {

    createProject,
    getProjects,
    updateProject,
    deleteProject

};
