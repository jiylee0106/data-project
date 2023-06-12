import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useMemo } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const backgroundColors = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 206, 86, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(255, 159, 64, 0.5)",
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 206, 86, 0.5)",
  "rgba(75, 192, 192, 0.5)",
];

const borderColors = [
  "rgb(255, 99, 132)",
  "rgb(54, 162, 235)",
  "rgb(255, 206, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(255, 159, 64)",
  "rgb(255, 99, 132)",
  "rgb(54, 162, 235)",
  "rgb(255, 206, 86)",
  "rgb(75, 192, 192)",
];

const HorizontalChart = ({ region, speciesData }) => {
  const labels = useMemo(
    () => [
      `포유류 ${speciesData.포유류}종`,
      `양서류 ${speciesData.양서류}종`,
      `조류 ${speciesData.조류}종`,
      `무척추동물 ${speciesData.무척추동물}종`,
      `곤충 ${speciesData.곤충}종`,
      `해조류 ${speciesData.해조류}종`,
      `파충류 ${speciesData.파충류}종`,
      `고등균류 ${speciesData.고등균류}종`,
      `어류 ${speciesData.어류}종`,
      `식물 ${speciesData.식물}종`,
    ],
    [speciesData]
  );

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "지역별 종 수",
          data: [
            speciesData.포유류,
            speciesData.양서류,
            speciesData.조류,
            speciesData.무척추동물,
            speciesData.곤충,
            speciesData.해조류,
            speciesData.파충류,
            speciesData.고등균류,
            speciesData.어류,
            speciesData.식물,
          ],
          borderColor: borderColors,
          backgroundColor: backgroundColors,
        },
      ],
    }),
    [labels, speciesData]
  );

  const totalSpecies = useMemo(
    () => Object.values(speciesData).reduce((a, b) => a + b, 0),
    [speciesData]
  );

  return (
    <div className="lg:ml-10 lg:min-w-[60%]">
      <h1 className="text-center text-xl mb-10 font-bold text-neutral-700">
        {region} 멸종위기 생물 수{" "}
        <span className="text-teal-600">{totalSpecies}종</span>
      </h1>
      <Bar options={options} data={data} />
    </div>
  );
};

export default HorizontalChart;
