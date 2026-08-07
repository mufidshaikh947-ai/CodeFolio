const User = require("../models/User");
const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Experience = require("../models/Experience");
const Education = require("../models/Education");
const Certificate = require("../models/Certificate");

// Get Public Portfolio
const getPortfolio = async (req, res) => {

    try {

        const { username } = req.params;

        const user = await User.findOne({ username }).select("-password");

        if (!user) {

            return res.status(404).json({

                success: false,
                message: "Portfolio not found."

            });

        }

        const [

            skills,
            projects,
            experiences,
            educations,
            certificates

        ] = await Promise.all([

            Skill.find({ user: user._id }).sort({
    displayOrder: 1,
    createdAt: -1
}),

Project.find({ user: user._id }).sort({
    displayOrder: 1,
    featured: -1,
    createdAt: -1
}),
            Experience.find({ user: user._id }).sort({
    displayOrder: 1,
    startDate: -1
}),

      Education.find({ user: user._id }).sort({
    displayOrder: 1,
    startYear: -1
}),

            Certificate.find({ user: user._id }).sort({
    displayOrder: 1,
    issueDate: -1
})

        ]);

        res.status(200).json({

            success: true,

            portfolio: {

                profile: {

    name: user.name,

    username: user.username,

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
                    portfolioEmail: user.portfolioEmail,
                    profileImage: user.profileImage,
                    resume: user.resume

                },

                settings: {

    templateId: user.templateId,

    theme: user.theme

},

                skills,

                projects,

                experiences,

                educations,

                certificates

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    getPortfolio

};
