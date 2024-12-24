import Image from "next/image";

import BlurredShapeImg from "@/public/images/blurred-shape.svg";

const position = [
  {
    title: "Lead Product Designer",
    description:
      "You'll be joing the Experience Design Team as a Lead Product Designer. You'll interface daily with developers - encouraging and advancing best practices in software.",
    location: "Anywhere (EU timezone)",
    salary: "$100K - $120K",
  },
  {
    title: "Principal Software Engineer",
    description:
      "You'll be joing the Experience Design Team as a Lead Product Designer. You'll interface daily with developers - encouraging and advancing best practices in software.",
    location: "Anywhere (EU timezone)",
    salary: "$140K - $180K",
  },
  {
    title: "Marketing Operations Manager",
    description:
      "You'll be joing the Experience Design Team as a Lead Product Designer. You'll interface daily with developers - encouraging and advancing best practices in software.",
    location: "Anywhere (EU timezone)",
    salary: "$70K - $120K",
  },
];

export default function Career() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-64 -translate-x-[80%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeImg}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl">
            {/* Section header */}
            <h3 className="mb-8 font-aperture text-xl font-semibold md:text-2xl">
              Open positions
            </h3>
            {/* Job list */}
            <div className="-my-6 divide-y">
              {position.map((position, index) => (
                <div
                  key={index}
                  className="py-6 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]"
                >
                  <div className="group relative flex items-center space-x-3">
                    <div>
                      <div className="mb-2">
                        <a
                          className="flex items-center justify-between font-aperture text-lg font-semibold text-gray-200 transition before:absolute before:inset-0 hover:text-indigo-500"
                          href="#0"
                        >
                          {position.title}
                        </a>
                      </div>
                      <div className="mb-4 text-[1rem] text-indigo-200/65">
                        {position.description}
                      </div>
                      <div className="flex flex-wrap items-center text-sm text-indigo-200/65">
                        <div className="inline-flex items-center">
                          <svg
                            className="mr-2 shrink-0"
                            width={16}
                            height={15}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill-indigo-500"
                              d="M6 0a2 2 0 0 0-2 2v7H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V2a2 2 0 0 0-2-2H6Zm4 13V2H6v11h4Zm4 0h-2V9h2v4ZM4 13v-2H2v2h2Z"
                              fillRule="evenodd"
                            />
                          </svg>
                          <span>{position.location}</span>
                        </div>
                        <span className="mx-3 text-gray-700"> - </span>
                        <div className="inline-flex items-center">
                          <svg
                            className="mr-2 shrink-0"
                            width={16}
                            height={15}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill-indigo-500"
                              d="M3 2a1 1 0 1 0 0 2h8V2H3Zm0-2a3 3 0 0 0-3 3v8a4 4 0 0 0 4 4h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V2a2 2 0 0 0-2-2H3Zm0 6h11v7H4a2 2 0 0 1-2-2V5.83c.313.11.65.17 1 .17Zm9.5 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
                              fillRule="evenodd"
                            />
                          </svg>
                          <span>{position.salary}</span>
                        </div>
                      </div>
                    </div>
                    <svg
                      className="shrink-0 fill-indigo-500 opacity-0 transition group-hover:opacity-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={11}
                    >
                      <path d="M6.56 11 5.51 9.95l3.645-3.684H0V4.734h9.155L5.51 1.055 6.56 0 12 5.5 6.56 11Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
