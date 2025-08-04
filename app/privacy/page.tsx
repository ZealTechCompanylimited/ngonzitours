import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Ngonzi Tours",
  description: "Read the privacy policy for Ngonzi Tours.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">1. Introduction</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Welcome to Ngonzi Tours. We are committed to protecting your privacy and handling your data in an open and
          transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website{" "}
          <a href="https://www.ngonzitours.com" className="text-primary hover:underline">
            www.ngonzitours.com
          </a>
          , including any other media form, media channel, mobile website, or mobile application related or connected
          thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the
          terms of this privacy policy, please do not access the Site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">2. Information We Collect</h2>
        <p className="mb-4 text-lg leading-relaxed">
          We may collect information about you in a variety of ways. The information we may collect on the Site
          includes:
        </p>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">Personal Data</h3>
        <p className="mb-4 text-lg leading-relaxed">
          Personally identifiable information, such as your name, shipping address, email address, and telephone number,
          and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to
          us when you register with the Site or when you choose to participate in various activities related to the
          Site, such as online chat and message boards.
        </p>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">Derivative Data</h3>
        <p className="mb-4 text-lg leading-relaxed">
          Information our servers automatically collect when you access the Site, such as your IP address, your browser
          type, your operating system, your access times, and the pages you have viewed directly before and after
          accessing the Site.
        </p>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">Financial Data</h3>
        <p className="mb-4 text-lg leading-relaxed">
          Financial information, such as data related to your payment method (e.g., valid credit card number, card
          brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information
          about our services from the Site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">3. How We Use Your Information</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized
          experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2 text-lg leading-relaxed">
          <li>Create and manage your account.</li>
          <li>
            Process your transactions and send you related information, including purchase confirmations and invoices.
          </li>
          <li>Email you regarding your account or order.</li>
          <li>Enable user-to-user communications.</li>
          <li>Generate a personal profile about you to make your future visits to the Site more personalized.</li>
          <li>Increase the efficiency and operation of the Site.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Notify you of updates to the Site.</li>
          <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
          <li>Perform other business activities as needed.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">4. Disclosure of Your Information</h2>
        <p className="mb-4 text-lg leading-relaxed">
          We may share information we have collected about you in certain situations. Your information may be disclosed
          as follows:
        </p>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">By Law or to Protect Rights</h3>
        <p className="mb-4 text-lg leading-relaxed">
          If we believe the release of information about you is necessary to respond to legal process, to investigate or
          remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may
          share your information as permitted or required by any applicable law, rule, or regulation.
        </p>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">Third-Party Service Providers</h3>
        <p className="mb-4 text-lg leading-relaxed">
          We may share your information with third parties that perform services for us or on our behalf, including
          payment processing, data analysis, email delivery, hosting services, customer service, and marketing
          assistance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">5. Security of Your Information</h2>
        <p className="mb-4 text-lg leading-relaxed">
          We use administrative, technical, and physical security measures to help protect your personal information.
          While we have taken reasonable steps to secure the personal information you provide to us, please be aware
          that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
          can be guaranteed against any interception or other type of misuse.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">6. Policy for Children</h2>
        <p className="mb-4 text-lg leading-relaxed">
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware of
          any data we have collected from children under age 13, please contact us using the contact information
          provided below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">7. Contact Us</h2>
        <p className="mb-4 text-lg leading-relaxed">
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p className="text-lg font-medium">
          Email:{" "}
          <a href="mailto:info@ngonzitours.com" className="text-primary hover:underline">
            bookings@ngonzitours.com
          </a>
        </p>
      </section>
    </div>
  )
}
