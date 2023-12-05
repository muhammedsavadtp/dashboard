import React, { useEffect } from "react";
import LineChart from "./LineChart";

import UserProfile from "./UserProfile";
import Table from "./Table";
import {
  fetchLineChartData,
  fetchPieChartData,
  fetchTableData,
} from "../api/dashboardApi";
import { useSelector } from "react-redux";
import PieChartComponent from "./PieChart";

const Dashboard = () => {
  //initial api calls
  useEffect(() => {
    fetchTableData();
    fetchLineChartData();
    fetchPieChartData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* line chart  */}
      <div className="sm:col-span-1 sm:col-start-1 sm:col-end-2">
        <LineChart />
      </div>

      {/*  Pie Chart */}
      <PieChartComponent />
      <div className="sm:col-span-1 sm:col-start-2 sm:col-end-3"></div>

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
