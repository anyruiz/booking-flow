"use client";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary";
  fullWidth?: boolean;
};

export const Button = ({
  label,
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-violet-90 py-4 px-9 rounded-2xl border-1.5 font-semibold text-base cursor-pointer",
        {
          "bg-violet-90 text-white": variant === "primary",
          "w-full": fullWidth,
          "w-full md:w-fit": !fullWidth,
        }
      )}
    >
      {label}
    </button>
  );
};
