import Link from "next/link";

export default function ComingSoon() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-aperture text-3xl font-semibold text-transparent md:text-4xl">
              Coming Soon
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Our registration system is currently under development. Please
              join our Discord community to stay updated on the latest news and
              announcements.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="https://discord.com/invite/tetsuo-ai"
              className="btn bg-gradient-to-t from-cyan-400 to-cyan-500 bg-[length:100%_100%] bg-[bottom] px-8 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
            >
              Join Discord
            </Link>
          </div>

          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Want to know when we launch?{" "}
            <Link
              href="https://x.com/7etsuo"
              className="font-medium text-indigo-500"
            >
              Follow us on X (Twitter)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
