const path = require("path");

// ============================================
// Single source of truth for the uploads folder.
//
// Multer (writing files) and Express static
// (serving files) both import this so they can
// never point at two different folders.
//
// - If UPLOAD_DIR is set (e.g. the mount path of
//   a Render Persistent Disk), that exact path is
//   used.
// - Otherwise it defaults to "server/uploads",
//   resolved from this file's own location
//   (__dirname), NOT from process.cwd(). This
//   matters because process.cwd() depends on
//   where the Node process happens to be started
//   from, which can differ between local dev and
//   a hosting platform.
// ============================================

const UPLOADS_DIR = process.env.UPLOAD_DIR
    ? path.resolve(process.env.UPLOAD_DIR)
    : path.join(__dirname, "..", "uploads");

// Multer now writes to an absolute path (UPLOADS_DIR), so
// req.file.path comes back absolute too. This converts it back
// into the same "uploads/profiles/xxx.png" style relative path
// that has always been stored in MongoDB and used to build
// public image URLs on the frontend (${API_BASE_URL}/uploads/...).
function toPublicUploadPath(absoluteFilePath) {

    const relative = path
        .relative(UPLOADS_DIR, absoluteFilePath)
        .split(path.sep)
        .join("/");

    return `uploads/${relative}`;

}

module.exports = { UPLOADS_DIR, toPublicUploadPath };