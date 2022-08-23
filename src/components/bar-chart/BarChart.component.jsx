import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getPostsbyMonth } from "../../utils/firebase/firebasefirestore.utils";

//bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "No. of Posts Published per Month",
    },
  },
};

const labels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];

//

const BarChart = () => {
  const [poApril, setPoApril] = useState(0);
  const [poMay, setPoMay] = useState(0);
  const [poJune, setPoJune] = useState(0);
  const [poJuly, setPoJuly] = useState(0);
  const [poAugust, setPoAugust] = useState(0);
  const [poSeptember, setPoSeptember] = useState(0);

  useEffect(() => {
    getPostsbyMonth("April")
      .then((res) => {
        setPoApril(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        getPostsbyMonth("May")
          .then((res) => {
            setPoMay(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            getPostsbyMonth("June")
              .then((res) => {
                setPoJune(res);
              })
              .catch((err) => {
                console.log(err);
              })
              .finally(() => {
                getPostsbyMonth("July")
                  .then((res) => {
                    setPoJuly(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  })
                  .finally(() => {
                    getPostsbyMonth("August")
                      .then((res) => {
                        setPoAugust(res);
                      })
                      .catch((err) => {
                        console.log(err);
                      })
                      .finally(() => {
                        getPostsbyMonth("September")
                          .then((res) => {
                            setPoSeptember(res);
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
    labels,
    datasets: [
      {
        label: "Posts",
        data: [poApril, poMay, poJune, poJuly, poAugust, poSeptember],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} className="container mb-5" />;
};

export default BarChart;
