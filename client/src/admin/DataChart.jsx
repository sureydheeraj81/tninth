import React, { useEffect, useState } from 'react';
import { RegDataChart} from '../services/Apis';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

 export const DataChart = () => {

const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);


  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomColor = () => `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 0.8)`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RegDataChart();

        const apiData = response.data.subscriptions;

        const labels = [];
        const data = [];
        const backgroundColors = [];

        apiData.forEach(({ month, year, count }) => {
          labels.push(`${month} ${year}`);
          data.push(count);
          backgroundColors.push(getRandomColor());
        });

        setChartData({
          labels,
          datasets: [
            {
              label: 'Subscription Trend',
              data,
              backgroundColor: backgroundColors,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Subscriptions',
        },
      },
      x: {
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '100%', height: '500px', padding: '10px' }}>
      {loading ? (
        <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      ) : (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );

}





export const DataChartReg = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);


  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomColor = () => `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 0.8)`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RegDataChart();

        const apiData = response.data.corsRegistrations;

        const labels = [];
        const data = [];
        const backgroundColors = [];

        apiData.forEach(({ month, year, count }) => {
          labels.push(`${month} ${year}`);
          data.push(count);
          backgroundColors.push(getRandomColor());
        });

        setChartData({
          labels,
          datasets: [
            {
              label: 'User Registrations',
              data,
              backgroundColor: backgroundColors,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Registration Trend',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Registrations',
        },
      },
      x: {
        title: {
          display: true,
          // text: 'Months',
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '100%', height: '500px', padding: '10px' }}>
      {loading ? (
        <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      ) : (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );
};



