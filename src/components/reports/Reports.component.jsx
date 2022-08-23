import { useState } from "react";
import { useEffect } from "react";
import BarChart from "../bar-chart/BarChart.component";
import LineChart from "../line-chart/LineChart.component";
import PieChart from "../pie-chart/PieChart.component";

const Reports = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <BarChart />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <PieChart />
      </div>
      {/* <div className="col-lg-12 col-md-12 col-sm-12">
        <LineChart />
      </div> */}
    </div>
  );
};

export default Reports;
