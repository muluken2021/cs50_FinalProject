import { useState } from "react";
import { addTransaction } from "../services/api";

function AddTransaction({ refresh }) {

  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTransaction({
      type,
      category,
      amount
    });

    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>

      <select onChange={(e)=>setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        placeholder="Category"
        onChange={(e)=>setCategory(e.target.value)}
      />

      <input
        placeholder="Amount"
        onChange={(e)=>setAmount(e.target.value)}
      />

      <button>Add</button>

    </form>
  );
}

export default AddTransaction;