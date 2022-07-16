import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from 'recharts';


interface Props {
  sales: [];
}

const SalesGraph = ({ sales }: Props) => {
  return (
    <div className='w-full bg-white p-4 space-y-2 h-full'>
      <h1 className='flex justify-center text-xl'>Retail Sales</h1>
      <div className='flex-col justify-center h-96 w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={sales}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='weekEnding' />
            <YAxis dataKey='retailSales' />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='retailerMargin'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='wholesaleSales' stroke='#82ca9d' />
            <Line type='monotone' dataKey='retailSales' stroke='#1f4555' />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={sales}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='weekEnding' />
            <YAxis dataKey='retailSales' />
            <Tooltip />
            <Legend />
            <Bar dataKey='retailerMargin' stackId='a' fill='#8884d8' />
            <Bar dataKey='wholesaleSales' stackId='a' fill='#82ca9d' />
            <Bar dataKey='retailSales' stackId='a' fill='#1f4555' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesGraph;
