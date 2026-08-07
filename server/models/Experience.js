const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        company: {
            type: String,
            required: true,
            trim: true
        },

        position: {
            type: String,
            required: true,
            trim: true
        },
employmentType: {
    type: String,
    default: "",
    trim: true
},
        location: {
            type: String,
            default: ""
        },

        startDate: {
            type: Date,
            required: true
        },

        endDate: {
            type: Date
        },

        currentlyWorking: {
            type: Boolean,
            default: false
        },

        description: {
            type: String,
            default: ""
        },
        achievements: {
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
}
    },
    {
        timestamps: true
    }
);

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
