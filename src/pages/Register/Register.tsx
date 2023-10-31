import { Link } from "react-router-dom";
import "./Register.scss";
import axios from 'axios'
import { useState } from "react";

type User = {
  userName: string;
  email: string;
  password: string;
}

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function registerUser(e : React.FormEvent) {
    e.preventDefault()
    axios.post('http://localhost:3000/api/register')
  }

  return (
    <section className="login-section">
      <div>
        <form className="login-form" onSubmit={registerUser}>
          <h1>Registrera</h1>
          <label typeof="name">För och efternamn:</label>
          <input
            type="name"
            placeholder="John Doe"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label typeof="email">Email:</label>
          <input
            type="email"
            placeholder="dinmail@mail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label typeof="password">Lösenord:</label>
          <input
            type="password"
            placeholder="lösenord"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="login-btn">Registrera</button>

          <div className="sign-up">
            Har du ett konto? <Link to={"/Login"}>Logga in här</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
