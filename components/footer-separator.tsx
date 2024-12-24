export default function FooterSeparator() {
  return (
    <div
      className="mx-auto mt-auto w-full max-w-6xl px-4 before:block before:border-t before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] sm:px-6"
      aria-hidden="true"
    ></div>
  );
}
