import React from "react";
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
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["17:00", "21:00", "01:00", "05:00", "09:00", "13:00", "17:00"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: "#24C3BC",
      backgroundColor: "#24C3BC",
      pointStyle: "false",
      // pointStyle: false -> not working?
    },
  ],
};

export const Chart = () => {
  return (
    <Line
      className="!h-[342px] !text-white md:!h-auto"
      options={options}
      data={data}
    />
  );
};
