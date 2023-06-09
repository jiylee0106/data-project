import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ScatterChart = ({ xData, yData }) => {
  const reshapedData = xData.y.map((value, index) => ({
    x: value,
    y: yData.y[index],
  }));

  const data = {
    labels: xData.x,
    datasets: [
      {
        label: "Number of Endangered Species vs National Parks",
        data: reshapedData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[50%]">
      <Scatter options={options} data={data} />
    </div>
  );
};

export default ScatterChart;
