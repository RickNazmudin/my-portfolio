"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email.trim() || !userInput.message.trim() || !userInput.name.trim()) {
      setError({ email: !isValidEmail(userInput.email), required: true });
      return;
    } else if (!isValidEmail(userInput.email)) {
      setError({ email: true, required: false });
      return;
    } else {
      setError({ email: false, required: false });
    }

    try {
      setIsLoading(true);
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || "";
      const res = await axios.post(`${appUrl}/api/contact`, userInput);

      if (res.data?.success || res.status === 200) {
        toast.success("Message sent successfully! Thank you.");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.info(res.data?.message || "Message sent!");
      }
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Could not send message. Please contact via direct email.";
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-mono font-semibold mb-4 text-[#f9d049] text-lg sm:text-xl uppercase tracking-wider">
        Send A Message
      </p>
      <div className="max-w-3xl text-white rounded-xl border border-[#252f5e] bg-[#0d1224]/90 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          Have a project in mind or looking for a developer to build your next <strong>Web App</strong> or <strong>Mobile App</strong>? Drop a message below and I will get back to you promptly!
        </p>

        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-gray-300">
              Your Name <span className="text-pink-500">*</span>
            </label>
            <input
              className="bg-[#10172d] w-full border rounded-lg border-[#293259] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all duration-300 px-3.5 py-2.5 text-sm text-white placeholder-gray-500"
              type="text"
              placeholder="e.g. Alex Johnson"
              maxLength="100"
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-gray-300">
              Your Email <span className="text-pink-500">*</span>
            </label>
            <input
              className="bg-[#10172d] w-full border rounded-lg border-[#293259] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all duration-300 px-3.5 py-2.5 text-sm text-white placeholder-gray-500"
              type="email"
              placeholder="e.g. alex@example.com"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                if (userInput.email) {
                  setError((prev) => ({ ...prev, email: !isValidEmail(userInput.email) }));
                }
              }}
            />
            {error.email && (
              <p className="text-xs text-red-400 mt-1">
                Please provide a valid email address!
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-gray-300">
              Your Message <span className="text-pink-500">*</span>
            </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-lg border-[#293259] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all duration-300 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 resize-none"
              placeholder="Tell me about your project scope, timeline, and requirements..."
              maxLength="1000"
              name="message"
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>

          {error.required && (
            <p className="text-xs text-red-400 font-medium">All fields are required!</p>
          )}

          <div className="flex justify-start mt-2">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105 hover:shadow-indigo-600/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending Message...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Send Message</span>
                  <TbMailForward size={18} />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
