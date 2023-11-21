import React from "react";
import "./Contactowner.scss";

const ContactOwner = () => {
  return (
    <div className="contact-owner-container">
      <h2>Kom i kontakt med värden</h2>
      <form action="" className="form-contact-container">
        <div>
          <label htmlFor="" className="labels-contact">
            Förnamn: <br />
            <input
              type="text"
              placeholder="Förnamn"
              className="input-contact"
            />
          </label>
        </div>

        <div>
          <label htmlFor="" className="labels-contact">
            Efternamn: <br />
            <input
              type="text"
              placeholder="Efternamn"
              className="input-contact"
            />
          </label>
        </div>

        <div>
          <label htmlFor="" className="labels-contact">
            Din mail: <br />
            <input
              type="text"
              placeholder="Dinmail@mail.com"
              className="input-contact"
            />
          </label>
        </div>

        <div>
          <textarea
            className="input-contact text-area"
            id="text-area"
            placeholder="Skriv ditt meddelande här..."
          ></textarea>
        </div>

        <div className="contact-submit-btn">
            <button className="submit-btn">Skicka</button>
        </div>
      </form>
    </div>
  );
};

export default ContactOwner;
