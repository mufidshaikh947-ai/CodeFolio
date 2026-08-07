const Skill = require("../models/Skill");

// Create Skill
const createSkill = async (req, res) => {

    try {

        const { name, category, level, displayOrder } = req.body;

        if (!name || !level) {

            return res.status(400).json({

                success: false,
                message: "Skill name and level are required."

            });

        }

        const skillLevel = Number(level);

        if (!Number.isInteger(skillLevel) || skillLevel < 1 || skillLevel > 5) {

            return res.status(400).json({

                success: false,
                message: "Skill level must be between 1 and 5."

            });

        }

        const skill = await Skill.create({

            user: req.user.id,

            name,

            category,

            level: skillLevel,

            displayOrder: displayOrder || 0

        });

        res.status(201).json({

            success: true,
            message: "Skill added successfully.",
            skill

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

// Get Skills
const getSkills = async (req, res) => {

    try {

        const skills = await Skill.find({

            user: req.user.id

        }).sort({

            displayOrder: 1,
            createdAt: -1

        });

        res.status(200).json({

            success: true,
            count: skills.length,
            skills

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

// Update Skill
const updateSkill = async (req, res) => {

    try {

        const updates = {};

        const allowedFields = [

            "name",
            "category",
            "level",
            "displayOrder"

        ];

        allowedFields.forEach(field => {

            if (req.body[field] !== undefined) {

                updates[field] = req.body[field];

            }

        });

        if (updates.level !== undefined) {

            const skillLevel = Number(updates.level);

            if (!Number.isInteger(skillLevel) || skillLevel < 1 || skillLevel > 5) {

                return res.status(400).json({

                    success: false,
                    message: "Skill level must be between 1 and 5."

                });

            }

            updates.level = skillLevel;

        }

        const skill = await Skill.findOneAndUpdate(

            {

                _id: req.params.id,
                user: req.user.id

            },

            updates,

            {

                new: true,
                runValidators: true

            }

        );

        if (!skill) {

            return res.status(404).json({

                success: false,
                message: "Skill not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Skill updated successfully.",
            skill

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

// Delete Skill
const deleteSkill = async (req, res) => {

    try {

        const skill = await Skill.findOneAndDelete({

            _id: req.params.id,
            user: req.user.id

        });

        if (!skill) {

            return res.status(404).json({

                success: false,
                message: "Skill not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Skill deleted successfully."

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

    createSkill,
    getSkills,
    updateSkill,
    deleteSkill

};