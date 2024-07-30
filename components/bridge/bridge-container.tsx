"use client";

import { BridgeToggle } from "../bridge-toggle";
import { bridgeFaq } from "@/types/faqs";
import { Faq } from "../faq";
import { BridgeCard } from "./bridge-card";
import { HistoryCard } from "./history-card";

import {
  BridgeToggleType,
  useBridgeNetwork,
} from "../../context/bridge-network";

export const BridgeContainer = () => {
  const { toggleValue, setToggleValue } = useBridgeNetwork();
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full flex items-center justify-center">
        <BridgeToggle
          defaultValue={toggleValue}
          onChange={setToggleValue}
          name="bridge-history-toggle"
        />
      </div>
      <div className="flex flex-col gap-20 w-full">
        {toggleValue === BridgeToggleType.BRIDGE && <BridgeCard />}
        {toggleValue === BridgeToggleType.HISTORY && <HistoryCard />}
        <Faq items={bridgeFaq} />
      </div>
    </div>
  );
};
