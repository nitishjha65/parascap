"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ServiceCard from "@/components/service-card";
import { Check } from "lucide-react";

import Navbar from "@/components/navbar";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const imgLeftRef = useRef<HTMLDivElement>(null);
  const imgRightRef = useRef<HTMLDivElement>(null);
  const imgCenterRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const sectionTwo = sectionTwoRef.current;

  //   if (sectionTwo) {
  //     ScrollTrigger.create({
  //       trigger: sectionTwo,
  //       start: "top 80%",
  //       end: "bottom top",
  //       onEnter: (self) => {
  //         if (self.direction === 1) {
  //           gsap.to(window, {
  //             duration: 1.4,
  //             scrollTo: { y: window.innerHeight * 1.45 },
  //             ease: "power2.out",
  //           });
  //         }
  //       },
  //     });

  //     // Center image scroll animation
  //     gsap.to(imgCenterRef.current, {
  //       scrollTrigger: {
  //         trigger: ".two",
  //         start: "0% 90%",
  //         end: "50% 30%",
  //         scrub: true,
  //         onUpdate: (self) => {
  //           const progress = self.progress;
  //           if (progress > 0.2 && progress < 0.9) {
  //             gsap.to(titleRef.current, {
  //               opacity: 1,
  //               y: 0,
  //               duration: 0.6,
  //               ease: "power2.out",
  //             });
  //           } else {
  //             gsap.to(titleRef.current, {
  //               opacity: 0,
  //               y: 20,
  //               duration: 0.6,
  //               ease: "power2.out",
  //             });
  //           }
  //         },
  //       },
  //       top: "150%",
  //       left: "50%",
  //     });

  //     // Left image scroll animation
  //     gsap.to(imgLeftRef.current, {
  //       scrollTrigger: {
  //         trigger: imgCenterRef.current,
  //         start: "top 40%",
  //         end: "top 3%",
  //         scrub: 1.1,
  //       },
  //       xPercent: -250,
  //       opacity: 0,
  //       ease: "power1.inOut",
  //     });

  //     // Right image scroll animation
  //     gsap.to(imgRightRef.current, {
  //       scrollTrigger: {
  //         trigger: imgCenterRef.current,
  //         start: "top 40%",
  //         end: "top 3%",
  //         scrub: 1.1,
  //       },
  //       xPercent: 250,
  //       opacity: 0,
  //       ease: "power1.inOut",
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   const sectionTwo = sectionTwoRef.current;
  //   const titleEl = titleRef.current;

  //   if (!sectionTwo || !titleEl) return;

  //   ScrollTrigger.create({
  //     trigger: sectionTwo,
  //     start: "top 80%",
  //     end: "bottom top",
  //     onEnter: (self) => {
  //       if (self.direction === 1) {
  //         gsap.to(window, {
  //           duration: 1.4,
  //           scrollTo: { y: window.innerHeight * 1.45 },
  //           ease: "power2.out",
  //         });
  //       }
  //     },
  //   });

  //   // Track central image scroll progress
  //   gsap.to(imgCenterRef.current, {
  //     scrollTrigger: {
  //       trigger: ".two",
  //       start: "0% 90%",
  //       end: "50% 30%",
  //       scrub: true,
  //       onUpdate: (self) => {
  //         const progress = self.progress;

  //         if (progress > 0.9) {
  //           gsap.to(titleEl, {
  //             opacity: 1,
  //             y: 0,
  //             duration: 1,
  //             ease: "power3.out",
  //           });
  //         } else {
  //           gsap.to(titleEl, {
  //             opacity: 0,
  //             y: 10,
  //             duration: 1,
  //             ease: "power3.out",
  //           });
  //         }
  //       },
  //     },
  //     top: "150%",
  //     left: "50%",
  //   });

  //   gsap.to(imgLeftRef.current, {
  //     scrollTrigger: {
  //       trigger: imgCenterRef.current,
  //       start: "top 40%",
  //       end: "top 3%",
  //       scrub: 1.1,
  //     },
  //     xPercent: -250,
  //     opacity: 0,
  //     ease: "power1.inOut",
  //   });

  //   gsap.to(imgRightRef.current, {
  //     scrollTrigger: {
  //       trigger: imgCenterRef.current,
  //       start: "top 40%",
  //       end: "top 3%",
  //       scrub: 1.1,
  //     },
  //     xPercent: 250,
  //     opacity: 0,
  //     ease: "power1.inOut",
  //   });
  // }, []);

  useEffect(() => {
    const sectionTwo = sectionTwoRef.current;
    const titleEl = titleRef.current;

    // gsap.from(".hero-text", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   stagger: 0.2,
    //   ease: "power3.out",
    //   delay: 0.3,
    // });

    // gsap.from(".service-card", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 0.8,
    //   stagger: 0.15,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: ".services-section",
    //     start: "top 80%",
    //   },
    // });

    if (!sectionTwo || !titleEl) return;
    const sectionEnd = sectionTwo.offsetTop + sectionTwo.offsetHeight;

    ScrollTrigger.create({
      trigger: sectionTwo,
      start: "top 80%",
      end: "bottom top",
      onEnter: (self) => {
        if (self.direction === 1) {
          gsap.to(window, {
            duration: 1.4,
            // scrollTo: { y: window.innerHeight * 1.45 },
            scrollTo: {
              y: sectionEnd - window.innerHeight + 20, // Keep section fully in view
              autoKill: false,
            },
            ease: "power2.out",
          });
        }
      },
    });

    // Center image animation
    gsap.to(imgCenterRef.current, {
      scrollTrigger: {
        trigger: ".two",
        start: "0% 90%",
        end: "50% 30%",
        scrub: true,
      },
      top: "150%",
      left: "50%",
    });

    // Left image animation
    gsap.to(imgLeftRef.current, {
      scrollTrigger: {
        trigger: imgCenterRef.current,
        start: "top 40%",
        end: "top 3%",
        scrub: 1.1,
      },
      xPercent: -250,
      opacity: 0,
      ease: "power1.inOut",
    });

    // Right image animation
    gsap.to(imgRightRef.current, {
      scrollTrigger: {
        trigger: imgCenterRef.current,
        start: "top 40%",
        end: "top 3%",
        scrub: 1.1,
      },
      xPercent: 250,
      opacity: 0,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      titleEl,
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: imgCenterRef.current,
          start: "top 15%",
          end: "top 3%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <main
      ref={mainRef}
      className="overflow-x-hidden relative text-parascap-green"
    >
      {/* Hero Section */}
      <div className="one relative flex items-center justify-center w-full h-screen overflow-visible hero-text">
        <div className="container mx-auto px-4 text-center  z-10 mt-[-150px]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Vision to Valuation: Your Growth Partners
          </h1>
          <div className="bg-parascap-green/10 backdrop-blur-sm py-3 px-6 rounded-lg inline-block mb-6 hero-text">
            <h2 className="text-xl md:text-2xl font-medium">
              Navigating Capital with Confidence
            </h2>
          </div>
          <p className="max-w-3xl mx-auto text-lg mb-8 text-gray-700">
            At Parascap Ventures we empower growth potential companies to scale
            into market leaders. Backed by sharp financial acumen and bold
            strategic thinking, we craft tailored solutions in IPO
            advisory,private equity,strategic financial advisory and investor
            relations, to unlock value and drive meaningful outcomes.
          </p>
          <div className="flex flex-col gap-4 justify-center items-center mb-12">
            <Link
              href="#next-move"
              className="w-fit bg-transparent border-2 border-parascap-green  font-bold px-4 py-2 rounded-lg hover:bg-parascap-green/10 transition-all"
            >
              FROM BOARDROOM TO BELLRING, YOUR NEXT MOVE STARTS NOW
            </Link>
            <Link
              href="#consultation"
              className="w-fit bg-parascap-green text-white font-bold px-4 py-2 rounded-lg hover:bg-parascap-green/90 transition-all"
            >
              BOOK YOUR CONSULTATION
            </Link>
          </div>
        </div>

        {/* Wrapped Images */}
        <div
          ref={imgLeftRef}
          className="absolute top-[65%] left-[5vw] w-[20%] max-w-[300px] z-40 "
        >
          <Image
            src="https://qonto.com/blog/images/asset/26136/image/6ec44f51e9d280e5e6966b55d8ac008c.png"
            alt="Left Image"
            width={300}
            height={300}
            className="object-contain rounded-lg shadow-lg"
          />
        </div>

        <div
          ref={imgCenterRef}
          className="absolute top-[80%] left-1/2 w-[40%] max-w-[300px] z-40 -translate-x-1/2"
        >
          <Image
            src="https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-illustration-generative-ai_188544-19759.jpg"
            alt="Center Image - Glowing Heart"
            width={300}
            height={300}
            className="object-contain rounded-lg shadow-lg"
          />
        </div>

        <div
          ref={imgRightRef}
          className="absolute top-[65%] right-[5vw] w-[30%] max-w-[400px] z-40"
        >
          <Image
            src="https://qonto.com/blog/images/asset/12437/image/a62d180182ac76020aa4ec98573b042a.png"
            alt="Right Image"
            width={400}
            height={400}
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section Two */}
      <div
        ref={sectionTwoRef}
        className="two relative z-30 flex w-full h-screen bg-white"
      >
        <div className="w-full flex flex-row h-full">
          {/* Animated Floating Title */}
          <div className="absolute top-40 w-full flex justify-center pointer-events-none">
            <div
              ref={titleRef}
              className="text-3xl  text-black font-bold  opacity-0 translate-y-4 transition-all"
            >
              GROWTH BEGINS WITH CLARITY
            </div>
          </div>

          <div className="left-content w-1/3 flex flex-col justify-center px-8 mt-20">
            <h2 className="text-3xl font-bold  mb-6">
              GET THE PERFECT VALUATION IN JUST 10 MINUTES OR LESS!
            </h2>
            <p className="text-gray-700 mb-6">
              Discover your company's true value...
            </p>
            <Link
              href="#valuation"
              className="bg-parascap-green text-white font-bold py-3 px-6 rounded-lg hover:bg-parascap-green/90 transition-all inline-block w-fit"
            >
              Get Free Valuation
            </Link>
          </div>
          <div className="w-1/3 relative mt-10 flex items-center justify-center ">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md max-w-md  h-80 w-full text-center">
              <p className="text-gray-700 mb-6">
                Scan the QR code to instantly access...
              </p>
            </div>
          </div>
          <div className="right-content w-1/3 flex items-center justify-center mt-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md max-w-md">
              <h3 className="text-2xl font-bold  mb-4">
                Is Your Business Ready?
              </h3>
              <p className="text-gray-700 mb-6 text-center">
                Scan the QR code to instantly access...
              </p>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-sm text-gray-500">QR Code</span>
                </div>
                <p className="text-sm text-gray-500">Scan to access...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full pt-12 pb-6 md:pt-24 md:pb-18 bg-[#0a2e1f] text-white rounded-t-parascaporderRadius ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">
              OUR SERVICES
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              COMPREHENSIVE CAPITAL ADVISORY SOLUTIONS
            </p>
            <p className="max-w-[700px] text-white/70">
              We offer a wide range of advisory services to clients in some of
              the most active industry sectors & global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="IPO Advisory"
              description="Expert guidance for companies preparing for public offerings"
              icon="trending-up"
            />
            <ServiceCard
              title="Private Equity"
              description="Strategic investment solutions for growth and expansion"
              icon="briefcase"
            />
            <ServiceCard
              title="Strategic Financial Advisory"
              description="Comprehensive financial planning and strategic guidance"
              icon="bar-chart-2"
            />
            <ServiceCard
              title="Investor Relations"
              description="Building and maintaining strong relationships with investors"
              icon="users"
            />
          </div>
        </div>

        <div className="md:px-6 bg-white my-10 md:my-20 text-gray-800 py-12 md:py-24 rounded-t-parascaporderRadius">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-parascap-green">
              The Parascap Edge
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              STRATEGIC - SECTOR AGNOSTIC - EXECUTION DRIVEN
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left"></th>
                  <th className="py-4 px-6 text-center">IPO Advisory</th>
                  <th className="py-4 px-6 text-center">Private Equity</th>
                  <th className="py-4 px-6 text-center">
                    Strategic Financial Advisory
                  </th>
                  <th className="py-4 px-6 text-center">Investor Relations</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    Deep sector & regulatory expertise
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">-</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    End to end handholding
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    Positioning business for IPO/funding
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    Access to a curated investor network
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="mx-auto h-5 w-5 text-parascap-green-light" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
