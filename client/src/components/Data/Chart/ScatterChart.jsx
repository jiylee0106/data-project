import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useMemo } from "react";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ScatterChart = ({ xData, yData, description }) => {
  const xKeys = Object.keys(xData);
  const xValues = Object.values(xData);

  const options = useMemo(
    () => ({
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
    }),
    [description, xKeys]
  );

  const reshapedData = useMemo(
    () =>
      xKeys.map((item, index) => ({
        x: xValues[index],
        y: yData[item],
      })),
    [xKeys, xValues, yData]
  );

  const data = useMemo(
    () => ({
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
    }),
    [xData, description, reshapedData]
  );

  return (
    <>
      <Scatter options={options} data={data} />
    </>
  );
};

export default ScatterChart;
