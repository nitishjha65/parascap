import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import CollaborationHero from "../../components/CollaborationHero";
import LogoMarquee from "@/components/LogoMarquee";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col ">
      {/* Hero Section */}
      <div className="container mt-10 py-8 md:py-12 px-4 md:px-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          From Strategy To Execution -{" "}
          <span className="text-[#4CAF50] font-semibold">Meet The Team</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl">
          At Parascap Ventures, our team blends deep financial expertise with an
          entrepreneurial mindset. We're more than advisors - we're strategic
          partners who roll up our sleeves and work alongside founders.
          Together, let's build something remarkable.
        </p>
      </div>

      <div className="bg-[#E7FFC8]">
        {/* Team Section */}
        <section className="w-full py-12 md:py-16 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">
              people{" "}
              <span className="text-[#4CAF50] font-semibold">committed </span>to
              your
              <span className="text-[#4CAF50] font-semibold"> success</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://cdn.prod.website-files.com/644b5842d82a33686f01b3ba/67a9da5c4baa1e6f3fdfa6b5_devendra.png"
                      alt="Devendra Agrawal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center border-t border-gray-100">
                  <div>
                    <h3 className="font-semibold text-lg">Devendra Agrawal</h3>
                    <p className="text-gray-600 text-sm">Founder and Sponsor</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://cdn.prod.website-files.com/644b5842d82a33686f01b3ba/67a9da727745b5c1cb289748_anuradha.png"
                      alt="Anuradha Agarwal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center border-t border-gray-100">
                  <div>
                    <h3 className="font-semibold text-lg">Anuradha Agarwal</h3>
                    <p className="text-gray-600 text-sm">General Partner</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://cdn.prod.website-files.com/644b5842d82a33686f01b3ba/67a9da8038c1f8a4ac658d80_ankit.png"
                      alt="Ankit Saraf"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center border-t border-gray-100">
                  <div>
                    <h3 className="font-semibold text-lg">Ankit Saraf</h3>
                    <p className="text-gray-600 text-sm">Senior Associate</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://cdn.prod.website-files.com/644b5842d82a33686f01b3ba/67a9da8cb67bcb8d692b396a_yash.png"
                      alt="Yash Garg"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center border-t border-gray-100">
                  <div>
                    <h3 className="font-semibold text-lg">Yash Garg</h3>
                    <p className="text-gray-600 text-sm">Associate</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://cdn.prod.website-files.com/644b5842d82a33686f01b3ba/67a9da99a8551005ad8798a1_sorabh.png"
                      alt="Sorabh Tayal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center border-t border-gray-100">
                  <div>
                    <h3 className="font-semibold text-lg">Sorabh Tayal</h3>
                    <p className="text-gray-600 text-sm">Senior Fellow</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Team Member 6 - Placeholder */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center border-t border-gray-100">
                  <div>
                    <h3 className="font-semibold text-lg">Team Member</h3>
                    <p className="text-gray-600 text-sm">Position</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-parascap-green text-white rounded-t-parascaporderRadius ">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Work
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Featured success stories from our portfolio
                </p>
              </div>
            </div>
            {/* IPO */}
            <div className="group mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 border border-transparent hover:border-gray-600 rounded-lg p-6 transition duration-300 hover:bg-white/5">
              <div className="flex justify-center">
                <Image
                  src="/BANSAL-LOGO-2.png"
                  alt="Bansal Wires Logo"
                  width={350} // Adjusted size
                  height={350}
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-contain transition duration-300 group-hover:scale-105" // Contain logo, add hover
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white">
                  Featured Success
                </div>
                <h3 className="text-2xl font-bold">Bansal Wires IPO</h3>
                {/* <p className="text-gray-300">
                  Parascap Ventures played a strategic role in shaping the IPO
                  journey of Bansal Wires, offering financial structuring and
                  execution insights that helped the company unlock market
                  value.
                </p> */}

                <div className="space-y-4 text-gray-300">
                  <p>
                    Paracap Ventures played an instrumental role in the IPO
                    journey of Bansal Wires, offering end to end support across
                    financial structuring, regulatory guidance, investor
                    alignment and execution.
                  </p>
                  <p>
                    Our deep involvement helped unlock market value & position
                    the company for long term growth.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-[#f5f5f3] rounded-lg italic text-gray-600">
                  <p className="">
                    "Paracap Ventures isn't just an advisor - they were a
                    partner from day one. Their strategic insight, market
                    knowledge & hands on approach made all the difference in
                    navigating our IPO successfully."
                  </p>
                  <p className="mt-2 font-medium">
                    - Spokesperson, Bansal Wires
                  </p>
                </div>

                {/* Optional Testimonial */}
                {/* <div className="flex items-center gap-2 pt-4 border-t border-gray-600 mt-4"> ... </div> */}
              </div>
            </div>
            {/* Industries subsection */}
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-8 text-center">
                Some of the clients we are working with
              </h3>

              <LogoMarquee />
            </div>

            <div className="w-full pt-12 md:pt-16 bg-gray-50 rounded-t-parascaporderRadius mt-16">
              <CollaborationHero />

              <div className="w-full py-12 md:py-16 mt-16 rounded-t-parascaporderRadius bg-parascap-green ">
                <div className="container px-4 md:px-6 ">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    Why Partner With Us
                  </h2>
                  <p className="text-center  text-white/70  mb-12 max-w-3xl mx-auto">
                    OUR COMMITMENT TO YOUR SUCCESS IS REFLECTED IN OUR APPROACH.
                  </p>

                  {/* ////////////////////////////////////// */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* First column */}

                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Partnership Values"
                        width={400}
                        height={300}
                        className="rounded-lg mb-6"
                      />
                    </div>

                    {/* Middle column with table */}
                    <div className="w-full md:w-1/3">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r">
                                Pan India
                              </td>
                              <td className="py-4 px-8 ">Experience</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r">
                                Long-term vision
                              </td>
                              <td className="py-4 px-8">
                                Implementation Focus
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r">
                                Unwavering accountability
                              </td>
                              <td className="py-4 px-8">
                                Ownership at all levels
                              </td>
                            </tr>

                            <tr className="">
                              <td className="py-4 px-4 font-medium border-r text-parascap-green">
                                Unwavering accountability
                              </td>
                              <td className="py-4 px-4  text-parascap-green">
                                Ownership at all levels
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Third column */}
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Partnership Values"
                        width={400}
                        height={300}
                        className="rounded-lg mb-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors We Work With Section */}
        {/* <section className="w-full py-12 md:py-16 bg-[#f0fff0]">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Some of the sectors we are working with
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                "Fintech",
                "Edtech",
                "Healthcare",
                "Consumer",
                "SaaS",
                "AgriTech",
                "D2C",
              ].map((sector, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <p className="font-medium">{sector}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Why Partner With Us Section */}

        {/* Testimonial Section */}
        {/* <section className="w-full py-16 bg-[#0a2e1f] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-[#4CAF50] p-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4 opacity-75"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                <p className="text-lg italic mb-6">
                  Working with ParaiCap has been transformative for our
                  business. Their strategic guidance and deep industry knowledge
                  helped us navigate complex challenges and accelerate our
                  growth.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-white/80">CEO, TechInnovate</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  We're committed to your success at every stage of your journey
                </h2>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
