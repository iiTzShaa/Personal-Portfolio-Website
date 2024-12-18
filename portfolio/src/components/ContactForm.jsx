import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import {motion} from 'framer-motion'

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      // Send the email using EmailJS
      emailjs
        .send(
          "service_s9i0ldh", // Replace with your EmailJS service ID
          "template_3psr3xw", // Replace with your EmailJS template ID
          formData,
          "1SDm1l6wWEWBQeLTl" // Replace with your EmailJS public key
        )
        .then((res) => {
          toast.success("Message sent successfully! 🎉");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          console.error("Failed to send message", err);
          toast.error("Failed to send message. Please try again. 😢");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-4 lg:w-3/4" id="contact">
      {/* Toaster for displaying toast notifications */}
      <Toaster  />

      <h2 className="my-8 text-center text-4xl font-semibold 
      tracking-tighter">Let's Connect</h2>
      <motion.form 
      initial={{opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8 ,delay:0.7}}
      onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="mb-4 flex space-x-4">
            <div className="lg:w-1/2">
                <input type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30
                bg-transparent px-3 py-3 text-sm focus:outline-none "/>
                {errors.name && 
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} className="text-sm text-red-500">{errors.name}</motion.p>}
    
            </div>
            <div className="lg:w-1/2">
                <input type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30
                bg-transparent px-3 py-3 text-sm focus:outline-none "/>
                {errors.email && 
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}className="text-sm text-red-500">{errors.email}</motion.p>}
            </div>
         </div>
         <div className="mb-4">
                <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30
                bg-transparent px-3 py-3 text-sm focus:outline-none "
                rows="6"/>
                {errors.message && 
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-red-500">{errors.message}</motion.p>}
            </div>
            <button
          type="submit"
          className={`w-full mb-8 rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold
                text-stone-900 hover:bg-stone-300 ${
                isSending ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSending} >
                <div className="flex items-center justify-center gap-2">
                {isSending ? "Sending..." : "Send Message"}
                <FiSend/>
                </div>
            </button>
      </motion.form>
    </div>
  );
};
