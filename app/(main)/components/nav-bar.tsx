"use client";

import Link from "next/link";
import { Discord } from "@/components/icons/discord";
import { Twitter } from "@/components/icons/twitter";
import { Dexscreener } from "@/components/icons/dexscreener";
import { Telegram } from "@/components/icons/telegram";

export function NavBar() {
  return (
    <div className="absolute top-0 right-0 z-50 p-4 md:p-6">
      <nav className="flex w-[350px] md:w-[480px] items-center rounded-full bg-gray-100/90 px-5 lg:px-8 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="https://raydium.io/swap/?inputMint=sol&outputMint=8i51XNNpGaKaj4G4nDdmQh95v4FKAxw8mhtaRoKd9tE8"
            className="text-base font-medium text-gray-900 transition-colors hover:text-gray-600"
          >
            Buy Token
          </Link>
          <Link
            href="/blog"
            className="text-base font-medium text-gray-900 transition-colors hover:text-gray-600"
          >
            Blog
          </Link>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="https://discord.com/invite/tetsuo-ai"
            className="text-gray-700 transition-colors hover:text-gray-500"
          >
            <Discord className="h-5 w-5 " />
            <span className="sr-only">Discord</span>
          </Link>
          <Link
            href="https://x.com/7etsuo"
            className="text-gray-700 transition-colors hover:text-gray-500"
          >
            <Twitter className="h-5 w-5 " />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://t.me/tetsuo_ai"
            className="text-gray-700 transition-colors hover:text-gray-500"
          >
            <Telegram className="h-5 w-5 " />
            <span className="sr-only">Telegram</span>
          </Link>
          <Link
            href="https://dexscreener.com/solana/8i51XNNpGaKaj4G4nDdmQh95v4FKAxw8mhtaRoKd9tE8"
            className="text-gray-700 transition-colors hover:text-gray-500"
          >
            <Dexscreener className="h-5 w-5 " />
            <span className="sr-only">Dexscreener</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
