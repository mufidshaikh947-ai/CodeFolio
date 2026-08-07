const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
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

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        subject: {
            type: String,
            required: true,
            trim: true
        },

        message: {
            type: String,
            required: true,
            trim: true
        },
        isRead: {
    type: Boolean,
    default: false
},
replied: {
    type: Boolean,
    default: false
}
    },
    {
        timestamps: true
    }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
