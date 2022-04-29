
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper } from '@mui/material';
import D3 from './D3';
const Chart = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 100,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 200,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 400,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 900,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 1100,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 1200,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 2000,
      amt: 2100,
    },
  ];
  return (
    <div style={{marginTop:"10px"}}>
      <Paper sx={{width:"1120px"}}>

        <LineChart
          width={1100}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 5 }} />
     
        </LineChart>

  </Paper>
          
      <D3/>
    
    </div>
  );
};

export default Chart;
