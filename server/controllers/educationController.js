const Education = require("../models/Education");

// Create
const createEducation = async (req, res) => {

    try {

        const education = await Education.create({

            user: req.user.id,

            institution: req.body.institution,

            degree: req.body.degree,

            fieldOfStudy: req.body.fieldOfStudy,

            startYear: req.body.startYear,

endYear: req.body.endYear,

            currentlyStudying: req.body.currentlyStudying,

            grade: req.body.grade,
            relevantCoursework: req.body.relevantCoursework,

displayOrder: req.body.displayOrder || 0,


            description: req.body.description

        });

        res.status(201).json({

            success: true,
            message: "Education added successfully.",
            education

        });

    } catch (error) {

    console.error("========== EDUCATION ERROR ==========");
    console.error(error);
    console.error(error.errors);
    console.error(error.stack);

    res.status(500).json({
        success: false,
        message: error.message
    });

}

};

// Read
const getEducations = async (req, res) => {

    try {

        const educations = await Education.find({

            user: req.user.id

        }).sort({

displayOrder: 1,

startYear: -1

});

        res.status(200).json({

            success: true,
            count: educations.length,
            educations

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Update
const updateEducation = async (req, res) => {

    try {

        const updates = {};

        const allowedFields = [

"institution",

"degree",

"fieldOfStudy",

"startYear",

"endYear",

"currentlyStudying",

"grade",

"relevantCoursework",

"description",

"displayOrder"

];

        allowedFields.forEach(field => {

            if (req.body[field] !== undefined) {

                updates[field] = req.body[field];

            }

        });

        const education = await Education.findOneAndUpdate(

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

        if (!education) {

            return res.status(404).json({

                success: false,
                message: "Education not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Education updated successfully.",
            education

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};
// Delete
const deleteEducation = async (req, res) => {

    try {

        const education = await Education.findOneAndDelete({

            _id: req.params.id,
            user: req.user.id

        });

        if (!education) {

            return res.status(404).json({

                success: false,
                message: "Education not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Education deleted successfully."

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    createEducation,
    getEducations,
    updateEducation,
    deleteEducation

};
