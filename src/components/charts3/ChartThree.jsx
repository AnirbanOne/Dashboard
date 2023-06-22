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
      
      pv: 52,
      
    },
    {
      name: 'Health',
      pv: 9,
    },
    {
      name: 'Federation',
      pv: 2,
      
    },
    {
      name: 'Housing',
      
      pv: 5,
      
    },
    {
      name: 'Tourism',
      
      pv: 1,
      
    },
    {
      name: 'Fisheries',
      
      pv: 5,
      
    },
    {
      name: 'Construction',
      
      pv: 1,
      
    },
    {
      name: 'Others',
      
      pv: 3,
      
    },
    {
      name: 'Cooperative Bank',
      
      pv: 10,
      
    },
    {
      name: 'Textile',
      
      pv: 2,
      
    },
    {
      name: 'Credit',
      
      pv: 1,
      
    },
    {
      name: 'Diary',
      
      pv: 1,
      
    },

  ];

const ChartThree = () => {
  return (
    <div className='container'>
        <ResponsiveContainer width="100%" height="100%">
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
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartThree