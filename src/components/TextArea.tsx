"use client";
import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  className?: never;
};

export const TextArea = ({
  label,
  placeholder,
  error,
  onChange,
  value,
  rows = 3,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 pb-2 relative">
      <label className="text-description" htmlFor={label}>
        {label}
      </label>
      <textarea
        id={label}
        placeholder={placeholder}
        className={clsx(
          "border-1.5 rounded-xl p-3 focus-visible:outline-none focus-visible:ring-1.5 placeholder:text-additional",
          {
            "border-gray-50 focus-visible:border-violet-90": !error,
            "border-red-600 focus-visible:ring-red-600": error,
          }
        )}
        onChange={onChange}
        value={value}
        rows={rows}
        {...props}
      />
      {error && (
        <p className="text-red-600 text-sm text-right absolute -bottom-4 right-0">
          {error}
        </p>
      )}
    </div>
  );
};
