"use client";

import dynamic from "next/dynamic";

import { components } from "react-select";
import Image from "next/image";

const colors = {
  inputTextColor: "#f7f7f7",
  dropdownBackground: "#1e2329",
  optionColor: "#f7f7f7",
  selectedOptionBackground: "rgb(28, 32, 38, 0.9)",
  borderColor: "#9c9c9c",
  selectedOptionColor: "#f2fbf9",
  focusBorderColor: "#666666",
};

const CustomOption: React.FC<any> = ({ data, ...props }) => (
  <components.Option {...props}>
    <div className="flex items-center gap-4 h-[30px]">
      <Image
        src={data.iconUrl}
        alt={data.chainName || data.name}
        height={30}
        width={data.isImageTall ? 20 : 30}
      />
      {data.chainName || data.symbol || data.name}
    </div>
  </components.Option>
);

const CustomSingleValue: React.FC<any> = ({ data, ...props }) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-4 h-[30px]">
      <Image
        src={data.iconUrl}
        alt={data.chainName || data.name}
        width={data.isImageTall ? 20 : 30}
        height={30}
      />
      {data.chainName || data.symbol || data.name}
    </div>
  </components.SingleValue>
);

const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <div className="skeleton h-[40px] w-full"></div>,
});

export const Select: React.FC<any> = (props) => (
  <ReactSelect
    styles={{
      control: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: "#1e2329",
        color: colors.inputTextColor,
        borderColor: isFocused ? colors.focusBorderColor : colors.borderColor,
        boxShadow: isFocused ? `0 0 0 1px ${colors.focusBorderColor}` : "none",
        "&:hover": {
          borderColor: isFocused ? colors.focusBorderColor : colors.borderColor,
        },
      }),
      option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        backgroundColor: isSelected
          ? colors.selectedOptionBackground
          : isFocused
          ? "#272e36"
          : colors.dropdownBackground,
        color: isSelected ? colors.selectedOptionColor : colors.optionColor,
        cursor: "pointer",
        ":active": {
          ...styles[":active"],
          backgroundColor: "rgb(22, 25, 30, 0.9)",
          color: colors.selectedOptionColor,
        },
      }),
      menu: (styles) => ({
        ...styles,
        backgroundColor: colors.dropdownBackground,
      }),
      clearIndicator: (styles, { isFocused }) => ({
        ...styles,
        color: isFocused ? "hoverColor" : "defaultColor",
        ":hover": {
          color: "hoverColor",
        },
        ":active": {
          color: "hoverColor",
        },
      }),
      dropdownIndicator: (styles, { isFocused }) => ({
        ...styles,
        color: isFocused ? "hoverColor" : "defaultColor",
        ":hover": {
          color: "hoverColor",
        },
        ":active": {
          color: "hoverColor",
        },
      }),
      input: (styles) => ({
        ...styles,
        color: colors.inputTextColor,
        padding: "0.5rem",
      }),
      singleValue: (styles) => ({
        ...styles,
        color: colors.selectedOptionColor,
      }),
    }}
    components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
    {...props}
  />
);
