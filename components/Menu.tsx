import { Category } from "./Category";

export const Menu = () => {
  return (
    <section className="fixed bg-black/60 top-24 inset-x-0 h-screen z-40 lg:hidden">
      <div className="rounded-b-lg bg-white pt-24 md:pt-28 pb-9 md:pb-16 base-p mx-auto">
        <Category />
      </div>
    </section>
  );
};
