const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        if (file.fieldname === "profileImage") {

            cb(null, "uploads/profiles");

        }

        else if (file.fieldname === "resume") {

            cb(null, "uploads/resumes");

        }

        else if (file.fieldname === "projectImage") {

            cb(null, "uploads/projects");

        }
        else if (file.fieldname === "certificateImage") {

    cb(null, "uploads/certificates");

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

const fileFilter = (req, file, cb) => {

   if (

    file.fieldname === "profileImage" ||

    file.fieldname === "projectImage" ||

    file.fieldname === "certificateImage"

){

        const allowedTypes = [

".jpg",

".jpeg",

".png",

".webp"

];

        const extension = path.extname(file.originalname).toLowerCase();

        if (allowedTypes.includes(extension)) {

            cb(null, true);

        }

        else {

            cb(new Error("Only JPG, JPEG and PNG images are allowed."));

        }

    }

    else if (file.fieldname === "resume") {

        const extension = path.extname(file.originalname).toLowerCase();

        if (extension === ".pdf") {

            cb(null, true);

        }

        else {

            cb(new Error("Only PDF files are allowed."));

        }

    }

};

const upload = multer({

    storage: storage,

    fileFilter: fileFilter,

    limits: {

        fileSize: 5 * 1024 * 1024

    }

});

module.exports = upload;
