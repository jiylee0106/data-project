import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale, // 추가: CategoryScale import
} from "chart.js";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale // 추가: CategoryScale 등록
);

const options = {
  scales: {
    x: {
      type: "category",
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
      <div className="w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
