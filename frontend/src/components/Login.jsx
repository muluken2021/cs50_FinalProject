import { useState } from "react";
import { loginUser } from "../services/api";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("userId", res.data.user_id);
      onLogin(res.data.user_id);
    } catch (err) {
      alert(err.response.data.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 border rounded shadow-md w-80">
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" />
      <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Login</button>
    </form>
  );
}

export default Login;