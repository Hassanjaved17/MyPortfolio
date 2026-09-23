import SingleContactSocial from "./SingleContactSocial";

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 text-orange">
      <SingleContactSocial
        link="https://www.linkedin.com/in/hassan-javed-69766b336/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Hassanjaved17"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/hassan_javed_17/"
        Icon={FaInstagram}
      />
      <SingleContactSocial
        link="https://wa.me/923302479878"
        Icon={FaWhatsapp}
      />
    </div>
  );
};

export default ContactSocial;