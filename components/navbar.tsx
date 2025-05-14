import Link from "next/link";

export default function Navbar() {
  return (
    // <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
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

          <nav className="hidden md:flex items-center space-x-8 mr-3 text-parascap-green">
            <Link
              href="/"
              className=" font-medium hover:text-parascap-lightGreen transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" font-medium hover:text-parascap-lightGreen transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              className=" font-medium hover:text-parascap-lightGreen transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className=" font-medium hover:text-parascap-lightGreen transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
