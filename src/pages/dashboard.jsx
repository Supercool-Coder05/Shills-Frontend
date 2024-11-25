import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/support");
  };

  const tweetData = [
    { name: "Danish", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Aieyaan", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Sharique The Designer", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Ibrahim Sir", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Taheer Ek Tha Designer", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Danish", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Aieyaan", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Sharique The Designer", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Ibrahim Sir", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Taheer", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Danish", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Aieyaan", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Sharique The Designer", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Ibrahim Sir", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
    { name: "Taheer", tweetId: "1553329063045263361", tweetLink: "x.com/raiktechnologies/status/2202" },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tweetData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(tweetData.length / rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col h-screen lg:bottom-10">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#F4F4F4] shadow md:px-6 md:py-4 lg:px-8">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <img
            src="/shillsbotlogo2.svg"
            alt="Shills Bot Logo"
          className="w-8 md:w-[26.43px] lg:w-[26.43px]"
          />
          <h1 className="text-lg font-bold md:text-2xl lg:text-[23.43px]">Shills Bot</h1>
        </div>
        <button
          onClick={handleNext}
          className="px-3 py-1 text-xs font-medium text-white bg-[#2D4381] rounded-md hover:bg-blue-700 md:px-4 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-base"
        >
          Go to Support
        </button>
      </header>

      {/* Tabs */}
      <div className="bg-white my-4 mx-4 rounded-lg shadow-md md:my-[20px] md:mx-[80px] lg:my-[41px] lg:mx-[216px]">
        <nav className="flex flex-row border-b border-gray-200">
          {["Posts", "Comments", "Errors"].map((tab, index) => (
            <button
              key={index}
              className="flex-1 text-center py-2 text-gray-600 hover:text-gray-800 hover:bg-[#CFD8F2] border-2 border-white md:py-3 md:text-base lg:py-1.5 lg:px-3 lg:text-lg"
            >
              {tab}
            </button>
          ))}
        </nav>
        <div className="flex justify-center item-center gap-4 md:p-6 flex flex-row md:gap-[24px]">
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
              <h3 className="text-xs font-medium text-gray-700 md:text-base">
                Search
              </h3>
              <p className="text-[10px] text-gray-500 md:text-sm">
                Search the tweets
              </p>
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
              <h3 className="text-xs font-medium text-gray-700 md:text-base">
                Comment
              </h3>
              <p className="text-[10px] text-gray-500 md:text-sm">
                Comment on tweets
              </p>
            </div>
          </div>
        </div>
        {/* Tweet Table */}
        <div className="overflow-x-auto mx-4 my-4 lg:mx-8 lg:my-8">
          <table className="table-auto w-full border border-gray-300 text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border">Select</th>
                <th className="px-4 py-2 border">Sr. No.</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Tweet ID</th>
                <th className="px-4 py-2 border">Tweet Link</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-2 border">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 border">{indexOfFirstRow + index + 1}</td>
                  <td className="px-4 py-2 border">{row.name}</td>
                  <td className="px-4 py-2 border">{row.tweetId}</td>
                  <td className="px-4 py-2 border">
                    <a
                      href={`https://${row.tweetLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {row.tweetLink}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between mx-4 lg:mx-8 lg:mb-4">
          <span className="text-sm text-gray-600 md:text-base lg:text-lg">
            Showing {currentRows.length} of {tweetData.length} rows
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              } md:text-base lg:text-lg`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 text-sm rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                } md:text-sm lg:text-sm`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              } md:text-sm lg:text-sm`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
