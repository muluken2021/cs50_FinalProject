import React, { useEffect, useState } from "react";
import { Coffee, ShoppingBag, CreditCard, X, Trash2, Edit2, Save } from "lucide-react";
import { getTransactions, addTransaction, updateTransaction, deleteTransaction } from "../services/api";

const Transactions = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ type: "income", category: "", amount: "", date: "" });

  // Edit state
  const [editId, setEditId] = useState(null);
  const [editType, setEditType] = useState("income");
  const [editCategory, setEditCategory] = useState("");
  const [editAmount, setEditAmount] = useState("");

  // Fetch transactions
  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const res = await getTransactions(userId);
      // Ensure it's an array
      setTransactions(Array.isArray(res.data) ? res.data : res || []);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactions([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Handle modal form change
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Add new transaction
  const handleAdd = async (e) => {
    e.preventDefault();
    await addTransaction({ user_id: userId, ...form, amount: parseFloat(form.amount) });
    setForm({ type: "income", category: "", amount: "", date: "" });
    setOpen(false);
    fetchTransactions();
  };

  // Delete transaction
  const handleDelete = async (id) => {
    await deleteTransaction(id);
    fetchTransactions();
  };

  // Start editing
  const handleEdit = (t) => {
    setEditId(t.id);
    setEditType(t.type);
    setEditCategory(t.category);
    setEditAmount(t.amount);
  };

  // Save edited transaction
  const handleSave = async () => {
    if (!editCategory || !editAmount) return;
    await updateTransaction(editId, {
      type: editType,
      category: editCategory,
      amount: parseFloat(editAmount),
    });
    setEditId(null);
    setEditType("income");
    setEditCategory("");
    setEditAmount("");
    fetchTransactions();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Transactions</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          + Add Transaction
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto bg-white rounded-[32px] p-4 md:p-6 shadow-sm">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (transactions || []).length === 0 ? (
          <p className="text-center text-gray-500">No transactions yet.</p>
        ) : (
          <table className="w-full text-left border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Category</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(transactions || []).map((t) => (
                <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    {editId === t.id ? (
                      <select
                        className="border p-1 rounded w-full"
                        value={editType}
                        onChange={(e) => setEditType(e.target.value)}
                      >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 py-1 rounded-full text-white font-semibold text-sm ${
                          t.type === "income" ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {t.type}
                      </span>
                    )}
                  </td>

                  <td className="p-3">
                    {editId === t.id ? (
                      <input
                        className="border p-1 rounded w-full"
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                      />
                    ) : (
                      t.category
                    )}
                  </td>

                  <td className="p-3">
                    {editId === t.id ? (
                      <input
                        type="number"
                        className="border p-1 rounded w-full"
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                      />
                    ) : (
                      `$${t.amount.toFixed(2)}`
                    )}
                  </td>

                  <td className="p-3 flex gap-2">
                    {editId === t.id ? (
                      <button
                        onClick={handleSave}
                        className="text-green-500 hover:text-green-700"
                        title="Save"
                      >
                        <Save size={20} />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(t)}
                        className="text-blue-500 hover:text-blue-700"
                        title="Edit"
                      >
                        <Edit2 size={20} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Transaction Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-500"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
            <form onSubmit={handleAdd} className="space-y-4">
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
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