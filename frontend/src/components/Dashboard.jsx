import React from "react";
import AnalyticsChart from "../components/AnalyticsChart";

const Dashboard = () => {
  return (
    <div className="w-full">

      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px]">
          <p className="text-gray-400 text-sm">Balance</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">
            $ 4,523.98
          </h2>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px]">
          <p className="text-red-500 uppercase text-sm md:text-base">
            Expenses
          </p>
          <p className="text-lg md:text-xl font-bold">$223.98</p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px]">
          <p className="text-green-500 uppercase text-sm md:text-base">
            Income
          </p>
          <p className="text-lg md:text-xl font-bold">$3030.98</p>
        </div>

      </div>

      {/* Chart */}
      <div className="bg-white p-4 md:p-6 rounded-[24px] md:rounded-[32px] mt-6">
        <AnalyticsChart />
      </div>

    </div>
  );
};

export default Dashboard;