
import { data } from 'autoprefixer';
import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { PieChart, Pie, Sector, Cell } from 'recharts';
const ProfilepiChart = () => {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className=''>

            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='w-3/4 mx-auto'>
                <div className='grid grid-cols-4 gap-7'>
                    {
                        data.map(item => <div className=''>
                            <p className='text-white'>{item.name}</p>
                        </div>)
                    }
                </div>
                <div className='grid grid-cols-4 gap-7'>
                    {
                        COLORS.map(color => <div style={{
                            backgroundColor: color
                        }} className={`bg-[${color}] flex items-center justify-center h-10  `}>

                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ProfilepiChart;