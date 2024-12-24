import PostAuthor04 from "@/public/images/post-author-04.jpg";
import PostAuthor05 from "@/public/images/post-author-05.jpg";
import PostImg10 from "@/public/images/post-thumb-10.jpg";
import PostImg11 from "@/public/images/post-thumb-11.jpg";
import PostImg12 from "@/public/images/post-thumb-12.jpg";
import Image from "next/image";
import Link from "next/link";

export default function RelatedPosts() {
  return (
    <div className="mx-auto max-w-6xl">
      <div
        className="mx-auto mt-12 max-w-3xl border-t pt-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:pt-20"
        aria-hidden="true"
      />
      <h3 className="mb-8 text-center font-aperture text-xl font-semibold text-gray-200 md:text-left">
        Read next
      </h3>
      <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        {/* Article #1 */}
        <article className="flex h-full flex-col transition-opacity">
          <header>
            <Link
              className="group relative mb-6 block overflow-hidden rounded-2xl border border-gray-800/80 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50"
              href="#0"
              tabIndex={-1}
            >
              <Image
                className="aspect-[101/64] w-full object-cover opacity-70 grayscale transition ease-out group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-[20%]"
                src={PostImg10}
                width={347}
                height={220}
                alt="Article 10"
              />
            </Link>
            <div className="mb-3">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <a
                    className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60"
                    href="#0"
                  >
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      Engineering
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="mb-2 font-aperture text-lg font-semibold">
              <Link
                className="text-gray-200 transition hover:text-white"
                href="#0"
              >
                Your first 90 days using content for customer service
              </Link>
            </h3>
          </header>
          <footer className="flex items-center gap-3">
            <Image
              className="inline-flex shrink-0 rounded-full"
              src={PostAuthor04}
              width={28}
              height={28}
              alt="Author 04"
            />
            <div className="text-sm font-medium text-gray-200">
              <span>Bethany Clark</span>
              <span className="text-gray-700"> - </span>
              <a
                className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                href="#0"
              >
                Product Manager
              </a>
            </div>
          </footer>
        </article>
        {/* Article #2 */}
        <article className="flex h-full flex-col transition-opacity">
          <header>
            <Link
              className="group relative mb-6 block overflow-hidden rounded-2xl border border-gray-800/80 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50"
              href="#0"
              tabIndex={-1}
            >
              <Image
                className="aspect-[101/64] w-full object-cover opacity-70 grayscale transition ease-out group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-[20%]"
                src={PostImg11}
                width={347}
                height={220}
                alt="Article 11"
              />
            </Link>
            <div className="mb-3">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <a
                    className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60"
                    href="#0"
                  >
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      Automation
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="mb-2 font-aperture text-lg font-semibold">
              <Link
                className="text-gray-200 transition hover:text-white"
                href="#0"
              >
                Tetsuo’s new and improved reporting features
              </Link>
            </h3>
          </header>
          <footer className="flex items-center gap-3">
            <Image
              className="inline-flex shrink-0 rounded-full"
              src={PostAuthor05}
              width={28}
              height={28}
              alt="Author 05"
            />
            <div className="text-sm font-medium text-gray-200">
              <span>Ruth O'Brien</span>
              <span className="text-gray-700"> - </span>
              <a
                className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                href="#0"
              >
                Senior Director
              </a>
            </div>
          </footer>
        </article>
        {/* Article #3 */}
        <article className="flex h-full flex-col transition-opacity">
          <header>
            <Link
              className="group relative mb-6 block overflow-hidden rounded-2xl border border-gray-800/80 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50"
              href="#0"
              tabIndex={-1}
            >
              <Image
                className="aspect-[101/64] w-full object-cover opacity-70 grayscale transition ease-out group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-[20%]"
                src={PostImg12}
                width={347}
                height={220}
                alt="Article 12"
              />
            </Link>
            <div className="mb-3">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <a
                    className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60"
                    href="#0"
                  >
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      AI Content
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="mb-2 font-aperture text-lg font-semibold">
              <Link
                className="text-gray-200 transition hover:text-white"
                href="#0"
              >
                Understanding the changing economics of content management
              </Link>
            </h3>
          </header>
          <footer className="flex items-center gap-3">
            <Image
              className="inline-flex shrink-0 rounded-full"
              src={PostAuthor05}
              width={28}
              height={28}
              alt="Author 05"
            />
            <div className="text-sm font-medium text-gray-200">
              <span>Ruth O'Brien</span>
              <span className="text-gray-700"> - </span>
              <a
                className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                href="#0"
              >
                Senior Director
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
