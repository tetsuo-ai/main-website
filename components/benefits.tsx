import Image from "next/image";

import BlurredShape02Img from "@/public/images/blurred-shape-02.svg";
import LargeTestimonialImg02 from "@/public/images/large-testimonial-02.jpg";
import WorldUserImg01 from "@/public/images/world-user-01.jpg";
import WorldUserImg02 from "@/public/images/world-user-02.jpg";
import WorldUserImg03 from "@/public/images/world-user-03.jpg";
import WorldUserImg04 from "@/public/images/world-user-04.jpg";
import WorldUserImg05 from "@/public/images/world-user-05.jpg";
import WorldUserImg06 from "@/public/images/world-user-06.jpg";
import WorldUserImg07 from "@/public/images/world-user-07.jpg";
import WorldUserImg08 from "@/public/images/world-user-08.jpg";
import WorldMapImg from "@/public/images/worldmap.png";

export default function Benefits() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-aperture text-3xl font-semibold text-transparent md:text-4xl">
              Seeking ambitious problem solvers
            </h2>
            <p className="text-lg text-indigo-200/65">
              At Tetsuo, it's our mission to improve the quality of every thing.
              Helping our customers create incredible products and services is
              the end goal—but everything starts with our team.
            </p>
          </div>
          {/* Check list */}
          <div className="flex justify-center pb-16">
            <ul className="inline-flex flex-col flex-wrap justify-center gap-x-10 gap-y-4 text-[1rem] text-indigo-200/65 sm:flex sm:flex-row sm:items-center">
              <li className="flex items-center">
                <svg
                  className="mr-3 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <circle className="fill-indigo-500" cx={10} cy={10} r={10} />
                  <path
                    className="fill-indigo-200"
                    d="m14.707 7.707-6.485 6.485-2.929-2.93L6.707 9.85l1.515 1.515 5.071-5.071 1.414 1.414Z"
                  />
                </svg>
                <span>Work Life Balance</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <circle className="fill-indigo-500" cx={10} cy={10} r={10} />
                  <path
                    className="fill-indigo-200"
                    d="m14.707 7.707-6.485 6.485-2.929-2.93L6.707 9.85l1.515 1.515 5.071-5.071 1.414 1.414Z"
                  />
                </svg>
                <span>Competitive Salary And Equity</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <circle className="fill-indigo-500" cx={10} cy={10} r={10} />
                  <path
                    className="fill-indigo-200"
                    d="m14.707 7.707-6.485 6.485-2.929-2.93L6.707 9.85l1.515 1.515 5.071-5.071 1.414 1.414Z"
                  />
                </svg>
                <span>5 Weeks Paid Vacation</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <circle className="fill-indigo-500" cx={10} cy={10} r={10} />
                  <path
                    className="fill-indigo-200"
                    d="m14.707 7.707-6.485 6.485-2.929-2.93L6.707 9.85l1.515 1.515 5.071-5.071 1.414 1.414Z"
                  />
                </svg>
                <span>Generous Gear Credit</span>
              </li>
            </ul>
          </div>
          {/* World map */}
          <div className="mx-auto max-w-2xl">
            <div className="pt-12">
              <div className="relative">
                {/* Illustration */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/3"
                  aria-hidden="true"
                >
                  <Image
                    src={BlurredShape02Img}
                    width={760}
                    height={668}
                    alt="Section illustration"
                  />
                </div>
                {/* Map */}
                <Image
                  src={WorldMapImg}
                  width={672}
                  height={330}
                  alt="World map"
                />
                {/* People pics */}
                <Image
                  className="absolute rounded-full max-sm:!scale-75"
                  style={{ top: "22%", left: "52%" }}
                  src={WorldUserImg01}
                  width={32}
                  height={32}
                  alt="User 01"
                  data-aos="fade-up"
                />
                <Image
                  className="absolute rounded-full max-sm:!scale-75"
                  style={{ top: "50%", left: "58%" }}
                  src={WorldUserImg02}
                  width={48}
                  height={48}
                  alt="User 02"
                  data-aos="fade-up"
                  data-aos-delay={400}
                />
                <Image
                  className="absolute rounded-full max-sm:!scale-75"
                  style={{ top: "8.5%", left: "70.5%" }}
                  src={WorldUserImg03}
                  width={56}
                  height={56}
                  alt="User 02"
                  data-aos="fade-up"
                  data-aos-delay={100}
                />
                <Image
                  className="absolute rounded-full max-sm:!scale-75"
                  style={{ top: "34%", left: "76.5%" }}
                  src={WorldUserImg04}
                  width={72}
                  height={72}
                  alt="User 04"
                  data-aos="fade-up"
                  data-aos-delay={700}
                />
                <Image
                  className="absolute rounded-full max-sm:!scale-75"
                  style={{ top: "29.5%", left: "8.5%" }}
                  src={WorldUserImg05}
                  width={48}
                  height={48}
                  alt="User 05"
                  data-aos="fade-up"
                  data-aos-delay={500}
                />
                <Image
                  className="absolute rounded-full max-sm:!scale-75"
                  style={{ top: "56%", left: "19%" }}
                  src={WorldUserImg06}
                  width={56}
                  height={56}
                  alt="User 06"
                  data-aos="fade-up"
                  data-aos-delay={200}
                />
                <Image
                  className="absolute rounded-full max-sm:!scale-75"
                  style={{ top: "20%", left: "24.5%" }}
                  src={WorldUserImg07}
                  width={64}
                  height={64}
                  alt="User 07"
                  data-aos="fade-up"
                  data-aos-delay={600}
                />
                <Image
                  className="absolute rounded-full max-sm:!scale-75"
                  style={{ top: "39%", left: "43%" }}
                  src={WorldUserImg08}
                  width={40}
                  height={40}
                  alt="User 08"
                  data-aos="fade-up"
                  data-aos-delay={300}
                />
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="mx-auto max-w-3xl">
            <div className="pt-12 md:pt-16">
              <div className="text-center">
                <Image
                  className="mb-3 inline-flex rounded-full"
                  src={LargeTestimonialImg02}
                  width={40}
                  height={40}
                  alt="Large testimonial"
                />
                <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-3 font-aperture text-xl font-semibold text-gray-200 text-transparent">
                  "I am grateful to Tetsuo for encouraging me to expand my
                  horizons and strive for greater achievements, both in my
                  career and in my education."
                </p>
                <div className="text-sm font-medium text-gray-200">
                  <span>Mary Pullgat</span>
                  <span className="text-gray-700"> - </span>
                  <a
                    className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                    href="#0"
                  >
                    Software Engineer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
