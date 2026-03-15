import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 5800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'Jul', income: 3490, expenses: 4300 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-2xl w-full h-[350px]">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-black">Analytics</h3>
        <p className="text-gray-500 text-xs">Revenue vs Expenses</p>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        {/* isAnimationActive={false} removes all entry animations */}
        <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#666', fontSize: 11 }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#666', fontSize: 11 }} 
          />
          <Tooltip 
            cursor={{ stroke: '#ccc', strokeWidth: 1 }}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
          />
          <Line 
            type="monotone" 
            dataKey="income" 
            stroke="#000" 
            strokeWidth={2} 
            dot={{ r: 4, fill: '#000' }} 
            activeDot={{ r: 6 }}
            isAnimationActive={false} 
          />
          <Line 
            type="monotone" 
            dataKey="expenses" 
            stroke="#999" 
            strokeWidth={2} 
            strokeDasharray="5 5"
            dot={{ r: 4, fill: '#999' }} 
            isAnimationActive={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;