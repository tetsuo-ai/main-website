"use client";

import { useCategoryProvider } from "./category-provider";

export default function BlogFilters() {
  const { category, setCategory } = useCategoryProvider();

  return (
    <div className="flex justify-center pb-12 max-md:hidden md:pb-20">
      <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
        {/* Button #1 */}
        <button
          className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === "All" ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
          aria-pressed={category === "All"}
          onClick={() => setCategory("All")}
        >
          <svg
            className={`fill-current ${category === "All" ? "text-indigo-500" : "text-gray-600"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M7 3a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2H1Z" />
          </svg>
          <span>View All</span>
        </button>
        {/* Button #2 */}
        <button
          className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === "AI Content" ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
          aria-pressed={category === "AI Content"}
          onClick={() => setCategory("AI Content")}
        >
          <svg
            className={`fill-current ${category === "AI Content" ? "text-indigo-500" : "text-gray-600"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M1 2a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9v11a1 1 0 1 1-2 0V3H2a1 1 0 0 1-1-1Zm1.762 5.212.96.36a.429.429 0 0 1 0 .802l-.96.36-.36.96a.428.428 0 0 1-.803 0l-.36-.96-.961-.36a.429.429 0 0 1 0-.802l.96-.36.36-.96c.126-.336.678-.336.803 0l.36.96Zm12.89 3.753-1.2-.45-.45-1.201c-.157-.419-.847-.419-1.004 0l-.45 1.2-1.2.45a.536.536 0 0 0 0 1.004l1.2.45.45 1.2a.535.535 0 0 0 1.004 0l.45-1.2 1.2-.45a.536.536 0 0 0 0-1.003ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
          </svg>
          <span>AI Content</span>
        </button>
        {/* Button #3 */}
        <button
          className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === "Automation" ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
          aria-pressed={category === "Automation"}
          onClick={() => setCategory("Automation")}
        >
          <svg
            className={`fill-current ${category === "Automation" ? "text-indigo-500" : "text-gray-600"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M1 8.914S5.225 4.55 7.629 2.659c1.607-1.264 2.554-1.388 3.137-.807 1.063 1.06-.422 3.026-2.446 5.716-2.023 2.69-3.487 4.234-2.379 5.28 1.095 1.033 3.357-1.278 4.2-2.22.844-.941 2.768-3.03 3.71-2.151.836.778-.404 2.657-.842 3.497-.439.84-.978 1.707-.337 2.286.906.82 2.328-.908 2.328-.908" />
          </svg>
          <span>Automation</span>
        </button>
        {/* Button #4 */}
        <button
          className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === "Customer Service" ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
          aria-pressed={category === "Customer Service"}
          onClick={() => setCategory("Customer Service")}
        >
          <svg
            className={`fill-current ${category === "Customer Service" ? "text-indigo-500" : "text-gray-600"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 1a3.001 3.001 0 0 1-2 2.83v8.087a6.008 6.008 0 0 0 4.742-4.17l-.295.147a1 1 0 1 1-.894-1.788l2-1A1 1 0 0 1 16 8 8 8 0 1 1 0 8a1 1 0 0 1 1.447-.894l2 1a1 1 0 0 1-.894 1.788l-.295-.147A6.008 6.008 0 0 0 7 13.917V5.829A3.001 3.001 0 1 1 11 3Z" />
          </svg>
          <span>Customer Service</span>
        </button>
        {/* Button #5 */}
        <button
          className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === "Engineering" ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
          aria-pressed={category === "Engineering"}
          onClick={() => setCategory("Engineering")}
        >
          <svg
            className={`fill-current ${category === "Engineering" ? "text-indigo-500" : "text-gray-600"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M10.207.293a1 1 0 0 1 0 1.414L8.414 3.5l1.793 1.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0ZM0 4a4 4 0 0 1 4-4h.55a1 1 0 0 1 .707 1.707l-.024.025a1 1 0 0 1-.93.268H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.45a1 1 0 1 1 2 0V12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4ZM13.207.293a1 1 0 1 0-1.414 1.414L13.586 3.5l-1.793 1.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5Z" />
          </svg>
          <span>Engineering</span>
        </button>
      </div>
    </div>
  );
}
