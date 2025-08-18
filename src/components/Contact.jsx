import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_iy31qmo',
        'template_fvspnnl',
        formRef.current,
        'clgkFG3qZUh97XPZm'
      );

      setIsSubmitting(false);
      setSuccess(true);
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '', file: null });

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setIsSubmitting(false);
      alert('❌ Failed to send message. Please try again later.');
      console.error(error);
    }
  };

  const whatsappLink = `https://wa.me/919508721988?text=Hi%20Abhishek%2C%20I%20visited%20your%20portfolio!`;

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#102040] to-[#1a2c4a] text-white"


    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>

        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 text-left"
          >
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <textarea
              name="message"
              rows={1}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-y min-h-[80px] max-h-[250px]"
            />

            <div className="text-sm text-white/70">
              <label className="block mb-1">Upload PDF (optional)</label>
              <input
                type="file"
                name="file"
                accept=".pdf"
                onChange={handleChange}
                className="block w-full text-sm text-white/60 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition"
              />
            </div>

            {/* Submit & WhatsApp */}
            <div className="flex items-center justify-between pt-3 flex-wrap gap-4">
              {isSubmitting ? (
                <div className="flex justify-center items-center gap-2 text-blue-400 animate-pulse font-medium">
                  <svg
                    className="w-5 h-5 animate-spin text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending...
                </div>
              ) : success ? (
                <div className="text-green-400 font-semibold animate-bounce">
                   ✅ Message Sent!
                </div>
              ) : (
                <>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </button>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                  >
                    <div className="bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/30 p-3 rounded-full shadow-md transition-all">
                      <FaWhatsapp className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      Chat with Abhishek
                    </div>
                  </a>
                </>
              )}
            </div>
          </form>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Contact;