"use client";
import { SpaInfoCard } from "@/components/SpaInfoCard";
import { FormProvider, useForm } from "react-hook-form";
import logo from "@/assets/logo.png";
import { SpaCenter } from "@/types";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <div className="flex flex-col gap-4 items-center justify-center lg:justify-start bg-gray-20 p-4 lg:py-15 lg:px-30 min-h-screen">
        <h1 className="text-lg font-bold lg:hidden">Book appointment</h1>
        <div className="w-full flex max-w-6xl">
          <div className="flex flex-col gap-4 lg:flex-row md:items-center lg:items-start justify-between w-full">
            <SpaInfoCard spaCenter={mockSpaCenter} />
            <div className="w-full pb-26">{children}</div>
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
