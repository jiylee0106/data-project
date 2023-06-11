import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "국내 외래생물 유입 추이",
    },
  },
};

const labels = ["2009", "2011", "2013", "2017"];

const MultiLineChart = ({ data }) => {
  const reshapedData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "동물",
          data: data.animals,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "식물",
          data: data.plants,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    }),
    [data]
  );

  return (
    <div className="flex justify-center">
      <div className="w-[50%]">
        <Line options={options} data={reshapedData} />
      </div>
    </div>
  );
};

export default MultiLineChart;
