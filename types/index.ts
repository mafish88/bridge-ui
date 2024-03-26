import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const laraAddress: string =
  `${process.env.NEXT_PUBLIC_LARA_ADDRESS}` ||
  "0x352AF15174C6415A3e33970636F2019337a60C45";

export const stTaraAddress: string =
  `${process.env.NEXT_PUBLIC_ST_TARA_ADDRESS}` ||
  "0xD312eDC59c8AAB3FC9e44773EAD796a445aED09E";
