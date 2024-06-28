import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import "./../App.css";

// Register all necessary components
Chart.register(...registerables);

const ChartAnalytic = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Penjualan Perhari',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  useEffect(() => {
    fetchOrderStats();
  }, []);

  const fetchOrderStats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/customer/order-stats', {
        params: {
          start: '2024-06-01', //tanggal mulai
          end: '2024-06-30', //tanggal akhir pendapatan
        },
      });

      const orders = response.data;
      const labels = orders.map((order) => `Day ${order._id}`);
      const data = orders.map((order) => order.count);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Penjualan Perhari',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      });
    } catch (error) {
      console.error("There was an error fetching the order stats!", error);
    }
  };

  return (
    <>

      <div className="dataCard revenueCard">
        <h2>DATA PENJUALAN</h2>
      </div>
    <div className="container d-flex align-center">

      <div className="dataCard customerCard col-md-8">
        <Bar data={chartData} />
      </div>
    </div>
    </>
  );
};

export default ChartAnalytic;
