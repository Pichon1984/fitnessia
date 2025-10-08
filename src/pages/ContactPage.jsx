
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contacto.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export default function ContactPage() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

   emailjs
    .sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_KEY
    )

    .then(() => {
      alert('Mensaje enviado correctamente ✅');
      form.current.reset();
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
      alert('Hubo un problema al enviar el mensaje ❌');
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contacto</h2>
      <form ref={form} onSubmit={enviarEmail} className="p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre completo</label>
          <input type="text" name="user_name" className="form-control" id="nombre" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" name="user_email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea name="message" className="form-control" id="mensaje" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar mensaje</button>
      </form>
    </div>
  );
}


