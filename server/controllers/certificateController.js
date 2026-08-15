const Certificate = require("../models/Certificate");
const { toPublicUploadPath } = require("../config/paths");

// Create
const createCertificate = async (req, res) => {

    try {

        const certificate = await Certificate.create({

            user: req.user.id,

            title: req.body.title,

            issuer: req.body.issuer,

            issueDate: req.body.issueDate,

            credentialId: req.body.credentialId,

            credentialUrl: req.body.credentialUrl,
certificateImage: req.file
    ? toPublicUploadPath(req.file.path)
    : "",
skills: req.body.skills
    ? req.body.skills
          .split(",")
          .map(item => item.trim())
          .filter(item => item.length > 0)
    : [],

displayOrder: req.body.displayOrder || 0,

            description: req.body.description

        });

        res.status(201).json({

            success: true,
            message: "Certificate added successfully.",
            certificate

        });

    } catch (error) {

    console.error("===== CERTIFICATE ERROR =====");
    console.error(error);
    console.error(error.stack);

    res.status(500).json({
        success: false,
        message: error.message
    });

}

};

// Read
const getCertificates = async (req, res) => {

    try {

        const certificates = await Certificate.find({

            user: req.user.id

        }).sort({
    displayOrder: 1,
    issueDate: -1
});

        res.status(200).json({

            success: true,
            count: certificates.length,
            certificates

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Update
const updateCertificate = async (req, res) => {

    try {

        const updates = {};

        const allowedFields = [

"title",

"issuer",

"issueDate",

"credentialId",

"credentialUrl",

"certificateImage",

"description",

"skills",

"displayOrder"

];

        allowedFields.forEach(field => {

            if (req.body[field] !== undefined) {

                updates[field] = req.body[field];

            }

        });

        if (updates.skills !== undefined) {

            updates.skills = updates.skills
                .split(",")
                .map(item => item.trim())
                .filter(item => item.length > 0);

        }

        const certificate = await Certificate.findOneAndUpdate(

            {
                _id: req.params.id,
                user: req.user.id
            },

            updates,

            {
                new: true,
                runValidators: true
            }

        );

        if (!certificate) {

            return res.status(404).json({

                success: false,
                message: "Certificate not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Certificate updated successfully.",
            certificate

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};
// Delete
const deleteCertificate = async (req, res) => {

    try {

        const certificate = await Certificate.findOneAndDelete({

            _id: req.params.id,
            user: req.user.id

        });

        if (!certificate) {

            return res.status(404).json({

                success: false,
                message: "Certificate not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Certificate deleted successfully."

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    createCertificate,
    getCertificates,
    updateCertificate,
    deleteCertificate

};