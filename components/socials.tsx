import Link from "next/link";

import {
  TwitterIcon,
  GithubIcon,
  TelegramIcon,
  DiscordIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import clsx from "clsx";

export interface SocialsProps {
  background: "light" | "dark";
}

export const Socials = ({ background }: SocialsProps) => {
  return (
    <div className="flex gap-4">
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        aria-label="Twitter"
      >
        <TwitterIcon
          className={clsx(
            "transition ease-in-out duration-300",
            background === "dark"
              ? "text-white hover:text-neutral"
              : "hover:text-primary"
          )}
        />
      </Link>
      <Link
        href={siteConfig.links.discord}
        target="_blank"
        aria-label="Discord"
      >
        <DiscordIcon
          className={clsx(
            "transition ease-in-out duration-300",
            background === "dark"
              ? "text-white hover:text-neutral"
              : "hover:text-primary"
          )}
        />
      </Link>
      <Link href={siteConfig.links.github} target="_blank" aria-label="Github">
        <GithubIcon
          className={clsx(
            "transition ease-in-out duration-300",
            background === "dark"
              ? "text-white hover:text-neutral"
              : "hover:text-primary"
          )}
        />
      </Link>
      <Link
        href={siteConfig.links.telegram}
        target="_blank"
        aria-label="Telegram"
      >
        <TelegramIcon
          className={clsx(
            "transition ease-in-out duration-300",
            background === "dark"
              ? "text-white hover:text-neutral"
              : "hover:text-primary"
          )}
        />
      </Link>
    </div>
  );
};
