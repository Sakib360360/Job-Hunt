import React from 'react';

// import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell
  } from "recharts";



const Statistics = () => {

    const data = [
        { x: 1, y: 57, z: 60 },
        { x: 2, y: 59, z: 60 },
        { x: 3, y: 60, z: 60 },
        { x: 4, y: 60, z: 60 },
        { x: 5, y: 60, z: 60 },
        { x: 6, y: 58, z: 60 },
        { x: 7, y: 60, z: 60 },
        { x: 8, y: 60, z: 60 },
        
      ];
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
    return (
        <div>
          <div className='w-full  '>
          <div className='bg-[#7e8ffe18] relative'>
                <h1 className='text-center text-3xl font-bold py-28'>Statistics</h1>
                <img className='absolute bottom-0 left-0' src="https://i.ibb.co/28zqbPc/Vector.png" alt="Vector" border="0" />
                <img className='absolute -top-24 right-0' src="https://i.ibb.co/jV022Jb/Vector-1.png" alt="Vector-1" border="0" />
            </div>
          </div>
          <div className='w-3/6 mx-auto'>
            <h1 className='text-center font-bold text-3xl py-8'>Average Assignment Marks:</h1>
            <div className='mx-auto py-8'>
            
           <ScatterChart
      width={300}
      height={300}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="Assignment" unit="No." />
      <YAxis type="number" dataKey="y" name="Obtained" unit="marks" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name="A school" data={data} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
    </ScatterChart>
            </div>
        </div>
        </div>
    );
};

export default Statistics;