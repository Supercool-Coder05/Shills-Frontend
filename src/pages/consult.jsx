import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Consult = () => {
  const [formData, setFormData] = useState({
    email: "",
    about_company: "",
    how_we_help: "",
    product_upload: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current && fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
  };

  const handleConsult = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.about_company || !formData.how_we_help) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!selectedFile) {
      toast.error("Please upload a product document.");
      return;
    }

    const apiFormData = new FormData();
    apiFormData.append("email", formData.email.trim());
    apiFormData.append("about_company", formData.about_company.trim());
    apiFormData.append("how_we_help", formData.how_we_help.trim());
    apiFormData.append("product_upload", selectedFile);

    try {
      const response = await axios.post(
        "http://54.146.185.76:8000/api/users/explore/",
        apiFormData
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Form submitted successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred while submitting.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="relative h-screen w-screen bg-gray-50 flex flex-col overflow-hidden">
      <ToastContainer />

      <img
        src="/wavy.svg"
        alt="Wavy Design"
        className="absolute w-screen bottom-0 left-1/2 transform -translate-x-1/2 hidden md:block"
      />

      <div className="relative z-10 flex flex-col h-full">
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

        <div className="flex flex-1 flex-col-reverse md:flex-row md:gap-10 lg:gap-0">
          <div className="hidden md:flex flex-1 items-center justify-center">
            <img
              src="/illustration.svg"
              alt="Illustration"
              className="w-[240px] md:w-[491.82px] h-auto"
            />
          </div>

          <div className="flex-1 flex items-center justify-center px-4 md:px-0">
            <form
              className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
              onSubmit={handleConsult}
            >
              <h2 className="text-lg md:text-2xl font-bold text-gray-800 text-center">
                Welcome to Shills Bot!
              </h2>

              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  About Company
                </label>
                <textarea
                  name="about_company"
                  value={formData.about_company}
                  onChange={handleChange}
                  placeholder="Describe your company"
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

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
                    {formData.product_upload ? "Change File" : "Upload File"}
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {selectedFile && (
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="px-4 py-2 text-sm text-white bg-gray-300 rounded-md hover:bg-gray-500"
                    >
                      Remove File
                    </button>
                  )}
                </div>
                {formData.product_upload && (
                  <p className="mt-1 md:mt-2 text-sm text-gray-600">
                    Selected file: {formData.product_upload}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  How can we help you?
                </label>
                <textarea
                  name="how_we_help"
                  value={formData.how_we_help}
                  onChange={handleChange}
                  placeholder="Describe your motive here."
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                onClick={handleConsult}
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
