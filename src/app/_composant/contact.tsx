import { Public_Sans } from "next/font/google";
import "../../styles/contact.css";
export default function Contact() {
  return (
    // <form name="contact" method="POST" data-netlify="true">
    //   <p>
    //     <label htmlFor="yourname" className="label">Name:</label> <br />
    //     <input type="text" name="name" id="yourname" className="input" placeholder="Enter your name" />
    //   </p>
    //   <p>
    //     <label htmlFor="youremail" className="label">Email:</label> <br />
    //     <input type="email" name="email" id="youremail" className="input" placeholder="Enter your email" />
    //   </p>
    //   <p>
    //     <label htmlFor="yourmessage" className="label">Message:</label> <br />
    //     <textarea name="message" id="yourmessage" className="input-message" placeholder="Enter your message"></textarea>
    //   </p>
    //   <p className="container-btn-submit">
    //     <button type="submit" className="submit-form">Send</button>
    //   </p>
    // </form>


    <form name="contact" method="post" className="form-contact">
    <input type="hidden" name="form-name" value="contact" />

    <label  className="label-contact">
    {("Contact.name")}
    </label>
    <input
      id="name"
      type="text"
      name="name"
      placeholder={("Contact.holdername")}
      className="input-contact"
    />

    <label  className="label-contact">
    {("Contact.email")}
    </label>
    <input
      id="email"
      type="email"
      name="email"
      placeholder={("Contact.holderemail")}
      className="input-contact"
    />

    <label className="label-contact">
    {("Contact.message")}
    </label>
    <textarea
      id="message"
      name="message"
      placeholder={("Contact.holdermessage")}
      className="textarea-contact"
    ></textarea>

    <div className="button-container-1 ">
      <span >{("Contact.envoyer")}</span>
      <button id="work" type="submit" name="Hover">
      {("Contact.envoyer")}
      </button>
    </div>
  </form>
  );
}
