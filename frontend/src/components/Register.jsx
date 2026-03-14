import { useState } from "react";
import { registerUser } from "../services/api";

function Register({ onRegisterSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ username, email, password });
      alert(res.data.message);
      onRegisterSuccess();
    } catch (err) {
      alert(err.response.data.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 border rounded shadow-md w-80">
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 rounded" />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
    </form>
  );
}

export default Register;