import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <section className="login-section">
      <div>
        <form className="login-form">
          <h1>Logga in</h1>
          <label typeof="email">Email:</label>
          <input type="email" placeholder="dinmail@mail.com" />

          <label typeof="password">Lösenord:</label>
          <input type="password" placeholder="lösenord" />
          <button className="login-btn">Logga in</button>
          <button className="login-google">
            <FcGoogle></FcGoogle>Logga in med google
          </button>

          <div className="sign-up">
            Har du inget konto? <Link to={'/Register'}>Registrera dig här</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
