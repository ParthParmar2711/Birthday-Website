// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "../Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PDFManager.css";

const PDFManager = () => {
  const [pdfs, setPdfs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [viewingPDF, setViewingPDF] = useState(null);

  const fetchPDFs = async () => {
    try {
      const { data } = await axios.get("/pdfs");
      setPdfs(data);
    } catch (error) {
      toast.error(error, "Failed to fetch PDFs");
    }
  };

  const uploadPDF = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("pdf", selectedFile);
    try {
      await axios.post("/pdfs/upload", formData);
      toast.success("PDF uploaded successfully");
      fetchPDFs();
    } catch (error) {
      toast.error(error, "Error uploading PDF");
    }
  };

  const deletePDF = async (id) => {
    try {
      await axios.delete(`/pdfs/${id}`);
      toast.success("PDF deleted successfully");
      setPdfs(pdfs.filter((pdf) => pdf._id !== id));
    } catch (error) {
      console.error("Error deleting PDF:", error);
      toast.error(error.response?.data?.message || "Error deleting PDF");
    }
  };

  const viewPDF = (pdfPath) => {
    setViewingPDF(pdfPath);
  };

  useEffect(() => {
    fetchPDFs();
  }, []);

  return (
    <div className="pdf-manager">
      <h1>OUR STORIES</h1>
      <form onSubmit={uploadPDF}>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button type="submit">Upload PDF</button>
      </form>

      {/* Display the selected PDF inline */}
      {viewingPDF && (
        <div className="pdf-viewer">
          <h3>Viewing PDF</h3>
          <iframe
            src={`http://localhost:5000/${viewingPDF}`}
            width="100%"
            height="600px"
            title="PDF Viewer"
          ></iframe>
        </div>
      )}

      <div className="pdf-grid">
        {pdfs.map((pdf) => (
          <div key={pdf._id} className="pdf-item">
            <a
              href={`#`}
              onClick={() => viewPDF(pdf.path)} // View PDF when clicked
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {pdf.name}
            </a>
            <button onClick={() => deletePDF(pdf._id)}>Delete</button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default PDFManager;
