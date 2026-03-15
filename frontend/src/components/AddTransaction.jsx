import { useState } from "react";
import { addTransaction } from "../services/api";

function AddTransaction({ userId, refresh }) {
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTransaction({
      user_id: userId,
      type,
      category,
      amount: parseFloat(amount)
    });

    setCategory("");
    setAmount("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded"
      />

      <button className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}

export default AddTransaction;