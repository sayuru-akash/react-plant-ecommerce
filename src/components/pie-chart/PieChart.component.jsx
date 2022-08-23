import { React, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getProductsbyMonth } from "../../utils/firebase/firebasefirestore.utils";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "No. of Products Published per Month",
    },
  },
};

const PieChart = () => {
  const [proApril, setProApril] = useState(0);
  const [proMay, setProMay] = useState(0);
  const [proJune, setProJune] = useState(0);
  const [proJuly, setProJuly] = useState(0);
  const [proAugust, setProAugust] = useState(0);
  const [proSeptember, setProSeptember] = useState(0);

  useEffect(() => {
    getProductsbyMonth("April")
      .then((res) => {
        setProApril(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        getProductsbyMonth("May")
          .then((res) => {
            setProMay(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            getProductsbyMonth("June")
              .then((res) => {
                setProJune(res);
              })
              .catch((err) => {
                console.log(err);
              })
              .finally(() => {
                getProductsbyMonth("July")
                  .then((res) => {
                    setProJuly(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  })
                  .finally(() => {
                    getProductsbyMonth("August")
                      .then((res) => {
                        setProAugust(res);
                      })
                      .catch((err) => {
                        console.log(err);
                      })
                      .finally(() => {
                        getProductsbyMonth("September")
                          .then((res) => {
                            setProSeptember(res);
                          })
                          .catch((err) => {
                            console.log(err);
                          })
                          .finally(() => {
                            console.log("done");
                          });
                      });
                  });
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],

    datasets: [
      {
        label: "# of Products",
        data: [proApril, proMay, proJune, proJuly, proAugust, proSeptember],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Pie options={options} data={data} className="container mb-5 h-75" />
    </div>
  );
};

export default PieChart;
