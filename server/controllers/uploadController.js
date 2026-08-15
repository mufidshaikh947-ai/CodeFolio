const User = require("../models/User");
const { toPublicUploadPath } = require("../config/paths");

// Upload Profile Image
const uploadProfileImage = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(

            req.user.id,

            {
               profileImage: toPublicUploadPath(req.file.path)
            },

            {
                new: true
            }

        );

        res.status(200).json({

            success: true,
            message: "Profile image uploaded successfully.",
            profileImage: user.profileImage,
            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Upload Resume
const uploadResume = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(

            req.user.id,

            {
                resume: toPublicUploadPath(req.file.path)
            },

            {
                new: true
            }

        );

        res.status(200).json({

            success: true,
            message: "Resume uploaded successfully.",
            resume: user.resume,
            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    uploadProfileImage,
    uploadResume

};