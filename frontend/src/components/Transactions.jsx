import React from "react";
import { Coffee, ShoppingBag, CreditCard } from "lucide-react";

const transactions = [
  { id: 1, name: "Starbucks Coffee", category: "Food", date: "Nov 24", amount: "-$12.50", icon: <Coffee size={18}/> },
  { id: 2, name: "Amazon", category: "Shopping", date: "Nov 22", amount: "-$84.20", icon: <ShoppingBag size={18}/> },
  { id: 3, name: "Netflix", category: "Entertainment", date: "Nov 20", amount: "-$15.99", icon: <CreditCard size={18}/> }
];

const Transactions = () => {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">Transactions</h1>

      <div className="bg-white rounded-[32px] p-8 shadow-sm">

        {transactions.map((tx) => (
          <div key={tx.id} className="flex justify-between py-4 border-b">

            <div className="flex items-center gap-3">
              {tx.icon}
              <span className="font-semibold">{tx.name}</span>
            </div>

            <span>{tx.category}</span>
            <span>{tx.date}</span>
            <span className="font-bold">{tx.amount}</span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Transactions;