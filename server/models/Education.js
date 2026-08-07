const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        institution: {
            type: String,
            required: true,
            trim: true
        },

        degree: {
            type: String,
            required: true,
            trim: true
        },

        fieldOfStudy: {
            type: String,
            default: ""
        },

        startYear: {
    type: Number,
    required: true,
    min: 1900,
    max: 2100
},

endYear: {
    type: Number,
    min: 1900,
    max: 2100
},

        currentlyStudying: {
            type: Boolean,
            default: false
        },

        grade: {
            type: String,
            default: ""
        },
        relevantCoursework: {
    type: [String],
    default: []
},

        description: {
            type: String,
            default: ""
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

module.exports = mongoose.model("Education", educationSchema);
