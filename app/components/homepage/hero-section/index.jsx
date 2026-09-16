// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill, RiApps2Line, RiCodeSSlashLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-16">
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        priority
        className="absolute -top-[98px] -z-10 opacity-60 pointer-events-none"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-10 w-full">
        {/* Left Intro Column */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b223c]/80 border border-[#2e375e] text-xs font-mono text-[#98C379] mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available for Web & Mobile Projects</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight sm:leading-snug lg:leading-[3.5rem] text-white">
            Hello, <br />
            This is{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              {personalData.name}
            </span>
            <br />
            {`I'm a `}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {personalData.designation}
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
            Specializing in engineering end-to-end <strong>Web Applications</strong>, <strong>Mobile Apps</strong>, and <strong>High-Converting Landing Pages</strong>. Proven track record delivering 50+ scalable digital systems including PadelSpace, Marketplace UMKM, POS UMKM, and Enterprise Hospital ERPs.
          </p>

          {/* Experience & Project Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 w-full max-w-lg">
            <div className="p-3 rounded-xl bg-[#11152c]/90 border border-[#1f2648]">
              <p className="text-xl sm:text-2xl font-bold text-amber-400">50+</p>
              <p className="text-xs text-gray-400 font-medium">Completed Projects</p>
            </div>
            <div className="p-3 rounded-xl bg-[#11152c]/90 border border-[#1f2648]">
              <p className="text-xl sm:text-2xl font-bold text-cyan-400">Web &amp; Mobile</p>
              <p className="text-xs text-gray-400 font-medium">Cross-Platform Apps</p>
            </div>
            <div className="p-3 rounded-xl bg-[#11152c]/90 border border-[#1f2648] col-span-2 sm:col-span-1">
              <p className="text-xl sm:text-2xl font-bold text-emerald-400">8+ Years</p>
              <p className="text-xs text-gray-400 font-medium">Coding Experience</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="my-4 flex items-center gap-4 text-gray-400">
            <Link
              href={personalData.github}
              target="_blank"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-white hover:border-violet-500 hover:scale-110 transition-all duration-300"
            >
              <BsGithub size={22} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-blue-400 hover:border-blue-500 hover:scale-110 transition-all duration-300"
            >
              <BsLinkedin size={22} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              aria-label="Facebook Profile"
              className="p-2 rounded-lg bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-blue-500 hover:border-blue-400 hover:scale-110 transition-all duration-300"
            >
              <FaFacebook size={22} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              aria-label="LeetCode Profile"
              className="p-2 rounded-lg bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-amber-400 hover:border-amber-400 hover:scale-110 transition-all duration-300"
            >
              <SiLeetcode size={22} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              aria-label="Twitter Profile"
              className="p-2 rounded-lg bg-[#11152c] border border-[#1f2648] text-gray-300 hover:text-sky-400 hover:border-sky-400 hover:scale-110 transition-all duration-300"
            >
              <FaTwitterSquare size={22} />
            </Link>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 sm:px-8 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105 hover:shadow-indigo-600/50"
            >
              <span>Contact Me</span>
              <RiContactsFill size={18} />
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#11152c] border border-[#2a3360] px-6 sm:px-8 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-200 transition-all duration-300 hover:border-violet-500 hover:text-white hover:bg-[#1a2040]"
            >
              <span>View Projects</span>
              <RiApps2Line size={18} />
            </Link>
          </div>
        </div>

        {/* Right Code Card Column */}
        <div className="order-1 lg:order-2 w-full from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-br to-[#0a0d37] shadow-[0_0_50px_rgba(30,58,138,0.2)]">
          <div className="flex flex-row">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          {/* Window Header */}
          <div className="px-4 lg:px-6 py-3.5 flex items-center justify-between border-b border-[#1b2c68a0] bg-[#0a0d37]/50">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-amber-400"></div>
              <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-gray-400">
              <RiCodeSSlashLine className="text-violet-400" />
              <span>developer.ts</span>
            </div>
          </div>

          {/* Code Content */}
          <div className="overflow-x-auto px-4 lg:px-6 py-4 lg:py-6 text-xs sm:text-sm font-mono leading-relaxed">
            <pre className="text-gray-300">
              <div>
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-cyan-300">softwareEngineer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">name:</span>
                <span className="text-amber-300">&quot;Ricko Najmudin&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">focus:</span>
                <span className="text-amber-300">&quot;Web Apps &amp; Mobile Development&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">technologies:</span>
                <span className="text-gray-400">{"["}</span>
              </div>
              <div className="ml-8 text-amber-300">
                &quot;Flutter&quot;, &quot;React&quot;, &quot;Next.js&quot;, &quot;Vue&quot;, &quot;Node.js&quot;,
              </div>
              <div className="ml-8 text-amber-300">
                &quot;Go&quot;, &quot;Laravel&quot;, &quot;Spring Boot&quot;, &quot;MySQL&quot;, &quot;AWS&quot;
              </div>
              <div>
                <span className="ml-4 text-gray-400">{"],"}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">featuredProjects:</span>
                <span className="text-gray-400">{"["}</span>
              </div>
              <div className="ml-8 text-cyan-300">
                &quot;PadelSpace&quot;, &quot;Marketplace UMKM&quot;,
              </div>
              <div className="ml-8 text-cyan-300">
                &quot;POS UMKM&quot;, &quot;Hospital Management (QHopes)&quot;
              </div>
              <div>
                <span className="ml-4 text-gray-400">{"],"}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">readyForNewChallenges:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-emerald-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div className="ml-8 text-orange-400">
                return <span className="text-cyan-400">this</span>.readyForNewChallenges &amp;&amp; <span className="text-cyan-400">this</span>.technologies.length &gt; 5;
              </div>
              <div>
                <span className="ml-4 text-gray-400">{"}"}</span>
              </div>
              <div>
                <span className="text-gray-400">{"};"}</span>
              </div>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
