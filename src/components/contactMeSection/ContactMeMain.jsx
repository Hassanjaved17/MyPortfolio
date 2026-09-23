import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <div className="flex flex-col items-center mb-10">
        <span className="text-cyan text-sm uppercase tracking-[0.2em] mb-3">Let's talk</span>
        <h2 className="text-5xl md:text-6xl font-bold text-orange text-center">Contact Me</h2>
        <div className="mt-5 w-16 h-[3px] rounded-full bg-gradient-to-r from-orange to-lightOrange" />
      </div>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;