import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: "연도",
      },
    },
    y: {
      min: 200,
      max: 300,
      title: {
        display: true,
        text: "멸종위기종 수",
      },
    },
  },
};

const LineChart = ({ yearData }) => {
  const data = {
    labels: yearData.x,
    datasets: [
      {
        label: "연도별 멸종위기종 수",
        data: yearData.y,
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="w-[50%]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
