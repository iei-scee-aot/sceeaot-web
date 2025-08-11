import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] border-gray-500 border-l-[0.5px] border-r-[0.5px] bg-black text-white">
        <div className="py-16 px-6 md:px-12 border-t border-gray-800">
          {/* Main Hero Section */}
          <div className="max-w-6xl mx-auto">
            {/* Contact section */}
            <div className="mb-16">
              {/* Contact CTA */}
              <div className="text-center mb-12">
                <p className="text-gray-400 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                  Ready to start your tech journey? Get in touch and let's build
                  something amazing together.
                </p>
                <Link
                  href="mailto:sceeaot@gmail.com"
                  className="inline-flex items-center gap-4 text-2xl md:text-3xl font-semibold hover:text-primary transition-colors duration-300 group"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight
                    size={32}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Centered Logo */}
              <div className="flex justify-center">
                <div className="relative h-40 w-60 md:h-48 md:w-72 lg:h-56 lg:w-[80%] max-w-[800px]">
                  <Image
                    src="/scee_logo.png"
                    alt="SCEE Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            {/* Navigation and Social */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-gray-800">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                  Navigate
                </h3>
                <nav className="space-y-3">
                  {["About", "Programs", "Events", "Mentors", "Gallery"].map(
                    (item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="block text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </nav>
              </div>

              {/* Events */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                  Events
                </h3>
                <nav className="space-y-3">
                  {[
                    "Tech Talk Series",
                    "Innovation Summit",
                    "Coding Bootcamp",
                    "AI Workshop",
                    "Career Fair",
                  ].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social - Expanded */}
              <div className="md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-medium text-white mb-6 uppercase tracking-wider">
                  Connect With Us
                </h3>
                <div className="space-y-6">
                  <Link
                    href="https://linktr.ee/sceeaot"
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors duration-200 text-lg"
                  >
                    <Image
                      src="/icons/linktree.jpg"
                      alt="Linktree"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain rounded"
                    />
                    <span>/sceeaot</span>
                  </Link>

                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm">
                      Follow us on social media
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href="#"
                        className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-primary transition-all duration-200"
                      >
                        <Github size={24} />
                      </Link>
                      <Link
                        href="#"
                        className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-primary transition-all duration-200"
                      >
                        <Linkedin size={24} />
                      </Link>
                      <Link
                        href="#"
                        className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-primary transition-all duration-200"
                      >
                        <Twitter size={24} />
                      </Link>
                      <Link
                        href="#"
                        className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-primary transition-all duration-200"
                      >
                        <Instagram size={24} />
                      </Link>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-gray-400 text-sm mb-2">Contact Info</p>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>sceeaot@gmail.com</p>
                      <p>Hooghly, West Bengal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400">
              <p>
                &copy; 2025 IEI's Students Chapter of Electrical Engineering
                from Academy fo Technology. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-screen border-gray-500 border-b-[0.5px]"></div>
    </>
  );
};

export default Footer;
