import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function FinanceChart({ summary }) {

  const data = [
    { name: "Income", value: summary.total_income || 0 },
    { name: "Expense", value: summary.total_expense || 0 }
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (

    <div className="flex justify-center">

      <PieChart width={350} height={300}>

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
          dataKey="value"
        >

          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}

        </Pie>

        <Tooltip />
        <Legend />

      </PieChart>

    </div>

  );
}

export default FinanceChart;