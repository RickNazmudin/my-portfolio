// @flow strict
"use client";

import { useEffect, useRef, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { FiCode, FiSmartphone, FiDatabase, FiCloud } from "react-icons/fi";

function AboutSection() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsImageVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentImageRef = imageRef.current;
    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  const coreFocusAreas = [
    {
      icon: <FiCode className="text-cyan-400" size={20} />,
      title: "Web Applications",
      desc: "React, Next.js, Vue, Node.js, Laravel, Go, Spring Boot",
    },
    {
      icon: <FiSmartphone className="text-emerald-400" size={20} />,
      title: "Mobile Development",
      desc: "Flutter, Dart, React Native, Java & Kotlin Android",
    },
    {
      icon: <FiDatabase className="text-amber-400" size={20} />,
      title: "Databases & Real-time",
      desc: "PostgreSQL, MySQL, MongoDB, Redis, WebSockets",
    },
    {
      icon: <FiCloud className="text-violet-400" size={20} />,
      title: "Cloud & DevOps",
      desc: "AWS Cloud (EC2, S3, SES), Docker, Nginx, CI/CD",
    },
  ];

  return (
    <div
      id="about"
      className="my-12 sm:my-16 lg:my-24 relative px-4 sm:px-6 lg:px-0"
    >
      {/* Decorative Section Header on Large Screens */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] border border-[#2e375e] w-fit text-white rotate-90 p-2 px-5 text-lg lg:text-xl font-bold uppercase rounded-md shadow-lg">
          ABOUT ME
        </span>
        <span className="h-28 lg:h-40 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column: Description & Specialization */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
            <p className="font-mono text-sm sm:text-base font-semibold text-[#f9d049] uppercase tracking-wider">
              Who I Am
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Passionate Software Engineer Crafting High-Impact Digital Products
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            {personalData.description}
          </p>

          {/* Key Skill Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {coreFocusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#11152c]/80 border border-[#1f2648] hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  {area.icon}
                  <h4 className="text-sm font-semibold text-white">
                    {area.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Picture Card */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            {/* Glow backdrop behind avatar */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-60 blur-xl group-hover:opacity-100 transition duration-500"></div>

            <div className="relative rounded-2xl bg-[#0d1224] p-3 border border-[#252f5e]">
              <Image
                src={personalData.profile}
                width={380}
                height={380}
                alt="Ricko Najmudin"
                ref={imageRef}
                className={`rounded-xl object-cover transition-all duration-700 w-full max-w-[320px] sm:max-w-[360px] ${
                  isImageVisible
                    ? "filter-none opacity-100"
                    : "filter brightness-75 opacity-90"
                } group-hover:scale-[1.02]`}
              />
              <div className="mt-3 text-center">
                <p className="font-bold text-base text-white">
                  Ricko Najmudin
                </p>
                <p className="font-mono text-xs text-cyan-400">
                  Full Stack &amp; Mobile Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
