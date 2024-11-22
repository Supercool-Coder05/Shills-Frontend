import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Consult = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    aboutCompany: "",
    productDoc: null,
    helpMessage: "",
  });

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      setFormData((prevData) => ({
        ...prevData,
        productDoc: file,
      }));
    }
  };

  const handleUploadClick = () => {
    console.log("Opening file selector...");
    fileInputRef.current && fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    console.log("Removing selected file...");
    setFormData((prevData) => ({
      ...prevData,
      productDoc: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleConsult = async (e) => {
    e.preventDefault();

    if (!formData.companyName || !formData.aboutCompany || !formData.helpMessage) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!formData.productDoc) {
      toast.error("Please upload a product document.");
      return;
    }

    const apiFormData = new FormData();
    apiFormData.append("companyName", formData.companyName);
    apiFormData.append("aboutCompany", formData.aboutCompany);
    apiFormData.append("productDoc", formData.productDoc);
    apiFormData.append("helpMessage", formData.helpMessage);

    apiFormData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    try {
      console.log("Sending API Request...");

      const response = await axios.post(
        "http://54.146.185.76:8000/api/users/explore/",
        apiFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        navigate("/");
      } else {
        console.error("Unexpected API Response:", response);
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error during API call:", error);

      if (error.response) {
        console.error("Server Error Response:", error.response.data);
        toast.error(error.response.data?.message || "An error occurred.");
      } else {
        toast.error("Network error or server is unreachable.");
      }
    }
  };

  return (
    <div className="relative h-screen w-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Toast Container */}
      <ToastContainer />

      {/* Wavy Image */}
      <img
        src="/wavy.svg"
        alt="Wavy Design"
        className="absolute w-screen bottom-0 left-1/2 transform -translate-x-1/2 hidden md:block"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-[#F4F4F4] shadow">
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <img
              src="/shillsbotlogo2.svg"
              alt="Shills Bot Logo"
              className="w-8 md:w-10"
            />
            <h1 className="text-xl md:text-3xl font-bold">Shills Bot</h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col-reverse md:flex-row">
          {/* Left Section */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <img
              src="/illustration.svg"
              alt="Illustration"
              className="w-[240px] md:w-[491.82px] h-auto"
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-0">
            <form
              className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
              onSubmit={handleConsult}
            >
              <h2 className="text-lg md:text-2xl font-bold text-gray-800 text-center">
                Welcome to Shills Bot!
              </h2>

              {/* Company Name */}
              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* About Company */}
              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  About Company
                </label>
                <textarea
                  name="aboutCompany"
                  value={formData.aboutCompany}
                  onChange={handleChange}
                  placeholder="Describe your company"
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              {/* File Upload */}
              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  Upload Product Doc/Litepaper
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handleUploadClick}
                    className="flex items-center justify-between px-3 py-2 md:px-4 md:py-2 bg-white border-2 border-black text-black rounded-md hover:bg-gray-400 focus:outline-none w-full"
                  >
                    {formData.productDoc ? "Change File" : "Upload File"}
                    <img src="/Upload.svg" alt="Upload" className="ml-2" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  {formData.productDoc && (
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="flex items-center px-3 py-2 text-sm text-white bg-gray-300 rounded-md hover:bg-gray-500 w-full"
                    >
                      Remove File
                      <img src="/Remove.svg" alt="Remove" className="ml-2" />
                    </button>
                  )}
                </div>
                {formData.productDoc && (
                  <p className="mt-1 md:mt-2 text-sm text-gray-600">
                    Selected file: {formData.productDoc.name}
                  </p>
                )}
              </div>

              {/* How can we help */}
              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  How can we help you?
                </label>
                <textarea
                  name="helpMessage"
                  value={formData.helpMessage}
                  onChange={handleChange}
                  placeholder="Describe your motive here."
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
