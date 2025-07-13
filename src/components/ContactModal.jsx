import React, { useRef, useState } from "react";
import { FaPaperPlane, FaWhatsapp, FaPaperclip } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactModal = ({ onClose }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pdfUploaded, setPdfUploaded] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
      setPdfUploaded(true);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_iy31qmo",
        "template_fvspnnl",
        formRef.current,
        "clgkFG3qZUh97XPZm"
      );
      setIsSubmitting(false);
      alert("✅ Message sent!");
      setFormData({ name: "", email: "", phone: "", message: "", file: null });
      setPdfUploaded(false);
      onClose();
    } catch (error) {
      setIsSubmitting(false);
      alert("❌ Failed to send message.");
    }
  };

  const phoneNumber = "919508721988";
  const prefilledMessage = "Hi Abhishek, I visited your portfolio!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white">
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl">
          ×
        </button>
        <h2 className="text-center text-2xl font-bold mb-4">Get in Touch</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 relative">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 placeholder-white/70"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 placeholder-white/70"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 placeholder-white/70"
          />
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 placeholder-white/70 min-h-[80px]"
          />

          {/* File input with PDF uploaded badge */}
          <div className="flex items-center gap-2 text-sm text-blue-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <FaPaperclip className="text-blue-300" />
              <span className="underline">Choose PDF File</span>
              <input
                type="file"
                name="file"
                accept=".pdf"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            {pdfUploaded && (
              <span className="text-green-400 font-medium bg-white/10 px-2 py-1 rounded-md border border-green-400/30">
                ✅ PDF Uploaded
              </span>
            )}
          </div>

          {/* Button Row */}
          <div className="flex justify-between items-center mt-6">
            {/* Send Button - 3D Glass Blue */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-900/20 border border-white/40 backdrop-blur-lg text-white hover:scale-105 transition-all duration-300"
            >
              <FaPaperPlane className="text-blue-300" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* WhatsApp Icon - Glass White Border with Tooltip */}
            <div className="relative group">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/40 backdrop-blur-lg hover:scale-105 transition-all duration-300"
              >
                <FaWhatsapp className="text-green-300 text-xl" />
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-white/10 text-white px-3 py-1 rounded-lg border border-white/20 text-sm font-medium backdrop-blur-md">
                  Chat on WhatsApp
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
