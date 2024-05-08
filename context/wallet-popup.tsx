import { ethers } from "ethers";
import React, { useState, useContext, createContext } from "react";
import { useConnection } from "../hooks/useConnection";
import { MetamaskInfo } from "../components/modals";
import { networks } from "../types/networks";
import { ModalsActionsEnum, useModalsDispatch } from "./modal";
import { TMetamaskInfo } from "./modal/types";
import Button from "../components/ui/button";
import { CheckIcon, CloseIcon } from "../components/ui/icons";

export enum WalletPopupState {
  DEFAULT = "default",
  ACTION = "action",
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}

type AsyncCallbackType = (
  ...args: any[]
) => Promise<ethers.providers.TransactionResponse>;

type Context = {
  state: WalletPopupState;
  modal: TMetamaskInfo;
  asyncCallback: (
    callback: AsyncCallbackType,
    onSuccess?: () => void
  ) => Promise<void>;
};

const initialState: Context = {
  state: WalletPopupState.DEFAULT,
  modal: {
    open: false,
    title: "",
    text: "",
    message: "",
    content: null,
  },
  asyncCallback: async (callback) => {
    try {
      await callback();
      return;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  },
};

const WalletPopupContext = createContext<Context>(initialState);

const useProvideWalletPopup = () => {
  const [state, setState] = useState<WalletPopupState>(
    WalletPopupState.DEFAULT
  );
  const dispatchModals = useModalsDispatch();
  const [modal, setModal] = useState<TMetamaskInfo>({
    open: false,
    title: "",
    text: "",
    message: "",
    content: null,
  });
  const { chainId } = useConnection();

  const handleClose = () => {
    dispatchModals({
      type: ModalsActionsEnum.SHOW_METAMASK_INFO,
      payload: {
        open: false,
        title: "",
        text: "",
        message: "",
        content: null,
      },
    });
  };

  const changeState = (
    state: WalletPopupState,
    title?: string,
    message?: string
  ): void => {
    setState(state);
    let modalTitle: string;
    let modalContent: JSX.Element | null;
    switch (state) {
      case WalletPopupState.ACTION:
        modalTitle = title || "Metamask action required";
        modalContent = (
          <div className="delegateNodeModalSuccess">
            <h2 className="text-xl">{message || "Action required"}</h2>
            <div className="walletSVG">
              <MetamaskInfo />
            </div>
            <p className="text-success" style={{ wordBreak: "break-word" }}>
              Please check your Wallet!
            </p>
          </div>
        );
        break;
      case WalletPopupState.LOADING:
        modalTitle = title || "Loading";
        modalContent = (
          <div className="delegateNodeModalSuccess">
            <h2 className="text-xl text-danger">
              {message || "Waiting for confirmation"}
            </h2>
            <span className="loading loading-bars loading-md"></span>
            <p className="text-success" style={{ wordBreak: "break-word" }}>
              Please wait until the action is performed
            </p>
          </div>
        );
        break;
      case WalletPopupState.ERROR:
        modalTitle = title || "Error";
        modalContent = (
          <div className="">
            <p className="text-danger">{title || "Error"}</p>
            <div className="successIcon">
              <CloseIcon />
            </div>
            <p className="successText" style={{ wordBreak: "break-all" }}>
              {message || "An error occurred"}
            </p>
            <Button type="button" fullWidth onClick={handleClose}>
              Close
            </Button>
          </div>
        );
        break;
      case WalletPopupState.SUCCESS:
        modalTitle = title || "Success";
        modalContent = (
          <div className="">
            <p className="text-success">{title || "Success"}</p>
            <div className="successIcon">
              <CheckIcon />
            </div>
            <p className="successText">Action performed successfully</p>
            {chainId && message && (
              <>
                <p>You can view the transaction here:</p>
                <a
                  href={`${networks[chainId].blockExplorerUrl}/tx/${message}`}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <p style={{ wordBreak: "break-all" }}>{message}</p>
                </a>
              </>
            )}
            <Button
              type="button"
              color="secondary"
              fullWidth
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        );
        break;
      default:
        modalTitle = "";
        modalContent = null;
    }

    dispatchModals({
      type: ModalsActionsEnum.SHOW_METAMASK_INFO,
      payload: {
        open: state !== WalletPopupState.DEFAULT,
        title: modalTitle,
        text: "",
        message: "",
        content: modalContent,
      },
    });
  };

  const asyncCallback = async (
    callback: AsyncCallbackType,
    onSuccess?: () => void
  ) => {
    if (typeof callback !== "function") return;
    changeState(WalletPopupState.ACTION);
    try {
      const res = await callback();
      changeState(WalletPopupState.LOADING);
      const tx = await res.wait();
      changeState(WalletPopupState.SUCCESS, "", tx?.transactionHash);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error("Error:", error);
      changeState(WalletPopupState.ERROR, "Error", `${error.message}`);
    }
    if (typeof onSuccess === "function") {
      onSuccess();
    }
  };

  return {
    state,
    modal,
    handleClose,
    asyncCallback,
  };
};

export const WalletPopupProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useProvideWalletPopup();
  return (
    <WalletPopupContext.Provider value={value}>
      {children}
    </WalletPopupContext.Provider>
  );
};

export const useWalletPopup = () => {
  return useContext(WalletPopupContext);
};
