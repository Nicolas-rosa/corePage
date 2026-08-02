import { useState } from 'react';

export function ContactForm({ labels, confirmation }) {
  const [sent, setSent] = useState(false);
  function submit(event) { event.preventDefault(); setSent(true); }
  if (sent) return <p className="form-confirmation" role="status">{confirmation}</p>;
  return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>{labels.form.name}*<input required name="name" autoComplete="name" /></label><label>{labels.form.email}*<input required type="email" name="email" autoComplete="email" /></label></div><label>{labels.form.phone}<input type="tel" name="phone" autoComplete="tel" /></label><label>{labels.form.message}*<textarea required name="message" rows="5" /></label><p className="form-note">{labels.required}</p><button className="button button--primary" type="submit">{labels.send}</button></form>;
}
