import { SpaCenter } from "@/types";
import Image from "next/image";

type InfoCardProps = {
  spaCenter: SpaCenter;
};

export const SpaInfoCard = ({ spaCenter }: InfoCardProps) => {
  const { name, address, email, phone, logoUrl } = spaCenter;
  return (
    <div className="bg-white rounded-xl border border-gray-30 p-4 flex flex-col gap-4 w-full min-w-xs">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full w-20 h-20 border border-gray-20 overflow-hidden">
          <Image
            src={logoUrl}
            alt=""
            width={768}
            height={591}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h2 className="text-lg font-bold">{name}</h2>
      </div>

      <ul className="flex flex-col gap-4">
        <li className="flex gap-4">
          <p className="text-additional max-w-20 w-full">Address</p>
          <p className="flex flex-col gap-1">
            <span>{address.streetAddress}</span>
            <span>
              {address.suite} {address.room}
            </span>
            <span>
              {address.city}, {address.stateCode} {address.zipCode}
            </span>
          </p>
        </li>
        <li className="flex gap-4">
          <p className="text-additional max-w-20 w-full">Email</p>
          <p className="text-violet-90">{email}</p>
        </li>
        <li className="flex gap-4">
          <p className="text-additional max-w-20 w-full">Phone</p>
          <p className="text-violet-90">{phone}</p>
        </li>
      </ul>
    </div>
  );
};
