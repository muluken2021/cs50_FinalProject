import { useState } from "react";
import { addTransaction } from "../services/api";

function AddTransaction({ refresh }) {

  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !amount) return; // basic validation

    await addTransaction({
      type,
      category,
      amount: parseFloat(amount)
    });

    // reset form
    setCategory("");
    setAmount("");

    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-4 gap-4 items-end"
    >

      {/* Transaction Type */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Type</label>
        <select
          className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
          value={type}
          onChange={(e)=>setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Category */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Category</label>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />
      </div>

      {/* Amount */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Amount</label>
        <input
          type="number"
          className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Amount"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Add Transaction
        </button>
      </div>

    </form>
  );
}

export default AddTransaction;