import { SeeProductButton } from "./SeeProduct";

export default function ZX7() {
  return (
    <section className="containers !justify-start background-zx7 h-80 rounded-lg my-6">
      <div className="flex flex-col gap-8 px-6 md:px-16">
        <h1 className="font-bold text-3xl">ZX7 SPEAKER</h1>
        <SeeProductButton variant="secondary" />
      </div>
    </section>
  );
}
