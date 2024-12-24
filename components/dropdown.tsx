"use client";

import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

type DropdownProps = {
  children: React.ReactNode;
  title: string;
};

export default function Dropdown({ children, title }: DropdownProps) {
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleFocusOut = (e: React.FocusEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  return (
    <li
      className="group relative flex items-center gap-0.5 px-3 py-1"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <span className="flex cursor-pointer items-center text-gray-200 transition group-hover:text-indigo-500">
        {title}
      </span>
      <button
        className="shrink-0 p-1"
        aria-expanded={dropdownOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Show submenu for "{title}"</span>
        <svg
          className="fill-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
        >
          <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
        </svg>
      </button>
      <span className="absolute right-0 top-full origin-top-left">
        <Transition
          ref={dropdownRef}
          show={dropdownOpen}
          as="ul"
          className="relative mt-5 w-36 rounded-xl bg-gray-900/90 p-2 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] transform transition ease-out data-[enter]:data-[closed]:-translate-y-2 data-[closed]:opacity-0"
          onBlur={handleFocusOut}
        >
          {children}
        </Transition>
      </span>
    </li>
  );
}
