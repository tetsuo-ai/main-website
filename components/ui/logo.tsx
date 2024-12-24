import logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Tetsuo Logo" width={32} height={32} />
    </Link>
  );
}
