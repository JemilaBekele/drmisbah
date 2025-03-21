const multer = require('multer');
const path = require('path');

// Set up storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/blog_images/'); // Destination folder
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`); // Filename format: timestamp.extension
  },
});

// Create a multer instance
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 2MB
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only JPEG,JPG, PNG files are allowed!'));
  },
});

module.exports = upload;
