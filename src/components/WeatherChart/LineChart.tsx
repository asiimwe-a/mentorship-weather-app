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
  ScriptableContext,
} from "chart.js";
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
        label: "Weather",
        data: [40, 39, 50, 45, 45, 50, 60, 65],
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(100, 0, 0, 400);
          gradient.addColorStop(0, "#FF430B");
          gradient.addColorStop(1, "#FFCD46");
          return gradient;
        },
        tension: 0.3,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    pointLable: false,
    plugins: {
      legend: false,
      tooltip: false,
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
        display: false,
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
