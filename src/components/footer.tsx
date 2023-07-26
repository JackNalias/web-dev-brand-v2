import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/#contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-gray-300 border-w">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-20 pb-12 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600  hover:text-gray-900 dark:text-white"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-600 dark:text-white">
          &copy; 2023 Zespra, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
