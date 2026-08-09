"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    });
    const result = await response.json();

    if (result.success) {
      form.reset();
      setStatus("Thanks! Your message has been sent.");
      return;
    }

    setStatus("Something went wrong. Please try again.");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f1f7fc] px-5 py-24 dark:bg-[#0b1218] sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl dark:bg-indigo-500/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#14233f] dark:text-white sm:text-6xl">
            Let&apos;s create something{" "}
            <span className="text-teal-600">meaningful.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-slate-500">
            I&apos;m open to conversations about web projects, collaboration and
            new opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:jumur581@gmail.com"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100 dark:border-white/10 dark:bg-[#111b2b] dark:hover:shadow-black/30"
            >
              <FaEnvelope className="text-teal-600" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Email
              </p>
              <p className="mt-1 text-sm font-bold text-[#14233f] dark:text-white">
                jumur581@gmail.com
              </p>
            </a>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#111b2b]">
              <FaMapMarkerAlt className="text-teal-600" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Location
              </p>
              <p className="mt-1 text-sm font-bold text-[#14233f] dark:text-white">
                Dhaka, Bangladesh
              </p>
            </div>
            <a
              href="tel:01851647899"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100 dark:border-white/10 dark:bg-[#111b2b] dark:hover:shadow-black/30"
            >
              <FaPhone className="text-teal-600" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Phone
              </p>
              <p className="mt-1 text-sm font-bold text-[#14233f] dark:text-white">
                01851647899
              </p>
            </a>
            <a
              href="https://github.com/jk-jumur"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100 dark:border-white/10 dark:bg-[#111b2b] dark:hover:shadow-black/30"
            >
              <FaGithub className="text-teal-600" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                GitHub
              </p>
              <p className="mt-1 text-sm font-bold text-[#14233f] dark:text-white">
                jk-jumur ↗
              </p>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100 dark:border-white/10 dark:bg-[#111b2b] dark:hover:shadow-black/30"
            >
              <FaLinkedin className="text-teal-600" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                LinkedIn
              </p>
              <p className="mt-1 text-sm font-bold text-[#14233f] dark:text-white">
                Connect with me ↗
              </p>
            </a>
          </div>

          <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(30,64,99,0.12)] dark:border-white/10 dark:bg-[#111b2b] dark:shadow-black/30 sm:p-9"
        >
          <input
            type="hidden"
            name="access_key"
            value="345899fd-328b-4f61-a65c-fd398343f1ff"
          />
          <input type="hidden" name="to" value="jumur581@gmail.com" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />
          <h3 className="text-xl font-bold text-[#14233f] dark:text-white">Send a message</h3>
          <p className="mt-2 text-xs text-slate-500">
            I&apos;ll get back to you as soon as possible.
          </p>
          <div className="mt-6 space-y-4">
            <label className="block text-xs font-semibold text-slate-600">
              Name
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-emerald-400/10"
              />
            </label>
            <label className="block text-xs font-semibold text-slate-600">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-emerald-400/10"
              />
            </label>
            <label className="block text-xs font-semibold text-slate-600">
              Subject
              <input
                name="subject"
                type="text"
                required
                placeholder="How can I help you?"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-emerald-400/10"
              />
            </label>
            <label className="block text-xs font-semibold text-slate-600">
              Message
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-emerald-400/10"
              />
            </label>
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800 hover:shadow-teal-700/30"
            >
              {status === "Sending..." ? "Sending..." : "Send Message →"}
            </button>
            {status && (
              <p className="text-center text-xs font-medium text-teal-700">
                {status}
              </p>
            )}
          </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
