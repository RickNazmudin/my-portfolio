// @flow strict
"use client";

import { useEffect, useRef, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsImageVisible(entry.isIntersecting),
      { threshold: 0.5 } // Gambar terlihat 50% di layar
    );

    const currentImageRef = imageRef.current; // Store the current ref value in a variable

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  return (
    <div
      id="about"
      className="my-8 sm:my-10 lg:my-16 relative px-4 sm:px-6 lg:px-0"
    >
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-lg lg:text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-24 lg:h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-3 sm:mb-5 text-[#f9d049] text-lg sm:text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={350}
            height={200}
            alt="Ricko Najmudin"
            ref={imageRef}
            className={`rounded-lg transition-all duration-1000 grayscale 
                        ${
                          isImageVisible
                            ? "filter-none"
                            : "filter brightness-50"
                        } 
                        hover:scale-110 cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
