import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Ngonzi Tours",
  description: "Read the terms of service for Ngonzi Tours.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">1. Acceptance of Terms</h2>
        <p className="mb-4 text-lg leading-relaxed">
          By accessing or using the services provided by Ngonzi Tours ("we," "us," or "our") through our website{" "}
          <a href="https://www.ngonzitours.com" className="text-primary hover:underline">
            www.ngonzitours.com
          </a>{" "}
          (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the terms
          and conditions of this agreement, then you may not access the website or use any services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">2. Services Offered</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Ngonzi Tours provides various travel and tour services, including but not limited to wildlife safaris,
          mountain climbing expeditions, beach holidays, cultural tours, and luxury safaris in Tanzania and Kenya. All
          services are subject to availability and confirmation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">3. Booking and Payments</h2>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">3.1. Booking Confirmation</h3>
        <p className="mb-4 text-lg leading-relaxed">
          All bookings are subject to availability and are not confirmed until you receive a written confirmation from
          Ngonzi Tours and the required deposit has been paid.
        </p>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">3.2. Payment Terms</h3>
        <p className="mb-4 text-lg leading-relaxed">
          A non-refundable deposit (amount specified at the time of booking) is required to confirm your tour. The
          remaining balance must be paid by the due date specified in your booking confirmation. Failure to pay the
          balance by the due date may result in the cancellation of your booking.
        </p>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">3.3. Pricing</h3>
        <p className="mb-4 text-lg leading-relaxed">
          Prices are quoted in USD unless otherwise specified and are subject to change without prior notice due to
          fluctuations in exchange rates, park fees, government taxes, or other operational costs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">4. Cancellations and Refunds</h2>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">4.1. Cancellation by Client</h3>
        <p className="mb-4 text-lg leading-relaxed">
          Cancellations must be made in writing and will be effective upon receipt by Ngonzi Tours. Cancellation charges
          will apply as follows:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2 text-lg leading-relaxed">
          <li>60 days or more before departure: Loss of deposit.</li>
          <li>30-59 days before departure: 50% of the total tour price.</li>
          <li>Less than 30 days before departure: 100% of the total tour price.</li>
        </ul>
        <h3 className="mb-2 text-xl font-medium md:text-2xl">4.2. Cancellation by Ngonzi Tours</h3>
        <p className="mb-4 text-lg leading-relaxed">
          We reserve the right to cancel any tour due to unforeseen circumstances (e.g., natural disasters, political
          instability, insufficient bookings). In such cases, we will offer an alternative tour or a full refund of all
          payments made.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">5. Travel Insurance</h2>
        <p className="mb-4 text-lg leading-relaxed">
          It is highly recommended that all clients obtain comprehensive travel insurance covering cancellation, medical
          expenses, personal accident, loss of luggage, and other unforeseen circumstances. Ngonzi Tours is not
          responsible for any losses incurred due to lack of adequate insurance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">6. Client Responsibility</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Clients are responsible for ensuring they have valid passports, visas, and any necessary health certificates
          or vaccinations. Clients must also comply with local laws and regulations during their tour.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">7. Limitation of Liability</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Ngonzi Tours acts as an agent for various service providers (e.g., hotels, airlines, transport companies). We
          are not liable for any loss, damage, injury, delay, or inconvenience caused by these third-party providers.
          Our liability for any claim arising from our services is limited to the amount paid by the client for the
          tour.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">8. Governing Law</h2>
        <p className="mb-4 text-lg leading-relaxed">
          These Terms of Service shall be governed by and construed in accordance with the laws of Tanzania, without
          regard to its conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">9. Contact Us</h2>
        <p className="mb-4 text-lg leading-relaxed">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="text-lg font-medium">
          Email:{" "}
          <a href="mailto:info@ngonzitours.com" className="text-primary hover:underline">
            info@ngonzitours.com
          </a>
        </p>
      </section>
    </div>
  )
}
