import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/support");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#F4F4F4] shadow md:px-6 md:py-4">
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src="/shillsbotlogo2.svg"
            alt="Shills Bot Logo"
            className="w-8 md:w-10"
          />
          <h1 className="text-lg font-bold md:text-3xl">Shills Bot</h1>
        </div>
        <button
          onClick={handleNext}
          className="px-3 py-1 text-xs font-medium text-white bg-[#2D4381] rounded-md hover:bg-blue-700 md:px-4 md:py-2 md:text-sm"
        >
          Go to Support
        </button>
      </header>

      {/* Tabs */}
      <div className="bg-white my-4 mx-4 rounded-lg shadow-md md:my-[41px] md:mx-[216px]">
        <nav className="flex flex-row md:flex-row border-b border-gray-200">
          {["Posts", "Comments", "Errors"].map((tab, index) => (
            <button
              key={index}
              className="flex-1 text-center py-2 text-gray-600 hover:text-gray-800 hover:bg-[#CFD8F2] border-b border-gray-200 md:border-4 md:border-white md:py-3 text-xs md:text-base"
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="my-4 sm:my-0 gap-4 md:p-6 flex flex-row md:gap-[24px]">

  {/* Search Card */}
  <div className="flex ml-4 items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 cursor-pointer md:flex-row md:items-center md:justify-center md:h-[100px] md:w-[226px]">
    <div className="h-8 w-8 flex items-center justify-center rounded-full text-white md:h-8 md:w-8">
      <img
        src="/Commentbutton.svg"
        alt="Search"
        className="w-5 h-5 mr-4 mt-1 md:w-8 md:h-8"
      />
    </div>
    <div className="ml-3 md:ml-0 md:mt-2">
      <h3 className="text-xs font-medium text-gray-700 md:text-base">Search</h3>
      <p className="text-[10px] text-gray-500 md:text-sm">Search the tweets</p>
    </div>
  </div>

  {/* Comment Card */}
  <div className="flex items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 cursor-pointer md:flex-row md:items-center md:justify-center md:h-[100px] md:w-[226px]">
    <div className="h-8 w-8 flex items-center justify-center rounded-full text-white md:h-8 md:w-8">
      <img
        src="/Searchbutton.svg"
        alt="Comment"
        className="w-5 h-5 mr-5 mt-1 md:w-8 md:h-8"
      />
    </div>
    <div className="ml-3 md:ml-0 md:mt-2">
      <h3 className="text-xs font-medium text-gray-700 md:text-base">Comment</h3>
      <p className="text-[10px] text-gray-500 md:text-sm">Comment on tweets</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;