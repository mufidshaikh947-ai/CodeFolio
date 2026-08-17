const Certificate = require("../models/Certificate");
const { getUploadedAsset, deleteCloudinaryAsset } = require("../config/cloudinary");

// Create
const createCertificate = async (req, res) => {

    try {

        const asset = getUploadedAsset(req.file);
        const certificate = await Certificate.create({

            user: req.user.id,

            title: req.body.title,

            issuer: req.body.issuer,

            issueDate: req.body.issueDate,

            credentialId: req.body.credentialId,

            credentialUrl: req.body.credentialUrl,
            certificateImage: asset?.url || "",
            certificateImagePublicId: asset?.publicId || "",
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

    const asset = getUploadedAsset(req.file);
    if (asset?.publicId) await deleteCloudinaryAsset(asset.publicId, asset.resourceType);

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
        const asset = getUploadedAsset(req.file);

        const allowedFields = [

"title",

"issuer",

"issueDate",

"credentialId",

"credentialUrl",

"description",

"skills",

"displayOrder"

        ];

        if (asset) {
            updates.certificateImage = asset.url;
            updates.certificateImagePublicId = asset.publicId;
        }

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

        const existingCertificate = await Certificate.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!existingCertificate) {
            if (asset?.publicId) await deleteCloudinaryAsset(asset.publicId, asset.resourceType);
            return res.status(404).json({ success: false, message: "Certificate not found." });
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

        if (asset?.publicId) {
            await deleteCloudinaryAsset(existingCertificate.certificateImagePublicId, "image");
        }

        res.status(200).json({

            success: true,
            message: "Certificate updated successfully.",
            certificate

        });

    } catch (error) {

        const asset = getUploadedAsset(req.file);
        if (asset?.publicId) await deleteCloudinaryAsset(asset.publicId, asset.resourceType);

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

        await deleteCloudinaryAsset(certificate.certificateImagePublicId, "image");

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
