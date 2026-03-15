import React, { useState } from "react";
import { Coffee, ShoppingBag, CreditCard, X } from "lucide-react";

const Transactions = () => {

  const [transactions, setTransactions] = useState([
    { id: 1, name: "Starbucks Coffee", category: "Food", date: "Nov 24", amount: "-$12.50", icon: <Coffee size={18}/> },
    { id: 2, name: "Amazon", category: "Shopping", date: "Nov 22", amount: "-$84.20", icon: <ShoppingBag size={18}/> },
    { id: 3, name: "Netflix", category: "Entertainment", date: "Nov 20", amount: "-$15.99", icon: <CreditCard size={18}/> }
  ]);

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const addTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: `$${form.amount}`,
      icon: <CreditCard size={18}/>
    };

    setTransactions([newTransaction, ...transactions]);

    setForm({
      name: "",
      category: "",
      amount: "",
      date: ""
    });

    setOpen(false);
  };

  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl md:text-3xl font-bold">
          Transactions
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          + Add Transaction
        </button>

      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm">

        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex flex-col md:flex-row md:items-start justify-between py-4 border-b border-gray-200 gap-2"
          >

            <div className="flex items-center gap-3">
              {tx.icon}
              <span className="font-semibold">{tx.name}</span>
            </div>

            <div className="flex items-start gap-3">
            <span className="text-gray-500">{tx.category}</span>
            </div>
            <span className="text-gray-500">{tx.date}</span>

            <span className="font-bold">{tx.amount}</span>

          </div>
        ))}

      </div>

      {/* Modal */}
      {open && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-500"
            >
              <X size={20}/>
            </button>

            <h2 className="text-xl font-bold mb-4">
              Add Transaction
            </h2>

            <form onSubmit={addTransaction} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Transaction name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Add Transaction
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Transactions;