import "./Contact.scss";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="contact-form">
      <form className="form-container">
        <div className="header">
          <h2>Kontakta oss!</h2>
        </div>

        <p className="lorem">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <label htmlFor="Förnamn">Förnamn</label>
        <input type="text" placeholder="Förnamn" />

        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="dinmail@mail.com" />

        <label htmlFor="Meddelande">Meddelande</label>
        <textarea
          name="message"
          id="text-area"
          placeholder="Sriv ditt meddelande här..."
        ></textarea>

        <div className="box">
          <label htmlFor="checkbox" className="label-box">
            Jag accepterar villkoren
          </label>
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="submit-btn-form">
          <button className="submit-form">Skicka</button>
        </div>
      </form>

      <div className="contact-info">
        <div className="grid-info">
          <div className="path">
            <MdEmail />
          </div>
          <p>Email</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="mail">lorem@lorem.com</p>
        </div>
        <div className="grid-info">
          <div className="path">
            <AiTwotonePhone />
          </div>
          <p>Telefon</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="phone-number">+1 (555) 000-0000</p>
        </div>
        <div className="grid-info">
          <div className="path">
            <IoLocationSharp />
          </div>
          <p>Kontor</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="location">123 sample St, lorem 2000 AU</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
