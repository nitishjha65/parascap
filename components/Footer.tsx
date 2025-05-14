// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";

const footerLinks = [
  { href: "/about", label: "About Us" },
  // { href: "/services", label: "Our Services" },
  // { href: "/work", label: "Our Work" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-white text-gray-800 px-12 md:px-20 rounded-t-parascaporderRadius ">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-parascap-green text-white flex items-center justify-center rounded-md mr-2">
                <span className="font-bold">PC</span>
              </div>
              <span className="font-bold text-xl text-parascap-green">
                ParasCap
              </span>
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © {year} Parascap Ventures. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Vision to Valuation - Your Growth Partners
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="text-parascap-green hover:text-parascap-green/70 transition-colors"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="text-parascap-green hover:text-parascap-green/70 transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-parascap-green hover:text-parascap-green/70 transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="text-parascap-green hover:text-parascap-green/70 transition-colors"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
