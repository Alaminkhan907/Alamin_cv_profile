import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { toast } from "react-toastify";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_51f2xv4",
        "template_pvltd0s",
        form.current,
        "M4lFN4gv7ekeUfMbU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          toast(`Email send successfully`);
        },
        (error) => {
          console.log(error.text);
          toast(`${error.text} Happen`);
        }
      );
    e.target.reset();
  };

  return (
    <div className="mb-5" id="contact">
      <div className="portfolio ">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
        <span className="fs-4">Contract me</span>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
