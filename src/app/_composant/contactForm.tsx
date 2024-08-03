import { Public_Sans } from "next/font/google";
import "../../styles/contact.css";
export default function ContactForm() {
  return (
    
    // <form name="contact" method="POST" data-netlify="true"   netlify-honeypot="bot-field" >
    //   <input type="hidden" name="form-name" value="contact" />
    //   <p>
    //     <label htmlFor="yourname" className="label">
    //       Nom:
    //     </label>{" "}
    //     <br />
    //     <input
    //       type="text"
    //       name="name"
    //       id="yourname"
    //       className="input"
    //       placeholder="Entrez votre nom"
    //     />
    //   </p>
    //   <p>
    //     <label htmlFor="youremail" className="label">
    //       Email:
    //     </label>{" "}
    //     <br />
    //     <input
    //       type="email"
    //       name="email"
    //       id="youremail"
    //       className="input"
    //       placeholder="Entrez votre email"
    //     />
    //   </p>
    //   <p>
    //     <label htmlFor="yourmessage" className="label">
    //       Message:
    //     </label>{" "}
    //     <br />
    //     <textarea
    //       name="message"
    //       id="yourmessage"
    //       className="input-message"
    //       placeholder="Entrez votre message"
    //     ></textarea>
    //   </p>
    //   <p className="container-btn-submit">
    //     <button type="submit" className="submit-form">
    //       Envoyer
    //     </button>
    //   </p>
    // </form>







<form name="voucher" data-netlify="true"  method="POST" action="/poukaz-objednan" netlify-honeypot="bot-field">
      <h3>Objednávka voucheru</h3>
      <p className="hidden">
        <label>
          Do not fill this out if you are a human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="voucher" />
      <div >
        <label htmlFor="voucher_jmeno">Celé jméno</label>
        <input type="text" id="voucher_jmeno" name="jmeno"  />
      </div>
      <div >
        <label htmlFor="voucher_email">Email</label>
        <input type="email" id="voucher_email" name="email"  />
      </div>
      <div >
        <label>Typ poukazu</label>Dentální hygiena
      </div>
      <div >
        <label htmlFor="voucher_hodnota">Hodnota</label>
        <input type="text" id="voucher_hodnota" name="hodnota"  />
      </div>
      <div >
        <label htmlFor="voucher_prijemce">Komu poukaz daruji</label>
        <input type="text" id="voucher_prijemce" name="prijemce"  />
      </div>
      <div>
        <label htmlFor="voucher_tel">Telefon obdarovaného</label>
        <input type="phone" id="voucher_tel" name="telefon"  />
      </div>

      <div >
        <input type="checkbox" name="souhlas" id="souhlas"  />
        <label htmlFor="souhlas">Souhlasím se zpracováním všech údajů</label>
      </div>

      <div >
        <button type="submit" role="button" >
          Objednat
        </button>
      </div>
    </form>
  );

}
