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

const ScatterChart = ({ xData, yData, description }) => {
  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: description.xLabel,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: description.yLabel,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function (context) {
            const index = context[0].dataIndex;
            return xKeys[index];
          },
        },
      },
    },
  };

  const xKeys = Object.keys(xData);
  const xValues = Object.values(xData);

  const reshapedData = xKeys.map((item, index) => ({
    x: xValues[index],
    y: yData[item],
  }));

  const data = {
    labels: xData.x,
    datasets: [
      {
        label: description.title,
        data: reshapedData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="w-[50%]">
        <Scatter options={options} data={data} />
      </div>
    </div>
  );
};

export default ScatterChart;
