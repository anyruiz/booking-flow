"use client";
import { useFormContext } from "react-hook-form";
import successIcon from "@/assets/success-icon.svg";
import Image from "next/image";
import { useEffect } from "react";

export default function Confirmation() {
  const { getValues } = useFormContext();
  const data = getValues();

  // We need this to not cause a hydration error
  useEffect(() => {
    console.log("Booking data", data);
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-30 py-10 px-15 flex flex-col items-center justify-center gap-4 w-full">
      <Image src={successIcon} alt="Success" priority />
      <h2 className="text-lg font-bold text-description text-center">
        Your appointment has been booked!
      </h2>
      <p className="text-center">
        A confirmation has been sent to your email address.
      </p>
    </div>
  );
}
