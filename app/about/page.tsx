"use client";

import Link from "next/link";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import CollaborationHero from "../../components/CollaborationHero";
import LogoMarquee from "@/components/LogoMarquee";
import { useEffect, useState } from "react";

export default function AboutPage() {
  // const [teamMembers, setTeamMembers] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  const teamMembers = [
    {
      id: 1,
      name: "Manohar",
      position: "Investment Banker",
      ki: "60.000.000",
      maxKi: "90 Septillion",
      race: "Saiyan",
      gender: "Male",
      description:
        "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
      image: "https://dragonball-api.com/characters/goku_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null,
    },

    {
      id: 2,
      name: "Tamohini",
      position: "IB Analyst",

      ki: "530.000",
      maxKi: "52.71 Septillion",
      race: "Frieza Race",
      gender: "Male",
      description:
        "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
      image:
        "https://dragonball-api.com/characters/Lunch_traje_de_sirvienta_en_el_manga.webp",
      affiliation: "Army of Frieza",
      deletedAt: null,
    },

    {
      id: 3,
      name: "Ashutosh",
      position: "CA, Investment Banker",
      ki: "2.000.000",
      maxKi: "500.000.000",
      race: "Namekian",
      gender: "Male",
      description:
        'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciéndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z. A través del tiempo, también comenzó a tomarle cariño a su discípulo Son Gohan, a quien veía como una especie de "vástago" y formando un lazo de amistad con este.',
      image: "https://dragonball-api.com/characters/picolo_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null,
    },
    {
      id: 4,
      name: "Mehak",
      position: "IB Advsior",
      ki: "54.000.000",
      maxKi: "19.84 Septillion",
      race: "Saiyan",
      gender: "Male",
      description:
        "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
      image: "https://dragonball-api.com/characters/Androide_18_Artwork.webp",
      affiliation: "Z Fighter",
      deletedAt: null,
    },
    {
      id: 5,
      name: "Paridhi",
      position: "IB Advsior",
      ki: "0",
      maxKi: "0",
      race: "Human",
      gender: "Female",
      description:
        "Bulma es la protagonista femenina de la serie manga Dragon Ball y sus adaptaciones al anime Dragon Ball, Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es hija del Dr. Brief y su esposa Panchy, hermana menor de Tights y una gran amiga de Son Goku con quien inicia la búsqueda de las Esferas del Dragón. En Dragon Ball Z tuvo a Trunks, primogénito de quien sería su esposo Vegeta, a su hija Bra[3] y su hijo adulto del tiempo alterno Trunks del Futuro Alternativo.",
      image: "https://dragonball-api.com/characters/bulma.webp",
      affiliation: "Z Fighter",
      deletedAt: null,
    },

    {
      id: 6,
      name: "Ayush Anand",
      position: "Equity Research Analyst",

      ki: "530.000",
      maxKi: "52.71 Septillion",
      race: "Frieza Race",
      gender: "Male",
      description:
        "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
      image: "https://dragonball-api.com/characters/17_Artwork.webp",
      affiliation: "Army of Frieza",
      deletedAt: null,
    },
  ];

  // useEffect(() => {
  //   async function fetchTeam() {
  //     try {
  //       const res = await fetch(
  //         "https://dragonball-api.com/api/characters?limit=5"
  //       );
  //       const data = await res.json();
  //       setTeamMembers(data?.items);

  //       console.log("Fetched team members:", data?.items);
  //     } catch (error) {
  //       console.error("Error fetching team members:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchTeam();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col ">
      {/* Hero Section */}
      <div className=" mt-5 py-8 md:py-12 px-4 md:px-10 flex flex-col items-center justify-center text-center space-y-4">
        {/* <h1 className="text-3xl md:text-4xl font-bold mb-5">
          From Strategy To Execution -{" "}
          <span className="text-[#4CAF50] font-semibold">Meet The Team</span>
        </h1> */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          From Strategy To Execution
        </h1>

        <h2>
          <span className="text-[#4CAF50] text-3xl  font-extrabold">
            Meet The Team
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl">
          {`At Parascap Ventures, our team blends deep financial expertise with an
          entrepreneurial mindset. We’re more than advisors-we are strategic
          partners who roll up our sleeves and work alongside founders.
          Together, let’s build something remarkable. With decades of combined
          experience across investment banking, private equity and capital
          markets our leadership brings insights, agility and result-driven
          thinking to every engagement. At our core, we value integrity,
          ownership and long term partnerships that create real impact for
          visionary businesses.`}
        </p>
      </div>

      <div className="bg-[#E7FFC8]">
        {/* Team Section */}
        <section className="w-full py-12 md:py-16 ">
          <div className=" px-4 md:px-6">
            {/* <h2 className="text-2xl font-bold mb-8 text-center">
              people{" "}
              <span className="text-[#4CAF50] font-semibold">committed </span>to
              your
              <span className="text-[#4CAF50] font-semibold"> success</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div> */}

            <div className="bg-[#E7FFC8]">
              {/* Team Section */}
              <section className="w-full py-12 md:py-16">
                <div className=" px-4 md:px-6">
                  <h2 className=" text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center">
                    People{" "}
                    <span className="text-[#4CAF50] font-semibold">
                      committed{" "}
                    </span>
                    to your
                    <span className="text-[#4CAF50] font-semibold">
                      {" "}
                      success
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative aspect-[4/3]  bg-green-600">
                          <Image
                            src={member?.image}
                            alt={member?.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="p-5 flex justify-between items-center border-t border-gray-100">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {member.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {member.position}
                            </p>
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
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-parascap-green text-white rounded-t-parascaporderRadius ">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Work
                </h2> */}

                <h2 className="text-2xl md:text-4xl font-extrabold md:tracking-widest text-white">
                  {`O U R `} &nbsp;&nbsp;{` W O R K`}
                </h2>
                {/* <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 */}
                <p className="text-white font-extrabold text-xl md:text-3xl/relaxed lg:text-3xl/relaxed">
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
              <h3 className="text-xl md:text-3xl font-bold mb-8 text-center">
                Some of the clients we are working with
              </h3>

              <LogoMarquee />
            </div>

            <div className="w-full pt-12 md:pt-16 bg-gray-50 rounded-t-parascaporderRadius mt-16">
              <CollaborationHero />

              <div className="w-full py-12 md:py-16 mt-16 rounded-t-parascaporderRadius bg-parascap-green  ">
                <div className=" px-4 md:px-6">
                  <h2 className="text-2xl md:text-4xl md:font-extrabold mb-8 text-center ">
                    Why Partner With Us
                  </h2>
                  <p className="text-center text-xl md:text-2xl text-white  mb-12 max-w-3xl mx-auto">
                    OUR COMMITMENT TO YOUR SUCCESS IS REFLECTED IN OUR APPROACH.
                  </p>

                  {/* ////////////////////////////////////// */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* First column */}

                    {/* <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Partnership Values"
                        width={400}
                        height={300}
                        className="rounded-lg mb-6"
                      />
                    </div> */}

                    {/* Middle column with table */}
                    <div className="md:w-2/3 mx-auto">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse mx-auto text-center">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r text-center">
                                Pan-India{" "}
                              </td>
                              <td className="py-4 px-12">
                                Founder-first approach
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r">
                                Experience{" "}
                              </td>
                              <td className="py-4  text-center">
                                Execution excellence{" "}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r">
                                Long-Term vision
                              </td>
                              <td className="py-4 px-12">
                                data-driven decisions{" "}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r">
                                Unwavering accountability
                              </td>
                              <td className="py-4 px-12">
                                Ownership at all levels
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r">
                                Unwavering accountability
                              </td>
                              <td className="py-4 px-12">
                                Network that delivers
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-4 px-4 font-medium border-r">
                                Implementation Focus{" "}
                              </td>
                              <td className="py-4 px-12">Hands-on support </td>
                            </tr>
                            <tr className="">
                              <td className="py-4 px-4 font-medium border-r text-parascap-green">
                                Unwavering accountability
                              </td>
                              <td className="py-4 px-4 text-parascap-green">
                                Network that delivers
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Third column */}
                    {/* <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Partnership Values"
                        width={400}
                        height={300}
                        className="rounded-lg mb-6"
                      />
                    </div> */}
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
