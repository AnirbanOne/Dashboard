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
      name: 'Page A',
      
      pv: 800,
      
    },
    {
      name: 'Page B',
      pv: 967,
    },
    {
      name: 'Page C',
      pv: 1098,
      
    },
    {
      name: 'Page D',
      
      pv: 1200,
      
    },
    {
      name: 'Page E',
      
      pv: 1108,
      
    },
    {
      name: 'Page F',
      
      pv: 680,
      
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