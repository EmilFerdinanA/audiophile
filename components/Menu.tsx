import clsx from "clsx";
import { useMenu } from "@/Context/MenuContext";
import { Category } from "./Category";
import { useEffect, useRef } from "react";

export const Menu = () => {
  const { isOpen } = useMenu();
  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const resetScroll = () => {
      if (menuRef.current) menuRef.current.scrollTop = 0;
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    resetScroll();

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section
      ref={menuRef}
      className={clsx(
        "fixed bg-black/60 top-24 inset-0 h-[calc(100dvh-6rem)] z-40 overflow-y-auto lg:hidden pb-32",
        !isOpen && "hidden"
      )}
    >
      <div className="rounded-b-lg bg-white pt-24 md:pt-28 pb-9 md:pb-16 base-p mx-auto">
        <Category />
      </div>
    </section>
  );
};
