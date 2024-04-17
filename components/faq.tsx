"use client";

import { useThemeSwitch } from "@/context/theme-switch";
import clsx from "clsx";
import { useState } from "react";
import { AccordionItem } from "../types/faqs";

type FaqItemProps = {
  items: AccordionItem[];
};

export const Faq = ({ items }: FaqItemProps) => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const { theme } = useThemeSwitch();

  return (
    <div className="flex flex-col w-full gap-4">
      <h2 className="text-xl font-semibold">FAQ</h2>
      <div className="flex flex-col gap-2">
        {items?.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "collapse collapse-arrow shadow",
              theme === "dark" && "bg-neutral text-neutral-content"
            )}
          >
            <input
              type="radio"
              name="my-accordion-2"
              checked={openItem === index}
              onChange={() => setOpenItem(openItem === index ? null : index)}
            />
            <div className="collapse-title text-md font-medium">
              {item.title}
            </div>
            <div className="collapse-content text-sm">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
