"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function CollaborationHero() {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const marquee3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to calculate total height of all images in a marquee
    function getMarqueeHeight(marquee: HTMLDivElement) {
      const images = marquee.querySelectorAll(".marquee-image-wrap");
      let totalHeight = 0;
      const uniqueImages = images.length / 2; // We duplicated all images

      // Only count original images (not duplicates)
      for (let i = 0; i < uniqueImages; i++) {
        totalHeight += (images[i] as HTMLElement).offsetHeight + 15; // 15px is the margin-bottom
      }

      return totalHeight;
    }

    // Setup and start each marquee animation
    function setupMarquee() {
      // Column 1 - Normal direction
      if (marquee1Ref.current) {
        const marquee1 = marquee1Ref.current;
        const height1 = getMarqueeHeight(marquee1);

        gsap.set(marquee1, { y: 0 });
        gsap.to(marquee1, {
          y: -height1,
          duration: 25,
          ease: "none",
          repeat: -1,
        });
      }

      // Column 2 - Reversed direction (start from -height to avoid gap)
      if (marquee2Ref.current && marquee1Ref.current) {
        const marquee2 = marquee2Ref.current;
        const height1 = getMarqueeHeight(marquee1Ref.current);

        gsap.set(marquee2, { y: -height1 });
        gsap.to(marquee2, {
          y: 0,
          duration: 30, // Slightly different speed for visual interest
          ease: "none",
          repeat: -1,
        });
      }

      // Column 3 - Normal direction again
      if (marquee3Ref.current) {
        const marquee3 = marquee3Ref.current;
        const height3 = getMarqueeHeight(marquee3);

        gsap.set(marquee3, { y: 0 });
        gsap.to(marquee3, {
          y: -height3,
          duration: 20, // Different speed for variety
          ease: "none",
          repeat: -1,
        });
      }
    }

    // Wait a bit for images to load before calculating heights
    const timer = setTimeout(setupMarquee, 500);

    return () => {
      clearTimeout(timer);
      // Cleanup animations when component unmounts
      if (marquee1Ref.current) gsap.killTweensOf(marquee1Ref.current);
      if (marquee2Ref.current) gsap.killTweensOf(marquee2Ref.current);
      if (marquee3Ref.current) gsap.killTweensOf(marquee3Ref.current);
    };
  }, []);

  return (
    // <div className="w-full py-12 md:py-16 bg-gray-50 rounded-t-parascaporderRadius">
    <div className="container px-4 md:px-6 mx-auto md:flex flex-col md:flex-row gap-10 items-center">
      <div className="flex-1 flex flex-col justify-center">
        {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          WE PARTNER WITH PEOPLE, NOT JUST COMPANIES
        </h2> */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          WE PARTNER WITH PEOPLE,
          <br />
          <span className="block text-center">NOT JUST COMPANIES</span>
        </h2>

        <p className="text-gray-600 mb-4">
          We work with high potential companies and visionary founders who are
          rewriting the rules of their industries. At Parascap ventures, we just
          don’t advise from the sidelines-we immerse ourselves in your journey,
          aligning our success with yours.
        </p>
        <p className="text-gray-600 mb-4">
          We believe in investing not only capital but conviction-in your
          purpose, your ambition and your long-term potential. Whether you are
          purpose, your ambition and your long-term potential. Whether you are
          gearing up for your first round of funding or preparing for a public
          debut, we bring the strategic muscle and financial insight to turn
          vision into measurable value.
        </p>

        <p className="text-gray-600 mb-4">
          Our mission is simple, yet powerful
        </p>

        <p className="text-gray-600 mb-4">
          TO WALK WITH YOU-FROM VISION TO VALUATION, CO-CREATUNG REAL IMPACT TO
          WALK WITH YOU-FROM VISION TO VALUATION, CO-CREATUNG REAL IMPACT EVERY
          STEP OF THE WAY
        </p>

        {/* <Link
          href="#case-studies"
          className="inline-block text-[#007bff] font-bold group w-fit"
          aria-label="See case studies"
        >
          <div>See case studies</div>
          <div className="h-0.5 bg-gray-300 overflow-hidden">
            <div className="h-full bg-[#007bff] w-0 group-hover:w-full transition-all duration-300"></div>
          </div>
        </Link> */}
      </div>

      <div className="flex-1 relative h-[600px] overflow-hidden flex gap-5">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-12 z-10 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 z-10 bg-gradient-to-t from-gray-50 to-transparent"></div>

        {/* Column 1 */}
        <div className="flex-1 relative overflow-hidden">
          <div
            ref={marquee1Ref}
            className="absolute top-0 left-0 w-full flex flex-col"
          >
            {/* Column 1 Images */}
            {[...Array(2)].map((_, dupIndex) => (
              <div key={dupIndex}>
                {[4, 5, 6, 7, 8, 9, 1, 2, 3].map((num) => (
                  <div
                    key={`${dupIndex}-${num}`}
                    className="marquee-image-wrap mb-4 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={`/images (${num}).jpg`}
                      alt={`Image 0${num}`}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 (Reverse) */}
        <div className="flex-1 relative overflow-hidden">
          <div
            ref={marquee2Ref}
            className="absolute top-0 left-0 w-full flex flex-col"
          >
            {/* Column 2 Images */}
            {[...Array(2)].map((_, dupIndex) => (
              <div key={dupIndex}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div
                    key={`${dupIndex}-${num}`}
                    className="marquee-image-wrap mb-4 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={`/images (${num}).jpg`}
                      alt={`Image 0${num}`}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 relative overflow-hidden">
          <div
            ref={marquee3Ref}
            className="absolute top-0 left-0 w-full flex flex-col"
          >
            {/* Column 3 Images */}
            {[...Array(2)].map((_, dupIndex) => (
              <div key={dupIndex}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={`${dupIndex}-${num}`}
                    className="marquee-image-wrap mb-4 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={`/images (${num}).jpg`}
                      alt={`Image 0${num}`}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
