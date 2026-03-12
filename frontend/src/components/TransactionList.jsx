import { useState } from "react";
import { Trash2, Edit2, Save } from "lucide-react";
import { deleteTransaction, updateTransaction } from "../services/api";

function TransactionList({ transactions, refresh }) {
  const [editId, setEditId] = useState(null);
  const [editType, setEditType] = useState("income");
  const [editCategory, setEditCategory] = useState("");
  const [editAmount, setEditAmount] = useState("");

  // Delete transaction
  const handleDelete = async (id) => {
    await deleteTransaction(id);
    refresh();
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
      description: "" // optional
    });

    setEditId(null);
    setEditType("income");
    setEditCategory("");
    setEditAmount("");
    refresh();
  };

  return (
    <div className="overflow-x-auto">
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
          {transactions.map((t) => (
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

          {transactions.length === 0 && (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-500">
                No transactions yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;