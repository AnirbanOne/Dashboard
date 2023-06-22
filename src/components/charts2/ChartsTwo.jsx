import React from 'react'
import "./charts2.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Kerela',
      registrations: 9,
      
    },
    {
      name: 'U.K.',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MHA',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'PUN',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'T.N.',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Telangana',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'U.P.',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: 'Haryana',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'A.P.',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Manipur',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Delhi',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'J & K',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'M.P.',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Gujarat',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Assam',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Bihar',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Karnataka',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'W.B.',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      }
  ];

  

const ChartsTwo = () => {
  return (  
    <div className='container'> 
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="registrations" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartsTwo