import Link from "next/link";

export default function Pagination() {
  return (
    <nav className="mx-auto mt-16 flex max-w-xs items-center justify-between">
      <div>
        <Link
          className="btn-sm group relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] [&[inert]]:opacity-30"
          href="#0"
        >
          <span className="mr-1 tracking-normal text-white/50 transition-transform group-hover:-translate-x-0.5">
            &lt;-
          </span>
          Back
          <span className="sr-only">to previous articles</span>
        </Link>
      </div>
      <div className="text-sm text-gray-600">
        <span className="text-gray-200">1</span> of
        <span className="text-indigo-200/65">4</span>
      </div>
      <div>
        <Link
          className="btn-sm group relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] [&[inert]]:opacity-30"
          href="#0"
        >
          Next
          <span className="sr-only">articles</span>
          <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
            -&gt;
          </span>
        </Link>
      </div>
    </nav>
  );
}
