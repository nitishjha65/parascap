import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}

      <main className="flex-1">
        {/* Work Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-parascap-green text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Work
                </h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Featured success stories and case studies from our portfolio
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Success Story */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                Featured Success
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Bansal Wires IPO
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
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
                <p className="text-gray-500 md:text-xl">
                  Parascap Ventures played a strategic role in shaping the IPO
                  journey of Bansal Wire, offering financial structuring and
                  execution insights that helped the company unlock market
                  value.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Comprehensive pre-IPO preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Strategic financial structuring</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Investor relations management</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Successful market debut</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-4 mt-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Testimonial"
                    width={60}
                    height={60}
                    className="rounded-full grayscale"
                  />
                  <div>
                    <p className="font-medium">CEO, Bansal Wires</p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                      <p className="text-sm text-gray-500">
                        “Parascap Ventures was instrumental in our successful
                        IPO journey. Their strategic guidance and deep expertise
                        made all the difference.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Case Studies */}
        {/* <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  More Success Stories
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our portfolio of successful client engagements
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Case study ${i}`}
                      width={300}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-105 grayscale"
                    />
                  </div>
                  <div className="p-4">
                    <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      {i === 1
                        ? "Private Equity"
                        : i === 2
                        ? "M&A"
                        : "Strategic Advisory"}
                    </div>
                    <h3 className="mt-2 text-xl font-bold">
                      Success Story {i}
                    </h3>
                    <p className="mt-2 text-gray-500 line-clamp-2">
                      How we helped our client achieve their financial and
                      strategic objectives through tailored solutions.
                    </p>
                    <Button variant="link" className="mt-4 p-0">
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Industries Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-parascap-darkGray text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Industries We Serve
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our expertise spans across multiple industries
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border border-gray-700 rounded-lg p-6 text-center">
                <div className="rounded-full bg-gray-800 p-3">
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
                    className="h-6 w-6"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Healthcare</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-700 rounded-lg p-6 text-center">
                <div className="rounded-full bg-gray-800 p-3">
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
                    className="h-6 w-6"
                  >
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
                    <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
                    <line x1="12" y1="22" x2="12" y2="13" />
                    <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">E-commerce</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-700 rounded-lg p-6 text-center">
                <div className="rounded-full bg-gray-800 p-3">
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
                    className="h-6 w-6"
                  >
                    <path d="M2 22h20" />
                    <path d="M3 10h18" />
                    <path d="M5 4h14" />
                    <path d="M4 22V4" />
                    <path d="M20 22V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Steel Industry</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-700 rounded-lg p-6 text-center">
                <div className="rounded-full bg-gray-800 p-3">
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
                    className="h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Technology</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Differentiators
                </h2>
                <p className="text-gray-500 md:text-xl">
                  What sets Parascap Ventures apart from other advisory firms
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Deep industry expertise across multiple sectors</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      Implementation-focused approach that delivers results
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      Long-term strategic vision that creates sustainable value
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Pan-India presence with global expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-black"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Ownership-driven delivery model</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Parascap Differentiators"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to get started?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Let's discuss how our services can help your business reach
                  its full potential.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button variant="outline" className="border-black">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
