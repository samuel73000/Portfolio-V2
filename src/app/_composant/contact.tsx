import { Public_Sans } from "next/font/google";
import "../../styles/contact.css";
export default function Contact() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname" className="label">Name:</label> <br />
        <input type="text" name="name" id="yourname" className="input" placeholder="Enter your name" />
      </p>
      <p>
        <label htmlFor="youremail" className="label">Email:</label> <br />
        <input type="email" name="email" id="youremail" className="input" placeholder="Enter your email" />
      </p>
      <p>
        <label htmlFor="yourmessage" className="label">Message:</label> <br />
        <textarea name="message" id="yourmessage" className="input-message" placeholder="Enter your message"></textarea>
      </p>
      <p className="container-btn-submit">
        <button type="submit" className="submit-form">Send</button>
      </p>
    </form>
  );
}
