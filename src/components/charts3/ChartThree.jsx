import React from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
import "./chartThree.scss"

const data = [
    {
      name: 'Agro',
      
      registrations: 52,
      
    },
    {
      name: 'Health',
      registrations: 9,
    },
    {
      name: 'Federation',
      registrations: 2,
      
    },
    {
      name: 'Housing',
      
      registrations: 5,
      
    },
    {
      name: 'Tourism',
      
      registrations: 1,
      
    },
    {
      name: 'Fisheries',
      
      registrations: 5,
      
    },
    {
      name: 'Construction',
      
      registrations: 1,
      
    },
    {
      name: 'Others',
      
      registrations: 3,
      
    },
    {
      name: 'Cooperative Bank',
      
      registrations: 10,
      
    },
    {
      name: 'Textile',
      
      registrations: 2,
      
    },
    {
      name: 'Credit',
      
      registrations: 1,
      
    },
    {
      name: 'Diary',
      
      registrations: 1,
      
    },

  ];

const ChartThree = () => {
  return (
    <div className='container'>
        <ResponsiveContainer width="80%" height="90%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="registrations" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartThree