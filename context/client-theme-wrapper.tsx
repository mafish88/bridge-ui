import { useThemeSwitch } from "./theme-switch";

export const ClientThemeWrapper = ({ children }: any) => {
  const { theme } = useThemeSwitch();
  return <div data-theme={theme}>{children}</div>;
};
