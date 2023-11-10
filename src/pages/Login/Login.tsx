import axios from "axios";
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext)

  //Login function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/Login', {email, password}, {withCredentials: true})
      const userInfo = response.data
      
      // Setting the token
      const token = response.data.token; 
      localStorage.setItem('token', token);
      
      setUser(userInfo)
      alert('Login successful')
      navigate('/')
    } catch (error) {
      alert('Login failed')
    }
    const token = localStorage.getItem('token')

    if (token) {
      // Setting the token in the Axios headers for authenticated requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  return (
    <section className="login-section">
      <div>
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Logga in</h1>
          <label typeof="email">Email:</label>
          <input
            type="email"
            placeholder="dinmail@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label typeof="password">Lösenord:</label>
          <input
            type="password"
            placeholder="lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn">Logga in</button>

          <div className="sign-up">
            Har du inget konto? <Link to={"/Register"}>Registrera dig här</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
