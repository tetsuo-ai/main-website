import Link from "next/link";
import { Discord } from "@/components/icons/discord";
import { Twitter } from "@/components/icons/twitter";
import { Dexscreener } from "@/components/icons/dexscreener";
import { Telegram } from "@/components/icons/telegram";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container">
        <div className="flex flex-col gap-4">
          <p className="text-red-500">© 2025 Tetsuo.ai. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Link
              href="https://discord.com/invite/tetsuo-ai"
              className="text-gray-200 transition-colors hover:text-gray-400"
            >
              <Discord className="h-5 w-5 " />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://x.com/7etsuo"
              className="text-gray-200 transition-colors hover:text-gray-400"
            >
              <Twitter className="h-5 w-5 " />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://t.me/tetsuo_ai"
              className="text-gray-200 transition-colors hover:text-gray-400"
            >
              <Telegram className="h-5 w-5 " />
              <span className="sr-only">Telegram</span>
            </Link>
            <Link
              href="https://dexscreener.com/solana/8i51XNNpGaKaj4G4nDdmQh95v4FKAxw8mhtaRoKd9tE8"
              className="text-gray-200 transition-colors hover:text-gray-400"
            >
              <Dexscreener className="h-5 w-5 " />
              <span className="sr-only">Dexscreener</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
