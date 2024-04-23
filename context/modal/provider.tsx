import React, { createContext, FC, useContext, useReducer } from "react";
import { modalsInitialState, ModalsReducer } from "./reducer";
import { TModalsAction, IModalsStore } from "./types";

const dummyDispatch: React.Dispatch<TModalsAction> = () => {};
const ModalsStore = createContext<IModalsStore>(modalsInitialState);
const ModalsDispatch =
  createContext<React.Dispatch<TModalsAction>>(dummyDispatch);

type ModalsProviderProps = {
  children: React.ReactNode;
};

export const ModalsProvider: FC<ModalsProviderProps> = ({
  children,
}: ModalsProviderProps) => {
  const [state, dispatch] = useReducer(ModalsReducer, modalsInitialState);
  return (
    <ModalsStore.Provider value={state}>
      <ModalsDispatch.Provider value={dispatch}>
        {children}
      </ModalsDispatch.Provider>
    </ModalsStore.Provider>
  );
};

export const useModalsStore = () => {
  return useContext(ModalsStore);
};

export const useModalsDispatch = () => {
  return useContext(ModalsDispatch);
};
