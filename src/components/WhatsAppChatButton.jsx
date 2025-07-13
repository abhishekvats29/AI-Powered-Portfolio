// src/components/WhatsAppChatButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChatButton = () => {
  const phoneNumber = '919508721988';
  const prefilledMessage = 'Hi Abhishek, I visited your portfolio!';
  const encodedMessage = encodeURIComponent(prefilledMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-full shadow-xl hover:scale-105 transition duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-black w-6 h-6" />
    </a>
  );
};

export default WhatsAppChatButton;
