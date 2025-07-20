import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 w-screen bg-gray-20">
      <main className="flex flex-col gap-8 items-center w-full">
        <h1 className="text-4xl font-bold">Booking flow project</h1>
        <p>By Any Ruiz</p>
        <Link className="text-violet-90" href="/contact">
          Book appointment with <span className="font-bold">Gold Spa</span>
        </Link>
      </main>
    </div>
  );
}
