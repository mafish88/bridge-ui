import clsx from "clsx";
import React from "react";

export type ButtonColorVariant =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "neutral"
  | "base";
export type ButtonSizeVariant = "xs" | "sm" | "lg";
export type ButtonRadiusVariant =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (value?: any) => void;
  size?: ButtonSizeVariant;
  radius?: ButtonRadiusVariant;
  color?: ButtonColorVariant;
  fullWidth?: boolean;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  outline?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const colorClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  warning: "btn-warning",
  neutral: "btn-neutral",
  danger: "btn-error",
  base: "btn-base",
};

const textColorClasses = {
  primary: "text-white",
  secondary: "text-white",
  warning: "text-gray-900",
  neutral: "text-white",
  danger: "text-white",
  base: "text-base",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size,
  radius = "md",
  color,
  fullWidth = false,
  type = "button",
  disabled = false,
  outline = false,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `btn rounded-${radius} font-semibold ${outline ? "btn-outline" : ""}`,
        color && `${colorClasses[color]} ${textColorClasses[color]}`,
        outline && "btn-outline",
        fullWidth ? "flex-1 w-full" : "",
        size && `btn-${size}`,
        disabled && "btn-disabled"
      )}
      type={type}
    >
      <div className="flex items-center flex-row gap-4">{children}</div>
      {icon}
    </button>
  );
};

export default Button;
