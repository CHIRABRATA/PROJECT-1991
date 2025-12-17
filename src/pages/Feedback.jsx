import React, { useState } from "react";
import PageTransition from "../components/PageTransition";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", form);
    alert("Thanks for your feedback!");
    setForm({ name: "", email: "", rating: "", message: "" });
  };

  return (
    <PageTransition>
        <section className="relative mx-auto max-w-3xl px-6 py-20">
      {/* Subtle beam accent */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="beam-glow w-[2px] opacity-40" />
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Feedback
        </h1>
        <p className="mt-2 max-w-xl text-white/65">
          Help us improve SRP by sharing your experience.
        </p>
      </div>

      {/* Glass Card */}
      <form
        onSubmit={handleSubmit}
        className="glass relative space-y-6 p-8"
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="mb-1 block text-sm text-white/70">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-2 text-white outline-none focus:border-[var(--electric)]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-white/70">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-2 text-white outline-none focus:border-[var(--electric)]"
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className="mb-1 block text-sm text-white/70">
            Rating
          </label>
          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-2 text-white outline-none focus:border-[var(--electric)]"
          >
            <option value="">Select rating</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Very Poor</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-sm text-white/70">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us what worked well or what we can improve..."
            className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-2 text-white outline-none focus:border-[var(--electric)] resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="cta-hover pressable mt-4 inline-flex items-center justify-center rounded-md bg-[var(--electric)] px-6 py-2 text-sm font-medium text-white"
        >
          Submit Feedback
        </button>
      </form>
    </section>
    </PageTransition>
  );
};

export default Feedback;
