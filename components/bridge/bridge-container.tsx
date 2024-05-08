"use client";

import { BridgeClaimToggle } from "../bridge-claim-toggle";
import { bridgeFaq } from "@/types/faqs";
import { Faq } from "../faq";
import { BridgeCard } from "./bridge-card";
import { ClaimCard } from "./claim-card";
import {
  BridgeClaimTypeToggle,
  useBridgeNetwork,
} from "../../context/bridge-network";

export const BridgeContainer = () => {
  const { toggleValue, setToggleValue } = useBridgeNetwork();
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full flex items-center justify-center">
        <BridgeClaimToggle
          defaultValue={toggleValue}
          onChange={setToggleValue}
          name="bridge-claim-toggle"
        />
      </div>
      <div className="flex flex-col gap-20 w-full lg:w-[550px]">
        {toggleValue === BridgeClaimTypeToggle.BRIDGE && <BridgeCard />}
        {toggleValue === BridgeClaimTypeToggle.CLAIM && <ClaimCard />}
        <Faq items={bridgeFaq} />
      </div>
    </div>
  );
};
