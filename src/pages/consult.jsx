import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Consult = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleConsult = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current && fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="relative h-screen w-screen bg-gray-50 flex flex-col overflow-hidden">
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
            <form className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
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
                  placeholder="Company Name"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* About Company */}
              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  About Company
                </label>
                <textarea
                  placeholder="Describe your company"
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                    {selectedFile ? 'Change File' : 'Upload File'}
                    <img src="/Upload.svg" alt="Upload" className="ml-2" />
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
                      className="flex items-center px-3 py-2 text-sm text-white bg-gray-300 rounded-md hover:bg-gray-500 w-full"
                    >
                      Remove File
                      <img src="/Remove.svg" alt="Remove" className="ml-2" />
                    </button>
                  )}
                </div>
                {selectedFile && (
                  <p className="mt-1 md:mt-2 text-sm text-gray-600">
                    Selected file: {selectedFile.name}
                  </p>
                )}
              </div>

              {/* How can we help */}
              <div>
                <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-600">
                  How can we help you?
                </label>
                <textarea
                  placeholder="Describe your motive here."
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
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
