import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <Router>
      <div className="flex w-full bg-[#f0f4f9] min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-10 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;


// import { useState, useEffect } from "react";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import AddTransaction from "./components/AddTransaction";
// import TransactionList from "./components/TransactionList";
// import { getTransactions } from "./services/api";


// function App() {
//   const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
//   const [transactions, setTransactions] = useState([]);
//   const [showRegister, setShowRegister] = useState(false);

//   const fetchTransactions = async () => {
//     if (!userId) return;
//     const res = await getTransactions(userId);
//     setTransactions(res.data);
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, [userId]);

//   if (!userId) {
//     return showRegister ? (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <Register onRegisterSuccess={() => setShowRegister(false)} />
//         <button onClick={() => setShowRegister(false)} className="mt-2 text-blue-500">Go to Login</button>
        
//       </div>


//     ) : (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <Login onLogin={setUserId} />
//         <button onClick={() => setShowRegister(true)} className="mt-2 text-blue-500">Create Account</button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <button onClick={() => { localStorage.removeItem("userId"); setUserId(null); }} className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>

//       <AddTransaction userId={userId} refresh={fetchTransactions} />
//       <TransactionList transactions={transactions} refresh={fetchTransactions} />
//     </div>
//   );
// }

// export default App;