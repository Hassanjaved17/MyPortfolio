import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_8wb3c1b", "template_0f54742", form.current, {
        publicKey: "pgBOBhgQXQf0VYrQa",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 border border-[#FB9718] 
             focus:outline-none focus:border-[#15D1E9] focus:ring-1 focus:ring-[#15D1E9] 
             transition duration-300 ease-in-out"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 border border-[#FB9718] 
             focus:outline-none focus:border-[#15D1E9] focus:ring-1 focus:ring-[#15D1E9] 
             transition duration-300 ease-in-out"
          value={email}
          onChange={handleEmail}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 border border-[#FB9718] 
             focus:outline-none focus:border-[#15D1E9] focus:ring-1 focus:ring-[#15D1E9] 
             transition duration-300 ease-in-out"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2 border border-[#FB9718] 
             focus:outline-none focus:border-[#15D1E9] focus:ring-1 focus:ring-[#15D1E9] 
             transition duration-300 ease-in-out"
          value={message}
          onChange={handleMessage}
        />

        <button
          type="submit"
          className="w-full h-12 rounded-lg border border-cyan bg-cyan text-white font-bold text-xl
             hover:bg-darkCyan focus:outline-none focus:ring-2 focus:ring-cyan/70 
             transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
