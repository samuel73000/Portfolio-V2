import { Public_Sans } from "next/font/google";
import "../../styles/contact.css";
export default function ContactForm() {
  return (
    
    <form name="contact" method="POST" data-netlify="true"   netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname" className="label">
          Nom:
        </label>{" "}
        <br />
        <input
          type="text"
          name="name"
          id="yourname"
          className="input"
          placeholder="Entrez votre nom"
        />
      </p>
      <p>
        <label htmlFor="youremail" className="label">
          Email:
        </label>{" "}
        <br />
        <input
          type="email"
          name="email"
          id="youremail"
          className="input"
          placeholder="Entrez votre email"
        />
      </p>
      <p>
        <label htmlFor="yourmessage" className="label">
          Message:
        </label>{" "}
        <br />
        <textarea
          name="message"
          id="yourmessage"
          className="input-message"
          placeholder="Entrez votre message"
        ></textarea>
      </p>
      <p className="container-btn-submit">
        <button type="submit" className="submit-form">
          Envoyer
        </button>
      </p>
    </form>

  );

}
