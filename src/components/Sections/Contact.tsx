"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 text-right">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-purple-500/30 dark:border-purple-500/50 p-3 rounded-md bg-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-purple-500/30 dark:border-purple-500/50 p-3 rounded-md bg-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-purple-500/30 dark:border-purple-500/50 p-3 rounded-md h-32 bg-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <p className="text-green-500">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500">Failed to send message.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
