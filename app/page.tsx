"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ServiceCard from "@/components/service-card";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const mainRef = useRef(null);
  const imgLeftRef = useRef(null);
  const imgRightRef = useRef(null);
  const imgCenterRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile with a proper setup
  useEffect(() => {
    const checkIsMobile = () => {
      const mobileCheck = window.innerWidth < 768;
      setIsMobile(mobileCheck);
      console.log("Mobile detection:", mobileCheck);
    };

    // Set initial value
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Set up animations after checking device type and after components are mounted
  useEffect(() => {
    const sectionTwo: any = sectionTwoRef.current;
    const titleEl = titleRef.current;
    const leftImg = imgLeftRef.current;
    const rightImg = imgRightRef.current;
    const centerImg = imgCenterRef.current;

    console.log("Animation setup - isMobile:", isMobile);

    // Hero section animations - run on all devices
    gsap.from(".hero-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.3,
    });

    // Only run desktop animations if NOT on mobile
    if (
      !isMobile &&
      sectionTwo &&
      titleEl &&
      leftImg &&
      rightImg &&
      centerImg
    ) {
      console.log("Running desktop animations");

      // Service card animations
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        },
      });

      // Section two snap scrolling
      const sectionEnd = sectionTwo.offsetTop + sectionTwo.offsetHeight;

      ScrollTrigger.create({
        trigger: sectionTwo,
        start: "top 80%",
        end: "bottom top",
        onEnter: (self) => {
          if (self.direction === 1) {
            gsap.to(window, {
              duration: 1.4,
              scrollTo: {
                y: sectionEnd - window.innerHeight + 20,
                autoKill: false,
              },
              ease: "power2.out",
            });
          }
        },
      });

      // Center image animation
      gsap.to(centerImg, {
        scrollTrigger: {
          trigger: ".two",
          start: "0% 90%",
          end: "45% 28%",
          scrub: true,
        },
        top: "150%",
        left: "50%",
      });

      // Left image animation
      gsap.to(leftImg, {
        scrollTrigger: {
          trigger: centerImg,
          start: "top 40%",
          end: "top 3%",
          scrub: 1.1,
        },
        xPercent: -250,
        opacity: 0,
        ease: "power1.inOut",
      });

      // Right image animation
      gsap.to(rightImg, {
        scrollTrigger: {
          trigger: centerImg,
          start: "top 40%",
          end: "top 3%",
          scrub: 1.1,
        },
        xPercent: 250,
        opacity: 0,
        ease: "power1.inOut",
      });

      // Title animation
      gsap.fromTo(
        titleEl,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: centerImg,
            start: "top 15%",
            end: "top 3%",
            scrub: true,
          },
        }
      );
    }

    // Clean up all ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]); // Re-run when isMobile changes
  return (
    <main
      ref={mainRef}
      className="overflow-x-hidden relative text-parascap-green"
    >
      {/* Hero Section */}
      <div className="one relative min-h-screen w-full overflow-hidden flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center z-10 relative mt-[-120px]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Vision to Valuation: Your Growth Partners
          </h1>
          <div className="bg-parascap-green/10 backdrop-blur-sm py-3 px-6 rounded-lg inline-block mb-6">
            <h2 className="text-xl md:text-2xl font-medium">
              Navigating Capital with Confidence
            </h2>
          </div>
          <p className="max-w-3xl mx-auto text-lg mb-8 text-gray-700">
            At Parascap Ventures we empower growth potential companies to scale
            into market leaders. Backed by sharp financial acumen and bold
            strategic thinking, we craft tailored solutions in IPO advisory,
            private equity, strategic financial advisory and investor relations,
            to unlock value and drive meaningful outcomes.
          </p>
          <div className="flex flex-col gap-4 justify-center items-center mb-12">
            <Link
              href="#"
              className="w-fit bg-transparent border-2 border-parascap-green font-bold px-4 py-2 rounded-lg hover:bg-parascap-green/10 transition-all text-sm md:text-base text-center"
            >
              FROM BOARDROOM TO BELLRING, YOUR NEXT MOVE STARTS NOW
            </Link>
            <Link
              href="/contact"
              className="w-fit bg-parascap-green text-white font-bold px-4 py-2 rounded-lg hover:bg-parascap-green/90 transition-all"
            >
              BOOK YOUR CONSULTATION
            </Link>
          </div>
        </div>

        {/* Responsive Images - Hidden on small screens, visible and positioned on larger screens */}
        <div
          className="hidden md:block absolute top-[65%] left-[5vw] w-[20%] max-w-[300px] z-40"
          ref={imgLeftRef}
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
          className="hidden md:block absolute top-[80%] left-1/2 w-[40%] max-w-[300px] z-40 -translate-x-1/2"
          ref={imgCenterRef}
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
          className="hidden md:block absolute top-[65%] right-[5vw] w-[30%] max-w-[400px] z-40"
          ref={imgRightRef}
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
        className="two relative z-30 w-full h-screen bg-white py-12"
      >
        <div className="container mx-auto px-4 h-full">
          {/* Animated Floating Title */}

          <div className="relative top-40 w-full  md:justify-center pointer-events-none hidden md:flex">
            <div
              ref={titleRef}
              className="text-4xl  text-black font-bold  opacity-0 translate-y-4 transition-all"
            >
              GROWTH BEGINS WITH CLARITY
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:pt-48">
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                GET THE PERFECT VALUATION IN JUST 10 MINUTES OR LESS!
              </h2>
              <p className="text-gray-700 mb-6 text-center md:text-left">
                Discover your company's true value...
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="#valuation"
                  className="bg-parascap-green text-white font-bold py-3 px-6 rounded-lg hover:bg-parascap-green/90 transition-all inline-block w-fit"
                >
                  Get Free Valuation
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex items-center justify-center mb-8 md:mb-0">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md w-full max-w-md h-auto md:h-80 text-center">
                <p className="text-gray-700 mb-6">
                  Scan the QR code to instantly access...
                </p>

                <Image
                  src="https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-illustration-generative-ai_188544-19759.jpg"
                  alt="Center Image - Glowing Heart"
                  width={300}
                  height={300}
                  className="object-contain rounded-lg shadow-lg md:hidden"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3  items-center justify-center hidden md:flex">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md w-full max-w-md">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                  Is Your Business Ready?
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Scan the QR code to instantly access...
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
                    <span className="text-sm text-gray-500">QR Code</span>
                  </div>
                  <p className="text-sm text-gray-500">Scan to access...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full pt-12 pb-6 md:pt-24 md:pb-18 bg-[#0a2e1f] text-white rounded-t-parascaporderRadius mx-auto">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            {/* <h2 className="text-3xl font-bold tracking-tighter"> */}
            <h2 className="text-2xl md:text-4xl font-extrabold md:tracking-widest text-white">
              {`O U R `} &nbsp;&nbsp;&nbsp;{`  S E R V I C E S`}
            </h2>
            {/* <p className=" text-white/70 md:text-4xl/relaxed lg:text-4xl/relaxed xl:text-xl/relaxed">
             */}
            <p className="text-white font-extrabold text-xl md:text-3xl/relaxed lg:text-3xl/relaxed">
              COMPREHENSIVE CAPITAL ADVISORY SOLUTIONS
            </p>
            {/* <p className="max-w-[700px] text-white/70"> */}
            <p className="max-w-[700px] text-white/90 text-base md:text-lg">
              We offer a wide range of advisory services to clients in some of
              the most active industry sectors & global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="IPO Advisory"
              icon="trending-up"
              description={
                <>
                  <p>
                    From private to public – seamlessly. We guide high growth
                    companies through the complexities of going public. From
                    regulatory readiness and financial restructuring to
                    strategic positioning and underwriter engagement, Parascap
                    Ventures ensures a smooth IPO journey tailored to your
                    long-term vision.
                  </p>
                  <ul className="list-none pl-0 mt-4 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                        ✅
                      </span>
                      <span className="text-left">
                        End to end IPO execution
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                        ✅
                      </span>

                      <span className="text-left">
                        Regulatory and SEBI compliance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                        ✅
                      </span>

                      <span className="text-left">
                        Valuation and marketing positioning strategies
                      </span>
                    </li>
                  </ul>
                </>
              }
            />

            <ServiceCard
              title="Private Equity"
              icon="briefcase"
              description={
                <>
                  <p>
                    Capital meets Strategy. At Parascap Ventures we connect
                    businesses with the right investors who align with their
                    growth ambitions. Our in-depth evaluation, deal structuring
                    and capital raising strategies unlock value and scalability
                    for emerging and mid-market enterprises.
                  </p>

                  <ul className="list-none pl-0 mt-4 space-y-1">
                    <li className="flex items-start">
                      <>
                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                          ✅
                        </span>
                        <span className="text-left">
                          Growth capital and expansion funding
                        </span>
                      </>
                    </li>
                    <li className="flex items-start">
                      <>
                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                          ✅
                        </span>
                        <span className="text-left">
                          Deal sourcing and investor matchmaking
                        </span>
                      </>
                    </li>
                    <li className="flex items-start">
                      <>
                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                          ✅
                        </span>
                        <span className="text-left">
                          Due diligence and valuation support
                        </span>
                      </>
                    </li>
                  </ul>
                </>
              }
            />

            <ServiceCard
              title="Strategic Financial Advisory"
              icon="bar-chart-2"
              description={
                <>
                  <p>
                    Your growth. Our Blueprint. We offer high-impact insights to
                    help businesses navigate transactions, scale sustainably and
                    stay competitive. To turn around strategies, we provide
                    data-driven, actionable solutions.
                  </p>
                  <ul className="list-none pl-0 mt-4 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                        ✅
                      </span>
                      <span className="text-left">Business Restructuring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                        ✅
                      </span>
                      <span className="text-left">
                        {" "}
                        Market entry and expansion strategies
                      </span>
                    </li>
                  </ul>
                </>
              }
            />

            <ServiceCard
              title="Investor Relations"
              description={
                <>
                  <p>
                    Building Trust Through Transparency. Strong investor
                    relationships are built on trust, communication and
                    consistency. We help companies craft compelling narratives,
                    maintain regulatory transparency, and foster long-term
                    investor confidence.
                  </p>
                  <ul className="list-none pl-0 mt-4 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                        ✅
                      </span>
                      <span className="text-left">
                        Investor communication strategy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                        ✅
                      </span>
                      <span className="text-left">
                        Quarterly and annual reporting
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                        ✅
                      </span>
                      <span className="text-left">
                        Stakeholder engagement programs
                      </span>
                    </li>
                  </ul>
                </>
              }
              icon="users"
            />
          </div>
        </div>

        <div className=" md:px-6 bg-white my-10 md:my-20 text-gray-800 py-12 md:py-24 rounded-t-parascaporderRadius">
          <div className="flex flex-col items-center space-y-4 text-center mb-12 ">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-parascap-green md:mb-3">
              The Parascap Edge
            </h2>
            <p className="max-w-[700px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed border border-parascap-green px-4 md:px-6 py-2 rounded-lg">
              <span>STRATEGIC - SECTOR</span>

              <span className="ml-5">AGNOSTIC - EXECUTION DRIVEN</span>
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse md:w-10/12 mx-auto">
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
