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
      {/* Glassy Navy Card with Thin Border & Glow on Hover */}
      <div
        className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl border border-white/30 transition-all duration-500 hover:border-blue-400 hover:shadow-blue-500/40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(11,27,58,0.98) 80%)",
          boxShadow:
            "inset 0 0 30px rgba(255,255,255,0.12), 0 8px 30px rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-white hover:text-blue-200 transition"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold mb-6 text-white drop-shadow-md">
          Get in Touch
        </h2>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 relative">
          {["name", "email", "phone"].map((field, idx) => (
            <input
              key={idx}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              required={field !== "phone"}
              value={formData[field]}
              onChange={handleChange}
              placeholder={
                field === "name"
                  ? "Your Name"
                  : field === "email"
                  ? "Your Email"
                  : "Contact Number"
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 
                focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
          ))}

          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 
              focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm min-h-[80px]"
          />

          {/* File Input */}
          <div className="flex items-center gap-2 text-sm text-white">
            <label className="flex items-center gap-2 cursor-pointer">
              <FaPaperclip className="text-blue-200" />
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
              <span className="text-green-200 font-medium bg-green-700/30 px-2 py-1 rounded-md border border-green-400/30">
                ✅ PDF Uploaded
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            {/* Indigo Send Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-600 text-white 
                shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/50 transition-all duration-300 hover:scale-105"
            >
              <FaPaperPlane />
              {isSubmitting ? "Sending..." : "Send"}
            </button>

            {/* WhatsApp */}
            <div className="relative group">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 
                  shadow-lg hover:shadow-green-300/50 transition-all hover:scale-110"
              >
                <FaWhatsapp className="text-white text-2xl" />
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-white text-blue-800 px-3 py-1 rounded-lg border border-blue-300 text-sm font-medium shadow-md">
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
