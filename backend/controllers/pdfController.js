const PDF = require("../models/pdfModel");
const fs = require("fs");
const path = require("path");

exports.uploadPDF = async (req, res) => {
  try {
    const newPDF = new PDF({
      name: req.file.originalname,
      path: `uploads/${req.file.filename}`,
    });
    await newPDF.save();
    res.status(201).json({ message: "PDF uploaded successfully", pdf: newPDF });
  } catch (error) {
    res.status(500).json({ message: "Error uploading PDF", error });
  }
};

exports.getPDFs = async (req, res) => {
  try {
    const pdfs = await PDF.find();
    res.status(200).json(pdfs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching PDFs", error });
  }
};

exports.deletePDF = async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id);
    if (!pdf) {
      console.log("PDF not found");
      return res.status(404).json({ message: "PDF not found" });
    }

    const filePath = path.resolve(pdf.path);
    console.log("File path:", filePath);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("File deleted");
    } else {
      console.log("File not found on server");
      return res.status(404).json({ message: "File not found on server" });
    }

    await pdf.remove();
    res.status(200).json({ message: "PDF deleted successfully" });
  } catch (error) {
    console.error("Error deleting PDF:", error);
    res.status(500).json({ message: "Error deleting PDF", error });
  }
};
