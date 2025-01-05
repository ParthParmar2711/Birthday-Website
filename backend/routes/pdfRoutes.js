const express = require("express");
const {
  uploadPDF,
  getPDFs,
  deletePDF,
} = require("../controllers/pdfController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname).toLowerCase() === ".pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDFs are allowed!"), false);
    }
  },
});

router.post("/upload", upload.single("pdf"), uploadPDF);
router.get("/", getPDFs);
router.delete("/:id", deletePDF);

module.exports = router;
