import { AlertType } from "../../types";
import { IModalsStore, TModalsAction } from "./types";

export enum ModalsActionsEnum {
  SHOW_LOADING = "SHOW_LOADING",
  SHOW_METAMASK_INFO = "SHOW_METAMASK_INFO",
  SHOW_ALERT = "SHOW_ALERT",
  SHOW_BASIC = "SHOW_BASIC",
}

export const modalsInitialState: IModalsStore = {
  loading: {
    open: false,
    title: "",
    text: [],
  },
  metamaskInfo: {
    open: false,
    title: "",
    text: "",
    message: "",
    content: null,
  },
  alert: {
    open: false,
    type: AlertType.INFO,
    message: [],
  },
  basic: {
    open: false,
    title: "",
    content: null,
  },
};

export const ModalsReducer = (
  state = modalsInitialState,
  action: TModalsAction
): IModalsStore => {
  switch (action.type) {
    case ModalsActionsEnum.SHOW_LOADING:
      return { ...state, loading: action.payload };
    case ModalsActionsEnum.SHOW_METAMASK_INFO:
      return { ...state, metamaskInfo: action.payload };
    case ModalsActionsEnum.SHOW_ALERT:
      return { ...state, alert: action.payload };
    case ModalsActionsEnum.SHOW_BASIC:
      return { ...state, basic: action.payload };
  }
};
