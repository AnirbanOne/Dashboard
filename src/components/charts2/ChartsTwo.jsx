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
      registrations: 1,
    },
    {
      name: 'MHA',
      registrations: 20,
    },
    {
      name: 'PUN',
      registrations: 1,
    },
    {
      name: 'T.N.',
      registrations: 8,
    },
    {
      name: 'Telangana',
      registrations: 6,
    },
    {
      name: 'U.P.',
      registrations: 18,
    },
    {
        name: 'Haryana',
        registrations: 4,
      },
      {
        name: 'A.P.',
        registrations: 2,
      },
      {
        name: 'Manipur',
        registrations: 3,
      },
      {
        name: 'Delhi',
        registrations: 5,
      },
      {
        name: 'J & K',
        registrations: 1,
      },
      {
        name: 'M.P.',
        registrations: 3,
      },
      {
        name: 'Gujarat',
        registrations: 4,
      },
      {
        name: 'Assam',
        registrations: 1,
      },
      {
        name: 'Bihar',
        registrations: 3,
      },
      {
        name: 'Karnataka',
        registrations: 1,
      },
      {
        name: 'W.B.',
        registrations: 1,
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