import { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/login", { email, password });
    if(res.data.user_id) onLogin(res.data.user_id);
    alert(res.data.message);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2">
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}

export default Login;