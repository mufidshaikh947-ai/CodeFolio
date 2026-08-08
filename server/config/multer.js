const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ============================================
// Ensure Upload Directories Exist
// ============================================

const uploadDirectories = {
    profileImage: "uploads/profiles",
    resume: "uploads/resumes",
    projectImage: "uploads/projects",
    certificateImage: "uploads/certificates"
};

Object.values(uploadDirectories).forEach((dir) => {
    fs.mkdirSync(path.resolve(dir), { recursive: true });
});

// ============================================
// Multer Storage
// ============================================

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        if (uploadDirectories[file.fieldname]) {

            cb(null, uploadDirectories[file.fieldname]);

        } else {

            cb(new Error("Invalid upload field."), null);

        }

    },

    filename: function (req, file, cb) {

        const uniqueName =
            Date.now() + "-" + Math.round(Math.random() * 1000000);

        cb(
            null,
            uniqueName + path.extname(file.originalname)
        );

    }

});

// ============================================
// File Filter
// ============================================

const fileFilter = (req, file, cb) => {

    if (
        file.fieldname === "profileImage" ||
        file.fieldname === "projectImage" ||
        file.fieldname === "certificateImage"
    ) {

        const allowedTypes = [
            ".jpg",
            ".jpeg",
            ".png",
            ".webp"
        ];

        const extension = path
            .extname(file.originalname)
            .toLowerCase();

        if (allowedTypes.includes(extension)) {

            cb(null, true);

        } else {

            cb(
                new Error(
                    "Only JPG, JPEG, PNG and WEBP images are allowed."
                )
            );

        }

    }

    else if (file.fieldname === "resume") {

        const extension = path
            .extname(file.originalname)
            .toLowerCase();

        if (extension === ".pdf") {

            cb(null, true);

        } else {

            cb(
                new Error("Only PDF files are allowed.")
            );

        }

    }

    else {

        cb(new Error("Invalid upload field."));

    }

};

// ============================================
// Upload Middleware
// ============================================

const upload = multer({

    storage,

    fileFilter,

    limits: {

        fileSize: 5 * 1024 * 1024

    }

});

module.exports = upload;