export default function Faqs() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20 lg:border-0 lg:pt-0">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-aperture text-2xl font-semibold text-transparent md:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 lg:gap-y-12 xl:gap-x-16">
            <li>
              <h4 className="mb-2 font-aperture text-lg font-semibold text-gray-200">
                What payment options does Tetsuo accept?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Tetsuo accepts all major credit cards, including Visa,
                MasterCard, American Express, and Discover, as well as PayPal
                for added convenience.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-aperture text-lg font-semibold text-gray-200">
                Do I need to be a user to view my data?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Yes, you must be a registered user and logged into your account
                to access and view your data securely. This ensures your data
                privacy and protection.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-aperture text-lg font-semibold text-gray-200">
                What if I want to cancel?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                If you wish to cancel your account, you can do so anytime
                through the account settings page. Your cancellation will take
                effect in no more than 7 business days.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-aperture text-lg font-semibold text-gray-200">
                What happens if I hit my usage limit?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                If you reach your usage limit, your service will be temporarily
                paused until the start of the next billing cycle. You can
                upgrade to a higher plan if needed.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-aperture text-lg font-semibold text-gray-200">
                Do you offer a discount for non-profits?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Yes, we provide special discounted rates for non-profit
                organizations. Please contact our support team with your
                credentials to apply for the discount.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-aperture text-lg font-semibold text-gray-200">
                Will my data be private and safe?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Yes, your data is stored securely and is protected with advanced
                encryption methods. We follow industry-standard practices to
                ensure your privacy and data safety.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
