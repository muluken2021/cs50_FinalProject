import { useState } from "react";
import axios from "axios";

function Register({ onSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/register", {
      username, email, password
    });
    alert(res.data.message);
    onSuccess();
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-2">
      <input placeholder="Username" onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button>Register</button>
    </form>
  );
}

export default Register;