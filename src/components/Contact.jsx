import { useState } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ---------------- SANITIZE USING DOMPurify ----------------
  const sanitizeInput = (value) => {
    return DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    }).trim();
  };

  // ---------------- REAL-TIME VALIDATION ----------------
  const validateField = (name, value) => {
    let error = "";
    const cleanValue = sanitizeInput(value);

    if (name === "name") {
      if (!cleanValue) error = "Name is required";
      else if (!/^[A-Za-z ]+$/.test(cleanValue))
        error = "Name must contain only letters";
    }

    if (name === "email") {
      if (!cleanValue) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(cleanValue))
        error = "Invalid email address";
    }

    if (name === "message") {
      if (!cleanValue) error = "Message cannot be empty";
      else if (/<|>/.test(value)) error = "HTML tags are not allowed";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form state with sanitized input
    setForm((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));

    // Real-time validation
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  // ---------------- FORM SUBMISSION ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before sending
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) return;

    setLoading(true);
    setErrorMsg("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setErrorMsg("Failed to send. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen px-6 md:px-20 py-20 xl:px-40"
    >
      <h1
        className="w-fit mx-auto text-center text-2xl md:text-3xl font-bold mb-12
        bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500
        text-transparent bg-clip-text"
      >
        &lt;Contact Vyshnavi/&gt;
      </h1>

      <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center">
        <div className="w-full md:w-1/2">
          <p className="text-center text-white mb-6">
            Open to opportunities. Let’s connect.
          </p>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-5"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="off"
              className={`w-full p-3 rounded-xl bg-black/20 border ${
                errors.name ? "border-red-500" : "border-white/20"
              } text-gray-200 focus:outline-none focus:border-purple-500`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name}</p>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              autoComplete="off"
              className={`w-full p-3 rounded-xl bg-black/20 border ${
                errors.email ? "border-red-500" : "border-white/20"
              } text-gray-200 focus:outline-none focus:border-purple-500`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className={`w-full p-3 rounded-xl bg-black/20 border ${
                errors.message ? "border-red-500" : "border-white/20"
              } text-gray-200 focus:outline-none focus:border-purple-500`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}

            {/* General error message */}
            {errorMsg && (
              <p className="text-red-400 text-center text-sm">{errorMsg}</p>
            )}

            {/* Success message */}
            {success && (
              <p className="text-green-400 text-center text-sm animate-pulse">
                Message Sent Successfully!
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20
              hover:bg-white/20 transition-all font-semibold
              bg-clip-text text-transparent 
              bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500
              disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-88 md:h-88">
            <img
              src="/coderwomen2.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
