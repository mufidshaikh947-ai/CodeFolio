const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },
category: {
    type: String,
    required: true,
    trim: true
},
        level: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        displayOrder: {
    type: Number,
    default: 0
},
    },
    {
        timestamps: true
    }
);

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
