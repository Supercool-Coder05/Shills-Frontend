import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleSupport = (e) => {
    e.preventDefault();
    navigate("/dashboard");
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
    <div className="relative flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Wavy Image */}
      <img
        src="/wavy.svg"
        alt="Wavy Design"
        className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 z-0"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-4 sm:px-0">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-[#F4F4F4] shadow">
          <div className="flex flex-row items-center justify-center gap-6">
            <img
              src="/shillsbotlogo2.svg"
              alt="Shills Bot Logo"
              className="w-10"
            />
            <h1 className="text-xl sm:text-3xl font-bold">Shills Bot</h1>
          </div>
          <button
            onClick={handleSupport}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#2D4381] rounded-md hover:bg-blue-700"
          >
            Dashboard
          </button>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col sm:flex-row w-full items-center justify-center mt-6 sm:mt-0">
          {/* Left Side */}
          <div className="hidden sm:block w-1/2 top-[228px] ml-[126px]">
            <img
              src="/bot.svg"
              alt="Bot"
              className="w-[581px] h-[356px] mb-4"
            />
          </div>

          {/* Right Side */}
          <div className="w-full sm:w-[636px] sm:mr-[120px] h-auto p-4 sm:p-[32px] bg-white shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-lg sm:text-2xl text-center font-['Glancyr Neue'] text-gray-800 mb-4">
              Contact Us
            </h2>
            <form className="space-y-6 sm:space-y-8">
              {/* Username */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* File Upload */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Upload Product Doc/Litepaper
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    type="button"
                    onClick={handleUploadClick}
                    className="px-4 py-2 bg-white border-2 border-black text-black rounded-md hover:bg-gray-400 focus:outline-none"
                  >
                    {selectedFile ? "Change File" : "Upload File"}
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
                {selectedFile && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected file: {selectedFile.name}
                  </p>
                )}
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
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

export default Support;
