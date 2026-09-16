// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <div id="contact" className="my-16 lg:my-28 relative text-white">
      {/* Decorative Section Header on Large Screens */}
      <div className="hidden lg:flex flex-col items-center absolute top-20 -right-8">
        <span className="bg-[#1a1443] border border-[#2e375e] w-fit text-white rotate-90 p-2 px-5 text-lg lg:text-xl font-bold uppercase rounded-md shadow-lg">
          CONTACT
        </span>
        <span className="h-32 lg:h-44 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="flex justify-center my-6 lg:py-6">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] border border-[#2e375e] w-fit text-white py-2 px-6 text-lg sm:text-xl font-bold uppercase tracking-wider rounded-md shadow-lg">
            Get In Touch
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start mt-8">
        <ContactForm />

        <div className="flex flex-col justify-between h-full space-y-8">
          <div>
            <p className="font-mono font-semibold mb-4 text-[#f9d049] text-lg sm:text-xl uppercase tracking-wider">
              Contact Information
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#11152c]/80 border border-[#1f2648] hover:border-violet-500 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-[#1a2145] text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                  <MdAlternateEmail size={22} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-400 font-mono">Email Address</p>
                  <p className="text-sm sm:text-base font-medium text-white truncate group-hover:text-amber-300 transition-colors">
                    {personalData.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#11152c]/80 border border-[#1f2648] hover:border-emerald-500 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-[#1a2145] text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <IoMdCall size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">Phone & WhatsApp</p>
                  <p className="text-sm sm:text-base font-medium text-white group-hover:text-emerald-300 transition-colors">
                    {personalData.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#11152c]/80 border border-[#1f2648]">
                <div className="p-3 rounded-lg bg-[#1a2145] text-cyan-400">
                  <CiLocationOn size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">Location</p>
                  <p className="text-sm sm:text-base font-medium text-white">
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 font-semibold">
              Find Me On Social Media:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                target="_blank"
                href={personalData.github}
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-white hover:border-violet-500 hover:scale-110 transition-all duration-300 shadow-md"
              >
                <IoLogoGithub size={24} />
              </Link>
              <Link
                target="_blank"
                href={personalData.linkedIn}
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-blue-400 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-md"
              >
                <BiLogoLinkedin size={24} />
              </Link>
              <Link
                target="_blank"
                href={personalData.twitter}
                aria-label="Twitter Profile"
                className="p-3 rounded-xl bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-sky-400 hover:border-sky-400 hover:scale-110 transition-all duration-300 shadow-md"
              >
                <FaXTwitter size={24} />
              </Link>
              <Link
                target="_blank"
                href={personalData.stackOverflow}
                aria-label="StackOverflow Profile"
                className="p-3 rounded-xl bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-orange-400 hover:border-orange-400 hover:scale-110 transition-all duration-300 shadow-md"
              >
                <FaStackOverflow size={24} />
              </Link>
              <Link
                target="_blank"
                href={personalData.facebook}
                aria-label="Facebook Profile"
                className="p-3 rounded-xl bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-blue-500 hover:border-blue-400 hover:scale-110 transition-all duration-300 shadow-md"
              >
                <FaFacebook size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
