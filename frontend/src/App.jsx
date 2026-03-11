import { useEffect, useState } from "react";
import { getTransactions, getSummary } from "./services/api";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import FinanceChart from "./components/FinanceChart";

function App() {

  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({});

  const loadData = async () => {

    const res = await getTransactions();
    setTransactions(res.data);

    const sum = await getSummary();
    setSummary(sum.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Finance Tracker
      </h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <Wallet className="text-blue-500"/>
          <div>
            <p className="text-gray-500">Balance</p>
            <h2 className="text-xl font-bold">
              ${summary.balance || 0}
            </h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <TrendingUp className="text-green-500"/>
          <div>
            <p className="text-gray-500">Income</p>
            <h2 className="text-xl font-bold">
              ${summary.total_income || 0}
            </h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <TrendingDown className="text-red-500"/>
          <div>
            <p className="text-gray-500">Expense</p>
            <h2 className="text-xl font-bold">
              ${summary.total_expense || 0}
            </h2>
          </div>
        </div>

      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <AddTransaction refresh={loadData}/>
      </div>

      {/* Transactions */}
      <div className="bg-white p-6 rounded-xl shadow">
        <TransactionList
          transactions={transactions}
          refresh={loadData}
        />
      </div>

      {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Income vs Expense
          </h2>

          <FinanceChart summary={summary}/>
        </div>

    </div>
  );
}

export default App;