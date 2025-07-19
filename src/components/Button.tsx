"use client";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary";
};

export const Button = ({
  label,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-violet-90 py-4 px-9 rounded-2xl border-1.5 w-full md:w-fit font-semibold text-base cursor-pointer",
        {
          "bg-violet-90 text-white": variant === "primary",
        }
      )}
    >
      {label}
    </button>
  );
};
