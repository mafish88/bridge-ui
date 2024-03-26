import Link from "next/link";
import Image from "next/image";
import { DarkMode } from "./dark-mode";
import { Wallet } from "./wallet";
import { TaraxaIcon } from "./ui/icons";

export const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="mx-auto container max-w-10xl px- sm:px-6 lg:px-8">
        <div className="relative flex h-[60px] items-center justify-between">
          <div className="flex items-center justify-start">
            <Link
              href="/"
              className="bg-neutral border border-gray-900 rounded-lg p-3 flex justify-center content-center no-underline"
            >
              <div className="flex flex-shrink-0 items-center gap-3">
                <TaraxaIcon />
              </div>
            </Link>
          </div>
          <div className="flex gap-4">
            <Wallet showWalletConnected />
            <DarkMode />
          </div>
        </div>
      </div>
    </nav>
  );
};
