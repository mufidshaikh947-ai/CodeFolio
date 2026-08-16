const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Setup Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        let folderName = "codefolio/misc";
        
        // Dynamically assign folders in your Cloudinary account
        if (file.fieldname === "profileImage") folderName = "codefolio/profiles";
        else if (file.fieldname === "resume") folderName = "codefolio/resumes";
        else if (file.fieldname === "projectImage") folderName = "codefolio/projects";
        else if (file.fieldname === "certificateImage") folderName = "codefolio/certificates";

        return {
            folder: folderName,
            // 'auto' allows Cloudinary to handle both images and raw files (like PDFs)
            resource_type: "auto", 
            // Keep the original file extension if possible
            format: path.extname(file.originalname).substring(1) || undefined, 
        };
    },
});

// File Filter for basic validation before sending to Cloudinary
const fileFilter = (req, file, cb) => {
    const isImage = ["profileImage", "projectImage", "certificateImage"].includes(file.fieldname);
    const isPdf = file.fieldname === "resume";
    
    const ext = path.extname(file.originalname).toLowerCase();

    if (isImage && [".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
        cb(null, true);
    } else if (isPdf && ext === ".pdf") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type."), false);
    }
};

// Upload Middleware
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

module.exports = upload;