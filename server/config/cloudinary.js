const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

function getUploadedAsset(file) {
    if (!file) return null;

    return {
        url: file.secure_url || file.path || "",
        publicId: file.public_id || file.filename || "",
        resourceType: file.resource_type || (file.fieldname === "resume" ? "raw" : "image")
    };
}

function isCloudinaryPublicId(publicId) {
    return (
        typeof publicId === "string" &&
        publicId.length > 0 &&
        !/^https?:\/\//i.test(publicId) &&
        !publicId.startsWith("/") &&
        !publicId.includes("\\") &&
        !/^uploads?(\/|$)/i.test(publicId)
    );
}

async function deleteCloudinaryAsset(publicId, resourceType = "image") {
    if (!isCloudinaryPublicId(publicId)) return;

    try {
        await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType,
            type: "upload",
            invalidate: true
        });
    } catch (error) {
        console.error("Cloudinary asset cleanup failed:", error.message);
    }
}

module.exports = {
    cloudinary,
    getUploadedAsset,
    deleteCloudinaryAsset
};
