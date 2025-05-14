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
    <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row gap-10 items-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-600">
          WE PARTNER WITH PEOPLE, NOT JUST COMPANIES
        </h2>
        <p className="text-gray-600 mb-4">
          We work with high-growth potential companies & visionary founders who
          are transforming industries.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is simple: To walk with you, from vision to valuation,
          creating real impact along the way.
        </p>
        <Link
          href="#case-studies"
          className="inline-block text-[#007bff] font-bold group w-fit"
          aria-label="See case studies"
        >
          <div>See case studies</div>
          <div className="h-0.5 bg-gray-300 overflow-hidden">
            <div className="h-full bg-[#007bff] w-0 group-hover:w-full transition-all duration-300"></div>
          </div>
        </Link>
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
                {[10, 11, 12, 13, 14, 15].map((num) => (
                  <div
                    key={`${dupIndex}-${num}`}
                    className="marquee-image-wrap mb-4 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={`https://cdn.prod.website-files.com/644b5842d82a33773b01b392/64679bc${
                        num < 10 ? "2" : num < 13 ? "3" : "4"
                      }${
                        {
                          10: "026a96247698c390_10",
                          11: "5d7c74151c1a989c_11",
                          12: "4c502e819c56ded5_12",
                          13: "21f779ba773cd523_13",
                          14: "9c4caec8e30a5337_14",
                          15: "823f32b295ae3b80_15",
                        }[num]
                      }.png`}
                      alt={`Image ${num}`}
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
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={`${dupIndex}-${num}`}
                    className="marquee-image-wrap mb-4 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={`https://cdn.prod.website-files.com/644b5842d82a33773b01b392/64679bb${
                        num < 2 ? "d" : num < 4 ? "f" : "e"
                      }${
                        {
                          1: "588afd1097adb2c1_01",
                          2: "5a3a589472a83323_02",
                          3: "eb134ce78a3aea1f_03",
                          4: "70c2a4d0883a52fe_04",
                          5: "e1e48983ca6e7f08_05",
                          6: "e1e48983ca6e7f0e_06",
                        }[num]
                      }.png`}
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
                {[19, 20, 21, 22, 23, 24].map((num) => (
                  <div
                    key={`${dupIndex}-${num}`}
                    className="marquee-image-wrap mb-4 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={`https://cdn.prod.website-files.com/644b5842d82a33773b01b392/64679bc${
                        num < 20 ? "6" : "7"
                      }${
                        {
                          19: "51aeea62853b72e9_19",
                          20: "9a886a3057b67149_20",
                          21: "dd96a67508785cde_21",
                          22: "d4d06047123dcd0f_22",
                          23: "4c502e819c56e519_23",
                          24: "a76e02a6a9bf0dcf_24",
                        }[num]
                      }.png`}
                      alt={`Image ${num}`}
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
