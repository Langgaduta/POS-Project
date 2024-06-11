import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Menghasilkan data dummy berdasarkan data uang yang diberikan
const generateDummyData = (uangData) => {
  // Mendapatkan tanggal hari ini
  const today = new Date();

  // Daftar hari dalam satu bulan
  const daysInMonth = [];
  for (let i = 1; i <= 31; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    if (date.getMonth() === today.getMonth()) {
      // Hanya tambahkan tanggal yang berada dalam bulan yang sama
      daysInMonth.push({
        name: date.getDate() + '/' + (date.getMonth() + 1), // Format: tanggal/bulan
        Rp: uangData[i - 1], // Menggunakan data uang dari parameter
      });
    }
  }
  return daysInMonth;
};

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Data uang yang ditentukan secara manual
    const uangData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    // Mendapatkan dummy data berdasarkan data uang yang ditentukan secara manual
    const dummyData = generateDummyData(uangData);
    setData(dummyData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Rp" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;