import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";

const Socials = () => {
  return (
    <div
      className="social-main"
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="tel:+917829152222"
        target="_blank"
        rel="noopener noreferrer"
        title="Call Us"
      >
        <FaPhoneAlt size={25} color="#f1eada" />
      </a>

      {/* Email */}
      <a
        href="mailto:office.thestillcirce@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email Us"
      >
        <MdEmail size={35} color="#f1eada" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/thestillcircle"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram size={30} color="#f1eada" />
      </a>

      <a
        href="https://chat.whatsapp.com/EYVe4jXsFwF6WdAQGgNxg7"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <MdWhatsapp size={30} color="#f1eada" />
      </a>
    </div>
  );
};

export default Socials;
