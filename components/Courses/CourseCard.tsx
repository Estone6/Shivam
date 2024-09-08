"use client";
import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Chart.js and necessary components
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

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CourseCard = ({ feature }) => {
  const { icon, title, description, salaryTrends, jobDemand } = feature;

  // Data for the salary trends chart
  const salaryChartData = {
    labels: ["Year 1", "Year 2", "Year 3", "Year 4"], // Customize these labels as needed
    datasets: [
      {
        label: "Salary Trends (INR)",
        data: salaryTrends,
        fill: false,
        borderColor: "#4CAF50",
        tension: 0.1,
      },
    ],
  };

  const salaryChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `₹${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
          {/* <span><Image src={icon} className="inline-block" width={36} height={36} alt={title} /></span> */}
        </h3>
        <p>{description}</p>

        {/* Salary Trends Chart */}
        <div className="mt-6 h-40"> {/* Adjust height as needed */}
          <Line data={salaryChartData} options={salaryChartOptions} />
        </div>

        {/* Display Job Demand */}
        <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
          Job Demand: {jobDemand}
        </p>
      </motion.div>
    </>
  );
};

export default CourseCard;
