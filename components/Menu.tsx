import clsx from "clsx";
import { useMenu } from "@/Context/MenuContext";
import { Category } from "./Category";
import { useEffect } from "react";

export const Menu = () => {
  const { isOpen } = useMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    if (!isOpen) {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section
      className={clsx(
        "fixed bg-black/60 top-24 inset-0 h-[calc(100dvh-6rem)] z-40 overflow-y-auto lg:hidden",
        !isOpen && "hidden"
      )}
    >
      <div className="rounded-b-lg bg-white pt-24 md:pt-28 pb-9 md:pb-16 base-p mx-auto">
        <Category />
      </div>
    </section>
  );
};
