import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export enum AlertType {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export type AddressType = `0x${string}`;
