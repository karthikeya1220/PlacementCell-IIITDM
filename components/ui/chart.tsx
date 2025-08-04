"use client"
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

interface PieChartProps {
  data: any[]
  index: string
  categories: string[]
  colors: string[]
  className?: string
  valueFormatter?: (value: any) => string
}

export const PieChart = ({ data, index, categories, colors, className, valueFormatter }: PieChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie dataKey={categories[0]} data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
          {data.map((entry, i) => (
            <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
          ))}
        </Pie>
        <Tooltip formatter={valueFormatter} />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  )
}

interface BarChartProps {
  data: any[]
  index: string
  categories: string[]
  colors: string[]
  className?: string
  valueFormatter?: (value: any) => string
}

export const BarChart = ({ data, index, categories, colors, className, valueFormatter }: BarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={index} />
        <YAxis />
        <Tooltip formatter={valueFormatter} />
        <Legend />
        {categories.map((category, i) => (
          <Bar key={i} dataKey={category} fill={colors[i % colors.length]} />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
