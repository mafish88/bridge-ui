import clsx from "clsx";
import React from "react";

export type ButtonColorVariant =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "neutral"
  | "base";
export type ButtonSizeVariant = "sm" | "md" | "lg";
export type ButtonRadiusVariant = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (value?: any) => void;
  size?: ButtonSizeVariant;
  radius?: ButtonRadiusVariant;
  color?: ButtonColorVariant;
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  outline?: boolean;
  icon?: React.ReactNode;
}

const sizeClasses = {
  sm: "px-1 w-auto min-w-[100px]",
  md: "px-3 w-auto min-w-[200px]",
  lg: "px-5 w-auto sm:min-w-[300px]",
};

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
  size = "md",
  radius = "md",
  color,
  className = "",
  type = "button",
  disabled = false,
  outline = false,
  icon,
}) => {
  const sizeClass = sizeClasses[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `btn rounded-${radius} font-semibold ${
          outline ? "btn-outline" : ""
        }`,
        color && `${colorClasses[color]} ${textColorClasses[color]}`,
        outline && 'btn-outline',
        className,
        sizeClass,
      )}
      type={type}
    >
      <div className="flex items-center flex-row gap-4">{children}</div>
      {icon}
    </button>
  );
};

export default Button;
