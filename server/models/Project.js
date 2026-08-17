const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title: {
            type: String,
            required: true,
            trim: true
        },
        category: {
    type: String,
    default: "Web Application",
    trim: true
},

        description: {
            type: String,
            required: true,
            trim: true
        },
        features: {
    type: [String],
    default: []
},

        technologies: {
            type: [String],
            default: []
        },
displayOrder: {
    type: Number,
    default: 0
},
        githubLink: {
            type: String,
            default: ""
        },

        liveLink: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            default: ""
        },

        imagePublicId: {
            type: String,
            default: ""
        },

        featured: {
            type: Boolean,
            default: false
        },
        status: {
    type: String,
    default: "Completed"
}
    },
    {
        timestamps: true
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
