import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import "./../App.css";

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
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    fetchOrderStats();
  }, []);

  const fetchOrderStats = async () => {
    try {
      
      const dummyData = [
        { day: 1, count: 5 },
        { day: 2, count: 3 },
        { day: 3, count: 7 },
        { day: 4, count: 9 },
        { day: 5, count: 6 },
        { day: 6, count: 2 },
      ];

      const response = await axios.get('http://localhost:5000/api/customer/order-stats', {
        params: {
          start: '2024-06-01', //tanggal mulai
          end: '2024-06-30', //tanggal akhir pendapatan
        },
      });

      const orders = response.data;
      const apiData = orders.map((order, index) => ({
        day: index + 7, // Data API dimulai dari hari ke-7
        count: order.count,
      }));

      const combinedData = [...dummyData, ...apiData];

      const labels = combinedData.map((data) => `Day ${data.day}`);
      const data = combinedData.map((data) => data.count);

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

      const total = data.reduce((acc, curr) => acc + curr, 0);
      setTotalSales(total); //Jumlaj total penjualann

    } catch (error) {
      console.error("There was an error fetching the order stats!", error);
    }
  };

  return (
    <>
      <div className="dataCard revenueCard">
        <h2>DATA PENJUALAN</h2>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="dataCard customerCard col-md-8">
          <Bar data={chartData} />
          <div className="mt-4">
            <h4>Total Penjualan: {totalSales}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartAnalytic;
