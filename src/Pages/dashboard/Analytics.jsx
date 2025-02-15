import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,  Cell} from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','red', 'pink'];


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



 

const Analytics = () => {
    const axiosSecure = useAxiosSecure()
   
    const {data:chartData = []} =useQuery({
        queryKey:['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats')
            return res.data
        }
    })
    // console.log(chartData)

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
        // custom shape for the pie chart
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
        const pieChartData = chartData?.map(data=>{
            return {name:data?.category,value:data?.revenue}
        })
    return (
        <div className="flex flex-wrap">
            {/* // bar chart */}
        <div className='my-12'>
             <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>

        <div className="">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
        </div>
        </div>
    );
};

export default Analytics;