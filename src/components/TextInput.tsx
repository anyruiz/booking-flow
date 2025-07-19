"use client";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  className?: never;
};

export const TextInput = ({
  label,
  type,
  placeholder,
  error,
  onChange,
  value,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5 box-border">
      <label className="text-description" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "border-1.5 rounded-xl p-3 focus:outline-none flex focus-visible:ring-1.5",
          {
            "border-gray-50 focus-visible:border-violet-90 focus-visible:ring-violet-90 hover:border-violet-90":
              !error,
            "border-red-600 focus-visible:border-red-600 focus-visible:ring-red-600 hover:border-red-600":
              error,
          }
        )}
        onChange={onChange}
        value={value}
        {...props}
      />
      {error && <p className="text-red-600 text-sm text-right">{error}</p>}
    </div>
  );
};
