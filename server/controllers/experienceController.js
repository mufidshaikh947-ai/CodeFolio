const Experience = require("../models/Experience");

// Create
const createExperience = async (req, res) => {

    try {

        const experience = await Experience.create({

            user: req.user.id,

            company: req.body.company,

            position: req.body.position,

            location: req.body.location,

            startDate: req.body.startDate,

            endDate: req.body.endDate,

            currentlyWorking: req.body.currentlyWorking,

            employmentType: req.body.employmentType,

achievements: req.body.achievements
    ? req.body.achievements
          .split(",")
          .map(item => item.trim())
          .filter(item => item.length > 0)
    : [],

technologies: req.body.technologies
    ? req.body.technologies
          .split(",")
          .map(item => item.trim())
          .filter(item => item.length > 0)
    : [],

displayOrder: req.body.displayOrder || 0,

            description: req.body.description

        });

        res.status(201).json({

            success: true,
            message: "Experience added successfully.",
            experience

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Read
const getExperiences = async (req, res) => {

    try {

        const experiences = await Experience.find({

            user: req.user.id

        }).sort({

displayOrder:1,

startDate:-1

});

        res.status(200).json({

            success: true,
            count: experiences.length,
            experiences

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Update
const updateExperience = async (req, res) => {

    try {

        const updates = {};

        const allowedFields = [

    "company",
    "position",
    "employmentType",
    "location",
    "startDate",
    "endDate",
    "currentlyWorking",
    "description",
    "achievements",
    "technologies",
    "displayOrder"

];

        allowedFields.forEach(field => {

            if (req.body[field] !== undefined) {

                updates[field] = req.body[field];

            }

        });
        if (updates.achievements !== undefined) {

    updates.achievements = updates.achievements
        .split(",")
        .map(item => item.trim())
        .filter(item => item.length > 0);

}

if (updates.technologies !== undefined) {

    updates.technologies = updates.technologies
        .split(",")
        .map(item => item.trim())
        .filter(item => item.length > 0);

}

        const experience = await Experience.findOneAndUpdate(

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

        if (!experience) {

            return res.status(404).json({

                success: false,
                message: "Experience not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Experience updated successfully.",
            experience

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};// Delete
const deleteExperience = async (req, res) => {

    try {

        const experience = await Experience.findOneAndDelete({

            _id: req.params.id,
            user: req.user.id

        });

        if (!experience) {

            return res.status(404).json({

                success: false,
                message: "Experience not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Experience deleted successfully."

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    createExperience,
    getExperiences,
    updateExperience,
    deleteExperience

};
