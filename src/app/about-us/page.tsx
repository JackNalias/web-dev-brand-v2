import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const values = [
  {
    name: "Innovation",
    description:
      "We embrace creativity and stay at the forefront of technology to deliver cutting-edge solutions that set our clients apart in the digital landscape.",
  },
  {
    name: "Personalization",
    description:
      "Every website we create is uniquely crafted to reflect the individuality and essence of each client's brand, ensuring an unforgettable online presence.",
  },
  {
    name: "Reliability",
    description:
      "Our commitment to delivering on time and exceeding expectations ensures a smooth and hassle-free experience for our clients at every stage of the project.",
  },
  {
    name: "Collaboration",
    description:
      "We foster open communication and work hand in hand with our clients, forming strong partnerships that lead to successful and impactful web solutions.",
  },
  {
    name: "User-Centricity",
    description:
      "Putting the end-users first, we design intuitive and engaging websites that prioritize user experience, ensuring high conversion rates and customer satisfaction.",
  },
  {
    name: "Transparency",
    description:
      "Honesty, integrity, and clear communication are at the core of our values. We believe in being transparent with our clients, offering full visibility into the development process.",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Elevating Brands in the Digital Era
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:max-w-md lg:max-w-none">
                  At Pixelleum, we are passionate about elevating brands in the
                  digital era. We understand that the online landscape is
                  constantly evolving, and our mission is to help businesses
                  thrive in this dynamic environment. Through innovative web
                  development solutions, strategic digital marketing, and
                  cutting-edge technologies, we empower our clients to make a
                  lasting impact on their target audiences. Let us be your
                  digital partner, as we navigate the ever-changing digital
                  world together and position your brand for success in the
                  modern age.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={1000}
                      width={1000}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={1000}
                      width={1000}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={1000}
                      width={1000}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={1000}
                      width={1000}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={1000}
                      width={1000}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Values section */}
      <div className="mx-auto py-24 max-w-7xl px-6 sm:py-32 lg:px-8">
        <div className="mx-auto lg:mx-0 md:text-center flex flex-col md:items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 md:max-w-2xl ">
            Our values define who we are and how we approach every project. As a
            team, we stand united by a set of guiding principles that inspire us
            to deliver excellence, foster innovation, and build lasting
            relationships with our clients.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold">{value.name}</dt>
              <dd className="mt-1 text-gray-600 dark:text-gray-300">
                {value.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {/* Image section */}
      <div className="py-24 sm:py-32 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          src="/passion-led-us-here.jpg"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          height={1500}
          width={1500}
        />
      </div>
      <ContactUs />
    </main>
  );
}
