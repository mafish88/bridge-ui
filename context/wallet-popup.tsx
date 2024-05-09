import { ethers } from "ethers";
import React, { useState, useContext, createContext } from "react";
import { useConnection } from "../hooks/useConnection";
import { networks } from "../types/networks";
import { ModalsActionsEnum, useModalsDispatch } from "./modal";
import { ButtonColorVariant } from "../components/ui/button";
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
  asyncCallback: (
    callback: AsyncCallbackType,
    onSuccess?: () => void
  ) => Promise<void>;
};

const initialState: Context = {
  state: WalletPopupState.DEFAULT,
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

  const dispatchModal = (
    modalTitle: string,
    modalContent: JSX.Element | null,
    actionButtonColor: ButtonColorVariant | undefined
  ) => {
    dispatchModals({
      type: ModalsActionsEnum.SHOW_METAMASK_INFO,
      payload: {
        open: state !== WalletPopupState.DEFAULT,
        title: modalTitle,
        text: "",
        message: "",
        content: modalContent,
        actionButtonColor,
      },
    });
  };

  const changeState = (
    newState: WalletPopupState,
    title?: string,
    message?: string
  ) => {
    const modalTitle = getModalTitle(newState, title);
    const modalContent = getModalContent(newState, title, message);
    const actionButtonColor: ButtonColorVariant | undefined =
      newState === WalletPopupState.ERROR
        ? "danger"
        : newState === WalletPopupState.SUCCESS
        ? "primary"
        : undefined;
    setState(newState);
    dispatchModal(modalTitle, modalContent, actionButtonColor);
  };

  const getModalTitle = (state: WalletPopupState, title?: string): string => {
    if (title) {
      return title;
    }
    switch (state) {
      case WalletPopupState.ACTION:
        return "Metamask action required";
      case WalletPopupState.LOADING:
        return "Loading";
      case WalletPopupState.ERROR:
        return "Error";
      case WalletPopupState.SUCCESS:
        return "Success";
      default:
        return "Info";
    }
  };

  const getModalContent = (
    state: WalletPopupState,
    title?: string,
    message?: string
  ): JSX.Element | null => {
    switch (state) {
      case WalletPopupState.ACTION:
        return (
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <h2 className="text-xl">{message || "Action required"}</h2>
            <span className="loading loading-bars loading-lg"></span>
            <p className="text-success" style={{ wordBreak: "break-word" }}>
              Please check your Wallet!
            </p>
          </div>
        );
      case WalletPopupState.LOADING:
        return (
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <h2 className="text-xl">{message || "Waiting for confirmation"}</h2>
            <span className="loading loading-bars loading-lg"></span>
            <p className="text-success" style={{ wordBreak: "break-word" }}>
              Please wait until the action is performed
            </p>
          </div>
        );
      case WalletPopupState.ERROR:
        return (
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex gap-2">
              <CloseIcon className="text-error" />
              <h2 className="text-xl text-error">{title || "Error"}</h2>
            </div>
            <p className="text-error" style={{ wordBreak: "break-all" }}>
              {message || "An error occurred"}
            </p>
          </div>
        );
      case WalletPopupState.SUCCESS:
        return (
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex gap-2">
              <CheckIcon className="text-success" />
              <p className="text-xl text-primary">
                Action performed successfully
              </p>
            </div>
            {chainId && message && (
              <div className="flex flex-col gap-2">
                <p>You can view the transaction here:</p>
                <a
                  href={`${networks[chainId].blockExplorerUrl}/tx/${message}`}
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  <p
                    className="text-primary"
                    style={{ wordBreak: "break-all" }}
                  >
                    {message}
                  </p>
                </a>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const asyncCallback = async (
    callback: AsyncCallbackType,
    onSuccess?: () => void
  ) => {
    changeState(WalletPopupState.ACTION);
    try {
      const res = await callback();
      changeState(WalletPopupState.LOADING);
      const tx = await res.wait();
      changeState(WalletPopupState.SUCCESS, "", tx?.transactionHash);
      if (onSuccess) onSuccess();
    } catch (error: any) {
      console.error("Error:", error);
      changeState(WalletPopupState.ERROR, "Error", `${error.message}`);
    }
  };

  return {
    state,
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
