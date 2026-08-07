const User = require("../models/User");

// Get Logged-in User Profile
const getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        res.status(200).json({

            success: true,

            profile: {

                name: user.name,
                username: user.username,
                email: user.email,
                title: user.title,
                headline: user.headline,
                about: user.about,
                phone: user.phone,
                location: user.location,
                availability: user.availability

            },

            socialLinks: {

                github: user.github,
                linkedin: user.linkedin,
                twitter: user.twitter,
                website: user.website,
                portfolioEmail: user.portfolioEmail,
                leetcode: user.leetcode,
                codechef: user.codechef

            },

            assets: {

                profileImage: user.profileImage,
                resume: user.resume

            },

            settings: {

                templateId: user.templateId,
                theme: user.theme

            }

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

// Update Logged-in User Profile
const updateProfile = async (req, res) => {

    try {

        const updates = {};

        const allowedFields = [

            "name",
            "username",

            "title",
            "headline",
            "about",

            "phone",
            "location",
            "availability",

            "github",
            "linkedin",
            "twitter",
            "website",
            "portfolioEmail",
            "leetcode",
            "codechef",

            "profileImage",
            "resume",

            "templateId",
            "theme"

        ];

        allowedFields.forEach((field) => {

            if (req.body[field] !== undefined) {

                updates[field] = req.body[field];

            }

        });

        const user = await User.findByIdAndUpdate(

            req.user.id,

            updates,

            {

                new: true,
                runValidators: true

            }

        ).select("-password");

        if (!user) {

            return res.status(404).json({

                success: false,
                message: "User not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Profile updated successfully.",

            profile: {

                name: user.name,
                username: user.username,
                email: user.email,
                title: user.title,
                headline: user.headline,
                about: user.about,
                phone: user.phone,
                location: user.location,
                availability: user.availability

            },

            socialLinks: {

                github: user.github,
                linkedin: user.linkedin,
                twitter: user.twitter,
                website: user.website,
                portfolioEmail: user.portfolioEmail,
                leetcode: user.leetcode,
                codechef: user.codechef

            },

            assets: {

                profileImage: user.profileImage,
                resume: user.resume

            },

            settings: {

                templateId: user.templateId,
                theme: user.theme

            }

        });

    }

    catch (error) {

        console.error(error);

        if (error.code === 11000) {

            const field = Object.keys(error.keyPattern)[0];

            return res.status(400).json({

                success: false,
                message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`

            });

        }

        res.status(500).json({

            success: false,
            message: "Internal server error."

        });

    }

};

module.exports = {

    getProfile,
    updateProfile

};