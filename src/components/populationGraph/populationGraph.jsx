import React, { useEffect, useState} from "react";
import Chart from "chart.js/auto";
import "./populationGraph.css";

const PopulationGraph = () => {
    const [populationData, setPopulationData] = useState([]);
  let chartInstance = null;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
      );
      const data = await response.json();
      setPopulationData(data.data);
      createGraph(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createGraph = (data) => {
    const ctx = document.getElementById("populationChart");

    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((entry) => entry.Nation),
        datasets: [
          {
            label: "Population",
            data: data.map((entry) => entry.Population),
            borderColor: "#66fcf1", 
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, 
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Population",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)", 
            },
            ticks: {
              color: "#fff", 
            },
          },
          x: {
            title: {
              display: true,
              text: "Nation",
            },
            ticks: {
              color: "#fff", // White color for ticks
            },
          },
        },
      },
    });
  };

  return <canvas id="populationChart" className="population-chart"></canvas>;
}

export default PopulationGraph