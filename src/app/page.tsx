import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import OurProcess from "@/components/our-process";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zespra | High-Quality Bespoke Websites",
  description:
    "Welcome to Zespra! We specialize in creating bespoke, high-quality websites tailored to your unique business needs. Drive success with our expert team of web developers.",
};

const features = [
  {
    name: "Unique Design",
    description:
      "Distinct and original designs tailored to your brand or business.",
  },
  {
    name: "Personalized User Experience",
    description:
      "User-centric experiences catering to visitors' needs and preferences.",
  },
  {
    name: "Scalability and Flexibility",
    description:
      "Easily scale and adapt to future growth and changing requirements.",
  },
  {
    name: "Optimized Performance",
    description: "Fast loading and smooth navigation across devices.",
  },
  {
    name: "Brand Consistency",
    description: "maintain a consistent brand identity throughout the site.",
  },
  {
    name: "SEO Optimisation",
    description: "Optimized for search engines to attract organic traffic.",
  },
  {
    name: "Mobile Responsiveness",
    description: "User-friendly experience on smartphones and tablets.",
  },
  {
    name: "Enhanced Security",
    description: "Robust security measures to protect sensitive data.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-sky-400">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Crafted for Impact
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                Elevate your digital vision with our bespoke websites&apos;
                exceptional features.
              </p>
            </div>

            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900 dark:text-white">
                    <CheckIcon
                      className="absolute left-0 top-1 h-5 w-5 text-indigo-500 dark:text-emerald-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <OurProcess />

      <ContactUs />
    </main>
  );
}
