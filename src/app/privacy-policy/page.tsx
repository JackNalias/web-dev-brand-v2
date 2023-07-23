import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Your Data and Security Matter to Us",
  description:
    "Read our comprehensive privacy policy to understand how we handle and protect your data. Trust our commitment to safeguarding your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
          <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-sky-400">
            Last Updated: 2023-07-21
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Privacy Policy
          </h1>
          <p className="mt-6 text-xl leading-8 ">
            At Pixelleum, we are committed to protecting your privacy and
            safeguarding your personal information. This Privacy Policy explains
            how we collect, use, disclose, and manage your personal data when
            you interact with our website or use our services. By visiting our
            website or providing us with your information, you consent to the
            practices described in this policy.
          </p>
          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Information We Collect:
            </h2>
            <ul
              role="list"
              className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-300"
            >
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Personal Information:
                  </strong>{" "}
                  We may collect personal information that you provide to us
                  voluntarily, such as your name, email address, phone number,
                  and any other information you choose to share with us.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Usage Data
                  </strong>{" "}
                  Our website may automatically collect certain information
                  about your device, browser, and how you interact with our
                  website. This may include your IP address, browser type,
                  referring/exit pages, and the pages you visit on our site.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Cookies and Similar Technologies:
                  </strong>{" "}
                  We use cookies and similar technologies to enhance your
                  experience on our website. Cookies are small data files stored
                  on your device that help us improve our website and better
                  understand your preferences.
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              How We Use Your Information:
            </h2>
            <ul
              role="list"
              className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-300"
            >
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    To Provide Services:
                  </strong>{" "}
                  We may use your personal information to deliver the services
                  you have requested, such as website development, design, or
                  any other related services.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Communication:
                  </strong>{" "}
                  We may use your contact information to respond to your
                  inquiries, provide customer support, and keep you updated
                  about our services, promotions, or important announcements.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Improving Our Website:
                  </strong>{" "}
                  We analyze usage data and website interactions to improve our
                  website&apos;s functionality, content, and user experience.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Legal Compliance:
                  </strong>{" "}
                  We may process your information to comply with applicable
                  laws, regulations, or legal obligations.
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Information Sharing:
            </h2>
            <ul
              role="list"
              className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-300"
            >
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Third-Party Service Providers:
                  </strong>{" "}
                  We may share your personal information with third-party
                  service providers who assist us in providing our services.
                  These providers have limited access to your information and
                  are obligated to protect it in compliance with this policy.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Business Transactions:
                  </strong>{" "}
                  In the event of a merger, acquisition, or sale of assets, your
                  personal information may be transferred to the new entity as
                  part of the business transaction.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Legal Requirements:
                  </strong>{" "}
                  We may disclose your information to comply with legal
                  obligations, respond to governmental requests, or protect our
                  rights, privacy, safety, or property.
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              Data Security:
            </h2>
            <p className="mt-6">
              We take appropriate security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no data transmission over the internet or
              electronic storage method is entirely secure. While we strive to
              protect your information, we cannot guarantee its absolute
              security.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Your Choices:
            </h2>
            <ul
              role="list"
              className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-300"
            >
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-sky-400"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Cookies:
                  </strong>{" "}
                  You can manage your cookie preferences through your browser
                  settings.
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Children&apos;s Privacy:
            </h2>
            <p className="mt-6">
              Our website and services are not intended for children under the
              age of 13. We do not knowingly collect or store personal
              information from children without parental consent. If you believe
              we have inadvertently collected personal information from a child,
              please contact us, and we will take steps to delete it.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Changes to this Privacy Policy:
            </h2>
            <p className="mt-6">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for legal reasons. The most current version
              will be available on our website.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact Us:
            </h2>
            <p className="mt-6">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal information, please contact us at{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                support@pixelleum.com
              </strong>
              .
            </p>
            <p className="mt-8">
              By using our website or services, you signify your agreement to
              this Privacy Policy. Please review this policy regularly for any
              updates or changes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
