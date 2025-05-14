"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function LogoMarquee() {
  const marqueeListRef = useRef<HTMLUListElement>(null);
  const originalWidthRef = useRef(0);

  useEffect(() => {
    if (!marqueeListRef.current) return;

    const marqueeList = marqueeListRef.current;
    const originalItems = Array.from(marqueeList.children) as HTMLLIElement[];

    // Duplicate items for seamless looping
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLLIElement;
      marqueeList.appendChild(clone);
    });

    // Calculate the total width of the original set of items
    let originalWidth = 0;
    gsap.set(marqueeList, { xPercent: 0 }); // Ensure it's at start for measurement

    originalItems.forEach((item) => {
      originalWidth += item.offsetWidth;
    });

    const gap = Number.parseFloat(getComputedStyle(marqueeList).gap) || 0;
    originalWidth += (originalItems.length - 1) * gap; // Account for gaps between original items
    originalWidthRef.current = originalWidth;

    const duration = 20; // Adjust speed: higher number = slower

    gsap.to(marqueeList, {
      x: -originalWidth, // Animate by the width of one full set of original items + gaps
      ease: "none",
      duration: duration,
      repeat: -1,
    });

    // Optional: Pause on hover
    // marqueeList.addEventListener('mouseenter', () => gsap.to(marqueeList, { timeScale: 0.2 }));
    // marqueeList.addEventListener('mouseleave', () => gsap.to(marqueeList, { timeScale: 1 }));

    return () => {
      // Cleanup animation when component unmounts
      gsap.killTweensOf(marqueeList);
    };
  }, []);

  return (
    <section className="w-full py-2 bg-white overflow-hidden">
      {/* <div className="container px-4 md:px-6 mb-8">
        <h2 className="text-2xl font-bold text-center">Our Partners</h2>
      </div> */}
      <div className="logo-marquee-section w-full max-w-full mx-auto opacity-100 overflow-hidden">
        <ul
          ref={marqueeListRef}
          className="flex h-20 items-center gap-10 relative"
        >
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/qquvoeDgfkbXfbC118ikLZkFg24.png"
                alt="Ninety OneSq Ft"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/6hzgclnp1qWie9lJMNcXtQfas.png"
                alt="Curefoods"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/S52QaQlma7vQ3Y3b5R83bfVOI.png"
                alt="Digitized Energy"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/4ubHylwaWtA3uwjxUZuQlFbVfQ.png"
                alt="DiLabs"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/BfZZyXyecSVqsF8JirmfgJxQ6c.png"
                alt="DTDC"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/zxr69Qstc6l5z3DPKmxpZIEj990.png"
                alt="Ellenbarrie"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/lYyYaG4sDBokKPQoeyJuvIp73g.png"
                alt="Emvee"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>

          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/8PHYVJJekeDWscYQ1tGTRG0WUJ0.png"
                alt="Fabhotels"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/5UEuMJ6ixOFC60silGdWi0kjtjs.png"
                alt="Happy Forging"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
          <li className="flex-shrink-0 flex items-center justify-center h-full">
            <div className="h-full flex items-center">
              <Image
                src="https://framerusercontent.com/images/BZQD0uDH7hoTvbE39h7jqTxtRBs.png"
                alt="iValue"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
