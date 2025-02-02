import { Link } from "next-view-transitions";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React, { ComponentPropsWithoutRef } from "react";

import { bundledThemes, bundledLanguages, createHighlighter } from "shiki";

const highlighter = await createHighlighter({
  themes: Object.keys(bundledThemes),
  langs: Object.keys(bundledLanguages),
});

interface TableData {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
}

function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 w-full overflow-y-auto">
      <table className="w-full border-collapse bg-black/20 rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  );
}

function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-red-500/10 border-b border-red-500/20">
      {children}
    </thead>
  );
}

function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="border-b border-gray-800 hover:bg-black/40 transition-colors">
      {children}
    </tr>
  );
}

function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="p-4 text-gray-200">{children}</td>;
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className="p-4 text-left font-semibold text-red-500">{children}</th>
  );
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  let href = props.href || "";

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} className="text-blue-500 hover:underline">
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: React.ComponentPropsWithoutRef<typeof Image>) {
  return <Image className="rounded-lg" {...props} />;
}

function Code({
  children,
  "data-language": lang = "c",
  "data-theme": theme = "github-dark-high-contrast",
  ...props
}: ComponentPropsWithoutRef<"code"> & {
  "data-language"?: string;
  "data-theme"?: string;
}) {
  const codeHTML = highlighter.codeToHtml(children as string, {
    lang,
    theme,
  });
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children?.toString() || "");
    const styles =
      {
        1: "text-4xl font-bold mb-6 mt-8 text-gray-200",
        2: "text-3xl font-semibold mb-4 mt-6 text-gray-200",
        3: "text-2xl font-medium mb-3 mt-5 text-gray-200",
        4: "text-xl font-medium mb-2 mt-4 text-gray-200",
        5: "text-lg font-medium mb-2 mt-3 text-gray-200",
        6: "text-base font-medium mb-2 mt-2 text-gray-200",
      }[level] || "";

    return React.createElement(
      `h${level}`,
      { id: slug, className: styles },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  table: Table,
  thead: TableHead,
  tr: TableRow,
  td: TableCell,
  th: TableHeader,
  p: (props: any) => <p {...props} className="text-gray-200 mb-4" />,
  ul: (props: any) => (
    <ul {...props} className="text-gray-200 list-disc pl-6 mb-4 space-y-2" />
  ),
  ol: (props: any) => (
    <ol {...props} className="text-gray-200 list-decimal pl-6 mb-4 space-y-2" />
  ),
  li: (props: any) => <li {...props} className="text-gray-200" />,
  strong: (props: any) => (
    <strong {...props} className="text-gray-200 font-bold" />
  ),
  em: (props: any) => <em {...props} className="text-gray-200 italic" />,
};

export function CustomMDX(
  props: React.ComponentPropsWithoutRef<typeof MDXRemote>,
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
