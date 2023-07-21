import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import {
  BuildingOffice2Icon,
  CheckIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

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

const steps = [
  {
    name: "Initial Consultation",
    description:
      "We invite you to share the details of your project during a complimentary 30-minute consultation call.",
  },
  {
    name: "Proposal: Costs and Launch Date",
    description:
      "Following the consultation, we will diligently assess your project's requirements. Within 5 working days, you will receive a comprehensive fixed-price offer and a proposed launch date.",
  },
  {
    name: "Development Commences",
    description:
      "Upon your approval, our team initiates the project's development phase. Throughout this stage, we ensure regular updates on the progress for transparency and effective communication.",
  },
  {
    name: "Feedback & Refinement",
    description:
      " Upon the project's completion, we will deliver the finished product to you. We highly value your input and will promptly accommodate any adjustments or refinements based on your feedback.",
  },
  {
    name: "Project Launch",
    description:
      "Your satisfaction is of utmost importance to us. Once the final product meets your expectations, we will initiate the project launch.",
  },
  {
    name: "Ongoing Support & Success",
    description:
      "Our commitment to your project's success doesn't end with the launch. We provide ongoing support for further development, addressing any potential bugs, and ensuring smooth maintenance to guarantee a thriving digital presence.",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

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

      <div className="py-24 sm:py-32">
        <div
          className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:items-center"
          id="our-process"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-sky-400">
            From Vision to Reality
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Web Development Process
          </p>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
            Elevate your digital vision with our bespoke websites&apos;
            exceptional features.
          </p>

          <div aria-label="Progress" className="mt-12 max-w-2xl">
            <ol role="list" className="overflow-hidden">
              {steps.map((step, stepIdx) => (
                <li
                  key={step.name}
                  className={classNames(
                    stepIdx !== steps.length - 1 ? "pb-10" : "",
                    "relative"
                  )}
                >
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="group relative flex items-start">
                      <span
                        className="flex h-9 items-center"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 font-semibold text-gray-900">
                          {stepIdx + 1}
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {step.name}
                        </span>
                        <span className=" text-gray-600 dark:text-gray-300 text-base">
                          {step.description}
                        </span>
                      </span>
                    </div>
                  </>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <ContactUs />
    </main>
  );
}
