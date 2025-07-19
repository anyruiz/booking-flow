import { SpaInfoCard } from "@/components/SpaInfoCard";
import logo from "@/assets/logo.png";
import { SpaCenter } from "@/types";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-4">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <h1 className="text-lg font-bold">Book appointment</h1>
        <SpaInfoCard spaCenter={mockSpaCenter} />
      </main>
    </div>
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
