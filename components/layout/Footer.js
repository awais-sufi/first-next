import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/docs", label: "Documentation" },
    ],
    Company: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    Resources: [
      { href: "/docs", label: "Getting Started" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/api", label: "API Reference" },
    ],
    Legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  };

  return (
    <footer className="bg-[#F7FAFC] py-12 px-4">
      <div className="w-[60%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-1 mb-4">
              <Image src="/main-logo.svg" alt="logo" className="h-6 w-6" width={6} height={6}/>
              <span className="font-semibold text-base text-[#2d3748]">
                Starter
              </span>
            </Link>
            <p className="text-[#718096] text-sm mb-4">
              The easiest way to build a React landing page in seconds. Perfect
              for developers who want to ship faster.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                aria-label="GitHub"
                className="text-[#718096] hover:text-[#03a9f4]"
              >
                <Image src="/Icons/Githug.svg" alt="" height={20} width={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#718096] hover:text-[#03a9f4]"
              >
                <Image src="/Icons/Twitter.svg" alt="" height={20} width={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#718096] hover:text-[#03a9f4]"
              >
                <Image src="/Icons/Linkedin.svg" alt="" height={20} width={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-[#718096] hover:text-[#03a9f4]"
              >
                <Image src="/Icons/Youtube.svg" alt="" height={20} width={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-[#2d3748] mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#718096] hover:text-[#03a9f4] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-[#718096]">
          © {currentYear} Nextjs Starter. Powered with ♥ by{" "}
          <a href="#" className="text-[#03a9f4] hover:underline">
            CreativeDesignsGuru
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
