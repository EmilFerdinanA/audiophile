"use client";
export const ScrollHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`sticky bg-[#191919] flex justify-center h-24 top-0 w-full z-50`}
    >
      {children}
    </div>
  );
};
