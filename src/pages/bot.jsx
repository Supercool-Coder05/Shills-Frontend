import React from "react";

const Botlist = () => {
  const bots = [
    { id: 1, name: "SKOR Bot" },
    { id: 2, name: "ADPOD" },
    { id: 3, name: "Bot 3" },
    { id: 4, name: "Bot 4" },
    { id: 5, name: "Bot 5" },
    { id: 6, name: "Bot 6" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Shills Bot</h1>
        <button className="text-sm text-blue-500 hover:underline">
          Switch Account
        </button>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <h2 className="text-[51px] font-semibold text-gray-800 text-center mb-6">
          Get Started
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot) => (
            <div
              key={bot.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              {/* Placeholder Image */}
              <div className="w-16 h-16 bg-gray-200 rounded-md mb-4"></div>

              {/* Bot Name */}
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {bot.name}
              </h3>

              {/* Action Button */}
              <button className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-white hover:text-black border border-black transition">
                Activate
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Botlist;