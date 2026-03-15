import React from "react";
import AnalyticsChart from "../components/AnalyticsChart";

const Dashboard = () => {
  return (
    <div>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-8 rounded-[32px]">
          <p className="text-gray-400 text-sm">Balance</p>
          <h2 className="text-3xl font-bold">$ 4,523.98</h2>
        </div>

        <div className="bg-white p-8 rounded-[32px]">
          <p className="text-red-500 uppercase">Expenses</p>
          <p className="font-bold">$223.98</p>
        </div>

        <div className="bg-white p-8 rounded-[32px]">
          <p className="text-green-500 uppercase">Income</p>
          <p className="font-bold">$3030.98</p>
        </div>

      </div>

      <div className="bg-white p-6 rounded-[32px] mt-6">
        <AnalyticsChart />
      </div>

    </div>
  );
};

export default Dashboard;