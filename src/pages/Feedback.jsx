import React, { useState } from "react";

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
    <section className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-white mb-2">
        Feedback
      </h1>
      <p className="text-white/70 mb-8">
        Tell us what you think. This helps us improve.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >

        <div>
          <label className="block text-sm text-white/80 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-2 text-white outline-none focus:border-white/30"
          />
        </div>

        <div>
          <label className="block text-sm text-white/80 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-2 text-white outline-none focus:border-white/30"
          />
        </div>

        <div>
          <label className="block text-sm text-white/80 mb-1">
            Rating
          </label>
          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-2 text-white outline-none focus:border-white/30"
          >
            <option value="">Select rating</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Very Poor</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-white/80 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your feedback..."
            className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-2 text-white outline-none focus:border-white/30 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-white text-black font-medium py-2 hover:bg-white/90 transition"
        >
          Submit Feedback
        </button>
      </form>
    </section>
  );
};

export default Feedback;
