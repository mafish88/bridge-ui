import { LoadingModal } from "./loading";
import { MetamaskInfo } from "./metamask-info";
import { Basic } from "./basic";
import { Alert } from ".";

export const ModalsCenter = () => {
  return (
    <>
      <LoadingModal />
      <MetamaskInfo />
      <Basic />
      <Alert />
    </>
  );
};
