"use client";
import { usePathname } from "next/navigation";
import { SpaInfoCard } from "@/components/SpaInfoCard";
import { FormProvider, useForm } from "react-hook-form";
import logo from "@/assets/logo.png";
import { SpaCenter } from "@/types";
import clsx from "clsx";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isConfirmationPage = pathname === "/confirmation";

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reasonForVisit: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      billingZipCode: "",
      cancelationPolicy: false,
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="text-dark flex flex-col gap-4 items-center justify-center lg:justify-start bg-gray-20 p-4 lg:py-15 lg:px-30 min-h-screen">
        <h1 className="text-lg font-bold lg:hidden">Book appointment</h1>
        <div
          className={clsx("flex w-full max-w-6xl gap-4 md:gap-8", {
            "flex-col lg:flex-row md:items-center lg:items-start justify-between":
              !isConfirmationPage,
            "flex-col-reverse max-w-xl": isConfirmationPage,
          })}
        >
          <div
            className={clsx("w-full", {
              "lg:max-w-md": !isConfirmationPage,
            })}
          >
            <SpaInfoCard spaCenter={mockSpaCenter} />
          </div>
          <div
            className={clsx("w-full", {
              "pb-26": !isConfirmationPage,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

const mockSpaCenter: SpaCenter = {
  name: "Gold Spa",
  email: "goldspa@gmail.com",
  phone: "123-456-7890",
  logoUrl: logo.src,
  address: {
    streetAddress: "2525 Camino del Rio S",
    suite: "Suite 315",
    room: "Room 8",
    city: "San Diego",
    zipCode: "92108",
    stateCode: "CA",
  },
};
