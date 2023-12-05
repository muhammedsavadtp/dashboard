import React, { useEffect } from "react";
import LineChart from "./LineChart";

import UserProfile from "./UserProfile";
import Table from "./Table";
import {
  fetchLineChartData,
  fetchPieChartData,
  fetchTableData,
} from "../api/dashboardApi";
import PieChartComponent from "./PieChart";

const Dashboard = () => {
  //initial api calls
  useEffect(() => {
    fetchTableData();
    fetchLineChartData();
    fetchPieChartData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 md:mt-0">
      {/* First Line */}
      <div className="sm:col-span-1 sm:col-start-1 sm:col-end-2">
        <LineChart />
      </div>
      <div className="sm:col-span-1 sm:col-start-2 sm:col-end-3">
        <PieChartComponent />
      </div>

      {/* Second Line */}
      <div className="sm:col-span-1 sm:col-start-1 sm:col-end-2">
        <Table />
      </div>
      <div className="sm:col-span-1 sm:col-start-2 sm:col-end-3">
        <UserProfile />
      </div>
    </div>
  );
};

export default Dashboard;
