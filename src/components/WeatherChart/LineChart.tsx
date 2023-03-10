import * as React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { Box } from "@chakra-ui/layout";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const LineChart: React.FC = () => {
  const data = {
    labels: ["1 PM", "4 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 PM"],
    datasets: [
      {
        label: "",
        data: [40, 39, 50, 45, 45, 50, 60, 65],
        backgroundColor: `orange`,
        tension: 0.4,
        fill: true,
        pointStyle: "number",
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <Line data={data} options={options}>
      Hello
    </Line>
  );
};

export default LineChart;
