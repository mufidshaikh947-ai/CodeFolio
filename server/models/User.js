const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        isPro: {
            type: Boolean,
            default: false
        },

        customDomain: {
            type: String,
            default: "",
            trim: true
        },

        headline: {
    type: String,
    default: "",
    trim: true
},
        title: {
            type: String,
            default: ""
        },

        about: {
            type: String,
            default: ""
        },

        phone: {
            type: String,
            default: ""
        },

        location: {
            type: String,
            default: ""
        },
        availability: {
    type: String,
    default: "Available for Work"
},
        github: {
            type: String,
            default: ""
        },

        linkedin: {
            type: String,
            default: ""
        },

        twitter: {
            type: String,
            default: ""
        },

        website: {
            type: String,
            default: ""
        },

        portfolioEmail: {
    type: String,
    default: ""
},

        leetcode: {
            type: String,
            default: ""
        },

        codechef: {
            type: String,
            default: ""
        },

        profileImage: {
            type: String,
            default: ""
        },

        profileImagePublicId: {
            type: String,
            default: ""
        },

        resume: {
            type: String,
            default: ""
        },

        resumePublicId: {
            type: String,
            default: ""
        },

        templateId: {
            type: String,
            default: "minimal"
        },

        theme: {
    type: String,
    default: "dark"
},

    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
