import { Public_Sans } from "next/font/google";
import "../../styles/contact.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function Contact() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <Button
        className='contact-button'
        variant='contained'
        onClick={() => setOpen(!open)}
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
        }}>
        {open ? "Fermer le formulaire" : "Me contacter"}
      </Button>

      <form
        name='contact'
        method='POST'
        data-netlify='true'
        className={open ? "form-visible" : "form-hidden"}>
        {/* Nécessaire pour le parsing du formulaire par Netlify */}
        <input type='hidden' name='form-name' value='contact' />

        <TextField
          type='text'
          label='Votre nom'
          name='name'
          fullWidth
          margin='normal'
        />

        <TextField
          label='Votre email'
          name='email'
          type='email'
          fullWidth
          margin='normal'
        />

        <TextField
          type='text'
          label='Votre message'
          name='message'
          multiline
          rows={4}
          fullWidth
          margin='normal'
        />

        <Button
          type='submit'
          variant='outlined'
          sx={{
            marginTop: "1rem",

            "&:hover": {
              backgroundColor: "rgba(122, 70, 177, 0.1)",
            },
          }}>
          Envoyer
        </Button>
      </form>
    </section>
  );
}
