import React from "react";

export default function ContactForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea rows="5" type="message" name="message" />
        </div>
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </section>
  );
}
