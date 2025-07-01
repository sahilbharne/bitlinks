"use client";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us!");
    setForm({ name: "", email: "", message: "" });
    // ⚡ later: send to backend or email service
  };

  return (
    <main className="bg-gradient-to-b from-purple-50 via-purple-100 to-purple-50 min-h-screen py-12 px-4 sm:px-8 md:px-16">
      <section className="max-w-2xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-800 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 text-lg">
          Have questions, feedback, or ideas? We'd love to hear from you! Fill out the form below and we'll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 outline-none transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition active:scale-95 self-center"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
