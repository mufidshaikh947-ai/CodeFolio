const User = require("../models/User");
const {
    getUploadedAsset,
    deleteCloudinaryAsset
} = require("../config/cloudinary");

// Upload Profile Image
const uploadProfileImage = async (req, res) => {

    try {

        const asset = getUploadedAsset(req.file);

        if (!asset?.url || !asset.publicId) {
            return res.status(400).json({
                success: false,
                message: "Profile image upload failed."
            });
        }

        const existingUser = await User.findById(req.user.id).select(
            "profileImagePublicId"
        );

        if (!existingUser) {
            await deleteCloudinaryAsset(asset.publicId, asset.resourceType);
            return res.status(404).json({ success: false, message: "User not found." });
        }

        const user = await User.findByIdAndUpdate(

            req.user.id,

            {
                profileImage: asset.url,
                profileImagePublicId: asset.publicId
            },

            { new: true }

        ).select("-password");

        await deleteCloudinaryAsset(
            existingUser.profileImagePublicId,
            "image"
        );

        res.status(200).json({

            success: true,
            message: "Profile image uploaded successfully.",
            profileImage: user.profileImage,
            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Upload Resume
const uploadResume = async (req, res) => {

    try {

        const asset = getUploadedAsset(req.file);

        if (!asset?.url || !asset.publicId) {
            return res.status(400).json({
                success: false,
                message: "Resume upload failed."
            });
        }

        const existingUser = await User.findById(req.user.id).select(
            "resumePublicId"
        );

        if (!existingUser) {
            await deleteCloudinaryAsset(asset.publicId, asset.resourceType);
            return res.status(404).json({ success: false, message: "User not found." });
        }

        const user = await User.findByIdAndUpdate(

            req.user.id,

            {
                resume: asset.url,
                resumePublicId: asset.publicId
            },

            {
                new: true
            }

        ).select("-password");

        await deleteCloudinaryAsset(existingUser.resumePublicId, "raw");

        res.status(200).json({

            success: true,
            message: "Resume uploaded successfully.",
            resume: user.resume,
            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    uploadProfileImage,
    uploadResume

};
