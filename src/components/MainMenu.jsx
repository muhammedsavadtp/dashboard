import React, { useState } from "react";
import Header from "./Header";
import LineChart from "./LineChart";
import Dashboard from "./Dashboard";
import Pagination from "./Pagination";

const MainMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    console.log(`Fetching data for page ${page}`);
    setCurrentPage(page);
  };
  return (
    <div className="flex-1 p-4 bg-[#e8edff]">
      <Header />
      <Dashboard />
      <Pagination totalPages={10} onPageChange={handlePageChange} />
    </div>
  );
};

export default MainMenu;
