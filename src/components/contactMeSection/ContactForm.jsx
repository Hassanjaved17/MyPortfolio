import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ripple, setRipple] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm("service_8wb3c1b", "template_0f54742", form.current, {
        publicKey: "pgBOBhgQXQf0VYrQa",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setSuccess("Message Sent Successfully ✓");
          setTimeout(() => setSuccess(""), 5000);
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  const handleRipple = (e) => {
    if (isSubmitting) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);
  };

  const inputClass = `
    h-12 w-full rounded-lg bg-lightBrown px-3
    border border-orange
    focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange
    placeholder:text-lightGrey/60 text-white
    transition-all duration-300
  `;

  return (
    <>
      <style>{`
        .send-btn {
          background: linear-gradient(135deg, rgb(var(--color-orange)) 0%, rgb(var(--color-orange-light)) 50%, rgb(var(--color-orange)) 100%);
          background-size: 200% 200%;
          transition: background-position 0.4s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .send-btn:hover { background-position: right center; }

        .send-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s ease;
        }
        .send-btn:hover::before { left: 150%; }

        .send-ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          width: 10px; height: 10px;
          transform: scale(0);
          animation: ripple-burst 0.6s ease-out forwards;
          pointer-events: none;
        }
        @keyframes ripple-burst {
          to { transform: scale(30); opacity: 0; }
        }

        .send-btn:hover .send-icon { transform: translateX(5px) rotate(-35deg); }
        .send-icon { transition: transform 0.3s ease; }

        .send-spinner {
          width: 18px; height: 18px;
          border: 2.5px solid rgba(0,0,0,0.2);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div>
        {success && (
          <p className="text-orange font-medium text-sm mb-3 animate-pulse">
            {success}
          </p>
        )}

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className={inputClass}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <textarea
            name="message"
            rows="9"
            placeholder="Message"
            required
            className={`
              w-full rounded-lg bg-lightBrown p-3 resize-none
              border border-orange
              focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange
              placeholder:text-lightGrey/60 text-white
              transition-all duration-300
            `}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleRipple}
            className="send-btn relative overflow-hidden w-full h-[52px] rounded-xl
              flex items-center justify-center gap-3
              font-bold tracking-widest uppercase text-sm text-black
              shadow-[0_4px_20px_rgb(var(--color-orange)/0.35)]
              hover:shadow-[0_6px_30px_rgb(var(--color-orange)/0.6)]
              hover:-translate-y-0.5
              active:translate-y-0
              disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0
              transition-all duration-300"
          >
            {ripple && (
              <span
                className="send-ripple"
                style={{ left: ripple.x - 5, top: ripple.y - 5 }}
              />
            )}
            {isSubmitting ? (
              <>
                <span className="send-spinner" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <IoSend className="send-icon text-lg" />
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;