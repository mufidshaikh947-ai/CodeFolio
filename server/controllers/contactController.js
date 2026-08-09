const validator = require("validator");

const Contact = require("../models/Contact");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

// Send Contact Message
const sendMessage = async (req, res) => {

    try {

        const { username } = req.params;

        const name = req.body.name?.trim();
const email = req.body.email?.trim().toLowerCase();
const subject = req.body.subject?.trim();
const message = req.body.message?.trim();



        if (!name || !email || !subject || !message) {

            return res.status(400).json({

                success: false,
                message: "All fields are required."

            });

        }

        if (!validator.isEmail(email)) {

            return res.status(400).json({

                success: false,
                message: "Invalid email address."

            });

        }

        const user = await User.findOne({

            username

        });

        if (!user) {

            return res.status(404).json({

                success: false,
                message: "Portfolio not found."

            });

        }
await Contact.create({
    user: user._id,
    name,
    email,
    subject,
    message
});

res.status(201).json({
    success: true,
    message: "Message sent successfully."
});

const recipient = user.portfolioEmail || user.email;

sendEmail({
    to: recipient,
    subject: `New Portfolio Contact • ${subject}`,
    html: `
        <h2>New Portfolio Contact</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>

        <hr>

        <p>${message}</p>
    `
}).catch(error => {
    console.error("Email Error:", error);
});

return;
        res.status(201).json({

            success: true,
            message: "Message sent successfully.",
            

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Get All Messages
const getMessages = async (req, res) => {

    try {

        const messages = await Contact.find({

            user: req.user.id

        }).sort({

isRead: 1,

createdAt: -1

});

        res.status(200).json({

            success: true,

            count: messages.length,

            messages

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};
const markAsRead = async (req, res) => {

    try {

        const message = await Contact.findOneAndUpdate(

            {
                _id: req.params.id,
                user: req.user.id
            },

            {
                isRead: true
            },

            {
                new: true
            }

        );

        if (!message) {

            return res.status(404).json({

                success: false,
                message: "Message not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Message marked as read.",
            message

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const markAsReplied = async (req, res) => {

    try {

        const message = await Contact.findOneAndUpdate(

            {
                _id: req.params.id,
                user: req.user.id
            },

            {
                replied: true
            },

            {
                new: true
            }

        );

        if (!message) {

            return res.status(404).json({

                success: false,
                message: "Message not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Message marked as replied.",
            message

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

// Delete Message
const deleteMessage = async (req, res) => {

    try {

        const message = await Contact.findOneAndDelete({

            _id: req.params.id,

            user: req.user.id

        });

        if (!message) {

            return res.status(404).json({

                success: false,
                message: "Message not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Message deleted successfully."

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

    sendMessage,
    getMessages,
    markAsRead,
    markAsReplied,
    deleteMessage

};

