export function BottomBar({ children }: { children: React.ReactNode }) {
  return (
    <nav
      role="group"
      aria-label="Booking flow actions"
      className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0px_4px_15px_0px_rgba(56,19,60,0.25)] w-full flex justify-center items-center "
    >
      <div className="max-w-6xl flex justify-end w-full">{children}</div>
    </nav>
  );
}
