const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
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

        issuer: {
            type: String,
            required: true,
            trim: true
        },

        issueDate: {
            type: Date,
            required: true
        },

        credentialId: {
            type: String,
            default: ""
        },

        credentialUrl: {
            type: String,
            default: ""
        },
        certificateImage: {
    type: String,
    default: ""
},

        description: {
            type: String,
            default: ""
        },
        skills: {
    type: [String],
    default: []
}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Certificate", certificateSchema);
