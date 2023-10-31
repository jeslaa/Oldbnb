import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {
  return (
    <section className="login-section">
      <div>
        <form className="login-form">
          <h1>Registrera</h1>
          <label typeof="email">För och efternamn:</label>
          <input type="email" placeholder="John Doe" />

          <label typeof="email">Email:</label>
          <input type="email" placeholder="dinmail@mail.com" />

          <label typeof="password">Lösenord:</label>
          <input type="password" placeholder="lösenord" />
          <button className="login-btn">Registrera</button>

          <div className="sign-up">
            Har du ett konto? <Link to={'/Login'}>Logga in här</Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register