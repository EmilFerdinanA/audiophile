// ScrollHeader.tsx (Client Component)
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const ScrollHeader = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${
        pathname === "/"
          ? isScrolled
            ? "bg-black fixed"
            : "absolute"
          : "sticky bg-black"
      } flex justify-center h-24 px-6 md:px-10 lg:px-40  top-0 w-full z-50`}
    >
      {children}
    </div>
  );
};
